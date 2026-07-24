import { _ as __nuxt_component_0 } from './CategorySlider-xG7UGu7Z.mjs';
import { _ as _sfc_main$1 } from './Avatar-ppAiHF0k.mjs';
import { computed, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc, e as useLoadingStore, g as useAuthStore, p as useGroupsStore, v as useRoute, u as useRouter } from './server.mjs';
import './LoadingDiv-CLaVNDei.mjs';
import './arrow-BRQWUfje.mjs';
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
    useLoadingStore();
    const useAuth = useAuthStore();
    const useGroups = useGroupsStore();
    const route = useRoute();
    const router = useRouter();
    const groups = computed(() => {
      const data = useGroups.store.groups;
      return Array.isArray(data) ? data : (data == null ? void 0 : data.groups) || [];
    });
    const selectedGroupId = computed(() => {
      var _a;
      return (_a = JSON.parse(route.query.group_id || "[]")) == null ? void 0 : _a[0];
    });
    const selectedGroup = computed(() => groups.value.find((group) => group.id == selectedGroupId.value));
    const analyticsCourses = computed(() => {
      var _a;
      return (((_a = useAuth.store.analytics) == null ? void 0 : _a.subscriptions) || []).map((subscription) => (subscription == null ? void 0 : subscription.course) || subscription).filter(Boolean);
    });
    const selectedGroupCourses = computed(() => {
      var _a, _b, _c;
      const groupCourses = ((_a = selectedGroup.value) == null ? void 0 : _a.course) || ((_c = (_b = selectedGroup.value) == null ? void 0 : _b.subscriptions) == null ? void 0 : _c.map((item) => (item == null ? void 0 : item.course) || item));
      return (groupCourses == null ? void 0 : groupCourses.filter(Boolean)) || analyticsCourses.value;
    });
    const selectedCourseId = computed(() => {
      var _a;
      return (_a = JSON.parse(route.query.course_id || "[]")) == null ? void 0 : _a[0];
    });
    const selectedCourse = computed(() => selectedGroupCourses.value.find((course) => course.id == selectedCourseId.value));
    const selectedCourseLessons = computed(() => {
      var _a;
      return ((_a = selectedCourse.value) == null ? void 0 : _a.lessons) || [];
    });
    const getTotalAttendance = computed(() => {
      const totalAttendance = groups.value.reduce((total, group) => {
        var _a2;
        var _a;
        return total + ((_a2 = (_a = group.attendance) == null ? void 0 : _a.percentage) != null ? _a2 : 0);
      }, 0);
      return totalAttendance;
    });
    watch(selectedGroupId, (groupId) => {
      if (groupId)
        useAuth.getUserAnalytics(groupId, selectedCourseId.value);
    });
    watch(selectedGroupCourses, (courses) => {
      const courseId = selectedCourseId.value;
      if (courses.length && !courses.some((course) => course.id == courseId)) {
        router.replace({ query: { ...route.query, course_id: JSON.stringify([courses[0].id]) } });
      }
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
      const _component_CategorySlider = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      const _component_UIAvatar = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1" }, _attrs))} data-v-bd468ad5><div class="page active" id="page-dashboard" data-v-bd468ad5><div class="mb-6" data-v-bd468ad5><h2 class="text-xl font-bold" data-v-bd468ad5>Xush kelibsiz, ${ssrInterpolate((_a = unref(useAuth).store.analytics) == null ? void 0 : _a.name)}! \u{1F44B}</h2><p class="text-sm text-gray-400" data-v-bd468ad5>Bu hafta 2 ta yangi test sizni kutmoqda.</p></div><div class="space-y-3" data-v-bd468ad5>`);
      _push(ssrRenderComponent(_component_CategorySlider, {
        all: false,
        category: unref(groups),
        multiple: false,
        "query-key": "group_id",
        class: "w-full"
      }, null, _parent));
      _push(`</div><div class="grid2 grid grid-cols-2 lg:grid-cols-4 gap-4 my-6" data-v-bd468ad5><div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden" data-v-bd468ad5><div class="stat-icon bg-gold" data-v-bd468ad5><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-bd468ad5><path d="M12 20V10" data-v-bd468ad5></path><path d="M18 20V4" data-v-bd468ad5></path><path d="M6 20v-4" data-v-bd468ad5></path></svg></div><p class="text-sm text-gray-400" data-v-bd468ad5>Umumiy ball</p><p class="text-2xl font-bold" data-v-bd468ad5>${ssrInterpolate(((_c = (_b = unref(useAuth).store.analytics) == null ? void 0 : _b.ratingBallStats) == null ? void 0 : _c.currentBall) || 0)}</p>`);
      if ((_e = (_d = unref(useAuth).store.analytics) == null ? void 0 : _d.ratingBallStats) == null ? void 0 : _e.difference) {
        _push(`<p class="${ssrRenderClass([((_g = (_f = unref(useAuth).store.analytics) == null ? void 0 : _f.ratingBallStats) == null ? void 0 : _g.difference) > 0 ? "c_green" : "c_red", "text-xs text-g-600 font-semibold"])}" data-v-bd468ad5>\u2191 ${ssrInterpolate((_i = (_h = unref(useAuth).store.analytics) == null ? void 0 : _h.ratingBallStats) == null ? void 0 : _i.difference)} o&#39;rin ${ssrInterpolate((_k = (_j = unref(useAuth).store.analytics) == null ? void 0 : _j.ratingBallStats) == null ? void 0 : _k.status)}</p>`);
      } else {
        _push(`<p class="text-xs text-g-600 font-semibold" data-v-bd468ad5>O&#39;zgarishsiz</p>`);
      }
      _push(`</div><div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden" data-v-bd468ad5><div class="stat-icon bg-navy" data-v-bd468ad5><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-bd468ad5><path d="M12 2l2.4 6.9H22l-5.8 4.3 2.2 7-6.4-4.6L5.6 20.2l2.2-7L2 8.9h7.6z" data-v-bd468ad5></path></svg></div><p class="text-sm text-gray-400" data-v-bd468ad5>Guruh reytingi</p><p class="text-2xl font-bold" data-v-bd468ad5>#${ssrInterpolate(((_m = (_l = unref(useAuth).store.analytics) == null ? void 0 : _l.ratingStats) == null ? void 0 : _m.currentPosition) || 0)}</p>`);
      if ((_o = (_n = unref(useAuth).store.analytics) == null ? void 0 : _n.ratingStats) == null ? void 0 : _o.difference) {
        _push(`<p class="${ssrRenderClass([((_q = (_p = unref(useAuth).store.analytics) == null ? void 0 : _p.ratingStats) == null ? void 0 : _q.difference) > 0 ? "c_green" : "c_red", "text-xs text-g-600 font-semibold"])}" data-v-bd468ad5>\u2191 ${ssrInterpolate((_s = (_r = unref(useAuth).store.analytics) == null ? void 0 : _r.ratingStats) == null ? void 0 : _s.difference)} o&#39;rin ${ssrInterpolate((_u = (_t = unref(useAuth).store.analytics) == null ? void 0 : _t.ratingStats) == null ? void 0 : _u.status)}</p>`);
      } else {
        _push(`<p class="text-xs text-g-600 font-semibold" data-v-bd468ad5>O&#39;zgarishsiz</p>`);
      }
      _push(`</div><div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden" data-v-bd468ad5><div class="stat-icon bg-teal" data-v-bd468ad5><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-bd468ad5><rect x="3" y="4" width="18" height="18" rx="3" data-v-bd468ad5></rect><line x1="16" y1="2" x2="16" y2="6" data-v-bd468ad5></line><line x1="8" y1="2" x2="8" y2="6" data-v-bd468ad5></line><line x1="3" y1="10" x2="21" y2="10" data-v-bd468ad5></line></svg></div><p class="text-sm text-gray-400" data-v-bd468ad5>Davomat</p><p class="text-2xl font-bold" data-v-bd468ad5>${ssrInterpolate(unref(getTotalAttendance))}%</p><p class="text-xs text-g-600 font-semibold" data-v-bd468ad5>Iyun oyi bo&#39;yicha</p></div><div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden" data-v-bd468ad5><div class="stat-icon bg-coral" data-v-bd468ad5><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-bd468ad5><path d="M9 11l3 3L22 4" data-v-bd468ad5></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" data-v-bd468ad5></path></svg></div><p class="text-sm text-gray-400" data-v-bd468ad5>Yangi testlar</p><p class="text-2xl font-bold" data-v-bd468ad5>${ssrInterpolate(unref(selectedCourseLessons).length)}</p><p class="text-xs text-red-500 font-semibold" data-v-bd468ad5>\u23F0 Eng yaqin: 2 kun</p></div></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-5" data-v-bd468ad5><div class="xl:col-span-2 space-y-5" data-v-bd468ad5><div class="bg-white rounded-2xl border border-gray-100 p-5" data-v-bd468ad5><div class="flex items-center justify-between mb-4" data-v-bd468ad5><h3 class="text-sm font-bold" data-v-bd468ad5>Haftalik faollik</h3><span class="text-sm text-gray-400" data-v-bd468ad5>Iyun 2026</span></div><div class="flex items-end gap-2 h-24" data-v-bd468ad5><div class="flex-1 flex flex-col items-center gap-1.5 h-full" data-v-bd468ad5><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end" data-v-bd468ad5><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "45%" })}" data-v-bd468ad5></div></div><span class="text-sm text-gray-400" data-v-bd468ad5>Du</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full" data-v-bd468ad5><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end" data-v-bd468ad5><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "70%" })}" data-v-bd468ad5></div></div><span class="text-sm text-gray-400" data-v-bd468ad5>Se</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full" data-v-bd468ad5><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end" data-v-bd468ad5><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "42%" })}" data-v-bd468ad5></div></div><span class="text-sm text-gray-400" data-v-bd468ad5>Ch</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full" data-v-bd468ad5><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end" data-v-bd468ad5><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "88%" })}" data-v-bd468ad5></div></div><span class="text-sm text-gray-400" data-v-bd468ad5>Pa</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full" data-v-bd468ad5><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end" data-v-bd468ad5><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "60%" })}" data-v-bd468ad5></div></div><span class="text-sm text-gray-400" data-v-bd468ad5>Ju</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full" data-v-bd468ad5><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end" data-v-bd468ad5><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "30%" })}" data-v-bd468ad5></div></div><span class="text-sm text-gray-400" data-v-bd468ad5>Sh</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full" data-v-bd468ad5><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end" data-v-bd468ad5><div class="w-full bg-g-600 rounded-md" style="${ssrRenderStyle({ "height": "94%" })}" data-v-bd468ad5></div></div><span class="text-xs text-g-600 font-bold" data-v-bd468ad5>Ya</span></div></div></div><div class="bg-white rounded-2xl border border-gray-100 p-5" data-v-bd468ad5><div class="flex items-center justify-between mb-4" data-v-bd468ad5><h3 class="text-sm font-bold" data-v-bd468ad5>Navbatdagi testlar</h3>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/group/${unref(selectedGroupId) || 0}`,
        class: "text-xs text-g-600 font-semibold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Barchasi \u2192`);
          } else {
            return [
              createTextVNode("Barchasi \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(selectedCourseLessons).length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(selectedCourseLessons), (test) => {
          _push(`<div class="flex items-center gap-3 p-3 rounded-xl border border-g-100 bg-g-50/50 mb-3" data-v-bd468ad5><div class="w-10 h-10 rounded-lg bg-g-50 flex items-center justify-center flex-shrink-0" data-v-bd468ad5><svg class="w-5 h-5 text-g-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-bd468ad5><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" data-v-bd468ad5></path><rect x="9" y="3" width="6" height="4" rx="1" data-v-bd468ad5></rect><path d="M9.5 14.5 11 16l3.5-3.5" data-v-bd468ad5></path></svg></div><div class="flex-1" data-v-bd468ad5><p class="text-sm font-semibold" data-v-bd468ad5>Kvadrat tenglamalar</p><p class="text-sm text-gray-400" data-v-bd468ad5>${ssrInterpolate(test.title)} \xB7 15 savol \xB7 30 daqiqa</p></div><span class="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full" data-v-bd468ad5>2 kun</span></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="full_flex py-20" data-v-bd468ad5> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</div></div><div class="space-y-5" data-v-bd468ad5><div class="bg-white rounded-2xl border border-gray-100 p-5" data-v-bd468ad5><div class="flex items-center justify-between mb-4" data-v-bd468ad5><h3 class="text-sm font-bold" data-v-bd468ad5>Guruh reytingi</h3>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/group/${unref(selectedGroupId) || 0}?page=reyting`,
        class: "text-xs text-g-600 font-semibold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Barchasi \u2192`);
          } else {
            return [
              createTextVNode("Barchasi \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if ((_w = (_v = unref(useAuth).store.analytics) == null ? void 0 : _v.rankings) == null ? void 0 : _w.length) {
        _push(`<div class="space-y-1" data-v-bd468ad5><!--[-->`);
        ssrRenderList((_x = unref(useAuth).store.analytics) == null ? void 0 : _x.rankings, (user) => {
          var _a2, _b2, _c2;
          _push(`<div class="flex items-center gap-2.5 py-2 border-b border-gray-50" data-v-bd468ad5><span class="text-sm text-gray-400 w-4 text-center font-semibold" data-v-bd468ad5>${ssrInterpolate(user.position)}</span>`);
          _push(ssrRenderComponent(_component_UIAvatar, {
            class: "w-10 h-10 max-w-[40px] max-h-[40px]",
            src: (_a2 = user == null ? void 0 : user.user) == null ? void 0 : _a2.image
          }, null, _parent));
          _push(`<span class="text-sm flex-1" data-v-bd468ad5>${ssrInterpolate((_b2 = user == null ? void 0 : user.user) == null ? void 0 : _b2.name)} ${ssrInterpolate((_c2 = user == null ? void 0 : user.user) == null ? void 0 : _c2.surname)}</span><span class="text-sm font-bold" data-v-bd468ad5>${ssrInterpolate(user == null ? void 0 : user.ball)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="full_flex py-20" data-v-bd468ad5> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</div><div class="bg-white rounded-2xl border border-gray-100 p-5" data-v-bd468ad5><div class="flex items-center justify-between mb-4" data-v-bd468ad5><h3 class="text-sm font-bold" data-v-bd468ad5>Davomat \u2014 iyun</h3><button class="text-xs text-g-600 font-semibold hover:underline" data-page="davomat" data-v-bd468ad5>Batafsil \u2192</button></div><div class="flex flex-wrap gap-1.5" data-v-bd468ad5><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 1</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 2</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 3</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 4</div><div class="w-7 h-7 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 5</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 6</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 7</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 8</div><div class="w-7 h-7 rounded-md bg-red-50 text-red-600 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 9</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 10</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 11</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold" data-v-bd468ad5> 12</div><div class="w-7 h-7 rounded-md border-2 border-g-400 text-g-600 flex items-center justify-center text-xs font-bold" data-v-bd468ad5> 13</div></div><div class="flex gap-4 mt-3 flex-wrap" data-v-bd468ad5><span class="flex items-center gap-1.5 text-xs text-gray-400" data-v-bd468ad5><span class="w-2 h-2 rounded-sm bg-g-400" data-v-bd468ad5></span>Keldi \u2014 11</span><span class="flex items-center gap-1.5 text-xs text-gray-400" data-v-bd468ad5><span class="w-2 h-2 rounded-sm bg-amber-400" data-v-bd468ad5></span>Kechikdi \u2014 1</span><span class="flex items-center gap-1.5 text-xs text-gray-400" data-v-bd468ad5><span class="w-2 h-2 rounded-sm bg-red-400" data-v-bd468ad5></span>Kelmadi \u2014 1</span></div></div></div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd468ad5"]]);

export { index as default };
//# sourceMappingURL=index-CkMKZEN-.mjs.map
