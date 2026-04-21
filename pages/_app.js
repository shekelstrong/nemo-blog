import '../styles/globals.css'
import Head from 'next/head'
import { siteConfig } from '../site.config'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <header className="border-b border-gray-200 bg-white sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 no-underline">
              <img src={siteConfig.logo} alt="NEMO VPN" width={36} height={36} className="rounded-lg" />
              <span className="font-bold text-lg text-gray-900">NEMO VPN</span>
            </a>
            <nav className="ml-auto flex gap-4 text-sm text-gray-600">
              <a href="/" className="hover:text-gray-900">Статьи</a>
              <a href="/about" className="hover:text-gray-900">О сервисе</a>
              <a href={siteConfig.telegram} target="_blank" rel="noopener" className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700 no-underline">
                Попробовать
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-3xl mx-auto px-4 py-8 w-full">
          <Component {...pageProps} />
        </main>
        <footer className="border-t border-gray-200 bg-gray-50 mt-12">
          <div className="max-w-3xl mx-auto px-4 py-6 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} NEMO VPN. Цифровая безопасность для каждого.
          </div>
        </footer>
      </div>
    </>
  )
}
