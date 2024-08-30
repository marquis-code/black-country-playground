<template>
    <div class="p-4 bg-white shadow rounded-lg">
 <section class="lg:flex justify-between items-center lg:pl-4">
    <div class="flex justify-between items-center gap-x-5">
        <div class="text-sm lg:text-xl font-">Revenue</div>
        <div class="text-sm lg:text-xl font-">0</div>
      </div>
      <div class="flex justify-between mt-4 space-x-4">
        <select class="text-sm outline-none font-medium bg-gray-50 rounded-md px-2.5 py-2">
          <option>Month</option>
          <option>Year</option>
        </select>
        <select class="text-sm outline-none font-medium bg-gray-50 rounded-md px-2.5 py-2">
          <option>All properties</option>
          <option>Property 1</option>
          <option>Property 2</option>
        </select>
      </div>
 </section>
      <client-only>
        <div class="mt-4">
          <apexchart width="100%" height="300" type="line" :options="chartOptions" :series="series"></apexchart>
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
      type: 'line',
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
      ],
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val}k`,
      },
    },
    tooltip: {
      theme: 'light',
      fillSeriesColor: false,
    },
    colors: ['#10B981', '#F59E0B'],
    legend: {
      position: 'top',
      horizontalAlign: 'right',
    },
  })
  
  const series = ref([
    {
      name: 'Income',
      data: [450, 420, 380, 420, 400, 430, 440, 460, 430, 410, 400, 390],
    },
    {
      name: 'Expense',
      data: [400, 380, 350, 380, 370, 400, 410, 420, 400, 380, 370, 360],
    },
  ])
  </script>
  
  <style scoped>
  </style>
  