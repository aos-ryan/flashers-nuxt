// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: ["@fawmi/vue-google-maps", "gsap"]
  },
  modules: ["nuxt-graphql-client"],
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_KEY,
    public: {
      GQL_HOST: process.env.NUXT_GQL_HOST,
      GOOGLE_API_KEY: process.env.GOOGLE_API_KEY
    }
  },
  "graphql-client": {
    clients: {
      default: {
        host: process.env.NUXT_GQL_HOST,
        token: process.env.GQL_TOKEN,
        retainToken: true
      }
    }
  },
  app: {
    head: {
      title: "Flashers",
      htmlAttrs: {
        lang: "en"
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Unbounded:wght@300&display=swap"
        }
      ]
    }
  }
});
