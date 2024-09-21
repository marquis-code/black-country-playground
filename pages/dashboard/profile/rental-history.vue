<template>
<main>
  <TopNavBar />
  <div class="p-8 bg-gray-50 min-h-screen">
    <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <!-- Form Header -->
      <div class="flex items-center space-x-2 text-gray-500">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <h2 class="text-lg font-semibold">Rental History</h2>
      </div>

      <!-- Form Fields -->
      <form class="mt-6 space-y-4">
        <div>
          <label class="text-gray-600">Current Landlord's Name <span class="text-red-500">*</span></label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter full name" />
        </div>

        <div>
          <label class="text-gray-600">Rental Address <span class="text-red-500">*</span></label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter residential address" />
        </div>

        <div>
          <label class="text-gray-600">Length of Tenancy <span class="text-red-500">*</span></label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter length of tenancy" />
        </div>

        <div>
          <label class="text-gray-600">Reason for Moving Out <span class="text-red-500">*</span></label>
          <textarea class="w-full p-2 mt-2 border rounded-md" placeholder="Enter reason for moving out"></textarea>
        </div>

        <!-- Save/Cancel Buttons -->
        <div class="flex items-center justify-between mt-6">
          <button class="text-gray-500 bg-gray-100 py-2 px-4 rounded-md">Cancel</button>
          <button class="text-white bg-black py-2 px-4 rounded-md">Save</button>
        </div>
      </form>
    </div>
  </div>
</main>
  </template>
  
  <script lang="ts">
  export default {
    name: "RentalHistory",
  };
  </script>
  
  <style scoped>
  </style>
  