let colors = require('./assets/colors.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Daffodil Digital',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Helping brands tell their stories in smarter ways' },
      { name: "msapplication-TileColor", content: colors.energy },
      { name: "msapplication-TileImage", content: "/ico/mstile-144x144.png" },
      { name: "msapplication-config", content: "/ico/browserconfig.xml" },
      { name: "theme-color", content: colors.energy }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
      { rel: "apple-touch-icon", sizes: "57x57", href: "/ico/apple-touch-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/ico/apple-touch-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/ico/apple-touch-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/ico/apple-touch-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/ico/apple-touch-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/ico/apple-touch-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/ico/apple-touch-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/ico/apple-touch-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/ico/apple-touch-icon-180x180.png" },
      { rel: "icon", type: "image/png", href: "/ico/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", type: "image/png", href: "/ico/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", type: "image/png", href: "/ico/favicon-96x96.png", sizes: "96x96" },
      { rel: "icon", type: "image/png", href: "/ico/favicon-16x16.png", sizes: "16x16" },
      { rel: "manifest", href: "/ico/manifest.json" },
      { rel: "shortcut, icon", href: "/ico/favicon.ico" },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: colors.energy },
  /*
  ** Build configuration
  */
  css: [{ src: '~assets/stylus/main.styl', lang: 'stylus' }],
  plugins: [
    {src: '~plugins/ga.js', ssr: false},
  ],
  build: {
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
