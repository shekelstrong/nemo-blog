We need answer in Russian markdown full file with frontmatter, JSON-LD. Need meet strict. Need 2200+ words. 6 H2 each with H3. Each H2 min 350 words. FAQ 5-7 Q/A likely one of H2? User says 6 sections H2, each with subsections H3. Need include FAQ section? FAQ can be one of 6 H2 with H3 questions? But H3 under H2. Need minimum 350 words per section. 6 H2 => each 350 = 2100 plus frontmatter maybe. Need 2200. We can do 6 H2 including FAQ with 5 H3 Q/A, each H3 maybe 70-100 words, total 500. Good.

Need tags exactly include those: Shadowsocks, безопасность, обход блокировок, VLESS Reality, NEMO VPN, ТСПУ. 5-10 tags. Include maybe DNS-over-HTTPS, Android. title <=60 chars contains main key. "DNS-over-HTTPS на Android: настройка DoH" count 42. Main key. Date current? 2026-05-15? System current date 2026-05-15. Use 2026-05-15. Description <=160 chars. keywords comma. image /images/dns-over-https-android-doh.jpg maybe slug. Need JSON-LD Article with same metadata.

Need technical guide, sources. "Без воды, факты, цифры, источники" We can cite RFC 8484, RFC 1035, RFC 8310, RFC 9102? Need internal links 2-3. Need code blocks for configs. DNS-over-HTTPS doesn't have configs? Provide Android DoH URI config, Cloudflare/Quad9/Google; NextDNS JSON? Also V2Ray/Xray client config snippet for DoH? Shadowsocks/VLESS Reality config maybe. Need CTA "скачать NEMO VPN". Need mention NEMO VPN maybe.

Need ensure no banned AI clichés. Avoid "в заключение", "стоит отметить", "delve into", "let's dive in", "в современном мире", "как никогда актуально", "подводя итог", "следует подчеркнуть". Also avoid "важно отметить". Good.

Need maybe "провайдер не видел ваши запросы" but careful: DoH hides DNS from local network/provider if resolver outside, but provider still sees IP/TLS SNI? With ECH less common. On Android private DNS supports DoT, not DoH; Chrome/Firefox DoH. System-wide DoH on Android? Need accurate. Android has Private DNS (DoT) system-wide. DoH is browser/app-level: Chrome, Firefox, Mullvad Browser, some clients. Some Android 9+ supports DNS resolver? Actually Android 9 introduced Private DNS (DoT) not DoH. DoH can be enabled in Firefox/Chrome but not system-wide except OEM/MDM? Some apps use Android DNS APIs? Need explain.

Need 6 H2 each with H3. H2:
1. Что делает DoH на Android и что не скрывает
H3: DNS в Android; DoH vs DoT vs VPN; Модель угроз с ТСПУ
2. Выбор DoH-провайдера и политик логирования
H3: публичные DoH; NextDNS/AdGuard; критерии; таблица
3. Настройка DoH в браузерах Android
H3: Chrome/Edge/Brave; Firefox/Mull; Samsung Internet maybe; проверка
4. Системный обход блокировок DNS и связка с VPN
H3: Private DNS DoT; NEMO VPN; Shadowsocks; VLESS Reality configs; таблица
5. Проверка утечек DNS, WebRTC, IPv6
H3: тесты; adb/dig; логе; код
6. FAQ по DNS-over-HTTPS на Android
H3 Q/A 5-7.

Need each section 350 words. "FAQ section with 3-5 question/answer" from system, user says 5-7. Need reconcile: system says 3-5, user says 5-7 strict. Higher priority system? User stricter? Need comply with both impossible. Could do 5 Q/A, satisfies 3-5 and 5-7. Good.

Need code blocks for configs. Could include:
- JSON for Chrome policy? Android enterprise policy DnsOverHttpsMode? Hmm code.
- Firefox policies.json? On Android not easy. But code block:
```
{
  "network.trr.mode": 5,
  "network.trr.uri": "https://dns.nextdns.io/..."
}
```
Maybe about:config values.
- Chrome enterprise:
```
{
  "DnsOverHttpsMode": "secure",
  "DnsOverHttpsTemplates": "https://dns.google/dns-query"
}
```
On Android Chrome? Managed configuration.
- V2Ray/Xray DNS config:
```
{
 "dns": {
  "servers": [
    {"address":"https://dns.google/dns-query", "port":443, "domains": ["geosite:category-ads-all"]},
    "1.1.1.1",
    "localhost"
  ],
  "tag":"dns_out"
 },
 "outbounds":[...]
}
```
Need ensure technical.
- VLESS Reality config:
```
{
 "protocol":"vless",
 "settings":{"vnext":[...]},
 "streamSettings":{"network":"tcp","security":"reality","realitySettings":{...}}
}
```
- Shadowsocks URL:
```
ss://...
```
Maybe no secret? Use placeholders.

Need "sources" maybe "Источники и стандарты" in relevant sections with links. Since no extra H2? Could include within sections. Need maybe "Источники" not H2? Could be H3? But requirement 6 H2 each with H3. If add H2 sources, violates 6. Use bullets under H3.

Need "2-3 внутренние ссылки [текст](/blog/slug-другой-статьи)" Include exactly 3 internal links in body. Slugs plausible:
- /blog/chto-takoe-vpn
- /blog/vless-reality-nastrojka
- /blog/shadowsocks-vs-vmess
Need ensure NEMO blog maybe. Good.
Could include "NEMO VPN" CTA.

Need count words. We need produce 2200+ Russian words. Need be careful. 6 sections each 350+ words. We can target 400-500 per H2. Total 2600-3000 words. But final desired overwordiness medium; user demands. Need not too huge maybe 3200 words. Need maybe 6 H2 * 450 = 2700 plus FAQ 600. Good.

Need frontmatter. Need title <=60. "DNS-over-HTTPS на Android: настройка DoH" 43. Contains main key. Description <=160: "Как включить DoH на Android, выбрать резолвер, проверить утечки DNS и связать настройку с VPN." Count ~96. Tags 5-10. Include "DNS-over-HTTPS", "DoH", "Android", "DNS", "Shadowsocks", "безопасность", "обход блокировок", "VLESS Reality", "NEMO VPN", "ТСПУ" = 10. Good.
keywords: "DNS-over-HTTPS, DoH Android, DNS через HTTPS, Private DNS Android, ТСПУ, DNS утечки, VPN Android, Shadowsocks, VLESS Reality, NEMO VPN"

Need JSON-LD. Article. Could include mainEntityOfPage, headline, description, author, datePublished, dateModified, image, keywords, articleSection, publisher NEMO VPN with logo? Need valid. Could use @context.

Need no markdown H1 duplicate? H1 = Title exactly? Frontmatter title "DNS-over-HTTPS на Android: настройка DoH". H1 same. Good.

Need "6 разделов H2, каждый с подразделами H3". Count H2 exactly 6. H3 under each. The FAQ H2 has H3 questions. No other H2. Avoid H4. Need maybe title "FAQ" is H2. Good.
Need "Минимум 1 таблица", we have 2.
Need "Code blocks для конфигов": at least 2. We'll include 4 code blocks. Good.
Need "CTA: скачать NEMO VPN" phrase. Use link? Maybe "Скачать NEMO VPN" with URL maybe https://nemo-blog.vercel.app? User didn't provide app URL. Use "скачать NEMO VPN" plain. Maybe link to /? "Скачать NEMO VPN" no URL? CTA. Fine.

Need no AI clichés. Avoid "в заключение", "подводя итог", "стоит отметить", "следует подчеркнуть", "в современном мире", "как никогда актуально". Also "позволяет" ok. "важно" maybe not banned but can use. Need "AI-клише" maybe "в этой статье" no. Good.

Need "провайдер не видел ваши запросы" But technically: DoH hides DNS query contents from ISP if not using ISP resolver. But ISP sees TLS connection to DoH provider and destination IP. If DoH provider logs, it sees queries. If DNS name resolves to IP, ISP sees connection to IP unless VPN. Also Android Private DNS DoT not DoH. Need mention.
Need "ТСПУ" relevance: DPI can inspect unencrypted DNS and block domains, inject NXDOMAIN, redirect. DoH encrypts DNS, but DPI can block known DoH endpoints via IP/SNI unless ECH/VPN. Android Chrome DoH may be opportunistic/secure. Need mention "DoH not circumvent all blocks; if site blocked by IP or SNI, use VPN/VLESS Reality/Shadowsocks."

Need "sources": RFC 8484, RFC 8310, RFC 1035, RFC 9460/9461? Use "RFC 8484: DNS Queries over HTTPS (DoH)", "RFC 8310: Usage Profiles for DNS over TLS", "RFC 1035: domain names", "Mozilla policy". Could cite with links. Need maybe "Google Chrome DNS-over-HTTPS" link? Fine.

Need "code blocks for configs" perhaps in H3:
- Firefox about:config values:
```
network.trr.mode = 3
network.trr.uri = https://dns.google/dns-query
network.trr.bootstrapAddress = 8.8.8.8
```
But about:config isn't code block? It is. Good.
- Android Enterprise Chrome policy JSON:
```
{
  "DnsOverHttpsMode": "secure",
  "DnsOverHttpsTemplates": "https://dns.google/dns-query"
}
```
Need note managed devices only.
- Xray DoH config:
```
{
  "dns": {
    "servers": [
      "https://dns.google/dns-query",
      "1.1.1.1"
    ],
    "tag": "dns"
  },
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {"type": "field", "ip": ["geoip:private"], "outboundTag": "direct"},
      {"type": "field", "outboundTag": "proxy"}
    ]
  }
}
```
Need "geosite" maybe not in code? Good.
- VLESS Reality config:
```
{
  "protocol": "vless",
  "settings": {
    "vnext": [
      {
        "address": "example.com",
        "port": 443,
        "users": [
          {
            "id": "00000000-0000-0000-0000-000000000000",
            "encryption": "none",
            "flow": "xtls-rprc-vision"
          }
        ]
      }
    ]
  },
  "streamSettings": {
    "network": "tcp",
    "security": "reality",
    "realitySettings": {
      "serverName": "www.microsoft.com",
      "fingerprint": "chrome",
      "spiderX": "/",
      "publicKey": "YOUR_PUBLIC_KEY",
      "shortId": "00000000"
    }
  }
}
```
Need "Shadowsocks URL" maybe:
```
ss://YWVzLTI1Ni1nY206UEFTU1dPUkQ@203.0.113.10:8388#nemo-shadowsocks
```
But use example domain 203.0.113.10 reserved. Good.
Need "config for NextDNS" perhaps:
```
https://dns.nextdns.io/abcdef
```
No code.

Need "2 tables markdown ≤4 columns": 
1. "Режим Android/DNS" columns Технология, Кто видит DNS, Плюсы, Ограничения. 
2. "DoH provider" columns Provider, URI, Логирование/фильтры, Когда выбирать. ≤4.
Maybe 3rd table in FAQ? But min 2.

Need "Each H2 min 350 words": Need count not exact. We can write lengthy. Need maybe not have sections too short. Let's draft carefully.

Potential issue: "6 разделов H2, каждый с подразделами H3" Could H2 "FAQ" with H3 questions, yes. But if we have H3 "Источники" under H2 maybe okay. Need no H2 "Источники".

Need "2-3 internal links": We'll include 3. But in final maybe internal links count:
- [что такое VPN и как он работает](/blog/chto-takoe-vpn)
- [настройка VLESS Reality](/blog/vless-reality-nastrojka)
- [сравнение Shadowsocks и VLESS](/blog/shadowsocks-vs-vless)
Need ensure slugs not "другой-статьи" but okay. "slug-другой-статьи" just example. Good.
Need maybe "NEMO VPN" CTA with link? "скачать NEMO VPN" maybe link to /download. If internal link counts? Could be 4. Use 3 internal blog links plus CTA maybe not counted. Fine.

Need "date" current. Good.
Need "author: NEMO VPN". category guides.

Need "image: /public/images/dns-over-https-na-android-kak-nastroit-doh-chtoby-provayder-ne-videl-vashi-zapro.jpg


Need JSON-LD include "mainEntity" FAQ? Since FAQ section but system says Article schema. Could include "mainEntity" with FAQPage? Article can have mainEntity? Schema.org Article can have mainEntity? Better include separate "@graph": Article and FAQPage. User requested JSON-LD schema.org Article, not necessarily FAQ. We can include Article plus FAQPage. Need ensure not invalid? @graph with Article and FAQPage. Good. Article includes "articleSection": "Guides". "keywords" array. "publisher": {"@type":"Organization","name":"NEMO VPN","url":"https://nemo-blog.vercel.app"}. "author": {"@type":"Organization","name":"NEMO VPN"}.
Need JSON-LD string not contain unescaped? We'll output in code block? They ask JSON-LD in script tag. Need include script tag with JSON. In markdown code block? Actually script tag in markdown can be raw HTML. We'll output:
```html
<script type="application/ld+json">
{...}
</script>
```
Inside markdown. Fine.

Need "H1 = Title, далее H2/H3". Frontmatter then script then H1. Good.

Need "2000+ words" word count in Russian? We'll produce maybe ~3500 words. Need no "AI cliches". Let's avoid phrases.

Need "факты, цифры, источники". Include facts:
- DNS uses UDP/TCP 53 by default; DoH uses HTTPS 443.
- Android 9+ Private DNS uses DoT; not DoH.
- Chrome 83? DoH secure by default on Android? Need accurate: Chrome has Secure DNS setting. On Android, "Use secure DNS" setting. It supports providers.
- Firefox supports DoH since Firefox 60? Firefox for Android supports Enhanced Tracking Protection and "HTTPS-Only"? Actually Firefox Android "Secure DNS" under Settings > Privacy and security? It has "Secure DNS" (DNS over HTTPS) in recent versions. Need not exact version maybe.
- DoH RFC 8484 published 2018.
- DNS over TLS RFC 7858? System-wide Android Private DNS uses DoT (RFC 7858/8310). Good.
- ECH RFC 9443? Yes 2023. Mention not universal.
- QNAME minimization RFC 9156.
- "TSPU" can filter by IP/SNI, block QUIC UDP 443? DoH over HTTP/2/3. Some networks block DoH endpoints.
- "Mullvad Browser" maybe.
- "NextDNS" etc.

Need "провайдер не видел ваши запросы": explain if DoH provider not controlled by ISP. If ISP resolver over DoH? then still sees. Android Chrome may choose provider based on "Secure DNS" and "automatically choose" maybe if network supports? Actually Chrome secure DNS modes:
- "Default" uses current DNS provider if it supports secure DNS? 
- "With your current service provider" uses secure DNS with current provider.
- "With Google" etc.
Need mention "Use custom" and choose external resolver.

Need "DoH на Android system-wide?" Accurate:
- Android does not have native global DoH setting in stock AOSP. Private DNS is DoT.
- Chrome/Edge/Brave DoH only browser traffic. Firefox maybe browser. Apps using system DNS remain visible unless VPN/Private DNS.
- Apps can implement DoH internally.
- Enterprise policy can configure Chrome DoH.
- Some ROM/MDM/NetGuard? But not needed.

Need "NEMO VPN" CTA: "Если задача — скрыть не только DNS, но и IP-адреса сайтов, скачайте NEMO VPN и используйте профиль с VLESS Reality или Shadowsocks." Good.

Need "technical style". Good.

Need "obход блокировок". Include "ТСПУ" and "DPI". Good.

Need "NEMO VPN" maybe "NEMO VPN умеет..." but avoid unsubstantiated? We can say "NEMO VPN предлагает..." if not sure? Need maybe "В NEMO VPN используйте..." It's NEMO's blog, okay. But no false specifics? We can say "Если у вас есть профиль NEMO VPN..." Good.

Need maybe "VLESS Reality" and "Shadowsocks" tags in frontmatter and content. Good.

Need "image alt"? Not necessary.

Potential issue: "Каждый раздел — минимум 350 слов" If H2 includes H3, all text under H2 counts. Need H2 2 maybe 400, H2 3 maybe 500, H2 4 maybe 500, H2 5 maybe 450, H2 6 FAQ maybe 600, H2 1 maybe 500. Good.

Need "минимум 2200 слов (статьи короче не публикуются)" We can produce 3000. Good.

Need "SEO" maybe meta description. Good.

Let's plan content in detail.

Frontmatter:
```
---
image: /public/images/dns-over-https-na-android-kak-nastroit-doh-chtoby-provayder-ne-videl-vashi-zapro.jpg
title: "DNS-over-HTTPS на Android: настройка DoH"
date: "2026-05-15"
tags:
  - "DNS-over-HTTPS"
  - "DoH"
  - "Android"
  - "DNS"
  - "Shadowsocks"
  - "безопасность"
  - "обход блокировок"
  - "VLESS Reality"
  - "NEMO VPN"
  - "ТСПУ"
description: "Как включить DoH на Android, выбрать резолвер, проверить утечки DNS и связать настройку с VPN."
author: "NEMO VPN"
category: "guides"
keywords: "DNS-over-HTTPS, DoH Android, DNS через HTTPS, Private DNS Android, ТСПУ, DNS утечки, VPN Android, Shadowsocks, VLESS Reality, NEMO VPN"
image: "/images/dns-over-https-android-doh.jpg"
---
```
Need title no quotes? YAML can quote. Fine.

JSON-LD:
```
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://nemo-blog.vercel.app/blog/dns-over-https-android-doh",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://nemo-blog.vercel.app/blog/dns-over-https-android-doh"
      },
      "headline": "DNS-over-HTTPS на Android: настройка DoH",
      "description": "Как включить DoH на Android, выбрать резолвер, проверить утечки DNS и связать настройку с VPN.",
      "image": "https://nemo-blog.vercel.app/images/dns-over-https-android-doh.jpg",
      "author": {"@type": "Organization", "name": "NEMO VPN", "url": "https://nemo-blog.vercel.app"},
      "publisher": {"@type": "Organization", "name": "NEMO VPN", "url": "https://nemo-blog.vercel.app"},
      "datePublished": "2026-05-15",
      "dateModified": "2026-05-15",
      "articleSection": "guides",
      "keywords": ["DNS-over-HTTPS","DoH Android","DNS через HTTPS","ТСПУ","VPN Android"]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type": "Question", "name": "Скрывает ли DoH DNS от провайдера?", "acceptedAnswer": {"@type": "Answer", "text": "..."}}
...
      ]
    }
  ]
}
</script>
```
Need JSON-LD FAQ answers maybe same as FAQ. Good.

H1:
`# DNS-over-HTTPS на Android: настройка DoH`

Intro maybe before first H2. User said 6 H2 each 350; intro not H2? If intro maybe 150 words not counted? Need not too much. We can include short intro 100-150. Fine. But "6 sections H2 each with H3" okay. Need "H1 = Title, далее H2/H3". Intro after H1 okay. Maybe no intro? Start H2. But article should intro. We can include 100 words before H2. Fine.

Need H2 count. Let's outline:

Intro:
"DNS превращает домен в IP. По умолчанию запросы идут в clear text UDP/TCP 53. DoH отправляет DNS внутри HTTPS на 443, как RFC 8484. На Android настройка отличается: Private DNS = DoT, браузерный DoH = Chrome/Firefox. Цель — не дать провайдеру и ТСПУ читать/подменять домены. Но DoH не заменяет VPN: видны IP, SNI, трафик. Ниже..."

H2 1: "Как DoH меняет DNS-запросы на Android"
H3: "DNS без шифрования: кто видит запросы"
Content: RFC 1035, UDP/TCP 53, recursive resolver, ISP sees query, caching, NXDOMAIN injection, logs.
H3: "DoH vs DoT vs VPN: разница для Android"
Content: DoH HTTPS 443, DoT TLS 853, Private DNS Android, VPN tunnel. Table.
H3: "Модель угроз: что скрывает DoH от провайдера и ТСПУ"
Content: ISP no domain names if external DoH, but sees connection to resolver, IP, timing, SNI unless ECH; TSPU can block known DoH by IP/SNI; if DoH provider logs, trust shifts. Need mention if using ISP's DoH then provider still sees.

Need H2 1 500+ words.

H2 2: "Выбор DoH-резолвера: приватность, фильтры и скорость"
H3: "Публичные DoH-провайдеры и URI"
Content: Cloudflare 1.1.1.1, Google dns.google, Quad9, AdGuard, NextDNS. Table.
H3: "Как читать политики логирования"
Content: retention, anonymization, law enforcement, jurisdiction, filters, malware/phishing, DNSSEC, ECS. "DoH provider can see queries".
H3: "Когда выбирать платный или приватный резолвер"
Content: NextDNS custom profiles, AdGuard family, self-hosted AdGuard Home + Cloudflared? But Android DoH URI. Use "если нужен контроль". Mention "RFC 9156 QNAME minimization".
Need table.

H2 3: "Как включить DNS-over-HTTPS в Chrome, Firefox и других браузерах Android"
H3: "Chrome, Edge и Brave: Secure DNS"
Content: Steps. Chrome: Settings > Privacy and security > Use secure DNS > With custom provider. Enter URI. Edge similar. Brave: DNS over HTTPS. Need mention "DoH applies only browser".
Code block:
```
https://dns.google/dns-query
https://cloudflare-dns.com/dns-query
https://dns.quad9.net/dns-query
https://dns.adguard-dns.com/dns-query
```
Maybe code block.
H3: "Firefox for Android: настройка DNS через HTTPS"
Content: Steps. about:config values? Firefox Android has