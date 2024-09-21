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
        <h2 class="text-lg font-semibold">Employment Information</h2>
      </div>

      <!-- Form Fields -->
      <form class="mt-6 space-y-4">
        <div>
          <label class="text-gray-600">Are you currently employed? <span class="text-red-500">*</span></label>
          <select class="w-full p-2 mt-2 border rounded-md bg-gray-50">
            <option>Select your employment status</option>
          </select>
        </div>

        <div>
          <label class="text-gray-600">Employer's Full Name <span class="text-red-500">*</span></label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter employer's name" />
        </div>

        <div>
          <label class="text-gray-600">Organization Address</label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter organization's address" />
        </div>

        <div>
          <label class="text-gray-600">Occupation</label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter your job role" />
        </div>

        <div>
          <label class="text-gray-600">Monthly Net Salary <span class="text-red-500">*</span></label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter your monthly net salary" />
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
    name: "EmploymentInformation",
  };
  </script>
  
  <style scoped>
  </style>
  