import { _ as __nuxt_component_0 } from './CategorySlider-xG7UGu7Z.mjs';
import { _ as _sfc_main$1 } from './Modal-Kmt9lhdy.mjs';
import { _ as __nuxt_component_2 } from './FloatingInput-BXwGQfMP.mjs';
import { _ as _sfc_main$2 } from './DeleteModal-CRgYI_wN.mjs';
import { reactive, ref, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_0 } from './filter-GR5HalyB.mjs';
import { _ as _imports_3 } from './threedot-VMR5JrW9.mjs';
import { e as useLoadingStore, f as useCategoryStore } from './server.mjs';
import './LoadingDiv-CLaVNDei.mjs';
import './arrow-BRQWUfje.mjs';
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
    const isLoading = useLoadingStore();
    const useCategory = useCategoryStore();
    const store = reactive({
      subcategory: false,
      categoryIndex: 0
    });
    const options = ref([
      { value: true, label: "true" },
      { value: false, label: "false" }
    ]);
    function handleModal(value, type) {
      const ModalType = store.subcategory ? "subcategory" : "category";
      if (type == "subcategory") {
        store.subcategory = false;
      }
      if (value == "OK") {
        if (isLoading.modal.delete) {
          useCategory.deleteCategory(ModalType);
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
          useCategory.createCategory(ModalType);
        } else {
          useCategory.updateCategory(ModalType);
          isLoading.modal.edit = false;
        }
      } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
      }
    }
    function handleButton(type, category) {
      isLoading.store.category_id = category.id;
      isLoading.modal[type] = true;
      if (type == "edit") {
        for (let i in useCategory.create) {
          useCategory.create[i] = category[i];
        }
        isLoading.modal.create = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategorySlider = __nuxt_component_0;
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_UIModal = _sfc_main$1;
      const _component_FloatingInput = __nuxt_component_2;
      const _component_a_select = resolveComponent("a-select");
      const _component_a_select_option = resolveComponent("a-select-option");
      const _component_UIDeleteModal = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><nav class="flex items-center justify-between gap-10 w-full mb-6">`);
      _push(ssrRenderComponent(_component_CategorySlider, { class: "w-full" }, null, _parent));
      _push(`<div class="flex gap-3 min-w-fit"><div class="flex items-center bg_bg h-[46px] w-[46px] rounded-[10px]"><button class="flex items-center justify-center h-[46px] w-[46px] rounded-[10px]"><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt=""></button></div><button class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"> + Add category </button></div></nav><section><ul class="grid grid-cols-5 text-center gap-5"><!--[-->`);
      ssrRenderList(unref(useCategory).store.category, (i, index) => {
        _push(`<li class="flex flex-col items-center space-y-1 pcursor relative">`);
        _push(ssrRenderComponent(_component_a_dropdown, { class: "absolute top-2 right-2" }, {
          overlay: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_menu, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => handleButton("edit", i)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;"${_scopeId3}>Edit</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "Edit")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => handleButton("delete", i)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;"${_scopeId3}>Delete</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "Delete")
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => handleButton("edit", i)
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "Edit")
                        ]),
                        _: 2
                      }, 1032, ["onClick"]),
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => handleButton("delete", i)
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "Delete")
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_menu, null, {
                  default: withCtx(() => [
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => handleButton("edit", i)
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "Edit")
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => handleButton("delete", i)
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "Delete")
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}><img loading="lazy" class="threedot"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode("img", {
                    loading: "lazy",
                    class: "threedot",
                    src: _imports_3,
                    alt: ""
                  })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<p class="flex items-center justify-center text-center bg_bg text-[32px] rounded-full p-2 max-w-[64px] max-h-[64px] w-full">${ssrInterpolate(i.icon)}</p><p>${ssrInterpolate(i.title)}</p></li>`);
      });
      _push(`<!--]--></ul></section>`);
      _push(ssrRenderComponent(_component_UIModal, {
        isOpen: unref(store).subcategory,
        loadingType: "subcategory",
        "onUpdate:isOpen": (value) => handleModal(value, "subcategory")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            _push2(`<div class="relative overflow-x-auto"${_scopeId}><button class="h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"${_scopeId}> + Add category </button>`);
            if ((_b = (_a = unref(useCategory).store.category[unref(store).categoryIndex]) == null ? void 0 : _a.subcategories) == null ? void 0 : _b.length) {
              _push2(`<table class="w-full text-sm text-left rtl:text-right border-separate border-spacing-y-3"${_scopeId}><tbody class="!space-y-5"${_scopeId}><!--[-->`);
              ssrRenderList((_c = unref(useCategory).store.category[unref(store).categoryIndex]) == null ? void 0 : _c.subcategories, (i) => {
                _push2(`<tr class="bg_bg"${_scopeId}><th scope="row" class="px-6 py-3 rounded-l-xl"${_scopeId}>${ssrInterpolate(i.title)}</th><td class="px-6 py-3"${_scopeId}><button class="bg_main text-white py-1 px-3 rounded-full"${_scopeId}>true</button></td><td class="px-6 py-3 whitespace-nowrap"${_scopeId}>${ssrInterpolate(i.createdAt)}</td><td class="px-6 py-3 relative rounded-r-xl"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_a_dropdown, { class: "absolute top-3 right-6" }, {
                  overlay: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_a_menu, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_a_menu_item, {
                              onClick: ($event) => handleButton("edit", i)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<a href="javascript:;"${_scopeId4}>Edit</a>`);
                                } else {
                                  return [
                                    createVNode("a", { href: "javascript:;" }, "Edit")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_a_menu_item, {
                              onClick: ($event) => handleButton("delete", i)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<a href="javascript:;"${_scopeId4}>Delete</a>`);
                                } else {
                                  return [
                                    createVNode("a", { href: "javascript:;" }, "Delete")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_a_menu_item, {
                                onClick: ($event) => handleButton("edit", i)
                              }, {
                                default: withCtx(() => [
                                  createVNode("a", { href: "javascript:;" }, "Edit")
                                ]),
                                _: 2
                              }, 1032, ["onClick"]),
                              createVNode(_component_a_menu_item, {
                                onClick: ($event) => handleButton("delete", i)
                              }, {
                                default: withCtx(() => [
                                  createVNode("a", { href: "javascript:;" }, "Delete")
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_a_menu, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_menu_item, {
                              onClick: ($event) => handleButton("edit", i)
                            }, {
                              default: withCtx(() => [
                                createVNode("a", { href: "javascript:;" }, "Edit")
                              ]),
                              _: 2
                            }, 1032, ["onClick"]),
                            createVNode(_component_a_menu_item, {
                              onClick: ($event) => handleButton("delete", i)
                            }, {
                              default: withCtx(() => [
                                createVNode("a", { href: "javascript:;" }, "Delete")
                              ]),
                              _: 2
                            }, 1032, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div${_scopeId2}><img loading="lazy" class="threedot"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId2}></div>`);
                    } else {
                      return [
                        createVNode("div", null, [
                          createVNode("img", {
                            loading: "lazy",
                            class: "threedot",
                            src: _imports_3,
                            alt: ""
                          })
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</td></tr>`);
              });
              _push2(`<!--]--></tbody></table>`);
            } else {
              _push2(`<div class="p-10 text-center"${_scopeId}> Ma&#39;lumot yo&#39;q </div>`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "relative overflow-x-auto" }, [
                createVNode("button", {
                  onClick: ($event) => unref(isLoading).modal.create = true,
                  class: "h-[46px] px-[56px] rounded-[10px] text-sm leading-4 bg_main text-white"
                }, " + Add category ", 8, ["onClick"]),
                ((_e = (_d = unref(useCategory).store.category[unref(store).categoryIndex]) == null ? void 0 : _d.subcategories) == null ? void 0 : _e.length) ? (openBlock(), createBlock("table", {
                  key: 0,
                  class: "w-full text-sm text-left rtl:text-right border-separate border-spacing-y-3"
                }, [
                  createVNode("tbody", { class: "!space-y-5" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList((_f = unref(useCategory).store.category[unref(store).categoryIndex]) == null ? void 0 : _f.subcategories, (i) => {
                      return openBlock(), createBlock("tr", { class: "bg_bg" }, [
                        createVNode("th", {
                          scope: "row",
                          class: "px-6 py-3 rounded-l-xl"
                        }, toDisplayString(i.title), 1),
                        createVNode("td", { class: "px-6 py-3" }, [
                          createVNode("button", { class: "bg_main text-white py-1 px-3 rounded-full" }, "true")
                        ]),
                        createVNode("td", { class: "px-6 py-3 whitespace-nowrap" }, toDisplayString(i.createdAt), 1),
                        createVNode("td", { class: "px-6 py-3 relative rounded-r-xl" }, [
                          createVNode(_component_a_dropdown, { class: "absolute top-3 right-6" }, {
                            overlay: withCtx(() => [
                              createVNode(_component_a_menu, null, {
                                default: withCtx(() => [
                                  createVNode(_component_a_menu_item, {
                                    onClick: ($event) => handleButton("edit", i)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("a", { href: "javascript:;" }, "Edit")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]),
                                  createVNode(_component_a_menu_item, {
                                    onClick: ($event) => handleButton("delete", i)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("a", { href: "javascript:;" }, "Delete")
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            default: withCtx(() => [
                              createVNode("div", null, [
                                createVNode("img", {
                                  loading: "lazy",
                                  class: "threedot",
                                  src: _imports_3,
                                  alt: ""
                                })
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ]);
                    }), 256))
                  ])
                ])) : (openBlock(), createBlock("div", {
                  key: 1,
                  class: "p-10 text-center"
                }, " Ma'lumot yo'q "))
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIModal, {
        isOpen: unref(isLoading).modal.create,
        loadingType: "category",
        "onUpdate:isOpen": (value) => handleModal(value)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><div class="grid gap-5"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_FloatingInput, {
              id: "title",
              class: "w-full",
              type: "text",
              modelValue: unref(useCategory).create.title,
              "onUpdate:modelValue": ($event) => unref(useCategory).create.title = $event,
              label: "Title",
              required: ""
            }, null, _parent2, _scopeId));
            if (!unref(store).subcategory) {
              _push2(ssrRenderComponent(_component_FloatingInput, {
                id: "icon",
                class: "w-full",
                type: "text",
                modelValue: unref(useCategory).create.icon,
                "onUpdate:modelValue": ($event) => unref(useCategory).create.icon = $event,
                label: "Icon",
                required: ""
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(store).subcategory) {
              _push2(`<div class="space-y-2"${_scopeId}><h1 class="font-bold"${_scopeId}>Select category</h1>`);
              _push2(ssrRenderComponent(_component_a_select, {
                class: "block w-full",
                value: unref(useCategory).create.category_id,
                "onUpdate:value": ($event) => unref(useCategory).create.category_id = $event,
                placeholder: "Select"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(useCategory).store.category, (i) => {
                      _push3(ssrRenderComponent(_component_a_select_option, {
                        key: i.id,
                        value: i.id
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`${ssrInterpolate(i.title)}`);
                          } else {
                            return [
                              createTextVNode(toDisplayString(i.title), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(useCategory).store.category, (i) => {
                        return openBlock(), createBlock(_component_a_select_option, {
                          key: i.id,
                          value: i.id
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(i.title), 1)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="space-y-2"${_scopeId}><h1 class="font-bold"${_scopeId}>Category</h1>`);
            _push2(ssrRenderComponent(_component_a_select, {
              class: "w-full",
              value: unref(useCategory).create.type,
              "onUpdate:value": ($event) => unref(useCategory).create.type = $event,
              "show-search": "",
              placeholder: "Select a person",
              options: unref(options),
              "filter-option": _ctx.filterOption,
              onFocus: _ctx.handleFocus,
              onBlur: _ctx.handleBlur,
              onChange: _ctx.handleChange
            }, null, _parent2, _scopeId));
            _push2(`</div></div><p class="c_red"${_scopeId}>${ssrInterpolate(unref(isLoading).store.errorMessage.message)}</p></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("div", { class: "grid gap-5" }, [
                  createVNode(_component_FloatingInput, {
                    id: "title",
                    class: "w-full",
                    type: "text",
                    modelValue: unref(useCategory).create.title,
                    "onUpdate:modelValue": ($event) => unref(useCategory).create.title = $event,
                    label: "Title",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  !unref(store).subcategory ? (openBlock(), createBlock(_component_FloatingInput, {
                    key: 0,
                    id: "icon",
                    class: "w-full",
                    type: "text",
                    modelValue: unref(useCategory).create.icon,
                    "onUpdate:modelValue": ($event) => unref(useCategory).create.icon = $event,
                    label: "Icon",
                    required: ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                  unref(store).subcategory ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "space-y-2"
                  }, [
                    createVNode("h1", { class: "font-bold" }, "Select category"),
                    createVNode(_component_a_select, {
                      class: "block w-full",
                      value: unref(useCategory).create.category_id,
                      "onUpdate:value": ($event) => unref(useCategory).create.category_id = $event,
                      placeholder: "Select"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(useCategory).store.category, (i) => {
                          return openBlock(), createBlock(_component_a_select_option, {
                            key: i.id,
                            value: i.id
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(i.title), 1)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["value", "onUpdate:value"])
                  ])) : createCommentVNode("", true),
                  createVNode("div", { class: "space-y-2" }, [
                    createVNode("h1", { class: "font-bold" }, "Category"),
                    createVNode(_component_a_select, {
                      class: "w-full",
                      value: unref(useCategory).create.type,
                      "onUpdate:value": ($event) => unref(useCategory).create.type = $event,
                      "show-search": "",
                      placeholder: "Select a person",
                      options: unref(options),
                      "filter-option": _ctx.filterOption,
                      onFocus: _ctx.handleFocus,
                      onBlur: _ctx.handleBlur,
                      onChange: _ctx.handleChange
                    }, null, 8, ["value", "onUpdate:value", "options", "filter-option", "onFocus", "onBlur", "onChange"])
                  ])
                ]),
                createVNode("p", { class: "c_red" }, toDisplayString(unref(isLoading).store.errorMessage.message), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIDeleteModal, {
        isOpen: unref(isLoading).modal.delete,
        loadingType: "category",
        "onUpdate:isOpen": (value) => handleModal(value)
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CMddY5nO.mjs.map
