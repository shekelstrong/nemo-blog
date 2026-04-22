import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../site.config'

const articles = [
  {
    slug: 'operatori-prosyat-otsrochit-platu-za-vpn',
    title: 'Операторы попросили отсрочить плату за VPN: почему 15 ГБ международного трафика — это приговор для миллионов пользователей',
    description: 'Российские операторы связи обратились в Минцифры с просьбой отложить введение платы за международный трафик VPN. Разбираём, почему 15 ГБ — это мало, и как подготовиться к платному VPN.',
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
    description: 'В российских школах проводят занятия, посвящённые «небезопасности» VPN. Детям объясняют, что VPN нужно удалить. Разбираем, что происходит.',
    date: '22 апреля 2026',
    tags: ['новости', 'образование', 'цифровая безопасность'],
  },
  {
    slug: 'ploschadi-blokiruyut-vpn-aprel-2026',
    title: 'Маркетплейсы и банки блокируют VPN-пользователей: что произошло и как подготовиться',
    description: 'Минцифры раздало крупнейшим площадкам России методичку по обнаружению и блокировке VPN. С 15 апреля Wildberries, Ozon, Сбер, Яндекс и VK могут ограничить доступ через VPN.',
    date: '22 апреля 2026',
    tags: ['новости', 'безопасность', 'законодательство'],
  },
  {
    slug: 'vpn-posle-1-maya-2026',
    title: 'Что будет с VPN после 1 мая 2026: платный трафик, блокировка платформ и новые штрафы',
    description: 'Минцифры готовит три удара по VPN: платный международный трафик, блокировка платформами и штрафы. Разбираемся, что происходит и как подготовиться.',
    date: '22 апреля 2026',
    tags: ['новости', 'законодательство'],
  },
  {
    slug: 'kak-vybrat-vpn-2026',
    title: 'Как выбрать VPN в 2026 году: полное руководство',
    description: 'Разбираемся в протоколах, скорости, безопасности и цене. Что реально важно при выборе VPN для использования в России.',
    date: '22 апреля 2026',
    tags: ['гайд', 'сравнение'],
  },
  {
    slug: 'vless-vs-wireguard',
    title: 'VLESS vs WireGuard vs OpenVPN — сравнение протоколов',
    description: 'Какой протокол лучше для обхода DPI? Подробное сравнение с тестами скорости и стабильности.',
    date: '22 апреля 2026',
    tags: ['технологии', 'протоколы'],
  },
  {
    slug: 'besplatnyj-vpn-opasen',
    title: 'Почему бесплатный VPN опасен: что происходит с вашими данными',
    description: 'Бесплатный VPN продаёт ваши данные, вставляет рекламу и замедляет соединение. Вот как это работает.',
    date: '22 апреля 2026',
    tags: ['безопасность'],
  },
  {
    slug: 'chto-vidit-provajder',
    title: 'Что видит ваш провайдер: шокирующая правда',
    description: 'Провайдер видит каждый сайт, каждое приложение. Рассказываем, как это остановить за 2 минуты.',
    date: '22 апреля 2026',
    tags: ['приватность'],
  },
  {
    slug: 'vpn-za-rubli',
    title: 'VPN за рубли: 5 сервисов с оплатой картой МИР',
    description: 'Обзор VPN-сервисов, которые принимают оплату в рублях. Сравнение цен, протоколов и качества.',
    date: '22 апреля 2026',
    tags: ['сравнение', 'оплата'],
  },
  {
    slug: 'operatory-prosyat-otsrochku-platy-za-vpn-trafik',
    title: 'Операторы просят отсрочить плату за VPN-трафик: что происходит и зачем',
    description: 'Российские телеком-операторы обратились к Минцифры с просьбой отсрочить введение платы за VPN-трафик. Разбираём причины, последствия и как платный VPN спасает ситуацию.',
    date: '22 апреля 2026',
    tags: ['новости', 'законодательство'],
  },
]

const tagColors = {
  'аналитика': 'bg-blue-50 text-blue-700',
  'мобильные приложения': 'bg-purple-50 text-purple-700',
  'технологии': 'bg-emerald-50 text-emerald-700',
  'VLESS Reality': 'bg-cyan-50 text-cyan-700',
  'новости': 'bg-amber-50 text-amber-700',
  'образование': 'bg-pink-50 text-pink-700',
  'цифровая безопасность': 'bg-red-50 text-red-700',
  'безопасность': 'bg-red-50 text-red-700',
  'законодательство': 'bg-indigo-50 text-indigo-700',
  'гайд': 'bg-teal-50 text-teal-700',
  'сравнение': 'bg-violet-50 text-violet-700',
  'протоколы': 'bg-emerald-50 text-emerald-700',
  'приватность': 'bg-sky-50 text-sky-700',
  'оплата': 'bg-orange-50 text-orange-700',
}

export default function Home() {
  return (
    <>
      <Head>
        <title>NEMO VPN Blog — Цифровая безопасность и приватность</title>
        <meta name="description" content={siteConfig.description} />
      </Head>

      {/* Hero */}
      <div className="mb-16 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6" style={{background: 'hsl(var(--accent-soft))', color: 'hsl(var(--accent))'}}>
          <span className="w-1.5 h-1.5 rounded-full" style={{background: 'hsl(var(--accent))'}} />
          Цифровая безопасность и приватность
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4" style={{fontFamily: "'Space Grotesk', sans-serif", color: 'hsl(var(--foreground))'}}>
          Блог <span className="text-gradient-brand">NEMO VPN</span>
        </h1>
        <p className="text-lg" style={{color: 'hsl(var(--muted-foreground))', lineHeight: '1.7'}}>
          Аналитика, гайды и новости о VPN, приватности и свободном интернете в России.
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article, i) => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="group block rounded-2xl border p-6 transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5" style={{borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))', textDecoration: 'none'}}>
            {/* Decorative gradient bar */}
            <div className="w-10 h-1 rounded-full bg-gradient-brand mb-5 opacity-60 group-hover:opacity-100 transition-opacity" />
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {article.tags.map(tag => (
                <span key={tag} className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${tagColors[tag] || 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'}`}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Title */}
            <h2 className="text-lg font-semibold tracking-tight mb-3 text-[#0066FF] group-hover:opacity-80 transition-opacity" style={{fontFamily: "'Space Grotesk', sans-serif"}}>
              {article.title}
            </h2>

            {/* Description */}
            <p className="text-sm mb-5 leading-relaxed line-clamp-2" style={{color: 'hsl(var(--muted-foreground))'}}>
              {article.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-2 text-xs font-medium" style={{color: 'hsl(var(--muted-foreground))'}}>
              <time>{article.date}</time>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter / CTA */}
      <div className="mt-16 rounded-2xl border p-8 text-center bg-dot-pattern relative overflow-hidden" style={{borderColor: 'hsl(var(--border))'}}>
        <div className="relative">
          <h3 className="text-xl font-bold mb-2" style={{fontFamily: "'Space Grotesk', sans-serif", color: 'hsl(var(--foreground))'}}>
            Попробуйте NEMO VPN бесплатно
          </h3>
          <p className="text-sm mb-5 max-w-md mx-auto" style={{color: 'hsl(var(--muted-foreground))'}}>
            24 часа бесплатно. VLESS Reality, оплата МИР/СБП, живая поддержка.
          </p>
          <a href={siteConfig.telegram} target="_blank" rel="noopener" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white no-underline bg-gradient-brand hover:opacity-90 transition-opacity">
            Открыть в Telegram →
          </a>
        </div>
      </div>
    </>
  )
}
