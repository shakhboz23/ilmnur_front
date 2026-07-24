import { _ as __nuxt_component_0 } from './CategorySlider-xG7UGu7Z.mjs';
import { _ as __nuxt_component_0$1 } from './LoadingDiv-CLaVNDei.mjs';
import { useSSRContext, resolveComponent, mergeProps, unref } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_0 } from './a_star-Cwe52rgh.mjs';
import { _ as _export_sfc, j as useCoursesStore, e as useLoadingStore, h as useLessonsStore, f as useCategoryStore, l as useSubscriptionStore, u as useRouter } from './server.mjs';
import { _ as _sfc_main$3 } from './DeleteModal-CRgYI_wN.mjs';
import './arrow-BRQWUfje.mjs';
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

const _sfc_main$2 = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    subscriptions: Object
  },
  setup(__props) {
    useCoursesStore();
    useLoadingStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_a_progress = resolveComponent("a-progress");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "r_12 overflow-hidden bg_white pcursor relative" }, _attrs))} data-v-e245c6c4><div class="flex items-center justify-between gap-4" data-v-e245c6c4><div class="flex items-center gap-4" data-v-e245c6c4><img loading="lazy" class="w-10 h-10 object-cover r_8"${ssrRenderAttr("src", (_b = (_a = __props.subscriptions) == null ? void 0 : _a.course) == null ? void 0 : _b.cover)} alt="" data-v-e245c6c4><h1 class="font-bold" data-v-e245c6c4>${ssrInterpolate(__props.subscriptions.title)}</h1><div class="space-y-1" data-v-e245c6c4><pre class="whitespace-pre-line line-clamp-2" data-v-e245c6c4>${ssrInterpolate((_c = __props.subscriptions.course) == null ? void 0 : _c.description)}</pre><ul class="full_flex gap-1" data-v-e245c6c4><li data-v-e245c6c4> Private \u2022 1 member </li> \u2022 <li class="full_flex gap-1" data-v-e245c6c4><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt="" data-v-e245c6c4><span class="c_main" data-v-e245c6c4>355</span></li> \u2022 <li class="font-semibold" data-v-e245c6c4> $${ssrInterpolate((_d = __props.subscriptions.course) == null ? void 0 : _d.price)}</li></ul></div></div><button class="bg_main font-semibold py-2 px-6 r_8 h-10" data-v-e245c6c4>Ko&#39;rish</button></div><div class="px-3 space-y-1 w-full" data-v-e245c6c4>`);
      _push(ssrRenderComponent(_component_a_progress, {
        class: "w-full",
        "stroke-color": "#FF852E",
        percent: 45,
        size: 3
      }, null, _parent));
      _push(`<p class="text-sm !-mt-2 pb-3" data-v-e245c6c4>3/10 completed</p></div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Subscriptions/Card.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e245c6c4"]]);
const _sfc_main$1 = {
  __name: "Main",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    useLessonsStore();
    const useCategory = useCategoryStore();
    const useSubscription = useSubscriptionStore();
    useRouter();
    function handleModal(value) {
      if (value == "OK") {
        if (isLoading.modal.delete) {
          useSubscription.deleteCourse();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
          useSubscription.createCourse();
        } else {
          useSubscription.updateCourse();
        }
      } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useSubscription.clearData();
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategorySlider = __nuxt_component_0;
      const _component_LoadingDiv = __nuxt_component_0$1;
      const _component_PageSubscriptionsCard = __nuxt_component_2;
      const _component_UIDeleteModal = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_CategorySlider, {
        category: unref(useCategory).store.category,
        class: "mb-5"
      }, null, _parent));
      _push(`<section>`);
      if (unref(isLoading).isLoadingType("getByCourse")) {
        _push(`<div class="grid gap-5"><!--[-->`);
        ssrRenderList(12, (i) => {
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "w-full h-full min-h-[130px] r_12 !overflow-hidden" }, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid gap-5"><!--[-->`);
        ssrRenderList(unref(useSubscription).store.subscriptions, (i) => {
          _push(ssrRenderComponent(_component_PageSubscriptionsCard, { subscriptions: i }, null, _parent));
        });
        _push(`<!--]--></div>`);
      }
      _push(`</section>`);
      _push(ssrRenderComponent(_component_UIDeleteModal, {
        isOpen: unref(isLoading).modal.delete,
        loadingType: "deletegroup",
        "onUpdate:isOpen": (value) => handleModal(value)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Subscriptions/Main.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageSubscriptionsMain = _sfc_main$1;
  _push(ssrRenderComponent(_component_PageSubscriptionsMain, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/subscriptions/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-CM3OSpow.mjs.map
