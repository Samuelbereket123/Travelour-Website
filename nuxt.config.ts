// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'Travelour | The Dubai Gateway Super App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'The Dubai gateway app. Verified businesses and talent across six verticals, the Dubai Guide, curated arrival journeys, and direct contact. Trust and know-how for everyone in Dubai.'
        },
        { property: 'og:title', content: 'Travelour | The Dubai Gateway Super App' },
        {
          property: 'og:description',
          content: 'One trusted platform connecting verified businesses, talent, and practical know-how across Dubai. Built for visitors, residents, and employers.'
        },
        { property: 'og:image', content: '/images/dubai_skyline_hero.jpg' },
        { name: 'theme-color', content: '#000000' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap'
        }
      ]
    }
  },
  css: ['~/assets/css/main.css']
})
