import { _ as __nuxt_component_0 } from './CategorySlider-xG7UGu7Z.mjs';
import { _ as _sfc_main$1 } from './Avatar-ppAiHF0k.mjs';
import { computed, watch, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderList, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, e as useLoadingStore, g as useAuthStore, q as useGroupsStore, v as useRoute, u as useRouter } from './server.mjs';
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
    const isLoading = useLoadingStore();
    const useAuth = useAuthStore();
    const useGroups = useGroupsStore();
    const route = useRoute();
    useRouter();
    const groups = computed(() => {
      const data = useGroups.store.groups;
      return Array.isArray(data) ? data : (data == null ? void 0 : data.groups) || [];
    });
    const selectedGroupId = computed(() => {
      var _a;
      return (_a = JSON.parse(route.query.group_id || "[]")) == null ? void 0 : _a[0];
    });
    computed(() => groups.value.find((group) => group.id == selectedGroupId.value));
    const analytics = computed(() => useAuth.store.analytics || {});
    const ratingBall = computed(() => analytics.value.ratingBallStats || {});
    const ratingPosition = computed(() => analytics.value.ratingStats || {});
    const attendanceStats = computed(() => analytics.value.attendanceStats || {});
    const weeklyActivity = computed(() => analytics.value.weeklyActivity || []);
    const upcomingTests = computed(() => analytics.value.upcomingTests || []);
    const rankings = computed(() => analytics.value.rankings || []);
    const nearestTest = computed(() => upcomingTests.value[0] || null);
    const testsThisWeekCount = computed(() => {
      const now = Date.now();
      const weekMs = 7 * 24 * 60 * 60 * 1e3;
      return upcomingTests.value.filter((test) => {
        const diff = new Date(test.start_date).getTime() - now;
        return diff >= 0 && diff <= weekMs;
      }).length;
    });
    const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"];
    const monthLabel = computed(() => {
      const { year, month } = attendanceStats.value;
      return month ? `${monthNames[month - 1]} ${year}` : "";
    });
    const weekDayLabels = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"];
    const calendarLeadingBlanks = computed(() => {
      const { year, month } = attendanceStats.value;
      if (!year || !month)
        return 0;
      const firstDay = new Date(year, month - 1, 1).getDay();
      return (firstDay + 6) % 7;
    });
    function pad(value) {
      return String(value).padStart(2, "0");
    }
    const todayKey = computed(() => {
      const now = /* @__PURE__ */ new Date();
      return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
    });
    function isCurrentUser(rankingUser) {
      var _a, _b;
      return ((_a = rankingUser == null ? void 0 : rankingUser.user) == null ? void 0 : _a.id) === ((_b = isLoading.user) == null ? void 0 : _b.id);
    }
    function statusArrow(status) {
      if (status === "ko'tarildi" || status === "oshdi" || status === "yangi")
        return "\u2191";
      if (status === "tushdi" || status === "kamaydi")
        return "\u2193";
      return "";
    }
    function statusClass(status) {
      if (status === "ko'tarildi" || status === "oshdi" || status === "yangi")
        return "c_green";
      if (status === "tushdi" || status === "kamaydi")
        return "c_red";
      return "text-g-600";
    }
    function weeklyBarClass(day) {
      if (day.status === "present")
        return "bg-g-600";
      if (day.status === "late")
        return "bg-amber-400";
      if (day.status === "absent")
        return "bg-red-400";
      if (day.status === "upcoming")
        return "bg-g-100";
      return "";
    }
    function calendarDayClass(day) {
      const classes = [];
      if (day.status === "present")
        classes.push("bg-g-50 text-g-800");
      else if (day.status === "late")
        classes.push("bg-amber-50 text-amber-700");
      else if (day.status === "absent")
        classes.push("bg-red-50 text-red-600");
      else if (day.status === "upcoming")
        classes.push("text-gray-300");
      else
        classes.push("text-gray-200");
      if (day.date === todayKey.value)
        classes.push("border-2 border-g-400 font-bold");
      return classes;
    }
    function testBadgeClass(startDate) {
      const diffDays = Math.round((new Date(startDate).setHours(0, 0, 0, 0) - (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)) / 864e5);
      if (diffDays <= 1)
        return "bg-red-100 text-red-600";
      if (diffDays <= 3)
        return "bg-amber-100 text-amber-700";
      return "bg-g-100 text-g-600";
    }
    function daysUntil(dateStr) {
      if (!dateStr)
        return "";
      const diffDays = Math.round((new Date(dateStr).setHours(0, 0, 0, 0) - (/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)) / 864e5);
      if (diffDays <= 0)
        return "Bugun";
      if (diffDays === 1)
        return "Ertaga";
      return `${diffDays} kun`;
    }
    watch(selectedGroupId, (groupId) => {
      if (groupId)
        useAuth.getUserAnalytics(groupId);
    }, { immediate: true });
    return (_ctx, _push, _parent, _attrs) => {
      var _a2;
      var _a, _b;
      const _component_CategorySlider = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      const _component_UIAvatar = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1" }, _attrs))} data-v-562ee00f><div class="page active" id="page-dashboard" data-v-562ee00f><div class="mb-6" data-v-562ee00f><h2 class="text-xl font-bold" data-v-562ee00f>Xush kelibsiz, ${ssrInterpolate((_a = unref(useAuth).store.analytics) == null ? void 0 : _a.name)}! \u{1F44B}</h2>`);
      if (unref(testsThisWeekCount)) {
        _push(`<p class="text-sm text-gray-400" data-v-562ee00f>Bu hafta ${ssrInterpolate(unref(testsThisWeekCount))} ta yangi test sizni kutmoqda.</p>`);
      } else {
        _push(`<p class="text-sm text-gray-400" data-v-562ee00f>Hozircha yangi testlar yo&#39;q.</p>`);
      }
      _push(`</div><div class="space-y-3" data-v-562ee00f>`);
      _push(ssrRenderComponent(_component_CategorySlider, {
        all: false,
        category: unref(groups),
        multiple: false,
        "query-key": "group_id",
        class: "w-full"
      }, null, _parent));
      _push(`</div><div class="grid2 grid grid-cols-2 lg:grid-cols-4 gap-4 my-6" data-v-562ee00f><div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden" data-v-562ee00f><div class="stat-icon bg-gold" data-v-562ee00f><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-562ee00f><path d="M12 20V10" data-v-562ee00f></path><path d="M18 20V4" data-v-562ee00f></path><path d="M6 20v-4" data-v-562ee00f></path></svg></div><p class="text-sm text-gray-400" data-v-562ee00f>Umumiy ball</p><p class="text-2xl font-bold" data-v-562ee00f>${ssrInterpolate(unref(ratingBall).currentBall || 0)}</p>`);
      if (unref(ratingBall).difference) {
        _push(`<p class="${ssrRenderClass([statusClass(unref(ratingBall).status), "text-xs font-semibold"])}" data-v-562ee00f>${ssrInterpolate(statusArrow(unref(ratingBall).status))} ${ssrInterpolate(unref(ratingBall).difference)} ball ${ssrInterpolate(unref(ratingBall).status)}</p>`);
      } else {
        _push(`<p class="text-xs text-g-600 font-semibold" data-v-562ee00f>O&#39;zgarishsiz</p>`);
      }
      _push(`</div><div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden" data-v-562ee00f><div class="stat-icon bg-navy" data-v-562ee00f><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-562ee00f><path d="M12 2l2.4 6.9H22l-5.8 4.3 2.2 7-6.4-4.6L5.6 20.2l2.2-7L2 8.9h7.6z" data-v-562ee00f></path></svg></div><p class="text-sm text-gray-400" data-v-562ee00f>Guruh reytingi</p><p class="text-2xl font-bold" data-v-562ee00f>#${ssrInterpolate(unref(ratingPosition).currentPosition || 0)}</p>`);
      if (unref(ratingPosition).difference) {
        _push(`<p class="${ssrRenderClass([statusClass(unref(ratingPosition).status), "text-xs font-semibold"])}" data-v-562ee00f>${ssrInterpolate(statusArrow(unref(ratingPosition).status))} ${ssrInterpolate(unref(ratingPosition).difference)} o&#39;rin ${ssrInterpolate(unref(ratingPosition).status)}</p>`);
      } else {
        _push(`<p class="text-xs text-g-600 font-semibold" data-v-562ee00f>O&#39;zgarishsiz</p>`);
      }
      _push(`</div><div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden" data-v-562ee00f><div class="stat-icon bg-teal" data-v-562ee00f><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-562ee00f><rect x="3" y="4" width="18" height="18" rx="3" data-v-562ee00f></rect><line x1="16" y1="2" x2="16" y2="6" data-v-562ee00f></line><line x1="8" y1="2" x2="8" y2="6" data-v-562ee00f></line><line x1="3" y1="10" x2="21" y2="10" data-v-562ee00f></line></svg></div><p class="text-sm text-gray-400" data-v-562ee00f>Davomat</p><p class="text-2xl font-bold" data-v-562ee00f>${ssrInterpolate((_a2 = unref(attendanceStats).percentage) != null ? _a2 : 0)}%</p><p class="text-xs text-g-600 font-semibold" data-v-562ee00f>${ssrInterpolate(unref(monthLabel))} bo&#39;yicha</p></div><div class="card stat bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden" data-v-562ee00f><div class="stat-icon bg-coral" data-v-562ee00f><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" data-v-562ee00f><path d="M9 11l3 3L22 4" data-v-562ee00f></path><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" data-v-562ee00f></path></svg></div><p class="text-sm text-gray-400" data-v-562ee00f>Yangi testlar</p><p class="text-2xl font-bold" data-v-562ee00f>${ssrInterpolate(unref(upcomingTests).length)}</p>`);
      if (unref(nearestTest)) {
        _push(`<p class="text-xs text-red-500 font-semibold" data-v-562ee00f>\u23F0 Eng yaqin: ${ssrInterpolate(daysUntil(unref(nearestTest).start_date))}</p>`);
      } else {
        _push(`<p class="text-xs text-gray-400 font-semibold" data-v-562ee00f>Testlar yo&#39;q</p>`);
      }
      _push(`</div></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-5" data-v-562ee00f><div class="xl:col-span-2 space-y-5" data-v-562ee00f><div class="bg-white rounded-2xl border border-gray-100 p-5" data-v-562ee00f><div class="flex items-center justify-between mb-4" data-v-562ee00f><h3 class="text-sm font-bold" data-v-562ee00f>Haftalik faollik</h3><span class="text-sm text-gray-400" data-v-562ee00f>${ssrInterpolate(unref(monthLabel))}</span></div>`);
      if (unref(weeklyActivity).length) {
        _push(`<div class="flex items-end gap-2 h-24" data-v-562ee00f><!--[-->`);
        ssrRenderList(unref(weeklyActivity), (day) => {
          _push(`<div class="flex-1 flex flex-col items-center gap-1.5 h-full" data-v-562ee00f><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end" data-v-562ee00f>`);
          if (day.scheduled) {
            _push(`<div class="${ssrRenderClass([weeklyBarClass(day), "w-full rounded-md transition-all"])}" style="${ssrRenderStyle({ height: (day.status === "upcoming" ? 12 : day.intensity) + "%" })}" data-v-562ee00f></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><span class="${ssrRenderClass(day.date === unref(todayKey) ? "text-xs text-g-600 font-bold" : "text-sm text-gray-400")}" data-v-562ee00f>${ssrInterpolate(day.label)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="full_flex py-10 text-sm text-gray-400" data-v-562ee00f> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</div><div class="bg-white rounded-2xl border border-gray-100 p-5" data-v-562ee00f><div class="flex items-center justify-between mb-4" data-v-562ee00f><h3 class="text-sm font-bold" data-v-562ee00f>Navbatdagi testlar</h3>`);
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
      if (unref(upcomingTests).length) {
        _push(`<!--[-->`);
        ssrRenderList(unref(upcomingTests).slice(0, 6), (test) => {
          _push(`<div class="flex items-center gap-3 p-3 rounded-xl border border-g-100 bg-g-50/50 mb-3" data-v-562ee00f><div class="w-10 h-10 rounded-lg bg-g-50 flex items-center justify-center flex-shrink-0" data-v-562ee00f><svg class="w-5 h-5 text-g-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" data-v-562ee00f><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" data-v-562ee00f></path><rect x="9" y="3" width="6" height="4" rx="1" data-v-562ee00f></rect><path d="M9.5 14.5 11 16l3.5-3.5" data-v-562ee00f></path></svg></div><div class="flex-1" data-v-562ee00f><p class="text-sm font-semibold" data-v-562ee00f>${ssrInterpolate(test.lesson_title)}</p><p class="text-sm text-gray-400" data-v-562ee00f>${ssrInterpolate(test.course_title)} \xB7 ${ssrInterpolate(test.question_count)} savol`);
          if (test.duration) {
            _push(`<!--[--> \xB7 ${ssrInterpolate(test.duration)} daqiqa<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</p></div><span class="${ssrRenderClass([testBadgeClass(test.start_date), "text-xs font-bold px-2.5 py-1 rounded-full flex-shrink-0"])}" data-v-562ee00f>${ssrInterpolate(daysUntil(test.start_date))}</span></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="full_flex py-20" data-v-562ee00f> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</div></div><div class="space-y-5" data-v-562ee00f><div class="bg-white rounded-2xl border border-gray-100 p-5" data-v-562ee00f><div class="flex items-center justify-between mb-4" data-v-562ee00f><h3 class="text-sm font-bold" data-v-562ee00f>Guruh reytingi</h3>`);
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
      if (unref(rankings).length) {
        _push(`<div class="space-y-1" data-v-562ee00f><!--[-->`);
        ssrRenderList(unref(rankings), (user) => {
          var _a22, _b2, _c;
          _push(`<div class="${ssrRenderClass([isCurrentUser(user) ? "bg-g-50" : "", "flex items-center gap-2.5 py-2 border-b border-gray-50 rounded-lg px-2 -mx-2"])}" data-v-562ee00f><span class="text-sm text-gray-400 w-4 text-center font-semibold" data-v-562ee00f>${ssrInterpolate(user.position)}</span>`);
          _push(ssrRenderComponent(_component_UIAvatar, {
            class: "w-10 h-10 max-w-[40px] max-h-[40px]",
            src: (_a22 = user == null ? void 0 : user.user) == null ? void 0 : _a22.image
          }, null, _parent));
          _push(`<span class="${ssrRenderClass([isCurrentUser(user) ? "font-bold text-g-700" : "", "text-sm flex-1"])}" data-v-562ee00f>${ssrInterpolate((_b2 = user == null ? void 0 : user.user) == null ? void 0 : _b2.name)} ${ssrInterpolate((_c = user == null ? void 0 : user.user) == null ? void 0 : _c.surname)}`);
          if (isCurrentUser(user)) {
            _push(`<!--[--> (Siz)<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span><span class="text-sm font-bold" data-v-562ee00f>${ssrInterpolate(user == null ? void 0 : user.ball)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="full_flex py-20" data-v-562ee00f> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</div><div class="bg-white rounded-2xl border border-gray-100 p-5" data-v-562ee00f><div class="flex items-center justify-between mb-4" data-v-562ee00f><h3 class="text-sm font-bold" data-v-562ee00f>Davomat \u2014 ${ssrInterpolate(unref(monthLabel))}</h3>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/group/${unref(selectedGroupId) || 0}?page=activity`,
        class: "text-xs text-g-600 font-semibold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Batafsil \u2192`);
          } else {
            return [
              createTextVNode("Batafsil \u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if ((_b = unref(attendanceStats).calendar) == null ? void 0 : _b.length) {
        _push(`<!--[--><div class="grid grid-cols-7 gap-2 mb-2" data-v-562ee00f><!--[-->`);
        ssrRenderList(weekDayLabels, (d) => {
          _push(`<div class="text-center text-xs font-bold text-gray-400 uppercase" data-v-562ee00f>${ssrInterpolate(d)}</div>`);
        });
        _push(`<!--]--></div><div class="grid grid-cols-7 gap-1.5" data-v-562ee00f><!--[-->`);
        ssrRenderList(unref(calendarLeadingBlanks), (n) => {
          _push(`<div class="invisible aspect-square" data-v-562ee00f></div>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(unref(attendanceStats).calendar, (d) => {
          _push(`<div class="${ssrRenderClass([calendarDayClass(d), "aspect-square rounded-md flex items-center justify-center text-xs font-semibold"])}" data-v-562ee00f>${ssrInterpolate(d.day)}</div>`);
        });
        _push(`<!--]--></div><div class="flex gap-4 mt-3 flex-wrap" data-v-562ee00f><span class="flex items-center gap-1.5 text-xs text-gray-400" data-v-562ee00f><span class="w-2 h-2 rounded-sm bg-g-400" data-v-562ee00f></span>Keldi \u2014 ${ssrInterpolate(unref(attendanceStats).present || 0)}</span><span class="flex items-center gap-1.5 text-xs text-gray-400" data-v-562ee00f><span class="w-2 h-2 rounded-sm bg-amber-400" data-v-562ee00f></span>Kechikdi \u2014 ${ssrInterpolate(unref(attendanceStats).late || 0)}</span><span class="flex items-center gap-1.5 text-xs text-gray-400" data-v-562ee00f><span class="w-2 h-2 rounded-sm bg-red-400" data-v-562ee00f></span>Kelmadi \u2014 ${ssrInterpolate(unref(attendanceStats).absent || 0)}</span></div><!--]-->`);
      } else {
        _push(`<div class="full_flex py-20" data-v-562ee00f> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</div></div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-562ee00f"]]);

export { index as default };
//# sourceMappingURL=index-CZ6v92Ze.mjs.map
