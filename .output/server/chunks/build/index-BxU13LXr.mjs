import { _ as __nuxt_component_0 } from './CategorySlider-DeqTdbRv.mjs';
import { _ as _sfc_main$4 } from './InfiniteScroll-mRHGMOo5.mjs';
import { _ as __nuxt_component_0$1 } from './LoadingDiv-BWSiFsIO.mjs';
import { _ as __nuxt_component_1 } from './client-only-Db1Q_2tj.mjs';
import { watch, unref, useSSRContext, ref, resolveComponent, mergeProps, isRef, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttrs, ssrRenderVNode, ssrRenderAttr } from 'vue/server-renderer';
import { _ as _imports_0 } from './a_star-Cwe52rgh.mjs';
import { o as useGroupsStore, f as useCategoryStore, j as useCoursesStore, h as useLessonsStore, e as useLoadingStore, u as useRouter } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './Card-BK_fjzyg.mjs';
import './arrow-BRQWUfje.mjs';
import './Card-Bw0F6ac4.mjs';
import './threedot-VMR5JrW9.mjs';
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

const _sfc_main$3 = {
  __name: "Lesson",
  __ssrInlineRender: true,
  setup(__props) {
    const useLesson = useLessonsStore();
    const isLoading = useLoadingStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_LoadingDiv = __nuxt_component_0$1;
      const _component_ClientOnly = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(isLoading).isLoadingType("lessons")) {
        _push(`<!--[-->`);
        ssrRenderList(12, (i) => {
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "w-full h-full min-h-[360px] r_12 !overflow-hidden" }, null, _parent));
        });
        _push(`<!--]-->`);
      } else if ((_a = unref(useLesson).store.all_lessons) == null ? void 0 : _a.length) {
        _push(`<section class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"><!--[-->`);
        ssrRenderList(unref(useLesson).store.all_lessons, (i) => {
          var _a2;
          _push(`<div class="r_12 overflow-hidden bg_white pcursor"><div class="aspect-video w-full object-cover bg-black">`);
          _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
          _push(`</div><div class="p-3 space-y-2"><h1 class="font-bold">${ssrInterpolate(i.title)}</h1><pre class="whitespace-pre-line line-clamp-2 max-h-[42px]">${(_a2 = i.content) != null ? _a2 : ""}</pre><ul class="flex items-center gap-2 text-sm"><li class="full_flex gap-1"><img loading="lazy"${ssrRenderAttr("src", _imports_0)} alt=""><span class="c_main">${ssrInterpolate(i.likes_count)}</span></li><li class="font-semibold"> $${ssrInterpolate(i.low_price)}</li></ul><div class="flex gap-2"><!--[-->`);
          ssrRenderList(3, (i2) => {
            _push(`<button class="text-sm font-medium py-1 px-2 bg_cf2 r_8"> 3 courses </button>`);
          });
          _push(`<!--]--></div><div class="flex items-center text-sm pt-2 pcursor"><div class="flex items-center -space-x-2 w-[70%] overflow-hidden overflow-x-auto removeScroll"><!--[-->`);
          ssrRenderList(16, (i2) => {
            _push(`<img loading="lazy" class="h-7 w-7 min-w-[28px] r_f object-cover" src="https://world-schools.com/wp-content/uploads/2023/01/IMG-Academy-cover-WS.webp" alt="">`);
          });
          _push(`<!--]--></div><button class="c_ca1 pl-2 whitespace-nowrap">225 members</button></div></div></div>`);
        });
        _push(`<!--]--></section>`);
      } else {
        _push(`<section class="text-center py-40 col-span-5"> Ma&#39;lumotlar yo&#39;q </section>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Home/Lesson.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "Courses",
  __ssrInlineRender: true,
  setup(__props) {
    const isLoading = useLoadingStore();
    const useCourses = useCoursesStore();
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_LoadingDiv = __nuxt_component_0$1;
      const _component_PageGroupLessonsCard = __nuxt_component_1$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" }, _attrs))}>`);
      if (unref(isLoading).isLoadingType("groups")) {
        _push(`<!--[-->`);
        ssrRenderList(12, (i) => {
          _push(ssrRenderComponent(_component_LoadingDiv, { class: "w-full h-full min-h-[360px] r_12 !overflow-hidden" }, null, _parent));
        });
        _push(`<!--]-->`);
      } else if ((_a = unref(useCourses).store.courses) == null ? void 0 : _a.length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(useCourses).store.courses, (i) => {
          _push(ssrRenderComponent(_component_PageGroupLessonsCard, {
            lessoncarddata: i,
            editable: false
          }, null, _parent));
        });
        _push(`<!--]-->`);
      } else {
        _push(`<section class="text-center py-40 col-span-4"> Ma&#39;lumotlar yo&#39;q </section>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Home/Courses.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const home_tabs = [
  // {
  //   id: 1,
  //   name: "Barchasi",
  //   url: "/",
  //   role: [],
  // },
  {
    id: 1,
    name: "Guruhlar",
    url: "/",
    component: "InfiniteScroll",
    role: []
  },
  {
    id: 2,
    name: "Kurslar",
    url: "/",
    component: "PageHomeCourses",
    role: []
  },
  {
    id: 3,
    name: "Darslar",
    url: "/",
    component: "PageHomeLesson",
    role: []
  }
];
const _sfc_main$1 = {
  __name: "Tabs",
  __ssrInlineRender: true,
  setup(__props) {
    useRouter();
    const activeKey = ref(1);
    const InfiniteScroll = _sfc_main$4;
    const PageHomeLesson = _sfc_main$3;
    const PageHomeCourses = _sfc_main$2;
    const tabsComponents = {
      InfiniteScroll,
      PageHomeLesson,
      PageHomeCourses
    };
    const getComponent = (componentName) => {
      return tabsComponents[componentName];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_tabs = resolveComponent("a-tabs");
      const _component_a_tab_pane = resolveComponent("a-tab-pane");
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "tabnav" }, _attrs))}><div>`);
      _push(ssrRenderComponent(_component_a_tabs, {
        activeKey: unref(activeKey),
        "onUpdate:activeKey": ($event) => isRef(activeKey) ? activeKey.value = $event : null,
        animated: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(home_tabs), (i) => {
              _push2(ssrRenderComponent(_component_a_tab_pane, {
                key: i.id,
                tab: i.name
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(getComponent(i.component)), { editable: false }, null), _parent3, _scopeId2);
                  } else {
                    return [
                      (openBlock(), createBlock(resolveDynamicComponent(getComponent(i.component)), { editable: false }))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(home_tabs), (i) => {
                return openBlock(), createBlock(_component_a_tab_pane, {
                  key: i.id,
                  tab: i.name
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(getComponent(i.component)), { editable: false }))
                  ]),
                  _: 2
                }, 1032, ["tab"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></nav>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Tabs.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const useGroups = useGroupsStore();
    const useCategory = useCategoryStore();
    const useCourses = useCoursesStore();
    const useLessons = useLessonsStore();
    const isLoading = useLoadingStore();
    const router = useRouter();
    watch(() => router.currentRoute.value, () => {
      getData();
    });
    function getData() {
      useGroups.getGroups();
      useLessons.getLessons();
      useCourses.getCourses();
    }
    watch(() => isLoading.filter.category_id, () => {
      isLoading.store.subcategory_id = [];
      isLoading.applyFilters();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategorySlider = __nuxt_component_0;
      const _component_Tabs = _sfc_main$1;
      _push(`<!--[--><nav class="mb-5 md:mt-0 -mt-5 overflow-hidden overflow-x-auto whitespace-nowrap removeScroll"><ul class="flex md:text-sm text-xs gap-2"><!--[-->`);
      ssrRenderList(unref(useCategory).store.category, (i) => {
        _push(`<li class="flex flex-col items-center space-y-1 pcursor"><p class="${ssrRenderClass([_ctx.$route.query.category_id == i.id ? "bg_main" : "bg_bg", "flex items-center justify-center text-center text-[32px] rounded-full p-2 min-w-[64px] max-w-[64px] max-h-[64px]"])}">${ssrInterpolate(i.icon)}</p><p>${ssrInterpolate(i.title)}</p></li>`);
      });
      _push(`<!--]--></ul></nav>`);
      _push(ssrRenderComponent(_component_CategorySlider, {
        category: unref(useCategory).store.subcategory.filter((item) => item.category_id == (_ctx.$route.query.category_id || item.category_id)),
        class: "mb-5"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Tabs, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BxU13LXr.mjs.map
