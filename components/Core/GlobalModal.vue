<template>
    <div
      v-if="isModalVisible"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
    >
      <div class="bg-white w-full max-w-4xl mx-auto p-6 relative rounded-lg shadow-lg">
        <div class="text-right">
          <button @click="closeModal" class="text-red-500">X</button>
        </div>
        <h2 class="text-2xl font-semibold mb-4">{{ modalData.title }}</h2>
        <p>{{ modalData.description }}</p>
        <p>Price: {{ modalData.price }}</p>
        <p>Location: {{ modalData.location }}</p>
  
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
  import { useGlobalModal } from '@/composables/core/useGlobalModal';
  
  const { isModalVisible, modalData, closeModal } = useGlobalModal();
  
  const saveChanges = () => {
    // Save logic
    closeModal();
  };
  </script>
  
  <style scoped>
  </style>
  