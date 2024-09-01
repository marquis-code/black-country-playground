<template>
<main>
    <div class="space-y-6">
        <div class="flex items-center justify-between py-4 px-6 bg-white shadow-md">
            <!-- Back Button -->
            <div class="flex gap-x-6">
                <button class="flex bg-gray-50 px-6 py-0 rounded-lg items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                    </svg>
                    <span class="text-sm">Back</span>
                </button>
            
                <!-- Service Title -->
                <h1 class="text-lg font-semibold text-gray-900">Plumbing Service</h1>
            </div>
        
            <!-- Assign Request Button -->
            <button @click="openModal" class="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
              Assign request
            </button>
          </div>
          <TenantProfileAndDescription class="max-w-4xl mx-auto"  />
    </div>      
    <TenantAssignModal v-if="isModalOpen" @close="isModalOpen = false" />
</main>
  </template>
  
  <script lang="ts" setup>
    // Modal control
    const isModalOpen = ref(false);

    definePageMeta({
     layout: 'dashboard'
})
  
  const openModal = () => {
    isModalOpen.value = true;
  };
  // Script setup can be used to manage any actions or state, if needed
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  