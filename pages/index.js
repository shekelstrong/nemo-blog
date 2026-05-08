import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../site.config'

const articles = [
  {
    slug: 'zakonen-li-vpn-v-rossii-v-2026-shtrafy-otvetstvennost-i-chto-realno-grozit-polzovatelyam',
    title: 'Законен ли VPN в России в 2026: штрафы, ответственность и что реально грозит пользователям',
    description: 'Подробный разбор законодательства об использовании VPN в России в 2026 году. Использование VPN НЕ запрещено законодательно, но есть нюансы. Разбираем ФЗ-281, уголовную и административную ответственность, блокировку VPN-сервисов, обязательные ограничения для сервисов и платформ. Что грозит пользователям и что не грозит.',
    date: '28 апреля 2026',
    tags: ['VPN', 'законодательство', 'штрафы', 'ФЗ-281', 'блокировки', 'безопасность', 'Роскомнадзор', '2026'],
  },
  {
    slug: 'privatnaya-pochta-v-2026-proton-mail-tutanota-i-zachem-vpn-dlya-elektronnoy-pochty',
    title: 'Приватная почта в 2026: Proton Mail, Tutanota и зачем VPN для электронной почты',
    description: 'Почему Gmail, Mail.ru и Яндекс.Почта не приватны. Сравнение Proton Mail, Tutanota и Mailfence с E2E-шифрованием. Как VPN защищает от утечек metadata и обходит блокировки Proton в России.',
    date: '27 апреля 2026',
    tags: ['приватность', 'электронная почта', 'E2E шифрование', 'Proton Mail', 'Tutanota', 'Mailfence', 'VPN', 'безопасность'],
  },
  {
    slug: 'es-zapretil-kriptovalyutu-dlya-rossii-20-y-paket-sanktsiy-rubx-tsifrovoy-rubl-i-chto-eto-znachit-dlya-vpn-polzovateley-v-2026',
    title: 'ЕС запретил криптовалюту для России: 20-й пакет санкций, RUBx, цифровой рубль и что это значит для VPN-пользователей в 2026',
    description: 'ЕС ввёл 20-й пакет санкций против России: полный запрет крипто-провайдеров, децентрализованных платформ, RUBx стейблкоина и цифрового рубля CBDC. Chainalysis отследил $12+ млрд криптоактивов, Operation Atlantic замораживает транзакции в реальном времени. Как россиянам платить за VPN, когда биржи блокируют кошельки: Monero, CoinJoin, DEX, CryptoBot (TON) и Platega.',
    date: '27 апреля 2026',
    tags: ['санкции', 'криптовалюта', 'Chainalysis', 'VPN', 'RUBx', 'цифровой рубль', 'VASP', 'комплаенс', 'Monero', 'CBDC', '2026'],
  },
  {
    slug: 'cloudflare-zero-trust-i-tunneli-alternativa-vpn-v-2026',
    title: 'Cloudflare Zero Trust и туннели: альтернатива VPN в 2026',
    description: 'Cloudflare Zero Trust заменяет традиционный VPN для бизнеса. Как работают Cloudflare Tunnels, чем лучше обычного VPN, альтернативы (Ngrok, Tailscale, Pinggy, Localtunnel, Frp, Boring Proxy), для кого подходит, настройка и сравнение с VPN в России 2026.',
    date: '27 апреля 2026',
    tags: ['Zero Trust', 'Cloudflare Tunnel', 'VPN', 'безопасность', 'бизнес', 'IoT', 'self-hosted', 'разработка', 'гейминг', '2026'],
  },
  {
    slug: 'vpn-dlya-umnogo-doma-kak-zashchitit-kamery-kolonki-i-iot-ustroystva-v-2026',
    title: 'VPN для умного дома: как защитить камеры, колонки и IoT-устройства в 2026',
    description: 'Умный дом без защиты — лёгкая мишень для хакеров. Mirai botnet, Shodan, взлом камер через дефолтные пароли, прослушивание через колонки. Как VPN на роутере защищает все IoT-устройства, изолированные VLAN, RTSP через VPN, лучшие роутеры и практический чек-лист из 10 шагов.',
    date: '27 апреля 2026',
    tags: ['VPN', 'умный дом', 'IoT', 'безопасность', 'камеры', 'колонки', 'Mirai botnet', 'Shodan', 'защита сети', 'VLESS Reality'],
  },
  {
    slug: 'limit-15-gb-vpn-traffic-may-2026',
    title: 'Лимит 15 ГБ на VPN-трафик: всё что известно о плате с 1 мая 2026',
    description: 'С 1 мая 2026 года в России вводится плата за международный трафик: 15 ГБ бесплатно, далее 150₽ за ГБ. Как будет работать, кто платит, как сэкономить и обойти ограничение.',
    date: '26 апреля 2026',
    tags: ['новости', 'законодательство', 'мобильный интернет', 'VPN', 'операторы связи', 'МТС', 'Билайн', 'Мегафон', 'Tele2'],
  },
  {
    slug: 'sravnenie-vpn-protokolov-2026-wireguard-openvpn-shadowsocks-vless-reality-xhttp-chto-vybrat-v-rossii',
    title: 'Сравнение VPN-протоколов 2026: WireGuard, OpenVPN, Shadowsocks, VLESS Reality, XHTTP — что выбрать в России',
    description: 'Полное сравнение VPN-протоколов в 2026 году: PPTP, L2TP/IPSec, OpenVPN, WireGuard, IKEv2/IPSec, Shadowsocks, VLESS Reality, XHTTP, Trojan. Таблица характеристик: скорость, безопасность, обход DPI. Какой протокол выбрать в России для разных сценариев использования.',
    date: '26 апреля 2026',
    tags: ['сравнение', 'протоколы', 'VPN', 'гайд', 'VLESS Reality', 'WireGuard', 'OpenVPN', 'Shadowsocks', 'XHTTP'],
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
    slug: 'kak-ustroen-deep-packet-inspection-anatomiya-tspu-2026',
    title: 'Как устроен Deep Packet Inspection: техническая анатомия ТСПУ в 2026',
    description: 'Глубокий технический разбор DPI и ТСПУ в России 2026: архитектура, методы фильтрации, JA3-хэши, активное зондирование, TLS-профайлинг и машинное обучение. Как работает система блокировок на практике.',
    date: '8 мая 2026',
    tags: ['DPI', 'ТСПУ', 'блокировки', 'Deep Packet Inspection', 'цензура', 'VPN', 'технологии', '2026'],
  },
  {
    slug: 'multi-hop-vpn-tsepochki-proksi-maksimalnaya-anonimnost-2026',
    title: 'Multi-hop VPN и цепочки прокси: максимальная анонимность в 2026',
    description: 'Как работают многоскачковые VPN и цепочки прокси в 2026 году: луковая маршрутизация, каскадное шифрование, защита от корреляционного трафик-анализа. Сравнение с Tor, настройка и выбор провайдеров в России.',
    date: '8 мая 2026',
    tags: ['Multi-hop VPN', 'цепочки прокси', 'анонимность', 'Tor', 'VLESS', 'каскадное шифрование', 'VPN', '2026'],
  },
  {
    slug: 'vpn-i-ai-kak-iskusstvennyy-intellekt-obkhodit-dpi-i-analiziruet-blokirovki-2026',
    title: 'VPN и ИИ: как искусственный интеллект обходит DPI и блокировки в 2026',
    description: 'ИИ и машинное обучение помогают обходить DPI-блокировки в России в 2026. Генетические алгоритмы Geneva, ML-обфускация трафика, адаптивные VPN-протоколы и анализ цензуры.',
    date: '8 мая 2026',
    tags: ['ИИ', 'DPI', 'VPN', 'машинное обучение', 'Geneva', 'обфускация', 'блокировки', '2026'],
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
          {[...articles].reverse().map((article) => (
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
