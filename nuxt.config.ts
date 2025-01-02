// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-12-01",
  runtimeConfig: {
    movieKey: process.env.MOVIE_API_KEY,
  },
});