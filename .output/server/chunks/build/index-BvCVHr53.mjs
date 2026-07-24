import { _ as __nuxt_component_2 } from './FloatingInput-BXwGQfMP.mjs';
import { unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { g as useAuthStore } from './server.mjs';
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FloatingInput = __nuxt_component_2;
      _push(`<!--[--><h1 class="text-xl font-semibold mb-6">Change password</h1><form class="space-y-3">`);
      _push(ssrRenderComponent(_component_FloatingInput, {
        id: "Old password",
        class: "w-full",
        type: "text",
        modelValue: unref(useAuth).changepassword.old_password,
        "onUpdate:modelValue": ($event) => unref(useAuth).changepassword.old_password = $event,
        label: "Old password",
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_FloatingInput, {
        id: "New password",
        class: "w-full",
        type: "text",
        modelValue: unref(useAuth).changepassword.new_password,
        "onUpdate:modelValue": ($event) => unref(useAuth).changepassword.new_password = $event,
        label: "New password",
        required: ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_FloatingInput, {
        id: "Confirm new password",
        class: "w-full",
        type: "text",
        modelValue: unref(useAuth).changepassword.confirm_password,
        "onUpdate:modelValue": ($event) => unref(useAuth).changepassword.confirm_password = $event,
        label: "Confirm new password",
        required: ""
      }, null, _parent));
      _push(`<button type="submit" class="uppercase b_main c_main opacity-50 px-6 py-2 r_8">change password</button></form><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/password/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BvCVHr53.mjs.map
