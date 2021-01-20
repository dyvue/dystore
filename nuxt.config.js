export default {
  head: {
    title: "Dystore",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },
  css: [
    "@/assets/sass/style.sass"
  ],
  plugins: [
    { src: '@/plugins/helpers/index' },
    { src: '@/plugins/vue/splide', ssr: false }
  ],
  components: true,
  buildModules: [
    "@nuxtjs/tailwindcss",
    '@nuxtjs/device',
  ],
  modules: [],
  globalName: 'dystore',
  build: {
    publicPath: 'dystore'
  },
};
