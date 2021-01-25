export default {
  head: {
    title: "Dystore",
    meta: [
      { charset: "utf-8" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
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
  build: {},
};
