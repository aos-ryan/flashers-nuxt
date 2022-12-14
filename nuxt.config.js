// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],
  runtimeConfig: {
    openaiApiKey: process.env.OPENAI_KEY,
    public: {
      GQL_HOST: process.env.NUXT_GQL_HOST,
    }
  },
  'graphql-client': {
    clients: {
      default: {
        host: process.env.NUXT_GQL_HOST,
        token: process.env.GQL_TOKEN,
        retainToken: true
      }
    }
  }
})
