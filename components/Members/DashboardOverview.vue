<!-- components/DashboardOverview.vue -->
<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div
        v-for="stat in stats"
        :key="stat.title"
        class="p-6 bg-white rounded-lg shadow flex items-center"
      >
        <div
          :class="stat.iconBg"
          class="p-3 rounded-full text-white mr-4"
        >
          <stat.icon class="w-6 h-6" />
        </div>
        <div>
          <p class="text-sm text-gray-500">{{ stat.title }}</p>
          <p class="text-xl font-semibold text-gray-800">{{ stat.value }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { UsersIcon, BriefcaseIcon, CurrencyDollarIcon, CheckCircleIcon } from '@heroicons/vue/solid';
  
  const stats = [
    {
      title: 'Total Members',
      value: 128,
      icon: UsersIcon,
      iconBg: 'bg-blue-500',
    },
    {
      title: 'Active Properties',
      value: 56,
      icon: BriefcaseIcon,
      iconBg: 'bg-green-500',
    },
    {
      title: 'Monthly Revenue',
      value: '$24,000',
      icon: CurrencyDollarIcon,
      iconBg: 'bg-yellow-500',
    },
    {
      title: 'Pending Requests',
      value: 12,
      icon: CheckCircleIcon,
      iconBg: 'bg-red-500',
    },
  ];
  </script>
  