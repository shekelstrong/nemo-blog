import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../site.config'

const articles = [
  {
    slug: 'vpn-i-oblachnye-servisy-dropbox-google-drive-onedrive-2026',
    title: 'VPN и облачные сервисы: Dropbox, Google Drive, OneDrive в 2026',
    description: 'Как получить доступ к Dropbox, Google Drive и OneDrive из России в 2026 году. Блокировки, ограничения скорости, санкции и способы обхода через VPN. Сравнение облачных хранилищ и настройка VPN для работы с облаком.',
    date: '2026-05-11',
    tags: ['VPN', 'облачные сервисы', 'Dropbox', 'Google Drive', 'OneDrive', 'санкции', 'блокировки', '2026'],
  },
  {
    slug: 'ipv6-i-vpn-pochemu-ipv6-leak-opasnee-ipv4-leak-2026',
    title: 'IPv6 и VPN: почему IPv6-leak опаснее IPv4-leak в 2026',
    description: 'IPv6-leak раскрывает ваш реальный IP и местоположение даже через VPN. Разбираем, почему утечка IPv6 опаснее IPv4, как провайдеры и ТСПУ используют IPv6 для деанонимизации, и как защититься.',
    date: '2026-05-09',
    tags: ['IPv6', 'IPv6-leak', 'VPN', 'утечки IP', 'DPI', 'безопасность', 'приватность', '2026'],
  },
  {
    slug: 'vpn-dlya-mac-nastroyka-bezopasnost-i-luchshie-protokoly-2026',
    title: 'VPN для Mac: настройка, безопасность и лучшие протоколы 2026',
    description: 'Полное руководство по VPN на macOS в 2026: выбор протокола, настройка VLESS Reality и WireGuard, обход DPI на Mac, сравнение клиентов, безопасность и типичные ошибки.',
    date: '2026-05-09',
    tags: ['VPN', 'macOS', 'Mac', 'VLESS Reality', 'WireGuard', 'DPI', 'безопасность', '2026'],
  },
  {
    slug: 'vpn-dlya-udalyonnoy-raboty-zoom-teams-slack-iz-rossii-2026',
    title: 'VPN для удалённой работы: Zoom, Teams, Slack из России в 2026',
    description: 'Как настроить VPN для удалённой работы из России в 2026: Zoom, Microsoft Teams, Slack, Google Workspace и другие сервисы, заблокированные или ограниченные. Протоколы, сплит-туннелинг, обход DPI и практические гайды.',
    date: '2026-05-09',
    tags: ['VPN', 'удалённая работа', 'Zoom', 'Teams', 'Slack', 'DPI', 'сплит-туннелинг', '2026'],
  },
  {
    slug: 'kak-ustroen-deep-packet-inspection-anatomiya-tspu-2026',
    title: 'Как устроен Deep Packet Inspection: техническая анатомия ТСПУ в 2026',
    description: 'Глубокий технический разбор DPI и ТСПУ в России 2026: архитектура, методы фильтрации, JA3-хэши, активное зондирование, TLS-профайлинг и машинное обучение. Как работает система блокировок на практике.',
    date: '2026-05-08',
    tags: ['DPI', 'ТСПУ', 'блокировки', 'Deep Packet Inspection', 'цензура', 'VPN', 'технологии', '2026'],
  },
  {
    slug: 'multi-hop-vpn-tsepochki-proksi-maksimalnaya-anonimnost-2026',
    title: 'Multi-hop VPN и цепочки прокси: максимальная анонимность в 2026',
    description: 'Как работают многоскачковые VPN и цепочки прокси в 2026 году: луковая маршрутизация, каскадное шифрование, защита от корреляционного трафик-анализа. Сравнение с Tor, настройка и выбор провайдеров в России.',
    date: '2026-05-08',
    tags: ['Multi-hop VPN', 'цепочки прокси', 'анонимность', 'Tor', 'VLESS', 'каскадное шифрование', 'VPN', '2026'],
  },
  {
    slug: 'vpn-i-ai-kak-iskusstvennyy-intellekt-obkhodit-dpi-i-analiziruet-blokirovki-2026',
    title: 'VPN и ИИ: как искусственный интеллект обходит DPI и блокировки в 2026',
    description: 'ИИ и машинное обучение помогают обходить DPI-блокировки в России в 2026. Генетические алгоритмы Geneva, ML-обфускация трафика, адаптивные VPN-протоколы и анализ цензуры.',
    date: '2026-05-08',
    tags: ['ИИ', 'DPI', 'VPN', 'машинное обучение', 'Geneva', 'обфускация', 'блокировки', '2026'],
  },
  {
    slug: 'vpn-v-rossii-2026-ozon-kinopoisk-blokirovki',
    title: 'VPN в России 2026: Как Озон, Кинопоиск и другие сайты блокируют пользователей с VPN',
    description: 'Апрель 2026 года стал переломным моментом — Ozon, Кинопоиск и другие площадки начали блокировать VPN-пользователей. Разбираемся в причинах, последствиях и ме...',
    date: '2026-04-30',
    tags: ['vpn', 'РКН', 'Roskomnadzor', 'блокировки сайтов', 'цифровая безопасность 2026', 'обход блокировок', 'VLESS Reality', 'Hysteria2', 'ТСПУ', 'суверенный интернет'],
  },
  {
    slug: 'zakonen-li-vpn-v-rossii-v-2026-shtrafy-otvetstvennost-i-chto-realno-grozit-polzovatelyam',
    title: 'Законен ли VPN в России в 2026: штрафы, ответственность и что реально грозит пользователям',
    description: 'Подробный разбор законодательства об использовании VPN в России в 2026 году. Использование VPN НЕ запрещено законодательно, но есть нюансы. Разбираем ФЗ-281, уголовную и административную ответственность, блокировку VPN-сервисов, обязательные ограничения для сервисов и платформ. Что грозит пользователям и что не грозит.',
    date: '2026-04-28',
    tags: ['VPN', 'законодательство', 'штрафы', 'ФЗ-281', 'блокировки', 'безопасность', 'Роскомнадзор', '2026'],
  },
  {
    slug: 'svoy-vpn-server-marzban-3x-ui-xray-kak-podnyat-vless-reality-za-30-minut-v-2026',
    title: 'Свой VPN-сервер: Marzban, 3X-UI и Xray — как поднять VLESS Reality за 30 минут в 2026',
    description: 'Полное руководство по созданию собственного VPN-сервера с Marzban или 3X-UI. Установка VLESS Reality, настройка Xray, управление пользователями за 30 минут. ...',
    date: '2026-04-28',
    tags: ['VPN'],
  },
  {
    slug: 'vpn-dlya-igr-na-windows-snizhenie-ping-obkhod-regionalnyh-blokirovok-i-luchshie-nastroyki-v-2026',
    title: 'VPN для игр на Windows: снижение пинга, обход региональных блокировок и лучшие настройки в 2026',
    description: 'Полный гайд по VPN для гейминга на Windows в 2026. Как снизить пинг, обойти региональные блокировки в Fortnite, CS2, Valorant. Настройка WireGuard, OpenVPN, ...',
    date: '2026-04-28',
    tags: ['VPN'],
  },
  {
    slug: 'vpn-i-5g-nuzhen-li-vpn-dlya-5g-interneta-v-2026',
    title: 'VPN и 5G: нужен ли VPN для 5G-интернета в 2026',
    description: 'Подробный разбор нужен ли VPN для 5G-интернета в 2026 году. Сравнение 5G vs 4G, влияние VPN на скорость и батарею, лучшие протоколы для мобильного интернета,...',
    date: '2026-04-28',
    tags: ['VPN'],
  },
  {
    slug: 'vpn-i-dvuhfaktornaya-autentifikaciya-kak-zashchitit-akkaut-i-krazhu-paroley-v-2026',
    title: 'VPN и двухфакторная аутентификация: как защитить аккаунт и кражу паролей в 2026',
    description: 'Полный гайд по 2FA для VPN в 2026 году. Защитите свой VPN-аккаунт от кражи паролей с двухфакторной аутентификацией. TOTP vs SMS vs аппаратные ключи, настройк...',
    date: '2026-04-28',
    tags: ['VPN'],
  },
  {
    slug: 'vpn-i-iptv-kak-smotret-smart-tv-cherez-vpn-obhod-geoblokirovok-i-problemy-v-2026',
    title: 'VPN и IPTV: как смотреть Smart TV через VPN, обход геоблокировок и проблемы в 2026',
    description: 'Полный гайд по настройке VPN для Smart TV и IPTV в 2026 году. Как обходить геоблокировки Netflix, Disney+, смотреть 4K контент без буферизации. NordVPN, Expr...',
    date: '2026-04-28',
    tags: ['VPN'],
  },
  {
    slug: 'vpn-i-tyomnyj-internet-mify-realnost-i-zachem-vpn-obychnomu-polzovatelyu-v-2026',
    title: 'VPN и тёмный интернет: мифы, реальность и зачем VPN обычному пользователю в 2026',
    description: 'Разбираем популярные мифы о VPN и тёмном интернете. VPN ≠ Tor — разные инструменты для разных задач. Почему VPN не даёт доступ к .onion, не делает вас аноним...',
    date: '2026-04-28',
    tags: ['VPN'],
  },
  {
    slug: 'vpn-smart-home-iot-security',
    title: 'VPN и умный дом: защита IoT-устройств, камер, умных лампочек и умной техники в 2026',
    description: 'Узнайте, как VPN защищает умный дом от взлома. Пошаговая инструкция по настройке VPN на роутере, VLAN для IoT и безопасности умных устройств.',
    date: '2026-04-28',
    tags: ['VPN', 'Smart Home', 'IoT', 'Безопасность', 'Умный дом'],
  },
  {
    slug: 'privatnaya-pochta-v-2026-proton-mail-tutanota-i-zachem-vpn-dlya-elektronnoy-pochty',
    title: 'Приватная почта в 2026: Proton Mail, Tutanota и зачем VPN для электронной почты',
    description: 'Почему Gmail, Mail.ru и Яндекс.Почта не приватны. Сравнение Proton Mail, Tutanota и Mailfence с E2E-шифрованием. Как VPN защищает от утечек metadata и обходит блокировки Proton в России.',
    date: '2026-04-27',
    tags: ['приватность', 'электронная почта', 'E2E шифрование', 'Proton Mail', 'Tutanota', 'Mailfence', 'VPN', 'безопасность'],
  },
  {
    slug: 'es-zapretil-kriptovalyutu-dlya-rossii-20-y-paket-sanktsiy-rubx-tsifrovoy-rubl-i-chto-eto-znachit-dlya-vpn-polzovateley-v-2026',
    title: 'ЕС запретил криптовалюту для России: 20-й пакет санкций, RUBx, цифровой рубль и что это значит для VPN-пользователей в 2026',
    description: 'ЕС ввёл 20-й пакет санкций против России: полный запрет крипто-провайдеров, децентрализованных платформ, RUBx стейблкоина и цифрового рубля CBDC. Chainalysis отследил $12+ млрд криптоактивов, Operation Atlantic замораживает транзакции в реальном времени. Как россиянам платить за VPN, когда биржи блокируют кошельки: Monero, CoinJoin, DEX, CryptoBot (TON) и Platega.',
    date: '2026-04-27',
    tags: ['санкции', 'криптовалюта', 'Chainalysis', 'VPN', 'RUBx', 'цифровой рубль', 'VASP', 'комплаенс', 'Monero', 'CBDC', '2026'],
  },
  {
    slug: 'cloudflare-zero-trust-i-tunneli-alternativa-vpn-v-2026',
    title: 'Cloudflare Zero Trust и туннели: альтернатива VPN в 2026',
    description: 'Cloudflare Zero Trust заменяет традиционный VPN для бизнеса. Как работают Cloudflare Tunnels, чем лучше обычного VPN, альтернативы (Ngrok, Tailscale, Pinggy, Localtunnel, Frp, Boring Proxy), для кого подходит, настройка и сравнение с VPN в России 2026.',
    date: '2026-04-27',
    tags: ['Zero Trust', 'Cloudflare Tunnel', 'VPN', 'безопасность', 'бизнес', 'IoT', 'self-hosted', 'разработка', 'гейминг', '2026'],
  },
  {
    slug: 'vpn-dlya-umnogo-doma-kak-zashchitit-kamery-kolonki-i-iot-ustroystva-v-2026',
    title: 'VPN для умного дома: как защитить камеры, колонки и IoT-устройства в 2026',
    description: 'Умный дом без защиты — лёгкая мишень для хакеров. Mirai botnet, Shodan, взлом камер через дефолтные пароли, прослушивание через колонки. Как VPN на роутере защищает все IoT-устройства, изолированные VLAN, RTSP через VPN, лучшие роутеры и практический чек-лист из 10 шагов.',
    date: '2026-04-27',
    tags: ['VPN', 'умный дом', 'IoT', 'безопасность', 'камеры', 'колонки', 'Mirai botnet', 'Shodan', 'защита сети', 'VLESS Reality'],
  },
  {
    slug: 'best-vpn-russia-2026',
    title: 'Лучшие VPN-провайдеры для России в 2026: полное сравнение и рейтинг',
    description: 'Подробный обзор лучших VPN-сервисов для России в 2026 году. Сравнение скорости, протоколов, цен и безопасности. NordVPN, ExpressVPN, Proton VPN и другие.',
    date: '2026-04-27',
    tags: ['VPN'],
  },
  {
    slug: 'dns-utechki-kak-provayder-vidit-vashe-sayty-dazhe-s-vpn-i-kak-eto-ispravit-v-2026',
    title: 'DNS-утечки: как провайдер видит ваши сайты даже с VPN, и как это исправить в 2026',
    description: 'VPN шифрует трафик, но DNS-запросы могут идти мимо туннеля. Провайдер видит все сайты, которые вы посещаете. Разбираем, как проверить DNS-утечку, настроить D...',
    date: '2026-04-27',
    tags: ['VPN', 'DNS-утечки', 'DoH', 'DoT', 'безопасность', 'приватность', 'провайдер', 'РКН', 'NEMO VPN', 'Cloudflare', 'Google DNS'],
  },
  {
    slug: 'hysteria2-protokol-budushchego-dlya-obhoda-blokirovok-v-2026',
    title: 'Hysteria2: протокол будущего для обхода блокировок в 2026',
    description: 'Hysteria2 — современный прокси-протокол на базе QUIC для обхода блокировок в 2026. Как работает Hysteria2, почему он устойчив к DPI, Brutal vs Salamander обф...',
    date: '2026-04-27',
    tags: ['VPN', 'Hysteria2', 'QUIC', 'обход DPI', 'протоколы', '2026', 'блокировки', 'VLESS Reality', 'WireGuard'],
  },
  {
    slug: 'kak-sekonomit-na-podpiskah-s-vpn-youtube-premium-spotify-i-drugie-servisy-v-2026',
    title: 'Как сэкономить на подписках с VPN: YouTube Premium, Spotify и другие сервисы в 2026',
    description: 'YouTube Premium — $13.99/мес в США, но всего $0.94 в Индии. Spotify — $10.99 vs $1.50 в Турции. Региональное ценообразование позволяет сэкономить сотни долла...',
    date: '2026-04-27',
    tags: ['VPN', 'экономия', 'YouTube Premium', 'Spotify', 'региональное ценообразование', 'подписки', 'GamsGo', 'NEMO VPN'],
  },
  {
    slug: 'kakoy-vpn-protokol-samyy-bystryy-test-wireguard-vless-hysteria2-i-openvpn-v-2026',
    title: 'Какой VPN-протокол самый быстрый: тест WireGuard, VLESS, Hysteria2 и OpenVPN в 2026',
    description: 'Полное сравнение скорости VPN-протоколов в 2026: WireGuard, VLESS Reality, Hysteria2, OpenVPN, IKEv2, Trojan, Shadowsocks. Бенчмарк тестов, 4 причины замедле...',
    date: '2026-04-27',
    tags: ['VPN', 'скорость', 'протоколы', 'WireGuard', 'VLESS Reality', 'Hysteria2', 'OpenVPN', 'бенчмарк', '2026', 'тестирование', 'DPI'],
  },
  {
    slug: 'moshenniki-pod-vidom-vpn-kak-krazh-dannyh-vyrosla-na-38-v-2026-godu',
    title: 'Мошенники под видом VPN: как кража данных выросла на 38% в 2026 году',
    description: 'Число краж данных через VPN выросло на 38% в 2026 году. Злоумышленники используют интерес к VPN на фоне блокировок мессенджеров. Как работают мошенники с бес...',
    date: '2026-04-27',
    tags: ['VPN', 'мошенничество', 'кража данных', 'безопасность', 'киберпреступность', 'приватность', '2026', 'цифровой риск'],
  },
  {
    slug: 'shadowsocks-i-socks5-chto-eto-i-kak-nastroit-v-2026',
    title: 'Shadowsocks и SOCKS5: что это и как настроить в 2026',
    description: 'Полный гайд по Shadowsocks и SOCKS5 в 2026 году. Что такое Shadowsocks, как работает SOCKS5 прокси, отличие от VPN, настройка на VPS, Outline Client, клиенты...',
    date: '2026-04-27',
    tags: ['инструкции', 'Shadowsocks', 'SOCKS5', 'прокси', 'VPN', 'обход блокировок', 'настройка', 'Outline', '2026'],
  },
  {
    slug: 'split-tunneling-vpn-kak-razdelit-trafik-rossiyskie-sayty-pryamo-blokirovannye-cherez-vpn-v-2026',
    title: 'Split Tunneling VPN: как разделить трафик — российские сайты напрямую, заблокированные через VPN в 2026',
    description: 'Полный гайд по Split Tunneling VPN в России 2026: как направить российские сайты напрямую, а заблокированные через VPN. Настройка на Android, iOS, Windows, L...',
    date: '2026-04-27',
    tags: ['Split Tunneling', 'VPN', 'маршрутизация', 'Android', 'iOS', 'Windows', 'Linux', 'V2rayNG', 'Streisand', 'AmneziaWG', 'Xray-core', 'белые списки', 'обход блокировок', 'безопасность', '2026'],
  },
  {
    slug: 'vless-reality-polnoe-rukovodstvo-po-nastroyke-v-2026-server-name-sni-dest-fingerprint',
    title: 'VLESS Reality: полное руководство по настройке в 2026 (Server Name, SNI, Dest, Fingerprint)',
    description: 'VLESS Reality — современный протокол обхода DPI для Xray. Полное руководство по настройке в 2026: Server Name, Dest, SNI, Fingerprint (Chrome), Private Key, ...',
    date: '2026-04-27',
    tags: ['инструкции', 'VLESS Reality', 'Xray', 'VPN', 'обход DPI', 'настройка', 'Server Name', 'SNI', 'Dest', 'Fingerprint', '2026'],
  },
  {
    slug: 'vpn-dlya-igr-kak-snizit-ping-i-ubrat-lagi-v-2026-cs2-dota-2-valorant',
    title: 'VPN для игр: как снизить пинг и убрать лаги в 2026 (CS2, Dota 2, Valorant)',
    description: 'VPN для игр в 2026: как снизить пинг и убрать лаги в CS2, Dota 2 и Valorant. Почему VPN может УМЕНЬШАТЬ пинг, а не увеличивать его. ISP throttle, плохая марш...',
    date: '2026-04-27',
    tags: ['VPN', 'игры', 'пинг', 'лаги', 'CS2', 'Dota 2', 'Valorant', 'WireGuard', 'гейминг', '2026'],
  },
  {
    slug: 'vpn-dlya-puteshestvennikov-dostup-k-rossiyskim-servisam-za-granitsey-i-zashhita-v-roaminge-v-2026',
    title: 'VPN для путешественников: доступ к российским сервисам за границей и защита в роуминге в 2026',
    description: 'За границей не работают Госуслуги, банки и российские стриминги. С 15 апреля национальные сервисы блокируют VPN-пользователей — двойная ловушка для путешеств...',
    date: '2026-04-27',
    tags: ['VPN'],
  },
  {
    slug: 'vpn-dlya-striminga-v-2026-kak-smotret-netflix-youtube-i-4k-bez-buferizatsii',
    title: 'VPN для стриминга в 2026: как смотреть Netflix, YouTube и 4K без буферизации',
    description: 'Полный гайд по выбору VPN для стриминга в 2026 году. Как обойти ISP throttling, смотреть Netflix в России, 4K на YouTube, WireGuard vs OpenVPN, NordLynx, Lig...',
    date: '2026-04-27',
    tags: ['VPN', 'стриминг', 'Netflix', 'YouTube', '4K', 'throttling', 'WireGuard', 'NordLynx', 'Speedtest', 'буферизация'],
  },
  {
    slug: 'vpn-dlya-udalyonnogo-dostupa-rdp-teamviewer-anydesk-zachem-vpn-i-kak-zashchitit-podklyucheniya-v-2026',
    title: 'VPN для удалённого доступа: RDP, TeamViewer, AnyDesk — зачем VPN и как защитить подключения в 2026',
    description: 'Полный гайд по безопасному удалённому доступу в 2026 году. Протокол RDP, TeamViewer, AnyDesk, российские альтернативы (RuDesktop, Ассистент, PRO32 Connect, R...',
    date: '2026-04-27',
    tags: ['VPN', 'RDP', 'TeamViewer', 'AnyDesk', 'удалённый доступ', 'безопасность', 'WireGuard', 'Tailscale', 'ZeroTier', 'NEMO VPN'],
  },
  {
    slug: 'vpn-i-deti-kak-zashchit-rebyonka-v-internete-roditelskiy-kontrol-filtratsiya-i-bezopasnost-v-2026',
    title: 'VPN и дети: как защитить ребёнка в интернете — родительский контроль, фильтрация и безопасность в 2026',
    description: 'Полный гайд по цифровой безопасности детей в 2026 году. Почему родительский контроль необходим, как дети обходят блокировки через VPN, опасности бесплатных V...',
    date: '2026-04-27',
    tags: ['VPN', 'родительский контроль', 'безопасность детей', 'цифровая гигиена', 'фильтрация контента', 'Qustodio', 'Norton Family', 'Kaspersky Safe Kids', 'Google Family Link', 'NEMO VPN'],
  },
  {
    slug: 'vpn-na-android-polnoe-rukovodstvo-po-nastroyke-xray-i-v2ray-v-2026',
    title: 'VPN на Android: полное руководство по настройке Xray и v2Ray в 2026',
    description: 'Полное руководство по настройке VPN на Android с Xray и v2Ray в 2026 году. v2rayNG, v2RayTun, Sing-box, Hysteria2 — лучшие приложения. Импорт конфигурации, V...',
    date: '2026-04-27',
    tags: ['инструкции', 'VPN', 'Android', 'Xray', 'v2Ray', 'VLESS Reality', 'настройка', 'обход блокировок', 'v2rayNG', '2026'],
  },
  {
    slug: 'vpn-na-iphone-i-ios-polnoe-rukovodstvo-po-nastroyke-v-2026-streisand-v2box-vless',
    title: 'VPN на iPhone и iOS: полное руководство по настройке в 2026 (Streisand, v2Box, VLESS)',
    description: 'Полное руководство по настройке VPN на iPhone и iOS в 2026 году. Apple удалила Streisand, V2Box, v2RayTun, Happ из российского App Store. Что делать если при...',
    date: '2026-04-27',
    tags: ['инструкции', 'VPN', 'iPhone', 'iOS', 'Streisand', 'v2Box', 'VLESS Reality', 'Apple Network Extension', 'настройка', 'обход блокировок', '2026'],
  },
  {
    slug: 'vpn-na-linux-polnoe-rukovodstvo-po-nastroyke-v-2026-ubuntu-debian-fedora-arch',
    title: 'VPN на Linux: полное руководство по настройке в 2026 (Ubuntu, Debian, Fedora, Arch)',
    description: 'Полное руководство по настройке VPN на Linux в 2026 году. WireGuard, OpenVPN, VLESS/Xray, Sing-box, SoftEther — все методы для Ubuntu, Debian, Fedora и Arch ...',
    date: '2026-04-27',
    tags: ['инструкции', 'VPN', 'Linux', 'Ubuntu', 'Debian', 'Fedora', 'Arch', 'настройка', 'WireGuard', 'OpenVPN', 'VLESS'],
  },
  {
    slug: 'vpn-na-windows-11-polnoe-rukovodstvo-po-nastroyke-v-2026',
    title: 'VPN на Windows 11: полное руководство по настройке в 2026',
    description: 'Полное руководство по настройке VPN на Windows 11 в 2026 году. Встроенный VPN, настройка через проводник, протоколы PPTP/L2TP/SSTP/IKEv2, WireGuard, OpenVPN,...',
    date: '2026-04-27',
    tags: ['инструкции', 'VPN', 'Windows 11', 'настройка', 'WireGuard', 'OpenVPN', 'VLESS', 'руководство'],
  },
  {
    slug: 'vpn-rasshireniya-dlya-brauzera-luchshie-dlya-chrome-i-firefox-v-2026',
    title: 'VPN-расширения для браузера: лучшие для Chrome и Firefox в 2026',
    description: 'Полный обзор VPN-расширений для браузеров в 2026 году. Чем отличается расширение от VPN-приложения, лучшие варианты для Chrome и Firefox, бесплатные и платны...',
    date: '2026-04-27',
    tags: ['VPN'],
  },
  {
    slug: 'yandeks-vk-ozon-blokiruyut-vpn-chto-proiskhodit-i-kak-oboyti-v-2026',
    title: 'Яндекс, VK, Ozon блокируют VPN: что происходит и как обойти в 2026',
    description: '15 апреля 2026 года российские платформы начали блокировать VPN-пользователей. Яндекс, VK, Ozon, Wildberries и банки ограничивают функциональность при включё...',
    date: '2026-04-27',
    tags: ['VPN', 'блокировки', 'Яндекс', 'VK', 'Ozon', 'Wildberries', 'банки', 'белые списки', '2026'],
  },
  {
    slug: 'limit-15-gb-vpn-traffic-may-2026',
    title: 'Лимит 15 ГБ на VPN-трафик: всё что известно о плате с 1 мая 2026',
    description: 'С 1 мая 2026 года в России вводится плата за международный трафик: 15 ГБ бесплатно, далее 150₽ за ГБ. Как будет работать, кто платит, как сэкономить и обойти ограничение.',
    date: '2026-04-26',
    tags: ['новости', 'законодательство', 'мобильный интернет', 'VPN', 'операторы связи', 'МТС', 'Билайн', 'Мегафон', 'Tele2'],
  },
  {
    slug: 'sravnenie-vpn-protokolov-2026-wireguard-openvpn-shadowsocks-vless-reality-xhttp-chto-vybrat-v-rossii',
    title: 'Сравнение VPN-протоколов 2026: WireGuard, OpenVPN, Shadowsocks, VLESS Reality, XHTTP — что выбрать в России',
    description: 'Полное сравнение VPN-протоколов в 2026 году: PPTP, L2TP/IPSec, OpenVPN, WireGuard, IKEv2/IPSec, Shadowsocks, VLESS Reality, XHTTP, Trojan. Таблица характеристик: скорость, безопасность, обход DPI. Какой протокол выбрать в России для разных сценариев использования.',
    date: '2026-04-26',
    tags: ['сравнение', 'протоколы', 'VPN', 'гайд', 'VLESS Reality', 'WireGuard', 'OpenVPN', 'Shadowsocks', 'XHTTP'],
  },
  {
    slug: 'besplatnyy-vs-platnyy-vpn-2026-skrytye-riski-i-alternativy',
    title: 'Бесплатный VPN vs платный VPN в 2026 году: скрытые риски и реальные альтернативы',
    description: 'Сравнение бесплатного и платного VPN в 2026 году. Скрытые риски бесплатных сервисов: продажа данных, malware, утечки. KelVPN — децентрализованная альтернатива от Сбербанка. Почему VLESS Reality + платный сервис надёжнее.',
    date: '2026-04-26',
    tags: ['безопасность', 'VPN', 'блокировки', 'KelVPN', 'VLESS Reality', 'сравнение', 'DPI'],
  },
  {
    slug: 'besplatnyy-vpn-alternativy-posle-volny-blokirovok-2026',
    title: 'Бесплатный VPN после волны блокировок 2026: альтернативы, «белый интернет» и что работает',
    description: 'Волна блокировок VPN в России: 469 сервисов заблокировано, DPI активен. Разбираем бесплатные альтернативы — KelVPN, децентрализованные решения. Почему платный VPN с VLESS Reality надёжнее бесплатных.',
    date: '2026-04-26',
    tags: ['новости', 'блокировки', 'VPN', 'безопасность', 'KelVPN', 'бесплатный VPN'],
  },
  {
    slug: 'kak-tspu-lovit-vless-i-pochemu-xhttp-sleduyushchiy-shag-2026',
    title: 'Как ТСПУ ловит VLESS в 2026 и почему XHTTP — следующий шаг',
    description: 'Технический разбор: как DPI систематически обнаруживает VLESS+Reality через JA3-хэши, TLS-профайлинг и активное зондирование. Почему XHTTP становится новой эволюцией обхода блокировок.',
    date: '2026-04-26',
    tags: ['технологии', 'VLESS', 'XHTTP', 'DPI', 'TSPU', 'блокировки'],
  },
  {
    slug: 'rossiyskie-sayty-blokiruyut-vpn-polzovateley-aprel-2026',
    title: 'Российские сайты блокируют VPN-пользователей: апрель 2026',
    description: 'Банки, маркетплейсы и мессенджеры начали блокировать доступ с VPN. Коллатеральный ущерб: пользователи вынуждены включать и выключать VPN по 10+ раз в день. VLESS Reality — решение.',
    date: '2026-04-26',
    tags: ['новости', 'блокировки', 'VPN', 'банки', 'маркетплейсы'],
  },
  {
    slug: 'vpn-posle-1-maya-2026-polnoe-rukovodstvo',
    title: 'VPN после 1 мая 2026: полное руководство для пользователей России',
    description: 'Apple удалила VPN-приложения из App Store, вводится плата за международный трафик, платформы блокируют VPN-пользователей. Практическое руководство: что делать и как подготовиться.',
    date: '2026-04-26',
    tags: ['новости', 'законодательство', 'VPN', 'руководство'],
  },
  {
    slug: 'chem-zamenit-telegram-i-whatsapp-v-2026-8-rabochih-alternativnyh-messendzherov',
    title: 'Чем заменить Telegram и WhatsApp в 2026: 8 рабочих альтернативных мессенджеров',
    description: 'Telegram и WhatsApp заблокированы в России с апреля 2026. MAX — не альтернатива (слежка, данные, ограничения). 8 реальных рабочих мессенджеров: Signal, BiP, ...',
    date: '2026-04-26',
    tags: ['мессенджеры', 'альтернативы', 'блокировки', 'MAX', 'Signal', 'BiP', 'KakaoTalk', 'безопасность', 'E2E шифрование', 'VPN'],
  },
  {
    slug: 'istoriya-blokirovok-interneta-v-rossii',
    title: 'История блокировок интернета в России: от первого закона до белых списков 2026',
    description: 'Полная хронология блокировок интернета в России: от первых законов 2012 года до массовых отключений 2025 и белых списков 2026. LinkedIn, Telegram, соцсети, V...',
    date: '2026-04-26',
    tags: ['история', 'блокировки', 'интернет', 'РКН', 'VPN', 'законодательство', 'ТСПУ'],
  },
  {
    slug: 'kak-nastroit-vpn-na-android-i-iphone-v-2026',
    title: 'Как настроить VPN на Android и iPhone в 2026: пошаговая инструкция',
    description: 'Пошаговая инструкция по настройке VPN на Android и iPhone в 2026 году. Через приложения, вручную, VLESS Reality через v2rayNG/HAPP. Проверка работоспособност...',
    date: '2026-04-26',
    tags: ['инструкции', 'VPN', 'Android', 'iPhone', 'iOS', 'настройка', 'VLESS Reality', 'руководство'],
  },
  {
    slug: 'kill-switch-i-dns-leak-pochemu-vash-vpn-mozhet-vas-podvesti-v-2026',
    title: 'Kill Switch и DNS Leak: почему ваш VPN может вас подвести в 2026',
    description: 'Kill Switch отключает интернет при разрыве VPN, DNS Leak раскрывает ваши запросы DNS. В 2026 году оба критически важны. Почему бесплатный VPN не защищает от ...',
    date: '2026-04-26',
    tags: ['VPN', 'Kill Switch', 'DNS Leak', 'безопасность', 'приватность', 'утечки', 'NordVPN', 'Surfshark', 'Proton VPN', 'ExpressVPN'],
  },
  {
    slug: 'pochemu-vpn-tormozit-v-2026-i-kak-uvelichit-skorost',
    title: 'Почему VPN тормозит в 2026 и как увеличить скорость',
    description: 'VPN стал медленным в 2026? РКН использует DPI-замедление: пинг есть, но данные не загружаются. Разбираем 5 причин тормозов и 6 способов увеличить скорость VP...',
    date: '2026-04-26',
    tags: ['гайд', 'VPN', 'скорость', 'оптимизация', 'WireGuard', 'DPI', 'блокировки'],
  },
  {
    slug: 'residential-vs-datacenter-ip-vpn-pochemu-tip-adresa-imeet-znachenie-v-2026',
    title: 'Residential IP vs Datacenter IP для VPN: почему тип адреса имеет значение в 2026',
    description: 'Datacenter IP легко определяется VPN-детекторами и блокируется платформами. Residential IP от обычных ISP выглядит как обычный пользователь и обходит проверк...',
    date: '2026-04-26',
    tags: ['VPN', 'безопасность', 'Residential IP', 'Datacenter IP', 'VLESS Reality', 'блокировки', 'ASN', 'Ozon', 'Wildberries', 'Яндекс'],
  },
  {
    slug: 'rossiyanam-mogut-zablokirovat-oplatu-vpn-chto-proiskhodit-i-kak-platit',
    title: 'Россиянам могут заблокировать оплату VPN: что происходит и как платить',
    description: 'Россиянам готовят блокировку оплаты VPN с российских карт. Провайдеры ожидают масштабной зачистки. Казахстанские банки под угрозой. Разбираем, какие способы ...',
    date: '2026-04-26',
    tags: ['новости', 'блокировки', 'оплата', 'VPN', 'криптовалюта', 'МИР', 'СБП', 'законодательство'],
  },
  {
    slug: 'shtrafy-za-vpn-v-rossii-v-2026-mify-realnost-i-chto-realno-grozit-polzovatelyam',
    title: 'Штрафы за VPN в России в 2026: мифы, реальность и что реально грозит пользователям',
    description: 'Уголовной ответственности за использование VPN в России не существует. Разбираем мифы о штрафах, что реально говорит закон №281, какие штрафы грозят владельц...',
    date: '2026-04-26',
    tags: ['VPN', 'штрафы', 'законодательство', 'закон №281', 'блокировки', 'безопасность', 'Роскомнадзор', '2026'],
  },
  {
    slug: 'tls-fingerprinting-kak-vas-vychislyayut-dazhe-cherez-vpn',
    title: 'TLS-фингерпринтинг: как вас вычисляют даже через VPN и что с этим делать',
    description: 'TLS-фингерпринтинг — метод идентификации пользователей по характеристикам зашифрованного соединения. JA3, JA4, JA4+, 4 уровня обнаружения, почему обычный VPN...',
    date: '2026-04-26',
    tags: ['безопасность', 'TLS', 'JA3', 'JA4', 'фингерпринтинг', 'DPI', 'VLESS Reality'],
  },
  {
    slug: 'tsifrovoy-zheleznyy-zanaves-kak-rossiya-zakryvaet-internet-v-2026',
    title: 'Цифровой железный занавес: как Россия закрывает интернет в 2026',
    description: 'Цифровой железный занавес опускается над Россией в 2026 году. МАХ — обязательное приложение на всех смартфонах, ФСБ мониторит IT-компании, 22 утечки данных з...',
    date: '2026-04-26',
    tags: ['новости', 'блокировки', 'интернет', 'МАХ', 'VPN', 'безопасность', 'законодательство'],
  },
  {
    slug: 'vpn-bez-logov-s-oplatoy-kriptovalyutoy-polnyy-gayd-po-privatnosti-v-2026',
    title: 'VPN без логов с оплатой криптовалютой: полный гайд по приватности в 2026',
    description: 'Полный гайд по выбору VPN без логов с оплатой криптовалютой в 2026 году. Сравнение NordVPN, ExpressVPN, PIA, Proton, Surfshark. Что такое no-logs политика, н...',
    date: '2026-04-26',
    tags: ['VPN', 'приватность', 'криптовалюта', 'no-logs', 'безопасность', 'NordVPN', 'ExpressVPN', 'PIA', 'Proton', 'Surfshark'],
  },
  {
    slug: 'vpn-dlya-biznesa-v-rossii-2026-kak-kompanii-adaptiruyutsya-k-blokirovkam',
    title: 'VPN для бизнеса в России 2026: как компании адаптируются к блокировкам',
    description: 'VPN для бизнеса в 2026: корпоративные решения узаконены (1700+ компаний получили доступ). ФСБ мониторит IT-компании, бизнес платит миллиарды рублей за VPN, М...',
    date: '2026-04-26',
    tags: ['VPN', 'бизнес', 'блокировки', 'корпоративный VPN', 'РКН', 'ФСБ', 'IT-аккредитация', 'удалённая работа', 'безопасность', '2026'],
  },
  {
    slug: 'vpn-na-routere-kak-zashchitit-ves-dom-odnim-ustroystvom-v-2026',
    title: 'VPN на роутере: как защитить весь дом одним устройством в 2026',
    description: 'Полный гайд по настройке VPN на роутере с прошивкой OpenWRT. Защитите все устройства дома одним кликом: Smart TV, IoT, консоли, телефоны. Прошивка, Passwall2...',
    date: '2026-04-26',
    tags: ['VPN', 'роутер', 'OpenWRT', 'VLESS Reality', 'маршрутизация', 'защита сети', 'DIY', '2026'],
  },
  {
    slug: 'zapret-kak-oboyti-blokirovki-bez-vpn-v-2026-polnyy-gayd',
    title: 'Zapret: как обойти блокировки без VPN в 2026 — полный гайд',
    description: 'Zapret — бесплатный инструмент для обхода DPI-блокировок без VPN. Работает через модификацию TCP-пакетов: fragment packets, host split, DNS redirect. Установ...',
    date: '2026-04-26',
    tags: ['Zapret', 'DPI', 'блокировки', 'обход DPI', 'Linux', 'Windows', 'YouTube', 'VPN', 'приватность'],
  }
]


export default function Index() {
  return (
    <>
      <Head>
        <title>{siteConfig.title} — Блог о VPN и цифровой безопасности</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content="NEMO VPN — Блог о VPN и цифровой безопасности" />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteConfig.siteUrl} />
        <meta property="og:image" content={`${siteConfig.siteUrl}/logo.jpg`} />
        <meta property="og:site_name" content="NEMO VPN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NEMO VPN — Блог о VPN и цифровой безопасности" />
        <meta name="twitter:description" content={siteConfig.description} />
        <meta name="twitter:image" content={`${siteConfig.siteUrl}/logo.jpg`} />
        <link rel="canonical" href={siteConfig.siteUrl} />
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
