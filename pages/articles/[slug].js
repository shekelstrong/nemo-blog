import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../../site.config'

const articles = {
  'kak-vybrat-vpn-2026': {
    title: 'Как выбрать VPN в 2026 году: полное руководство',
    description: 'Разбираемся в протоколах, скорости, безопасности и цене. Что реально важно при выборе VPN.',
    date: '2026-04-22',
    tags: ['гайд', 'сравнение'],
  },
  'vless-vs-wireguard': {
    title: 'VLESS vs WireGuard vs OpenVPN — сравнение протоколов',
    description: 'Какой протокол лучше для обхода DPI? Подробное сравнение.',
    date: '2026-04-22',
    tags: ['технологии', 'протоколы'],
  },
  'besplatnyj-vpn-opasen': {
    title: 'Почему бесплатный VPN опасен: что происходит с вашими данными',
    description: 'Бесплатный VPN продаёт ваши данные, вставляет рекламу и замедляет соединение.',
    date: '2026-04-22',
    tags: ['безопасность'],
  },
  'chto-vidit-provajder': {
    title: 'Что видит ваш провайдер: шокирующая правда',
    description: 'Провайдер видит каждый сайт, каждое приложение. Рассказываем, как это остановить.',
    date: '2026-04-22',
    tags: ['приватность'],
  },
  'vpn-za-rubli': {
    title: 'VPN за рубли: 5 сервисов с оплатой картой МИР',
    description: 'Обзор VPN-сервисов, которые принимают оплату в рублях.',
    date: '2026-04-22',
    tags: ['сравнение', 'оплата'],
  },
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(articles).map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const a = articles[params.slug]
  return {
    props: {
      slug: params.slug,
      title: a.title,
      description: a.description,
      date: a.date,
      tags: a.tags,
    }
  }
}

export default function ArticlePage({ slug, title, description, date, tags }) {
  return (
    <>
      <Head>
        <title>{title} — NEMO VPN</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`${siteConfig.siteUrl}/articles/${slug}/`} />
      </Head>

      <article className="prose prose-gray max-w-none">
        <header className="mb-8 not-prose">
          <Link href="/" className="text-blue-600 text-sm hover:underline mb-4 inline-block">← Все статьи</Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">{title}</h1>
          <div className="flex items-center gap-3 text-sm text-gray-400">
            <time>{date}</time>
            <span>·</span>
            <div className="flex gap-2">
              {tags && tags.map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-500 px-2 py-0.5 rounded text-xs">{tag}</span>
              ))}
            </div>
          </div>
        </header>

        <ArticleContent slug={slug} />

        <div className="mt-12 p-6 bg-blue-50 rounded-lg not-prose">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Попробуйте NEMO VPN бесплатно</h3>
          <p className="text-gray-600 mb-4">24 часа бесплатного доступа. VLESS Reality, оплата МИР, живая поддержка.</p>
          <a
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener"
            className="inline-block bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 no-underline"
          >
            Открыть в Telegram →
          </a>
        </div>
      </article>
    </>
  )
}

function ArticleContent({ slug }) {
  if (slug === 'kak-vybrat-vpn-2026') return (
    <>
      <p>Выбор VPN в 2026 году — это не тот же процесс, что 3 года назад. Протоколы эволюционировали, блокировки усилились, а App Store и Google Play удаляют VPN-приложения по требованию регуляторов. Вот что реально важно.</p>
      <h2>1. Протокол — самое важное</h2>
      <p>Если вы в России, <strong>OpenVPN и WireGuard уже не работают</strong>. Они блокируются на уровне DPI (Deep Packet Inspection) за минуты. Что работает:</p>
      <ul>
        <li><strong>VLESS + Reality</strong> — маскирует VPN-трафик под обычный HTTPS. Самый устойчивый к блокировкам.</li>
        <li><strong>Shadowsocks</strong> — работает, но медленнее и уже частично детектируется.</li>
        <li><strong>AmneziaWG</strong> — модификация WireGuard с обфускацией. Работает, но сложнее в настройке.</li>
      </ul>
      <p><strong>Вердикт:</strong> VLESS Reality — лучший выбор для российских реалий 2026 года.</p>
      <h2>2. Оплата</h2>
      <p>Большинство зарубежных VPN принимают только Visa/Mastercard или крипту. Ищите сервисы с оплатой:</p>
      <ul>
        <li>Карты МИР</li>
        <li>СБП (Система Быстрых Платежей)</li>
        <li>ЮMoney</li>
        <li>Telegram Stars (если через бота)</li>
      </ul>
      <h2>3. Скорость</h2>
      <p>Скорость VPN зависит от 3 факторов:</p>
      <ul>
        <li><strong>Расстояние до сервера</strong> — Нидерланды и Германия — оптимальные для России.</li>
        <li><strong>Протокол</strong> — VLESS быстрее OpenVPN в 2-3 раза.</li>
        <li><strong>Нагрузка сервера</strong> — если на сервере 10,000 пользователей, будет тормозить.</li>
      </ul>
      <h2>4. Бесплатный или платный?</h2>
      <p>Бесплатный VPN = вы платите своими данными. Бесплатные VPN:</p>
      <ul>
        <li>Логируют ваш трафик и продают рекламодателям</li>
        <li>Вставляют рекламу в веб-страницы</li>
        <li>Ограничивают скорость до 1-5 Мбит/с</li>
        <li>Могут перехватывать HTTPS-трафик (man-in-the-middle)</li>
      </ul>
      <p>Лучший вариант — сервис с бесплатным пробным периодом (24-48 часов), чтобы проверить скорость и стабильность.</p>
      <h2>5. Простота настройки</h2>
      <p>Если для подключения нужно скачивать конфиги, настраивать маршруты и править реестр — это не для массового пользователя. Хороший VPN = 2 клика до подключения.</p>
      <h2>Итого</h2>
      <ul>
        <li>✅ VLESS Reality протокол</li>
        <li>✅ Оплата картой МИР или СБП</li>
        <li>✅ Бесплатный trial перед покупкой</li>
        <li>✅ Подключение за 2 клика</li>
        <li>✅ Живая поддержка на русском</li>
      </ul>
    </>
  )

  if (slug === 'vless-vs-wireguard') return (
    <>
      <p>Протокол VPN определяет всё: скорость, стабильность, и главное — сможет ли провайдер обнаружить и заблокировать ваше соединение.</p>
      <h2>OpenVPN</h2>
      <p><strong>Возраст:</strong> 20+ лет. <strong>Статус в РФ:</strong> ❌ Блокируется мгновенно.</p>
      <p>OpenVPN — ветеран, но его время прошло. Трафик легко детектируется DPI по сигнатурам.</p>
      <ul>
        <li>Скорость: 30-100 Мбит/с</li>
        <li>Обнаружение: мгновенное</li>
        <li>Настройка: сложная (сертификаты, конфиги)</li>
      </ul>
      <h2>WireGuard</h2>
      <p><strong>Возраст:</strong> 6 лет. <strong>Статус в РФ:</strong> ❌ Блокируется.</p>
      <p>WireGuard — быстрый и элегантный, но его UDP-пакеты имеют характерную структуру, которую DPI распознаёт за секунды.</p>
      <ul>
        <li>Скорость: 100-500 Мбит/с</li>
        <li>Обнаружение: быстрое (WireGuard), медленное (AmneziaWG)</li>
        <li>Настройка: средняя</li>
      </ul>
      <h2>VLESS + Reality</h2>
      <p><strong>Возраст:</strong> 2 года. <strong>Статус в РФ:</strong> ✅ Работает стабильно.</p>
      <p>VLESS — протокол из экосистемы Xray. Reality делает VPN-трафик неотличим от обычного HTTPS-соединения с реальным сайтом.</p>
      <ul>
        <li>Скорость: 200-800 Мбит/с</li>
        <li>Обнаружение: крайне сложное</li>
        <li>Настройка: простая (QR-код или ссылка)</li>
      </ul>
      <h2>Сравнительная таблица</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead><tr className="border-b-2 border-gray-300"><th className="py-2 pr-4">Параметр</th><th className="py-2 pr-4">OpenVPN</th><th className="py-2 pr-4">WireGuard</th><th className="py-2 pr-4">VLESS Reality</th></tr></thead>
          <tbody className="text-sm">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Работа в РФ</td><td>❌</td><td>❌</td><td>✅</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Скорость</td><td>30-100</td><td>100-500</td><td>200-800</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Обнаружение</td><td>Лёгкое</td><td>Быстрое</td><td>Крайне сложное</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Настройка</td><td>Сложная</td><td>Средняя</td><td>Простая</td></tr>
          </tbody>
        </table>
      </div>
      <h2>Вывод</h2>
      <p>Для России в 2026 году <strong>VLESS Reality — безальтернативный выбор</strong>.</p>
    </>
  )

  if (slug === 'besplatnyj-vpn-opasen') return (
    <>
      <p>«Если продукт бесплатный — значит, вы и есть продукт». Эта фраза идеально описывает рынок бесплатных VPN.</p>
      <h2>1. Ваши данные продаются</h2>
      <p>Исследование CSIRO показало, что <strong>28% из 283 бесплатных VPN-приложений</strong> содержат malware, а 75% используют сторонние трекеры.</p>
      <ul>
        <li>Историю посещённых сайтов</li>
        <li>Поисковые запросы</li>
        <li>Местоположение</li>
        <li>Уникальные идентификаторы устройства</li>
      </ul>
      <h2>2. Вставка рекламы</h2>
      <p>Некоторые бесплатные VPN модифицируют веб-страницы, вставляя свою рекламу или заменяя чужую.</p>
      <h2>3. Перехват HTTPS</h2>
      <p>Самое опасное: некоторые бесплатные VPN устанавливают свой корневой сертификат и <strong>расшифровывают HTTPS-трафик</strong> — включая пароли и банковские данные.</p>
      <h2>4. Замедление скорости</h2>
      <p>Ограничение до 1-5 Мбит/с и лимит трафика 500MB-2GB/мес. Вам должно быть неудобно, чтобы вы купили платную версию.</p>
      <h2>5. Ботнет</h2>
      <p>Ваше устройство может использоваться как прокси-сервер. Hola VPN был пойман на этом — продавал доступ к устройствам пользователей.</p>
      <h2>Что делать?</h2>
      <ul>
        <li>Используйте сервисы с <strong>бесплатным trial</strong> (24-48ч)</li>
        <li>Выбирайте платные сервисы (от 199₽/мес)</li>
        <li>Проверяйте политику логирования</li>
      </ul>
    </>
  )

  if (slug === 'chto-vidit-provajder') return (
    <>
      <p>Ваш интернет-провайдер видит <strong>абсолютно всё</strong>, что вы делаете в интернете. Это не теория заговора — это техническая реальность.</p>
      <h2>Что именно видит провайдер</h2>
      <ul>
        <li><strong>Каждый сайт,</strong> который вы открываете</li>
        <li><strong>Время и длительность</strong> каждого соединения</li>
        <li><strong>Приложения,</strong> которые вы используете</li>
        <li><strong>DNS-запросы</strong> — какие домены вы ищете</li>
      </ul>
      <p>HTTPS шифрует содержимое, но провайдер видит, что вы зашли на youtube.com в 14:32 и были там 47 минут.</p>
      <h2>Зачем провайдеру ваши данные</h2>
      <ol>
        <li><strong>Таргетированная реклама</strong> — продают агрегированные данные</li>
        <li><strong>Выполнение законов</strong> — СОРМ-2, Яровая, списки РКН</li>
        <li><strong>Тарификация</strong> — помогают настраивать тарифы</li>
      </ol>
      <h2>DPI — как провайдер «видит» VPN</h2>
      <p>DPI (Deep Packet Inspection) позволяет:</p>
      <ul>
        <li>Обнаруживать VPN-протоколы</li>
        <li>Блокировать соединения к конкретным серверам</li>
        <li>Замедлять определённый трафик</li>
      </ul>
      <h2>Как защититься</h2>
      <p>VPN шифрует весь трафик. Провайдер видит только IP-адрес и объём данных. <strong>Ни сайтов, ни приложений, ни содержимого.</strong></p>
      <h2>Проверьте сами</h2>
      <p>Зайдите на <strong>whoer.net</strong> или <strong>browserleaks.com</strong> без VPN и посмотрите, сколько информации утекает.</p>
    </>
  )

  if (slug === 'vpn-za-rubli') return (
    <>
      <p>Одна из главных проблем зарубежных VPN — они не принимают российские карты. Вот сервисы с оплатой в рублях.</p>
      <h2>1. NEMO VPN</h2>
      <ul>
        <li><strong>Протокол:</strong> VLESS Reality</li>
        <li><strong>Цена:</strong> от 199₽/мес</li>
        <li><strong>Оплата:</strong> МИР, СБП, ЮMoney, крипта, Telegram Stars</li>
        <li><strong>Trial:</strong> 24ч бесплатно</li>
      </ul>
      <h2>2. AdGuard VPN</h2>
      <ul>
        <li><strong>Протокол:</strong> собственный</li>
        <li><strong>Цена:</strong> от 300₽/мес</li>
        <li><strong>Оплата:</strong> МИР, СБП</li>
        <li><strong>Минусы:</strong> меньше серверов, менее устойчив к DPI</li>
      </ul>
      <h2>3. Amnezia VPN</h2>
      <ul>
        <li><strong>Протокол:</strong> AmneziaWG, XRay</li>
        <li><strong>Цена:</strong> бесплатно (self-hosted) или от 100₽/мес</li>
        <li><strong>Оплата:</strong> крипта</li>
        <li><strong>Минусы:</strong> сложная настройка</li>
      </ul>
      <h2>Сравнение</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse text-sm">
          <thead><tr className="border-b-2 border-gray-300"><th className="py-2 pr-4">Сервис</th><th className="py-2 pr-4">Протокол</th><th className="py-2 pr-4">Цена/мес</th><th className="py-2 pr-4">Работа в РФ</th></tr></thead>
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">NEMO VPN</td><td>VLESS Reality</td><td>199₽</td><td>✅ Стабильно</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">AdGuard</td><td>Собственный</td><td>300₽</td><td>⚠️ Периодически</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Amnezia</td><td>AmneziaWG</td><td>0-100₽</td><td>✅ Хорошо</td></tr>
          </tbody>
        </table>
      </div>
      <h2>Вывод</h2>
      <p>Для стабильной работы нужен VLESS Reality. От 199₽/мес за работающий VPN — это очень неплохо.</p>
    </>
  )

  return <p>Статья не найдена.</p>
}
