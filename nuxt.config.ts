// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr:true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    },
  },
  supabase: {
    redirectOptions: {
      login: '/',
      callback: '/confirm',
    },
  },
  app: {
    head: {
      title: 'Todo App',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'A comprehensive Todo App to manage your tasks efficiently.' },
        { name: 'author', content: 'Your Name or Company' },
        { name: 'keywords', content: 'todo, tasks, productivity, management, todo app' },
        { property: 'og:title', content: 'Todo App' },
        { property: 'og:description', content: 'A comprehensive Todo App to manage your tasks efficiently.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: process.env.BASE_URL || 'http://localhost:3000' },
        { property: 'og:image', content: `${process.env.BASE_URL || 'http://localhost:3000'}/images/og-image.jpg` }, // Update with your image URL
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Todo App' },
        { name: 'twitter:description', content: 'A comprehensive Todo App to manage your tasks efficiently.' },
        { name: 'twitter:image', content: `${process.env.BASE_URL || 'http://localhost:3000'}/images/twitter-image.jpg` }, // Update with your image URL
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
        },
      ],

    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt', '@nuxtjs/supabase'],

})