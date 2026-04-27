import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../site.config'

const articles = [
  {
    slug: 'shadowsocks-i-socks5-chto-eto-i-kak-nastroit-v-2026',
    title: 'Shadowsocks и SOCKS5: что это и как настроить в 2026',
    description: 'Полный гайд по Shadowsocks и SOCKS5 в 2026 году. Что такое Shadowsocks, как работает SOCKS5 прокси, отличие от VPN, настройка на VPS, Outline Client, клиенты для Android/Windows, плюсы и минусы, сравнение с VLESS Reality и WireGuard.',
    date: '27 апреля 2026',
    tags: ['инструкции', 'Shadowsocks', 'SOCKS5', 'прокси', 'VPN', 'обход блокировок', 'настройка', 'Outline', '2026'],
  },
  {
    slug: 'vpn-na-android-polnoe-rukovodstvo-po-nastroyke-xray-i-v2ray-v-2026',
    title: 'VPN на Android: полное руководство по настройке Xray и v2Ray в 2026',
    description: 'Полное руководство по настройке VPN на Android с Xray и v2Ray в 2026 году. Лучшие приложения (v2rayNG, v2RayTun, Sing-box, Hysteria2), установка, импорт конфигурации, настройка протоколов (VLESS, VMess, Trojan), VLESS Reality, оптимизация батареи, Kill Switch, автозапуск, разрешения Android 12+ и troubleshooting.',
    date: '27 апреля 2026',
    tags: ['инструкции', 'VPN', 'Android', 'Xray', 'v2Ray', 'VLESS Reality', 'настройка', 'обход блокировок', 'v2rayNG', '2026'],
  },
  {
    slug: 'hysteria2-protokol-budushchego-dlya-obhoda-blokirovok-v-2026',
    title: 'Hysteria2: протокол будущего для обхода блокировок в 2026',
    description: 'Hysteria2 — современный прокси-протокол на базе QUIC для обхода блокировок в 2026. Как работает Hysteria2, почему он устойчив к DPI, Brutal vs Salamander обфускация, сравнение с VLESS Reality и WireGuard. Когда Hysteria2 падает и почему NEMO VPN использует его в связке с VLESS Reality.',
    date: '27 апреля 2026',
    tags: ['VPN', 'Hysteria2', 'QUIC', 'обход DPI', 'протоколы', '2026', 'блокировки', 'VLESS Reality', 'WireGuard'],
  },
  {
    slug: 'vpn-na-windows-11-polnoe-rukovodstvo-po-nastroyke-v-2026',
    title: 'VPN на Windows 11: полное руководство по настройке в 2026',
    description: 'Полное руководство по настройке VPN на Windows 11 в 2026 году. Встроенный VPN, настройка через проводник, протоколы PPTP/L2TP/SSTP/IKEv2, WireGuard, OpenVPN, VLESS/Xray, автозапуск, проверка утечек и troubleshooting.',
    date: '27 апреля 2026',
    tags: ['инструкции', 'VPN', 'Windows 11', 'настройка', 'WireGuard', 'OpenVPN', 'VLESS', 'руководство'],
  },
  {
    slug: 'vpn-dlya-igr-kak-snizit-ping-i-ubrat-lagi-v-2026-cs2-dota-2-valorant',
    title: 'VPN для игр: как снизить пинг и убрать лаги в 2026 (CS2, Dota 2, Valorant)',
    description: 'VPN для игр в 2026: как снизить пинг и убрать лаги в CS2, Dota 2 и Valorant. Почему VPN может УМЕНЬШАТЬ пинг, а не увеличивать его. ISP throttle, плохая маршрутизация, WireGuard vs OpenVPN, лучшие VPN для гейминга, split tunneling, тестирование серверов. Riot Games и Valve не банят за VPN.',
    date: '27 апреля 2026',
    tags: ['VPN', 'игры', 'пинг', 'лаги', 'CS2', 'Dota 2', 'Valorant', 'WireGuard', 'гейминг', '2026'],
  },
  {
    slug: 'vpn-dlya-umnogo-doma-kak-zashchitit-kamery-kolonki-i-iot-ustroystva-v-2026',
    title: 'VPN для умного дома: как защитить камеры, колонки и IoT-устройства в 2026',
    description: 'Умный дом без защиты — лёгкая мишень для хакеров. Mirai botnet, Shodan, взлом камер через дефолтные пароли, прослушивание через колонки. Как VPN на роутере защищает все IoT-устройства, изолированные VLAN, RTSP через VPN, лучшие роутеры и практический чек-лист из 10 шагов.',
    date: '27 апреля 2026',
    tags: ['VPN', 'умный дом', 'IoT', 'безопасность', 'камеры', 'колонки', 'Mirai botnet', 'Shodan', 'защита сети', 'VLESS Reality'],
  },
  {
    slug: 'moshenniki-pod-vidom-vpn-kak-krazh-dannyh-vyrosla-na-38-v-2026-godu',
    title: 'Мошенники под видом VPN: как кража данных выросла на 38% в 2026 году',
    description: 'Число краж данных через VPN выросло на 38% в 2026 году. Злоумышленники используют интерес к VPN на фоне блокировок мессенджеров. Как работают мошенники с бесплатными VPN, фейковые приложения, embedded malware, схемы мошенничества. Красные флаги, как проверить VPN перед установкой, безопасные VPN с аудитами (NordVPN, ExpressVPN, Proton VPN), VPN vs прокси, практический чек-лист и NEMO VPN CTA.',
    date: '27 апреля 2026',
    tags: ['VPN', 'мошенничество', 'кража данных', 'безопасность', 'киберпреступность', 'приватность', '2026'],
  },
  {
    slug: 'vpn-na-linux-polnoe-rukovodstvo-po-nastroyke-v-2026-ubuntu-debian-fedora-arch',
    title: 'VPN на Linux: полное руководство по настройке в 2026 (Ubuntu, Debian, Fedora, Arch)',
    description: 'Полное руководство по настройке VPN на Linux в 2026 году. WireGuard, OpenVPN, VLESS/Xray, Sing-box, SoftEther — все методы для Ubuntu, Debian, Fedora и Arch Linux. Автозапуск, проверка утечек, сравнение протоколов.',
    date: '27 апреля 2026',
    tags: ['инструкции', 'VPN', 'Linux', 'Ubuntu', 'Debian', 'Fedora', 'Arch', 'настройка', 'WireGuard', 'OpenVPN', 'VLESS'],
  },
  {
    slug: 'yandeks-vk-ozon-blokiruyut-vpn-chto-proiskhodit-i-kak-oboyti-v-2026',
    title: 'Яндекс, VK, Ozon блокируют VPN: что происходит и как обойти в 2026',
    description: '15 апреля 2026 года российские платформы начали блокировать VPN-пользователей. Яндекс, VK, Ozon, Wildberries и банки ограничивают функциональность при включённом VPN. Разбираем, как определяется VPN (IP, ASN, направление трафика, WebRTC), что такое белые списки, почему iPhone сложнее детектировать (Apple privacy), IT-проекты на паузе и как обойти блокировки с помощью split tunneling, selective VPN, residential IP и NEMO VPN с VLESS Reality.',
    date: '27 апреля 2026',
    tags: ['VPN', 'блокировки', 'Яндекс', 'VK', 'Ozon', 'Wildberries', 'банки', 'белые списки', 'VLESS Reality', '2026'],
  },
  {
    slug: 'shtrafy-za-vpn-v-rossii-v-2026-mify-realnost-i-chto-realno-grozit-polzovatelyam',
    title: 'Штрафы за VPN в России в 2026: мифы, реальность и что реально грозит пользователям',
    description: 'Уголовной ответственности за использование VPN в России не существует. Разбираем мифы о штрафах, что реально говорит закон №281, какие штрафы грозят владельцам VPN, когда использование VPN становится уголовным преступлением, и что делать обычным пользователям. NEMO VPN — легальный сервис с оплатой в рублях.',
    date: '26 апреля 2026',
    tags: ['VPN', 'штрафы', 'законодательство', 'закон №281', 'блокировки', 'безопасность', 'Роскомнадзор', '2026'],
  },
  {
    slug: 'kill-switch-i-dns-leak-pochemu-vash-vpn-mozhet-vas-podvesti-v-2026',
    title: 'Kill Switch и DNS Leak: почему ваш VPN может вас подвести в 2026',
    description: 'Kill Switch отключает интернет при разрыве VPN, DNS Leak раскрывает ваши запросы DNS. В 2026 году оба критически важны. Почему бесплатный VPN не защищает от утечек, какие VPN имеют лучший Kill Switch, и как проверить свой VPN на утечки онлайн-тестами.',
    date: '26 апреля 2026',
    tags: ['VPN', 'Kill Switch', 'DNS Leak', 'безопасность', 'приватность', 'утечки', 'NordVPN', 'Surfshark', 'Proton VPN', 'ExpressVPN'],
  },
  {
    slug: 'vpn-na-routere-kak-zashchitit-ves-dom-odnim-ustroystvom-v-2026',
    title: 'VPN на роутере: как защитить весь дом одним устройством в 2026',
    description: 'Полный гайд по настройке VPN на роутере с прошивкой OpenWRT. Защитите все устройства дома одним кликом: Smart TV, IoT, консоли, телефоны. Прошивка, Passwall2, VLESS Reality + XHTTP, Hysteria2, 4G LTE роутеры. Обход 15 ГБ лимита — трафик не считается мобильным.',
    date: '26 апреля 2026',
    tags: ['VPN', 'роутер', 'OpenWRT', 'VLESS Reality', 'маршрутизация', 'защита сети', 'DIY', '2026'],
  },
  {
    slug: 'zapret-kak-oboyti-blokirovki-bez-vpn-v-2026-polnyy-gayd',
    title: 'Zapret: как обойти блокировки без VPN в 2026 — полный гайд',
    description: 'Zapret — бесплатный инструмент для обхода DPI-блокировок без VPN. Работает через модификацию TCP-пакетов: fragment packets, host split, DNS redirect. Установка на Windows (Zapret GUI) и Linux, выбор стратегии (general, discord, youtube), настройка под провайдера. Плюсы и минусы, когда достаточно Zapret, а когда нужен VPN. NEMO VPN CTA.',
    date: '26 апреля 2026',
    tags: ['Zapret', 'DPI', 'блокировки', 'обход DPI', 'Linux', 'Windows', 'YouTube', 'VPN', 'приватность'],
  },
  {
    slug: 'vpn-dlya-biznesa-v-rossii-2026-kak-kompanii-adaptiruyutsya-k-blokirovkam',
    title: 'VPN для бизнеса в России 2026: как компании адаптируются к блокировкам',
    description: 'Корпоративный VPN узаконен: 1700+ компаний получили доступ. ФСБ мониторит IT-компании, бизнес платит миллиарды рублей за VPN. Топ-10 российских VPN для бизнеса, калькуляция затрат для малого/среднего/крупного бизнеса, риски IT-аккредитации, как адаптироваться — полный гайд.',
    date: '26 апреля 2026',
    tags: ['VPN', 'бизнес', 'блокировки', 'корпоративный VPN', 'РКН', 'ФСБ', 'IT-аккредитация', 'удалённая работа', 'безопасность', '2026'],
  },
  {
    slug: 'vpn-bez-logov-s-oplatoy-kriptovalyutoy-polnyy-gayd-po-privatnosti-v-2026',
    title: 'VPN без логов с оплатой криптовалютой: полный гайд по приватности в 2026',
    description: 'Полный гайд по выбору VPN без логов с оплатой криптовалютой. Сравнение NordVPN, ExpressVPN, PIA, Proton, Surfshark. Что такое no-logs политика, независимые аудиты, RAM-only серверы. Как оплатить VPN из России через CryptoBot, обменники, P2P.',
    date: '26 апреля 2026',
    tags: ['VPN', 'приватность', 'криптовалюта', 'no-logs', 'безопасность', 'NordVPN', 'ExpressVPN', 'PIA', 'Proton', 'Surfshark'],
  },
  {
    slug: 'residential-vs-datacenter-ip-vpn-pochemu-tip-adresa-imeet-znachenie-v-2026',
    title: 'Residential IP vs Datacenter IP для VPN: почему тип адреса имеет значение в 2026',
    description: 'Datacenter IP легко определяется VPN-детекторами и блокируется платформами (Ozon, WB, Яндекс, VK). Residential IP от обычных ISP выглядит как обычный пользователь и обходит проверки. Сравнение типов IP-адресов, как платформы определяют VPN через ASN, репутацию, Whois и почему NEMO VPN использует residential IP + VLESS Reality.',
    date: '26 апреля 2026',
    tags: ['VPN', 'безопасность', 'Residential IP', 'Datacenter IP', 'VLESS Reality', 'блокировки', 'ASN', 'Ozon', 'Wildberries', 'Яндекс'],
  },
  {
    slug: 'chem-zamenit-telegram-i-whatsapp-v-2026-8-rabochih-alternativnyh-messendzherov',
    title: 'Чем заменить Telegram и WhatsApp в 2026: 8 рабочих альтернативных мессенджеров',
    description: 'Telegram и WhatsApp заблокированы в России с апреля 2026. MAX — не альтернатива (слежка, данные, ограничения). 8 реальных рабочих мессенджеров: Signal, BiP, KakaoTalk, Google Meet, Яндекс Мессенджер, Matrix/Element, XMPP, Threema. Сравнительная таблица и как общаться безопасно через VPN.',
    date: '26 апреля 2026',
    tags: ['мессенджеры', 'альтернативы', 'блокировки', 'MAX', 'Signal', 'BiP', 'KakaoTalk', 'безопасность', 'E2E шифрование', 'VPN'],
  },
  {
    slug: 'pochemu-vpn-tormozit-v-2026-i-kak-uvelichit-skorost',
    title: 'Почему VPN тормозит в 2026 и как увеличить скорость',
    description: 'VPN стал медленным в 2026? РКН использует DPI-замедление: пинг есть, но данные не загружаются. Разбираем 5 причин тормозов и 6 способов увеличить скорость VPN. Таблица сравнения протоколов, настройка MTU, split tunneling и CDN-masking.',
    date: '26 апреля 2026',
    tags: ['гайд', 'VPN', 'скорость', 'оптимизация', 'WireGuard', 'DPI', 'блокировки'],
  },
  {
    slug: 'kak-nastroit-vpn-na-android-i-iphone-v-2026',
    title: 'Как настроить VPN на Android и iPhone в 2026: пошаговая инструкция',
    description: 'Пошаговая инструкция по настройке VPN на Android и iPhone в 2026 году. Через приложения, вручную, VLESS Reality через v2rayNG/HAPP. Проверка работоспособности, частые проблемы и решения.',
    date: '26 апреля 2026',
    tags: ['инструкции', 'VPN', 'Android', 'iPhone', 'iOS', 'настройка', 'VLESS Reality', 'руководство'],
  },
  {
    slug: 'tsifrovoy-zheleznyy-zanaves-kak-rossiya-zakryvaet-internet-v-2026',
    title: 'Цифровой железный занавес: как Россия закрывает интернет в 2026',
    description: 'Цифровой железный занавес опускается над Россией в 2026 году. МАХ — обязательное приложение на всех смартфонах, ФСБ мониторит IT-компании, 22 утечки данных за январь, бесплатные VPN собирают ваши данные, белые списки для домашнего интернета. Как защититься: VLESS Reality, платный VPN без логов, оплата крипто.',
    date: '26 апреля 2026',
    tags: ['новости', 'блокировки', 'интернет', 'МАХ', 'VPN', 'безопасность', 'законодательство'],
  },
  {
    slug: 'limit-15-gb-vpn-traffic-may-2026',
    title: 'Лимит 15 ГБ на VPN-трафик: всё что известно о плате с 1 мая 2026',
    description: 'С 1 мая 2026 года в России вводится плата за международный трафик: 15 ГБ бесплатно, далее 150₽ за ГБ. Как будет работать, кто платит, как сэкономить и обойти ограничение.',
    date: '26 апреля 2026',
    tags: ['новости', 'законодательство', 'мобильный интернет', 'VPN', 'операторы связи', 'МТС', 'Билайн', 'Мегафон', 'Tele2'],
  },
  {
    slug: 'rossiyanam-mogut-zablokirovat-oplatu-vpn-chto-proiskhodit-i-kak-platit',
    title: 'Россиянам могут заблокировать оплату VPN: что происходит и как платить',
    description: 'Россиянам готовят блокировку оплаты VPN с российских карт. Провайдеры ожидают масштабной зачистки. Казахстанские банки под угрозой. Разбираем, какие способы оплаты работают сейчас: МИР, СБП, YooMoney, криптовалюта, виртуальные карты. Как подготовиться и NEMO VPN — оплата рублями через CryptoBot.',
    date: '26 апреля 2026',
    tags: ['новости', 'блокировки', 'оплата', 'VPN', 'криптовалюта', 'МИР', 'СБП'],
  },
  {
    slug: 'sravnenie-vpn-protokolov-2026-wireguard-openvpn-shadowsocks-vless-reality-xhttp-chto-vybrat-v-rossii',
    title: 'Сравнение VPN-протоколов 2026: WireGuard, OpenVPN, Shadowsocks, VLESS Reality, XHTTP — что выбрать в России',
    description: 'Полное сравнение VPN-протоколов в 2026 году: PPTP, L2TP/IPSec, OpenVPN, WireGuard, IKEv2/IPSec, Shadowsocks, VLESS Reality, XHTTP, Trojan. Таблица характеристик: скорость, безопасность, обход DPI. Какой протокол выбрать в России для разных сценариев использования.',
    date: '26 апреля 2026',
    tags: ['сравнение', 'протоколы', 'VPN', 'гайд', 'VLESS Reality', 'WireGuard', 'OpenVPN', 'Shadowsocks', 'XHTTP'],
  },
  {
    slug: 'istoriya-blokirovok-interneta-v-rossii',
    title: 'История блокировок интернета в России: от первого закона до белых списков 2026',
    description: 'Полная хроника: 2012–2019 первые блокировки, 2020–2022 соцсети, 2023–2024 VPN под ударом, 2025 массовые отключения, 2026 Telegram заблокирован, 469 VPN. Прогноз на 2026–2027 и как подготовиться.',
    date: '26 апреля 2026',
    tags: ['история', 'блокировки', 'интернет', 'РКН', 'VPN', 'законодательство', 'ТСПУ'],
  },
  {
    slug: 'tls-fingerprinting-kak-vas-vychislyayut-dazhe-cherez-vpn',
    title: 'TLS-фингерпринтинг: как вас вычисляют даже через VPN и что с этим делать',
    description: 'TLS-фингерпринтинг — метод идентификации пользователей по характеристикам зашифрованного соединения. JA3, JA4, JA4+, 4 уровня обнаружения, почему обычный VPN «светится» и как VLESS Reality с XHTTP обходят детекцию.',
    date: '26 апреля 2026',
    tags: ['безопасность', 'TLS', 'JA3', 'JA4', 'фингерпринтинг', 'DPI', 'VLESS Reality'],
  },
  {
    slug: 'besplatnyy-vs-platnyy-vpn-2026-skrytye-riski-i-alternativy',
    title: 'Бесплатный VPN vs платный VPN в 2026 году: скрытые риски и реальные альтернативы',
    description: 'Сравнение бесплатного и платного VPN в 2026 году. Скрытые риски бесплатных сервисов: продажа данных, malware, утечки. KelVPN — децентрализованная альтернатива от Сбербанка. Почему VLESS Reality + платный сервис надёжнее.',
    date: '26 апреля 2026',
    tags: ['безопасность', 'VPN', 'блокировки', 'KelVPN', 'VLESS Reality', 'сравнение', 'DPI'],
  },
  {
    slug: 'besplatnyy-vpn-alternativy-posle-volny-blokirovok-2026',
    title: 'Бесплатный VPN после волны блокировок 2026: альтернативы, «белый интернет» и что работает',
    description: 'Волна блокировок VPN в России: 469 сервисов заблокировано, DPI активен. Разбираем бесплатные альтернативы — KelVPN, децентрализованные решения. Почему платный VPN с VLESS Reality надёжнее бесплатных.',
    date: '26 апреля 2026',
    tags: ['новости', 'блокировки', 'VPN', 'безопасность', 'KelVPN', 'бесплатный VPN'],
  },
  {
    slug: 'kak-tspu-lovit-vless-i-pochemu-xhttp-sleduyushchiy-shag-2026',
    title: 'Как ТСПУ ловит VLESS в 2026 и почему XHTTP — следующий шаг',
    description: 'Технический разбор: как DPI систематически обнаруживает VLESS+Reality через JA3-хэши, TLS-профайлинг и активное зондирование. Почему XHTTP становится новой эволюцией обхода блокировок.',
    date: '26 апреля 2026',
    tags: ['технологии', 'VLESS', 'XHTTP', 'DPI', 'TSPU', 'блокировки'],
  },
  {
    slug: 'rossiyskie-sayty-blokiruyut-vpn-polzovateley-aprel-2026',
    title: 'Российские сайты блокируют VPN-пользователей: апрель 2026',
    description: 'Банки, маркетплейсы и мессенджеры начали блокировать доступ с VPN. Коллатеральный ущерб: пользователи вынуждены включать и выключать VPN по 10+ раз в день. VLESS Reality — решение.',
    date: '26 апреля 2026',
    tags: ['новости', 'блокировки', 'VPN', 'банки', 'маркетплейсы'],
  },
  {
    slug: 'vpn-posle-1-maya-2026-polnoe-rukovodstvo',
    title: 'VPN после 1 мая 2026: полное руководство для пользователей России',
    description: 'Apple удалила VPN-приложения из App Store, вводится плата за международный трафик, платформы блокируют VPN-пользователей. Практическое руководство: что делать и как подготовиться.',
    date: '26 апреля 2026',
    tags: ['новости', 'законодательство', 'VPN', 'руководство'],
  },
  {
    slug: 'rossiya-uzhestochyaet-kontrol-nad-vpn-aprel-2026',
    title: 'Россия ужесточает контроль над VPN в апреле 2026: что происходит и что делать пользователям',
    description: 'РКН разрешил корпоративный VPN 1700+ компаниям, платформы блокируют пользователей, «Светофор VPN» закрыт, обсуждается плата за трафик. 469 сервисов заблокировано.',
    date: '26 апреля 2026',
    tags: ['новости', 'законодательство', 'VPN'],
  },
  {
    slug: 'rossiya-blokiruet-proekt-svetofor-vpn-aprel-2026',
    title: 'Россия блокирует проект «Светофор VPN»: что происходит в апреле 2026',
    description: 'Роскомнадзор заблокировал независимый проект «Светофор VPN». 469 VPN-сервисов заблокировано, платформы начали блокировать пользователей VPN.',
    date: '26 апреля 2026',
    tags: ['новости', 'цензура', 'интернет'],
  },
  {
    slug: 'vpn-i-proksi-markery-narkotikami-v-shkolah',
    title: 'VPN и прокси теперь считаются маркерами наркотиков в школах',
    description: 'В российских школах стали рассматривать VPN и прокси как инструменты распространения запрещённых веществ. Разбираем, что происходит и как реагировать.',
    date: '22 апреля 2026',
    tags: ['новости', 'образование', 'цифровая безопасность'],
  },
  {
    slug: 'operatori-prosyat-otsrochit-platu-za-vpn',
    title: 'Операторы попросили отсрочить плату за VPN: почему 15 ГБ международного трафика — это приговор',
    description: 'Российские операторы связи обратились в Минцифры с просьбой отложить введение платы за международный трафик.',
    date: '22 апреля 2026',
    tags: ['новости', 'законодательство'],
  },
  {
    slug: 'vsyo-nahuj-slomali',
    title: 'Всё на*уй сломали: почему вместо работы люди «гуляют» по приложениям',
    description: 'По данным Mediascope, средний житель России проводит в мобильных приложениях более 7 часов в день.',
    date: '22 апреля 2026',
    tags: ['аналитика', 'мобильные приложения'],
  },
  {
    slug: 'nemo-vpn-belye-spiski-i-avtomatizaciya-pravil-marshrutizacii',
    title: 'NEMO VPN: как мы обходим белые списки и автоматизируем правила маршрутизации',
    description: 'Белые списки платформ — новая реальность. NEMO VPN технически решает проблему.',
    date: '22 апреля 2026',
    tags: ['технологии', 'VLESS Reality'],
  },
  {
    slug: 'uroki-opasnosti-vpn-shkolah',
    title: 'Уроки об «опасности» VPN в российских школах: что происходит с образованием',
    description: 'В российских школах проводят занятия, посвящённые «небезопасности» VPN. Детям объясняют, что VPN нужно удалить.',
    date: '22 апреля 2026',
    tags: ['новости', 'образование'],
  },
  {
    slug: 'vpn-posle-1-maya-2026',
    title: 'Что будет с VPN после 1 мая 2026: платный трафик, блокировки и новые штрафы',
    description: 'Прогноз развития рынка VPN после 1 мая 2026 года.',
    date: '10 апреля 2026',
    tags: ['новости', 'аналитика'],
  },
  {
    slug: 'vpn-za-rubli',
    title: 'VPN за рубли: 5 сервисов с оплатой картой МИР',
    description: 'VPN-сервисы с оплатой в рублях через МИР, СБП, ЮMoney.',
    date: '1 апреля 2026',
    tags: ['сервисы', 'обзоры'],
  },
  {
    slug: 'chto-vidit-provajder',
    title: 'Что видит ваш провайдер: шокирующая правда',
    description: 'Ваш провайдер видит больше, чем вы думаете. HTTPS, DNS, мета-данные.',
    date: '1 апреля 2026',
    tags: ['аналитика', 'приватность'],
  },
  {
    slug: 'besplatnyj-vpn-opasen',
    title: 'Почему бесплатный VPN опасен: что происходит с вашими данными',
    description: 'Бесплатные VPN продают ваши данные. Разбираем риски и последствия.',
    date: '1 апреля 2026',
    tags: ['безопасность', 'аналитика'],
  },
  {
    slug: 'vless-vs-wireguard',
    title: 'VLESS vs WireGuard vs OpenVPN — сравнение протоколов',
    description: 'Сравнение VPN-протоколов в 2026 году. VLESS Reality, WireGuard, OpenVPN.',
    date: '1 апреля 2026',
    tags: ['технологии', 'протоколы'],
  },
  {
    slug: 'kak-vybrat-vpn-2026',
    title: 'Как выбрать VPN в 2026 году: полное руководство',
    description: 'Руководство по выбору VPN в 2026 году. Протоколы, безопасность, цена, скорость.',
    date: '1 апреля 2026',
    tags: ['руководства', 'безопасность'],
  },
]

export default function Index() {
  return (
    <>
      <Head>
        <title>{siteConfig.title} — Блог о VPN и цифровой безопасности</title>
        <meta name="description" content={siteConfig.description} />
      </Head>

      <div className="max-w-2xl mx-auto">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-4">{siteConfig.title}</h1>
          <p className="text-gray-600">{siteConfig.description}</p>
        </div>

        <div className="space-y-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="block p-6 rounded-lg border hover:border-blue-500 transition-colors"
            >
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-3">{article.description}</p>
              <div className="text-sm text-gray-500 flex items-center gap-2">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.tags.join(', ')}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / CTA */}
        <div className="mt-16 rounded-lg border p-8 text-center">
          <h3 className="text-xl font-bold mb-2">Попробуйте NEMO VPN бесплатно</h3>
          <p className="text-sm mb-5 text-gray-600">
            Платный VPN с оплатой в рублях, протоколом VLESS Reality и автоматической настройкой.
          </p>
          <a
            href="https://t.me/nemo_vpn_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Начать бесплатно
          </a>
        </div>
      </div>
    </>
  )
}
