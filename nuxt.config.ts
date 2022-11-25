// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@/stylus/main.styl',
    '~/assets/fonts/philosopher.css',
    '~/assets/fonts/mulish.css'
  ]
})

head: {
  link: [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600&family=Philosopher:wght@400;700'
    }
  ]
}