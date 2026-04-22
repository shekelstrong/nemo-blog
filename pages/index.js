import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../site.config'

const articles = [
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
]

export default function Home() {
  return (
    <>
      <Head>
        <title>NEMO VPN Blog — Цифровая безопасность и приватность</title>
        <meta name="description" content={siteConfig.description} />
      </Head>

      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2">Блог</h1>
        <p className="text-zinc-500 dark:text-zinc-400 text-sm">
          Статьи о цифровой безопасности, приватности и защите данных.
        </p>
      </div>

      <div>
        {articles.map(article => (
          <Link key={article.slug} href={`/articles/${article.slug}`} className="article-card">
            <h2 className="article-card-title">{article.title}</h2>
            <p className="article-card-desc">{article.description}</p>
            <div className="article-card-meta">
              <span>{article.date}</span>
              <span className="mx-1.5">·</span>
              <span>{article.tags.join(', ')}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
