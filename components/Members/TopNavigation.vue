<!-- components/TopNavigation.vue -->
<template>
    <div class="flex justify-between items-center bg-white shadow px-6 py-4">
      <div>
        <h2 class="text-xl font-semibold text-gray-800">{{ pageTitle }}</h2>
      </div>
      <div class="flex items-center space-x-4">
        <button class="relative">
          <BellIcon class="w-6 h-6 text-gray-600" />
          <span
            class="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"
          ></span>
        </button>
        <div class="flex items-center">
          <img
            src="/path/to/profile.jpg"
            alt="User Avatar"
            class="w-10 h-10 rounded-full object-cover"
          />
          <div class="ml-2">
            <p class="text-gray-800 font-semibold">John Doe</p>
            <p class="text-gray-600 text-sm">Admin</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { BellIcon } from '@heroicons/vue/outline';
  
  const pageTitle = ref('Dashboard');
  </script>
  