<template>
    <div class="p-4 bg-white shadow rounded-lg">
      <!-- <div class="flex justify-between items-center">
        <div class="text-xl font-semibold">Users</div>
        <div class="text-xl font-semibold">0</div>
      </div> -->
      <section class="flex justify-between items-center pl-2">
        <div class="flex justify-between items-center gap-x-5">
            <div class="text-xl font-">Users</div>
            <div class="text-xl font-">0</div>
          </div>
          <div class="flex justify-between mt-4 space-x-4">
            <select class="text-sm outline-none font-medium bg-gray-50 rounded-md px-2.5 py-2">
              <option>Month</option>
              <option>Year</option>
            </select>
          </div>
     </section>
      <div class="grid grid-cols-2 gap-4 mt-4">
        <div class="p-2">
          <div class="text-gray-600">New users</div>
          <div class="text-2xl font-bold mt-2">300</div>
          <div class="text-sm text-gray-500 flex items-center space-x-1">
            <span class="text-green-500">6% </span>
            <img src="@/assets/icons/green-arrow-up.svg" alt=""/>
            <span>vs last month</span>
          </div>
        </div>
        <div class="p-2">
          <div class="text-gray-600">Active users</div>
          <div class="text-2xl font-bold mt-2">100</div>
          <div class="text-sm text-gray-500 flex items-center space-x-1">
            <span class="text-red-500">6% </span>
            <img src="@/assets/icons/red-arrow-down.svg" alt="" />
            <span>vs last month</span>
          </div>
        </div>
        <div class="p-2">
          <div class="text-gray-600">Non-active users</div>
          <div class="text-2xl font-bold mt-2">200</div>
          <div class="text-sm text-gray-500 flex items-center space-x-1">
            <span class="text-red-500">6% </span>
            <img src="@/assets/icons/red-arrow-down.svg" alt="" />
            <span>vs last month</span>
          </div>
        </div>
        <div class="p-2">
          <div class="text-gray-600">Deleted accounts</div>
          <div class="text-2xl font-bold mt-2">16</div>
          <div class="text-sm text-gray-500 flex items-center space-x-1">
            <span class="text-green-500">6% </span>
            <img src="@/assets/icons/green-arrow-up.svg" alt=""/>
            <span>vs last month</span>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // No specific TypeScript code needed for this component.
  </script>
  
  <style scoped>
  /* Add any additional styles here */
  </style>
  