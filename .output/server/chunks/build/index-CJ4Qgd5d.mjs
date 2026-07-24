import { _ as _sfc_main$1 } from './Avatar-ppAiHF0k.mjs';
import { g as useAuthStore, e as useLoadingStore } from './server.mjs';
import { mergeProps, unref, useSSRContext } from 'vue';
import { f as formatDate } from './format-D41WL6ul.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './empty-DGKECbIy.mjs';
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
    useLoadingStore();
    useAuth.getUsers();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_UIAvatar = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default" }, _attrs))}><table class="w-full text-sm text-left rtl:text-right text-body"><thead class="text-sm text-body bg-neutral-secondary-medium border-b border-t border-default-medium"><tr><th scope="col" class="p-4"><div class="flex items-center"><input id="table-checkbox-45" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"><label for="table-checkbox-45" class="sr-only">Table checkbox</label></div></th><th scope="col" class="px-6 py-3 font-medium"> Name </th><th scope="col" class="px-6 py-3 font-medium"> Is active </th><th scope="col" class="px-6 py-3 font-medium"> Role </th><th scope="col" class="px-6 py-3 font-medium"> Registered </th><th scope="col" class="px-6 py-3 font-medium"> Action </th></tr></thead><tbody><!--[-->`);
      ssrRenderList((_a = unref(useAuth).store.users) == null ? void 0 : _a.records, (user) => {
        _push(`<tr class="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium"><td class="w-4 p-4"><div class="flex items-center"><input id="table-checkbox-46" type="checkbox" value="" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"><label for="table-checkbox-46" class="sr-only">Table checkbox</label></div></td><th scope="row" class="flex items-center px-6 py-4 text-heading whitespace-nowrap">`);
        _push(ssrRenderComponent(_component_UIAvatar, {
          class: "min-h-[53px] min-w-[53px] max-h-[53px] max-w-[53px]",
          src: user == null ? void 0 : user.image
        }, null, _parent));
        _push(`<div class="ps-3"><div class="text-base font-semibold">${ssrInterpolate(user.name)} ${ssrInterpolate(user.surname)}</div><div class="font-normal text-body">${ssrInterpolate(user.email)}</div></div></th><td class="px-6 py-4">${ssrInterpolate(user.is_active)}</td><td class="px-6 py-4">${ssrInterpolate(user.current_role)}</td><td class="px-6 py-4">${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(user.createdAt))}</td><td class="px-6 py-4"><a href="#" class="font-medium text-fg-brand hover:underline">Edit user</a></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/users/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CJ4Qgd5d.mjs.map
