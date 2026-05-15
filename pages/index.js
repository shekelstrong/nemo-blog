import Head from 'next/head'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { siteConfig } from '../site.config'

// Hardcoded articles (standalone .js pages that exist)
const hardcodedArticles = [
  {
    slug: 'vpn-i-kriptovalyuta-kak-zashchitit-kozhi-i-tranzaktsii-v-2026',
    title: 'VPN и криптовалюта: как защитить кошельки и транзакции в 2026',
    description: 'Как VPN защищает криптовалютные кошельки и транзакции в 2026 году. Отслеживание блокчейна, деанонимация через IP, санкции против криптобирж, оплата VPN за криптовалюту и выбор приватных протоколов.',
    date: '2026-05-11',
    tags: ['VPN', 'криптовалюта', 'безопасность', 'блокчейн', 'Bitcoin', 'деанонимация', 'санкции', '2026'],
    image: null,
  },
  {
    slug: 'vpn-i-oblachnye-servisy-dropbox-google-drive-onedrive-2026',
    title: 'VPN и облачные сервисы: Dropbox, Google Drive, OneDrive в 2026',
    description: 'Как получить доступ к Dropbox, Google Drive и OneDrive из России в 2026 году. Блокировки, ограничения скорости, санкции и способы обхода через VPN. Сравнение облачных хранилищ и настройка VPN для работы с облаком.',
    date: '2026-05-11',
    tags: ['VPN', 'облачные сервисы', 'Dropbox', 'Google Drive', 'OneDrive', 'санкции', 'блокировки', '2026'],
    image: null,
  },
  {
    slug: 'ipv6-i-vpn-pochemu-ipv6-leak-opasnee-ipv4-leak-2026',
    title: 'IPv6 и VPN: почему IPv6-leak опаснее IPv4-leak в 2026',
    description: 'IPv6-leak раскрывает ваш реальный IP и местоположение даже через VPN. Разбираем, почему утечка IPv6 опаснее IPv4, как провайдеры и ТСПУ используют IPv6 для деанонимации, и как защититься.',
    date: '2026-05-09',
    tags: ['IPv6', 'IPv6-leak', 'VPN', 'утечки IP', 'DPI', 'безопасность', 'приватность', '2026'],
    image: null,
  },
  {
    slug: 'vpn-dlya-mac-nastroyka-bezopasnost-i-luchshie-protokoly-2026',
    title: 'VPN для Mac: настройка, безопасность и лучшие протоколы 2026',
    description: 'Полное руководство по VPN на macOS в 2026: выбор протокола, настройка VLESS Reality и WireGuard, обход DPI на Mac, сравнение клиентов, безопасность и типичные ошибки.',
    date: '2026-05-09',
    tags: ['VPN', 'macOS', 'Mac', 'VLESS Reality', 'WireGuard', 'DPI', 'безопасность', '2026'],
    image: null,
  },
  {
    slug: 'vpn-dlya-udalyonnoy-raboty-zoom-teams-slack-iz-rossii-2026',
    title: 'VPN для удалённой работы: Zoom, Teams, Slack из России в 2026',
    description: 'Как настроить VPN для удалённой работы из России в 2026: Zoom, Microsoft Teams, Slack, Google Workspace и другие сервисы, заблокированные или ограниченные. Протоколы, сплит-туннелинг, обход DPI и практические гайды.',
    date: '2026-05-09',
    tags: ['VPN', 'удалённая работа', 'Zoom', 'Teams', 'Slack', 'DPI', 'сплит-туннелинг', '2026'],
    image: null,
  },
  {
    slug: 'kak-ustroen-deep-packet-inspection-anatomiya-tspu-2026',
    title: 'Как устроен Deep Packet Inspection: техническая анатомия ТСПУ в 2026',
    description: 'Глубокий технический разбор DPI и ТСПУ в России 2026: архитектура, методы фильтрации, JA3-хэши, активное зондирование, TLS-профайлинг и машинное обучение. Как работает система блокировок на практике.',
    date: '2026-05-08',
    tags: ['DPI', 'ТСПУ', 'блокировки', 'Deep Packet Inspection', 'цензура', 'VPN', 'технологии', '2026'],
    image: null,
  },
  {
    slug: 'multi-hop-vpn-tsepochki-proksi-maksimalnaya-anonimnost-2026',
    title: 'Multi-hop VPN и цепочки прокси: максимальная анонимность в 2026',
    description: 'Как работают многоскачковые VPN и цепочки прокси в 2026 году: луковая маршрутизация, каскадное шифрование, защита от корреляционного трафик-анализа. Сравнение с Tor, настройка и выбор провайдеров в России.',
    date: '2026-05-08',
    tags: ['Multi-hop VPN', 'цепочки прокси', 'анонимность', 'Tor', 'VLESS', 'каскадное шифрование', 'VPN', '2026'],
    image: null,
  },
  {
    slug: 'vpn-i-ai-kak-iskusstvennyy-intellekt-obkhodit-dpi-i-analiziruet-blokirovki-2026',
    title: 'VPN и ИИ: как искусственный интеллект обходит DPI и блокировки в 2026',
    description: 'ИИ и машинное обучение помогают обходить DPI-блокировки в России в 2026. Генетические алгоритмы Geneva, ML-обфускация трафика, адаптивные VPN-протоколы и анализ цензуры.',
    date: '2026-05-08',
    tags: ['ИИ', 'DPI', 'VPN', 'машинное обучение', 'Geneva', 'обфускация', 'блокировки', '2026'],
    image: null,
  },
  {
    slug: 'besplatnyy-vpn-alternativy-posle-volny-blokirovok-2026',
    title: 'Бесплатный VPN: альтернативы после волны блокировок 2026',
    description: 'Какие бесплатные VPN ещё работают в России после волны блокировок 2026 года. Сравнение Proton VPN, Windscribe, Planet VPN и других. Риски, ограничения и когда бесплатный VPN оправдан.',
    date: '2026-05-08',
    tags: ['бесплатный VPN', 'Proton VPN', 'Windscribe', 'Planet VPN', 'блокировки', 'VPN', '2026'],
    image: null,
  },
  {
    slug: 'besplatnyy-vs-platnyy-vpn-2026-skrytye-riski-i-alternativy',
    title: 'Бесплатный vs платный VPN в 2026: скрытые риски и реальные альтернативы',
    description: 'Сравнение бесплатных и платных VPN в 2026 году. Скрытые риски бесплатных сервисов: продажа данных, инъекция рекламы, ботнеты. Когда платный VPN оправдан и как выбрать надёжного провайдера.',
    date: '2026-05-08',
    tags: ['VPN', 'бесплатный VPN', 'платный VPN', 'безопасность', 'сравнение', 'Proton VPN', 'NordVPN', '2026'],
    image: null,
  },
  {
    slug: 'cloudflare-zero-trust-i-tunneli-alternativa-vpn-v-2026',
    title: 'Cloudflare Zero Trust и туннели: альтернатива VPN в 2026',
    description: 'Cloudflare Zero Trust, WARP и туннели как альтернатива VPN в 2026. Как настроить Cloudflared для обхода блокировок, сравнение с традиционными VPN и когда это работает лучше.',
    date: '2026-05-08',
    tags: ['Cloudflare', 'Zero Trust', 'WARP', 'туннели', 'VPN', 'альтернатива', 'блокировки', '2026'],
    image: null,
  },
  {
    slug: 'limit-15-gb-vpn-traffic-may-2026',
    title: 'Лимит 15 ГБ на VPN-трафик: что происходит в мае 2026',
    description: 'С мая 2026 года провайдеры вводят лимит 15 ГБ на VPN-трафик. Разбираем, что это значит, как это работает и как обойти ограничения.',
    date: '2026-05-07',
    tags: ['VPN', 'лимит трафика', 'блокировки', 'ТСПУ', 'DPI', 'обход ограничений', '2026'],
    image: null,
  },
  {
    slug: 'privatnaya-pochta-v-2026-proton-mail-tutanota-i-zachem-vpn-dlya-elektronnoy-pochty',
    title: 'Приватная почта в 2026: Proton Mail, Tutanota и зачем VPN для электронной почты',
    description: 'Зачем VPN для электронной почты в 2026: Proton Mail, Tutanota и другие приватные почтовые сервисы. Шифрование, обход блокировок, PGP и защита переписки.',
    date: '2026-05-07',
    tags: ['VPN', 'приватная почта', 'Proton Mail', 'Tutanota', 'шифрование', 'PGP', '2026'],
    image: null,
  },
  {
    slug: 'kak-tspu-lovit-vless-i-pochemu-xhttp-sleduyushchiy-shag-2026',
    title: 'Как ТСПУ ловит VLESS и почему XHTTP — следующий шаг в 2026',
    description: 'Технический разбор: как ТСПУ детектирует VLESS Reality в 2026 году. Активное зондирование, JA3-профайлинг и почему XHTTP/CDN-маскировка — следующая ступень эволюции обхода DPI.',
    date: '2026-05-07',
    tags: ['VLESS', 'XHTTP', 'ТСПУ', 'DPI', 'протоколы', 'блокировки', 'обход', '2026'],
    image: null,
  },
]

export async function getStaticProps() {
  const articlesDir = path.join(process.cwd(), 'articles')
  let mdArticles = []
  
  if (fs.existsSync(articlesDir)) {
    const files = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md'))
    mdArticles = files.map(f => {
      const raw = fs.readFileSync(path.join(articlesDir, f), 'utf-8')
      const { data } = matter(raw)
      return {
        slug: f.replace('.md', ''),
        title: data.title || f.replace('.md', ''),
        description: data.description || '',
        date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : String(data.date || ''),
        tags: Array.isArray(data.tags) ? data.tags : [],
        image: data.image || null,
      }
    })
  }

  // Combine: hardcoded (standalone pages) + markdown articles
  // Merge by slug, preferring the more recent date
  const slugMap = new Map()
  for (const a of hardcodedArticles) {
    slugMap.set(a.slug, a)
  }
  for (const a of mdArticles) {
    if (!slugMap.has(a.slug)) {
      slugMap.set(a.slug, a)
    }
  }

  const allArticles = Array.from(slugMap.values())
    .sort((a, b) => {
      const da = String(a.date).includes('-') ? String(a.date) : a.date
      const db = String(b.date).includes('-') ? String(b.date) : b.date
      return db.localeCompare(da)
    })
    .map(a => ({ ...a, dateDisplay: formatDate(a.date) }))

  return {
    props: { articles: allArticles },
    revalidate: 60,
  }
}

const RU_MONTHS = {'01':'января','02':'февраля','03':'марта','04':'апреля','05':'мая','06':'июня','07':'июля','08':'августа','09':'сентября','10':'октября','11':'ноября','12':'декабря'}

function formatDate(dateStr) {
  if (!dateStr) return ''
  const [y, m, d] = String(dateStr).split('-')
  if (y && m && d) return `${parseInt(d)} ${RU_MONTHS[m] || m} ${y}`
  return dateStr
}

export default function Index({ articles }) {
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
              className="block rounded-lg border hover:border-blue-500 transition-colors overflow-hidden"
            >
              {article.image && (
                <div className="w-full" style={{ aspectRatio: '16/7', overflow: 'hidden' }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                <p className="text-gray-600 mb-3">{article.description}</p>
                <div className="text-sm text-gray-500 flex items-center gap-2">
                  <span>{article.dateDisplay || article.date}</span>
                  <span>•</span>
                  <span>{article.tags.join(', ')}</span>
                </div>
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
