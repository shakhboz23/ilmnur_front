import { useSSRContext, resolveComponent, mergeProps, unref, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _imports_3 } from './threedot-VMR5JrW9.mjs';
import { _ as _imports_0 } from './a_star-Cwe52rgh.mjs';
import { _ as _export_sfc, u as useRouter, j as useCoursesStore, e as useLoadingStore } from './server.mjs';

const _sfc_main = {
  __name: "Card",
  __ssrInlineRender: true,
  props: {
    lessoncarddata: Object,
    editable: {
      default: true,
      type: Boolean
    }
  },
  setup(__props) {
    const props = __props;
    useRouter();
    const useCourses = useCoursesStore();
    const isLoading = useLoadingStore();
    function handleButton(type, id) {
      useCourses.store.course_id = id;
      isLoading.modal[type] = true;
      if (type == "edit") {
        for (let i in useCourses.create) {
          useCourses.create[i] = props.lessoncarddata[i];
        }
        useCourses.store.image = props.lessoncarddata.cover;
        isLoading.modal.create = true;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_a_dropdown = resolveComponent("a-dropdown");
      const _component_a_menu = resolveComponent("a-menu");
      const _component_a_menu_item = resolveComponent("a-menu-item");
      const _component_a_progress = resolveComponent("a-progress");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "r_12 overflow-hidden bg_white pcursor relative" }, _attrs))} data-v-dbdeb6a6>`);
      if (__props.editable && ((_a = unref(isLoading).user) == null ? void 0 : _a.current_role) == "admin") {
        _push(ssrRenderComponent(_component_a_dropdown, null, {
          overlay: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_menu, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => handleButton("edit", __props.lessoncarddata.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;" data-v-dbdeb6a6${_scopeId3}>Edit</a>`);
                        } else {
                          return [
                            createVNode("a", { href: "javascript:;" }, "Edit")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_menu_item, {
                      onClick: ($event) => handleButton("delete", __props.lessoncarddata.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<a href="javascript:;" data-v-dbdeb6a6${_scopeId3}>Delete</a>`);
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
                          _push4(`<a href="javascript:;" data-v-dbdeb6a6${_scopeId3}>3rd menu item</a>`);
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
                        onClick: ($event) => handleButton("edit", __props.lessoncarddata.id)
                      }, {
                        default: withCtx(() => [
                          createVNode("a", { href: "javascript:;" }, "Edit")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_a_menu_item, {
                        onClick: ($event) => handleButton("delete", __props.lessoncarddata.id)
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
                      onClick: ($event) => handleButton("edit", __props.lessoncarddata.id)
                    }, {
                      default: withCtx(() => [
                        createVNode("a", { href: "javascript:;" }, "Edit")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_a_menu_item, {
                      onClick: ($event) => handleButton("delete", __props.lessoncarddata.id)
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
              _push2(`<div class="!bg-white r_8 absolute right-2 top-2 py-1 threedot" data-v-dbdeb6a6${_scopeId}><img loading="lazy" class="rotate-90 h-5 threedot"${ssrRenderAttr("src", _imports_3)} alt="" data-v-dbdeb6a6${_scopeId}></div>`);
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
      _push(`<img loading="lazy" class="aspect-video w-full object-cover"${ssrRenderAttr("src", (_b = __props.lessoncarddata) == null ? void 0 : _b.cover)} alt="" data-v-dbdeb6a6><div class="p-3 space-y-1" data-v-dbdeb6a6><h1 class="font-bold" data-v-dbdeb6a6>${ssrInterpolate(__props.lessoncarddata.title)}</h1><pre class="whitespace-pre-line line-clamp-2" data-v-dbdeb6a6>        ${ssrInterpolate(__props.lessoncarddata.description)}
    </pre><ul class="flex items-center gap-2 text-sm" data-v-dbdeb6a6><li class="full_flex gap-1" data-v-dbdeb6a6><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt="" data-v-dbdeb6a6><span class="c_main" data-v-dbdeb6a6>${ssrInterpolate(__props.lessoncarddata.likes_count)}</span></li><li class="font-semibold" data-v-dbdeb6a6> $${ssrInterpolate(__props.lessoncarddata.price)}</li></ul>`);
      _push(ssrRenderComponent(_component_a_progress, {
        class: "w-full",
        "stroke-color": "#FF852E",
        percent: __props.lessoncarddata.finished_count * 100 / __props.lessoncarddata.lessons_count,
        size: 3
      }, null, _parent));
      _push(`<p class="text-sm !-mt-2 pb-3" data-v-dbdeb6a6>${ssrInterpolate(__props.lessoncarddata.finished_count)}/${ssrInterpolate(__props.lessoncarddata.lessons_count)} completed </p><div class="flex items-center text-sm pt-2 pcursor border-t border-t-[#FF852E]" data-v-dbdeb6a6><div class="flex items-center -space-x-2 w-[80%] py-2 overflow-hidden overflow-x-auto removeScroll" data-v-dbdeb6a6><!--[-->`);
      ssrRenderList(16, (i) => {
        _push(`<img loading="lazy" class="h-7 w-7 min-w-[28px] r_f object-cover" src="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/w/o/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&amp;wid=600&amp;hei=800&amp;scl=2.88" alt="" data-v-dbdeb6a6>`);
      });
      _push(`<!--]--></div><button class="c_ca1 pl-2 whitespace-nowrap" data-v-dbdeb6a6>225</button></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Group/Lessons/Card.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dbdeb6a6"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=Card-D6hP8oJb.mjs.map
