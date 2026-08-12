import { _ as __nuxt_component_2 } from './FloatingInput-BXwGQfMP.mjs';
import { _ as _sfc_main$2 } from './Modal-Kmt9lhdy.mjs';
import { reactive, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderAttrs, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './show-QOPf7ELa.mjs';
import { _ as _imports_1 } from './hide-q3I0B8T6.mjs';
import { e as useLoadingStore, g as useAuthStore } from './server.mjs';
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

const _sfc_main$1 = {
  __name: "ChangeEmail",
  __ssrInlineRender: true,
  setup(__props) {
    const useAuth = useAuthStore();
    useLoadingStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_FloatingInput = __nuxt_component_2;
      _push(`<main${ssrRenderAttrs(_attrs)}>`);
      if (unref(useAuth).store.step == 0) {
        _push(`<section class="space-y-8"><h1 class="_c07 text-2xl font-semibold">Change email</h1><p>We&#39;ll send you an email to verify your new email.</p><form class="space-y-5 text-center">`);
        _push(ssrRenderComponent(_component_FloatingInput, {
          id: "email",
          type: "email",
          modelValue: unref(useAuth).login.email,
          "onUpdate:modelValue": ($event) => unref(useAuth).login.email = $event,
          label: "New email",
          required: ""
        }, null, _parent));
        if (((_a = unref(useAuth).store.passwordError) == null ? void 0 : _a.length) && unref(useAuth).store.passwordError[0] == 0) {
          _push(`<p class="_ceb !mt-1 !-mb-3 text-xs">${ssrInterpolate(unref(useAuth).store.passwordError[1])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex relative"><div class="w-full">`);
        _push(ssrRenderComponent(_component_FloatingInput, {
          id: "password",
          type: unref(useAuth).store.passType,
          modelValue: unref(useAuth).login.password,
          "onUpdate:modelValue": ($event) => unref(useAuth).login.password = $event,
          label: "Password",
          required: ""
        }, null, _parent));
        _push(`</div>`);
        if (unref(useAuth).store.passType == "password") {
          _push(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_0)} alt="">`);
        } else {
          _push(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_1)} alt="">`);
        }
        _push(`</div>`);
        if (((_b = unref(useAuth).store.passwordError) == null ? void 0 : _b.length) && unref(useAuth).store.passwordError[0] == 1) {
          _push(`<p class="_ceb !mt-1 !-mb-3 text-xs">${ssrInterpolate(unref(useAuth).store.passwordError[1])}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<p class="text-start text-red-600 font-medium">${ssrInterpolate(unref(useAuth).store.errorMessage)}</p></form></section>`);
      } else if (unref(useAuth).store.step == 1) {
        _push(`<section class="space-y-8"><h1 class="_c07 text-2xl font-semibold">Verify your email</h1><p>We&#39;ll sent you an otp code to verify your new email.</p><form class="space-y-5 text-center">`);
        _push(ssrRenderComponent(_component_FloatingInput, {
          id: "code",
          type: "text",
          modelValue: unref(useAuth).store.code,
          "onUpdate:modelValue": ($event) => unref(useAuth).store.code = $event,
          label: "Code",
          required: ""
        }, null, _parent));
        _push(`<p class="text-start text-red-600 font-medium">${ssrInterpolate(unref(useAuth).store.errorMessage)}</p></form></section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Modal/ChangeEmail.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    reactive({
      changeEmail: false
    });
    useLoadingStore();
    const useAuth = useAuthStore();
    function handleModal(value) {
      if (value == "OK") {
        if (useAuth.store.step == 0) {
          useAuth.sendOtp();
        } else if (useAuth.store.step == 1) {
          useAuth.changeEmail();
        }
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_FloatingInput = __nuxt_component_2;
      const _component_UIModal = _sfc_main$2;
      const _component_ModalChangeEmail = _sfc_main$1;
      _push(`<!--[--><h1 class="text-xl font-semibold mb-6">Account</h1><div class="flex gap-4"><div class="w-full">`);
      _push(ssrRenderComponent(_component_FloatingInput, {
        id: "Email",
        class: "w-full",
        type: "text",
        modelValue: _ctx.password,
        "onUpdate:modelValue": ($event) => _ctx.password = $event,
        label: "Email",
        required: ""
      }, null, _parent));
      _push(`</div><button class="uppercase min-w-fit b_main c_main px-6 py-2 r_8">change email</button></div><h1 class="text-xl font-semibold my-6">Sessions</h1><div class="space-y-3"><button class="uppercase min-w-fit b_main c_main px-6 py-2 r_8 block">Log out</button><button class="uppercase min-w-fit bg_red text-white px-6 py-2 r_8">Delete account</button></div>`);
      if (unref(useAuth).store.changeEmailModal) {
        _push(ssrRenderComponent(_component_UIModal, {
          open: unref(useAuth).store.changeEmailModal,
          "onUpdate:isOpen": (value) => handleModal(value)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_ModalChangeEmail, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_ModalChangeEmail)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-b7RgBy7c.mjs.map
