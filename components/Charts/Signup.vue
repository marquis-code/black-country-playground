<template>
    <div class="p-4 bg-white shadow rounded-lg">
      <div class="flex justify-between items-center pl-4">
        <div class="text-xl font-">Sign ups</div>
        <select class="text-sm outline-none font-medium bg-gray-50 rounded-md px-3.5 py-2.5">
          <option>Today</option>
          <option>This Week</option>
          <option>This Month</option>
        </select>
      </div>
      <client-only>
        <div class="mt-4">
          <apexchart width="100%" height="470" type="bar" :options="chartOptions" :series="series"></apexchart>
        </div>
      </client-only>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const chartOptions = ref({
    chart: {
      id: 'vuechart-example',
      toolbar: { show: false },
      type: 'bar',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: false,
        columnWidth: '50%',
      },
    },
    colors: ['#1C64F2'],
    xaxis: {
      categories: [2, 4, 8, 10, 12, 16, 18, 20, 22, 24, 26, 28],
      labels: {
        style: {
          colors: '#6B7280',
        },
      },
      title: {
        text: 'Today',
        style: {
          color: '#6B7280',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val}k`,
        style: {
          colors: '#6B7280',
        },
      },
      title: {
        text: 'Users',
        style: {
          color: '#6B7280',
        },
      },
    },
    grid: {
      borderColor: '#E5E7EB',
    },
    tooltip: {
      theme: 'light',
      fillSeriesColor: false,
    },
  })
  
  const series = ref([
    {
      name: 'Users',
      data: [100, 150, 200, 250, 300, 150, 800, 450, 700, 400, 300, 100],
    },
  ])
  </script>
  
  <style scoped></style>
  