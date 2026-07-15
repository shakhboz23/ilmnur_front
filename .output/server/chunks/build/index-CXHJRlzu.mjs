import { _ as __nuxt_component_0 } from './LoadingDiv-BWSiFsIO.mjs';
import { _ as __nuxt_component_1 } from './Card-BK_fjzyg.mjs';
import { _ as __nuxt_component_2 } from './Card-Bw0F6ac4.mjs';
import { _ as __nuxt_component_1$1 } from './client-only-Db1Q_2tj.mjs';
import { unref, useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './a_star-Cwe52rgh.mjs';
import { e as useLoadingStore, t as useWatchedStore, f as useCategoryStore, u as useRouter } from './server.mjs';
import './threedot-VMR5JrW9.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'ant-design-vue';
import 'dayjs';
import 'vue-i18n';

const _sfc_main$1 = {
  __name: "LessonCard",
  __ssrInlineRender: true,
  props: {
    lessoncard: Object
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_ClientOnly = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "r_12 overflow-hidden bg_white pcursor" }, _attrs))}><div class="spect-video w-full object-cover">`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`</div><div class="p-3 space-y-2"><h1 class="font-bold">${ssrInterpolate(__props.lessoncard.title)}</h1><pre class="whitespace-pre-line line-clamp-2">${(_a = __props.lessoncard.content) != null ? _a : ""}</pre><ul class="flex items-center gap-2 text-sm"><li class="full_flex gap-1"><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt=""><span class="c_main">355</span></li><li class="font-semibold"> $${ssrInterpolate(__props.lessoncard.low_price)}</li></ul><div class="flex gap-2"><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<button class="text-sm font-medium py-1 px-2 bg_cf2 r_8"> 3 courses </button>`);
      });
      _push(`<!--]--></div><div class="flex items-center text-sm pt-2 pcursor"><div class="flex items-center -space-x-2 w-[70%] overflow-hidden overflow-x-auto removeScroll"><!--[-->`);
      ssrRenderList(16, (i) => {
        _push(`<img loading="lazy" class="h-7 w-7 min-w-[28px] r_f object-cover" src="https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp" alt="">`);
      });
      _push(`<!--]--></div><button class="c_ca1 pl-2 whitespace-nowrap">225 members</button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Home/LessonCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    const usewatched = useWatchedStore();
    useCategoryStore();
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingDiv = __nuxt_component_0;
      const _component_PageGroupLessonsCard = __nuxt_component_1;
      const _component_PageCard = __nuxt_component_2;
      const _component_PageHomeLessonCard = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(_attrs)}>`);
      if (unref(isLoading).isLoadingType("getByCourse")) {
        _push(`<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(12, (i) => {
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "w-full h-full min-h-[360px] r_12 !overflow-hidden" }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(unref(usewatched).store.watched, (i) => {
          _push(`<div>`);
          if (i.course_id) {
            _push(ssrRenderComponent(_component_PageGroupLessonsCard, {
              lessoncarddata: i.course
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (i.group_id) {
            _push(ssrRenderComponent(_component_PageCard, {
              carddata: i.group
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          if (i.lesson_id) {
            _push(ssrRenderComponent(_component_PageHomeLessonCard, {
              lessoncard: i.lesson
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/history/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CXHJRlzu.mjs.map
