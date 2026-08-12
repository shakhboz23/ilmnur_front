import { _ as _sfc_main$1 } from './InfiniteScroll-_bg0YHp6.mjs';
import { _ as __nuxt_component_0 } from './CategorySlider-xG7UGu7Z.mjs';
import { watch, unref, createVNode, resolveDynamicComponent, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrRenderVNode } from 'vue/server-renderer';
import { q as useGroupsStore, f as useCategoryStore, j as useCoursesStore, h as useLessonsStore, e as useLoadingStore, u as useRouter } from './server.mjs';
import './LoadingDiv-CLaVNDei.mjs';
import './Card-DPlvWsKw.mjs';
import './threedot-VMR5JrW9.mjs';
import './a_star-Cwe52rgh.mjs';
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
    const InfiniteScroll = _sfc_main$1;
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
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CategorySlider, {
        category: unref(useCategory).store.subcategory.filter((item) => item.category_id == (_ctx.$route.query.category_id || item.category_id)),
        class: "mb-5"
      }, null, _parent));
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(InfiniteScroll)), { editable: false }, null), _parent);
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
//# sourceMappingURL=index-C0D05OTA.mjs.map
