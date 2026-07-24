import { ref, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import Highcharts from 'highcharts';
import { _ as _export_sfc, k as useStripeStore } from './server.mjs';
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
  __name: "PieChart",
  __ssrInlineRender: true,
  setup(__props) {
    const useStripe = useStripeStore();
    const chartContainer = ref(null);
    const chartInstance = ref(null);
    watch(() => {
      var _a;
      return (_a = useStripe.store.groupPaymentHistory) == null ? void 0 : _a.courseBreakdown;
    }, () => {
      setData();
    });
    const chartOptions = ref({
      chart: {
        type: "pie"
      },
      title: {
        text: "Course Payments Breakdown"
      },
      tooltip: {
        pointFormat: "{series.name}: <b>${point.y:.2f}</b> ({point.percentage:.1f}%)"
      },
      accessibility: {
        point: {
          valueSuffix: "$"
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: ${point.y:.2f} ({point.percentage:.1f}%)"
          }
        }
      },
      series: [
        {
          name: "Payments",
          colorByPoint: true,
          data: []
        }
      ]
    });
    function setData() {
      var _a, _b, _c, _d;
      if (!((_b = (_a = useStripe.store.groupPaymentHistory) == null ? void 0 : _a.courseBreakdown) == null ? void 0 : _b.length))
        return;
      chartOptions.value.series[0].data = [];
      for (let i of (_c = useStripe.store.groupPaymentHistory) == null ? void 0 : _c.courseBreakdown) {
        (_d = chartOptions.value.series[0]) == null ? void 0 : _d.data.push({
          name: i["course.group.title"],
          y: +i["total"]
        });
      }
      chartInstance.value = Highcharts.chart(chartContainer.value, chartOptions.value);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "chartContainer",
        ref: chartContainer,
        class: "chart-container"
      }, _attrs))} data-v-a8acc519></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Dashboard/PieChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const PieChart = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a8acc519"]]);

export { PieChart as default };
//# sourceMappingURL=PieChart-BTiAvNC5.mjs.map
