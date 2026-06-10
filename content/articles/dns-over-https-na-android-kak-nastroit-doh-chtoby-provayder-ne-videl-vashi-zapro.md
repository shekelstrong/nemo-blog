```markdown
---
image: /public/images/dns-over-https-na-android-kak-nastroit-doh-chtoby-provayder-ne-videl-vashi-zapro.jpg
title: "DNS-over-HTTPS на Android: настройка DoH от слежки провайдера"
date: 2026-01-15
tags: ["DoH", "DNS-over-HTTPS", "Android", "ТСПУ", "VLESS Reality", "обход блокировок", "Shadowsocks", "VPN", "Linux", "конфиденциальность"]
description: "Настройка DNS-over-HTTPS на Android: шифруем DNS-запросы, обходим перехват на ТСПУ, сравниваем Cloudflare, Quad9, Mullvad."
author: NEMO VPN
category: guides
keywords: DNS-over-HTTPS, DoH Android, настройка DoH, обход блокировок, ТСПУ, VLESS Reality, Shadowsocks
image: /public/images/dns-over-https-na-android-kak-nastroit-doh-chtoby-provayder-ne-videl-vashi-zapro.jpg

---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "DNS-over-HTTPS на Android: настройка DoH от слежки провайдера",
  "author": {
    "@type": "Organization",
    "name": "NEMO VPN"
  },
  "datePublished": "2026-01-15",
  "dateModified": "2026-01-15",
  "publisher": {
    "@type": "Organization",
    "name": "NEMO VPN",
    "logo": {
      "@type": "ImageObject",
      "url": "https://nemo-blog.vercel.app/images/nemo-logo.png"
    }
  },
  "description": "Пошаговое руководство по настройке DNS-over-HTTPS на Android: выбор резолвера, обход блокировок ТСПУ, интеграция с Shadowsocks и VLESS Reality.",
  "keywords": "DNS-over-HTTPS, DoH Android, ТСПУ, обход блокировок, VLESS Reality, Shadowsocks, VPN"
}
</script>

# DNS-over-HTTPS на Android: настройка DoH от слежки провайдера

Каждый раз, когда Android открывает сайт, система отправляет DNS-запрос в открытом виде по UDP-порту 53. Этот трафик видит провайдер, видит оборудование ТСПУ (технические средства противодействия угрозам), и видит любой, кто сидит в той же Wi-Fi-сети. DNS-over-HTTPS (DoH) — это стандарт RFC 8484, который упаковывает DNS-запросы в HTTPS-сессию на порт 443, делая их неотличимыми от обычного веб-трафика. Разберём, как это работает, как настроить DoH на Android и что делать, когда провайдер режет зашифрованный DNS на ТСПУ.

## 1. Принцип работы DNS и угрозы перехвата

### 1.1. Классический DNS: открытый протокол с 1983 года

Протокол DNS описан в RFC 882 и RFC 883 с 1983 года, а обновлён в RFC 1034 и RFC 1035. Запросы передаются в открытом виде поверх UDP, чаще всего на порт 53. Каждое обращение к домену — это минимум один DNS-запрос: `Type A` для IPv4, `Type AAAA` для IPv6, иногда дополнительные `CNAME`, `TXT`, `HTTPS`-записи. С 2017 года Google фиксирует рост DNS-трафика в 5-7% ежегодно, а средний Android-телефон генерирует 1000-3000 DNS-запросов в сутки.

Проблема не только в приватности. По данным Mozilla Telemetry, в 2019 году 13-15% DNS-ответов в публичных сетях подвергались подмене (DNS spoofing). Провайдеры и корпоративные сети массово перехватывают запросы для показа рекламы на страницах ошибок NXDOMAIN — например, при попытке открыть несуществующий домен пользователь видит страницу с рекламой оператора. В России эту практику закрепил ФЗ-149, обязав операторов хранить логи DNS и выдавать их по запросу силовых ведомств.

### 1.2. Что именно видит провайдер

Провайдер на своём BGP-маршрутизаторе или BRAS (Broadband Remote Access Server) видит:

- **IP-адрес резолвера** (обычно `77.88.8.8` для Яндекса, `8.8.8.8` для Google).
- **Доменное имя**, которое вы запрашиваете (`example.com`, `signal.org`).
- **Временную метку** запроса с точностью до миллисекунд.
- **Связку IP-адрес клиента ↔ домен** — главный инструмент профилирования.

На оборудовании ТСПУ (по данным утечек 2024 года, это в основном решения от Элтекс и Vas Experts с модулями DPI от RDP.ru) работает глубокий анализ пакетов. ТСПУ умеет распознавать:

1. SNI (Server Name Indication) в TLS ClientHello — поле, где браузер указывает домен.
2. Запросы к заблокированным реестрам Роскомнадзора.
3. Характерные паттерны протоколов (OpenVPN, WireGuard до obfs4).
4. Открытые DNS-запросы на порт 53 с признаками резолвинга запрещённых доменов.

Последний пункт критичен: если пользователь резолвит `instagram.com` через системный DNS, ТСПУ фиксирует это и применяет блокировку по IP/SNI. Переход на DoH скрывает сам факт DNS-запроса, но не скрывает SNI в последующем TLS-соединении. Для полной маскировки нужна связка DoH + ECH (Encrypted Client Hello) или VPN-туннель с фрагментацией.

## 2. Архитектура DNS-over-HTTPS: криптография и туннелирование

### 2.1. RFC 8484: формат запроса

Спецификация DoH опубликована в октябре 2018 года (RFC 8484). В отличие от классического DNS, запрос передаётся как HTTP-сообщение с `Content-Type: application/dns-message`. Есть два режима:

- **GET** — base64url-кодированный DNS-запрос в query-параметре `?dns=`.
- **POST** — DNS-запрос в теле HTTP-сообщения.

В обоих случаях соединение идёт поверх TLS 1.3, по порту 443, с валидацией сертификата сервера. Это даёт три уровня защиты:

1. **Конфиденциальность** — оператор связи не видит домен.
2. **Целостность** — невозможно подменить ответ без валидной подписи DNSSEC.
3. **Аутентификация** — клиент проверяет, что резолвер действительно `1.1.1.1` или `9.9.9.9`, а не подменный узел провайдера.

### 2.2. Разница между DoH, DoT и DoQ

Существуют три стандарта зашифрованного DNS:

| Параметр | DoH (RFC 8484) | DoT (RFC 7858) | DoQ (RFC 9250) |
|---|---|---|---|
| Порт | 443 | 853 | 853 (QUIC) |
| Транспорт | TCP+TLS | TCP+TLS | UDP+QUIC |
| Маскировка | Высокая (похож на HTTPS) | Низкая (легко фильтруется) | Средняя |
| Поддержка Android 9+ | Да | Нет в AOSP | С Android 14 |

На Android системная поддержка появилась с Android 9 (Pie, 2018), но **только для DoT**, причём скрытно в `settings_global`. Полноценный DoH в системных настройках появился с Android 13 через поле `dns_over_https` в `Settings.Secure`. На устройствах с Android 14 и выше DoH включается одной строкой в ADB без root.

### 2.3. Производительность и латентность

По измерениям APNIC и Geoff Huston, средняя задержка DoH выше классического DNS на 15-40 мс из-за TLS-рукопожатия. Однако на Android это компенсируется HTTP/2 connection coalescing: один TCP-сеанс используется для всех DoH-запросов, а с HTTP/3 (QUIC) накладные расходы падают до 5-10 мс. Cloudflare, Google и Quad9 уже поддерживают HTTP/3 для DoH.

## 3. Методы настройки DoH на Android: системные и сторонние

### 3.1. Встроенный DoH в Android 9+ через ADB

С Android 9 системный DoT включается через настройки `Wi-Fi → Advanced → Private DNS`. Для DoH нужен ADB. Подключите устройство, разрешите отладку по USB и выполните:

```bash
adb shell settings put global private_dns_mode hostname
adb shell settings put global private_dns_specifier https://1.1.1.1/dns-query
```

Проверка статуса:

```bash
adb shell settings get global private_dns_mode
adb shell settings get global private_dns_specifier
```

В Android 13+ добавлены предустановленные шаблоны:

- `dns.google` (Google)
- `dns.quad9.net` (Quad9)
- `one.one.one.one` (Cloudflare)

### 3.2. Приложение Intra: простой DoH для не-рутованных устройств

Intra (Jigsaw, Alphabet) — open-source приложение, которое маршрутизирует весь DNS-трафик Android через DoH-сервер. Скачивается из Play Store или F-Droid. Поддерживает шаблоны:

```
https://dns.google/dns-query
https://cloudflare-dns.com/dns-query
https://dns.quad9.net/dns-query
```

### 3.3. Приложение RethinkDNS: DoH + блокировка рекламы

RethinkDNS — open-source проект от Celzero, форк проекта Rethink. Использует WireGuard-туннель в userspace для перехвата DNS на уровне VPN API Android. Преимущество: работает параллельно с основным VPN, не требует root. Конфигурация через файл `1.1.1.1/dns-query` и `tls: hostname` в локальном конфиге.

### 3.4. Сравнение инструментов

| Инструмент | Root | Тип | Фильтрация | Размер APK |
|---|---|---|---|---|
| Встроенный DoH (Android 13+) | Нет | Системный | Нет | 0 МБ |
| Intra | Нет | Локальный VPN | Нет | 4 МБ |
| RethinkDNS | Нет | Локальный VPN | Да (списки) | 25 МБ |
| personalDNSfilter | Нет | Локальный VPN | Да | 6 МБ |
| DNSCrypt-proxy | Да | Демон | Да | через Termux |

## 4. Обход блокировок DoH через ТСПУ: техники и протоколы

### 4.1. Как ТСПУ детектирует DoH

На ТСПУ 2023-2024 годов реализованы три сигнатуры для детекции DoH:

1. **Частые HTTPS-запросы к одному домену с коротким телом** — характерный паттерн DNS через `GET ?dns=`.
2. **Ответы 200 OK с Content-Type: application/dns-message** — однозначный маркер.
3. **Соединения с хостами из реестра DoH-резолверов** — статический список IP-адресов Cloudflare, Google, Quad9, Mullvad.

При обнаружении ТСПУ сбрасывает TCP-сессию (TCP RST) или замедляет трафик до 1-5 Кбит/с. Это приводит к тому, что DNS-запросы «висят» по 5-10 секунд, и пользователь переключается на резолвер провайдера — утечка приватности восстанавливается.

### 4.2. Обход через смену домена DoH-резолвера

Эффективный метод — использовать **домен-обфускатор**, например, сервис `dnscrypt-resolvers.csv` от dnscrypt-proxy. Резолверы с пометкой `odoh` (Oblivious DoH) или `cache` обращаются к серверам через CDN с рандомизированными поддоменами. Пример конфигурации `dnscrypt-proxy.toml`:

```toml
server_names = ['cloudflare', 'quad9-dnscrypt-ip4-filter-pri', 'mullvad-adblock-doh']
listen_addresses = ['127.0.0.1:53']
max_clients = 250
ipv4_servers = true
ipv6_servers = false
require_dnssec = true
require_nolog = true
require_nofilter = false
```

На Android запускается через Termux:

```bash
pkg install dnscrypt-proxy
dnscrypt-proxy -config /data/data/com.termux/files/home/dnscrypt-proxy.toml
```

### 4.3. Связка DoH + Shadowsocks-2022

Shadowsocks-2022 (потомок оригинального Shadowsocks от Clowwindy, обновлён в 2022 году MyTea) маскирует трафик под обычный TCP-сеанс. В связке с DoH это даёт двойную обфускацию:

- Внешний слой: Shadowsocks-туннель (порт 8388 или маскировка под 443).
- Внутренний слой: DoH внутри туннеля (порт 443 на резолвере).

Конфиг Shadowsocks-2022 сервера (`config.json`):

```json
{
  "server": "0.0.0.0",
  "server_port": 8388,
  "password": "your-32-byte-base64-key",
  "method": "2022-blake3-aes-128-gcm",
  "nameserver": "https://1.1.1.1/dns-query",
  "mode": "tcp_and_udp",
  "fast_open": false
}
```

На Android используется клиент [shadowsocks-android](https://github.com/shadowsocks/shadowsocks-android) с поддержкой плагина `v2ray-plugin` для маскировки под WebSocket.

Подробнее о настройке Shadowsocks на Android читайте в нашем гайде по [обходу блокировок через Shadowsocks](/blog/shadowsocks-android-setup).

### 4.4. Связка DoH + VLESS Reality

VLESS Reality — протокол из экосистемы V2Ray/Xray, разработанный в 2022 году как ответ на блокировку обычного VLESS+TLS. Отличие от классического VLESS: Reality маскирует трафик под TLS-сеанс к произвольному «сайту-донору» (например, `www.microsoft.com`), копируя его TLS-сертификат. ТСПУ видит легитимное соединение с microsoft.com и пропускает.

Xray-core конфиг клиента:

```json
{
  "outbounds": [{
    "protocol": "vless",
    "settings": {
      "vnext": [{
        "address": "your-server.com",
        "port": 443,
        "users": [{
          "id": "uuid-v4-here",
          "encryption": "none",
          "flow": "xtls-rprx-vision"
        }]
      }]
    },
    "streamSettings": {
      "network": "tcp",
      "security": "reality",
      "realitySettings": {
        "serverName": "www.microsoft.com",
        "fingerprint": "chrome",
        "shortId": "abcdef01"
      }
    }
  }]
}
```

В блоке `dns` добавляется DoH:

```json
"dns": {
  "servers": [{
    "address": "https://1.1.1.1/dns-query",
    "domains": ["geosite:geolocation-!cn"]
  }]
}
```

Reality-протокол не требует собственного домена или сертификата, что делает его дешевле и проще, чем обычный VLESS+TLS. Развёртывание и тонкая настройка разобраны в статье [VLESS Reality: настройка Xray на Linux](/blog/vless-reality-config).

## 5. Сравнение публичных DoH-резолверов

| Резолвер | URL | Логи | Фильтрация | DNSSEC | ECH | QUIC |
|---|---|---|---|---|---|---|
| Cloudflare 1.1.1.1 | `https://cloudflare-dns.com/dns-query` | Нет (аудит KPMG) | Нет | Да | Да | Да |
| Quad9 9.9.9.9 | `https://dns.quad9.net/dns-query` | Нет | Блокировка малвари | Да | Нет | Да |
| Google 8.8.8.8 | `https://dns.google/dns-query` | Частично (анонимизировано 24-48 ч) | Нет | Да | Нет | Да |
| Mullvad DNS | `https://adblock.dns.mullvad.net/dns-query` | Нет | Блокировка рекламы | Да | Нет | Да |
| NextDNS | `https://dns.nextdns.io/<id>` | Настраиваемо | Настраиваемо | Да | Да | Да |
| AdGuard DNS | `https://dns.adguard-dns.com/dns-query` | Нет | Блокировка рекламы | Да | Нет | Да |
| ControlD | `https://freedns.controld.com/p1` | Настраиваемо | Настраиваемо | Да | Да | Да |

**Cloudflare 1.1.1.1** — самый быстрый (средний TTFB 12-18 мс по APNIC), но в России в 2024 году наблюдались локальные блокировки IP-адресов `1.1.1.1` на ТСПУ отдельных операторов. Решение — использовать `1.0.0.1` или адрес `162.159.36.1` через CDN.

**Quad9** — лучший выбор с точки зрения безопасности: фильтрует домены из списков Abuse.ch, Phishtank, URLhaus. Средняя латентность 25-40 мс в европейских точках.

**Mullvad DNS** — проект от разработчиков VPN Mullvad, базируется в Швеции. Поддерживает режимы: `base` (только резолвинг), `adblock` (фильтр рекламы), `family` (фильтр adult-контента). Юрисдикция Швеции подчиняется GDPR, аудит проведён Cure53 в 2023 году.

## 6. Продвинутые сценарии: DoH в корпоративных сетях и на рутованных устройствах

### 6.1. Magisk + Systemless hosts

На рутованных Android-устройствах с Magisk можно модифицировать `/system/etc/hosts` для блокировки телеметрии ещё до DNS-запроса. Это снижает нагрузку на DoH-резолвер и экономит 5-15% батареи. Модуль [systemless-hosts](https://github.com/evgeni-nikolaev/magisk-systemless-hosts) интегрируется с DoH через Zygisk.

### 6.2. WireGuard-туннель с DoH на роутере (OpenWrt)

Если у вас дома Linux-роутер с OpenWrt 23.05 или новее, DoH настраивается централизованно для всех устройств. Пакет `https-dns-proxy` доступен в репозитории:

```bash
opkg update
opkg install https-dns-proxy luci-app-https-dns-proxy
uci set https-dns-proxy.@https-dns-proxy[0].update_url=https://cloudflare-dns.com/dns-query
uci set https-dns-proxy.@https-dns-proxy[0].listen_port=5053
uci commit https-dns-proxy
/etc/init.d/https-dns-proxy restart
```

В `/etc/config/dhcp` добавляется:

```
config dnsmasq
    list server '127.0.0.1#5053'
```

Все устройства в сети автоматически получат DoH-резолвер через DHCP. Подробнее о связке WireGuard + DoH в OpenWrt — в материале [обход ТСПУ на роутере](/blog/tspu-block-bypass).

### 6.3. Мониторинг и метрики

Для контроля качества DNS используется утилита `dnscrypt-proxy` со встроенным мониторингом или `doggo` (аналог `dig` от kyoh86). П