<script setup>
import { ref, onMounted } from 'vue';
import Highcharts from 'highcharts';

const chartContainer = ref(null);
const chartInstance = ref(null);

// To'lovlar haqidagi ma'lumotlar
const chartOptions = ref({
  chart: {
    type: 'pie',
  },
  title: {
    text: 'Course Payments Breakdown'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>${point.y:.2f}</b> ({point.percentage:.1f}%)'
  },
  accessibility: {
    point: {
      valueSuffix: '$'
    }
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: ${point.y:.2f} ({point.percentage:.1f}%)'
      }
    }
  },
  series: [
    {
      name: 'Payments',
      colorByPoint: true,
      data: [
        { name: 'Frontend Development Course', y: 1200 },
        { name: 'Backend Development Course', y: 950, sliced: true, selected: true },
        { name: 'UI/UX Design Course', y: 700 },
        { name: 'Data Science Course', y: 850 },
        { name: 'Digital Marketing Course', y: 400 }
      ]
    }
  ]
});

onMounted(() => {
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
