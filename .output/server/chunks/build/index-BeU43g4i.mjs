import { _ as __nuxt_component_0 } from './CategorySlider-DeqTdbRv.mjs';
import { _ as __nuxt_component_0$1 } from './LoadingDiv-BWSiFsIO.mjs';
import { _ as _sfc_main$1 } from './Modal-CNknc8lN.mjs';
import { _ as __nuxt_component_2 } from './FloatingInput-BXwGQfMP.mjs';
import { _ as _sfc_main$2 } from './DeleteModal-CRgYI_wN.mjs';
import { _ as __nuxt_component_1 } from './client-only-Db1Q_2tj.mjs';
import { _ as __nuxt_component_6 } from './HighChart-BUk-KLRv.mjs';
import { reactive, resolveComponent, unref, withCtx, createVNode, openBlock, createBlock, withDirectives, vModelRadio, toDisplayString, Fragment, renderList, createCommentVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { _ as _imports_3 } from './threedot-VMR5JrW9.mjs';
import { e as useLoadingStore, o as useGroupsStore, f as useCategoryStore, t as useWatchedStore } from './server.mjs';
import './arrow-BRQWUfje.mjs';
import 'highcharts';
import './show-DYCP6gan.mjs';
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
    const isLoading = useLoadingStore();
    const useGroups = useGroupsStore();
    useCategoryStore();
    const useWatched = useWatchedStore();
    reactive({
      courses: [],
      create: false,
      likeModal: true
    });
    function handleModal(value) {
      if (value == "OK") {
        if (isLoading.modal.delete) {
          useGroups.deleteGroup();
        } else if (isLoading.modal.create && !isLoading.modal.edit) {
          useGroups.createGroup();
        } else {
          useGroups.updateGroup();
        }
      } else {
        isLoading.modal.create = false;
        isLoading.modal.delete = false;
        useGroups.clearData();
      }
    }
    function handleImage(e) {
      const file = e.target.files[0];
      useGroups.store.image = URL.createObjectURL(file);
      useGroups.create.file = file;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
      const _component_CategorySlider = __nuxt_component_0;
      const _component_LoadingDiv = __nuxt_component_0$1;
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_UIModal = _sfc_main$1;
      const _component_FloatingInput = __nuxt_component_2;
      const _component_a_textarea = resolveComponent("a-textarea");
      const _component_UIDeleteModal = _sfc_main$2;
      const _component_ClientOnly = __nuxt_component_1;
      const _component_PageDashboardHighChart = __nuxt_component_6;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CategorySlider, { class: "mb-5" }, null, _parent));
      _push(`<div>`);
      if (unref(isLoading).isLoadingType("groups")) {
        _push(`<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(12, (i) => {
          _push(ssrRenderComponent(_component_LoadingDiv, null, null, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><div class="bg_white b_cf5 r_12 p-5"><h1 class="text-lg font-semibold">Groups analytics</h1><p>Current subscribers</p><span class="inline-block mb-7 text-xl font-semibold bg_cf5 px-2 r_50">${ssrInterpolate(((_b = (_a = unref(useGroups).store.groups) == null ? void 0 : _a.summary) == null ? void 0 : _b.length) ? (_d = (_c = unref(useGroups).store.groups) == null ? void 0 : _c.summary[0]) == null ? void 0 : _d.users_count : 0)}</span><hr><h2 class="mt-2 font-semibold text-lg">Summary</h2><p class="c_c92">Last 28 days</p><ul class="space-y-2 mt-2"><li class="flex items-center justify-between gap-1"><span>Views</span><span class="inline-block bg_cf5 px-2 r_50">${ssrInterpolate(((_f = (_e = unref(useGroups).store.groups) == null ? void 0 : _e.summary) == null ? void 0 : _f.length) ? (_h = (_g = unref(useGroups).store.groups) == null ? void 0 : _g.summary[0]) == null ? void 0 : _h.watched_count : 0)}</span></li><li class="flex items-center justify-between gap-1"><span>Likes</span><span class="inline-block bg_cf5 px-2 r_50">${ssrInterpolate(((_j = (_i = unref(useGroups).store.groups) == null ? void 0 : _i.summary) == null ? void 0 : _j.length) ? (_l = (_k = unref(useGroups).store.groups) == null ? void 0 : _k.summary[0]) == null ? void 0 : _l.likes_count : 0)}</span></li></ul><h2 class="mt-2 font-semibold text-lg">Top videos</h2><p><span class="c_c92">Last 48 hours</span> \xB7 Views</p><button class="bg_main c_white mt-2 py-2 px-5 r_50">Go to groups analytics</button></div><!--[-->`);
        ssrRenderList((_m = unref(useGroups).store.groups) == null ? void 0 : _m.my_groups, (i) => {
          _push(`<div class="r_12 overflow-hidden bg_white pcursor relative">`);
          if (i.user_id == unref(isLoading).user.id) {
            _push(ssrRenderComponent(_component_a_dropdown, null, {
              overlay: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_a_menu, null, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_a_menu_item, {
                          onClick: ($event) => _ctx.handleButton("edit", i.id)
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
                          onClick: ($event) => _ctx.handleButton("delete", i.id)
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
                        _push3(ssrRenderComponent(_component_a_menu_item, null, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<a href="javascript:;"${_scopeId3}>3rd menu item</a>`);
                            } else {
                              return [
                                createVNode("a", { href: "javascript:;" }, "3rd menu item")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_a_menu_item, {
                            onClick: ($event) => _ctx.handleButton("edit", i.id)
                          }, {
                            default: withCtx(() => [
                              createVNode("a", { href: "javascript:;" }, "Edit")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_a_menu_item, {
                            onClick: ($event) => _ctx.handleButton("delete", i.id)
                          }, {
                            default: withCtx(() => [
                              createVNode("a", { href: "javascript:;" }, "Delete")
                            ]),
                            _: 2
                          }, 1032, ["onClick"]),
                          createVNode(_component_a_menu_item, null, {
                            default: withCtx(() => [
                              createVNode("a", { href: "javascript:;" }, "3rd menu item")
                            ]),
                            _: 1
                          })
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
                          onClick: ($event) => _ctx.handleButton("edit", i.id)
                        }, {
                          default: withCtx(() => [
                            createVNode("a", { href: "javascript:;" }, "Edit")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_a_menu_item, {
                          onClick: ($event) => _ctx.handleButton("delete", i.id)
                        }, {
                          default: withCtx(() => [
                            createVNode("a", { href: "javascript:;" }, "Delete")
                          ]),
                          _: 2
                        }, 1032, ["onClick"]),
                        createVNode(_component_a_menu_item, null, {
                          default: withCtx(() => [
                            createVNode("a", { href: "javascript:;" }, "3rd menu item")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<div class="!bg-white r_8 absolute right-2 top-2 py-1 threedot"${_scopeId}><img loading="lazy" class="rotate-90 h-5 threedot"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}></div>`);
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
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`<img loading="lazy" class="aspect-video w-full object-cover"${ssrRenderAttr("src", i == null ? void 0 : i.cover)} alt=""><ul class="space-y-1 p-2"><li class="flex items-center justify-between gap-1"><span>Views</span><span class="inline-block bg_cf5 px-2 r_50">${ssrInterpolate(i.watched_count)}</span></li><li class="flex items-center justify-between gap-1"><span>Likes</span><span class="inline-block bg_cf5 px-2 r_50">${ssrInterpolate(i.likes_count)}</span></li><li><button class="bg_main c_white py-2 px-5 r_50">Go to course analytics</button></li><li><button class="bg_main c_white py-2 px-5 r_50">See comments (0)</button></li></ul></div>`);
        });
        _push(`<!--]--><div class="flex flex-col justify-center items-center gap-2 text-center b_cf5 r_12 min-h-[380px]"><p>Create your new group to start a conversation and get feedback from your community.</p><button class="bg_main c_white py-2 px-5 r_50">Create a new group</button></div></div>`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_UIModal, {
        title: `Guruh qo'shish`,
        isOpen: unref(isLoading).modal.create,
        loadingType: "creategroup",
        "onUpdate:isOpen": (value) => handleModal(value)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="space-y-6"${_scopeId}><label for="file_input" class="block pcursor"${_scopeId}>`);
            if (unref(useGroups).store.image) {
              _push2(`<img loading="lazy" class="aspect-video w-full object-cover r_8"${ssrRenderAttr("src", unref(useGroups).store.image)} alt=""${_scopeId}>`);
            } else {
              _push2(`<div class="aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]"${_scopeId}><button class="bg_main py-2 px-7 text-white rounded-full"${_scopeId}>Rasm yuklash</button><p class="w-1/2"${_scopeId}>Minimal o&#39;lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.</p></div>`);
            }
            _push2(`</label>`);
            _push2(ssrRenderComponent(_component_FloatingInput, {
              id: "title",
              maxValue: 50,
              class: "w-full",
              type: "text",
              modelValue: unref(useGroups).create.title,
              "onUpdate:modelValue": ($event) => unref(useGroups).create.title = $event,
              label: "Title",
              required: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_textarea, {
              value: unref(useGroups).create.description,
              "onUpdate:value": ($event) => unref(useGroups).create.description = $event,
              placeholder: "Description",
              "auto-size": { minRows: 2, maxRows: 10 }
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid gap-5"${_scopeId}><label class="${ssrRenderClass([
              unref(useGroups).create.group_type == "private" ? "b_main" : "b_ccc",
              "space-y-3 r_8 p-5 cursor-pointer"
            ])}"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(useGroups).create.group_type, null)) ? " checked" : ""}${ssrIncludeBooleanAttr(
              unref(useGroups).create.group_type == "private" ? true : false
            ) ? " checked" : ""} id="private" class="rounded-full w-5" type="radio" name="type"${_scopeId}><div class="full_flex gap-1 capitalize font-medium"${_scopeId}> Private </div></div><p${_scopeId}> Only members can see who&#39;s in the group and what they post. Content is hidden from search engines. </p></label><label class="${ssrRenderClass([
              unref(useGroups).create.group_type == "private" ? "b_main" : "b_ccc",
              "space-y-3 r_8 p-5 cursor-pointer"
            ])}"${_scopeId}><div class="flex items-center gap-3"${_scopeId}><input${ssrIncludeBooleanAttr(
              unref(useGroups).create.group_type == "public" ? true : false
            ) ? " checked" : ""} id="public" class="rounded-full w-5" type="radio" name="type"${_scopeId}><div class="full_flex gap-1 capitalize font-medium"${_scopeId}> Public </div></div><p${_scopeId}> Anyone can see who&#39;s in the group and what they post. Content is discoverable by search engines. </p></label></div><p class="c_red"${_scopeId}>${ssrInterpolate(unref(isLoading).store.errorMessage.message)}</p></div><div class="file_input"${_scopeId}><input id="file_input" class="file_input" type="file" accept="image/*"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "space-y-6" }, [
                createVNode("label", {
                  for: "file_input",
                  class: "block pcursor"
                }, [
                  unref(useGroups).store.image ? (openBlock(), createBlock("img", {
                    key: 0,
                    loading: "lazy",
                    class: "aspect-video w-full object-cover r_8",
                    src: unref(useGroups).store.image,
                    alt: ""
                  }, null, 8, ["src"])) : (openBlock(), createBlock("div", {
                    key: 1,
                    class: "aspect-video w-full full_flex flex-col text-center space-y-10 r_8 py-10 border border-dashed border-[#CCCCCC]"
                  }, [
                    createVNode("button", { class: "bg_main py-2 px-7 text-white rounded-full" }, "Rasm yuklash"),
                    createVNode("p", { class: "w-1/2" }, "Minimal o'lcham - 808 x 632 piksel. GIF tasvirlari jonlantirilmaydi.")
                  ]))
                ]),
                createVNode(_component_FloatingInput, {
                  id: "title",
                  maxValue: 50,
                  class: "w-full",
                  type: "text",
                  modelValue: unref(useGroups).create.title,
                  "onUpdate:modelValue": ($event) => unref(useGroups).create.title = $event,
                  label: "Title",
                  required: ""
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_component_a_textarea, {
                  value: unref(useGroups).create.description,
                  "onUpdate:value": ($event) => unref(useGroups).create.description = $event,
                  placeholder: "Description",
                  "auto-size": { minRows: 2, maxRows: 10 }
                }, null, 8, ["value", "onUpdate:value"]),
                createVNode("div", { class: "grid gap-5" }, [
                  createVNode("label", {
                    onClick: ($event) => unref(useGroups).create.group_type = "private",
                    class: [
                      "space-y-3 r_8 p-5 cursor-pointer",
                      unref(useGroups).create.group_type == "private" ? "b_main" : "b_ccc"
                    ]
                  }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      withDirectives(createVNode("input", {
                        onFocus: ($event) => unref(useGroups).create.group_type = "private",
                        "onUpdate:modelValue": ($event) => unref(useGroups).create.group_type = $event,
                        checked: unref(useGroups).create.group_type == "private" ? true : false,
                        id: "private",
                        class: "rounded-full w-5",
                        type: "radio",
                        name: "type"
                      }, null, 40, ["onFocus", "onUpdate:modelValue", "checked"]), [
                        [vModelRadio, unref(useGroups).create.group_type]
                      ]),
                      createVNode("div", { class: "full_flex gap-1 capitalize font-medium" }, " Private ")
                    ]),
                    createVNode("p", null, " Only members can see who's in the group and what they post. Content is hidden from search engines. ")
                  ], 10, ["onClick"]),
                  createVNode("label", {
                    onClick: ($event) => unref(useGroups).create.group_type = "public",
                    class: [
                      "space-y-3 r_8 p-5 cursor-pointer",
                      unref(useGroups).create.group_type == "private" ? "b_main" : "b_ccc"
                    ]
                  }, [
                    createVNode("div", { class: "flex items-center gap-3" }, [
                      createVNode("input", {
                        checked: unref(useGroups).create.group_type == "public" ? true : false,
                        id: "public",
                        class: "rounded-full w-5",
                        type: "radio",
                        name: "type"
                      }, null, 8, ["checked"]),
                      createVNode("div", { class: "full_flex gap-1 capitalize font-medium" }, " Public ")
                    ]),
                    createVNode("p", null, " Anyone can see who's in the group and what they post. Content is discoverable by search engines. ")
                  ], 10, ["onClick"])
                ]),
                createVNode("p", { class: "c_red" }, toDisplayString(unref(isLoading).store.errorMessage.message), 1)
              ]),
              createVNode("div", { class: "file_input" }, [
                createVNode("input", {
                  onChange: handleImage,
                  id: "file_input",
                  class: "file_input",
                  type: "file",
                  accept: "image/*"
                }, null, 32)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIDeleteModal, {
        isOpen: unref(isLoading).modal.delete,
        loadingType: "deletegroup",
        "onUpdate:isOpen": (value) => handleModal(value)
      }, null, _parent));
      _push(ssrRenderComponent(_component_UIModal, {
        title: "",
        isOpen: unref(isLoading).modal.analytics,
        wrapClassName: "full-modal",
        loadingType: "creategroup",
        "onUpdate:isOpen": (value) => unref(isLoading).modal.analytics = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_ClientOnly, null, {}, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_ClientOnly, null, {
                default: withCtx(() => [
                  createVNode(_component_PageDashboardHighChart)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_UIModal, {
        isOpen: unref(useWatched).store.showUsers,
        loadingType: "creategroup",
        "onUpdate:isOpen": (value) => unref(useWatched).store.showUsers = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m2, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
          if (_push2) {
            if ((_b2 = (_a2 = unref(useWatched).store.watched) == null ? void 0 : _a2.watched) == null ? void 0 : _b2.length) {
              _push2(`<div class="space-y-7"${_scopeId}><div class="flex items-center justify-between border-b pb-4 -mx-4 px-4"${_scopeId}><h1 class="font-semibold"${_scopeId}>${ssrInterpolate((_e2 = (_d2 = (_c2 = unref(useWatched).store.watched) == null ? void 0 : _c2.watched[unref(useWatched).store.currentIndex].watchedList) == null ? void 0 : _d2.records) == null ? void 0 : _e2.length)} Watched </h1></div>`);
              if (((_i2 = (_h2 = (_g2 = (_f2 = unref(useWatched).store.watched) == null ? void 0 : _f2.watched[unref(useWatched).store.currentIndex]) == null ? void 0 : _g2.watchedList) == null ? void 0 : _h2.pagination) == null ? void 0 : _i2.total_count) && ((_l2 = (_k2 = (_j2 = unref(useWatched).store.watched) == null ? void 0 : _j2.watched[unref(useWatched).store.currentIndex].watchedList) == null ? void 0 : _k2.records) == null ? void 0 : _l2.length)) {
                _push2(`<div${_scopeId}><ul class="overflow-auto max-h-[300px]"${_scopeId}><!--[-->`);
                ssrRenderList((_n = (_m2 = unref(useWatched).store.watched) == null ? void 0 : _m2.watched[unref(useWatched).store.currentIndex].watchedList) == null ? void 0 : _n.records, (i) => {
                  var _a3, _b3, _c3;
                  _push2(`<li class="flex items-center gap-4 w-full py-2"${_scopeId}><img class="h-10 w-10 rounded-full object-cover"${ssrRenderAttr("src", (_a3 = i.user) == null ? void 0 : _a3.image)} title="user"${_scopeId}><div class="space-y-1 w-[65%]"${_scopeId}><h1 class="truncate font-semibold"${_scopeId}>${ssrInterpolate((_b3 = i.user) == null ? void 0 : _b3.name)} ${ssrInterpolate((_c3 = i.user) == null ? void 0 : _c3.surname)}</h1><p class="truncate"${_scopeId}>${ssrInterpolate(i.createdAt)}</p></div><button class="full_flex gap-[10px] min-w-fit uppercase b_main c_main r_8 px-6 py-2"${_scopeId}> chat </button></li>`);
                });
                _push2(`<!--]--></ul></div>`);
              } else if (!((_r = (_q = (_p = (_o = unref(useWatched).store.watched) == null ? void 0 : _o.watched[unref(useWatched).store.currentIndex]) == null ? void 0 : _p.watchedList) == null ? void 0 : _q.pagination) == null ? void 0 : _r.total_count) && !unref(isLoading).isLoadingType("getLikes")) {
                _push2(`<div class="full_flex py-5"${_scopeId}> No likes yet </div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(isLoading).isLoadingType("getLikes")) {
                _push2(`<div class="my-2 text-center chat_loading"${_scopeId}><svg aria-hidden="true" class="w-8 h-8 text-gray-200 mx-auto animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"${_scopeId}><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"${_scopeId}></path><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"${_scopeId}></path></svg></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ((_t = (_s = unref(useWatched).store.watched) == null ? void 0 : _s.watched) == null ? void 0 : _t.length) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "space-y-7"
              }, [
                createVNode("div", { class: "flex items-center justify-between border-b pb-4 -mx-4 px-4" }, [
                  createVNode("h1", { class: "font-semibold" }, toDisplayString((_w = (_v = (_u = unref(useWatched).store.watched) == null ? void 0 : _u.watched[unref(useWatched).store.currentIndex].watchedList) == null ? void 0 : _v.records) == null ? void 0 : _w.length) + " Watched ", 1)
                ]),
                ((_A = (_z = (_y = (_x = unref(useWatched).store.watched) == null ? void 0 : _x.watched[unref(useWatched).store.currentIndex]) == null ? void 0 : _y.watchedList) == null ? void 0 : _z.pagination) == null ? void 0 : _A.total_count) && ((_D = (_C = (_B = unref(useWatched).store.watched) == null ? void 0 : _B.watched[unref(useWatched).store.currentIndex].watchedList) == null ? void 0 : _C.records) == null ? void 0 : _D.length) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("ul", { class: "overflow-auto max-h-[300px]" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList((_F = (_E = unref(useWatched).store.watched) == null ? void 0 : _E.watched[unref(useWatched).store.currentIndex].watchedList) == null ? void 0 : _F.records, (i) => {
                      var _a3, _b3, _c3;
                      return openBlock(), createBlock("li", {
                        key: i.id,
                        class: "flex items-center gap-4 w-full py-2"
                      }, [
                        createVNode("img", {
                          class: "h-10 w-10 rounded-full object-cover",
                          src: (_a3 = i.user) == null ? void 0 : _a3.image,
                          title: "user"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "space-y-1 w-[65%]" }, [
                          createVNode("h1", { class: "truncate font-semibold" }, toDisplayString((_b3 = i.user) == null ? void 0 : _b3.name) + " " + toDisplayString((_c3 = i.user) == null ? void 0 : _c3.surname), 1),
                          createVNode("p", { class: "truncate" }, toDisplayString(i.createdAt), 1)
                        ]),
                        createVNode("button", { class: "full_flex gap-[10px] min-w-fit uppercase b_main c_main r_8 px-6 py-2" }, " chat ")
                      ]);
                    }), 128))
                  ])
                ])) : !((_J = (_I = (_H = (_G = unref(useWatched).store.watched) == null ? void 0 : _G.watched[unref(useWatched).store.currentIndex]) == null ? void 0 : _H.watchedList) == null ? void 0 : _I.pagination) == null ? void 0 : _J.total_count) && !unref(isLoading).isLoadingType("getLikes") ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "full_flex py-5"
                }, " No likes yet ")) : createCommentVNode("", true),
                unref(isLoading).isLoadingType("getLikes") ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "my-2 text-center chat_loading"
                }, [
                  (openBlock(), createBlock("svg", {
                    "aria-hidden": "true",
                    class: "w-8 h-8 text-gray-200 mx-auto animate-spin dark:text-gray-600 fill-blue-600",
                    viewBox: "0 0 100 101",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                  }, [
                    createVNode("path", {
                      d: "M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",
                      fill: "currentColor"
                    }),
                    createVNode("path", {
                      d: "M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",
                      fill: "currentFill"
                    })
                  ]))
                ])) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/my_groups/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BeU43g4i.mjs.map
