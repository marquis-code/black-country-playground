<template>
    <div class="p-6 bg-white rounded-lg shadow-md">
      <!-- Profile Section -->
      <div class="flex flex-col items-center">
        <img
          :src="dynamicImage('avatar.png')"
          alt="Profile Picture"
          class="w-32 h-32 rounded-full mb-4"
        />
        <h2 class="text-xl font-medium text-gray-800">Ada Dennis</h2>
        <p class="text-gray-600 mb-4 text-sm">ad@gmail.com</p>
        <div class="text-sm text-gray-600 space-y-4 w-full">
          <p class="flex justify-between"><span class="text-[#667185]">Phone number:</span> 081000000000</p>
          <p class="flex justify-between"><span class="text-[#667185]">Date of Birth:</span> 01/01/1900</p>
          <p class="flex justify-between"><span class="text-[#667185]">Gender:</span> ---</p>
          <p class="flex justify-between"><span class="text-[#667185]">Marital status:</span> ---</p>
          <p class="flex justify-between"><span class="text-[#667185]">State of Origin:</span> Lagos</p>
          <p class="flex justify-between"><span class="text-[#667185]">LGA:</span> ---</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
        import { dynamicImage } from '@/utils/assets';
  // Add any required scripts here if needed
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  