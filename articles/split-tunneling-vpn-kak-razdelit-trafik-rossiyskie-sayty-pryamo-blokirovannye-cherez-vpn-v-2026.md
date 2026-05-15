---
title: "Split Tunneling VPN: как разделить трафик — российские сайты напрямую, заблокированные через VPN в 2026"
description: "Полный гайд по Split Tunneling VPN в России 2026: как направить российские сайты напрямую, а заблокированные через VPN. Настройка на Android, iOS, Windows, Linux, роутерах. V2rayNG, Streisand, NekoBox, AmneziaWG, Xray-core. Include mode vs Exclude mode. Практические примеры и безопасность."
image: "/articles/images/split-tunneling-vpn-kak-razdelit-trafik-rossiyskie-sayty-pryamo-blokirovannye-cherez-vpn-v-2026.jpg"
date: '2026-04-27'
tags: ["Split Tunneling", "VPN", "маршрутизация", "Android", "iOS", "Windows", "Linux", "V2rayNG", "Streisand", "AmneziaWG", "Xray-core", "белые списки", "обход блокировок", "безопасность", "2026"]
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Split Tunneling VPN: как разделить трафик — российские сайты напрямую, заблокированные через VPN в 2026",
  "description": "Полный гайд по Split Tunneling VPN в России 2026: как направить российские сайты напрямую, а заблокированные через VPN. Настройка на Android, iOS, Windows, Linux, роутерах.",
  "datePublished": "2026-04-27",
  "dateModified": "2026-04-27",
  "author": {
    "@type": "Organization",
    "name": "NEMO VPN"
  },
  "url": "https://nemo-blog.vercel.app/articles/split-tunneling-vpn-kak-razdelit-trafik-rossiyskie-sayty-pryamo-blokirovannye-cherez-vpn-v-2026",
  "publisher": {
    "@type": "Organization",
    "name": "NEMO VPN"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://nemo-blog.vercel.app/articles/split-tunneling-vpn-kak-razdelit-trafik-rossiyskie-sayty-pryamo-blokirovannye-cherez-vpn-v-2026"
  }
}
</script>

## Split Tunneling VPN: как разделить трафик — российские сайты напрямую, заблокированные через VPN в 2026

С 2026-04-15 года российские платформы начали блокировать VPN-пользователей. Банки, маркетплейсы (Ozon, Wildberries, Яндекс Маркет), Госуслуги и другие сервисы ограничивают доступ при включённом VPN. Пользователи вынуждены постоянно включать и выключать VPN по 10+ раз в день, чтобы получить доступ к разным сервисам.

Решение — **Split Tunneling** (раздельное туннелирование). Эта технология позволяет направить часть трафика через VPN, а часть — напрямую в интернет. В этой статье разберём, что такое Split Tunneling, зачем он нужен в России 2026 года, как работает, какие протоколы и клиенты поддерживают, и как настроить на всех платформах — от Android до роутеров на OpenWrt.

---

## Что такое Split Tunneling

**Split Tunneling** (раздельное туннелирование) — технология маршрутизации, которая разделяет интернет-трафик на два потока:

1. **Через VPN** — трафик к заблокированным или ограниченным сервисам (Instagram, YouTube, Twitter/X, Netflix)
2. **Напрямую** — трафик к российским сервисам (банки, Госуслуги, маркетплейсы)

Проще говоря, Split Tunneling позволяет одновременно:
- Смотреть YouTube через VPN
- Платить за покупки на Ozon напрямую
- Проверять статус заявки в Госуслугах без VPN

При этом VPN остаётся включённым, но российские сайты не видят, что вы используете VPN, потому что трафик к ним идёт напрямую через вашего провайдера. Это критически важно: банк видит ваш реальный российский IP-адрес и не блокирует доступ, а заблокированные иностранные сервисы получают IP-адрес VPN-сервера из другой страны.

### Разница с обычным VPN

Обычный VPN направляет **весь** трафик через VPN-туннель. Провайдер видит только одно зашифрованное соединение к VPN-серверу, но не видит, какие сайты вы посещаете. Однако VPN-сервер знает всё. Кроме того, когда весь трафик идёт через VPN, российские банки и сервисы видят_foreign_-IP и блокируют доступ.

Split Tunneling направляет:
- Выбранный трафик через VPN
- Остальной трафик напрямую

Провайдер видит часть трафика (российские сайты), но не видит трафик, идущий через VPN. VPN-сервер знает только о трафике, который проходит через него. Это оптимальный баланс между приватностью и доступностью сервисов.

### Сравнение: обычный VPN vs Split Tunneling vs без VPN

| Характеристика | Без VPN | Обычный VPN | Split Tunneling |
|---|---|---|---|
| Доступ к заблокированным сайтам | Нет | Да | Да |
| Доступ к российским банкам | Да | Нет (блокировка) | Да |
| Приватность от провайдера | Нет | Полная | Частичная |
| Нагрузка на VPN-сервер | — | Высокая | Низкая |
| Скорость на российских сайтах | Полная | Снижена | Полная |
| Риск утечки данных | Высокий | Низкий | Средний |
| Простота настройки | — | Простая | Средняя |

---

## Зачем нужен Split Tunneling в России 2026

В 2026 году возникла **противоречивая ситуация**: с одной стороны, российские сервисы активно блокируют VPN-пользователей, с другой — заблокированные иностранные платформы доступны только через VPN. Это создаёт двойную ловушку для обычных пользователей.

### Проблема 1: Российские сайты блокируют VPN

Банки, маркетплейсы, Госуслуги и другие сервисы начали блокировать пользователей с включённым VPN. Причины:

- **Безопасность** — VPN скрывает реальный IP-адрес пользователя, что противоречит требованиям KYC (Know Your Customer) и AML (Anti-Money Laundering). Финансовые организации обязаны идентифицировать клиентов, и_foreign_-IP-адрес — это красный флаг.
- **Борьба с мошенничеством** — многие мошенники используют VPN для скрытия своего местоположения. Банки предпочитают перестраховаться и блокируют все подозрительные подключения.
- **Требования регуляторов** — ЦБ РФ и другие регуляторы требуют идентификации пользователей. Использование VPN при входе в банковское приложение рассматривается как подозрительная активность.

### Проблема 2: Заблокированные сервисы требуют VPN

Instagram, YouTube, Twitter/X, Netflix и другие заблокированные сервисы недоступны напрямую из России. Чтобы получить доступ, нужен VPN. При этом некоторые из этих платформ также ограничивают контент по региону, поэтому нужно не просто любой VPN, а VPN с серверами в нужных странах.

### Двойная ловушка

Получается двойная ловушка:
- С включённым VPN работают YouTube и Instagram, но не работают банки и Госуслуги
- С выключенным VPN работают банки и Госуслуги, но не работают YouTube и Instagram

Пользователи вынуждены постоянно переключать VPN, что:
- Нервно и неудобно (10+ переключений в день)
- Ведёт к ошибкам (забыл включить/выключить)
- Увеличивает риск утечки данных (вышел в банк с включённым VPN)
- Снижает общий уровень безопасности (иногда забываешь включить VPN обратно)

### Решение — Split Tunneling

Split Tunneling решает эту проблему автоматически:
- Российские сервисы — напрямую (банкам не видно VPN)
- Заблокированные сервисы — через VPN (доступ восстановлен)

Больше никаких переключений, всё работает автоматически. Это как иметь два интернета в одном устройстве: один для российских сайтов через провайдера, другой для заблокированных через VPN.

---

## Как работает Split Tunneling

Split Tunneling работает на уровне операционной системы, маршрутизируя пакеты в зависимости от правил. Когда приложение отправляет запрос к `sberbank.ru`, система проверяет правила маршрутизации и направляет пакет напрямую через провайдера. Когда приложение запрашивает `youtube.com`, пакет идёт через VPN-туннель.

### Маршрутизация по доменам

Самый популярный и гибкий метод — маршрутизация по доменам. Вы задаёте список доменов, которые должны идти через VPN, и всё остальное идёт напрямую. Клиенты на базе Xray-core (V2rayNG, NekoBox, NekoRay) поддерживают маршрутизацию по доменам из коробки.

Пример:
- `*.instagram.com` — через VPN
- `*.youtube.com` — через VPN
- `*.twitter.com` — через VPN
- `*.sberbank.ru` — напрямую
- `*.gosuslugi.ru` — напрямую
- `*.ozon.ru` — напрямую

Все остальные домены — по умолчанию напрямую.

**Преимущества:** гибкость, автоматическая обработка поддоменов, не нужно обновлять IP-адреса.
**Недостатки:** требует DNS-sniffing (перехват DNS-запросов) для работы с зашифрованным трафиком.

### Маршрутизация по IP-адресам

Менее гибкий, но более быстрый метод — маршрутизация по IP-адресам. Вы задаёте диапазоны IP-адресов, которые должны идти через VPN. WireGuard и AmneziaWG работают именно на уровне IP-адресов.

Пример:
- `31.13.0.0/16` (Facebook/Instagram) — через VPN
- `172.217.0.0/16` (Google/YouTube) — через VPN
- `104.244.0.0/16` (Twitter/X) — через VPN
- Все остальные IP — напрямую

Минус — IP-адреса сервисов могут меняться, и правила нужно обновлять. Крупные сервисы используют CDN с тысячами IP-адресов, поэтому составить точный список сложно.

### Маршрутизация по приложениям

На некоторых платформах можно настроить маршрутизацию по приложениям — определённые приложения всегда идут через VPN, а остальные — напрямую. Android и Windows поддерживают этот метод через VPN-клиенты.

Пример:
- YouTube — через VPN
- Instagram — через VPN
- Банковское приложение — напрямую
- Ozon — напрямую

Минус — не все платформы и клиенты поддерживают этот метод. iOS, например, ограничивает доступ к информации о приложениях, что делает маршрутизацию по приложениям сложнее.

### Сравнение методов маршрутизации

| Метод | Гибкость | Скорость | Сложность настройки | Поддержка клиентов |
|---|---|---|---|---|
| По доменам | Высокая | Средняя | Средняя | V2rayNG, NekoBox, NekoRay, Xray-core |
| По IP-адресам | Низкая | Высокая | Низкая | WireGuard, AmneziaWG, ip route |
| По приложениям | Средняя | Высокая | Низкая | Android VPN API, AmneziaVPN |

---

## Типы Split Tunneling: Include Mode vs Exclude Mode

Существует два режима работы Split Tunneling, и выбор между ними — один из самых важных решений при настройке.

### Include Mode (только выбранное через VPN)

По умолчанию весь трафик идёт напрямую, а вы выбираете, что должно идти через VPN.

```
По умолчанию: Прямо
Через VPN: Instagram, YouTube, Twitter, Netflix
```

**Плюсы:**
- Безопаснее по умолчанию (меньше трафика через VPN)
- Меньше нагрузка на VPN-сервер
- Российские сервисы гарантированно работают напрямую
- Меньше риск утечки данных через VPN

**Минусы:**
- Нужно вручную добавлять все заблокированные домены
- Если забыли добавить новый заблокированный сайт — он не будет работать
- Требуется обновление списка при новых блокировках

**Когда использовать:**
- В России 2026 — оптимальный вариант, потому что большинство сервисов работают напрямую
- Когда важна максимальная скорость доступа к российским сайтам
- Когда VPN-сервер ограничен по трафику

### Exclude Mode (всё через VPN, кроме выбранного)

По умолчанию весь трафик идёт через VPN, а вы выбираете, что должно идти напрямую.

```
По умолчанию: Через VPN
Напрямую: Банки, Госуслуги, Ozon, Wildberries, Яндекс Маркет
```

**Плюсы:**
- Меньше правил (исключить пару десятков российских сервисов)
- Все заблокированные сайты работают автоматически
- Не нужно обновлять список при новых блокировках
- Максимальная приватность для всего остального трафика

**Минусы:**
- Меньше безопасности (весь трафик через VPN по умолчанию, VPN-сервер видит всё)
- Больше нагрузка на VPN-сервер
- Скорость доступа к российским сайтам может снижаться
- Риск забыть добавить российский сервис в исключения (и получить блокировку)

**Когда использовать:**
- Когда нужна максимальная приватность и все сервисы (кроме российских) должны идти через VPN
- Когда VPN-сервер имеет достаточную пропускную способность
- Когда вы не хотите думать о том, какие сайты заблокированы

### Сравнение режимов

| Критерий | Include Mode | Exclude Mode |
|---|---|---|
| Трафик по умолчанию | Напрямую | Через VPN |
| Количество правил | Много (все заблокированные) | Мало (только российские) |
| Приватность | Низкая (провайдер видит) | Высокая (VPN шифрует) |
| Нагрузка на VPN | Низкая | Высокая |
| Риск при новой блокировке | Сайт не работает | Сайт работает |
| Риск при новом российском сервисе | Сайт работает | Сайт может блокировать |
| Рекомендация для России 2026 | Да | Как альтернатива |

---

## Протоколы для Split Tunneling

Выбор протокола VPN влияет на то, как настраивается Split Tunneling и насколько он устойчив к блокировкам.

### VLESS Reality

**VLESS Reality** — самый продвинутый протокол для обхода блокировок в 2026 году. Это развитие протокола VLESS с технологией маскировки Reality, которая делает VPN-трафик неотличимым от обычного HTTPS-трафика.

**Преимущества для Split Tunneling:**
- Поддержка маршрутизации по доменам из коробки (через Xray-core)
- Устойчив к DPI-блокировкам (Deep Packet Inspection не может отличить трафик от обычного)
- Высокая скорость и низкие задержки
- Поддержка в V2rayNG, NekoBox, NekoRay, v2Box

**Настройка:** VLESS Reality поддерживается всеми клиентами на базе Xray-core. Маршрутизация настраивается через JSON-конфиг, как показано ниже в разделе настройки Windows.

### WireGuard

**WireGuard** — быстрый и простой протокол VPN, но он работает на уровне IP-адресов, что ограничивает возможности маршрутизации по доменам.

**Преимущества:**
- Очень высокая скорость
- Низкие задержки
- Простая конфигурация
- Встроенная поддержка в ядре Linux

**Недостатки для Split Tunneling:**
- Нет маршрутизации по доменам — только по IP
- Легко блокируется по сигнатурам (решается через AmneziaWG)
- Требует ручного обновления IP-диапазонов

### AmneziaWG

**AmneziaWG** — форк WireGuard с улучшенной обфускацией, которая маскирует VPN-трафик и затрудняет блокировку. Для Split Tunneling используется так же, как WireGuard — через IP-маршруты.

### Сравнение протоколов для Split Tunneling

| Протокол | Маршрутизация по доменам | Устойчивость к DPI | Скорость | Сложность настройки |
|---|---|---|---|---|
| VLESS Reality | Да | Очень высокая | Высокая | Средняя |
| WireGuard | Нет (только IP) | Низкая | Очень высокая | Низкая |
| AmneziaWG | Нет (только IP) | Высокая | Очень высокая | Низкая |
| OpenVPN | Частично | Средняя | Средняя | Высокая |
| Shadowsocks | Да (через Xray) | Высокая | Высокая | Средняя |

---

## Настройка Split Tunneling на Android

На Android популярные клиенты поддерживают маршрутизацию по доменам. Это предпочтительная платформа для настройки Split Tunneling благодаря гибкости VPN API.

### V2rayNG

V2rayNG — один из самых популярных VPN-клиентов для Android с поддержкой VLESS Reality.

**Настройка Split Tunneling:**

1. Откройте V2rayNG
2. Нажмите на иконку настроек (шестерёнка)
3. Выберите «Правила маршрутизации» (Routing Rules)
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

Это гарантирует, что `online.sberbank.ru`, `ib.sberbank.ru` и другие поддомены тоже будут работать напрямую.

### Streisand

Streisand — ещё один популярный клиент для Android (теперь недоступен в Google Play, но можно найти на сторонних ресурсах). Поддерживает VLESS Reality и множество других протоколов.

**Настройка Split Tunneling:**

1. Откройте Streisand
2. Перейдите в настройки маршрутизации
3. Выберите режим «Include Mode» (только выбранное через VPN)
4. Добавьте домены, которые должны идти через VPN:
   - `*.instagram.com`
   - `*.youtube.com`
   - `*.twitter.com`
   - `*.netflix.com`
5. Сохраните настройки
6. Переподключите VPN

### NekoBox

NekoBox — клиент на базе Xray-core с поддержкой множества протоколов, включая VLESS Reality.

**Настройка Split Tunneling:**

1. Откройте NekoBox
2. Перейдите в настройки → Routing
3. Включите «Custom Routing»
4. Добавьте правила:

```json
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

На iOS есть два основных подхода: прокси-режим и VPN-режим. Apple ограничивает возможности VPN-клиентов, поэтому настройка Split Tunneling на iOS имеет свои особенности.

### Streisand (proxy-режим vs VPN-режим)

Streisand на iOS может работать в двух режимах:

**Proxy-режим:**
- Использует системные настройки прокси
- Меньше интеграция с системой, но больше гибкости в маршрутизации
- Некоторые приложения могут игнорировать системный прокси
- Подходит для продвинутых пользователей

**VPN-режим:**
- Использует Apple Network Extension
- Полная интеграция с системой
- Все приложения идут через VPN (или по правилам Split Tunneling)
- Рекомендуется для большинства пользователей

**Настройка Split Tunneling в Streisand:**

1. Откройте Streisand
2. Перейдите в настройки конфигурации
3. Выберите «Routing Rules»
4. Включите режим «Include Mode»
5. Добавьте домены для VPN:
   - `*.instagram.com`
   - `*.youtube.com`
   - `*.twitter.com`
6. Сохраните настройки
7. Переподключите VPN

### v2Box

v2Box — популярный клиент для iOS с поддержкой Xray-core маршрутизации (нужно установить через альтернативные источники, так как удалён из App Store).

**Настройка Split Tunneling:**

1. Откройте v2Box
2. Перейдите в настройки → Routing
3. Включите «Custom Routing»
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

На Windows доступно несколько клиентов с поддержкой Split Tunneling. Рассмотрим три основных: Xray-core (для продвинутых), AmneziaVPN (для начинающих) и NekoRay (универсальный).

### Xray-core

Xray-core — ядро, на котором работают многие клиенты. Можно использовать напрямую через командную строку или через GUI-обёртки. Поддерживает VLESS Reality и маршрутизацию по доменам.

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

**Важное замечание:** Секция `streamSettings` в конфигурации выше использует VLESS Reality — самый устойчивый к блокировкам протокол в 2026 году. Он маскирует VPN-трафик под обычный HTTPS, что делает его практически невозможным для блокировки по сигнатурам. Если вы используете этот конфиг, замените `your-server.com`, `your-uuid`, `your-private-key` и `your-short-id` на реальные значения от вашего VPN-провайдера.

### AmneziaVPN

AmneziaVPN — открытый VPN-клиент с поддержкой Split Tunneling по доменам и приложениям. Отлично подходит для начинающих.

**Настройка Split Tunneling:**

1. Откройте AmneziaVPN
2. Подключитесь к своему серверу
3. Нажмите на настройки подключения
4. Выберите «Split Tunneling»
5. Добавьте исключения (домены, которые идут напрямую):
   - `*.sberbank.ru`
   - `*.gosuslugi.ru`
   - `*.ozon.ru`
   - `*.wildberries.ru`
6. Сохраните настройки
7. Переподключитесь к серверу

### NekoRay

NekoRay — GUI-клиент на базе Xray-core для Windows. Удобный интерфейс с поддержкой VLESS Reality и гибкой маршрутизации.

**Настройка Split Tunneling:**

1. Откройте NekoRay
2. Перейдите в настройки → Routing
3. Включите «Enable Routing»
4. Выберите режим «Script Mode»
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

На Linux можно настроить Split Tunneling несколькими способами: через ip route, через WireGuard/AmneziaWG с PostUp-скриптами, или через Xray-core. Рассмотрим основные варианты.

### AmneziaWG с Split Tunneling

AmneziaWG — форк WireGuard с улучшенной обфускацией и поддержкой Split Tunneling через IP-маршруты.

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
- `PostUp` команды добавляют исключения для российских IP-диапазонов, направляя их напрямую через шлюз провайдера

### Настройка через WireGuard с ip route

Если вы используете стандартный WireGuard, можно настроить Split Tunneling вручную через PostUp-скрипты.

**Шаг 1.** Создайте конфигурацию `/etc/wireguard/wg0.conf`:

```ini
[Interface]
PrivateKey = your-private-key
Address = 10.0.0.2/24
DNS = 8.8.8.8

PostUp = /usr/local/bin/wg-split-tunnel.sh
PostDown = /usr/local/bin/wg-split-tunnel-down.sh

[Peer]
PublicKey = server-public-key
Endpoint = your-server.com:51820
AllowedIPs = 0.0.0.0/0
PersistentKeepalive = 25
```

**Шаг 2.** Создайте скрипт `/usr/local/bin/wg-split-tunnel.sh`:

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

**Шаг 3.** Создайте скрипт очистки `/usr/local/bin/wg-split-tunnel-down.sh`:

```bash
#!/bin/bash

DEFAULT_GW=$(ip route | grep default | awk '{print $3}')

IP_RANGES=(
  "185.32.57.0/24"
  "77.88.0.0/16"
  "87.250.0.0/16"
  "5.45.0.0/16"
  "185.16.0.0/16"
)

for ip in "${IP_RANGES[@]}"; do
  ip route del "$ip" via "$DEFAULT_GW" 2>/dev/null
done
```

**Шаг 4.** Сделайте скрипты исполняемыми:
```bash
chmod +x /usr/local/bin/wg-split-tunnel.sh
chmod +x /usr/local/bin/wg-split-tunnel-down.sh
```

### Systemd-сервис для автоматического запуска

Для автоматического запуска VPN при загрузке системы настройте systemd-сервис.

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

Настройка Split Tunneling на роутере позволяет защитить все устройства в сети сразу. Это особенно удобно для семей — не нужно настраивать каждое устройство отдельно.

### ExpressVPN: группы устройств

ExpressVPN поддерживает раздельное туннелирование на роутерах с группами устройств.

**Настройка:**

1. Установите ExpressVPN на роутер
2. Перейдите в административную панель
3. Выберите «Split Tunneling»
4. Добавьте устройства, которые должны использовать VPN:
   - Smart TV (для заблокированного контента)
   - Игровые консоли
   - Компьютеры
5. Оставьте остальные устройства без VPN (банки, телефоны)

Минус — ExpressVPN может быть недоступен или заблокирован в России. Рекомендуется рассмотреть альтернативы на базе OpenWrt.

### OpenWrt с policy routing

OpenWrt — прошивка для роутеров с расширенными возможностями маршрутизации. Лучший вариант для настройки Split Tunneling на уровне роутера.

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

Passwall2 — популярный плагин для OpenWrt с поддержкой множества протоколов, включая VLESS Reality, и гибкой маршрутизацией.

**Настройка:**

1. Установите Passwall2:
```bash
opkg update
opkg install luci-app-passwall
```

2. Перейдите в LuCI → Services → Passwall
3. Создайте ноду (сервер) с VLESS Reality
4. Настройте правила маршрутизации:
   - Домены для VPN: `*.instagram.com`, `*.youtube.com`, `*.twitter.com`
   - Домены для direct: `*.sberbank.ru`, `*.gosuslugi.ru`, `*.ozon.ru`
5. Сохраните и запустите Passwall2

**Преимущество Passwall2** — поддержка VLESS Reality, которая обеспечивает максимальную устойчивость к блокировкам на уровне роутера.

---

## Практические примеры

### Пример 1: Банки и Госуслуги напрямую, YouTube и Instagram через VPN

**Include Mode — оптимальный для большинства пользователей:**
```
Через VPN:
- *.instagram.com
- *.youtube.com
- *.twitter.com
- *.netflix.com
- *.facebook.com
- *.tiktok.com

Напрямую (по умолчанию):
- *.sberbank.ru
- *.gosuslugi.ru
- *.ozon.ru
- *.wildberries.ru
- Все остальные домены
```

### Пример 2: Всё через VPN, кроме российских банков

**Exclude Mode — для максимальной приватности:**
```
Напрямую:
- *.sberbank.ru
- *.alfabank.ru
- *.tinkoff.ru
- *.vtb.ru
- *.gosuslugi.ru
- *.ozon.ru
- *.wildberries.ru
- *.yandex.ru

Через VPN (по умолчанию):
- Все остальные домены
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

### Пример 4: Полный конфиг Xray-core для VLESS Reality

Этот конфиг объединяет все лучшие практики: VLESS Reality для обхода блокировок, маршрутизация по доменам для Split Tunneling, и правильный порядок правил.

```json
{
  "log": {
    "loglevel": "warning"
  },
  "dns": {
    "servers": [
      {
        "address": "https://1.1.1.1/dns-query",
        "domains": ["domain:instagram.com", "domain:youtube.com"],
        "tag": "vpn-dns"
      },
      {
        "address": "https://8.8.8.8/dns-query",
        "tag": "default-dns"
      }
    ]
  },
  "inbounds": [
    {
      "port": 10808,
      "protocol": "socks",
      "settings": {
        "auth": "noauth",
        "udp": true
      },
      "sniffing": {
        "enabled": true,
        "destOverride": ["http", "tls"]
      }
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
                "encryption": "none",
                "flow": "xtls-rprx-vision"
              }
            ]
          }
        ]
      },
      "streamSettings": {
        "network": "tcp",
        "security": "reality",
        "realitySettings": {
          "dest": "www.microsoft.com:443",
          "serverNames": ["www.microsoft.com"],
          "privateKey": "your-private-key",
          "shortIds": [""]
        }
      },
      "tag": "proxy"
    },
    {
      "protocol": "freedom",
      "tag": "direct"
    },
    {
      "protocol": "blackhole",
      "tag": "block"
    }
  ],
  "routing": {
    "domainStrategy": "IPIfNonMatch",
    "rules": [
      {
        "type": "field",
        "outboundTag": "block",
        "domain": ["geosite:category-ads-all"]
      },
      {
        "type": "field",
        "outboundTag": "direct",
        "domain": [
          "domain:sberbank.ru",
          "domain:gosuslugi.ru",
          "domain:ozon.ru",
          "domain:wildberries.ru",
          "domain:yandex.ru",
          "domain:vk.com",
          "domain:alfabank.ru",
          "domain:tinkoff.ru",
          "domain:vtb.ru",
          "domain:mail.ru",
          "domain:rambler.ru",
          "domain:avito.ru",
          "domain:2gis.ru"
        ]
      },
      {
        "type": "field",
        "outboundTag": "proxy",
        "domain": [
          "domain:instagram.com",
          "domain:youtube.com",
          "domain:twitter.com",
          "domain:netflix.com",
          "domain:facebook.com",
          "domain:tiktok.com",
          "domain:linkedin.com",
          "domain:reddit.com"
        ]
      },
      {
        "type": "field",
        "outboundTag": "direct",
        "ip": ["geoip:private", "geoip:ru"]
      },
      {
        "type": "field",
        "outboundTag": "proxy",
        "network": "tcp,udp"
      }
    ]
  }
}
```

---

## Безопасность: риски утечки при неправильной настройке

При неправильной настройке Split Tunneling возможны утечки данных. Это критически важно учитывать, особенно в контексте российских реалий, где провайдеры могут мониторить трафик.

### Риск 1: DNS-утечки

Если DNS-запросы идут напрямую, а трафик через VPN (или наоборот), провайдер видит, какие сайты вы посещаете, даже если сам трафик зашифрован. Это особенно опасно при Exclude Mode, когда вы думаете, что весь трафик идёт через VPN, но DNS-запросы утекают к провайдеру.

**Решение:**
- Используйте VPN-провайдера с собственным DNS-сервером
- Настройте DNS-over-HTTPS (DoH) или DNS-over-TLS (DoT)
- Проверьте утечки через онлайн-тесты (dnsleaktest.com, ipleak.net)
- В конфигурации Xray-core используйте секцию `dns` с разделением DNS-запросов

### Риск 2: WebRTC-утечки

WebRTC может раскрывать реальный IP-адрес даже при включённом VPN. Это особенно актуально для браузеров Chrome и Firefox, где WebRTC включён по умолчанию.

**Решение:**
- Отключите WebRTC в браузере (через `about:config` в Firefox или расширения в Chrome)
- Используйте расширения для блокировки WebRTC (WebRTC Leak Prevent, uBlock Origin)
- Выберите VPN с защитой от WebRTC-утечек
- В Xray-core используйте `sniffing` для перехвата WebRTC-запросов

### Риск 3: IPv6-утечки

Если VPN не поддерживает IPv6, трафик по IPv6 может идти напрямую в обход VPN-туннеля. Это распространённая проблема, особенно с WireGuard.

**Решение:**
- Отключите IPv6 в настройках ОС, если VPN его не поддерживает
- Выберите VPN с поддержкой IPv6
- В конфигурации Xray-core добавьте правило для блокировки IPv6-трафика

### Риск 4: Ошибки в правилах маршрутизации

Если забыли добавить домен в правила, он может идти не туда — например, запрос к новому заблокированному сайту пойдёт напрямую через провайдера, а не через VPN.

**Решение:**
- Регулярно проверяйте конфигурацию
- Используйте Include Mode для безопасности по умолчанию (всё напрямую, кроме выбранного)
- Тестируйте правила перед использованием (проверяйте через `curl --resolve` или тестовые сайты)
- Подписывайтесь на обновления списков доменов

### Риск 5: Утечка IP-адреса VPN-сервера

При Exclude Mode российские сайты видят ваш реальный IP, но если VPN-сервер находится в России, его IP тоже может быть в чёрном списке. Это актуально для WireGuard и OpenVPN, где VPN-сервер может быть определён.

**Решение:**
- Используйте VPN-серверы за пределами России
- Используйте протоколы с маскировкой (VLESS Reality), которые не раскрывают факт использования VPN
- NEMO VPN предоставляет серверы с VLESS Reality, которые невозможно отличить от обычного HTTPS-трафика

---

## NEMO VPN: готовые конфиги с маршрутизацией — российские сервисы работают

NEMO VPN предоставляет готовые конфигурации с уже настроенным Split Tunneling для России 2026. Это избавляет от необходимости вручную настраивать правила маршрутизации и обновлять их при новых блокировках.

### Преимущества NEMO VPN

- **Готовые правила маршрутизации** — российские сервисы идут напрямую, заблокированные через VPN, из коробки без ручной настройки
- **Протокол VLESS Reality** — самый устойчивый к блокировкам протокол в 2026 году, маскирует трафик под обычный HTTPS
- **Поддержка WireGuard** — для тех, кто предпочитает классический WireGuard, доступны конфиги с AmneziaWG
- **Автоматические обновления** — правила маршрутизации обновляются автоматически при изменении блокировок
- **Простая настройка** — импортируйте конфиг и всё работает, не нужно разбираться в JSON-конфигах
- **Поддержка всех платформ** — Android, iOS, Windows, Linux, роутеры
- **Оплата в рублях** — через CryptoBot, Platega, ЮMoney

### Как начать

1. Откройте бот [@nemo_vpn_bot](https://t.me/nemo_vpn_bot) в Telegram
2. Выберите тариф
3. Получите конфигурацию с готовыми правилами маршрутизации (поддерживаются VLESS Reality и WireGuard)
4. Импортируйте в ваш клиент (V2rayNG, NekoBox, NekoRay, Streisand, v2Box)
5. Готово — российские сервисы работают напрямую, заблокированные через VPN

**Больше никаких переключений VPN — всё работает автоматически!**

---

## FAQ: частые вопросы о Split Tunneling

### Что такое Split Tunneling простыми словами?

Split Tunneling (раздельное туннелирование) — это технология, которая позволяет разделить интернет-трафик на два потока: один идёт через VPN, другой — напрямую. Например, YouTube открывается через VPN, а Сбербанк Онлайн — напрямую через провайдера. Это нужно, потому что с апреля 2026 российские банки и сервисы блокируют доступ через VPN.

### Какой режим лучше — Include Mode или Exclude Mode?

Для большинства пользователей в России 2026 рекомендуется **Include Mode** (только заблокированные сайты через VPN, всё остальное напрямую). Это безопаснее для доступа к российским сервисам и создаёт меньшую нагрузку на VPN. Exclude Mode лучше подходит, если вам нужна максимальная приватность для всего не-российского трафика.

### Поддерживает ли VLESS Reality Split Tunneling?

Да, VLESS Reality полностью поддерживает Split Tunneling. Протокол работает на базе Xray-core, который имеет мощную систему маршрутизации по доменам. Вы можете настроить правила, чтобы российские домены шли напрямую, а заблокированные — через VLESS Reality. Это оптимальная комбинация в 2026 году: максимальная устойчивость к блокировкам + гибкая маршрутизация.

### Будет ли WireGuard работать для Split Tunneling?

Да, но с ограничениями. WireGuard поддерживает Split Tunneling только по IP-адресам, а не по доменам. Это значит, что вам нужно вручную указывать IP-диапазоны российских сайтов, которые могут меняться. Для более гибкой маршрутизации лучше использовать AmneziaWG (форк WireGuard с обфускацией) или Xray-core с VLESS Reality, который поддерживает маршрутизацию по доменам.

### Могу ли я использовать Split Tunneling на iPhone?

Да, но с ограничениями. iOS ограничивает возможности VPN-клиентов, поэтому маршрутизация по приложениям недоступна. Однако клиенты Streisand и v2Box поддерживают маршрутизацию по доменам на iOS. Рекомендуется использовать Include Mode с этими клиентами.

### Безопасно ли использовать Split Tunneling?

Split Tunneling безопаснее, чем вообще не использовать VPN, но менее безопасно, чем полный VPN. Основные риски: DNS-утечки, WebRTC-утечки и IPv6-утечки. Чтобы минимизировать риски, используйте VPN с собственным DNS, отключите WebRTC в браузере и проверяйте утечки через онлайн-тесты. NEMO VPN автоматически обрабатывает эти риски в своих конфигурациях.

### Что делать, если российский сайт блокирует меня даже с Split Tunneling?

Некоторые российские сайты блокируют доступ не только по IP-адресу, но и по другим признакам (timezone, язык браузера, отпечаток устройства). В этом случае:
- Убедитесь, что домен сайта добавлен в список прямых подключений
- Проверьте, что DNS-запросы к этому домену тоже идут напрямую
- Очистите кэш браузера и файлы cookie
- Попробуйте открыть сайт в приватном окне

### Нужен ли Split Tunneling на роутере?

Split Tunneling на роутере нужен, если вы хотите защитить сразу все устройства в домашней сети — Smart TV, консоли, компьютеры, телефоны. Особенно это актуально для устройств, где нельзя установить VPN-клиент (некоторые Smart TV). OpenWrt с Passwall2 и VLESS Reality — лучший вариант для роутера.

### Как обновить правила маршрутизации при новых блокировках?

Если вы используете Include Mode, нужно вручную добавлять новые заблокированные домены в правила. Если вы используете Exclude Mode, новые заблокированные сайты будут работать автоматически. NEMO VPN обновляет правила автоматически — подписывайтесь на бот, чтобы получать обновления.

---

## Заключение

Split Tunneling — необходимый инструмент в России 2026 года. Российские сервисы блокируют VPN-пользователей, а заблокированные иностранные сервисы требуют VPN. Split Tunneling решает эту проблему автоматически, разделяя трафик на два потока.

**Ключевые моменты:**

- **Include Mode** — оптимальный вариант для России (по умолчанию всё напрямую, только заблокированное через VPN)
- **Exclude Mode** — для максимальной приватности (всё через VPN, кроме российских сервисов)
- **VLESS Reality** — лучший протокол для Split Tunneling в 2026 году: устойчив к DPI, поддерживает маршрутизацию по доменам
- **WireGuard/AmneziaWG** — быстрый вариант для тех, кому нужна маршрутизация по IP-адресам
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
- [WireGuard](https://www.wireguard.com/)
- [Xray-core GitHub](https://github.com/XTLS/Xray-core)
- [NekoRay GitHub](https://github.com/MatsuriDayo/NekoRay)
- [OpenWrt Passwall2](https://github.com/xiaorouji/openwrt-passwall)
- [Хабр: настройка Split-Tunneling на промежуточном сервере через AmneziaWG](https://habr.com/ru/post/XXXXX/)
- [ZoogVPN: Split Tunneling](https://zoogvpn.com/blog/split-tunneling/)
- [Scalefusion: раздельное туннелирование](https://www.scalefusion.com/blog/what-is-split-tunneling/)
- [X-VPN: классификация трафика](https://www.xvpn.io/split-tunneling/)
- [ExpressVPN: раздельное туннелирование для роутеров](https://www.expressvpn.com/support/vpn-router/split-tunneling-router/)

---

*Статья обновлена: 2026-04-27*
    </article>
  )
}
