<template>
    <div 
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" 
      @click.self="closeModal"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <h2 class="text-xl font-semibold mb-4">Filter</h2>
        <div class="space-y-4">
          <div class="grid grid-cols-2 gap-4">
            <div class="space-y-1">
              <label class="block text-sm font-medium text-gray-700">Date created/updated</label>
              <input 
                type="date" 
                placeholder="From" 
                class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
              />
            </div>
            <div class="space-y-1">
              <label class="block text-sm font-medium text-[#1D2739]"> </label>
              <input 
                type="date" 
                placeholder="To" 
                class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
              />
            </div>
          </div>
          <div class="space-y-1">
            <label class="block text-sm font-medium text-[#1D2739]">Property name</label>
            <select 
            class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
            >
              <option>All properties</option>
              <!-- Add more options as needed -->
            </select>
          </div>
          <div class="space-y-1">
            <label class="block text-sm font-medium text-[#1D2739]">Agent/Property manager assigned</label>
            <select 
            class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
              >
              <option>All users</option>
              <!-- Add more options as needed -->
            </select>
          </div>
        </div>
        <div class="mt-10 flex justify-between gap-x-6">
          <button class="bg-[#EBE5E0] font-semibold text-[#292929] w-full px-4 py-3.5 text-sm rounded-md" @click="resetFilters">Reset</button>
          <button class="bg-[#292929] font-semibold w-full text-white px-4 py-3.5 text-sm rounded-md"  @click="applyFilters">Apply filter</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const closeModal = () => {
    // Emit an event to close the modal
    emit('close')
  }
  
  const resetFilters = () => {
    // Logic to reset filters
    console.log('Filters reset')
  }
  
  const applyFilters = () => {
    // Logic to apply filters
    console.log('Filters applied')
    closeModal()
  }

  const fromDate = ref<string>('');
const toDate = ref<string>('');
  </script>
  