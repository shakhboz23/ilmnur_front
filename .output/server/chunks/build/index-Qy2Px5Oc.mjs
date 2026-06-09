import { resolveComponent, resolveDirective, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_1 } from './virtual_public-k04r-7F-.mjs';
import { g as useAuthStore, e as useLoadingStore, u as useRouter } from './server.mjs';
import '../routes/renderer.mjs';
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

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const useAuth = useAuthStore();
    const isLoading = useLoadingStore();
    useAuth.modal.forgot_modal = true;
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = resolveComponent("router-link");
      const _directive_loading = resolveDirective("loading");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "full_flex overflow-y-auto min-h-screen" }, _attrs))}>`);
      if (!unref(useAuth).modal.sended) {
        _push(`<section align-center class="bg-opacity-50 !rounded-lg max-w-[400px]"><section class="space-y-8 bg-white rounded-lg p-6 text-center _c07">`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "flex justify-center",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<h1 class="_c07 text-2xl font-semibold"> Forgot Password </h1><p class="!mt-4"> Enter your email address and we&#39;ll send you a link to reset your password. </p><form class="space-y-5"><input${ssrRenderAttr("value", unref(useAuth).login.email)} autofocus type="email"${ssrRenderAttr("placeholder", _ctx.$t("Email"))} required>`);
        if (unref(useAuth).store.errorMessage) {
          _push(`<p class="text-start text-red-600 font-medium">${ssrInterpolate(unref(useAuth).store.errorMessage)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button${ssrRenderAttrs(mergeProps({
          type: unref(isLoading).isLoadingType("activate") ? "button" : "submit",
          class: ["rounded-full px-5 py-2 black_24", unref(useAuth).login.email ? "b_main c_main" : "b_ccc c_ccc"]
        }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).isLoadingType("resend"))))}>${ssrInterpolate(_ctx.$t("Email me"))}</button></form></section></section>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(useAuth).modal.sended) {
        _push(`<section width="400" align-center class="bg-opacity-50 !rounded-lg max-w-[400px]">`);
        _push(ssrRenderComponent(_component_router_link, {
          class: "flex justify-center",
          to: "/"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img${ssrRenderAttr("src", _imports_1)} alt=""${_scopeId}>`);
            } else {
              return [
                createVNode("img", {
                  src: _imports_1,
                  alt: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<section class="space-y-8 bg-white rounded-lg p-6 text-center _c07"><h1 class="_c07 text-2xl font-semibold">${ssrInterpolate(_ctx.$t("login.checkemail"))}</h1><p class="!mt-4">${ssrInterpolate(_ctx.$t("login.wesentreset"))}</p><button${ssrRenderAttrs(mergeProps({ class: "b_cbc _c07 font-semibold w-full rounded-[4px]" }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).isLoadingType("activate"))))}>${ssrInterpolate(_ctx.$t("login.backtologin"))}</button></section></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/forgot-password/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Qy2Px5Oc.mjs.map
