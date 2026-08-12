import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './card-BinWcXgI.mjs';
import { useSSRContext } from 'vue';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<main${ssrRenderAttrs(_attrs)}><section class="h-[calc(100vh_-140px)] animate-left overflow-hidden overflow-y-auto text-sm _c07 p-5 w-full"><div class="space-y-6 r_8"><h1 class="text-xl font-semibold">${ssrInterpolate(_ctx.$t("Payment methods"))}</h1><p> Cards for group memberships show here. Cards for groups you own are <span class="c_blue pcursor">${ssrInterpolate(_ctx.$t("here"))}</span>. </p><div class="full_flex flex-col gap-4 _c07 h-[180px] r_8"><img${ssrRenderAttr("src", _imports_0)} alt=""> ${ssrInterpolate(_ctx.$t("You don't have any cards"))}</div></div><button class="c_main font-semibold px-6 py-3 r_8 mt-6 uppercase b_main">${ssrInterpolate(_ctx.$t("add card"))}</button></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/payment/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Bi77jNT4.mjs.map
