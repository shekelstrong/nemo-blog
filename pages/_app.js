import '../styles/globals.css'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { siteConfig } from '../site.config'

export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState(false)

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
        {/* Yandex.Metrika */}
        <script dangerouslySetInnerHTML={{__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++)if(document.scripts[j].src===r)return;k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${siteConfig.yandexMetrikaId},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});`}} />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${siteConfig.gaId}');`}} />
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="VlUjOekvfzZ-dO7A7wOXb1nJYzwwxdyTqxYzxmHYHoY" />
        {/* Yandex Webmaster verification */}
        <meta name="yandex-verification" content="ff1e78e4049fa961" />
      </Head>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors">
        <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 no-underline">
              <img src={siteConfig.logo} alt="NEMO VPN" width={36} height={36} className="rounded-lg" />
              <span className="font-bold text-lg text-gray-900 dark:text-gray-100">NEMO VPN</span>
            </a>
            <nav className="ml-auto flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <a href="/" className="hover:text-gray-900 dark:hover:text-gray-100">Статьи</a>
              <a href="/about" className="hover:text-gray-900 dark:hover:text-gray-100">О сервисе</a>
              <button onClick={toggleTheme} className="p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800" aria-label="Toggle theme">
                {dark ? '☀️' : '🌙'}
              </button>
              <a href={siteConfig.telegram} target="_blank" rel="noopener" className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 no-underline">
                Попробовать
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
          <Component {...pageProps} />
        </main>
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 mt-12">
          <div className="max-w-3xl mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} NEMO VPN. Цифровая безопасность для каждого.
          </div>
        </footer>
      </div>
    </>
  )
}
