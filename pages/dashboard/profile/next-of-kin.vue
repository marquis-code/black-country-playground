<template>
<min>
  <TopNavBar />
  <div class="p-8 bg-gray-50 min-h-screen">
    <div class="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <!-- Form Header -->
      <div class="flex items-center space-x-2 text-gray-500">
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
        <h2 class="text-lg font-semibold">Next of Kin</h2>
      </div>

      <!-- Form Fields -->
      <form class="mt-6 space-y-4">
        <div>
          <label class="text-gray-600">Full Name <span class="text-red-500">*</span></label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter full name" />
        </div>

        <div>
          <label class="text-gray-600">Relationship <span class="text-red-500">*</span></label>
          <select class="w-full p-2 mt-2 border rounded-md bg-gray-50">
            <option>Select relationship</option>
          </select>
        </div>

        <div>
          <label class="text-gray-600">Email Address <span class="text-red-500">*</span></label>
          <input type="email" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter email address" />
        </div>

        <div>
          <label class="text-gray-600">Residential Address <span class="text-red-500">*</span></label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter residential address" />
        </div>

        <div>
          <label class="text-gray-600">Phone Number <span class="text-red-500">*</span></label>
          <input type="tel" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter phone number" />
        </div>

        <div>
          <label class="text-gray-600">Occupation</label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="e.g. Accountant" />
        </div>

        <div>
          <label class="text-gray-600">Organization Name</label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter organization name" />
        </div>

        <div>
          <label class="text-gray-600">Office Address</label>
          <input type="text" class="w-full p-2 mt-2 border rounded-md" placeholder="Enter office address" />
        </div>

        <!-- Save/Cancel Buttons -->
        <div class="flex items-center justify-between mt-6">
          <button class="text-gray-500 bg-gray-100 py-2 px-4 rounded-md">Cancel</button>
          <button class="text-white bg-black py-2 px-4 rounded-md">Save</button>
        </div>
      </form>
    </div>
  </div>
</min>
  </template>
  
  <script lang="ts">
  export default {
    name: "NextOfKin",
  };
  </script>
  
  <style scoped>
  </style>
  