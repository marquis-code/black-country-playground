<template>
    <div
      v-if="isVisible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    >
      <div
        class="bg-white w-full max-w-4xl mx-auto p-6 relative rounded-lg shadow-lg"
      >
        <!-- Property Preview Content -->
        <div class="text-right">
          <button @click="closeModal" class="text-red-500">X</button>
        </div>
        <h2 class="text-2xl font-semibold mb-4">{{ propertyDetails.title }}</h2>
        <p>{{ propertyDetails.description }}</p>
        <p>Price: {{ propertyDetails.price }}</p>
        <p>Location: {{ propertyDetails.location }}</p>
  
        <!-- Modal Actions -->
        <div class="mt-6 flex justify-end space-x-4">
          <button
            class="px-4 py-2 bg-gray-500 text-white rounded-md"
            @click="closeModal"
          >
            Cancel
          </button>
          <button
            class="px-4 py-2 bg-green-500 text-white rounded-md"
            @click="saveChanges"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { usePropertyPreview } from '@/composables/modules/property/usePropertyPreview';
  
  const { isPreviewVisible, propertyDetails, closePreview } = usePropertyPreview();
  
  const closeModal = () => {
    closePreview();
  };
  
  const saveChanges = () => {
    // Add logic to save the data
    closePreview();
  };
  </script>
  
  <style scoped>
  </style>
  