import { _ as __nuxt_component_0 } from './CategorySlider-DeqTdbRv.mjs';
import { _ as _sfc_main$1 } from './Avatar-ppAiHF0k.mjs';
import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { e as useLoadingStore, g as useAuthStore, o as useGroupsStore, v as useRoute, u as useRouter } from './server.mjs';
import './LoadingDiv-BWSiFsIO.mjs';
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
    useRouter();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O;
      const _component_CategorySlider = __nuxt_component_0;
      const _component_router_link = resolveComponent("router-link");
      const _component_UIAvatar = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "flex-1" }, _attrs))}><div class="page active" id="page-dashboard"><div class="mb-6"><h2 class="text-xl font-bold">Xush kelibsiz, ${ssrInterpolate((_a = unref(useAuth).store.analytics) == null ? void 0 : _a.name)}! \u{1F44B}</h2><p class="text-sm text-gray-400 mt-1">Bu hafta 2 ta yangi test sizni kutmoqda.</p></div>`);
      _push(ssrRenderComponent(_component_CategorySlider, {
        all: false,
        category: unref(useGroups).store.groups,
        multiple: false,
        class: "w-full"
      }, null, _parent));
      _push(`<div class="grid grid-cols-2 lg:grid-cols-4 gap-4 my-6"><div class="bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden"><div class="w-10 h-10 rounded-xl bg-g-50 flex items-center justify-center mb-3"><svg class="w-5 h-5 text-g-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h10"></path></svg></div><p class="text-2xl font-bold">${ssrInterpolate((_c = (_b = unref(useAuth).store.analytics) == null ? void 0 : _b.ratingBallStats) == null ? void 0 : _c.currentBall)}</p><p class="text-xs text-gray-400 mt-1">Umumiy ball</p>`);
      if ((_e = (_d = unref(useAuth).store.analytics) == null ? void 0 : _d.ratingBallStats) == null ? void 0 : _e.difference) {
        _push(`<p class="${ssrRenderClass([((_g = (_f = unref(useAuth).store.analytics) == null ? void 0 : _f.ratingBallStats) == null ? void 0 : _g.difference) > 0 ? "c_green" : "c_red", "text-xs text-g-600 font-semibold mt-2"])}">\u2191 ${ssrInterpolate((_i = (_h = unref(useAuth).store.analytics) == null ? void 0 : _h.ratingBallStats) == null ? void 0 : _i.difference)} o&#39;rin ${ssrInterpolate((_k = (_j = unref(useAuth).store.analytics) == null ? void 0 : _j.ratingBallStats) == null ? void 0 : _k.status)}</p>`);
      } else {
        _push(`<p class="text-xs text-g-600 font-semibold mt-2">O&#39;zgarishsiz</p>`);
      }
      _push(`</div><div class="bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden"><div class="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center mb-3"><svg class="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M6 9v13M18 9v13M12 5v17M9 5h6"></path></svg></div><p class="text-2xl font-bold">#${ssrInterpolate((_m = (_l = unref(useAuth).store.analytics) == null ? void 0 : _l.ratingStats) == null ? void 0 : _m.currentPosition)}</p><p class="text-xs text-gray-400 mt-1">Guruh reytingi</p>`);
      if ((_o = (_n = unref(useAuth).store.analytics) == null ? void 0 : _n.ratingStats) == null ? void 0 : _o.difference) {
        _push(`<p class="${ssrRenderClass([((_q = (_p = unref(useAuth).store.analytics) == null ? void 0 : _p.ratingStats) == null ? void 0 : _q.difference) > 0 ? "c_green" : "c_red", "text-xs text-g-600 font-semibold mt-2"])}">\u2191 ${ssrInterpolate((_s = (_r = unref(useAuth).store.analytics) == null ? void 0 : _r.ratingStats) == null ? void 0 : _s.difference)} o&#39;rin ${ssrInterpolate((_u = (_t = unref(useAuth).store.analytics) == null ? void 0 : _t.ratingStats) == null ? void 0 : _u.status)}</p>`);
      } else {
        _push(`<p class="text-xs text-g-600 font-semibold mt-2">O&#39;zgarishsiz</p>`);
      }
      _push(`</div><div class="bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden"><div class="w-10 h-10 rounded-xl bg-g-50 flex items-center justify-center mb-3"><svg class="w-5 h-5 text-g-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18M10 14l2 2 4-4"></path></svg></div><p class="text-2xl font-bold">92%</p><p class="text-xs text-gray-400 mt-1">Davomat</p><p class="text-xs text-g-600 font-semibold mt-2">\u2191 Yaxshi davom eting</p></div><div class="bg-white rounded-2xl border border-gray-100 p-5 relative overflow-hidden"><div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-3"><svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect x="9" y="3" width="6" height="4" rx="1"></rect><path d="M9 12h6M9 16h4"></path></svg></div><p class="text-2xl font-bold">${ssrInterpolate((_A = (_z = (_y = (_x = (_w = (_v = unref(useAuth).store.analytics) == null ? void 0 : _v.subscriptions) == null ? void 0 : _w.course) == null ? void 0 : _x.lessons) == null ? void 0 : _y.reyting) == null ? void 0 : _z.test_settings) == null ? void 0 : _A.length)}</p><p class="text-xs text-gray-400 mt-1">Yangi testlar</p><p class="text-xs text-red-500 font-semibold mt-2">\u23F0 Eng yaqin: 2 kun</p></div></div><div class="grid grid-cols-1 xl:grid-cols-3 gap-5"><div class="xl:col-span-2 space-y-5"><div class="bg-white rounded-2xl border border-gray-100 p-5"><div class="flex items-center justify-between mb-4"><h3 class="text-sm font-bold">Haftalik faollik</h3><span class="text-xs text-gray-400">Iyun 2026</span></div><div class="flex items-end gap-2 h-24"><div class="flex-1 flex flex-col items-center gap-1.5 h-full"><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end"><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "45%" })}"></div></div><span class="text-xs text-gray-400">Du</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full"><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end"><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "70%" })}"></div></div><span class="text-xs text-gray-400">Se</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full"><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end"><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "42%" })}"></div></div><span class="text-xs text-gray-400">Ch</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full"><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end"><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "88%" })}"></div></div><span class="text-xs text-gray-400">Pa</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full"><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end"><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "60%" })}"></div></div><span class="text-xs text-gray-400">Ju</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full"><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end"><div class="w-full bg-g-300 rounded-md" style="${ssrRenderStyle({ "height": "30%" })}"></div></div><span class="text-xs text-gray-400">Sh</span></div><div class="flex-1 flex flex-col items-center gap-1.5 h-full"><div class="flex-1 w-full bg-g-50 rounded-md overflow-hidden flex items-end"><div class="w-full bg-g-600 rounded-md" style="${ssrRenderStyle({ "height": "94%" })}"></div></div><span class="text-xs text-g-600 font-bold">Ya</span></div></div></div><div class="bg-white rounded-2xl border border-gray-100 p-5"><div class="flex items-center justify-between mb-4"><h3 class="text-sm font-bold">Navbatdagi testlar</h3>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/group/${(_C = JSON.parse(((_B = unref(route).query) == null ? void 0 : _B.subcategory_id) || "[0]")) == null ? void 0 : _C[0]}`,
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
      if ((_G = ((_F = (_E = (_D = unref(useAuth).store.analytics) == null ? void 0 : _D.subscriptions) == null ? void 0 : _E.map((item) => {
        var _a2;
        return (_a2 = item == null ? void 0 : item.course) == null ? void 0 : _a2.lessons;
      })) == null ? void 0 : _F.flat()) || []) == null ? void 0 : _G.length) {
        _push(`<!--[-->`);
        ssrRenderList(((_J = (_I = (_H = unref(useAuth).store.analytics) == null ? void 0 : _H.subscriptions) == null ? void 0 : _I.map((item) => {
          var _a2;
          return (_a2 = item == null ? void 0 : item.course) == null ? void 0 : _a2.lessons;
        })) == null ? void 0 : _J.flat()) || [], (test) => {
          _push(`<div class="flex items-center gap-3 p-3 rounded-xl border border-g-100 bg-g-50/50 mb-3"><div class="w-10 h-10 rounded-lg bg-g-50 flex items-center justify-center flex-shrink-0"><svg class="w-5 h-5 text-g-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"></path><rect x="9" y="3" width="6" height="4" rx="1"></rect><path d="M9.5 14.5 11 16l3.5-3.5"></path></svg></div><div class="flex-1"><p class="text-sm font-semibold">Kvadrat tenglamalar</p><p class="text-xs text-gray-400">${ssrInterpolate(test.title)} \xB7 15 savol \xB7 30 daqiqa</p></div><span class="text-xs font-bold bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full">2 kun</span></div>`);
        });
        _push(`<!--]-->`);
      } else {
        _push(`<div class="full_flex py-20"> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</div></div><div class="space-y-5"><div class="bg-white rounded-2xl border border-gray-100 p-5"><div class="flex items-center justify-between mb-4"><h3 class="text-sm font-bold">Guruh reytingi</h3>`);
      _push(ssrRenderComponent(_component_router_link, {
        to: `/group/${(_L = JSON.parse(((_K = unref(route).query) == null ? void 0 : _K.subcategory_id) || "[0]")) == null ? void 0 : _L[0]}?page=reyting`,
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
      if ((_N = (_M = unref(useAuth).store.analytics) == null ? void 0 : _M.rankings) == null ? void 0 : _N.length) {
        _push(`<div class="space-y-1"><!--[-->`);
        ssrRenderList((_O = unref(useAuth).store.analytics) == null ? void 0 : _O.rankings, (user) => {
          var _a2, _b2, _c2;
          _push(`<div class="flex items-center gap-2.5 py-2 border-b border-gray-50"><span class="text-xs text-gray-400 w-4 text-center font-semibold">${ssrInterpolate(user.position)}</span>`);
          _push(ssrRenderComponent(_component_UIAvatar, {
            class: "w-10 h-10 max-w-[40px] max-h-[40px]",
            src: (_a2 = user == null ? void 0 : user.user) == null ? void 0 : _a2.image
          }, null, _parent));
          _push(`<span class="text-sm flex-1">${ssrInterpolate((_b2 = user == null ? void 0 : user.user) == null ? void 0 : _b2.name)} ${ssrInterpolate((_c2 = user == null ? void 0 : user.user) == null ? void 0 : _c2.surname)}</span><span class="text-sm font-bold">${ssrInterpolate(user == null ? void 0 : user.ball)}</span></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="full_flex py-20"> Ma&#39;lumotlar topilmadi </div>`);
      }
      _push(`</div><div class="bg-white rounded-2xl border border-gray-100 p-5"><div class="flex items-center justify-between mb-4"><h3 class="text-sm font-bold">Davomat \u2014 iyun</h3><button class="text-xs text-g-600 font-semibold hover:underline" data-page="davomat">Batafsil \u2192</button></div><div class="flex flex-wrap gap-1.5"><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 1</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 2</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 3</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 4</div><div class="w-7 h-7 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center text-xs font-semibold"> 5</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 6</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 7</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 8</div><div class="w-7 h-7 rounded-md bg-red-50 text-red-600 flex items-center justify-center text-xs font-semibold"> 9</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 10</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 11</div><div class="w-7 h-7 rounded-md bg-g-50 text-g-800 flex items-center justify-center text-xs font-semibold"> 12</div><div class="w-7 h-7 rounded-md border-2 border-g-400 text-g-600 flex items-center justify-center text-xs font-bold"> 13</div></div><div class="flex gap-4 mt-3 flex-wrap"><span class="flex items-center gap-1.5 text-xs text-gray-400"><span class="w-2 h-2 rounded-sm bg-g-400"></span>Keldi \u2014 11</span><span class="flex items-center gap-1.5 text-xs text-gray-400"><span class="w-2 h-2 rounded-sm bg-amber-400"></span>Kechikdi \u2014 1</span><span class="flex items-center gap-1.5 text-xs text-gray-400"><span class="w-2 h-2 rounded-sm bg-red-400"></span>Kelmadi \u2014 1</span></div></div></div></div></div></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DT6ZrdoU.mjs.map
