<template>
  <div class="flex items-center justify-center p-6">
    <div class="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
      <!-- Date Badge -->
      <div class="flex justify-center mb-4">
        <div class="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
          15 April 2024
        </div>
      </div>

      <!-- Notification Content -->
      <div class="bg-gray-50 rounded-lg p-6 border border-gray-200">
        <h3 class="font-semibold text-gray-800 mb-2">Property Listing</h3>
        <p class="text-gray-600 mb-4">
          A new property, {Property Name}, has been listed by {Property Manager}. Please review the listing details to ensure accuracy and completeness.
        </p>
        <a href="#" class="text-green-700 font-medium hover:underline">
          Click to view Property created
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "dashboard",
});
// Script setup is empty as we don't need any logic for this static UI
</script>

<style scoped>
/* No additional custom styles are needed */
</style>
