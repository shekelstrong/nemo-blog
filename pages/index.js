import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../site.config'

const articles = [
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
    slug: 'ploschadi-blokiruyut-vpn-aprel-2026',
    title: 'Маркетплейсы и банки блокируют VPN-пользователей: что произошло и как подготовиться',
    description: 'С 15 апреля 2026 года крупные российские платформы начали блокировать пользователей с VPN.',
    date: '15 апреля 2026',
    tags: ['новости', 'блокировки'],
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
