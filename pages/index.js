import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../site.config'

const articles = [
  {
    slug: 'kak-vybrat-vpn-2026',
    title: 'Как выбрать VPN в 2026 году: полное руководство',
    description: 'Разбираемся в протоколах, скорости, безопасности и цене. Что реально важно при выборе VPN для использования в России.',
    date: '2026-04-22',
    tags: ['гайд', 'сравнение'],
  },
  {
    slug: 'vless-vs-wireguard',
    title: 'VLESS vs WireGuard vs OpenVPN — сравнение протоколов',
    description: 'Какой протокол лучше для обхода DPI? Почему VLESS Reality — лучший выбор для российских пользователей в 2026 году.',
    date: '2026-04-22',
    tags: ['технологии', 'протоколы'],
  },
  {
    slug: 'besplatnyj-vpn-opasen',
    title: 'Почему бесплатный VPN опасен: что происходит с вашими данными',
    description: 'Бесплатный VPN продаёт ваши данные, вставляет рекламу и замедляет соединение. Вот как это работает и чем грозит.',
    date: '2026-04-22',
    tags: ['безопасность'],
  },
  {
    slug: 'chto-vidit-provajder',
    title: 'Что видит ваш провайдер: шокирующая правда',
    description: 'Провайдер видит каждый сайт, каждое сообщение, каждое приложение. Рассказываем, как это остановить за 2 минуты.',
    date: '2026-04-22',
    tags: ['приватность'],
  },
  {
    slug: 'vpn-za-rubli',
    title: 'VPN за рубли: 5 сервисов с оплатой картой МИР',
    description: 'Обзор VPN-сервисов, которые принимают оплату в рублях. Сравнение цен, протоколов и качества работы.',
    date: '2026-04-22',
    tags: ['сравнение', 'оплата'],
  },
]

export default function Home() {
  return (
    <>
      <Head>
        <title>NEMO VPN — Цифровая безопасность и приватность</title>
        <meta name="description" content={siteConfig.description} />
      </Head>

      <section className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-3">Блог NEMO VPN</h1>
        <p className="text-gray-600 text-lg">
          Статьи о цифровой безопасности, приватности и защите данных.
          Без воды — только то, что важно.
        </p>
      </section>

      <div className="space-y-6">
        {articles.map(article => (
          <article key={article.slug} className="border-b border-gray-100 pb-6">
            <Link href={`/articles/${article.slug}`} className="no-underline group">
              <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 mb-2">
                {article.title}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-2">{article.description}</p>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <time>{article.date}</time>
              <span>·</span>
              <div className="flex gap-2">
                {article.tags.map(tag => (
                  <span key={tag} className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs">{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
