import { _ as __nuxt_component_0 } from './LoadingDiv-BWSiFsIO.mjs';
import { _ as __nuxt_component_2 } from './Card-Bw0F6ac4.mjs';
import { useSSRContext, reactive, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { e as useLoadingStore, o as useGroupsStore } from './server.mjs';

const _sfc_main = {
  __name: "InfiniteScroll",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    const useGroups = useGroupsStore();
    reactive({
      courses: []
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_LoadingDiv = __nuxt_component_0;
      const _component_PageCard = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" }, _attrs))}>`);
      if (unref(isLoading).isLoadingType("groups")) {
        _push(`<!--[-->`);
        ssrRenderList(12, (i) => {
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "w-full h-full min-h-[360px] r_12 !overflow-hidden" }, null, _parent));
        });
        _push(`<!--]-->`);
      } else if ((_b = (_a = unref(useGroups).store.groups) == null ? void 0 : _a.groups) == null ? void 0 : _b.length) {
        _push(`<!--[-->`);
        ssrRenderList((_c = unref(useGroups).store.groups) == null ? void 0 : _c.groups, (i) => {
          _push(ssrRenderComponent(_component_PageCard, {
            carddata: i,
            editable: false
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<section class="text-center py-40 col-span-4"> Ma&#39;lumotlar yo&#39;q </section>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/InfiniteScroll.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=InfiniteScroll-mRHGMOo5.mjs.map
