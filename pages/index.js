import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../site.config'

const articles = [
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
  {
    slug: 'vsyo-nahuj-slomali',
    title: 'Всё на*уй сломали: почему вместо работы люди «гуляют» по приложениям',
    description: 'Средний россиянин проводит 7+ часов в день в мобильных приложениях. Разбираемся, как соцсети заменили реальную жизнь.',
    date: '23 апреля 2026',
    tags: ['общество', 'цифровая зависимость'],
  },
  {
    slug: 'nemo-vpn-belye-spiski-i-avtomatizaciya-pravil-marshrutizacii',
    title: 'NEMO VPN: как мы обходим белые списки и автоматизируем маршрутизацию',
    description: 'Белые списки блокируют доступ с VPN. NEMO VPN решает это автоматически: российские сервисы напрямую, заблокированные — через VLESS Reality.',
    date: '23 апреля 2026',
    tags: ['технологии', 'маршрутизация'],
  },
  {
    slug: 'operatori-prosyat-otsrochit-platu-za-vpn',
    title: 'Операторы попросили отсрочить плату за VPN: почему 15 ГБ — приговор',
    description: 'Операторы не готовы считать международный трафик. Но отсрочка — не отмена. Сколько будет стоить VPN после введения платы.',
    date: '23 апреля 2026',
    tags: ['новости', 'законодательство'],
  },
  {
    slug: 'uroki-opasnosti-vpn-shkolah',
    title: 'Уроки об «опасности» VPN в российских школах: что происходит с образованием',
    description: 'Школьникам рассказывают, что VPN — небезопасное ПО. Разбираемся, почему это пропаганда, а не обучение.',
    date: '23 апреля 2026',
    tags: ['общество', 'образование'],
  },
  {
    slug: 'vpn-i-proksi-markery-narkotikami-v-shkolah',
    title: 'VPN и прокси теперь считаются маркерами наркотиков в школах',
    description: 'Учителя приравнивают VPN к наркотикам. Школьникам грозят ответственностью за инструмент цифровой безопасности.',
    date: '23 апреля 2026',
    tags: ['общество', 'образование'],
  },
  {
    slug: 'vpn-i-proksi-markery-narkotikami-v-shkolah',
    title: 'VPN и прокси теперь считаются маркерами наркотиков в школах',
    description: 'В российских школах стали рассматривать VPN и прокси как инструменты распространения запрещённых веществ. Разбираем, что происходит и как реагировать.',
    date: '22 апреля 2026',
    tags: ['новости', 'образование', 'цифровая безопасность'],
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
