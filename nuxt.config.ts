// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "uz",
      },
      title: "Academic Success Hub | ASH Academy — onlayn ta'lim platformasi",
      titleTemplate: "%s",
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
          content: "#16224B",
        },
        {
          name: "description",
          content:
            "Academic Success Hub (ASH Academy) — ta'lim olish uchun zamonaviy platforma: kurslar va o'quv materiallarini o'rganing, testlar orqali bilimingizni sinang, natijalaringizni kuzating.",
        },
        {
          name: "keywords",
          content:
            "ASH Academy, Academic Success Hub, ashacademy.uz, onlayn ta'lim, onlayn kurslar, testlar, bilim sinovi, o'quv platformasi, masofaviy ta'lim, kurslar Uzbekistan",
        },
        {
          name: "author",
          content: "ASH Academy",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        // Open Graph (Telegram, Facebook, LinkedIn va h.k. shu orqali havola oldindan ko'rinishini chiqaradi)
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:site_name",
          content: "ASH Academy",
        },
        {
          property: "og:locale",
          content: "uz_UZ",
        },
        {
          property: "og:url",
          content: "https://ashacademy.uz",
        },
        {
          property: "og:title",
          content: "Academic Success Hub | ASH Academy",
        },
        {
          property: "og:description",
          content:
            "Ta'lim va bilim olish uchun zamonaviy yordamchi platforma: kurslar, darslar, testlar va natijalarni kuzatish bir joyda.",
        },
        {
          property: "og:image",
          content: "https://ashacademy.uz/logo.png",
        },
        {
          property: "og:image:secure_url",
          content: "https://ashacademy.uz/logo.png",
        },
        {
          property: "og:image:type",
          content: "image/png",
        },
        {
          property: "og:image:width",
          content: "1536",
        },
        {
          property: "og:image:height",
          content: "1024",
        },
        {
          property: "og:image:alt",
          content: "ASH Academy — Academic Success Hub logotipi",
        },
        // Twitter Card
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "Academic Success Hub | ASH Academy",
        },
        {
          name: "twitter:description",
          content:
            "Ta'lim va bilim olish uchun zamonaviy yordamchi platforma: kurslar, darslar, testlar va natijalarni kuzatish bir joyda.",
        },
        {
          name: "twitter:image",
          content: "https://ashacademy.uz/logo.png",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "/logo.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/logo.png",
        },
        {
          rel: "canonical",
          href: "https://ashacademy.uz",
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
        {
          src: 'https://telegram.org/js/telegram-web-app.js'
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