# NEMO VPN Blog

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/shekelstrong/nemo-blog?style=for-the-badge&color=yellow)](https://github.com/shekelstrong/nemo-blog/stargazers)
[![Live Demo](https://img.shields.io/badge/Live_Demo-nemo--blog.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://nemo-blog.vercel.app)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![Discussions](https://img.shields.io/github/discussions/shekelstrong/nemo-blog?style=for-the-badge&color=58A6FF)](https://github.com/shekelstrong/nemo-blog/discussions)

</div>



SEO-оптимизированный блог для NEMO VPN. Статьи о цифровой безопасности, приватности и защите данных.

## Запуск

```bash
npm install
npm run dev
```

## Деплой

GitHub push → Vercel автодеплой. Репозиторий: `shekelstrong/nemo-blog`

## Структура

- `pages/index.js` — главная (список статей)
- `pages/articles/[slug].js` — статьи (SSG)
- `pages/about.js` — о сервисе
- `public/logo.jpg` — логотип
