// Dynamic sitemap generation for Google Search Console compatibility
// Generates XML on every request — ensures fresh content and correct headers

const SITE_URL = "https://nemo-blog.vercel.app";

const articles = [
  { slug: "vpn-i-kriptovalyuta-kak-zashchitit-kozhi-i-tranzaktsii-v-2026", date: "2026-05-11" },
  { slug: "vpn-i-oblachnye-servisy-dropbox-google-drive-onedrive-2026", date: "2026-05-11" },
  { slug: "best-vpn-russia-2026", date: "2026-05-11" },
  { slug: "chem-zamenit-telegram-i-whatsapp-v-2026-8-rabochih-alternativnyh-messendzherov", date: "2026-05-11" },
  { slug: "dns-utechki-kak-provayder-vidit-vashe-sayty-dazhe-s-vpn-i-kak-eto-ispravit-v-2026", date: "2026-05-11" },
  { slug: "hysteria2-protokol-budushchego-dlya-obhoda-blokirovok-v-2026", date: "2026-05-11" },
  { slug: "istoriya-blokirovok-interneta-v-rossii", date: "2026-05-11" },
  { slug: "kak-nastroit-vpn-na-android-i-iphone-v-2026", date: "2026-05-11" },
  { slug: "kak-sekonomit-na-podpiskah-s-vpn-youtube-premium-spotify-i-drugie-servisy-v-2026", date: "2026-05-11" },
  { slug: "kakoy-vpn-protokol-samyy-bystryy-test-wireguard-vless-hysteria2-i-openvpn-v-2026", date: "2026-05-11" },
  { slug: "kill-switch-i-dns-leak-pochemu-vash-vpn-mozhet-vas-podvesti-v-2026", date: "2026-05-11" },
  { slug: "moshenniki-pod-vidom-vpn-kak-krazh-dannyh-vyrosla-na-38-v-2026-godu", date: "2026-05-11" },
  { slug: "pochemu-vpn-tormozit-v-2026-i-kak-uvelichit-skorost", date: "2026-05-11" },
  { slug: "residential-vs-datacenter-ip-vpn-pochemu-tip-adresa-imeet-znachenie-v-2026", date: "2026-05-11" },
  { slug: "rossiyanam-mogut-zablokirovat-oplatu-vpn-chto-proiskhodit-i-kak-platit", date: "2026-05-11" },
  { slug: "shadowsocks-i-socks5-chto-eto-i-kak-nastroit-v-2026", date: "2026-05-11" },
  { slug: "shtrafy-za-vpn-v-rossii-v-2026-mify-realnost-i-chto-realno-grozit-polzovatelyam", date: "2026-05-11" },
  { slug: "split-tunneling-vpn-kak-razdelit-trafik-rossiyskie-sayty-pryamo-blokirovannye-cherez-vpn-v-2026", date: "2026-05-11" },
  { slug: "svoy-vpn-server-marzban-3x-ui-xray-kak-podnyat-vless-reality-za-30-minut-v-2026", date: "2026-05-11" },
  { slug: "tls-fingerprinting-kak-vas-vychislyayut-dazhe-cherez-vpn", date: "2026-05-11" },
  { slug: "tsifrovoy-zheleznyy-zanaves-kak-rossiya-zakryvaet-internet-v-2026", date: "2026-05-11" },
  { slug: "vless-reality-polnoe-rukovodstvo-po-nastroyke-v-2026-server-name-sni-dest-fingerprint", date: "2026-05-11" },
  { slug: "vpn-bez-logov-s-oplatoy-kriptovalyutoy-polnyy-gayd-po-privatnosti-v-2026", date: "2026-05-11" },
  { slug: "vpn-dlya-biznesa-v-rossii-2026-kak-kompanii-adaptiruyutsya-k-blokirovkam", date: "2026-05-11" },
  { slug: "vpn-dlya-igr-kak-snizit-ping-i-ubrat-lagi-v-2026-cs2-dota-2-valorant", date: "2026-05-11" },
  { slug: "vpn-dlya-igr-na-windows-snizhenie-ping-obkhod-regionalnyh-blokirovok-i-luchshie-nastroyki-v-2026", date: "2026-05-11" },
  { slug: "vpn-dlya-puteshestvennikov-dostup-k-rossiyskim-servisam-za-granitsey-i-zashhita-v-roaminge-v-2026", date: "2026-05-11" },
  { slug: "vpn-dlya-striminga-v-2026-kak-smotret-netflix-youtube-i-4k-bez-buferizatsii", date: "2026-05-11" },
  { slug: "vpn-dlya-udalyonnogo-dostupa-rdp-teamviewer-anydesk-zachem-vpn-i-kak-zashchitit-podklyucheniya-v-2026", date: "2026-05-11" },
  { slug: "vpn-i-5g-nuzhen-li-vpn-dlya-5g-interneta-v-2026", date: "2026-05-11" },
  { slug: "vpn-i-deti-kak-zashchit-rebyonka-v-internete-roditelskiy-kontrol-filtratsiya-i-bezopasnost-v-2026", date: "2026-05-11" },
  { slug: "vpn-i-dvuhfaktornaya-autentifikaciya-kak-zashchitit-akkaut-i-krazhu-paroley-v-2026", date: "2026-05-11" },
  { slug: "vpn-i-iptv-kak-smotret-smart-tv-cherez-vpn-obkhod-geoblokirovok-i-problemy-v-2026", date: "2026-05-11" },
  { slug: "vpn-i-tyomnyj-internet-mify-realnost-i-zachem-vpn-obychnomu-polzovatelyu-v-2026", date: "2026-05-11" },
  { slug: "vpn-na-android-polnoe-rukovodstvo-po-nastroyke-xray-i-v2ray-v-2026", date: "2026-05-11" },
  { slug: "vpn-na-iphone-i-ios-polnoe-rukovodstvo-po-nastroyke-v-2026-streisand-v2box-vless", date: "2026-05-11" },
  { slug: "vpn-na-linux-polnoe-rukovodstvo-po-nastroyke-v-2026-ubuntu-debian-fedora-arch", date: "2026-05-11" },
  { slug: "vpn-na-routere-kak-zashchitit-ves-dom-odnim-ustroystvom-v-2026", date: "2026-05-11" },
  { slug: "vpn-na-windows-11-polnoe-rukovodstvo-po-nastroyke-v-2026", date: "2026-05-11" },
  { slug: "vpn-rasshireniya-dlya-brauzera-luchshie-dlya-chrome-i-firefox-v-2026", date: "2026-05-11" },
  { slug: "vpn-smart-home-iot-security", date: "2026-05-11" },
  { slug: "vpn-v-rossii-2026-ozon-kinopoisk-blokirovki", date: "2026-05-11" },
  { slug: "yandeks-vk-ozon-blokiruyut-vpn-chto-proiskhodit-i-kak-oboyti-v-2026", date: "2026-05-11" },
  { slug: "zapret-kak-oboyti-blokirovki-bez-vpn-v-2026-polnyy-gayd", date: "2026-05-11" },
  { slug: "ipv6-i-vpn-pochemu-ipv6-leak-opasnee-ipv4-leak-2026", date: "2026-05-09" },
  { slug: "vpn-dlya-mac-nastroyka-bezopasnost-i-luchshie-protokoly-2026", date: "2026-05-09" },
  { slug: "vpn-dlya-udalyonnoy-raboty-zoom-teams-slack-iz-rossii-2026", date: "2026-05-09" },
  { slug: "sravnenie-vpn-protokolov-2026-wireguard-openvpn-shadowsocks-vless-reality-xhttp-chto-vybrat-v-rossii", date: "2026-05-08" },
  { slug: "vpn-dlya-umnogo-doma-kak-zashchitit-kamery-kolonki-i-iot-ustroystva-v-2026", date: "2026-05-08" },
  { slug: "vpn-posle-1-maya-2026-polnoe-rukovodstvo", date: "2026-05-08" },
  { slug: "zakonen-li-vpn-v-rossii-v-2026-shtrafy-otvetstvennost-i-chto-realno-grozit-polzovatelyam", date: "2026-05-08" },
  { slug: "kak-ustroen-deep-packet-inspection-anatomiya-tspu-2026", date: "2026-05-08" },
  { slug: "multi-hop-vpn-tsepochki-proksi-maksimalnaya-anonimnost-2026", date: "2026-05-08" },
  { slug: "vpn-i-ai-kak-iskusstvennyy-intellekt-obkhodit-dpi-i-analiziruet-blokirovki-2026", date: "2026-05-08" },
  { slug: "besplatnyy-vpn-alternativy-posle-volny-blokirovok-2026", date: "2026-05-08" },
  { slug: "besplatnyy-vs-platnyy-vpn-2026-skrytye-riski-i-alternativy", date: "2026-05-08" },
  { slug: "cloudflare-zero-trust-i-tunneli-alternativa-vpn-v-2026", date: "2026-05-08" },
  { slug: "es-zapretil-kriptovalyutu-dlya-rossii-20-y-paket-sanktsiy-rubx-tsifrovoy-rubl-i-chto-eto-znachit-dlya-vpn-polzovateley-v-2026", date: "2026-05-08" },
  { slug: "kak-tspu-lovit-vless-i-pochemu-xhttp-sleduyushchiy-shag-2026", date: "2026-05-08" },
  { slug: "limit-15-gb-vpn-traffic-may-2026", date: "2026-05-08" },
  { slug: "privatnaya-pochta-v-2026-proton-mail-tutanota-i-zachem-vpn-dlya-elektronnoy-pochty", date: "2026-05-08" },
  { slug: "rossiyskie-sayty-blokiruyut-vpn-polzovateley-aprel-2026", date: "2026-05-08" },
];

function escapeXml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export default function handler(req, res) {
  const today = new Date().toISOString().split("T")[0];

  const urls = [];

  // Homepage
  urls.push({
    loc: SITE_URL,
    lastmod: today,
    changefreq: "daily",
    priority: "1.0",
  });

  // About page
  urls.push({
    loc: `${SITE_URL}/about`,
    lastmod: today,
    changefreq: "monthly",
    priority: "0.5",
  });

  // Article pages
  for (const article of articles) {
    urls.push({
      loc: `${SITE_URL}/articles/${escapeXml(article.slug)}`,
      lastmod: article.date,
      changefreq: "weekly",
      priority: "0.8",
    });
  }

  // Build XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const url of urls) {
    xml += "  <url>\n";
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += "  </url>\n";
  }

  xml += "</urlset>";

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.status(200).send(xml);
}