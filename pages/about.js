import Head from 'next/head'
import { siteConfig } from '../site.config'

export default function About() {
  return (
    <>
      <Head>
        <title>О сервисе — NEMO VPN</title>
        <meta name="description" content="NEMO VPN — VPN-сервис на VLESS Reality с оплатой в рублях. Trial 24ч, живая поддержка." />
        <meta property="og:title" content="О сервисе — NEMO VPN" />
        <meta property="og:description" content="NEMO VPN — VPN-сервис на VLESS Reality с оплатой в рублях. Trial 24ч, живая поддержка." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${siteConfig.siteUrl}/about`} />
        <meta property="og:image" content={`${siteConfig.siteUrl}/logo.jpg`} />
        <meta property="og:site_name" content="NEMO VPN" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={`${siteConfig.siteUrl}/about`} />
      </Head>

      <div className="max-w-2xl mx-auto about-page">
        <h1>О NEMO VPN</h1>

        <p>
          NEMO VPN — это VPN-сервис, созданный для стабильной работы в условиях блокировок.
          Мы используем протокол <strong>VLESS Reality</strong>, который устойчив к DPI-анализу
          и продолжает работать, когда другие VPN уже лежат.
        </p>

        <h2>Что вы получаете</h2>
        <ul>
          <li>🔑 <strong>VLESS Reality</strong> — протокол, который не блокируется</li>
          <li>💳 <strong>Оплата МИР, СБП, ЮMoney</strong> — никаких сложностей</li>
          <li>🎁 <strong>24 часа бесплатно</strong> — попробуйте перед покупкой</li>
          <li>🤝 <strong>Живая поддержка</strong> — отвечаем за минуты</li>
          <li>👥 <strong>Реферальная программа</strong> — до 15% с приглашённых</li>
          <li>🎁 <strong>Подарочная подписка</strong> — подарите VPN другу</li>
        </ul>

        <h2>Начать</h2>
        <p>Просто откройте бота в Telegram и нажмите «Пробная подписка» — это бесплатно.</p>
        <a href={siteConfig.telegram} target="_blank" rel="noopener" className="cta-button mt-2">
          Открыть NEMO VPN →
        </a>
      </div>
    </>
  )
}
