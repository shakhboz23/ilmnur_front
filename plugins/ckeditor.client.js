// plugins/ckeditor.client.js
import { CkeditorPlugin } from '@ckeditor/ckeditor5-vue';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(CkeditorPlugin, {
    // editor: ClassicEditor, // Specify the CKEditor build you are using
  });
});
