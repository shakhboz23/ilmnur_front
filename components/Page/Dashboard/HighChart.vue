<script setup>
import { ref, onMounted } from 'vue';
import Highcharts from 'highcharts';
import { useLoadingStore, useWatchedStore } from '~/store';
import likeIcon from "@/assets/svg/icon/a_star.svg";
import watchIcon from "@/assets/svg/news/show.svg";
import emptyProfile from "@/assets/svg/profile/empty.svg";
const useWatched = useWatchedStore();
const isLoading = useLoadingStore();

useWatched.getWatched('group_id');

const chartContainer = ref(null);
const chartInstance = ref(null);

Highcharts.addEvent(Highcharts.Point, 'click', function () {
  useWatched.store.showUsers = true;
  if (this.series.options.className.indexOf('popup-on-click') !== -1) {
    const chart = this.series.chart;
    const date = chart.time.dateFormat('%A, %b %e, %Y', this.x);
    const text = `<b>${date}</b><br/>${this.y} ${this.series.name}`;

    const anchorX = this.plotX + this.series.xAxis.pos;
    const anchorY = this.plotY + this.series.yAxis.pos;
    const align = anchorX < chart.chartWidth - 200 ? 'left' : 'right';
    const x = align === 'left' ? anchorX + 10 : anchorX - 10;
    const y = anchorY - 30;
    if (!chart.sticky) {
      chart.sticky = chart.renderer
        .label(text, x, y, 'callout', anchorX, anchorY)
        .attr({
          align,
          fill: 'rgba(0, 0, 0, 0.75)',
          padding: 10,
          zIndex: 7 // Above series, below tooltip
        })
        .css({
          color: 'white'
        })
        .on('click', function () {
          chart.sticky = chart.sticky.destroy();
        })
        .add();
    } else {
      chart.sticky
        .attr({ align, text })
        .animate({ anchorX, anchorY, x, y }, { duration: 250 });
    }
  }
});

const chartOptions = ref({
  chart: {
    type: 'spline'
  },
  title: {
    text: 'Groups analytics'
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    title: {
      text: ''
    },
  },
  tooltip: {
    useHTML: true,
    shared: true,
    // crosshairs: true,
    formatter: function () {
      let tooltipContent = `<div style="font-size: 12px; padding: 5px;">
        <b>${Highcharts.dateFormat('%A, %b %d, %I:%M %p', this.x)}</b><br>`
        this.points.forEach(point => {
          console.log(point.point.index, "Hi")
        useWatched.store.currentIndex = point.point.index
        console.log(point, 'dslds')
        tooltipContent += `<div style="font-size: 12px; padding: 5px;">
          🔸 <span style="color:${point.series.color}">${point.series.name}: ${point.y} </span>
          <div v-if="index != 10" class="flex items-center gap-4 px-4 py-[10px]">
              <div class="w-[40px] h-[40px] min-w-[40px] max-w-[40px] bg-[#F9F9F9] rounded-full full_flex overflow-hidden">
                  ${point.point.user?.user?.image ? `<img loading="lazy" class="w-full h-full object-cover" src="${point.point.user?.user?.image}" alt="" />` : `<img loading="lazy" class="w-full h-full object-cover" src="${emptyProfile}" alt="" />`
          }
              </div>
              <a href="${point.point.user?.user?.image}" target="_blank" class="truncate w-[90%]">${point.point.user?.user?.name || ''}
              ${point.point.user?.user?.surname || ''}</a>
          </div>
        </div>`;
      })

      tooltipContent += '</div>';
      return tooltipContent;
    },
  },
  // legend: {
  //   align: 'left',
  //   verticalAlign: 'top',
  //   borderWidth: 0
  // },
  colors: ['#027DFC', '#FF852E', '#06C', '#036', '#000'],
  plotOptions: {
    series: {
      cursor: 'pointer',
      className: 'popup-on-click',
      marker: {
        symbol: 'circle',
        fillColor: '#FFFFFF',
        enabled: true,
        radius: 2.5,
        lineWidth: 1,
        lineColor: null
      }
    }
  },
  series: [
    {
      name: 'Watched',
      data: [],
    },
    {
      name: 'Likes',
      data: [],
    },
  ]
});

watch(() => useWatched.store.watched, () => {
  if (!useWatched.store.watched?.watched?.length) return;

  const watched = useWatched.store.watched?.watched?.map((item) => ({
    x: item.timestamp,
    y: item.watchedCount,
    user: item.watchedList?.records[0],
    marker: {
      symbol: `url(${watchIcon})`, // SVG yoki rasm URL
    },
  }))
  const likes = useWatched.store.watched?.likes?.map((item) => ({
    x: item.timestamp,
    y: item.likesCount,
    user: item.likesList?.records[0],
    marker: {
      symbol: `url(${watchIcon})`, // SVG yoki rasm URL
    },
  }))

  chartOptions.value.series[0].data = watched;
  chartOptions.value.series[1].data = likes;
  if (chartContainer.value) {
    chartInstance.value = Highcharts.chart(chartContainer.value, chartOptions.value);
  }
}, { deep: true })

watch(() => isLoading.store.analytics_id, () => {
  useWatched.getWatched('group_id');
})

onMounted(async () => {
  // const data = await fetch('https://www.highcharts.com/samples/data/usdeur.json')
  //   .then(response => response.json());
  // console.log(data);

  if (chartContainer.value) {
    chartInstance.value = Highcharts.chart(chartContainer.value, chartOptions.value);
  }
});
</script>

<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<style scoped>
.chart-container {
  width: 100%;
  height: 400px;
}
</style>
