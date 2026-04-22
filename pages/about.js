import Head from 'next/head'
import { siteConfig } from '../site.config'

export default function About() {
  return (
    <>
      <Head>
        <title>О сервисе — NEMO VPN</title>
        <meta name="description" content="NEMO VPN — VPN-сервис на VLESS Reality с оплатой в рублях. Trial 24ч, живая поддержка, стабильная работа." />
      </Head>

      <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">О NEMO VPN</h1>

      <div className="prose prose-gray max-w-none">
        <p>
          NEMO VPN — это VPN-сервис, созданный для стабильной работы в условиях блокировок.
          Мы используем протокол <strong>VLESS Reality</strong>, который устойчив к DPI-анализу
          и продолжает работать, когда другие VPN уже лежат.
        </p>

        <h2>Что вы получаете</h2>
        <ul>
          <li>🔑 <strong>VLESS Reality</strong> — протокол, который не блокируется</li>
          <li>💳 <strong>Оплата МИР, СБП, ЮMoney</strong> — никаких крипто-сложностей</li>
          <li>🎁 <strong>24 часа бесплатно</strong> — попробуйте перед покупкой</li>
          <li>🤝 <strong>Живая поддержка</strong> — отвечаем за минуты, не за дни</li>
          <li>👥 <strong>Реферальная программа</strong> — до 15% с приглашённых</li>
          <li>🎁 <strong>Подарочная подписка</strong> — подарите VPN другу</li>
        </ul>

        <h2>Тарифы</h2>
        <ul>
          <li><strong>Trial:</strong> 0₽ — 24ч, 1GB, все серверы</li>
          <li><strong>Месяц:</strong> от 199₽ — все серверы, 2 устройства</li>
          <li><strong>Год:</strong> выгоднее до 40%</li>
        </ul>

        <h2>Начать</h2>
        <p>
          Просто откройте бота в Telegram и нажмите «Пробная подписка» — это бесплатно.
        </p>
        <a
          href={siteConfig.telegram}
          target="_blank"
          rel="noopener"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 no-underline mt-4"
        >
          Открыть NEMO VPN →
        </a>
      </div>
    </>
  )
}
