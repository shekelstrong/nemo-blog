import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../../site.config'

const articles = {
  'kak-vybrat-vpn-2026': {
    title: 'Как выбрать VPN в 2026 году: полное руководство',
    description: 'Разбираемся в протоколах, скорости, безопасности и цене. Что реально важно при выборе VPN.',
    date: '2026-04-22',
    content: (
      <>
        <p>Выбор VPN в 2026 году — это не тот же процесс, что 3 года назад. Протоколы эволюционировали, блокировки усилились, а App Store и Google Play удаляют VPN-приложения по требованию регуляторов. Вот что реально важно.</p>

        <h2>1. Протокол — самое важное</h2>
        <p>Если вы в России, <strong>OpenVPN и WireGuard уже не работают</strong>. Они блокируются на уровне DPI (Deep Packet Inspection) за минуты. Что работает:</p>
        <ul>
          <li><strong>VLESS + Reality</strong> — маскирует VPN-трафик под обычный HTTPS. Самый устойчивый к блокировкам на данный момент.</li>
          <li><strong>Shadowsocks</strong> — работает, но медленнее и уже частично детектируется.</li>
          <li><strong>AmneziaWG</strong> — модификация WireGuard с обфускацией. Работает, но сложнее в настройке.</li>
        </ul>
        <p><strong>Вердикт:</strong> VLESS Reality — лучший выбор для российских реалий 2026 года.</p>

        <h2>2. Оплата</h2>
        <p>Большинство зарубежных VPN принимают только Visa/Mastercard или крипту. Для россиян это проблема. Ищите сервисы с оплатой:</p>
        <ul>
          <li>Карты МИР</li>
          <li>СБП (Система Быстрых Платежей)</li>
          <li>ЮMoney</li>
          <li>Telegram Stars (если через бота)</li>
        </ul>

        <h2>3. Скорость</h2>
        <p>Скорость VPN зависит от 3 факторов:</p>
        <ul>
          <li><strong>Расстояние до сервера</strong> — чем ближе, тем быстрее. Нидерланды и Германия — оптимальные для России.</li>
          <li><strong>Протокол</strong> — VLESS быстрее OpenVPN в 2-3 раза.</li>
          <li><strong>Нагрузка сервера</strong> — если на сервере 10,000 пользователей, будет тормозить.</li>
        </ul>

        <h2>4. Бесплатный или платный?</h2>
        <p>Бесплатный VPN = вы платите своими данными. Это не теория, это бизнес-модель. Бесплатные VPN:</p>
        <ul>
          <li>Логируют ваш трафик и продают рекламодателям</li>
          <li>Вставляют рекламу в веб-страницы</li>
          <li>Ограничивают скорость до 1-5 Мбит/с</li>
          <li>Могут перехватывать HTTPS-трафик (man-in-the-middle)</li>
        </ul>
        <p>Лучший вариант — сервис с бесплатным пробным периодом (24-48 часов), чтобы проверить скорость и стабильность, а затем платная подписка.</p>

        <h2>5. Простота настройки</h2>
        <p>Если для подключения нужно скачивать конфиги, настраивать маршруты и править реестр — это не для массового пользователя. Хороший VPN = 2 клика до подключения.</p>

        <h2>Итого</h2>
        <p>Идеальный VPN для России в 2026 году:</p>
        <ul>
          <li>✅ VLESS Reality протокол</li>
          <li>✅ Оплата картой МИР или СБП</li>
          <li>✅ Бесплатный trial перед покупкой</li>
          <li>✅ Подключение за 2 клика</li>
          <li>✅ Живая поддержка на русском</li>
        </ul>
        <p>Именно так работает <strong>NEMO VPN</strong> — попробуйте бесплатно 24 часа через Telegram-бот.</p>
      </>
    ),
  },
  'vless-vs-wireguard': {
    title: 'VLESS vs WireGuard vs OpenVPN — сравнение протоколов',
    description: 'Какой протокол лучше для обхода DPI? Подробное сравнение с тестами.',
    date: '2026-04-22',
    content: (
      <>
        <p>Протокол VPN определяет всё: скорость, стабильность, и главное — сможет ли провайдер обнаружить и заблокировать ваше соединение. Разбираем три самых популярных протокола.</p>

        <h2>OpenVPN</h2>
        <p><strong>Возраст:</strong> 20+ лет. <strong>Статус в РФ:</strong> ❌ Блокируется мгновенно.</p>
        <p>OpenVPN — ветеран, но его время прошло. Трафик легко детектируется DPI по сигнатурам. Даже с obfs3/obfs4 плагинами блокируется в течение часов.</p>
        <ul>
          <li>Скорость: 30-100 Мбит/с</li>
          <li>Обнаружение: мгновенное</li>
          <li>Настройка: сложная (сертификаты, конфиги)</li>
        </ul>

        <h2>WireGuard</h2>
        <p><strong>Возраст:</strong> 6 лет. <strong>Статус в РФ:</strong> ❌ Блокируется.</p>
        <p>WireGuard — быстрый и элегантный, но его UDP-пакеты имеют характерную структуру, которую DPI распознаёт за секунды. AmneziaWG (модификация с обфускацией) работает лучше, но всё ещё детектируется продвинутыми системами.</p>
        <ul>
          <li>Скорость: 100-500 Мбит/с</li>
          <li>Обнаружение: быстрое (WireGuard), медленное (AmneziaWG)</li>
          <li>Настройка: средняя</li>
        </ul>

        <h2>VLESS + Reality</h2>
        <p><strong>Возраст:</strong> 2 года. <strong>Статус в РФ:</strong> ✅ Работает стабильно.</p>
        <p>VLESS — протокол из экосистемы Xray. Reality — технология маскировки, которая делает VPN-трафик неотличим от обычного HTTPS-соединения с реальным сайтом (например, microsoft.com или apple.com).</p>
        <p><strong>Как это работает:</strong> DPI видит, что вы подключаетесь к microsoft.com по HTTPS. Всё выглядит легитимно. На самом деле это VPN-туннель.</p>
        <ul>
          <li>Скорость: 200-800 Мбит/с</li>
          <li>Обнаружение: крайне сложное</li>
          <li>Настройка: простая (QR-код или ссылка)</li>
        </ul>

        <h2>Сравнительная таблица</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-2 pr-4">Параметр</th>
                <th className="py-2 pr-4">OpenVPN</th>
                <th className="py-2 pr-4">WireGuard</th>
                <th className="py-2 pr-4">VLESS Reality</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Работа в РФ</td><td className="py-2 pr-4">❌</td><td className="py-2 pr-4">❌</td><td className="py-2 pr-4">✅</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Скорость</td><td className="py-2 pr-4">30-100</td><td className="py-2 pr-4">100-500</td><td className="py-2 pr-4">200-800</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Обнаружение</td><td className="py-2 pr-4">Лёгкое</td><td className="py-2 pr-4">Быстрое</td><td className="py-2 pr-4">Крайне сложное</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Настройка</td><td className="py-2 pr-4">Сложная</td><td className="py-2 pr-4">Средняя</td><td className="py-2 pr-4">Простая</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Вывод</h2>
        <p>Для использования в России в 2026 году <strong>VLESS Reality — безальтернативный выбор</strong>. Это единственный протокол, который стабильно работает при активных блокировках DPI.</p>
      </>
    ),
  },
  'besplatnyj-vpn-opasen': {
    title: 'Почему бесплатный VPN опасен: что происходит с вашими данными',
    description: 'Бесплатный VPN продаёт ваши данные, вставляет рекламу и замедляет соединение.',
    date: '2026-04-22',
    content: (
      <>
        <p>«Если продукт бесплатный — значит, вы и есть продукт». Эта фраза идеально описывает рынок бесплатных VPN. Давайте разберёмся, что на самом деле происходит, когда вы нажимаете «Connect» в бесплатном VPN.</p>

        <h2>1. Ваши данные продаются</h2>
        <p>Исследование CSIRO (2016) показало, что <strong>28% из 283 бесплатных VPN-приложений</strong> содержат malware, а 75% используют сторонние трекеры. С тех пор ситуация только ухудшилась.</p>
        <p>Что собирают бесплатные VPN:</p>
        <ul>
          <li>Историю посещённых сайтов</li>
          <li>Поисковые запросы</li>
          <li>Местоположение</li>
          <li>Уникальные идентификаторы устройства</li>
          <li>Данные о приложениях</li>
        </ul>
        <p>Всё это упаковывается и продаётся рекламным сетям, брокерам данных, а иногда — и более сомнительным покупателям.</p>

        <h2>2. Вставка рекламы</h2>
        <p>Некоторые бесплатные VPN буквально модифицируют веб-страницы, вставляя свою рекламу или заменяя чужую. Вы не видите разницы, но VPN зарабатывает на каждом показе.</p>

        <h2>3. Перехват HTTPS</h2>
        <p>Самое опасное: некоторые бесплатные VPN устанавливают свой корневой сертификат на устройство. Это позволяет им <strong>расшифровывать и читать HTTPS-трафик</strong> — включая пароли, банковские данные, личные сообщения.</p>
        <p>Именно этого VPN и должен предотвращать. Ирония.</p>

        <h2>4. Замедление скорости</h2>
        <p>Бесплатные VPN ограничивают скорость до 1-5 Мбит/с и лимитируют трафик (обычно 500MB-2GB/мес). Это не баг — это бизнес-модель. Вам должно быть неудобно, чтобы вы купили платную версию.</p>

        <h2>5. Ботнет</h2>
        <p>Самый тревожный сценарий: ваше устройство используется как прокси-сервер. Hola VPN был пойман на этом в 2015 — продавал доступ к устройствам пользователей как «резидентные прокси». Ваш IP могли использовать для чего угодно.</p>

        <h2>Что делать?</h2>
        <p>Не используйте бесплатные VPN. Если бюджет ограничен:</p>
        <ul>
          <li>Используйте сервисы с <strong>бесплатным trial</strong> (24-48ч) — это легально и безопасно</li>
          <li>Выбирайте недорогие платные сервисы (от 199₽/мес)</li>
          <li>Проверяйте политику логирования (no-log = не хранят данные)</li>
        </ul>
        <p>NEMO VPN даёт 24 часа бесплатно — этого достаточно, чтобы проверить скорость и стабильность перед покупкой.</p>
      </>
    ),
  },
  'chto-vidit-provajder': {
    title: 'Что видит ваш провайдер: шокирующая правда',
    description: 'Провайдер видит каждый сайт, каждое приложение. Рассказываем, как это остановить.',
    date: '2026-04-22',
    content: (
      <>
        <p>Ваш интернет-провайдер (МТС, Билайн, Мегафон, Ростелеком) видит <strong>абсолютно всё</strong>, что вы делаете в интернете. Это не теория заговора — это техническая реальность.</p>

        <h2>Что именно видит провайдер</h2>
        <ul>
          <li><strong>Каждый сайт,</strong> который вы открываете (даже в режиме инкогнито)</li>
          <li><strong>Время и длительность</strong> каждого соединения</li>
          <li><strong>Приложения,</strong> которые вы используете</li>
          <li><strong>Размер переданных данных</strong></li>
          <li><strong>DNS-запросы</strong> — какие домены вы ищете</li>
        </ul>
        <p>Да, HTTPS шифрует содержимое страницы. Но провайдер видит, что вы зашли на youtube.com в 14:32 и были там 47 минут.</p>

        <h2>Зачем провайдеру ваши данные</h2>
        <ol>
          <li><strong>Таргетированная реклама</strong> — провайдеры продают агрегированные данные рекламодателям</li>
          <li><strong>Выполнение законов</strong> — СОРМ-2, Яровая, списки РКН</li>
          <li><strong>Тарификация</strong> — данные помогают провайдерам настраивать тарифы</li>
        </ol>

        <h2>DPI — как провайдер «видит» VPN</h2>
        <p>DPI (Deep Packet Inspection) — технология анализа пакетов данных. Провайдер не просто видит «куда» вы идёте, но и «как» вы туда идёте. Это позволяет:</p>
        <ul>
          <li>Обнаруживать VPN-протоколы (OpenVPN, WireGuard)</li>
          <li>Блокировать соединения к конкретным серверам</li>
          <li>Замедлять определённый трафик (YouTube)</li>
        </ul>

        <h2>Как защититься</h2>
        <p>VPN шифрует весь трафик между вашим устройством и VPN-сервером. Провайдер видит только:</p>
        <ul>
          <li>Вы подключены к определённому IP-адресу</li>
          <li>Объём переданных данных</li>
          <li><strong>Всё.</strong> Ни сайтов, ни приложений, ни содержимого.</li>
        </ul>
        <p>Но VPN тоже может быть обнаружен через DPI. Поэтому важно использовать протокол, который маскирует трафик под обычный HTTPS — например, VLESS Reality.</p>

        <h2>Проверьте сами</h2>
        <p>Зайдите на <strong>whoer.net</strong> или <strong>browserleaks.com</strong> без VPN и посмотрите, сколько информации утекает. Потом включите VPN и проверьте снова. Разница поразительная.</p>
      </>
    ),
  },
  'vpn-za-rubli': {
    title: 'VPN за рубли: 5 сервисов с оплатой картой МИР',
    description: 'Обзор VPN-сервисов, которые принимают оплату в рублях. Сравнение цен и качества.',
    date: '2026-04-22',
    content: (
      <>
        <p>Одна из главных проблем зарубежных VPN — они не принимают российские карты. Visa и Mastercard ушли, крипта сложна для большинства. Вот сервисы, где можно оплатить картой МИР, СБП или ЮMoney.</p>

        <h2>1. NEMO VPN</h2>
        <ul>
          <li><strong>Протокол:</strong> VLESS Reality</li>
          <li><strong>Цена:</strong> от 199₽/мес</li>
          <li><strong>Оплата:</strong> МИР, СБП, ЮMoney, крипта, Telegram Stars</li>
          <li><strong>Trial:</strong> 24ч бесплатно</li>
          <li><strong>Плюсы:</strong> простота (Telegram-бот), стабильная работа, живая поддержка</li>
          <li><strong>Минусы:</strong> относительно новый сервис</li>
        </ul>

        <h2>2. AdGuard VPN</h2>
        <ul>
          <li><strong>Протокол:</strong> собственный</li>
          <li><strong>Цена:</strong> от 300₽/мес</li>
          <li><strong>Оплата:</strong> МИР, СБП</li>
          <li><strong>Плюсы:</strong> бренд, блокировка рекламы</li>
          <li><strong>Минусы:</strong> меньше серверов, протокол менее устойчив к DPI</li>
        </ul>

        <h2>3. Amnezia VPN</h2>
        <ul>
          <li><strong>Протокол:</strong> AmneziaWG, XRay</li>
          <li><strong>Цена:</strong> бесплатно (self-hosted) или от 100₽/мес (shared)</li>
          <li><strong>Оплата:</strong> крипта</li>
          <li><strong>Плюсы:</strong> open-source, self-hosted</li>
          <li><strong>Минусы:</strong> сложная настройка для обычных пользователей</li>
        </ul>

        <h2>4. Surfshark (через посредников)</h2>
        <ul>
          <li><strong>Протокол:</strong> WireGuard</li>
          <li><strong>Цена:</strong> от 200₽/мес (через посредников)</li>
          <li><strong>Оплата:</strong> через российские посредники</li>
          <li><strong>Плюсы:</strong> 100+ стран, безлимит устройств</li>
          <li><strong>Минусы:</strong> посредники = риски, WireGuard блокируется</li>
        </ul>

        <h2>Сравнение</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b-2 border-gray-300">
                <th className="py-2 pr-4">Сервис</th>
                <th className="py-2 pr-4">Протокол</th>
                <th className="py-2 pr-4">Цена/мес</th>
                <th className="py-2 pr-4">Работа в РФ</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">NEMO VPN</td><td className="py-2 pr-4">VLESS Reality</td><td className="py-2 pr-4">199₽</td><td className="py-2 pr-4">✅ Стабильно</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">AdGuard</td><td className="py-2 pr-4">Собственный</td><td className="py-2 pr-4">300₽</td><td className="py-2 pr-4">⚠️ Периодически</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Amnezia</td><td className="py-2 pr-4">AmneziaWG</td><td className="py-2 pr-4">0-100₽</td><td className="py-2 pr-4">✅ Хорошо</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-medium">Surfshark</td><td className="py-2 pr-4">WireGuard</td><td className="py-2 pr-4">200₽</td><td className="py-2 pr-4">❌ Блокируется</td></tr>
            </tbody>
          </table>
        </div>

        <h2>Вывод</h2>
        <p>Для стабильной работы в России нужен VLESS Reality. Если важна простота — Telegram-бот с 2 кликами до подключения. Если важна цена — от 199₽/мес за работающий VPN это очень неплохо.</p>
      </>
    ),
  },
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(articles).map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const article = articles[params.slug]
  return { props: { article: { slug: params.slug, title: article.title, description: article.description, date: article.date } } }
}

export default function ArticlePage({ article: meta }) {
  const article = articles[meta.slug]
  if (!article) return <div>Статья не найдена</div>

  return (
    <>
      <Head>
        <title>{article.title} — NEMO VPN</title>
        <meta name="description" content={article.description} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`${siteConfig.siteUrl}/articles/${meta.slug}/`} />
      </Head>

      <article className="prose prose-gray max-w-none">
        <header className="mb-8 not-prose">
          <Link href="/" className="text-blue-600 text-sm hover:underline mb-4 inline-block">← Все статьи</Link>
          <h1 className="text-3xl font-bold text-gray-900 mt-2 mb-2">{article.title}</h1>
          <time className="text-gray-400 text-sm">{article.date}</time>
        </header>

        {article.content}

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
