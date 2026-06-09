import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import { _ as __nuxt_component_6 } from './HighChart-DYcIgaHu.mjs';
import { defineAsyncComponent, useSSRContext, resolveComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _imports_3 } from './arrow-BRQWUfje.mjs';
import { k as useStripeStore } from './server.mjs';

const __nuxt_component_1_lazy = defineAsyncComponent(() => import('./PieChart-BDgLRov-.mjs').then((c) => c.default || c));
const _sfc_main = {
  __name: "Analytics",
  __ssrInlineRender: true,
  setup(__props) {
    const useStripe = useStripeStore();
    const time_list = [
      "Last 28 days",
      "Last 90 days",
      "Last year"
    ];
    const statistics = [
      {
        title: "Total Views",
        key: "watched",
        icon: new URL("@/assets/svg/icon/show.svg", globalThis._importMeta_.url).href
      },
      {
        title: "Likes",
        key: "like",
        icon: new URL("@/assets/svg/icon/star.svg", globalThis._importMeta_.url).href
      },
      {
        title: "Subscribers",
        key: "subscribers",
        icon: new URL("@/assets/svg/payment/dollar.svg", globalThis._importMeta_.url).href
      },
      {
        title: "Revenue",
        key: "payment",
        icon: new URL("@/assets/svg/icon/members.svg", globalThis._importMeta_.url).href
      }
    ];
    function getTotalInfo(key, type) {
      if (!useStripe.store.groupPaymentHistory)
        return;
      const current = useStripe.store.groupPaymentHistory[`total_current_month_${key}`];
      const prev = useStripe.store.groupPaymentHistory[`total_previous_month_${key}`];
      if (type == "val") {
        return current;
      }
      if (prev == 0 && current > 0) {
        return "+100";
      } else if (current == 0 && prev > 0) {
        return "-100";
      } else if (prev == 0 && current == 0) {
        return "0";
      }
      if (prev < current) {
        return "+" + (prev / current * 100).toFixed(1);
      } else {
        return "-" + (current / prev * 100).toFixed(1);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_select = resolveComponent("a-select");
      const _component_a_option = resolveComponent("a-option");
      const _component_PageDashboardHighChart = __nuxt_component_6;
      const _component_LazyPageDashboardPieChart = __nuxt_component_1_lazy;
      _push(`<main${ssrRenderAttrs(_attrs)}><nav class="flex items-center justify-between"><div><h1 class="text-2xl font-bold">Group Analytics</h1><p class="text-gray-600">Current period: Last 28 days</p></div><div class="flex items-center gap-5">`);
      _push(ssrRenderComponent(_component_a_select, {
        class: "w-full",
        modelValue: _ctx.time,
        "onUpdate:modelValue": ($event) => _ctx.time = $event,
        "show-search": "",
        placeholder: _ctx.$t("Select time")
      }, {
        suffixIcon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="w-4"${ssrRenderAttr("src", _imports_3)} alt=""${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "w-4",
                src: _imports_3,
                alt: ""
              })
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(time_list, (item) => {
              _push2(ssrRenderComponent(_component_a_option, {
                key: item,
                label: item,
                value: item
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center gap-2"${_scopeId2}>${ssrInterpolate(item)}</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center gap-2" }, toDisplayString(item), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(time_list, (item) => {
                return createVNode(_component_a_option, {
                  key: item,
                  label: item,
                  value: item
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center gap-2" }, toDisplayString(item), 1)
                  ]),
                  _: 2
                }, 1032, ["label", "value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="bg_main text-white px-4 py-2 rounded-lg">Export</button></div></nav><section class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 my-8"><!--[-->`);
      ssrRenderList(statistics, (i) => {
        _push(`<div class="flex items-center justify-between gap-5 bg-white p-6 boxtshadow r_12"><ul><li class="text-sm">${ssrInterpolate(i.title)}</li><li class="text-2xl font-bold">${ssrInterpolate(getTotalInfo(i.key, "val"))}</li><li class="text-green-600 whitespace-nowrap text-sm">${ssrInterpolate(getTotalInfo(i.key))}% from last period </li></ul><img class="w-12 h-12 min-w-[48px] bg-blue-100 p-3 rounded-lg"${ssrRenderAttr("src", i.icon)} alt=""></div>`);
      });
      _push(`<!--]--></section><section class="grid grid-cols-2">`);
      _push(ssrRenderComponent(_component_PageDashboardHighChart, null, null, _parent));
      _push(ssrRenderComponent(_component_LazyPageDashboardPieChart, null, null, _parent));
      _push(`</section><section><h1>Top Performing Videos</h1> ... </section></main>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Analytics.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=Analytics-C899BjVo.mjs.map
