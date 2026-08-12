import { _ as __nuxt_component_0$1 } from './LoadingDiv-CLaVNDei.mjs';
import { useSSRContext, computed, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderClass, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_3 } from './arrow-BRQWUfje.mjs';
import { _ as _export_sfc, e as useLoadingStore, f as useCategoryStore, u as useRouter } from './server.mjs';

const _imports_1 = "data:image/svg+xml,%3csvg%20width='20'%20height='19'%20viewBox='0%200%2020%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M11.6654%2011.0833V15.8333L8.33203%2017.4167V11.0833L3.33203%203.95833V2.375H16.6654V3.95833L11.6654%2011.0833ZM5.33536%203.95833L9.9987%2010.6036L14.662%203.95833H5.33536Z'%20fill='%23FF852E'/%3e%3c/svg%3e";
const _sfc_main = {
  __name: "CategorySlider",
  __ssrInlineRender: true,
  props: {
    category: {
      type: Array,
      default: []
    },
    subcategory_id: Number,
    all: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: true
    },
    queryKey: {
      type: String,
      default: "subcategory_id"
    },
    showImage: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const isLoading = useLoadingStore();
    useCategoryStore();
    const router = useRouter();
    const selectedCategoryIds = computed(() => {
      var _a;
      const value = (_a = router.currentRoute.value.query) == null ? void 0 : _a[props.queryKey];
      if (typeof value !== "string")
        return [];
      try {
        const ids = JSON.parse(value);
        return Array.isArray(ids) ? ids : [];
      } catch {
        return [];
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingDiv = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between gap-4 w-full" }, _attrs))} data-v-1ce02199><div class="stack-tab-container xl:w-full w-[90%] pr-6" data-v-1ce02199>`);
      if (unref(isLoading).isLoadingType("category")) {
        _push(`<div class="flex gap-5" data-v-1ce02199><!--[-->`);
        ssrRenderList(12, (i) => {
          _push(`<button class="r_20 overflow-hidden" data-v-1ce02199>`);
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "w-20 h-full min-h-[34px] r_f" }, null, _parent));
          _push(`</button>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="tab-bar whitespace-nowrap" data-v-1ce02199><button class="left-arrow" data-v-1ce02199><img loading="lazy" class="rotate-90"${ssrRenderAttr("src", _imports_3)} alt="" data-v-1ce02199></button><ul class="tabs" data-v-1ce02199>`);
        if (__props.all) {
          _push(`<button class="${ssrRenderClass([unref(selectedCategoryIds).length == 0 ? "bg_main c_white" : "c_main", "duration-700 r_20 py-2 px-3 text-xs b_main"])}" data-v-1ce02199>All</button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(__props.category, (i) => {
          _push(`<button style="${ssrRenderStyle((__props.subcategory_id ? __props.subcategory_id == i.id : true) ? null : { display: "none" })}" class="${ssrRenderClass([unref(selectedCategoryIds).includes(i.id) ? "bg_main c_white" : "c_main", "duration-700 r_20 py-2 px-3 text-xs b_main inline-flex items-center gap-2"])}" data-v-1ce02199>`);
          if (__props.showImage && i.cover) {
            _push(`<img${ssrRenderAttr("src", i.cover)}${ssrRenderAttr("alt", i.title || i.category)} class="w-5 h-5 rounded-full object-cover ring-1 ring-current/20" data-v-1ce02199>`);
          } else {
            _push(`<!---->`);
          }
          _push(`${ssrInterpolate(i.category || i.title)}</button>`);
        });
        _push(`<!--]--></ul><button class="right-arrow active" data-v-1ce02199><img loading="lazy" class="-rotate-90"${ssrRenderAttr("src", _imports_3)} alt="" data-v-1ce02199></button></div>`);
      }
      _push(`</div><button class="w-9 h-9 r_8 min-w-fit full_flex bg_cf5" data-v-1ce02199><img loading="lazy"${ssrRenderAttr("src", _imports_1)} alt="" data-v-1ce02199></button></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CategorySlider.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1ce02199"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CategorySlider-xG7UGu7Z.mjs.map
