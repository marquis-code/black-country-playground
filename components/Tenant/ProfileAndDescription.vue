<template>
    <div class="p-6">
      <!-- Profile Section -->
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-4">
          <img :src="dynamicImage('avatar.png')" alt="Profile Picture" class="w-16 h-16 rounded-full">
          <div>
            <h2 class="text-base font-semibold text-gray-800">Ada Dennis</h2>
            <p class="text-sm text-gray-600">ad@gmail.com</p>
          </div>
        </div>
        <!-- Timer with Tooltip -->
        <div v-if="requestAccepted" class="relative">
          <div class="flex items-center space-x-2">
            <span class="text-sm text-gray-600">Timer</span>
            <div class="flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 4.31875 11.6806 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673Z" stroke="#292929" stroke-width="1.25"/>
                    <path d="M6.33203 6.33398L8.6653 8.66705M10.6654 5.33398L7.33203 8.66732" stroke="#292929" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
              <span class="text-sm text-gray-600">00:00:00</span>
            </div>
          </div>
          <div class="absolute top-10 right-0 bg-gray-900 text-white text-xs rounded-lg shadow-lg p-2 w-64">
            <p class="font-semibold">Response Timer</p>
            <p>This timer helps you track how long it takes for a service provider to accept or approve a request.</p>
          </div>
        </div>
      </div>
  
      <!-- Urgency and Description -->
      <div class="mb-6">
      <div class="flex justify-between items-center">
        <p class="text-gray-800 font-light text-sm">Urgency level</p>
        <span v-if="!requestAccepted" class="text-[#BA110B] font-medium text-sm px-3 py-1 bg-[#FBEAE9] rounded-full">High</span>
      </div>
     <div class="mt-10">
        <p class="text-gray-800 font-light mb-2 text-sm">Description</p>
        <p class="text-gray-800 text-sm">
          Lorem ipsum dolor sit amet consectetur. Pellentesque aliquam volutpat suspendisse neque. Tristique diam semper vitae egestas ac maecenas cursus. Dictumst viverra amet felis purus consectetur molestie ut. Egestas aenean est nibh suspendisse sagittis viverra et.
        </p>
     </div>
      </div>
  
      <!-- Images -->
      <div>
        <h3 class="text-lg font-semibold text-gray-800 mb-4">Images</h3>
        <div class="grid grid-cols-2 gap-4">
          <img :src="dynamicImage('repair1.png')" alt="Image 1" class="w-full h-auto rounded-lg">
          <img :src="dynamicImage('repair2.png')" alt="Image 2" class="w-full h-auto rounded-lg">
          <img :src="dynamicImage('repair3.png')" alt="Image 3" class="w-full h-auto rounded-lg">
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { dynamicImage } from '@/utils/assets';
  const requestAccepted = ref(true)
  // No additional script required for this basic implementation
  </script>
  
  <style scoped>
  /* Add any specific styles if needed */
  </style>
  