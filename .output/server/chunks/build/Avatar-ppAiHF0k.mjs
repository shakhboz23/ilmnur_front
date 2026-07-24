import { useSSRContext, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
import { e as emptyProfile } from './empty-DGKECbIy.mjs';

const _sfc_main = {
  __name: "Avatar",
  __ssrInlineRender: true,
  props: {
    src: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-[72px] h-[72px] bg-[#F9F9F9] rounded-full full_flex overflow-hidden" }, _attrs))}>`);
      if (__props.src) {
        _push(`<img loading="lazy" class="w-full h-full object-cover"${ssrRenderAttr("src", __props.src)} alt="">`);
      } else {
        _push(`<img loading="lazy" class="w-full h-full object-cover"${ssrRenderAttr("src", emptyProfile)} alt="">`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Avatar.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Avatar-ppAiHF0k.mjs.map
