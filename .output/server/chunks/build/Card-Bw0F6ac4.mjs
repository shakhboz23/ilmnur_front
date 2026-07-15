import { useSSRContext, resolveComponent, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_3 } from './threedot-VMR5JrW9.mjs';
import { _ as _imports_0 } from './a_star-Cwe52rgh.mjs';
import { _ as _export_sfc, u as useRouter, e as useLoadingStore, o as useGroupsStore } from './server.mjs';

const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    carddata: Object,
    editable: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const isLoading = useLoadingStore();
    const useGroups = useGroupsStore();
    function handleButton(type, id) {
      useGroups.store.group_id = id;
      isLoading.modal[type] = true;
      if (type == "edit") {
        console.log(props.carddata);
        for (let i in useGroups.create) {
          useGroups.create[i] = props.carddata[i];
        }
        useGroups.store.image = props.carddata.cover;
        isLoading.modal.create = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "r_12 overflow-hidden bg_white pcursor relative" }, _attrs))} data-v-0a05f45b>`);
      if (__props.carddata.user_id == unref(isLoading).user.id && __props.editable) {
        _push(ssrRenderComponent(_component_a_dropdown, null, {
          overlay: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_menu, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => handleButton("edit", __props.carddata.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;" data-v-0a05f45b${_scopeId3}>Edit</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "Edit")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => handleButton("delete", __props.carddata.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;" data-v-0a05f45b${_scopeId3}>Delete</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "Delete")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_menu_item, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;" data-v-0a05f45b${_scopeId3}>3rd menu item</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "3rd menu item")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => handleButton("edit", __props.carddata.id)
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "Edit")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => handleButton("delete", __props.carddata.id)
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "Delete")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_a_menu_item, null, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "3rd menu item")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_menu, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => handleButton("edit", __props.carddata.id)
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "Edit")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => handleButton("delete", __props.carddata.id)
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "Delete")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_a_menu_item, null, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "3rd menu item")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="!bg-white r_8 absolute right-2 top-2 py-1 threedot" data-v-0a05f45b${_scopeId}><img loading="lazy" class="rotate-90 h-5 threedot"${ssrRenderAttr("src", _imports_3)} alt="" data-v-0a05f45b${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", { class: "!bg-white r_8 absolute right-2 top-2 py-1 threedot" }, [
                  createVNode("img", {
                    loading: "lazy",
                    class: "rotate-90 h-5 threedot",
                    src: _imports_3,
                    alt: ""
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<img loading="lazy" class="aspect-video w-full object-cover"${ssrRenderAttr("src", (_a = __props.carddata) == null ? void 0 : _a.cover)} alt="" data-v-0a05f45b><div class="p-3 space-y-2" data-v-0a05f45b><h1 class="font-bold" data-v-0a05f45b>${ssrInterpolate(__props.carddata.title)}</h1><pre class="whitespace-pre-line line-clamp-2" data-v-0a05f45b>        ${ssrInterpolate(__props.carddata.description)}
    </pre><ul class="flex items-center gap-2 text-sm" data-v-0a05f45b><li class="full_flex gap-1" data-v-0a05f45b><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt="" data-v-0a05f45b><span class="c_main" data-v-0a05f45b>${ssrInterpolate(__props.carddata.likes_count)}</span></li><li class="font-semibold" data-v-0a05f45b> $${ssrInterpolate(__props.carddata.low_price)} - $${ssrInterpolate(__props.carddata.high_price)}</li></ul><div class="flex flex-wrap whitespace-nowrap gap-2" data-v-0a05f45b><button class="text-sm font-medium py-1 px-2 bg_cf2 r_8" data-v-0a05f45b>${ssrInterpolate(__props.carddata.users_count)} Azolar </button><button class="text-sm font-medium py-1 px-2 bg_cf2 r_8" data-v-0a05f45b>${ssrInterpolate(__props.carddata.group_type == "public" ? "Ommaviy" : "Shaxsiy")}</button><button class="text-sm font-medium py-1 px-2 bg_cf2 r_8" data-v-0a05f45b>${ssrInterpolate(__props.carddata.courses_count)} Kurslar </button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a05f45b"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=Card-Bw0F6ac4.mjs.map
