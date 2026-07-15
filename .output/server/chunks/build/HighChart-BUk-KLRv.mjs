import { useSSRContext, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import Highcharts from 'highcharts';
import { _ as _export_sfc, t as useWatchedStore, e as useLoadingStore } from './server.mjs';
import { w as watchIcon } from './show-DYCP6gan.mjs';
import { e as emptyProfile } from './empty-DGKECbIy.mjs';

const _sfc_main = {
  __name: "HighChart",
  __ssrInlineRender: true,
  setup(__props) {
    const useWatched = useWatchedStore();
    const isLoading = useLoadingStore();
    useWatched.getWatched("group_id");
    const chartContainer = ref(null);
    const chartInstance = ref(null);
    Highcharts.addEvent(Highcharts.Point, "click", function() {
      useWatched.store.showUsers = true;
      if (this.series.options.className.indexOf("popup-on-click") !== -1) {
        const chart = this.series.chart;
        const date = chart.time.dateFormat("%A, %b %e, %Y", this.x);
        const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;
        const anchorX = this.plotX + this.series.xAxis.pos;
        const anchorY = this.plotY + this.series.yAxis.pos;
        const align = anchorX < chart.chartWidth - 200 ? "left" : "right";
        const x = align === "left" ? anchorX + 10 : anchorX - 10;
        const y = anchorY - 30;
        if (!chart.sticky) {
          chart.sticky = chart.renderer.label(text, x, y, "callout", anchorX, anchorY).attr({
            align,
            fill: "rgba(0, 0, 0, 0.75)",
            padding: 10,
            zIndex: 7
            // Above series, below tooltip
          }).css({
            color: "white"
          }).on("click", function() {
            chart.sticky = chart.sticky.destroy();
          }).add();
        } else {
          chart.sticky.attr({ align, text }).animate({ anchorX, anchorY, x, y }, { duration: 250 });
        }
      }
    });
    const chartOptions = ref({
      chart: {
        type: "spline"
      },
      title: {
        text: "Groups analytics"
      },
      xAxis: {
        type: "datetime"
      },
      yAxis: {
        title: {
          text: ""
        }
      },
      tooltip: {
        useHTML: true,
        shared: true,
        // crosshairs: true,
        formatter: function() {
          let tooltipContent = `<div style="font-size: 12px; padding: 5px;">
        <b>${Highcharts.dateFormat("%A, %b %d, %I:%M %p", this.x)}</b><br>`;
          this.points.forEach((point) => {
            var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
            console.log(point.point.index, "Hi");
            useWatched.store.currentIndex = point.point.index;
            console.log(point, "dslds");
            tooltipContent += `<div style="font-size: 12px; padding: 5px;">
          \u{1F538} <span style="color:${point.series.color}">${point.series.name}: ${point.y} </span>
          <div v-if="index != 10" class="flex items-center gap-4 px-4 py-[10px]">
              <div class="w-[40px] h-[40px] min-w-[40px] max-w-[40px] bg-[#F9F9F9] rounded-full full_flex overflow-hidden">
                  ${((_b = (_a = point.point.user) == null ? void 0 : _a.user) == null ? void 0 : _b.image) ? `<img loading="lazy" class="w-full h-full object-cover" src="${(_d = (_c = point.point.user) == null ? void 0 : _c.user) == null ? void 0 : _d.image}" alt="" />` : `<img loading="lazy" class="w-full h-full object-cover" src="${emptyProfile}" alt="" />`}
              </div>
              <a href="${(_f = (_e = point.point.user) == null ? void 0 : _e.user) == null ? void 0 : _f.image}" target="_blank" class="truncate w-[90%]">${((_h = (_g = point.point.user) == null ? void 0 : _g.user) == null ? void 0 : _h.name) || ""}
              ${((_j = (_i = point.point.user) == null ? void 0 : _i.user) == null ? void 0 : _j.surname) || ""}</a>
          </div>
        </div>`;
          });
          tooltipContent += "</div>";
          return tooltipContent;
        }
      },
      // legend: {
      //   align: 'left',
      //   verticalAlign: 'top',
      //   borderWidth: 0
      // },
      colors: ["#027DFC", "#FF852E", "#06C", "#036", "#000"],
      plotOptions: {
        series: {
          cursor: "pointer",
          className: "popup-on-click",
          marker: {
            symbol: "circle",
            fillColor: "#FFFFFF",
            enabled: true,
            radius: 2.5,
            lineWidth: 1,
            lineColor: null
          }
        }
      },
      series: [
        {
          name: "Watched",
          data: []
        },
        {
          name: "Likes",
          data: []
        }
      ]
    });
    watch(() => useWatched.store.watched, () => {
      var _a, _b, _c, _d, _e, _f;
      if (!((_b = (_a = useWatched.store.watched) == null ? void 0 : _a.watched) == null ? void 0 : _b.length))
        return;
      const watched = (_d = (_c = useWatched.store.watched) == null ? void 0 : _c.watched) == null ? void 0 : _d.map((item) => {
        var _a2;
        return {
          x: item.timestamp,
          y: item.watchedCount,
          user: (_a2 = item.watchedList) == null ? void 0 : _a2.records[0],
          marker: {
            symbol: `url(${watchIcon})`
            // SVG yoki rasm URL
          }
        };
      });
      const likes = (_f = (_e = useWatched.store.watched) == null ? void 0 : _e.likes) == null ? void 0 : _f.map((item) => {
        var _a2;
        return {
          x: item.timestamp,
          y: item.likesCount,
          user: (_a2 = item.likesList) == null ? void 0 : _a2.records[0],
          marker: {
            symbol: `url(${watchIcon})`
            // SVG yoki rasm URL
          }
        };
      });
      chartOptions.value.series[0].data = watched;
      chartOptions.value.series[1].data = likes;
      if (chartContainer.value) {
        chartInstance.value = Highcharts.chart(chartContainer.value, chartOptions.value);
      }
    }, { deep: true });
    watch(() => isLoading.store.analytics_id, () => {
      useWatched.getWatched("group_id");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "chartContainer",
        ref: chartContainer,
        class: "chart-container"
      }, _attrs))} data-v-3c0eb9a8></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Page/Dashboard/HighChart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3c0eb9a8"]]);

export { __nuxt_component_6 as _ };
//# sourceMappingURL=HighChart-BUk-KLRv.mjs.map
