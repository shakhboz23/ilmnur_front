import { resolveComponent, withCtx, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  const _component_el_switch = resolveComponent("el-switch");
  const _component_a_select = resolveComponent("a-select");
  const _component_a_option = resolveComponent("a-option");
  _push(`<main${ssrRenderAttrs(_attrs)}><section class="text-sm _c07 p-5 w-full space-y-6"><div class="space-y-6 p-3 b_ccc r_8"><div class="flex items-center justify-between"><h1 class="text-xl font-semibold">Notifications</h1>`);
  _push(ssrRenderComponent(_component_el_switch, null, null, _parent));
  _push(`</div><p>If you&#39;re offline and somebody messages you, we&#39;ll let you know via email. We won&#39;t email you if you&#39;re online.</p></div><div class="space-y-6 p-3 b_ccc r_8"><div class="flex items-center justify-between"><h1 class="text-xl font-semibold">Email notifications</h1>`);
  _push(ssrRenderComponent(_component_el_switch, null, null, _parent));
  _push(`</div><p>Notify me with sound and blinking tab header when somebody messages me.</p></div><div class="space-y-6 p-3 b_ccc r_8"><h1 class="text-xl font-semibold">Who can message me?</h1><p>Notify me with sound and blinking tab header when somebody messages me.</p><div class="space-y-10 mt-6"><!--[-->`);
  ssrRenderList(3, (i) => {
    _push(`<div class="flex items-center justify-between h-10"><div class="full_flex gap-4">`);
    {
      _push(`<div class="w-10 h-10 bg_c75 r_8 full_flex"><p class="font-semibold text-white">DM</p></div>`);
    }
    _push(`<h1 class="font-semibold">Digital Marketer</h1></div>`);
    _push(ssrRenderComponent(_component_a_select, {
      id: "follow_email",
      class: "block max-w-20 mt-2",
      modelValue: _ctx.useSettings,
      "onUpdate:modelValue": ($event) => _ctx.useSettings = $event,
      placeholder: "No"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_a_option, {
            key: "Yes",
            label: "Yes",
            value: "Yes"
          }, null, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_a_option, {
            key: "No",
            label: "No",
            value: "No"
          }, null, _parent2, _scopeId));
        } else {
          return [
            (openBlock(), createBlock(_component_a_option, {
              key: "Yes",
              label: "Yes",
              value: "Yes"
            })),
            (openBlock(), createBlock(_component_a_option, {
              key: "No",
              label: "No",
              value: "No"
            }))
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</div>`);
  });
  _push(`<!--]--></div></div><div class="space-y-6 p-3 b_ccc r_8"><h1 class="text-xl font-semibold">Blocked users</h1><p>You have no blocked users.</p></div></section></main>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/chat/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-DmryppTx.mjs.map
