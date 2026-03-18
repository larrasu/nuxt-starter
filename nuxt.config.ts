// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxthub/core',
    '@onmax/nuxt-better-auth',
  ],

  $production: {
    image: {
      provider: 'cloudflare',
      cloudflare: { baseURL: '/images' },
    },
  },

  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  content: {
    database: {
      type: 'd1',
      bindingName: 'DB',
    },
  },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-05-15',

  nitro: {
    preset: 'cloudflare-module',
    // workaround for /sw.js warnings
    devProxy: {
      '/sw.js': { target: '/sw.js' },
    },
  },

  hub: {
    db: {
      dialect: 'sqlite',
      casing: 'snake_case',
    },
    blob: true,
    kv: true,
    cache: true,
  },

  // Resolve: Unresolvable optimizeDeps.include entries
  vite: {
    optimizeDeps: {
      include: [],
    },
  },

  eslint: {
    config: {
      stylistic: true,
      standalone: false,
    },
  },
})
