<script setup>
import { ref, onMounted } from 'vue';
import Highcharts from 'highcharts';
import { useLoadingStore, useWatchedStore } from '~/store';

const useWatched = useWatchedStore();
const isLoading = useLoadingStore();

useWatched.getWatched('group_id');

const chartContainer = ref(null);
const chartInstance = ref(null);

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
      text: 'Exchange rate'
    },
  },
  colors: ['#6CF', '#39F', '#06C', '#036', '#000'],
  plotOptions: {
    series: {
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
      data: []
    }
  ]
});

watch(() => useWatched.store.watched, () => {
  const watched = [];
  for (let i of useWatched.store.watched) {
    watched.push([i.createdAt * 1000, i.id])
  }
  chartOptions.value.series[0].data = watched;
  if (chartContainer.value) {
    chartInstance.value = Highcharts.chart(chartContainer.value, chartOptions.value);
  }
}, { deep: true, immediate: true })

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
