<template>
<section class="grid grid-cols-2 gap-4">
    <div class="bg-white rounded-lg shadow p-4" v-for="itm in 2" :key="itm">
        <img :src="dynamicImage('lease-doc.png')" />
        <div class="flex justify-between items-center">
          <div class="space-y-1">
            <h6 class="text-base font-semibold text-gray-800">Cummings, Frami and Lynch a...</h6>
            <p class="text-xs text-gray-600">Tenant: <span  class="font-medium text-[#1D2739]">Ada Dennis</span></p>
            <p class="text-xs text-gray-600">Last updated: <span  class="font-medium text-[#1D2739]">15th May, 2024</span></p>
          </div>
          <button class="p-2">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.4922 12H12.5012" stroke="#1D2739" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.4844 18H12.4934" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M12.5 6H12.509" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
          </button>
        </div>
      </div>
</section>
  </template>
  
  <script lang="ts" setup>
  import { dynamicImage } from '@/utils/assets';
  // Script setup is empty for this component
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  