<script setup>
import { ref, onMounted } from 'vue';
import Highcharts from 'highcharts';
import { useStripeStore } from '~/store';

const useStripe = useStripeStore();
const chartContainer = ref(null);
const chartInstance = ref(null);

watch(() => useStripe.store.groupPaymentHistory?.courseBreakdown, () => {
  setData();
});

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
      data: []
    }
  ]
});

function setData() {
  if (!useStripe.store.groupPaymentHistory?.courseBreakdown?.length) return;
  chartOptions.value.series[0].data = [];
  for (let i of useStripe.store.groupPaymentHistory?.courseBreakdown) {
    chartOptions.value.series[0]?.data.push({
      name: i["course.group.title"],
      y: +i["total"],
    })
  }
  chartInstance.value = Highcharts.chart(chartContainer.value, chartOptions.value);
}

onMounted(() => {
  if (chartContainer.value) {
    setData();
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
