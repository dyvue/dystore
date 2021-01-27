export default {
  head: {
    title: process.env.APP_NAME,
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
    { src: "@/plugins/helpers/index" },
    { src: "@/plugins/vue/splide", ssr: false }
  ],
  components: true,
  buildModules: [
    "@nuxtjs/dotenv",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/device",
    "@nuxtjs/axios",
  ],
  env: {
    APP_NAME: process.env.APP_NAME,
    APP_URL: process.env.APP_URL,

    API_MAIN: process.env.API_MAIN,
    API_KEY: process.env.API_KEY
  },
  modules: [],

  // UNCOMMENT THIS LINE IF BUILD MODE

  // globalName: process.env.APP_URL,
  // build: {
  //   publicPath: "/"
  // },
};
