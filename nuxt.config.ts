// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      // title: "",
      // link: [
      //   {
      //     rel: "icon",
      //     href: "",
      //   },
      // ],
      meta: [
        // {
        //   "http-equiv": 'Content-Security-Policy',
        //   content: 'default-src * data: blob:;'
        // }
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
        {
          name: "theme-color",
          content: "#FF852E",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/logo.svg",
        },
        {
          rel: "stylesheet",
          href: "https://cdn.ckeditor.com/ckeditor5/33.0.0/classic/ckeditor.css",
        },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/cloudinary-video-player@1.5.9/dist/cld-video-player.min.css",
        },
        // {
        //   rel: "stylesheet",
        //   href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",
        // },
        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/plyr@3.7.8/dist/plyr.css",
        },
      ],
      script: [
        {
          src: "https://accounts.google.com/gsi/client",
          async: true,
          defer: true,
        },
        {
          src: "https://cdn.jsdelivr.net/npm/vue-plyr@7.0.0/dist/vue-plyr.min.js",
          async: true,
          defer: true,
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL,
      localBaseURL: process.env.LOCAL_BASE_URL,
      client_id: process.env.CLIENT_ID,
      openaiApiKey: process.env.OPENAI_API_KEY,
      LIVEKIT_API_KEY: process.env.LIVEKIT_API_KEY,
      LIVEKIT_API_SECRET: process.env.LIVEKIT_API_SECRET,
    },
  },

  css: [
    "~/assets/scss/main.scss",
    // "vue-plyr/dist/vue-plyr.css",
  ],

  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "nuxt-swiper"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  plugins: [
    "~/plugins/ant-design-vue.client.ts",
    { src: '~/plugins/ckeditor.client.js', mode: 'client' },
    { src: "~/plugins/vue-plyr.js", mode: "client" },
  ],

  // router: {
  //   extendRoutes(routes, resolve) {
  //     routes.push({
  //       name: '404',
  //       path: '*',
  //       component: resolve(__dirname, 'layouts/error.vue')
  //     })
  //   }
  // },
  components: true,

  // compatibilityDate: "2024-11-15",
  typescript: {
    typeCheck: true,
    strict: false,
  },

  compatibilityDate: "2025-06-22",
});