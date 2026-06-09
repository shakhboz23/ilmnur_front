import { useSSRContext, resolveComponent, mergeProps, withCtx, createTextVNode, unref, createVNode, renderSlot } from 'vue';
import { ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { e as useLoadingStore } from './server.mjs';

const _sfc_main = {
  __name: "Modal",
  __ssrInlineRender: true,
  props: {
    isOpen: Boolean,
    loadingType: String,
    title: String,
    wrapClassName: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const isLoading = useLoadingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_modal = resolveComponent("a-modal");
      const _component_a_button = resolveComponent("a-button");
      _push(ssrRenderComponent(_component_a_modal, mergeProps({
        class: "modal",
        open: __props.isOpen,
        "onUpdate:open": (value) => _ctx.$emit("update:isOpen", value),
        title: __props.title,
        "wrap-class-name": __props.wrapClassName,
        width: __props.wrapClassName == "full-modal" ? "100%" : 400,
        centered: ""
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_button, {
              key: "back",
              onClick: () => _ctx.$emit("update:isOpen", false)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Bekor qilish`);
                } else {
                  return [
                    createTextVNode("Bekor qilish")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_button, {
              key: "submit",
              type: "primary",
              loading: unref(isLoading).isLoadingType(__props.loadingType),
              onClick: () => _ctx.$emit("update:isOpen", "OK")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Davom etish`);
                } else {
                  return [
                    createTextVNode("Davom etish")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_button, {
                key: "back",
                onClick: () => _ctx.$emit("update:isOpen", false)
              }, {
                default: withCtx(() => [
                  createTextVNode("Bekor qilish")
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_a_button, {
                key: "submit",
                type: "primary",
                loading: unref(isLoading).isLoadingType(__props.loadingType),
                onClick: () => _ctx.$emit("update:isOpen", "OK")
              }, {
                default: withCtx(() => [
                  createTextVNode("Davom etish")
                ]),
                _: 1
              }, 8, ["loading", "onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/Modal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Modal-CNknc8lN.mjs.map
