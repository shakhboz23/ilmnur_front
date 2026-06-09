import { defineComponent, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { g as useAuthStore, e as useLoadingStore } from './server.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useAuthStore();
    const isLoading = useLoadingStore();
    console.log(isLoading);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_button = resolveComponent("a-button");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "py-10 md:px-0 px-4 max-h-screen min-h-[calc(100vh_-_100px)] overflow-y-auto" }, _attrs))}><div class="flex flex-col items-center justify-center sm:p-[50px] p-5 pb-8"><section class="mb-10"><h1 class="text-center md:text-[40px] text-xl font-bold"> Assalomu alaykum! </h1><p class="_c42 text-center md:text-lg text-sm font-medium my-5"> IlmNur platformasiga xush kelibsiz </p><p class="_c07 text-center md:text-lg text-sm font-medium"> Elektron manzilingizga tasdiqlash kodi yuborildi. Agar xabar pochtangizda ko\u2019rinmasa, spam papkangizni tekshiring. </p></section><a target="_blank" href="https://mail.google.com/mail/u/0/#inbox">`);
      _push(ssrRenderComponent(_component_a_button, {
        loading: unref(isLoading).isLoadingType("auth"),
        class: "login_btn r_50 px-[54px] py-3 min-h-fit mx-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Emailni tasdiqlash`);
          } else {
            return [
              createTextVNode("Emailni tasdiqlash")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</a></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/verify-email/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-B-frqz0r.mjs.map
