// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Hestara - Buat Aplikasi Tanpa Kode Program",
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          hid: "stripe",
          src: "//js-na1.hs-scripts.com/24036900.js",
          defer: true,
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
