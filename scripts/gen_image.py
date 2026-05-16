#!/usr/bin/env python3
"""Generate article cover image via OpenRouter Nano Banana 2."""
import json, requests, base64, re, os, sys

slug = "vpn-za-rubli-2026-kak-oplatit-kartoy-mir-i-sbp"
title = "VPN за рубли в 2026: как оплатить картой МИР, СБП и криптовалютой"
description = "Полный гайд по оплате VPN российскими рублями. Какие сервисы принимают карты МИР, СБП, ЮMoney и криптовалюту."

api_key = os.environ.get("OPENROUTER_API_KEY", "")
if not api_key:
    print("ERROR: No OpenRouter API key")
    sys.exit(1)

prompt = f"""Create a professional, high-quality blog article cover image for: {title}.
Description: {description}.
Style: modern, clean, technology-themed, dark blue and teal color scheme,
suitable for a VPN/finance blog header showing Russian ruble payment methods.
Use abstract geometric shapes with Russian ruble symbol (R) motif, network patterns,
and lock icons. Dark theme, 16:9, minimalist. NO text overlay on the image."""

print("Generating image via OpenRouter Nano Banana 2...")
resp = requests.post(
    "https://openrouter.ai/api/v1/chat/completions",
    headers={
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json"
    },
    json={
        "model": "google/gemini-3.1-flash-image-preview",
        "messages": [{"role": "user", "content": [{"type": "text", "text": prompt}]}],
        "modalities": ["image", "text"]
    },
    timeout=120
)

print(f"Response status: {resp.status_code}")

if resp.status_code != 200:
    print(f"ERROR: {resp.text[:500]}")
    sys.exit(1)

data = resp.json()
msg = data["choices"][0]["message"]
print(f"Response keys: {list(msg.keys()) if isinstance(msg, dict) else type(msg)}")

image_url = None

# Variant A: message.images array
if isinstance(msg, dict):
    if msg.get("images"):
        img = msg["images"][0]
        print(f"Images variant A found: type={type(img)}")
        if isinstance(img, dict):
            if "image_url" in img:
                image_url = img["image_url"].get("url", "")
        elif isinstance(img, str):
            image_url = img

    # Variant B: message.content list with image_url type
    if not image_url and isinstance(msg.get("content"), list):
        for part in msg["content"]:
            if isinstance(part, dict) and part.get("type") == "image_url":
                image_url = part["image_url"].get("url", "")
                if image_url:
                    print("Variant B: found image_url in content")
                    break

    # Variant C: Markdown URL in content string
    if not image_url and isinstance(msg.get("content"), str):
        m = re.search(r'https?://[^\s\)"\']+\.(png|jpg|jpeg|webp)', msg["content"])
        if m:
            image_url = m.group(0)
            print(f"Variant C: found URL in content")

    if not image_url:
        if isinstance(msg.get("content"), str):
            m = re.search(r'(data:image/[^;]+;base64[^"]+)', msg["content"])
            if m:
                image_url = m.group(1)
                print("Variant C: found base64 in content")

if not image_url:
    print(f"Could not extract image URL. Full response:")
    print(json.dumps(data, indent=2, ensure_ascii=False)[:1000])
    sys.exit(1)

print(f"Image URL type: {'base64' if image_url.startswith('data:image') else 'URL'}")
print(f"Image URL length: {len(image_url)}")

output_dir = "public/articles/images"
os.makedirs(output_dir, exist_ok=True)
output_path = f"{output_dir}/{slug}.jpg"

if image_url.startswith("data:image"):
    b64_data = image_url.split(",", 1)[1] if "," in image_url else image_url
    with open(output_path, "wb") as f:
        f.write(base64.b64decode(b64_data))
    print(f"Image saved (base64): {output_path}")
else:
    print(f"Downloading from URL...")
    img_resp = requests.get(image_url, timeout=60)
    if img_resp.status_code == 200:
        with open(output_path, "wb") as f:
            f.write(img_resp.content)
        print(f"Image saved (URL download): {output_path}")
    else:
        print(f"Download failed: {img_resp.status_code}")
        sys.exit(1)

file_size = os.path.getsize(output_path)
print(f"✅ Image verified: {output_path} ({file_size} bytes)")
