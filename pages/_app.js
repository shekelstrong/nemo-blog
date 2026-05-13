import '../styles/globals.css'
import Head from 'next/head'
import { siteConfig } from '../site.config'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script dangerouslySetInnerHTML={{__html: `try{const t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}`}} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/logo.jpg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
        {/* Yandex Metrika */}
        <script dangerouslySetInnerHTML={{__html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};m[i].l=1*new Date();for(var j=0;j<document.scripts.length;j++)if(document.scripts[j].src===r)return;k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window,document,"script","https://mc.yandex.ru/metrika/tag.js","ym");ym(${siteConfig.yandexMetrikaId},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});`}} />
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`}></script>
        <script dangerouslySetInnerHTML={{__html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${siteConfig.gaId}');`}} />
        <meta name="google-site-verification" content="VlUjOekvfzZ-dO7A7wOXb1nJYzwwxdyTqxYzxmHYHoY" />
        <meta name="yandex-verification" content="ff1e78e4049fa961" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="geo.region" content="RU" />
        <meta name="geo.country" content="Russia" />
        <meta name="language" content="ru" />
        <link rel="alternate" hrefLang="ru" href="https://nemo-blog.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://nemo-blog.vercel.app" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": siteConfig.name,
          "url": siteConfig.siteUrl,
          "description": siteConfig.description,
          "inLanguage": "ru-RU",
          "potentialAction": {
            "@type": "SearchAction",
            "target": `${siteConfig.siteUrl}/?q={search_term_string}`,
            "query-input": "required name=search_term_string"
          }
        })}} />
      </Head>

      <div className="min-h-screen flex flex-col transition-colors">
        {/* ─── HEADER ─── */}
        <header className="sticky top-0 z-50 border-b backdrop-blur-xl bg-[hsl(var(--background))]/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-5 h-14 sm:h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2.5 no-underline group">
              <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                <img src={siteConfig.logo} alt="NEMO VPN" width={20} height={20} className="rounded opacity-90" />
              </div>
              <span className="font-semibold text-sm tracking-tight" style={{fontFamily: "'Space Grotesk', sans-serif", color: 'hsl(var(--foreground))'}}>
                NEMO <span className="text-gradient-brand">Blog</span>
              </span>
            </a>
            {/* Desktop nav */}
            <nav className="hidden sm:flex items-center gap-1">
              <a href="/" className="px-3.5 py-1.5 text-sm rounded-lg transition-all no-underline font-medium" style={{color: 'hsl(var(--muted-foreground))'}} onMouseEnter={e => e.target.style.background='hsl(var(--secondary))'} onMouseLeave={e => e.target.style.background='transparent'}>
                Статьи
              </a>
              <a href="/about" className="px-3.5 py-1.5 text-sm rounded-lg transition-all no-underline font-medium" style={{color: 'hsl(var(--muted-foreground))'}} onMouseEnter={e => e.target.style.background='hsl(var(--secondary))'} onMouseLeave={e => e.target.style.background='transparent'}>
                О сервисе
              </a>
              <a href={siteConfig.telegram} target="_blank" rel="noopener" className="px-3.5 py-1.5 text-sm rounded-lg transition-all no-underline font-medium" style={{color: 'hsl(var(--muted-foreground))'}} onMouseEnter={e => e.target.style.background='hsl(var(--secondary))'} onMouseLeave={e => e.target.style.background='transparent'}>
                Telegram
              </a>
              <button
                onClick={() => {
                  const isDark = document.documentElement.classList.toggle('dark');
                  localStorage.setItem('theme', isDark ? 'dark' : 'light');
                }}
                className="ml-2 w-9 h-9 flex items-center justify-center rounded-lg border transition-all hover:border-foreground/30"
                style={{borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))', color: 'hsl(var(--muted-foreground))'}}
                aria-label="Переключить тему"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              </button>
            </nav>
            {/* Mobile hamburger */}
            <button
              className="sm:hidden w-9 h-9 flex items-center justify-center rounded-lg border transition-all"
              style={{borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))', color: 'hsl(var(--muted-foreground))'}}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Меню"
            >
              {menuOpen ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
          {/* Mobile menu dropdown */}
          {menuOpen && (
            <div className="sm:hidden border-t px-4 py-3 flex flex-col gap-2" style={{borderColor: 'hsl(var(--border))', background: 'hsl(var(--background))'}}>
              <a href="/" className="px-3 py-2 text-sm rounded-lg no-underline font-medium" style={{color: 'hsl(var(--foreground))'}} onClick={() => setMenuOpen(false)}>Статьи</a>
              <a href="/about" className="px-3 py-2 text-sm rounded-lg no-underline font-medium" style={{color: 'hsl(var(--foreground))'}} onClick={() => setMenuOpen(false)}>О сервисе</a>
              <a href={siteConfig.telegram} target="_blank" rel="noopener" className="px-3 py-2 text-sm rounded-lg no-underline font-medium" style={{color: 'hsl(var(--foreground))'}} onClick={() => setMenuOpen(false)}>Telegram</a>
              <button
                onClick={() => {
                  const isDark = document.documentElement.classList.toggle('dark');
                  localStorage.setItem('theme', isDark ? 'dark' : 'light');
                }}
                className="px-3 py-2 text-sm rounded-lg text-left font-medium"
                style={{color: 'hsl(var(--muted-foreground))'}}
              >
                Переключить тему
              </button>
            </div>
          )}
        </header>

        {/* ─── CONTENT ─── */}
        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-5 py-8 sm:py-12 w-full">
          <Component {...pageProps} />
        </main>

        {/* ─── FOOTER ─── */}
        <footer className="border-t py-8 sm:py-12" style={{borderColor: 'hsl(var(--border))'}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-brand flex items-center justify-center">
                    <img src={siteConfig.logo} alt="NEMO VPN" width={20} height={20} className="rounded opacity-90" />
                  </div>
                  <span className="font-semibold text-sm tracking-tight" style={{fontFamily: "'Space Grotesk', sans-serif'", color: 'hsl(var(--foreground))'}}>
                    NEMO VPN
                  </span>
                </div>
                <p className="text-sm max-w-xs" style={{color: 'hsl(var(--muted-foreground))', lineHeight: '1.7'}}>
                  VPN-сервис для цифровой безопасности. VLESS Reality, оплата МИР/СБП, 24ч бесплатно.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{color: 'hsl(var(--muted-foreground))'}}>Навигация</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/" style={{color: 'hsl(var(--muted-foreground))', textDecoration: 'none'}} className="hover:underline">Все статьи</a></li>
                  <li><a href="/about" style={{color: 'hsl(var(--muted-foreground))', textDecoration: 'none'}} className="hover:underline">О сервисе</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{color: 'hsl(var(--muted-foreground))'}}>Контакты</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href={siteConfig.telegram} target="_blank" rel="noopener" style={{color: 'hsl(var(--muted-foreground))', textDecoration: 'none'}} className="hover:underline">Telegram-бот</a></li>
                </ul>
              </div>
            </div>
            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{borderTop: '1px solid hsl(var(--border))', color: 'hsl(var(--muted-foreground))'}}>
              <span>© {new Date().getFullYear()} NEMO VPN. Все права защищены.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
// cache-bust: 1778196500