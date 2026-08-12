import { useSSRContext, resolveComponent, mergeProps, withCtx, unref, createTextVNode, createVNode } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { e as useLoadingStore } from './server.mjs';

const _sfc_main = {
  __name: "DeleteModal",
  __ssrInlineRender: true,
  props: {
    isOpen: Boolean,
    loadingType: String
  },
  setup(__props) {
    const isLoading = useLoadingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_modal = resolveComponent("a-modal");
      const _component_a_button = resolveComponent("a-button");
      _push(ssrRenderComponent(_component_a_modal, mergeProps({
        class: "modal max-w-[400px]",
        open: __props.isOpen,
        "onUpdate:open": (value) => _ctx.$emit("update:isOpen", value),
        title: "Delete",
        centered: ""
      }, _attrs), {
        footer: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_button, {
              class: "w-full bg_main h-12",
              key: "submit",
              type: "primary",
              loading: unref(isLoading).isLoadingType(__props.loadingType),
              onClick: () => _ctx.$emit("update:isOpen", "OK")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Confirm`);
                } else {
                  return [
                    createTextVNode("Confirm")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_button, {
              class: "w-full border-none h-12 mt-2 !ml-0",
              key: "back",
              onClick: () => _ctx.$emit("update:isOpen", false)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Discard`);
                } else {
                  return [
                    createTextVNode("Discard")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_button, {
                class: "w-full bg_main h-12",
                key: "submit",
                type: "primary",
                loading: unref(isLoading).isLoadingType(__props.loadingType),
                onClick: () => _ctx.$emit("update:isOpen", "OK")
              }, {
                default: withCtx(() => [
                  createTextVNode("Confirm")
                ]),
                _: 1
              }, 8, ["loading", "onClick"]),
              createVNode(_component_a_button, {
                class: "w-full border-none h-12 mt-2 !ml-0",
                key: "back",
                onClick: () => _ctx.$emit("update:isOpen", false)
              }, {
                default: withCtx(() => [
                  createTextVNode("Discard")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div${_scopeId}><h1 class="my-4 text-[16px]"${_scopeId}>Are you sure you want to delete this?</h1></div>`);
          } else {
            return [
              createVNode("div", null, [
                createVNode("h1", { class: "my-4 text-[16px]" }, "Are you sure you want to delete this?")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/UI/DeleteModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DeleteModal-CRgYI_wN.mjs.map
