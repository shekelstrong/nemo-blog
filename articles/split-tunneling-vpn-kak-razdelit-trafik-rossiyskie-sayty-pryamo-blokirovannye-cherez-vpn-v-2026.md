---
title: "Split Tunneling VPN: как разделить трафик — российские сайты напрямую, заблокированные через VPN в 2026"
description: "Полный гайд по Split Tunneling VPN в России 2026: как направить российские сайты напрямую, а заблокированные через VPN. Настройка на Android, iOS, Windows, Linux, роутерах. V2rayNG, Streisand, NekoBox, AmneziaWG, Xray-core. Include mode vs Exclude mode. Практические примеры и безопасность."
date: "27 апреля 2026"
tags: ["Split Tunneling", "VPN", "маршрутизация", "Android", "iOS", "Windows", "Linux", "V2rayNG", "Streisand", "AmneziaWG", "Xray-core", "белые списки", "обход блокировок", "безопасность", "2026"]
---

import { JsonLdArticle } from '../../components/JsonLdArticle'

export const metadata = {
  title: 'Split Tunneling VPN: как разделить трафик — российские сайты напрямую, заблокированные через VPN в 2026',
  description: 'Полный гайд по Split Tunneling VPN в России 2026: настройка маршрутизации на Android, iOS, Windows, Linux и роутерах. V2rayNG, Streisand, NekoBox, AmneziaWG.',
  keywords: ['Split Tunneling', 'VPN', 'маршрутизация трафика', 'российские сайты', 'блокировки', 'V2rayNG', 'Streisand', 'NekoBox', 'AmneziaWG', 'Xray-core', 'белые списки', '2026'],
  openGraph: {
    title: 'Split Tunneling VPN: как разделить трафик в России 2026',
    description: 'Как направить российские сайты напрямую, а заблокированные через VPN. Полный гайд по настройке на всех платформах.',
    type: 'article',
    publishedTime: '2026-04-27T00:00:00Z',
  },
}

export default function Article() {
  return (
    <article className="prose prose-lg max-w-none">
      <JsonLdArticle
        title="Split Tunneling VPN: как разделить трафик — российские сайты напрямую, заблокированные через VPN в 2026"
        description="Полный гайд по Split Tunneling VPN в России 2026: как направить российские сайты напрямую, а заблокированные через VPN. Настройка на Android, iOS, Windows, Linux, роутерах."
        datePublished="2026-04-27"
        dateModified="2026-04-27"
        authorName="NEMO VPN"
        url="https://nemo-blog.vercel.app/articles/split-tunneling-vpn-kak-razdelit-trafik-rossiyskie-sayty-pryamo-blokirovannye-cherez-vpn-v-2026"
      />

## Split Tunneling VPN: как разделить трафик — российские сайты напрямую, заблокированные через VPN в 2026

С 15 апреля 2026 года российские платформы начали блокировать VPN-пользователей. Банки, маркетплейсы (Ozon, Wildberries, Яндекс Маркет), Госуслуги и другие сервисы ограничивают доступ при включённом VPN. Пользователи вынуждены постоянно включать и выключать VPN по 10+ раз в день, чтобы получить доступ к разным сервисам.

Решение — **Split Tunneling** (раздельное туннелирование). Эта технология позволяет направить часть трафика через VPN, а часть — напрямую в интернет. В этой статье разберём, что такое Split Tunneling, зачем он нужен в России 2026 года, как работает и как настроить на всех платформах.

---

## Что такое Split Tunneling

**Split Tunneling** (раздельное туннелирование) — технология маршрутизации, которая разделяет интернет-трафик на два потока:

1. **Через VPN** — трафик к заблокированным или ограниченным сервисам (Instagram, YouTube, Twitter/X, Netflix)
2. **Напрямую** — трафик к российским сервисам (банки, Госуслуги, маркетплейсы)

Проще говоря, Split Tunneling позволяет одновременно:
- Смотреть YouTube через VPN
- Платить за покупки на Ozon напрямую
- Проверять статус заявки в Госуслугах без VPN

При этом VPN остаётся включённым, но российские сайты не видят, что вы используете VPN, потому что трафик к ним идёт напрямую через вашего провайдера.

### Разница с обычным VPN

Обычный VPN направляет **весь** трафик через VPN-туннель. Провайдер видит только одно зашифрованное соединение к VPN-серверу, но не видит, какие сайты вы посещаете. Однако VPN-сервер знает всё.

Split Tunneling направляет:
- Выбранный трафик через VPN
- Остальной трафик напрямую

Провайдер видит часть трафика (российские сайты), но не видит трафик, идущий через VPN. VPN-сервер знает только о трафике, который проходит через него.

---

## Зачем нужен Split Tunneling в России 2026

В 2026 году возникла **противоречивая ситуация**:

### Проблема 1: Российские сайты блокируют VPN

Банки, маркетплейсы, Госуслуги и другие сервисы начали блокировать пользователей с включённым VPN. Причины:

- **Безопасность** — VPN скрывает реальный IP-адрес пользователя, что противоречит требованиям KYC (Know Your Customer) и AML (Anti-Money Laundering)
- **Борьба с мошенничеством** — многие мошенники используют VPN для скрытия своего местоположения
- **Требования регуляторов** — ЦБ РФ и другие регуляторы требуют идентификации пользователей

### Проблема 2: Заблокированные сервисы требуют VPN

Instagram, YouTube, Twitter/X, Netflix и другие заблокированные сервисы недоступны напрямую из России. Чтобы получить доступ, нужен VPN.

### Двойная ловушка

Получается двойная ловушка:
- С включённым VPN работают YouTube и Instagram, но не работают банки и Госуслуги
- С выключенным VPN работают банки и Госуслуги, но не работают YouTube и Instagram

Пользователи вынуждены постоянно переключать VPN, что:
- Нервно и неудобно
- Ведёт к ошибкам (забыл включить/выключить)
- Увеличивает риск утечки данных (вышел в банк с включённым VPN)

### Решение — Split Tunneling

Split Tunneling решает эту проблему автоматически:
- Российские сервисы — напрямую (банкам не видно VPN)
- Заблокированные сервисы — через VPN (доступ восстановлен)

Больше никаких переключений, всё работает автоматически.

---

## Как работает Split Tunneling

Split Tunneling работает на уровне операционной системы, маршрутизируя пакеты в зависимости от правил.

### Маршрутизация по доменам

Самый популярный метод — маршрутизация по доменам. Вы задаёте список доменов, которые должны идти через VPN, и всё остальное идёт напрямую.

Пример:
- `*.instagram.com` — через VPN
- `*.youtube.com` — через VPN
- `*.twitter.com` — через VPN
- `*.sberbank.ru` — напрямую
- `*.gosuslugi.ru` — напрямую
- `*.ozon.ru` — напрямую

Все остальные домены — по умолчанию напрямую.

### Маршрутизация по IP-адресам

Менее гибкий, но более быстрый метод — маршрутизация по IP-адресам. Вы задаёте диапазоны IP-адресов, которые должны идти через VPN.

Пример:
- `31.13.0.0/16` (Facebook/Instagram) — через VPN
- `172.217.0.0/16` (Google/YouTube) — через VPN
- `104.244.0.0/16` (Twitter/X) — через VPN
- Все остальные IP — напрямую

Минус — IP-адреса сервисов могут меняться, и правила нужно обновлять.

### Маршрутизация по приложениям

На некоторых платформах можно настроить маршрутизацию по приложениям — определённые приложения всегда идут через VPN, а остальные — напрямую.

Пример:
- YouTube — через VPN
- Instagram — через VPN
- Банковское приложение — напрямую
- Ozon — напрямую

Минус — не все платформы поддерживают этот метод.

---

## Типы Split Tunneling: Include Mode vs Exclude Mode

Существует два режима работы Split Tunneling:

### Include Mode (только выбранное через VPN)

По умолчанию весь трафик идёт напрямую, а вы выбираете, что должно идти через VPN.

```
По умолчанию: Прямо
Через VPN: Instagram, YouTube, Twitter, Netflix
```

**Плюсы:**
- Безопаснее по умолчанию (меньше трафика через VPN)
- Меньше нагрузка на VPN-сервер

**Минусы:**
- Нужно вручную добавлять все заблокированные домены
- Если забыли добавить новый заблокированный сайт — он не будет работать

**Когда использовать:**
- В России 2026 — оптимальный вариант, потому что большинство сервисов работают напрямую

### Exclude Mode (всё через VPN, кроме выбранного)

По умолчанию весь трафик идёт через VPN, а вы выбираете, что должно идти напрямую.

```
По умолчанию: Через VPN
Напрямую: Банки, Госуслуги, Ozon, Wildberries, Яндекс Маркет
```

**Плюсы:**
- Меньше правил (исключить пару десятков российских сервисов)
- Все заблокированные сайты работают автоматически

**Минусы:**
- Меньше безопасности (весь трафик через VPN по умолчанию)
- Больше нагрузка на VPN-сервер

**Когда использовать:**
- Когда нужно максимальное приватность и все сервисы (кроме российских) должны идти через VPN

---

## Настройка Split Tunneling на Android

На Android популярные клиенты поддерживают маршрутизацию по доменам.

### V2rayNG

V2rayNG — один из самых популярных VPN-клиентов для Android.

**Настройка Split Tunneling:**

1. Откройте V2rayNG
2. Нажмите на иконку настроек (шестерёнка)
3. Выберите "Правила маршрутизации" (Routing Rules)
4. Добавьте правила для доменов:

```
domain:sberbank.ru,direct
domain:gosuslugi.ru,direct
domain:ozon.ru,direct
domain:wildberries.ru,direct
domain:yandex.ru,direct
domain:vk.com,direct

domain:instagram.com,proxy
domain:youtube.com,proxy
domain:twitter.com,proxy
domain:netflix.com,proxy
```

5. Сохраните правила
6. Переподключите VPN

**Объяснение:**
- `domain:example.com,direct` — домен идёт напрямую
- `domain:example.com,proxy` — домен идёт через VPN

**Совет:** Используйте шаблоны с `*.` для всех поддоменов:
- `domain:*.sberbank.ru,direct`

### Streisand

Streisand — ещё один популярный клиент для Android (теперь недоступен в Google Play, но можно найти на сторонних ресурсах).

**Настройка Split Tunneling:**

1. Откройте Streisand
2. Перейдите в настройки маршрутизации
3. Выберите режим "Include Mode" (только выбранное через VPN)
4. Добавьте домены, которые должны идти через VPN:
   - `*.instagram.com`
   - `*.youtube.com`
   - `*.twitter.com`
   - `*.netflix.com`
5. Сохраните настройки
6. Переподключите VPN

### NekoBox

NekoBox — клиент на базе Xray-core с поддержкой множества протоколов.

**Настройка Split Tunneling:**

1. Откройте NekoBox
2. Перейдите в настройки → Routing
3. Включите "Custom Routing"
4. Добавьте правила:

```
{
  "routing": {
    "domainStrategy": "AsIs",
    "rules": [
      {
        "type": "field",
        "domain": ["domain:sberbank.ru", "domain:gosuslugi.ru", "domain:ozon.ru"],
        "outboundTag": "direct"
      },
      {
        "type": "field",
        "domain": ["domain:instagram.com", "domain:youtube.com", "domain:twitter.com"],
        "outboundTag": "proxy"
      }
    ]
  }
}
```

5. Сохраните конфигурацию
6. Переподключите VPN

---

## Настройка Split Tunneling на iOS

На iOS есть два основных подхода: прокси-режим и VPN-режим.

### Streisand (proxy-режим vs VPN-режим)

Streisand на iOS может работать в двух режимах:

**Proxy-режим:**
- Использует системные настройки прокси
- Менее интегрирован, но больше гибкости в маршрутизации
- Некоторые приложения могут игнорировать системный прокси

**VPN-режим:**
- Использует Apple Network Extension
- Полная интеграция с системой
- Все приложения идут через VPN (или по правилам Split Tunneling)

**Настройка Split Tunneling в Streisand:**

1. Откройте Streisand
2. Перейдите в настройки конфигурации
3. Выберите "Routing Rules"
4. Включите режим "Include Mode"
5. Добавьте домены для VPN:
   - `*.instagram.com`
   - `*.youtube.com`
   - `*.twitter.com`
6. Сохраните настройки
7. Переподключите VPN

### v2Box

v2Box — ещё один популярный клиент для iOS (нужно установить через альтернативные источники, так как удалён из App Store).

**Настройка Split Tunneling:**

1. Откройте v2Box
2. Перейдите в настройки → Routing
3. Включите "Custom Routing"
4. Добавьте правила в формате JSON:

```json
{
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "type": "field",
        "domain": [
          "geosite:category-banking",
          "domain:gosuslugi.ru",
          "domain:ozon.ru",
          "domain:wildberries.ru"
        ],
        "outboundTag": "direct"
      },
      {
        "type": "field",
        "domain": [
          "geosite:youtube",
          "geosite:instagram",
          "geosite:twitter"
        ],
        "outboundTag": "proxy"
      }
    ]
  }
}
```

5. Сохраните конфигурацию
6. Переподключите VPN

---

## Настройка Split Tunneling на Windows

На Windows доступно несколько клиентов с поддержкой Split Tunneling.

### Xray-core

Xray-core — это ядро, на котором работают многие клиенты. Можно использовать напрямую через командную строку или через GUI-обёртки.

**Настройка Split Tunneling через JSON-конфиг:**

1. Создайте файл `config.json`:

```json
{
  "log": {
    "loglevel": "warning"
  },
  "inbounds": [
    {
      "port": 10808,
      "protocol": "socks",
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      }
    },
    {
      "port": 10809,
      "protocol": "http"
    }
  ],
  "outbounds": [
    {
      "protocol": "vless",
      "settings": {
        "vnext": [
          {
            "address": "your-server.com",
            "port": 443,
            "users": [
              {
                "id": "your-uuid",
                "encryption": "none"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "security": "reality",
        "realitySettings": {
          "dest": "www.google.com",
          "serverNames": ["your-server.com"],
          "privateKey": "your-private-key",
          "shortIds": ["your-short-id"]
        }
      },
      "tag": "proxy"
    },
    {
      "protocol": "freedom",
      "tag": "direct"
    }
  ],
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "type": "field",
        "domain": [
          "domain:sberbank.ru",
          "domain:gosuslugi.ru",
          "domain:ozon.ru",
          "domain:wildberries.ru",
          "domain:yandex.ru",
          "domain:vk.com",
          "domain:alfabank.ru",
          "domain:tinkoff.ru",
          "domain:vtb.ru"
        ],
        "outboundTag": "direct"
      },
      {
        "type": "field",
        "domain": [
          "domain:instagram.com",
          "domain:youtube.com",
          "domain:twitter.com",
          "domain:netflix.com",
          "domain:facebook.com"
        ],
        "outboundTag": "proxy"
      },
      {
        "type": "field",
        "ip": [
          "geoip:private"
        ],
        "outboundTag": "direct"
      },
      {
        "type": "field",
        "network": "tcp,udp",
        "outboundTag": "proxy"
      }
    ]
  }
}
```

2. Запустите Xray:
```bash
xray.exe -config config.json
```

3. Настройте прокси в браузере на `127.0.0.1:10808` (SOCKS) или `127.0.0.1:10809` (HTTP)

### AmneziaVPN

AmneziaVPN — открытый VPN-клиент с поддержкой Split Tunneling.

**Настройка Split Tunneling:**

1. Откройте AmneziaVPN
2. Подключитесь к своему серверу
3. Нажмите на настройки подключения
4. Выберите "Split Tunneling"
5. Добавьте исключения (домены, которые идут напрямую):
   - `*.sberbank.ru`
   - `*.gosuslugi.ru`
   - `*.ozon.ru`
   - `*.wildberries.ru`
6. Сохраните настройки
7. Переподключитесь к серверу

### NekoRay

NekoRay — GUI-клиент на базе Xray-core для Windows.

**Настройка Split Tunneling:**

1. Откройте NekoRay
2. Перейдите в настройки → Routing
3. Включите "Enable Routing"
4. Выберите режим "Script Mode"
5. Добавьте правила:

```
# Russian services - direct
domain:sberbank.ru direct
domain:gosuslugi.ru direct
domain:ozon.ru direct
domain:wildberries.ru direct
domain:yandex.ru direct
domain:vk.com direct

# Blocked services - proxy
domain:instagram.com proxy
domain:youtube.com proxy
domain:twitter.com proxy
domain:netflix.com proxy

# Default - direct
default direct
```

6. Сохраните правила
7. Переподключите VPN

---

## Настройка Split Tunneling на Linux

На Linux можно настроить Split Tunneling через ip route или через VPN-клиенты.

### AmneziaWG с Split Tunneling

AmneziaWG — это форк WireGuard с улучшенной обфускацией и поддержкой Split Tunneling.

**Настройка через конфигурацию AmneziaWG:**

1. Установите AmneziaWG:
```bash
sudo apt update
sudo apt install amneziawg
```

2. Создайте конфигурацию `/etc/amneziawg/wg0.conf`:

```ini
[Interface]
PrivateKey = your-private-key
Address = 10.0.0.2/24
DNS = 8.8.8.8, 8.8.4.4

# Split tunneling - direct routes
PostUp = ip route add 185.32.57.0/24 via $(ip route | grep default | awk '{print $3}')
PostUp = ip route add 77.88.0.0/16 via $(ip route | grep default | awk '{print $3}')
PostUp = ip route add 87.250.0.0/16 via $(ip route | grep default | awk '{print $3}')
PostUp = ip route add 5.45.0.0/16 via $(ip route | grep default | awk '{print $3}')

[Peer]
PublicKey = server-public-key
Endpoint = your-server.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
```

3. Запустите AmneziaWG:
```bash
sudo systemctl enable wg0@wg0
sudo systemctl start wg0@wg0
```

**Объяснение:**
- `AllowedIPs = 0.0.0.0/0` — весь трафик по умолчанию через VPN
- `PostUp` команды добавляют исключения для российских IP-диапазонов

### Настройка через ip route

Если вы используете стандартный WireGuard, можно настроить Split Tunneling вручную.

**Пример:**

1. Создайте конфигурацию `/etc/wireguard/wg0.conf`:

```ini
[Interface]
PrivateKey = your-private-key
Address = 10.0.0.2/24
DNS = 8.8.8.8

[Peer]
PublicKey = server-public-key
Endpoint = your-server.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
```

2. Создайте скрипт `/usr/local/bin/wg-split-tunnel.sh`:

```bash
#!/bin/bash

# Get default gateway
DEFAULT_GW=$(ip route | grep default | awk '{print $3}')

# Russian IP ranges (examples)
IP_RANGES=(
  "185.32.57.0/24"    # Sberbank
  "77.88.0.0/16"      # Yandex
  "87.250.0.0/16"     # Yandex
  "5.45.0.0/16"       # Mail.ru
  "185.16.0.0/16"     # VK
)

# Add direct routes
for ip in "${IP_RANGES[@]}"; do
  ip route add "$ip" via "$DEFAULT_GW"
done
```

3. Сделайте скрипт исполняемым:
```bash
chmod +x /usr/local/bin/wg-split-tunnel.sh
```

4. Добавьте в конфиг WireGuard:
```ini
[Interface]
...
PostUp = /usr/local/bin/wg-split-tunnel.sh
```

### Systemd-сервис для автоматического запуска

На Хабре есть хороший пример настройки Split Tunneling на промежуточном сервере через AmneziaWG с systemd-сервисом для чистого запуска.

**Создайте сервис `/etc/systemd/system/amneziawg-split.service`:**

```ini
[Unit]
Description=AmneziaWG Split Tunneling
After=network.target

[Service]
Type=simple
ExecStart=/usr/bin/wg-quick up wg0
ExecStop=/usr/bin/wg-quick down wg0
Restart=on-failure
RestartSec=5

[Install]
WantedBy=multi-user.target
```

**Включите сервис:**
```bash
sudo systemctl enable amneziawg-split
sudo systemctl start amneziawg-split
```

---

## Настройка Split Tunneling на роутере

Настройка Split Tunneling на роутере позволяет защитить все устройства в сети сразу.

### ExpressVPN: группы устройств

ExpressVPN поддерживает раздельное туннелирование на роутерах с группами устройств.

**Настройка:**

1. Установите ExpressVPN на роутер
2. Перейдите в административную панель
3. Выберите "Split Tunneling"
4. Добавьте устройства, которые должны использовать VPN:
   - Smart TV
   - Консоли
   - Компьютеры
5. Оставьте остальные устройства без VPN (банки, телефоны)

Минус — ExpressVPN может быть недоступен или заблокирован в России.

### OpenWrt с policy routing

OpenWrt — это прошивка для роутеров с расширенными возможностями маршрутизации.

**Настройка через policy routing:**

1. Установите OpenWrt на роутер
2. Установите необходимые пакеты:
```bash
opkg update
opkg install luci-app-vpn-policy-routing
```

3. Перейдите в LuCI (веб-интерфейс)
4. Network → Firewall → Policy Routing
5. Добавьте правила:

```
# YouTube - VPN
dest *.youtube.com
dest 172.217.0.0/16
interface vpn

# Instagram - VPN
dest *.instagram.com
dest 31.13.0.0/16
interface vpn

# Sberbank - direct
dest *.sberbank.ru
dest 185.32.57.0/24
interface wan

# Default - VPN
dest *
interface vpn
```

6. Сохраните и примените настройки

### Passwall2 для OpenWrt

Passwall2 — популярный плагин для OpenWrt с поддержкой множества протоколов и Split Tunneling.

**Настройка:**

1. Установите Passwall2:
```bash
opkg update
opkg install luci-app-passwall
```

2. Перейдите в LuCI → Services → Passwall
3. Создайте ноду (сервер)
4. Настройте правила маршрутизации:
   - Домены для VPN: `*.instagram.com`, `*.youtube.com`, `*.twitter.com`
   - Домены для direct: `*.sberbank.ru`, `*.gosuslugi.ru`, `*.ozon.ru`
5. Сохраните и запустите Passwall2

---

## Практические примеры

### Пример 1: Банки и Госуслуги напрямую, YouTube и Instagram через VPN

**Include Mode:**
```
Через VPN:
- *.instagram.com
- *.youtube.com
- *.twitter.com
- *.netflix.com

Напрямую (по умолчанию):
- *.sberbank.ru
- *.gosuslugi.ru
- *.ozon.ru
- *.wildberries.ru
- Все остальные
```

### Пример 2: Всё через VPN, кроме российских банков

**Exclude Mode:**
```
Напрямую:
- *.sberbank.ru
- *.alfabank.ru
- *.tinkoff.ru
- *.vtb.ru
- *.gosuslugi.ru

Через VPN (по умолчанию):
- Все остальные
```

### Пример 3: Маршрутизация по приложениям

**Android с NekoBox:**
```
Через VPN:
- YouTube
- Instagram
- Netflix
- Twitter

Напрямую:
- Сбербанк Онлайн
- ВТБ Мои Инвестиции
- Ozon
- Wildberries
```

---

## Безопасность: риски утечки при неправильной настройке

При неправильной настройке Split Tunneling возможны утечки данных.

### Риск 1: DNS-утечки

Если DNS-запросы идут напрямую, а трафик через VPN (или наоборот), провайдер видит, какие сайты вы посещаете.

**Решение:**
- Используйте VPN-провайдера с собственным DNS
- Настройте DNS-over-HTTPS (DoH) или DNS-over-TLS (DoT)
- Проверьте утечки через онлайн-тесты (dnsleaktest.com, ipleak.net)

### Риск 2: WebRTC-утечки

WebRTC может раскрывать реальный IP-адрес даже при включённом VPN.

**Решение:**
- Отключите WebRTC в браузере
- Используйте расширения для блокировки WebRTC
- Выберите VPN с защитой от WebRTC-утечек

### Риск 3: IPv6-утечки

Если VPN не поддерживает IPv6, трафик по IPv6 может идти напрямую.

**Решение:**
- Отключите IPv6 в настройках ОС
- Выберите VPN с поддержкой IPv6

### Риск 4: Ошибки в правилах маршрутизации

Если забыли добавить домен в правила, он может идти не туда.

**Решение:**
- Регулярно проверяйте конфигурацию
- Используйте Include Mode для безопасности по умолчанию
- Тестируйте правила перед использованием

---

## NEMO VPN: готовые конфиги с маршрутизацией — российские сервисы работают

NEMO VPN предоставляет готовые конфигурации с уже настроенным Split Tunneling для России 2026.

### Преимущества NEMO VPN

- **Готовые правила маршрутизации** — российские сервисы идут напрямую, заблокированные через VPN
- **Протокол VLESS Reality** — устойчив к DPI и блокировкам
- **Автоматические обновления** — правила обновляются автоматически при изменении блокировок
- **Простая настройка** — импортируйте конфиг и всё работает
- **Поддержка всех платформ** — Android, iOS, Windows, Linux, роутеры
- **Оплата в рублях** — через CryptoBot, Platega, ЮMoney

### Как начать

1. Откройте бот [@nemo_vpn_bot](https://t.me/nemo_vpn_bot) в Telegram
2. Выберите тариф
3. Получите конфигурацию с готовыми правилами маршрутизации
4. Импортируйте в ваш клиент
5. Готово — российские сервисы работают напрямую, заблокированные через VPN

**Больше никаких переключений VPN — всё работает автоматически!**

---

## Заключение

Split Tunneling — необходимый инструмент в России 2026 года. Российские сервисы блокируют VPN-пользователей, а заблокированные сервисы требуют VPN. Split Tunneling решает эту проблему автоматически.

**Ключевые моменты:**

- **Include Mode** — оптимальный вариант для России (по умолчанию всё напрямую, только заблокированное через VPN)
- **Настройка на всех платформах** — Android (V2rayNG, Streisand, NekoBox), iOS (Streisand, v2Box), Windows (Xray-core, AmneziaVPN, NekoRay), Linux (AmneziaWG, ip route), роутеры (OpenWrt, Passwall2)
- **Безопасность** — проверяйте DNS-утечки, WebRTC-утечки, IPv6-утечки
- **NEMO VPN** — готовые конфиги с маршрутизацией, протокол VLESS Reality, оплата в рублях

Настройте Split Tunneling сегодня и забудьте о постоянном включении и выключении VPN!

---

## Полезные ссылки

- [V2rayNG GitHub](https://github.com/2dust/v2rayNG)
- [Streisand GitHub](https://github.com/StreisandEffect/streisand)
- [NekoBox GitHub](https://github.com/MatsuriDayo/nekoray)
- [AmneziaWG GitHub](https://github.com/amnezia-vpn/amneziawg-core)
- [NekoRay GitHub](https://github.com/MatsuriDayo/NekoRay)
- [OpenWrt Passwall2](https://github.com/xiaorouji/openwrt-passwall)
- [Хабр: настройка Split-Tunneling на промежуточном сервере через AmneziaWG](https://habr.com/ru/post/XXXXX/)
- [ZoogVPN: Split Tunneling](https://zoogvpn.com/blog/split-tunneling/)
- [Scalefusion: раздельное туннелирование](https://www.scalefusion.com/blog/what-is-split-tunneling/)
- [X-VPN: классификация трафика](https://www.xvpn.io/split-tunneling/)
- [ExpressVPN: раздельное туннелирование для роутеров](https://www.expressvpn.com/support/vpn-router/split-tunneling-router/)

---

*Статья обновлена: 27 апреля 2026*
    </article>
  )
}
