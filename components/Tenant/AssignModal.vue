<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
      <div class="bg-white p-6 rounded-lg shadow-lg  max-w-7xl w-2/6">
        <h2 class="text-xl font-semibold text-[#1D2739] mb-6">Assign maintenance request</h2>
        <div class="mb-4">
          <label class="block text-sm text-[#1D2739] mb-2 font-">Assign service provider</label>
          <select class="w-full bg-[#E4E7EC] text-sm px-4 py-3.5 outline-none border-[0.6px] border-gray-300 text-[#98A2B3] rounded-lg">
            <option>Select service provider</option>
            <!-- Add service provider options here -->
          </select>
        </div>
        <div class="flex justify-end space-x-4 pt-6">
          <button @click="closeModal" class="px-4 py-4 text-sm font-semibold bg-gray-200 w-full text-[#292929] rounded-md">Cancel</button>
          <button class="px-4 py-4 text-sm font-semibold bg-[#292929] text-white w-full rounded-md">Continue</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  const isOpen = ref(true);
  
  const closeModal = () => {
    isOpen.value = false;
  };
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  