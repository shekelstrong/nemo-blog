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
        <script dangerouslySetInnerHTML={{__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++)if(document.scripts[j].src===r)return;k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${siteConfig.yandexMetrikaId},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});`}} />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${siteConfig.gaId}');`}} />
        <meta name="google-site-verification" content="VlUjOekvfzZ-dO7A7wOXb1nJYzwwxdyTqxYzxmHYHoY" />
        <meta name="yandex-verification" content="ff1e78e4049fa961" />
      </Head>

      <div className="min-h-screen flex flex-col bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors">
        {/* Nav */}
        <nav className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-lg">
          <div className="max-w-2xl mx-auto px-5 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 no-underline text-zinc-900 dark:text-zinc-100 hover:opacity-80 transition-opacity">
              <img src={siteConfig.logo} alt="" width={24} height={24} className="rounded-md" />
              <span className="font-semibold text-sm tracking-tight">NEMO VPN Blog</span>
            </a>
            <div className="flex items-center gap-1">
              <a href="/" className="px-3 py-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all no-underline font-medium">Статьи</a>
              <a href="/about" className="px-3 py-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all no-underline font-medium">О сервисе</a>
              <button onClick={toggleTheme} className="ml-1 w-8 h-8 flex items-center justify-center rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-sm" aria-label="Toggle theme">
                {dark ? '☀️' : '🌙'}
              </button>
            </div>
          </div>
        </nav>

        {/* Content */}
        <main className="flex-1 max-w-2xl mx-auto px-5 py-10 w-full">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-8 mt-auto">
          <div className="max-w-2xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 dark:text-zinc-500">
            <span>© {new Date().getFullYear()} NEMO VPN. Все права защищены.</span>
            <div className="flex gap-4">
              <a href={siteConfig.telegram} target="_blank" rel="noopener" className="hover:text-zinc-600 dark:hover:text-zinc-300 no-underline">Telegram</a>
              <a href="/" className="hover:text-zinc-600 dark:hover:text-zinc-300 no-underline">Блог</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
