#!/bin/bash
# Скрипт для генерации изображений статей через OpenRouter (google/gemini-3.1-flash-image-preview)
# Запускать: cd /opt/nemo-blog && bash scripts/generate-article-images.sh

set -e

ARTICLES_DIR="articles"
IMAGES_DIR="public/articles/images"
OPENROUTER_KEY="${OPENROUTER_API_KEY}"

if [ -z "$OPENROUTER_KEY" ]; then
    echo "❌ OPENROUTER_API_KEY не задан"
    echo "   export OPENROUTER_API_KEY='sk-or-...'"
    exit 1
fi

mkdir -p "$IMAGES_DIR"

# Создаём временный Python скрипт для генерации
python3 - "$OPENROUTER_KEY" "$ARTICLES_DIR" "$IMAGES_DIR" << 'PYEOF'
import os, sys, json, re, time, base64, subprocess

OPENROUTER_KEY = sys.argv[1]
ARTICLES_DIR = sys.argv[2]
IMAGES_DIR = sys.argv[3]

API_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL = "google/gemini-3.1-flash-image-preview"

def call_openrouter(prompt):
    """Генерирует изображение через OpenRouter API."""
    payload = {
        "model": MODEL,
        "messages": [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt}
                ]
            }
        ],
        "modalities": ["image"]
    }
    
    headers = {
        "Authorization": f"Bearer {OPENROUTER_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://nemo-blog.vercel.app",
        "X-Title": "NEMO Blog"
    }
    
    # Пишем в файл для отладки
    import urllib.request
    
    req = urllib.request.Request(
        API_URL,
        data=json.dumps(payload).encode(),
        headers=headers,
        method="POST"
    )
    
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.loads(resp.read().decode())
                
                if "choices" not in data or not data["choices"]:
                    print(f"  ⚠️  Нет choices в ответе")
                    return None
                
                msg = data["choices"][0].get("message", {})
                
                # Вариант 1: images поле
                if msg.get("images"):
                    img_data = msg["images"][0]
                    if isinstance(img_data, dict) and "image_url" in img_data:
                        url = img_data["image_url"].get("url", "")
                        if url: return url
                    elif isinstance(img_data, str):
                        if img_data.startswith("data:"):
                            return img_data  # base64
                        return img_data
                
                # Вариант 2: content с URL
                content = msg.get("content", "")
                if isinstance(content, list):
                    for part in content:
                        if isinstance(part, dict) and part.get("type") == "image_url":
                            url_obj = part.get("image_url", {})
                            if isinstance(url_obj, dict):
                                return url_obj.get("url", "")
                
                if isinstance(content, str):
                    # Ищем URL в markdown
                    import re
                    m = re.search(r'https?://[^\s\)"\']+\.(png|jpg|jpeg|webp)[^\s\)"\']*', content)
                    if m:
                        return m.group(0)
                    m = re.search(r'https?://[^\s\)"\']+', content)
                    if m:
                        return m.group(0)
                
                print(f"  ⚠️  Не удалось извлечь URL из ответа")
                return None
                
        except Exception as e:
            print(f"  ⚠️  Попытка {attempt+1}: {e}")
            if attempt < 2:
                time.sleep(2)
    
    return None


def download_image(url, output_path):
    """Скачивает изображение по URL или base64 и сохраняет в файл."""
    try:
        if url.startswith("data:image"):
            # Base64 encoded
            _, b64data = url.split(",", 1)
            img_bytes = base64.b64decode(b64data)
        else:
            import urllib.request
            req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
            with urllib.request.urlopen(req, timeout=60) as resp:
                img_bytes = resp.read()
        
        with open(output_path, "wb") as f:
            f.write(img_bytes)
        
        size_kb = len(img_bytes) / 1024
        print(f"  ✅ Сохранено: {output_path} ({size_kb:.1f} KB)")
        return True
    except Exception as e:
        print(f"  ❌ Ошибка скачивания: {e}")
        return False


def get_article_slugs_and_context(articles_dir):
    """Читает все markdown статьи и возвращает slug + контекст."""
    result = []
    for f in sorted(os.listdir(articles_dir)):
        if not f.endswith(".md"):
            continue
        
        slug = f.replace(".md", "")
        filepath = os.path.join(articles_dir, f)
        
        with open(filepath, "r") as fh:
            content = fh.read()
        
        # Парсим frontmatter
        fm_match = re.match(r'^---\s*\n(.*?)\n---\s*\n(.*)', content, re.DOTALL)
        if not fm_match:
            continue
        
        fm_text = fm_match.group(1)
        body = fm_match.group(2).strip()
        
        # Извлекаем поля
        title = ""
        description = ""
        image = ""
        for line in fm_text.split("\n"):
            if line.startswith("title:"):
                title = line.split(":", 1)[1].strip().strip('"').strip("'")
            elif line.startswith("description:"):
                description = line.split(":", 1)[1].strip().strip('"').strip("'")
            elif line.startswith("image:"):
                image = line.split(":", 1)[1].strip().strip('"').strip("'")
        
        result.append({
            "slug": slug,
            "filepath": filepath,
            "frontmatter": fm_text,
            "title": title,
            "description": description,
            "image": image,
            "body": body[:500],  # Первые 500 символов для контекста
        })
    
    return result


def needs_new_image(image_path):
    """Проверяет, нужно ли генерировать новое изображение."""
    if not image_path:
        return True
    if image_path == "/logo.jpg":
        return True  # Заменить заглушку
    if "images/" in image_path and not image_path.startswith("/articles/images/"):
        return False  # Уже есть нормальное изображение
    return True


def update_frontmatter(filepath, new_image):
    """Обновляет поле image в frontmatter статьи."""
    with open(filepath, "r") as f:
        content = f.read()
    
    # Заменяем существующее image поле или добавляем
    if re.search(r'^image:\s*', content, re.MULTILINE):
        content = re.sub(
            r'^image:\s*".*?"',
            f'image: "{new_image}"',
            content,
            count=1,
            flags=re.MULTILINE
        )
    else:
        # Добавляем после title или description
        content = re.sub(
            r'^(description:.*?)$',
            f'\\1\nimage: "{new_image}"',
            content,
            count=1,
            flags=re.MULTILINE
        )
    
    with open(filepath, "w") as f:
        f.write(content)
    print(f"  ✏️  Frontmatter обновлён: {filepath}")


# Основной процесс
articles = get_article_slugs_and_context(ARTICLES_DIR)
total = len(articles)
generated = 0
skipped = 0

print(f"\n📝 Найдено статей: {total}\n")

for i, article in enumerate(articles, 1):
    slug = article["slug"]
    output_path = os.path.join(IMAGES_DIR, f"{slug}.jpg")
    expected_path = f"/articles/images/{slug}.jpg"
    
    print(f"[{i}/{total}] {slug}")
    
    # Пропускаем если уже есть изображение (не заглушка)
    if article["image"] and not needs_new_image(article["image"]):
        print(f"  ➡️  Пропущен (уже есть: {article['image']})")
        skipped += 1
        continue
    
    if os.path.exists(output_path):
        print(f"  ➡️  Файл уже существует, обновляю frontmatter")
        if article["image"] != expected_path:
            update_frontmatter(article["filepath"], expected_path)
        skipped += 1
        continue
    
    # Формируем промпт
    if article["description"]:
        prompt_text = article["description"]
    elif article["title"]:
        prompt_text = article["title"]
    else:
        prompt_text = article["body"][:200]
    
    # Промпт для генерации
    image_prompt = (
        f"Create a professional, high-quality blog article cover image for: {article['title']}. "
        f"Description: {prompt_text}. "
        f"Style: modern, clean, technology-themed, dark blue and teal color scheme, "
        f"suitable for a VPN/cybersecurity blog header. "
        f"Use abstract geometric shapes, network/wave patterns. "
        f"No text overlay needed. Aspect ratio 16:9. "
        f"Minimalist, professional design."
    )
    
    print(f"  🎨 Генерирую изображение...")
    
    url = call_openrouter(image_prompt)
    if not url:
        print(f"  ❌ Не удалось сгенерировать")
        continue
    
    if download_image(url, output_path):
        update_frontmatter(article["filepath"], expected_path)
        generated += 1
    
    # Небольшая задержка между запросами
    if i < total:
        time.sleep(1)

print(f"\n✅ Готово!")
print(f"   Сгенерировано: {generated}")
print(f"   Пропущено: {skipped}")
print(f"   Всего: {total}")
PYEOF
