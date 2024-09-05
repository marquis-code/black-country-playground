<template>
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
      @click.self="closeModal"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h2 class="text-xl font-medium mb-4">Generate lease agreement</h2>
        <div class="space-y-4">
          <div class="space-y-2">
            <label class="text-sm font-medium text-gray-700">Lease template</label>
            <div class="flex items-center justify-between border border-gray-100 rounded-md px-4 py-3 text-sm bg-[#F0F2F5]">
              <span class="text-sm text-gray-800">Sample template</span>
              <button class="text-sm font-medium text-gray-800 hover:underline focus:outline-none">
                Change template
              </button>
            </div>
          </div>
  
          <div class="space-y-1">
            <label class="block text-sm font-medium text-[#1D2739]">Property name</label>
            <select class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none">
              <option>Select property</option>
              <!-- Add more options as needed -->
            </select>
          </div>
  
          <div class="space-y-1">
            <label class="block text-sm font-medium text-[#1D2739]">Tenant</label>
            <select class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none">
              <option>Select tenant</option>
            </select>
          </div>
  
          <div>
            <label class="block text-sm font-medium text-[#1D2739]">Lease document title</label>
            <input type="text" placeholder="Enter title" class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none" />
          </div>
        </div>
        
        <div class="mt-10 flex justify-between gap-x-6">
          <button class="bg-[#EBE5E0] font-semibold text-[#292929] w-full px-4 py-3.5 text-sm rounded-md" @click="resetFilters">Reset</button>
          <button class="bg-[#292929] font-semibold w-full text-white px-4 py-3.5 text-sm rounded-md"  @click="applyFilters">Continue</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  
  const emit = defineEmits(['close']);
  
  const closeModal = () => {
    // Emit an event to close the modal
    emit('close');
  };
  
  const resetFilters = () => {
    // Logic to reset filters
    console.log('Filters reset');
  };
  
  const applyFilters = () => {
    // Logic to apply filters
    console.log('Filters applied');
    closeModal();
  };
  
  const fromDate = ref<string>('');
  const toDate = ref<string>('');
  </script>
  