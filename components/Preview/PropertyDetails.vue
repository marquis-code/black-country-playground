<template>
    <div>
      <div class="flex justify-between items-center">
        <div>
          <h4 class="font-light text-[#667185]">Property name</h4>
          <p>{{ property.name }}</p>
        </div>
        <button class="text-green-600">Edit</button>
      </div>
      <div class="mt-4">
        <h4 class="font-light text-[#667185]">Brief description</h4>
        <p class="text-sm text-[#1D2739]">{{ property.description }}</p>
        <a href="#" class="text-blue-500">View more</a>
      </div>
      <div class="mt-4 grid grid-cols-2 gap-4">
        <div>
          <h4 class="font-light text-[#667185]">Building/property type</h4>
          <p class="text-sm text-[#1D2739]">{{ property.type }}</p>
        </div>
        <div>
          <h4 class="font-light text-[#667185]">Floor type</h4>
          <p class="text-sm text-[#1D2739]">{{ property.floor }}</p>
        </div>
        <div>
          <h4 class="font-light text-[#667185]">Property size</h4>
          <p class="text-sm text-[#1D2739]">{{ property.size }}</p>
        </div>
        <div>
          <h4 class="font-light text-[#667185]">Number of bedrooms</h4>
          <p class="text-sm text-[#1D2739]">{{ property.bedrooms }}</p>
        </div>
        <div>
          <h4 class="font-light text-[#667185]">Number of bathrooms/Rest room</h4>
          <p class="text-sm text-[#1D2739]">{{ property.bathrooms }}</p>
        </div>
        <div>
          <h4 class="font-light text-[#667185]">Property location</h4>
          <p class="text-sm text-[#1D2739]">{{ property.location }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Property {
    name: string
    description: string
    type: string
    floor: string
    size: string
    bedrooms: number
    bathrooms: number
    location: string
  }
  
  const props = defineProps<{
    property: Property
  }>()
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  