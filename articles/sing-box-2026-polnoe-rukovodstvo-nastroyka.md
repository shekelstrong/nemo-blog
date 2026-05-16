---
title: 'Sing-Box в 2026: полное руководство по настройке — универсальный прокси-клиент для VLESS Reality, Hysteria2, XHTTP и WireGuard'
description: 'Sing-Box — мощный мультипротокольный прокси-клиент нового поколения. Полное руководство: установка, настройка клиента и сервера, маршрутизация (geoip/geosite), сравнение с Xray, все протоколы (VLESS Reality, Hysteria2, XHTTP, Shadowsocks, WireGuard). Для Windows, macOS, Linux, Android и iOS. Обход блокировок РКН в 2026.'
keywords: ['Sing-Box настройка', 'Sing-Box руководство', 'Sing-Box vs Xray', 'Sing-Box Россия 2026', 'Sing-Box клиент', 'Sing-Box сервер', 'VLESS Reality Sing-Box', 'Hysteria2 Sing-Box', 'XHTTP Sing-Box', 'обход блокировок Sing-Box', 'Sing-Box маршрутизация', 'Sing-BBox Windows', 'Sing-Box Android']
author: 'NEMO VPN'
date: '2026-05-16'
category: 'VPN'
image: "/articles/images/sing-box-2026-polnoe-rukovodstvo-nastroyka.jpg"
tags: ['Sing-Box', 'прокси', 'обход блокировок', 'VLESS Reality', 'Hysteria2', 'XHTTP', 'WireGuard', 'Shadowsocks', 'маршрутизация', 'geoip', 'geosite', 'DPI', 'Россия', '2026', 'Xray', 'clash-meta']
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "TechArticle",
  "headline": "Sing-Box в 2026: полное руководство по настройке — универсальный прокси-клиент для VLESS Reality, Hysteria2, XHTTP и WireGuard",
  "description": "Sing-Box — мощный мультипротокольный прокси-клиент нового поколения. Полное руководство: установка, настройка клиента и сервера, маршрутизация (geoip/geosite), сравнение с Xray, все протоколы. Для Windows, macOS, Linux, Android и iOS.",
  "datePublished": "2026-05-16",
  "dateModified": "2026-05-16",
  "author": {
    "@type": "Organization",
    "name": "NEMO VPN",
    "url": "https://nemo-vpn.ru"
  },
  "publisher": {
    "@type": "Organization",
    "name": "NEMO VPN Blog",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nemo-vpn.ru/logo.jpg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nemo-blog.vercel.app/articles/sing-box-2026-polnoe-rukovodstvo-nastroyka"
  },
  "image": "https://nemo-blog.vercel.app/articles/images/sing-box-2026-polnoe-rukovodstvo-nastroyka.jpg"
}
</script>

# Sing-Box в 2026: полное руководство по настройке — универсальный прокси-клиент для обхода блокировок

## Введение: почему Sing-Box — это новый стандарт

2026 год окончательно похоронил эпоху «одна программа — один протокол». В России DPI-системы ТСПУ третьего поколения научились детектировать индивидуальные паттерны трафика, и старые клиенты вроде V2Ray с одним протоколом перестали справляться. Пользователям нужна универсальная программа, которая поддерживает **все современные протоколы обхода**, умеет **гибко маршрутизировать трафик** и одинаково хорошо работает на всех устройствах.

**Sing-Box** — это именно такая программа. Изначально созданный как форк Clash.Meta, Sing-Box превратился в самостоятельный проект, который сегодня считается основным конкурентом Xray-core (преемника V2Ray). В отличие от Xray, Sing-Box изначально проектировался как **универсальный прокси-клиент и сервер** с поддержкой десятка протоколов «из коробки».

По данным Github Trending за апрель 2026 года, Sing-Box собрал более 25 000 звёзд и признан самым быстрорастущим прокси-инструментом в русскоязычном сообществе. Его используют и для персонального обхода блокировок, и в корпоративных решениях для безопасного удалённого доступа.

В этой статье мы разберём всё, что нужно знать о Sing-Box в 2026 году:
- Как установить Sing-Box на Windows, macOS, Linux, Android и iOS
- Как настроить клиент для подключения к существующему серверу
- Как настроить серверную часть (включая панель управления)
- Как работает маршрутизация — geoip, geosite, rule-наборы
- Какие протоколы поддерживаются и как выбрать оптимальный
- Чем Sing-Box лучше Xray и стоит ли мигрировать
- Типичные ошибки, проблемы и их решение
- FAQ с ответами на самые частые вопросы

Если вы ищете простой и надёжный способ обхода блокировок в России в 2026 году — вы попали по адресу.

## Что такое Sing-Box и чем он отличается от Xray

### Архитектура Sing-Box

Sing-Box (часто пишется как sing-box, официальный сайт — sing-box.sagernet.org) — это мультипротокольный прокси-инструмент с открытым исходным кодом, написанный на Go. Его главная особенность — **единый конфигурационный файл** (JSON) для всех режимов работы: клиент, сервер, TUN (перехват всего трафика), DNS-сервер.

В отличие от Xray, где разные компоненты (Xray-core, xrayAPI, VLESS/gRPC) требуют отдельных настроек, Sing-Box работает по принципу «один config.json — все функции».

### Сравнение Sing-Box и Xray

| Параметр | Sing-Box | Xray-core (V2Ray) |
|----------|----------|-------------------|
| **Язык написания** | Go | Go |
| **Год начала** | 2022 | 2022 (форк V2Ray) |
| **Звёзд на GitHub** | 25 000+ | 24 000+ |
| **Протоколы** | VLESS, VMess, Shadowsocks, Trojan, Hysteria2, TUIC, WireGuard, XHTTP, SOCKS, HTTP, Direct | VLESS, VMess, Shadowsocks, Trojan, SOCKS, HTTP, Direct |
| **Hysteria2** | ✅ Встроенная поддержка | ❌ Только через сторонние мосты |
| **XHTTP** | ✅ Разработан для Sing-Box | ❌ Не поддерживается |
| **WireGuard** | ✅ Встроенная поддержка | ❌ |
| **TUN-режим** | ✅ Встроенный (перехват всего трафика) | ❌ Через tun2socks |
| **Маршрутизация** | GeoIP, GeoSite, Rule-наборы | GeoIP, Геосите, Rule-наборы |
| **DNS** | Встроенный DNS-сервер (fakeip, forward) | Через отдельные настройки |
| **Clash API** | ✅ Совместимость | ❌ |
| **Панель управления** | Sing-Box UI (сторонние), 3X-UI | 3X-UI, X-UI, Marzban |
| **Производительность** | Выше (оптимизированный код на Go) | Хорошая |
| **Потребление памяти** | Ниже | Среднее |

### Ключевые преимущества Sing-Box

1. **Мультипротокольность «из коробки»** — не нужно ставить дополнительные модули для Hysteria2, WireGuard или XHTTP
2. **TUN-режим** — перехватывает весь трафик на системном уровне, как VPN
3. **Встроенный DNS** — поддержка fake-ip для обхода DNS-блокировок и фильтрации
4. **Clash API совместимость** — можно использовать программы типа Clash Verge или Sakura для управления
5. **Единый конфиг** — один файл config.json описывает всё: входящие соединения, исходящие, маршруты, DNS
6. **Лёгкий и быстрый** — бинарник занимает ~10 МБ, потребляет в 2-3 раза меньше памяти чем Xray
7. **Активное развитие** — новые протоколы (XHTTP) появляются сначала в Sing-Box

## Установка Sing-Box

### Windows

Установка Sing-Box на Windows — это просто скачивание бинарника и запуск:

1. Перейдите на [GitHub Releases](https://github.com/SagerNet/sing-box/releases)
2. Скачайте `sing-box-{version}-windows-amd64.zip`
3. Распакуйте в `C:\Program Files\sing-box\`
4. Создайте папку `config` с файлом `config.json`
5. Запустите: `sing-box run -c config\config.json`

Для удобства можно установить **Clash Verge** (графический клиент с поддержкой Sing-Box):

```bash
# Скачать с GitHub Releases: https://github.com/clash-verge-rev/clash-verge-rev/releases
# Установить .exe файл
# В настройках выбрать "Core: sing-box"
```

Или использовать **NekoBox** — ещё один популярный графический клиент с поддержкой всех протоколов Sing-Box.

### macOS

Через Homebrew:

```bash
brew install sing-box

# Запуск
sing-box run -c /usr/local/etc/sing-box/config.json
```

Или через графический клиент **Sing-Box for macOS** (форк ClashX):

```bash
# Скачать .dmg с GitHub, перетащить в Applications
# Настроить вручную или импортировать профиль
```

### Linux

**Ubuntu/Debian:**

```bash
# Скачать бинарник
wget https://github.com/SagerNet/sing-box/releases/latest/download/sing-box-1.10.0-linux-amd64.tar.gz
tar -xzf sing-box-1.10.0-linux-amd64.tar.gz
sudo mv sing-box /usr/local/bin/

# Создать конфиг
mkdir -p /etc/sing-box/
sudo touch /etc/sing-box/config.json

# Запуск
sing-box run -c /etc/sing-box/config.json
```

**Через systemd (автозагрузка):**

```bash
# Скачать скрипт установки
bash <(curl -fsSL https://sing-box.app/deb.sh)

# После установки
systemctl enable sing-box
systemctl start sing-box
```

### Android

**SFI (Sing-box for Android)** — официальный клиент:

1. Скачайте [SFI с Google Play](https://play.google.com/store/apps/details?id=io.nekohasekai.sfa) или с [GitHub Releases](https://github.com/SagerNet/sing-box/releases)
2. Установите .apk файл
3. Настройте профиль — вручную (JSON) или через QR-код / ссылку
4. Нажмите «Подключиться»

Альтернатива — **NekoBox for Android** (поддерживает все протоколы, включая Sing-Box):

1. Скачайте с [GitHub](https://github.com/MatsuriDayo/NekoBoxForAndroid/releases)
2. Импортируйте конфигурацию через буфер обмена или QR
3. Включите VPN-режим

### iOS

Для iOS/iPadOS лучший клиент с поддержкой Sing-Box — **Streisand** (форк Shadowrocket с поддержкой VLESS, Hysteria2, Sing-Box):

1. Скачайте Streisand через сторонний магазин (TestFlight или AltStore)
2. Импортируйте конфигурацию
3. Включите VPN-переключатель

Также поддерживается **Sing-Box for iOS** (через TestFlight, бета-версия).

## Настройка клиента Sing-Box (config.json)

Сердце Sing-Box — файл конфигурации `config.json`. Рассмотрим базовую структуру для клиента с поддержкой всех современных протоколов.

### Базовая структура config.json

```json
{
  "log": {
    "level": "info",
    "timestamp": true
  },
  "dns": {
    "servers": [
      {
        "tag": "cloudflare",
        "address": "https://1.1.1.1/dns-query"
      },
      {
        "tag": "google",
        "address": "tls://8.8.8.8"
      },
      {
        "tag": "local",
        "address": "local",
        "detour": "direct"
      }
    ],
    "rules": [
      {
        "server": "local",
        "geosite": "cn"
      }
    ],
    "strategy": "prefer_ipv4",
    "disable_cache": false,
    "disable_expire": false,
    "independent_cache": false,
    "final": "cloudflare"
  },
  "inbounds": [
    {
      "type": "tun",
      "tag": "tun-in",
      "interface_name": "tun0",
      "address": "172.19.0.1/30",
      "mtu": 9000,
      "auto_route": true,
      "strict_route": true,
      "stack": "system",
      "sniff": true
    },
    {
      "type": "mixed",
      "tag": "socks-in",
      "listen": "127.0.0.1",
      "listen_port": 1080,
      "sniff": true
    }
  ],
  "outbounds": [
    {
      "type": "vless",
      "tag": "vless-reality",
      "server": "your-server-ip.com",
      "server_port": 443,
      "uuid": "your-uuid-here",
      "flow": "",
      "tls": {
        "enabled": true,
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        },
        "reality": {
          "enabled": true,
          "public_key": "your-public-key",
          "short_id": "your-short-id"
        }
      }
    },
    {
      "type": "hysteria2",
      "tag": "hysteria2-out",
      "server": "your-hy2-server.com",
      "server_port": 443,
      "password": "your-password",
      "tls": {
        "enabled": true,
        "server_name": "www.microsoft.com",
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      }
    },
    {
      "type": "shadowsocks",
      "tag": "ss-out",
      "server": "your-ss-server.com",
      "server_port": 8388,
      "method": "2022-blake3-aes-256-gcm",
      "password": "your-password"
    },
    {
      "type": "wireguard",
      "tag": "wg-out",
      "server": "your-wg-server.com",
      "server_port": 51820,
      "local_address": [
        "10.0.0.2/32"
      ],
      "private_key": "your-private-key",
      "peer_public_key": "peer-public-key",
      "mtu": 1420
    },
    {
      "type": "direct",
      "tag": "direct"
    },
    {
      "type": "block",
      "tag": "block"
    }
  ],
  "route": {
    "rules": [
      {
        "protocol": "dns",
        "outbound": "dns-out"
      },
      {
        "geosite": "category-ads",
        "outbound": "block"
      },
      {
        "geosite": "yandex",
        "outbound": "direct"
      },
      {
        "geosite": "vk",
        "outbound": "direct"
      },
      {
        "geosite": "mailru",
        "outbound": "direct"
      },
      {
        "geoip": "ru",
        "outbound": "direct"
      },
      {
        "geosite": "google",
        "outbound": "vless-reality"
      },
      {
        "geosite": "youtube",
        "outbound": "hysteria2-out"
      },
      {
        "geosite": "netflix",
        "outbound": "vless-reality"
      },
      {
        "geosite": "telegram",
        "outbound": "vless-reality"
      }
    ],
    "auto_detect_interface": true,
    "final": "vless-reality",
    "default_domain_strategy": "prefer_ipv4"
  }
}
```

### Пояснение конфигурации

**DNS:** настроены три DNS-сервера — Cloudflare через DNS-over-HTTPS (основной), Google через DNS-over-TLS (резервный) и локальный DNS провайдера (только для российских сайтов). Стратегия `prefer_ipv4` — отдаём предпочтение IPv4 (важно в России, где IPv6 часто блокируется).

**Inbounds (входящие подключения):**
- `tun` — создаёт виртуальный сетевой интерфейс, через который проходит весь трафик
- `mixed` — SOCKS5 + HTTP прокси на localhost:1080 (для браузеров и приложений)

**Outbounds (исходящие подключения):**
- `vless-reality` — VLESS с Reality (основной канал для заблокированных сайтов)
- `hysteria2-out` — Hysteria2 (для YouTube и стриминга — высокая скорость)
- `ss-out` — Shadowsocks (резервный протокол)
- `wg-out` — WireGuard (альтернативный)
- `direct` — прямой выход (для российских сайтов)
- `block` — блокировка (для рекламы и трекеров)

**Route (маршрутизация):**
- Все российские сайты (Yandex, VK, Mail.ru) — напрямую
- Российские IP-адреса — напрямую
- Google, YouTube, Netflix, Telegram — через VLESS Reality или Hysteria2
- Реклама и трекеры — блокируются
- Всё остальное — по умолчанию через VLESS Reality

## Настройка сервера Sing-Box

### Установка на VPS

Sing-Box работает не только как клиент, но и как сервер. Настроить его можно на любом VPS за пределами России.

**Шаг 1: Подключитесь к серверу**

```bash
ssh root@your-server-ip
```

**Шаг 2: Установите Sing-Box**

```bash
bash <(curl -fsSL https://sing-box.app/deb.sh)
```

**Шаг 3: Настройте серверную конфигурацию**

Создайте `/etc/sing-box/config.json`:

```json
{
  "log": {
    "level": "info",
    "timestamp": true
  },
  "inbounds": [
    {
      "type": "vless",
      "tag": "vless-reality-in",
      "listen": "::",
      "listen_port": 443,
      "users": [
        {
          "uuid": "ваш-uuid-здесь",
          "flow": ""
        }
      ],
      "tls": {
        "enabled": true,
        "server_name": "www.microsoft.com",
        "reality": {
          "enabled": true,
          "handshake": {
            "server": "www.microsoft.com",
            "server_port": 443
          },
          "private_key": "ваш-private-key",
          "short_id": ["ваш-short-id"]
        }
      }
    },
    {
      "type": "hysteria2",
      "tag": "hy2-in",
      "listen": "::",
      "listen_port": 8443,
      "up_mbps": 200,
      "down_mbps": 500,
      "users": [
        {
          "password": "ваш-пароль"
        }
      ],
      "tls": {
        "enabled": true,
        "server_name": "www.microsoft.com",
        "alpn": ["h3"],
        "utls": {
          "enabled": true,
          "fingerprint": "chrome"
        }
      }
    },
    {
      "type": "shadowsocks",
      "tag": "ss-in",
      "listen": "::",
      "listen_port": 8388,
      "method": "2022-blake3-aes-256-gcm",
      "password": "ваш-пароль"
    }
  ],
  "outbounds": [
    {
      "type": "direct",
      "tag": "direct"
    }
  ]
}
```

**Шаг 4: Запустите сервер**

```bash
systemctl enable sing-box
systemctl start sing-box
systemctl status sing-box
```

**Шаг 5: Настройте файрвол**

```bash
ufw allow 443/tcp
ufw allow 8443/udp
ufw allow 8388/tcp
ufw allow 80/tcp
```

### Генерация ключей для VLESS Reality

Для Reality нужны ключи X25519. Сгенерируйте их:

```bash
sing-box generate reality-keypair
```

Вывод:
```
PrivateKey: 4P-w16SkdQkHq8wW2... (секретный ключ сервера)
PublicKey: 2Df6P-w16SkdQkHq8... (публичный ключ, передаётся клиенту)
```

Short ID (8 символов, hex):

```bash
sing-box generate rand --hex 8
```

UUID для пользователя:

```bash
sing-box generate uuid
```

## Маршрутизация трафика в Sing-Box: полный разбор

Маршрутизация — самая мощная функция Sing-Box. Она позволяет гибко распределять трафик между разными исходящими подключениями (outbounds) на основе множества критериев.

### Правила маршрутизации (route.rules)

Каждое правило состоит из:
- **Условие** — что должно совпадать (domain, geosite, geoip, port, protocol)
- **Outbound** — куда направить трафик

```json
"route": {
  "rules": [
    {
      "geosite": "yandex",
      "outbound": "direct"
    },
    {
      "geosite": "youtube",
      "outbound": "hysteria2-out"
    },
    {
      "geoip": "ru",
      "outbound": "direct"
    }
  ],
  "final": "vless-reality"
}
```

### Доступные условия маршрутизации

| Условие | Описание | Пример |
|---------|----------|--------|
| `domain` | Конкретный домен | `"domain": "example.com"` |
| `domain_suffix` | Домен и поддомены | `"domain_suffix": ".youtube.com"` |
| `domain_keyword` | Ключевое слово в домене | `"domain_keyword": "google"` |
| `domain_regex` | Регулярное выражение | `"domain_regex": "^.*\\.ru$"` |
| `geosite` | Категория из базы GeoSite | `"geosite": "yandex"` |
| `geoip` | Страна по IP | `"geoip": "ru"` |
| `port` | Порт назначения | `"port": 443` |
| `source_port` | Порт источника | `"source_port": 53` |
| `protocol` | Протокол (sniffed) | `"protocol": "quic"` |
| `network` | Тип сети | `"network": "tcp"` |
| `source_ip` | IP источник | `"source_ip": "192.168.1.0/24"` |

### Наборы geosite и geoip

Sing-Box использует базы данных **geosite** (категории доменов) и **geoip** (IP-диапазоны по странам). Они встроены в бинарник и обновляются каждую неделю.

Основные категории geosite для России:

| Категория | Что включает |
|-----------|-------------|
| `geosite:yandex` | Яндекс, Почта, Диск, Карты, Музыка |
| `geosite:vk` | VK, VK Видео |
| `geosite:mailru` | Mail.ru, Одноклассники |
| `geosite:sber` | Сбербанк |
| `geosite:gosuslugi` | Госуслуги |
| `geosite:youtube` | YouTube, YouTube Music |
| `geosite:google` | Google, Gmail, Google Drive |
| `geosite:telegram` | Telegram, t.me |
| `geosite:netflix` | Netflix |
| `geosite:instagram` | Instagram |
| `geosite:twitter` | Twitter/X |
| `geosite:category-ads` | Рекламные сети |
| `geosite:category-social` | Социальные сети |
| `geosite:category-media` | Медиа (видео, музыка) |

### Пример расширенной маршрутизации

```json
"route": {
  "rules": [
    {"protocol": "dns", "outbound": "dns-out"},
    {"geosite": "category-ads", "outbound": "block"},
    {"geosite": "yandex", "outbound": "direct"},
    {"geosite": "vk", "outbound": "direct"},
    {"geosite": "mailru", "outbound": "direct"},
    {"geosite": "gosuslugi", "outbound": "direct"},
    {"geosite": "sber", "outbound": "direct"},
    {"geoip": "ru", "outbound": "direct"},
    {"geosite": "youtube", "outbound": "hysteria2-out"},
    {"geosite": "google", "outbound": "vless-reality"},
    {"geosite": "telegram", "outbound": "vless-reality"},
    {"geosite": "netflix", "outbound": "vless-reality"},
    {"geosite": "instagram", "outbound": "vless-reality"},
    {"geosite": "twitter", "outbound": "vless-reality"},
    {"domain": "discord.com", "outbound": "hysteria2-out"},
    {"domain_keyword": "steam", "outbound": "vless-reality"}
  ],
  "final": "vless-reality",
  "auto_detect_interface": true
}
```

## Протоколы в Sing-Box: какой выбрать

### Таблица сравнения протоколов

| Протокол | Надёжность обхода DPI | Скорость | Задержка (пинг) | Нагрузка на CPU | Рекомендуемое применение |
|----------|----------------------|----------|-----------------|-----------------|-------------------------|
| **VLESS Reality** | ⭐⭐⭐⭐⭐ Лучшая | ⭐⭐⭐⭐ Хорошая | ⭐⭐⭐ Средняя | Низкая | Универсальный, браузинг, соцсети |
| **Hysteria2** | ⭐⭐⭐⭐ Отличная | ⭐⭐⭐⭐⭐ Макс | ⭐⭐⭐⭐ Низкая (потери) | Средняя | YouTube, стриминг, 4K |
| **XHTTP** | ⭐⭐⭐⭐⭐ Лучшая (новая) | ⭐⭐⭐⭐ Хорошая | ⭐⭐⭐ Средняя | Низкая | Обход нового DPI |
| **Shadowsocks 2022** | ⭐⭐⭐ Средняя | ⭐⭐⭐⭐ Хорошая | ⭐⭐⭐⭐ Низкая | Низкая | Резервный, лёгкий |
| **WireGuard** | ⭐⭐ Уязвим к DPI | ⭐⭐⭐⭐⭐ Макс | ⭐⭐⭐⭐⭐ Минимальная | Низкая | VPS-туннели, не для обхода |
| **Trojan** | ⭐⭐⭐⭐ Хорошая | ⭐⭐⭐⭐ Хорошая | ⭐⭐⭐ Средняя | Низкая | Альтернатива VLESS |

### Когда какой протокол использовать

1. **VLESS Reality** — основной выбор для 90% задач. Работает везде, стабильно обходит DPI, минимальная нагрузка. Используйте, если не знаете, что выбрать.
2. **Hysteria2** — лучший выбор для YouTube и стриминга. Использует QUIC (поверх UDP), что даёт меньшую задержку при потерях пакетов. Отлично подходит для видео в 4K.
3. **XHTTP** — новейший протокол для обхода DPI. Используйте, если VLESS Reality начал «сбоить» — блокироваться по размеру пакетов или временным задержкам.
4. **Shadowsocks 2022** — лёгкий и быстрый. Хорош как резервный канал, но без Reality-обфускации может детектироваться новыми DPI.
5. **WireGuard** — не для обхода DPI. Используйте для прямых туннелей, если DPI не блокирует UDP.
6. **Trojan** — классика. Работает через TLS, но уступает VLESS Reality по надёжности.

## Панели управления для Sing-Box

Для управления сервером Sing-Box можно использовать панели:

### 3X-UI (с поддержкой Sing-Box)

3X-UI — популярная панель управления, изначально созданная для Xray. Сейчас есть форки с поддержкой Sing-Box:

```bash
bash <(curl -Ls https://raw.githubusercontent.com/mhsanaei/3x-ui/master/install.sh)
```

После установки:
1. Откройте веб-интерфейс на порту 2053
2. Добавьте входящие подключения (inbounds)
3. Выберите протокол: VLESS, Shadowsocks, Trojan и др.
4. Экспортируйте ссылку для подключения

### Marzban (для Xray + Sing-Box)

Marzban — продвинутая панель с поддержкой нескольких бэкендов:

```bash
sudo bash -c "$(curl -sL https://github.com/Gozargah/Marzban-scripts/raw/master/marzban.sh)"
```

## Типичные проблемы и их решение

### 1. «TUN failed to create interface» (Windows)

**Причина:** Не установлен драйвер TUN, или приложение не запущено от администратора.
**Решение:** Запустите терминал от имени администратора. Установите WinTUN (скачать с build.wireguard.com).

### 2. «connect: connection refused»

**Причина:** Сервер не отвечает или порт закрыт.
**Решение:** Проверьте, запущен ли Sing-Box на сервере (`systemctl status sing-box`). Проверьте файрвол (`ufw status`). Убедитесь, что порт правильный.

### 3. «VLESS Reality: certificate error»

**Причина:** Неправильный public_key или short_id.
**Решение:** Проверьте ключи на сервере (`sing-box generate reality-keypair`). Убедитесь, что public_key клиента совпадает с тем, что на сервере.

### 4. YouTube грузится медленно

**Причина:** Неправильная маршрутизация. YouTube может идти через протокол с высокой задержкой.
**Решение:** Направьте YouTube на Hysteria2, который лучше всего подходит для стриминга:
```json
{"geosite": "youtube", "outbound": "hysteria2-out"}
```

### 5. Российские сайты не открываются

**Причина:** Трафик на российские сайты идёт через зарубежный сервер.
**Решение:** Добавьте правила для российских сайтов:
```json
{"geosite": "yandex", "outbound": "direct"},
{"geosite": "vk", "outbound": "direct"},
{"geoip": "ru", "outbound": "direct"}
```

### 6. DNS-утечки

**Причина:** DNS-запросы уходят через VPN, а должны через локальный DNS для российских сайтов.
**Решение:** Настройте DNS-правила:
```json
"dns": {
  "rules": [
    {"geosite": "yandex", "server": "local"},
    {"geosite": "vk", "server": "local"}
  ]
}
```

### 7. Реклама пробивается в браузере

**Причина:** Не настроена блокировка рекламы.
**Решение:** Добавьте правило для рекламы:
```json
{"geosite": "category-ads", "outbound": "block"}
```

### 8. Sing-Box не запускается на Android

**Причина:** Не включена опция «Разрешить перехват всегда-on».
**Решение:** В настройках SFI → VPN → «Постоянно включённый VPN». Дайте разрешение на уведомления.

## Сравнение Sing-Box с другими клиентами

### Sing-Box vs Clash.Meta

Clash.Meta — это предшественник Sing-Box. Sing-Box форкнулся из Clash.Meta и ушёл далеко вперёд:

| Параметр | Sing-Box | Clash.Meta |
|----------|----------|------------|
| **Конфигурация** | JSON | YAML |
| **Протоколы** | VLESS, Hysteria2, XHTTP, WireGuard | VLESS, Shadowsocks |
| **TUN-режим** | Встроенный | Через сторонние утилиты |
| **Производительность** | Выше | Средняя |
| **Размер бинарника** | 10 МБ | 25 МБ |
| **Актуальность** | Активно развивается | Поддержка снижается |

### Sing-Box vs NekoBox

NekoBox — графический клиент, который может использовать разные Core (включая Sing-Box):

| Параметр | Sing-Box (сам) | NekoBox с Sing-Box |
|----------|---------------|-------------------|
| **Управление** | Через CLI / Clash Verge | GUI (удобно для новичков) |
| **Гибкость** | Максимальная | Средняя |
| **Сложность** | Выше | Ниже |
| **Обновления** | Сразу после релиза | Через обновление Core |

Рекомендация: используйте Sing-Box напрямую, если вам нужна максимальная гибкость. Используйте NekoBox/Clash Verge/SFI, если хотите графический интерфейс.

## Миграция с Xray на Sing-Box: пошаговое руководство

Если у вас уже настроен Xray (V2Ray) и вы хотите перейти на Sing-Box, вот что нужно сделать:

### Шаг 1: Установите Sing-Box на сервер

```bash
bash <(curl -fsSL https://sing-box.app/deb.sh)
```

### Шаг 2: Перенесите конфигурацию

Преобразуйте вашу Xray-конфигурацию в Sing-Box формат.

**Xray VLESS Reality:**
```json
{
  "inbounds": [{
    "port": 443,
    "protocol": "vless",
    "settings": {
      "clients": [{"id": "uuid", "flow": ""}],
      "decryption": "none"
    },
    "streamSettings": {
      "network": "tcp",
      "security": "reality",
      "realitySettings": {
        "dest": "www.microsoft.com:443",
        "serverNames": ["www.microsoft.com"],
        "privateKey": "key",
        "shortIds": ["id"]
      }
    }
  }]
}
```

**Sing-Box эквивалент:**
```json
{
  "inbounds": [{
    "type": "vless",
    "listen_port": 443,
    "users": [{"uuid": "uuid", "flow": ""}],
    "tls": {
      "enabled": true,
      "server_name": "www.microsoft.com",
      "reality": {
        "enabled": true,
        "handshake": {"server": "www.microsoft.com", "server_port": 443},
        "private_key": "key",
        "short_id": ["id"]
      }
    }
  }]
}
```

### Шаг 3: Перенесите пользователей

Скопируйте UUID, Reality-ключи, пароли Hysteria2 и Shadowsocks из Xray в соответствующую конфигурацию Sing-Box.

### Шаг 4: Переключите клиентов

На клиентах:
- Если используете NekoBox/Streisand — просто смените Core на Sing-Box (обычно достаточно переключения в настройках)
- Если используете прямой Xray — установите Sing-Box и импортируйте конфигурацию

### Шаг 5: Протестируйте

```bash
# На сервере
systemctl status sing-box
journalctl -u sing-box -f

# На клиенте
sing-box check -c config.json
sing-box run -c config.json
```

## Безопасность и приватность

Sing-Box предоставляет несколько механизмов для защиты вашей приватности:

### 1. DNS-over-HTTPS/QUIC

Все DNS-запросы шифруются. Российский провайдер не видит, какие сайты вы запрашиваете.

### 2. Fake-IP

Sing-Box может подменять DNS-ответы на фиктивные IP-адреса. Это помогает обходить DNS-блокировки на уровне провайдера:

```json
"dns": {
  "strategy": "prefer_ipv4",
  "fakeip": {
    "enabled": true,
    "inet4_range": "198.18.0.0/16"
  }
}
```

### 3. Блокировка рекламы и трекеров

Используя категорию `geosite:category-ads`, Sing-Box блокирует рекламные сети и трекеры на системном уровне.

### 4. SNI-обфускация

В VLESS Reality и Hysteria2, Sing-Box подменяет SNI (Server Name Indication) на легитимный сайт (например, `www.microsoft.com`). DPI видит, что вы подключаетесь к Microsoft, а не к VPN-серверу.

### 5. Отключение IPv6

Если ваш провайдер блокирует IPv6, отключите его в конфигурации:
```json
"experimental": {
  "clash_api": {
    "external_controller": "127.0.0.1:9090",
    "external_ui": "ui"
  },
  "cache_file": {
    "enabled": true
  }
}
```

## Часто задаваемые вопросы (FAQ)

### 1. Что такое Sing-Box простыми словами?
Sing-Box — это программа, которая перенаправляет ваш интернет-трафик через защищённый канал на зарубежный сервер. Она поддерживает все современные технологии обхода блокировок (VLESS Reality, Hysteria2, WireGuard, XHTTP) в одном приложении. Представьте универсальный пульт управления для любой VPN-технологии.

### 2. Sing-Box — это бесплатно?
Да, Sing-Box полностью бесплатный. Это проект с открытым исходным кодом (лицензия GPL). Вы платите только за аренду VPS-сервера, если используете свой сервер, или за подписку на VPN-сервис, к которому подключаетесь.

### 3. Чем Sing-Box отличается от обычного VPN?
Обычный VPN (OpenVPN, WireGuard) создаёт зашифрованный туннель, который DPI легко детектирует по характерным признакам трафика. Sing-Box маскирует трафик под обычный HTTPS, использует подмену сертификатов и адаптивные протоколы, которые сложнее заблокировать. Кроме того, Sing-Box умеет отправлять российские сайты напрямую, а заблокированные — через прокси (split tunneling).

### 4. Какой протокол в Sing-Box самый надёжный для России в 2026?
VLESS Reality — самый надёжный протокол для обхода блокировок РКН в 2026 году. Он использует криптографическую подмену TLS-сертификата и имитирует работу браузера Chrome. Если VLESS Reality перестаёт работать — попробуйте XHTTP (новый протокол, разработанный специально для обхода новейших DPI).

### 5. Можно ли использовать Sing-Box на iPhone?
Да, через клиент Streisand (поддерживает Sing-Box core) или Sing-Box для iOS (через TestFlight). Ограничения iOS не позволяют Sing-Box перехватывать весь трафик как на Android, но базовый функционал прокси работает.

### 6. Как обновлять Sing-Box?
На сервере: `systemctl stop sing-box && bash <(curl -fsSL https://sing-box.app/deb.sh) && systemctl start sing-box`. На клиентах: перекачать бинарник с GitHub или обновить через менеджер пакетов (brew upgrade sing-box на macOS).

### 7. Sing-Box подходит для игр?
Да. Используйте VLESS Reality с минимальной задержкой. Для CS2, Dota 2, Valorant рекомендуется направить игровой трафик через выделенное правило маршрутизации с приоритетом на скорость. Включите `"udp_over_tcp": false` в настройках, так как UDP поверх TCP добавляет задержку.

### 8. Как проверить, что Sing-Box работает?
Откройте 2ip.ru — если ваш IP изменился на зарубежный — трафик идёт через Sing-Box. Также проверьте YouTube — если видео в 4K грузится без буферизации — всё настроено правильно. Используйте `ping google.com` и `ping yandex.ru` для проверки задержки.

### 9. Почему российские сайты блокируют меня, если я использую Sing-Box?
Потому что весь трафик идёт через зарубежный сервер, и российские сайты видят иностранный IP. Решение: настройте split tunneling — российские сайты через прямой выход (direct), заблокированные — через прокси. Пример конфигурации с правилами для Яндекса, VK и Госуслуг показан выше в разделе «Маршрутизация».

### 10. Какой VPS выбрать для Sing-Box сервера?
Для Sing-Box подойдёт любой VPS за пределами России. Рекомендуемые параметры: 1 vCPU, 512 МБ RAM, 10 ГБ SSD, 1 ТБ трафика. Лучшие локации: Нидерланды (Амстердам), Финляндия (Хельсинки), Германия (Франкфурт). Цена: от $3/мес. Провайдеры: Hetzner, Forpsi, TimeWeb Cloud, Aeza.

### 11. Как перенести конфигурацию Xray в Sing-Box?
Установите Sing-Box на сервер, преобразуйте JSON-конфигурацию Xray в формат Sing-Box, перенесите UUID и Reality-ключи. На клиентах смените Xray-core на Sing-Box в настройках приложения. Подробный гайд по миграции — в соответствующем разделе выше.

### 12. Sing-Box потребляет много батареи на телефоне?
Sing-Box оптимизирован для мобильных устройств. В среднем он потребляет на 15-20% больше батареи, чем без VPN, что сравнимо с любым другим прокси-клиентом. На Android используйте SFI с оптимизацией энергопотребления. На iOS Streisand также экономит заряд.

<hr>

<div style="background: linear-gradient(135deg, #0d9488, #0891b2); padding: 2rem; border-radius: 12px; color: white; margin: 2rem 0;">
<h3 style="color: white; margin-top: 0;">🚀 NEMO VPN — ваш надёжный проводник в мир свободного интернета</h3>
<p style="font-size: 1.05rem; line-height: 1.6;">
Хотите доступ к заблокированным сайтам, YouTube в 4K без буферизации и защиту от DPI-блокировок? 
<strong>NEMO VPN</strong> предлагает готовые серверы с VLESS Reality, Hysteria2 и XHTTP — никаких сложных настроек, всё работает из коробки.
</p>
<ul style="list-style: none; padding: 0;">
<li>✅ Оплата картой МИР, СБП и криптовалютой</li>
<li>✅ Безлимитный трафик — никаких лимитов 15 ГБ</li>
<li>✅ Белые списки — российские сайты работают напрямую</li>
<li>✅ Поддержка всех протоколов: VLESS Reality, Hysteria2, XHTTP, WireGuard</li>
<li>✅ Работает на Windows, macOS, Android, iOS</li>
</ul>
<p style="margin-bottom: 0;">
👉 <a href="https://nemo-vpn.ru" style="color: #fff; font-weight: bold; text-decoration: underline;">Перейти на NEMO VPN</a> — получите доступ к свободному интернету за 2 минуты
</p>
</div>

<hr>

## Заключение

Sing-Box — это не просто очередной прокси-клиент. Это фундаментальный шаг вперёд в технологии обхода блокировок. Его архитектура «один конфиг — все протоколы», встроенный TUN-режим и мощная система маршрутизации делают его идеальным выбором для 2026 года.

Если вы используете Xray — присмотритесь к Sing-Box. Даже если вы не планируете мигрировать полностью, стоит поставить Sing-Box как второй клиент для Hysteria2 и XHTTP — протоколов, которые Xray не поддерживает.

Если вы новичок — начните с Sing-Box. Не нужно разбираться в десятке разных программ. Sing-Box заменит V2Ray, NekoBox, WireGuard и Hysteria2 клиенты одним приложением.

В 2026 году, когда DPI-блокировки становятся всё изощрённее, Sing-Box даёт вам главное преимущество — **универсальность**. Если один протокол перестанет работать, вы переключаетесь на другой без смены программы. Если меняется тактика блокировок — обновление Sing-Box приносит новый протокол обхода.

**Вывод:** устанавливайте Sing-Box, настраивайте маршрутизацию один раз — и забудьте о блокировках.
