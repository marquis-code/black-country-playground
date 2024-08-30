<template>
  <div class="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
    <h2 class="mb-4 text-xl font-semibold">Link a bank account</h2>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-semibold">Bank Name</label>
      <select class="w-full px-3 py-2 border rounded-md">
        <option>First Bank</option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-semibold">Account Number</label>
      <input type="text" placeholder="2012341243" class="w-full px-3 py-2 border rounded-md">
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-semibold">Account Holder's Name</label>
      <input type="text" placeholder="Ada Dennis" class="w-full px-3 py-2 border rounded-md">
    </div>
    <div class="flex justify-end">
      <button class="px-4 py-2 mr-2 text-sm font-semibold text-gray-500 border rounded-md">Cancel</button>
      <button class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md">Save</button>
    </div>
  </div>
</template>

<script setup lang="ts">
    definePageMeta({
     layout: 'dashboard'
})
  // Handle form submission logic here.
  </script>
  
  <style scoped>
  /* Additional scoped styles if necessary */
  </style>
  