// plugins/vue-plyr.js
// import Vue from "vue";
import VuePlyr from "vue-plyr/dist/vue-plyr.ssr";
import "vue-plyr/dist/vue-plyr.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VuePlyr, {
    plyr: {
      // settings: ['quality', 'speed'], // Mobilda ishlashni yengillashtirish
      fullscreen: { enabled: true }, // Fullscreen rejimini yoqish
      autoplay: false, // Avto-ishga tushirishni o'chirish
      previewThumbnails: {
        enabled: true, // Preview thumbnail'larni yoqish
        src: 'thumbnails/thumbnails.vtt', // VTT fayl manzili
      },
      // controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    },
  })
})
