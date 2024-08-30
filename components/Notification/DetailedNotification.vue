<template>
    <div class="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div class="text-gray-600 text-sm mb-2">{{ date }}</div>
      <div class="bg-gray-50 p-4 rounded-lg">
        <div class="font-semibold text-gray-800">{{ title }}</div>
        <p class="text-gray-600 mt-2">{{ description }}</p>
        <a href="#" class="text-blue-500 mt-4 inline-block">{{ linkText }}</a>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const date = '15 April 2024'
  const title = 'Property Listing'
  const description = 'A new property, {Property Name}, has been listed by {Property Manager}. Please review the listing details to ensure accuracy and completeness.'
  const linkText = 'Click to view Property created'
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  