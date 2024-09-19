<template>
    <div class="space-y-6">
      <!-- Gallery Section -->
      <div class="flex items-center border-[0.5px] border-gray-50 space-x-4 bg-white p-4 rounded-lg">
        <img :src="dynamicImage('placeholder.png')" alt="Gallery" class="w-12 h-12 rounded-full">
        <div class="flex-1">
          <h3 class="text-lg font-medium">Gallery</h3>
          <p class="text-gray-500 text-sm">Click to view photos of all common areas</p>
        </div>
        <button class="text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
  
      <!-- Interior Features Section -->
      <h2 class="text- pl-4 font-medium bg-white border-[0.5px] py-4 border-gray-50">Interior Features</h2>
      <div class="bg-white p-6 rounded-lg border-[0.5px] space-y-4 border-gray-50">  
        <div class="space-y-2">
          <p class="font-medium text-sm text-[#667185]">
            Furnished: <span class="font-medium text-red-500">No</span>
          </p>
  
          <div class="space-y-2">
            <p class="text-sm font- text-[#667185]">Amenities</p>
  
            <!-- Amenities -->
            <div class="grid grid-cols-3 gap-3">
              <div class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                <img :src="dynamicIcons('roombg')" alt="Living room" class="w-6 h-6">
                <p class="text-[#1D2739] text-sm">Living room</p>
              </div>
              <div class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                <img :src="dynamicIcons('roombg')" alt="Kitchen" class="w-6 h-6">
                <p class="text-[#1D2739] text-sm">Kitchen</p>
              </div>
              <div class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                <img :src="dynamicIcons('roombg')" alt="Storage" class="w-6 h-6">
                <p class="text-[#1D2739] text-sm">Storage area</p>
              </div>
              <div class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                <img :src="dynamicIcons('roombg')" alt="Bathroom" class="w-6 h-6">
                <p class="text-[#1D2739] text-sm">Bathroom</p>
              </div>
              <div class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                <img :src="dynamicIcons('roombg')" alt="Basement" class="w-6 h-6">
                <p class="text-[#1D2739] text-sm">Basement</p>
              </div>
            </div>
            <button class="mt-2 font-medium text-[#1D2739]">View less</button>
          </div>
        </div>
      </div>
  
      <!-- Exterior Features Section -->
      <h2 class="text- pl-4 font-medium bg-white border-[0.5px] py-4 border-gray-50">Exterior Feature</h2>
      <div class="bg-white p-6 rounded-lg space-y-4">
        <div class="space-y-2">
          <p class="text-sm font- text-[#667185]">Amenities</p>
  
          <!-- Exterior Amenities -->
          <div class="grid grid-cols-3 gap-3">
            <div class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
              <img :src="dynamicIcons('roombg')" alt="Parking space" class="w-6 h-6">
              <p class="text-[#1D2739] text-sm">Parking space</p>
            </div>
            <div class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
              <img :src="dynamicIcons('roombg')" alt="Balcony" class="w-6 h-6">
              <p class="text-[#1D2739] text-sm">Balcony</p>
            </div>
            <div class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
              <img :src="dynamicIcons('roombg')" alt="Fenced/gated" class="w-6 h-6">
              <p class="text-[#1D2739] text-sm">Fenced/gated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    import { dynamicImage, dynamicIcons } from "@/utils/assets";

    const props = defineProps({
    property: {
      type: Object,
      default: () => {}
    }
  })
  // No additional logic required for this layout.
  </script>
  
  <style scoped>
  /* Tailwind CSS manages the layout and styling, no custom styles needed */
  </style>
  