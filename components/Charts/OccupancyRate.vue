<template>
    <div class="p-4 bg-white shadow rounded-lg">
      <div class="lg:flex justify-between items-center lg:pl-4 space-y-3">
        <div class="text-sm first:lg:text-xl font-">Occupancy rate</div>
        <div class="flex space-x-4">
          <select class="text-sm outline-none font-medium bg-gray-50 rounded-md px-2.5 py-2">
            <option>Month</option>
            <option>Year</option>
          </select>
          <select class="text-sm outline-none font-medium text-sm bg-gray-50 rounded-md px-2.5 py-2">
            <option>All properties</option>
            <option>Property 1</option>
            <option>Property 2</option>
          </select>
        </div>
      </div>
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
      title: {
        text: 'Today',
        style: {
          color: '#6B7280',
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (val: number) => `${val}%`,
      },
      title: {
        text: 'Occupancy rate',
        style: {
          color: '#6B7280',
        },
      },
    },
    tooltip: {
      theme: 'light',
      fillSeriesColor: false,
    },
    colors: ['#10B981'],
    grid: {
      borderColor: '#E5E7EB',
    },
  })
  
  const series = ref([
    {
      name: 'Occupancy rate',
      data: [10, 30, 40, 35, 50, 70, 60, 80, 70, 85, 90, 95],
    },
  ])
  </script>
  
  <style scoped></style>
  