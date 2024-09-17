// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    googleServiceAccountEmail: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    googlePrivateKey: process.env.GOOGLE_PRIVATE_KEY,
    googleSheetId: process.env.GOOGLE_SHEET_ID,
    public: {
      gtagId: "G-3999FQYJGV",
    },
  },
  app: {
    head: {
      titleTemplate: "AIR5",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "INVENTING THE FUTURE OF CABLE" },
        {
          hid: "og:title",
          property: "og:title",
          content: "Inventing the Future of Cable",
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "AIR 5",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.air5.io",
        },
      ],
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  plugins: ["~/plugins/gtag.client.js"],
  css: ["@/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
