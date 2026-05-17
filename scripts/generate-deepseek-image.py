#!/usr/bin/env python3
"""Generate cover image for DeepSeek article using OpenRouter Nano Banana 2."""
import json
import base64
import re
import urllib.request
import os
import sys

SLUG = "deepseek-v-rossii-2026-dostup-blokirovki-sravnenie-chatgpt-claude-gemini"
OUTPUT_PATH = f"/opt/nemo-blog/public/articles/images/{SLUG}.jpg"

# Get API key from environment
API_KEY = os.environ.get("OPENROUTER_API_KEY")
if not API_KEY:
    print("ERROR: OPENROUTER_API_KEY not set")
    sys.exit(1)

print(f"[1/5] Calling OpenRouter Nano Banana 2...")

payload = {
    "model": "google/gemini-3.1-flash-image-preview",
    "messages": [
        {
            "role": "user",
            "content": [
                {
                    "type": "text",
                    "text": "Blog cover: DeepSeek AI in Russia 2026 — access via VPN, comparison with ChatGPT and Claude. "
                             "Dark theme, deep blue and teal color scheme, 16:9 aspect ratio, VPN/cybersecurity style. "
                             "Abstract digital network, AI brain, data streams between China and Russia. "
                             "Minimalistic tech, high-end professional design. NO text on image, no watermarks."
                }
            ]
        }
    ],
    "modalities": ["image", "text"]
}

req = urllib.request.Request(
    "https://openrouter.ai/api/v1/chat/completions",
    data=json.dumps(payload).encode(),
    headers={
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json",
        "HTTP-Referer": "https://nemo-blog.vercel.app",
        "X-Title": "NEMO VPN Blog"
    }
)

try:
    with urllib.request.urlopen(req, timeout=120) as resp:
        result = json.loads(resp.read())
except Exception as e:
    print(f"ERROR: OpenRouter request failed: {e}")
    sys.exit(1)

# Extract image from response
choices = result.get("choices", [])
if not choices:
    print(f"ERROR: No choices in response: {json.dumps(result)[:500]}")
    sys.exit(1)

msg = choices[0].get("message", {})
image_url = None
finish_reason = choices[0].get("finish_reason", "")

print(f"[2/5] Response finish_reason: {finish_reason}")
print(f"[2/5] Message keys: {list(msg.keys())}")

# Variant A: message.images array
if msg.get("images"):
    img_data = msg["images"][0]
    if isinstance(img_data, dict):
        image_url = img_data.get("image_url", {}).get("url", "")
    elif isinstance(img_data, str):
        image_url = img_data
    print(f"[3/5] Found image via message.images: type={type(img_data).__name__}")

# Variant B: message.content array with type: "image_url"
if not image_url and isinstance(msg.get("content"), list):
    for part in msg["content"]:
        if isinstance(part, dict) and part.get("type") == "image_url":
            image_url = part["image_url"].get("url", "")
            print(f"[3/5] Found image via content array")
            break

# Variant C: markdown URL in content string
if not image_url and isinstance(msg.get("content"), str):
    m = re.search(r'https?://[^\s\)"\']+\.(png|jpg|jpeg|webp)', msg["content"])
    if m:
        image_url = m.group(0)
        print(f"[3/5] Found image URL in content string")

if not image_url:
    print(f"ERROR: Could not extract image from response")
    print(f"Full response preview: {json.dumps(result)[:1000]}")
    sys.exit(1)

print(f"[3/5] Image URL length: {len(image_url)}")
print(f"[3/5] URL starts with: {image_url[:50]}...")

# Save the image
if image_url.startswith("data:image"):
    # Base64-encoded image
    print(f"[4/5] Decoding base64 image...")
    b64_data = image_url.split(",", 1)[1]
    img_bytes = base64.b64decode(b64_data)
    with open(OUTPUT_PATH, "wb") as f:
        f.write(img_bytes)
    print(f"[4/5] Saved base64 image: {len(img_bytes)} bytes to {OUTPUT_PATH}")
elif image_url.startswith("http"):
    # Download from URL
    print(f"[4/5] Downloading image from URL...")
    try:
        img_req = urllib.request.Request(
            image_url,
            headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}
        )
        with urllib.request.urlopen(img_req, timeout=30) as img_resp:
            img_bytes = img_resp.read()
        with open(OUTPUT_PATH, "wb") as f:
            f.write(img_bytes)
        print(f"[4/5] Downloaded image: {len(img_bytes)} bytes to {OUTPUT_PATH}")
    except Exception as e:
        print(f"ERROR: Failed to download image: {e}")
        sys.exit(1)
else:
    print(f"ERROR: Unknown image URL format: {image_url[:100]}")
    sys.exit(1)

# Verify the image was saved
if os.path.exists(OUTPUT_PATH):
    size_kb = os.path.getsize(OUTPUT_PATH) / 1024
    print(f"[5/5] ✅ Image saved successfully: {size_kb:.1f} KB")
else:
    print(f"ERROR: Image file not created at {OUTPUT_PATH}")
    sys.exit(1)
