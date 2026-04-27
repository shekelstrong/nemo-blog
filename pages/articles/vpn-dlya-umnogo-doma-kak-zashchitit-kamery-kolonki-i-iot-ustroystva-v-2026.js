import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../../site.config'

export default function ArticlePage() {
  const slug = 'vpn-dlya-umnogo-doma-kak-zashchitit-kamery-kolonki-i-iot-ustroystva-v-2026'
  const title = 'VPN для умного дома: как защитить камеры, колонки и IoT-устройства в 2026'
  const description = 'Умный дом без защиты — лёгкая мишень для хакеров. Mirai botnet, Shodan, взлом камер через дефолтные пароли, прослушивание через колонки. Как VPN на роутере защищает все IoT-устройства, изолированные VLAN, RTSP через VPN, лучшие роутеры и практический чек-лист из 10 шагов.'
  const date = '2026-04-27'
  const tags = ['VPN', 'умный дом', 'IoT', 'безопасность', 'камеры', 'колонки', 'Mirai botnet', 'Shodan', 'защита сети', 'VLESS Reality']

  return (
    <>
      <Head>
        <title>{title} — NEMO VPN</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="VPN для умного дома, IoT безопасность, защита камер, защита колонок, Mirai botnet, Shodan, VPN на роутере, VLAN изоляция, RTSP через VPN, умные колонки безопасность, Alexa, Google Home, Алиса, лучшие роутеры для IoT, NEMO VPN" />
        <meta name="author" content="NEMO VPN" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${siteConfig.siteUrl}/articles/${slug}/`} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/articles/${slug}/`} />
        <meta property="og:site_name" content="NEMO VPN" />
        <meta property="article:published_time" content={date} />
        <meta property="article:modified_time" content={date} />
        <meta property="article:author" content="NEMO VPN" />
        <meta property="article:section" content="VPN" />
        <meta property="article:tag" content="VPN" />
        <meta property="article:tag" content="умный дом" />
        <meta property="article:tag" content="IoT" />
        <meta property="article:tag" content="безопасность" />
        <meta property="article:tag" content="камеры" />
        <meta property="article:tag" content="Mirai botnet" />
        <meta property="article:tag" content="Shodan" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": title,
          "description": description,
          "datePublished": date,
          "dateModified": date,
          "author": {
            "@type": "Organization",
            "name": "NEMO VPN"
          },
          "publisher": {
            "@type": "Organization",
            "name": "NEMO VPN",
            "logo": {
              "@type": "ImageObject",
              "url": `${siteConfig.siteUrl}/logo.png`
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${siteConfig.siteUrl}/articles/${slug}/`
          },
          "articleSection": "VPN",
          "keywords": "VPN для умного дома, IoT безопасность, защита камер, Mirai botnet, Shodan, VPN на роутере, VLAN изоляция"
        })}} />
      </Head>

      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:text-blue-600">
            ← Назад к статьям
          </Link>
        </div>

        <article>
          <header className="mb-8">
            <h1 className="text-3xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-gray-600 mb-4">{description}</p>
            <div className="text-sm text-gray-500">
              <time dateTime={date}>27 апреля 2026</time>
              <span className="mx-2">•</span>
              <span>{tags.join(', ')}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="lead">
              Умный дом — это удобно, но опасно. Каждое IoT-устройство — потенциальная входная дверь для хакеров. Камеры, умные колонки, датчики, лампочки, холодильники — всё это подключено к сети и может быть взломано. В 2026 году угрозы стали реальнее, чем когда-либо: Mirai botnet набирает мощь, Shodan сканирует открытые порты, а умные колонки могут превратиться в подслушивающие устройства. Единственное надёжное решение — VPN на уровне роутера.
            </p>

            <h2 id="pochemu-iot-ustroystva-uyazvimy">Почему IoT-устройства уязвимы</h2>

            <h3 id="slabye-paroli-i-defoltnye-dannye">Слабые пароли и дефолтные данные</h3>

            <p>
              Большинство IoT-устройств продаются с паролями по умолчанию: <code>admin/admin</code>, <code>123456</code>, <code>root/12345</code>. Пользователи редко меняют их — или даже не знают, как это сделать. Хакеры используют автоматические скрипты, которые подбирают пароли за секунды. По данным ForensicAnvil, более 60% взломов камер происходят именно через дефолтные пароли.
            </p>

            <h3 id="net-obnovleniy-i-podderzhki">Нет обновлений и поддержки</h3>

            <p>
              Дешёвые IoT-устройства не получают обновлений безопасности. Производитель выпускает устройство, забывает о нём, а уязвимости остаются навсегда. Нет патчей для критических багов — значит, дыра в безопасности открыта годами. К 2026 году ситуация усугубилась: десятки миллионов устройств работают на прошивках 2019–2020 годов с известными эксплойтами.
            </p>

            <h3 id="otkrytye-porty-i-upravlenie-iz-interneta">Открытые порты и управление из интернета</h3>

            <p>
              Умные колонки, камеры и датчики часто требуют удалённого доступа — из офиса, из отпуска, из командировки. Производители предлагают "удалённое управление через облако", но это означает открытые порты на роутере. Режимы P2P, UPnP, port forwarding — всё это дыры в безопасности. Каждый открытый порт — приглашение для сканеров уязвимостей.
            </p>

            <h2 id="realnye-ugrozy-mirai-botnet-vzlom-kamer-i-proslushivanie">Реальные угрозы: Mirai botnet, взлом камер и прослушивание</h2>

            <h3 id="mirai-botnet-istoriya-i-sovremennost">Mirai botnet: история и современность</h3>

            <p>
              Mirai botnet появился в 2016 году и взломал тысячи устройств — веб-камеры, маршрутизаторы, DVR. Код Mirai открыт, хакеры модифицируют его, создают новые вариации. В 2026 году на основе Mirai работают сотни ботнетов, использующих IoT-устройства для DDoS-атак, майнинга криптовалюты, распределения вредоносного ПО. Ваш умный дом может стать частью ботнета — без ведома владельца.
            </p>

            <h3 id="vzlom-kamer-cherez-rtsp">Взлом камер через RTSP</h3>

            <p>
              IP-камеры используют протокол RTSP для передачи видеопотока. По умолчанию RTSP работает без шифрования на порту 554. Хакеры сканируют интернет, находят открытые порты, подключаются к камерам и смотрят — что происходит в вашем доме. ForensicAnvil рекомендует никогда не открывать RTSP в интернет: просмотр должен быть доступен только через изолированную сеть или VPN.
            </p>

            <h3 id="proslushivanie-cherez-umnye-kolonki">Прослушивание через умные колонки</h3>

            <p>
              Alexa, Google Home, Яндекс Алиса — умные колонки постоянно слушают ключевое слово для активации. Но что, если их взломают? В 2026 году зафиксированы случаи, когда злоумышленники получали доступ к колонкам, слушали разговоры, активировали устройства удалённо. Эксплойты для колонок продаются на тёмном рынке за $50–$200. VPN шифрует трафик колонки, но не устраняет риск полностью — нужна изоляция устройств.
            </p>

            <h2 id="shodan-kak-lyuboy-mozhet-nayti-vashi-ustroystva">Shodan: как любой может найти ваши устройства</h2>

            <p>
              Shodan — поисковик для IoT-устройств. Он сканирует интернет, индексирует открытые порты, камеры, маршрутизаторы, промышленные системы. Введите <code>port:554 country:RU</code> — и вы увидите тысячи российских камер с доступом по RTSP. Shodan используется исследователями безопасности, но и хакеры тоже. Найти ваше устройство — вопрос минут: Shodan показывает IP, геолокацию, версию прошивки, даже скриншот с камеры.
            </p>

            <p>
              Как защититься? Убрать устройства из интернета. VPN на роутере скрывает ваш реальный IP, а изолированная сеть делает устройства недоступными для сканеров.
            </p>

            <h2 id="vpn-na-routere-zashchita-vseh-iot-avtomaticheski">VPN на роутере: защита всех IoT автоматически</h2>

            <p>
              Установка VPN на каждое IoT-устройство невозможна: у лампочки, датчика или холодильника нет интерфейса для настройки. Единственное решение — VPN на уровне роутера. Когда роутер подключён к VPN, все устройства в сети автоматически защищены: трафик шифруется, IP скрывается, атаки блокируются на этапе подключения.
            </p>

            <h3 id="kak-eto-rabotaet">Как это работает</h3>

            <ul>
              <li>Роутер устанавливает VPN-соединение с сервером</li>
              <li>Весь трафик всех устройств проходит через VPN-туннель</li>
              <li>Внешний мир видит только IP VPN-сервера</li>
              <li>Сканеры не могут найти ваши IoT-устройства</li>
            </ul>

            <p>
              Le VPN, ExpressVPN, NordVPN и другие сервисы предлагают приложения для роутеров. Но в условиях российских блокировок нужен обход DPI: VLESS Reality, Hysteria2, XHTTP — протоколы, которые не обнаруживаются системами ТСПУ.
            </p>

            <h2 id="izolirovannaya-set-iot-v-otdelnom-vlan-plus-vpn">Изолированная сеть: IoT в отдельном VLAN + VPN</h2>

            <p>
              VPN на роутере защищает трафик, но не предотвращает компрометацию одного устройства через другое. Если камера взломана, хакер может перейти к роутеру, а затем — к ноутбукам, телефонам, серверам. Решение — изоляция IoT-устройств в отдельном VLAN.
            </p>

            <h3 id="chto-takoe-vlan">Что такое VLAN</h3>

            <p>
              VLAN — виртуальная локальная сеть. Разделите домашнюю сеть на сегменты:
            </p>

            <ul>
              <li><strong>Основная сеть:</strong> ноутбуки, телефоны, Smart TV</li>
              <li><strong>IoT-сеть:</strong> камеры, колонки, датчики, лампочки</li>
              <li><strong>Гостевая сеть:</strong> для посетителей</li>
            </ul>

            <p>
              IoT-устройства не видят основную сеть. Если камера взломана, хакер не может выйти за пределы VLAN. Добавьте VPN для IoT-сегмента — и вы получаете двойную защиту: изоляция + шифрование.
            </p>

            <h2 id="bezopasnost-kamer-rtsp-cherez-vpn-bez-otkrytogo-dostupa">Безопасность камер: RTSP через VPN, без открытого доступа</h2>

            <p>
              IP-камеры — самый популярный умный дом элемент, и самый уязвимый. Как защитить камеру:
            </p>

            <h3 id="rtsp-cherez-vpn">RTSP через VPN</h3>

            <ul>
              <li>Никогда не открывайте порт 554 в интернет</li>
              <li>Отключите UPnP на роутере</li>
              <li>Используйте VPN для удалённого просмотра</li>
              <li>Подключайтесь к камере через VPN-туннель</li>
            </ul>

            <p>
              ForensicAnvil рекомендует RTSPS — RTSP over TLS, если камера поддерживает. Это дополнительное шифрование видеопотока. Но даже RTSPS нельзя открывать в интернет — просмотр только через изолированную сеть или VPN.
            </p>

            <h3 id="lokalnyy-dostup-tolko">Локальный доступ только</h3>

            <p>
              Настройте камеру так, чтобы она была доступна только в локальной сети. Отключите P2P-облака производителя — они часто имеют уязвимости. Используйте NVR (видеорегистратор) с локальным хранением и доступом через VPN.
            </p>

            <h2 id="umnye-kolonki-alexa-google-home-alisa-chto-oni-slyshat">Умные колонки: Alexa, Google Home, Алиса — что они слышат</h2>

            <p>
              Умные колонки постоянно слушают ключевое слово: "Alexa", "Ok Google", "Алиса". Запись начинается только после активации — так заявляют производители. Но уязвимости в прошивках, бэкдоры, взлом аккаунтов — всё это даёт хакерам доступ к микрофону.
            </p>

            <h3 id="realnye-riski">Реальные риски</h3>

            <ul>
              <li>Прослушивание разговоров в доме</li>
              <li>Активация устройств удалённо</li>
              <li>Доступ к истории команд и покупкам</li>
              <li>Связка с другими устройствами умного дома</li>
            </ul>

            <h3 id="zashchita-kolonok">Защита колонок</h3>

            <ul>
              <li>Изолируйте колонки в отдельном VLAN</li>
              <li>Используйте VPN для шифрования трафика</li>
              <li>Отключайте микрофон физически, если не используете</li>
              <li>Регулярно обновляйте прошивку</li>
              <li>Используйте двухфакторную аутентификацию для аккаунта</li>
            </ul>

            <p>
              VPN не устраняет все риски, но шифрует трафик колонки и скрывает IP — хакерам сложнее найти и взломать устройство.
            </p>

            <h2 id="luchshie-routery-dlya-iot-plus-vpn">Лучшие роутеры для IoT + VPN</h2>

            <p>
              Не каждый роутер поддерживает VPN и VLAN. Для умного дома нужны устройства с мощным процессором, достаточным объёмом памяти и поддержкой альтернативных прошивок.
            </p>

            <h3 id="roastery-s-openwrt-na-borhu">Роутеры с OpenWRT на борту</h3>

            <ul>
              <li><strong>GL.iNet GL-MT1300 (Beryl):</strong> компактный, Wi-Fi 5, OpenWRT из коробки, до 50 Мбит/с с VPN</li>
              <li><strong>GL.iNet GL-AX1800 (Flint):</strong> Wi-Fi 6, мощный CPU, до 200 Мбит/с с VPN</li>
              <li><strong>Xiaomi AX3600 с OpenWRT:</strong> популярный роутер, поддержка прошивки, до 300 Мбит/с</li>
              <li><strong>TP-Link Archer AX600U:</strong> мощный железный чип, стабильная работа с VPN</li>
            </ul>

            <h3 id="chto-iskat-v-routere">Что искать в роутере</h3>

            <ul>
              <li>Процессор минимум 4 ядра (ARMv8 или MIPS 1004Kc)</li>
              <li>Память минимум 512 МБ RAM</li>
              <li>Поддержка OpenWRT или DD-WRT</li>
              <li>Wi-Fi 5 (AC) или Wi-Fi 6 (AX)</li>
              <li>Gigabit Ethernet порты</li>
            </ul>

            <p>
              Настройка VPN на OpenWRT: используйте Passwall2 для VLESS Reality, Hysteria2, XHTTP. Протоколы обманывают DPI, работают в России в 2026 году.
            </p>

            <h2 id="prakticheskiy-chek-list-10-shagov-k-bezopasnomu-umnomu-domu">Практический чек-лист: 10 шагов к безопасному умному дому</h2>

            <ol>
              <li><strong>Смените все дефолтные пароли</strong> на устройствах, роутере, аккаунтах</li>
              <li><strong>Отключите UPnP</strong> на роутере — не держите порты открытыми</li>
              <li><strong>Создайте отдельный VLAN</strong> для IoT-устройств</li>
              <li><strong>Настройте VPN на роутере</strong> — все IoT автоматически защищены</li>
              <li><strong>Используйте VLESS Reality</strong> для обхода DPI в России</li>
              <li><strong>Никогда не открывайте RTSP</strong> камер в интернет</li>
              <li><strong>Просматривайте камеры только через VPN</strong> — локально или через туннель</li>
              <li><strong>Изолируйте умные колонки</strong> — отдельный VLAN, физический микрофон off</li>
              <li><strong>Обновляйте прошивки</strong> — регулярно проверяйте обновления</li>
              <li><strong>Используйте двухфакторную аутентификацию</strong> для всех аккаунтов</li>
            </ol>

            <h2 id="memo-vpn-vpn-na-router-vse-ustroystva-zashchishcheny">NEMO VPN: VPN на роутер = все устройства защищены</h2>

            <p>
              NEMO VPN — сервис для умного дома в 2026 году. Мы используем VLESS Reality + XHTTP — протоколы, которые не обнаруживаются системами DPI. Настройка на роутере с OpenWRT занимает 15 минут, после чего все устройства в сети автоматически защищены.
            </p>

            <h3 id="preimushchestva-nemo-vpn-dlya-umnogo-doma">Преимущества NEMO VPN для умного дома</h3>

            <ul>
              <li><strong>VLESS Reality:</strong> обходит ТСПУ, работает в России</li>
              <li><strong>XHTTP:</strong> маскирует трафик под обычный HTTPS</li>
              <li><strong>Hysteria2:</strong> высокая скорость, поддержка UDP</li>
              <li><strong>Настройка на роутере:</strong> защищает все IoT автоматически</li>
              <li><strong>Поддержка VLAN:</strong> документация по изоляции устройств</li>
              <li><strong>Резidential IP:</strong> выглядит как обычный пользователь</li>
              <li><strong>Оплата в рублях:</strong> без международных переводов</li>
              <li><strong>Поддержка 24/7:</strong> помощь с настройкой OpenWRT, Passwall2</li>
            </ul>

            <p>
              Умный дом без защиты — риск для приватности и безопасности. Mirai botnet, Shodan, взлом камер и колонок — угрозы реальны в 2026 году. VPN на роутере — единственное решение, которое защищает все устройства автоматически. Настройте NEMO VPN, изолируйте IoT в VLAN, и ваш умный дом станет безопасным.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-6">
              <p className="font-bold">Готовы защитить умный дом?</p>
              <p>Настройте NEMO VPN на роутере за 15 минут. Все IoT-устройства автоматически защищены, трафик зашифрован, IP скрыт. <Link href="/pricing" className="text-blue-600 hover:underline">Выберите тариф</Link> или <Link href="/docs/router-setup" className="text-blue-600 hover:underline">читайте инструкцию по настройке</Link>.</p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold mb-4">Похожие статьи</h3>
              <ul className="space-y-2">
                <li><Link href="/articles/vpn-na-routere-kak-zashchitit-ves-dom-odnim-ustroystvom-v-2026/" className="text-blue-500 hover:text-blue-600">VPN на роутере: как защитить весь дом одним устройством в 2026</Link></li>
                <li><Link href="/articles/kill-switch-i-dns-leak-pochemu-vash-vpn-mozhet-vas-podvesti-v-2026/" className="text-blue-500 hover:text-blue-600">Kill Switch и DNS Leak: почему ваш VPN может вас подвести в 2026</Link></li>
                <li><Link href="/articles/vpn-bez-logov-s-oplatoy-kriptovalyutoy-polnyy-gayd-po-privatnosti-v-2026/" className="text-blue-500 hover:text-blue-600">VPN без логов с оплатой криптовалютой: полный гайд по приватности в 2026</Link></li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
