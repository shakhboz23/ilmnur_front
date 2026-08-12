import { ref, resolveComponent, mergeProps, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './a_star-Cwe52rgh.mjs';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const state = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_switch = resolveComponent("a-switch");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><h1 class="text-xl font-semibold mb-6">Notifications</h1><!--[-->`);
      ssrRenderList(3, (i) => {
        _push(`<label for="New follower email notification" class="flex items-center justify-between pcursor"><p>New follower notification</p>`);
        _push(ssrRenderComponent(_component_a_switch, {
          id: "New follower email notification",
          checked: unref(state),
          "onUpdate:checked": ($event) => isRef(state) ? state.value = $event : null,
          loading: ""
        }, null, _parent));
        _push(`</label>`);
      });
      _push(`<!--]--><div class="r_12 pcursor space-y-4"><!--[-->`);
      ssrRenderList(10, (i) => {
        _push(`<div class="flex items-center justify-between gap-4"><div class="flex items-center gap-4"><img loading="lazy" class="w-10 h-10 object-cover r_8" src="https://assets.skool.com/f/303b2cb9c0eb434bb025e098e9d13eaf/854dcca8e1364bb09872ed888e4a396ea5a34c54470f464b9ad4bfe09ec5206d" alt=""><div class="-space-y-1"><h1 class="font-bold whitespace-pre-line line-clamp-2">Title</h1><ul class="full_flex gap-1"><li> Private \u2022 1 member </li> \u2022 <li class="full_flex gap-1"><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt=""><span class="c_main">355</span></li> \u2022 <li class="font-semibold"> $45 </li></ul></div></div><button class="bg_main font-semibold py-2 px-6 r_8 h-10">Change</button></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/notifications/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CezDnNCL.mjs.map
