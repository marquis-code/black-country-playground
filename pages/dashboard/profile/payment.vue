<template>
    <div class="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 class="mb-4 text-xl font-semibold">Payment Information</h2>
      <div class="flex items-center justify-center mb-6">
        <div class="w-16 h-16 rounded-full bg-gray-300"></div>
      </div>
      <p class="mb-6 text-center text-gray-500">No payment information added yet</p>
      <button class="w-full py-2 text-sm font-semibold text-white bg-black rounded-md">Add bank account information</button>
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
