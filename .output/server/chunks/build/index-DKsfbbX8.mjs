import { defineComponent, h, resolveComponent, resolveDirective, mergeProps, withCtx, createVNode, unref, useSSRContext, ref, computed, toDisplayString, withModifiers, withDirectives, vModelText, openBlock, createBlock, createTextVNode } from 'vue';
import { u as useRouter, g as useAuthStore, e as useLoadingStore, b as useNuxtApp } from './server.mjs';
import { _ as __nuxt_component_2 } from './FloatingInput-BXwGQfMP.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrGetDirectiveProps } from 'vue/server-renderer';
import { _ as _imports_1 } from './virtual_public-DoOXzabG.mjs';
import { _ as _imports_0 } from './show-QOPf7ELa.mjs';
import { _ as _imports_1$1 } from './hide-q3I0B8T6.mjs';
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

function defaultEstimatedProgress(duration, elapsed) {
  const completionPercentage = elapsed / duration * 100;
  return 2 / Math.PI * 100 * Math.atan(completionPercentage / 50);
}
function createLoadingIndicator(opts = {}) {
  const { duration = 2e3, throttle = 200, hideDelay = 500, resetDelay = 400 } = opts;
  opts.estimatedProgress || defaultEstimatedProgress;
  const nuxtApp = useNuxtApp();
  const progress = ref(0);
  const isLoading = ref(false);
  const error = ref(false);
  const start = () => {
    error.value = false;
    set(0);
  };
  function set(at = 0) {
    if (nuxtApp.isHydrating) {
      return;
    }
    if (at >= 100) {
      return finish();
    }
    progress.value = at < 0 ? 0 : at;
    if (throttle && false) {
      setTimeout(() => {
        isLoading.value = true;
      }, throttle);
    } else {
      isLoading.value = true;
    }
  }
  function finish(opts2 = {}) {
    progress.value = 100;
    if (opts2.error) {
      error.value = true;
    }
    if (opts2.force) {
      progress.value = 0;
      isLoading.value = false;
    }
  }
  function clear() {
  }
  let _cleanup = () => {
  };
  return {
    _cleanup,
    progress: computed(() => progress.value),
    isLoading: computed(() => isLoading.value),
    error: computed(() => error.value),
    start,
    set,
    finish,
    clear
  };
}
function useLoadingIndicator(opts = {}) {
  const nuxtApp = useNuxtApp();
  const indicator = nuxtApp._loadingIndicator = nuxtApp._loadingIndicator || createLoadingIndicator(opts);
  return indicator;
}
const __nuxt_component_0 = defineComponent({
  name: "NuxtLoadingIndicator",
  props: {
    throttle: {
      type: Number,
      default: 200
    },
    duration: {
      type: Number,
      default: 2e3
    },
    height: {
      type: Number,
      default: 3
    },
    color: {
      type: [String, Boolean],
      default: "repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)"
    },
    errorColor: {
      type: String,
      default: "repeating-linear-gradient(to right,#f87171 0%,#ef4444 100%)"
    },
    estimatedProgress: {
      type: Function,
      required: false
    }
  },
  setup(props, { slots, expose }) {
    const { progress, isLoading, error, start, finish, clear } = useLoadingIndicator({
      duration: props.duration,
      throttle: props.throttle,
      estimatedProgress: props.estimatedProgress
    });
    expose({
      progress,
      isLoading,
      error,
      start,
      finish,
      clear
    });
    return () => h("div", {
      class: "nuxt-loading-indicator",
      style: {
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        pointerEvents: "none",
        width: "auto",
        height: `${props.height}px`,
        opacity: isLoading.value ? 1 : 0,
        background: error.value ? props.errorColor : props.color || void 0,
        backgroundSize: `${100 / progress.value * 100}% auto`,
        transform: `scaleX(${progress.value}%)`,
        transformOrigin: "left",
        transition: "transform 0.1s, height 0.4s, opacity 0.4s",
        zIndex: 999999
      }
    }, slots);
  }
});
const _sfc_main$1 = {
  __name: "Verification",
  __ssrInlineRender: true,
  setup(__props) {
    const useAuth = useAuthStore();
    const isLoading = useLoadingStore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_el_dialog = resolveComponent("el-dialog");
      const _directive_loading = resolveDirective("loading");
      _push(ssrRenderComponent(_component_el_dialog, mergeProps({
        modelValue: unref(useAuth).modal.verification,
        "onUpdate:modelValue": ($event) => unref(useAuth).modal.verification = $event,
        width: "400",
        "align-center": "",
        class: "bg-opacity-50 !rounded-lg"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section class="space-y-8 bg-white rounded-lg p-6 text-center _c07"${_scopeId}><h1 class="_c07 text-2xl font-semibold"${_scopeId}>We sent you a code</h1><p class="!mt-4"${_scopeId}> Enter it below to verify ${ssrInterpolate(unref(useAuth).verification.email)}</p><form class="space-y-5"${_scopeId}><input${ssrRenderAttr("value", unref(useAuth).verification.verify_code)} autofocus type="number" placeholder="Verification code" required${_scopeId}><button${ssrRenderAttrs(mergeProps({
              type: unref(isLoading).isLoadingType("activate") ? "button" : "submit",
              class: [
                "font-semibold w-full rounded-[4px]",
                unref(useAuth).verification.verify_code ? "b_cbc _c07" : "b_ce0 _ca1"
              ]
            }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).isLoadingType("activate"))))}${_scopeId}> Verify </button><p class="text-start text-red-600 font-medium"${_scopeId}>${ssrInterpolate(unref(useAuth).store.errorMessage)}</p></form><div class="space-y-5"${_scopeId}><p class="text-xs"${_scopeId}> Didn&#39;t get the email? <button type="button" class="_c2a font-medium hover:underline"${_scopeId}> Resend it </button> or <button type="button" class="_c2a font-medium hover:underline"${_scopeId}> Use a different email </button></p></div></section>`);
          } else {
            return [
              createVNode("section", { class: "space-y-8 bg-white rounded-lg p-6 text-center _c07" }, [
                createVNode("h1", { class: "_c07 text-2xl font-semibold" }, "We sent you a code"),
                createVNode("p", { class: "!mt-4" }, " Enter it below to verify " + toDisplayString(unref(useAuth).verification.email), 1),
                createVNode("form", {
                  onSubmit: withModifiers(unref(useAuth).authVerify, ["prevent"]),
                  class: "space-y-5"
                }, [
                  withDirectives(createVNode("input", {
                    "onUpdate:modelValue": ($event) => unref(useAuth).verification.verify_code = $event,
                    autofocus: "",
                    type: "number",
                    placeholder: "Verification code",
                    required: ""
                  }, null, 8, ["onUpdate:modelValue"]), [
                    [vModelText, unref(useAuth).verification.verify_code]
                  ]),
                  withDirectives((openBlock(), createBlock("button", {
                    type: unref(isLoading).isLoadingType("activate") ? "button" : "submit",
                    class: [
                      "font-semibold w-full rounded-[4px]",
                      unref(useAuth).verification.verify_code ? "b_cbc _c07" : "b_ce0 _ca1"
                    ]
                  }, [
                    createTextVNode(" Verify ")
                  ], 10, ["type"])), [
                    [_directive_loading, unref(isLoading).isLoadingType("activate")]
                  ]),
                  createVNode("p", { class: "text-start text-red-600 font-medium" }, toDisplayString(unref(useAuth).store.errorMessage), 1)
                ], 40, ["onSubmit"]),
                createVNode("div", { class: "space-y-5" }, [
                  createVNode("p", { class: "text-xs" }, [
                    createTextVNode(" Didn't get the email? "),
                    createVNode("button", {
                      type: "button",
                      onClick: unref(useAuth).authResend,
                      class: "_c2a font-medium hover:underline"
                    }, " Resend it ", 8, ["onClick"]),
                    createTextVNode(" or "),
                    createVNode("button", {
                      type: "button",
                      onClick: () => {
                        unref(useAuth).modal.verification = false;
                        unref(useAuth).modal.register = true;
                      },
                      class: "_c2a font-medium hover:underline"
                    }, " Use a different email ", 8, ["onClick"])
                  ])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Verification.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const useAuth = useAuthStore();
    const isLoading = useLoadingStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLoadingIndicator = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      const _component_FloatingInput = __nuxt_component_2;
      const _component_Verification = _sfc_main$1;
      const _directive_loading = resolveDirective("loading");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center overflow-hidden overflow-y-auto min-h-screen max-h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_NuxtLoadingIndicator, {
        height: "4",
        color: "#2a85ff"
      }, null, _parent));
      _push(`<section class="space-y-8 bg-white rounded-lg p-6 text-center w-full max-w-[350px]">`);
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
      _push(`<h1 class="_c07 text-2xl font-semibold">Create a new password</h1><form class="space-y-5 text-center"><div class="flex relative"><div class="w-full">`);
      _push(ssrRenderComponent(_component_FloatingInput, {
        id: "new_password",
        type: unref(useAuth).store.passType,
        modelValue: unref(useAuth).changepassword.new_password,
        "onUpdate:modelValue": ($event) => unref(useAuth).changepassword.new_password = $event,
        label: "New password",
        required: ""
      }, null, _parent));
      _push(`</div>`);
      if (unref(useAuth).store.passType == "password") {
        _push(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_0)} alt="">`);
      } else {
        _push(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_1$1)} alt="">`);
      }
      _push(`</div>`);
      if (((_a = unref(useAuth).store.passwordError) == null ? void 0 : _a.length) && unref(useAuth).store.passwordError[0] == 0) {
        _push(`<p class="_ceb !mt-1 !-mb-3 text-xs">${ssrInterpolate(unref(useAuth).store.passwordError[1])}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex relative"><div class="w-full">`);
      _push(ssrRenderComponent(_component_FloatingInput, {
        id: "confirm_password",
        type: unref(useAuth).store.passType,
        modelValue: unref(useAuth).changepassword.confirm_password,
        "onUpdate:modelValue": ($event) => unref(useAuth).changepassword.confirm_password = $event,
        label: "Repeat new password",
        required: ""
      }, null, _parent));
      _push(`</div>`);
      if (unref(useAuth).store.passType == "password") {
        _push(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_0)} alt="">`);
      } else {
        _push(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_1$1)} alt="">`);
      }
      _push(`</div>`);
      if (((_b = unref(useAuth).store.passwordError) == null ? void 0 : _b.length) && unref(useAuth).store.passwordError[0] == 1) {
        _push(`<p class="_ceb !mt-1 !-mb-3 text-xs">${ssrInterpolate(unref(useAuth).store.passwordError[1])}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<p class="text-start text-red-600 font-medium">${ssrInterpolate(unref(useAuth).store.errorMessage)}</p><button${ssrRenderAttrs(mergeProps({
        type: "submit",
        class: ["rounded-full px-5 py-2 black_24", unref(useAuth).store.is_matched ? "b_main c_main" : "b_ccc c_ccc"]
      }, ssrGetDirectiveProps(_ctx, _directive_loading, unref(isLoading).isLoadingType("changePass"))))}> Change password </button></form></section>`);
      if (unref(useAuth).modal.verification) {
        _push(ssrRenderComponent(_component_Verification, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/change-password/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DKsfbbX8.mjs.map
