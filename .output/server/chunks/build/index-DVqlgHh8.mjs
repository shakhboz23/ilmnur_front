import { reactive, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderDynamicModel, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _imports_0 } from './show-QOPf7ELa.mjs';
import { _ as _imports_1 } from './hide-q3I0B8T6.mjs';
import { _ as _export_sfc, g as useAuthStore, e as useLoadingStore } from './server.mjs';
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "py-10 md:px-0 px-4" }, _attrs))} data-v-e0c0cc67><div class="sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]" data-v-e0c0cc67><h1 class="text-center md:text-[28px] mb-7 text-xl font-bold" data-v-e0c0cc67> Ro\u02BByxatdan o\u02BBtish </h1><form class="space-y-6 text-sm" data-v-e0c0cc67><div class="space-y-2" data-v-e0c0cc67><label for="name" data-v-e0c0cc67>Ism</label><input${ssrRenderAttr("value", unref(useAuth).register.name)} id="name" type="text" data-v-e0c0cc67></div><div class="space-y-2" data-v-e0c0cc67><label for="surname" data-v-e0c0cc67>Familiya</label><input${ssrRenderAttr("value", unref(useAuth).register.surname)} id="surname" type="text" data-v-e0c0cc67></div><div class="space-y-2" data-v-e0c0cc67><label for="email" data-v-e0c0cc67>Email</label><input${ssrRenderAttr("value", unref(useAuth).register.email)} id="email" type="email" data-v-e0c0cc67><p class="!mt-1 text-xs" data-v-e0c0cc67>Emailingizga tasdiqlash kodi jo&#39;natiladi</p></div><div class="space-y-2" data-v-e0c0cc67><label for="password" data-v-e0c0cc67>Parol</label><div class="flex relative" data-v-e0c0cc67><input${ssrRenderDynamicModel(unref(useAuth).store.passType, unref(useAuth).register.password, null)} id="password"${ssrRenderAttr("type", unref(useAuth).store.passType)} class="pr-10" data-v-e0c0cc67>`);
      if (unref(useAuth).store.passType == "password") {
        _push(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_0)} alt="" data-v-e0c0cc67>`);
      } else {
        _push(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_1)} alt="" data-v-e0c0cc67>`);
      }
      _push(`</div></div><div class="space-y-2 text-center mx-auto" data-v-e0c0cc67>`);
      _push(ssrRenderComponent(_component_a_button, {
        loading: unref(isLoading).isLoadingType("auth"),
        "html-type": "submit",
        class: "bg_main px-10 py-3 min-h-fit mt-5 rounded-full text-white mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ro&#39;yhatdan o&#39;tish`);
          } else {
            return [
              createTextVNode("Ro'yhatdan o'tish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button type="button" id="googleButton" class="!w-full googleButton" data-v-e0c0cc67></button><div class="pt-8 space-y-6 grid" data-v-e0c0cc67>`);
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
      _push(`</div></form></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/register/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e0c0cc67"]]);

export { index as default };
//# sourceMappingURL=index-DVqlgHh8.mjs.map
