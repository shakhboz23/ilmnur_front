import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, createVNode, withModifiers, withDirectives, vModelText, vModelDynamic, openBlock, createBlock, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderDynamicModel, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_0 } from './show-QOPf7ELa.mjs';
import { _ as _imports_1 } from './hide-q3I0B8T6.mjs';
import { _ as _export_sfc, u as useRouter, g as useAuthStore, e as useLoadingStore } from './server.mjs';
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
  __name: "LoadingComponent",
  __ssrInlineRender: true,
  props: {
    isloading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {
        class: __props.isloading ? "pointer-events-none" : ""
      }, null, _push, _parent);
      if (__props.isloading) {
        _push(`<div class="absolute top-0 bottom-0 right-0 left-0 w-full full_flex" role="status"><svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path></svg><span class="sr-only">Loading...</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LoadingComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const useAuth = useAuthStore();
    const isLoading = useLoadingStore();
    function handleSubmit() {
      useAuth.authLogin();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_LoadingComponent = _sfc_main$1;
      const _component_router_link = resolveComponent("router-link");
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "h-screen full_flex" }, _attrs))} data-v-17df89e5><div class="my-auto py-10 md:px-0 px-4" data-v-17df89e5>`);
      _push(ssrRenderComponent(_component_LoadingComponent, {
        isloading: unref(isLoading).isLoadingType("auth")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]" data-v-17df89e5${_scopeId}><section data-v-17df89e5${_scopeId}><h1 class="text-center md:text-[28px] text-xl font-bold" data-v-17df89e5${_scopeId}> Tizimga kirish </h1><p class="_c42 text-center md:text-lg text-sm font-medium mt-4 mb-7" data-v-17df89e5${_scopeId}> Sizni qayta ko\u2018rganimizdan xursandmiz! </p></section><form class="space-y-6 text-sm" data-v-17df89e5${_scopeId}><div class="space-y-6" data-v-17df89e5${_scopeId}><div class="space-y-2" data-v-17df89e5${_scopeId}><label for="login" data-v-17df89e5${_scopeId}>Telefon raqam</label><div class="flex items-center relative" data-v-17df89e5${_scopeId}><input${ssrRenderAttr("value", unref(useAuth).login.phone)} type="tel" data-v-17df89e5${_scopeId}></div></div><div class="space-y-2" data-v-17df89e5${_scopeId}><label for="password" data-v-17df89e5${_scopeId}>Parol</label><div class="flex relative" data-v-17df89e5${_scopeId}><input${ssrRenderDynamicModel(unref(useAuth).store.passType, unref(useAuth).login.password, null)}${ssrRenderAttr("type", unref(useAuth).store.passType)} class="pr-10" data-v-17df89e5${_scopeId}>`);
            if (unref(useAuth).store.passType == "password") {
              _push2(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_0)} alt="" data-v-17df89e5${_scopeId}>`);
            } else {
              _push2(`<img loading="lazy" class="absolute top-0 right-0 p-4 cursor-pointer"${ssrRenderAttr("src", _imports_1)} alt="" data-v-17df89e5${_scopeId}>`);
            }
            _push2(`</div></div></div><p class="c_red font-medium" data-v-17df89e5${_scopeId}>${ssrInterpolate(unref(isLoading).store.error)}</p><div class="space-y-2 text-center mx-auto" data-v-17df89e5${_scopeId}><button class="bg_main px-10 py-3 mt-5 rounded-full text-white mx-auto" data-v-17df89e5${_scopeId}>Kirish</button></div><div class="full_flex" data-v-17df89e5${_scopeId}>`);
            _push2(ssrRenderComponent(_component_router_link, {
              to: "/register",
              class: "b_main rounded-full px-5 py-2 c_main black_24"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Akkaunt yaratish `);
                } else {
                  return [
                    createTextVNode(" Akkaunt yaratish ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="pt-2 space-y-6 grid" data-v-17df89e5${_scopeId}><p class="sm:w-[284px] text-[#323232] text-sm mx-auto text-center" data-v-17df89e5${_scopeId}> Davom etish orqali <span class="c_main border-b border-[#FF852E]" data-v-17df89e5${_scopeId}>Foydalanish shartlari</span> ga roziligingizni bildirasiz. </p></div></form></div>`);
          } else {
            return [
              createVNode("div", { class: "sm:w-[500px] bg_white mx-auto sm:p-[50px] p-5 pb-8 rounded-[16px]" }, [
                createVNode("section", null, [
                  createVNode("h1", { class: "text-center md:text-[28px] text-xl font-bold" }, " Tizimga kirish "),
                  createVNode("p", { class: "_c42 text-center md:text-lg text-sm font-medium mt-4 mb-7" }, " Sizni qayta ko\u2018rganimizdan xursandmiz! ")
                ]),
                createVNode("form", {
                  onSubmit: withModifiers(handleSubmit, ["prevent"]),
                  class: "space-y-6 text-sm"
                }, [
                  createVNode("div", { class: "space-y-6" }, [
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { for: "login" }, "Telefon raqam"),
                      createVNode("div", { class: "flex items-center relative" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(useAuth).login.phone = $event,
                          type: "tel"
                        }, null, 8, ["onUpdate:modelValue"]), [
                          [vModelText, unref(useAuth).login.phone]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "space-y-2" }, [
                      createVNode("label", { for: "password" }, "Parol"),
                      createVNode("div", { class: "flex relative" }, [
                        withDirectives(createVNode("input", {
                          "onUpdate:modelValue": ($event) => unref(useAuth).login.password = $event,
                          type: unref(useAuth).store.passType,
                          class: "pr-10"
                        }, null, 8, ["onUpdate:modelValue", "type"]), [
                          [vModelDynamic, unref(useAuth).login.password]
                        ]),
                        unref(useAuth).store.passType == "password" ? (openBlock(), createBlock("img", {
                          key: 0,
                          loading: "lazy",
                          onClick: unref(useAuth).changePassType,
                          class: "absolute top-0 right-0 p-4 cursor-pointer",
                          src: _imports_0,
                          alt: ""
                        }, null, 8, ["onClick"])) : (openBlock(), createBlock("img", {
                          key: 1,
                          loading: "lazy",
                          onClick: unref(useAuth).changePassType,
                          class: "absolute top-0 right-0 p-4 cursor-pointer",
                          src: _imports_1,
                          alt: ""
                        }, null, 8, ["onClick"]))
                      ])
                    ])
                  ]),
                  createVNode("p", { class: "c_red font-medium" }, toDisplayString(unref(isLoading).store.error), 1),
                  createVNode("div", { class: "space-y-2 text-center mx-auto" }, [
                    createVNode("button", { class: "bg_main px-10 py-3 mt-5 rounded-full text-white mx-auto" }, "Kirish")
                  ]),
                  createVNode("div", { class: "full_flex" }, [
                    createVNode(_component_router_link, {
                      to: "/register",
                      class: "b_main rounded-full px-5 py-2 c_main black_24"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Akkaunt yaratish ")
                      ]),
                      _: 1
                    })
                  ]),
                  createVNode("div", { class: "pt-2 space-y-6 grid" }, [
                    createVNode("p", { class: "sm:w-[284px] text-[#323232] text-sm mx-auto text-center" }, [
                      createTextVNode(" Davom etish orqali "),
                      createVNode("span", { class: "c_main border-b border-[#FF852E]" }, "Foydalanish shartlari"),
                      createTextVNode(" ga roziligingizni bildirasiz. ")
                    ])
                  ])
                ], 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-17df89e5"]]);

export { index as default };
//# sourceMappingURL=index-z1WWUv0a.mjs.map
