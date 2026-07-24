import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { reactive, resolveComponent, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _export_sfc, g as useAuthStore, e as useLoadingStore } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'axios';
import 'ant-design-vue';
import 'dayjs';
import 'vue-i18n';

const _imports_0 = "" + buildAssetsURL("telegram.DqGvv3oM.png");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const useAuth = useAuthStore();
    const isLoading = useLoadingStore();
    isLoading.store.verification = true;
    useAuth.register.role = "student";
    reactive({
      show: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_button = resolveComponent("a-button");
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-screen full_flex py-10 md:px-0 px-4" }, _attrs))} data-v-eaa8fbec><div class="sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]" data-v-eaa8fbec><h1 class="text-center md:text-[28px] mb-7 text-xl font-bold" data-v-eaa8fbec> Ro\u02BByxatdan o\u02BBtish </h1><div class="space-y-2 text-center mx-auto" data-v-eaa8fbec><a href="https://t.me/ilmnuronlinebot" target="_blank" data-v-eaa8fbec>`);
      _push(ssrRenderComponent(_component_a_button, {
        loading: unref(isLoading).isLoadingType("auth"),
        "html-type": "submit",
        class: "full_flex gap-2 px-10 py-3 min-h-fit mt-5 rounded-full c_blue mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="h-10"${ssrRenderAttr("src", _imports_0)} alt="" data-v-eaa8fbec${_scopeId}><b data-v-eaa8fbec${_scopeId}>Bot orqali ro&#39;yhatdan o&#39;tish</b>`);
          } else {
            return [
              createVNode("img", {
                class: "h-10",
                src: _imports_0,
                alt: ""
              }),
              createVNode("b", null, "Bot orqali ro'yhatdan o'tish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div><div class="pt-8 space-y-6 grid" data-v-eaa8fbec>`);
      _push(ssrRenderComponent(_component_router_link, {
        class: "c_main max-w-fit mx-auto border-b border-[#FF852E] text-end font-medium",
        to: "/login"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Oldin ro&#39;yhatdan o&#39;tganmisiz? `);
          } else {
            return [
              createTextVNode(" Oldin ro'yhatdan o'tganmisiz? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eaa8fbec"]]);

export { index as default };
//# sourceMappingURL=index-CHqbAMIz.mjs.map
