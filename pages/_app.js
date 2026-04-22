import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { siteConfig } from '../site.config'

export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
        <script dangerouslySetInnerHTML={{__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++)if(document.scripts[j].src===r)return;k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${siteConfig.yandexMetrikaId},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});`}} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${siteConfig.gaId}');`}} />
        <meta name="google-site-verification" content="VlUjOekvfzZ-dO7A7wOXb1nJYzwwxdyTqxYzxmHYHoY" />
        <meta name="yandex-verification" content="ff1e78e4049fa961" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors">
        <header className="sticky top-0 z-10 backdrop-blur-md bg-white/80 dark:bg-gray-950/80 border-b border-gray-100 dark:border-gray-800">
          <div className="max-w-3xl mx-auto px-5 py-3.5 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 no-underline group">
              <img src={siteConfig.logo} alt="NEMO VPN" width={32} height={32} className="rounded-lg transition-transform group-hover:scale-105" />
              <span className="font-bold text-[17px] text-gray-900 dark:text-white tracking-tight">NEMO <span className="text-blue-600 dark:text-blue-400">VPN</span></span>
            </a>

            <nav className="flex items-center gap-1">
              <a href="/" className="nav-link">Статьи</a>
              <a href="/about" className="nav-link">О сервисе</a>
              <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle theme">
                <span className="theme-icon">{dark ? '☀️' : '🌙'}</span>
              </button>
              <a href={siteConfig.telegram} target="_blank" rel="noopener" className="cta-button">
                Попробовать бесплатно
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-3xl mx-auto px-5 py-10 w-full">
          <Component {...pageProps} />
        </main>
        <footer className="border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-900/50 mt-12">
          <div className="max-w-3xl mx-auto px-5 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400 dark:text-gray-500">
            <span>© {new Date().getFullYear()} NEMO VPN</span>
            <div className="flex gap-5">
              <a href="/" className="hover:text-gray-600 dark:hover:text-gray-300 no-underline">Блог</a>
              <a href="/about" className="hover:text-gray-600 dark:hover:text-gray-300 no-underline">О сервисе</a>
              <a href={siteConfig.telegram} target="_blank" rel="noopener" className="hover:text-gray-600 dark:hover:text-gray-300 no-underline">Telegram</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
