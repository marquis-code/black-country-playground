<template>
    <div class="flex items-center justify-center h-screen bg-gray-50">
      <div class="p-8 max-w-md w-full text-center">
        <!-- Success Icon -->
        <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full">
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.921875" width="63.1513" height="64" rx="31.5756" fill="#0F973D"/>
                <path d="M44.1606 32.3577C44.1606 25.7398 38.7958 20.375 32.178 20.375C25.5601 20.375 20.1953 25.7398 20.1953 32.3577C20.1953 38.9754 25.5601 44.3403 32.178 44.3403C38.7958 44.3403 44.1606 38.9754 44.1606 32.3577Z" stroke="white" stroke-width="1.7974"/>
                <path d="M27.5781 32.9633L30.5239 35.9839L37.0045 28.7344" stroke="white" stroke-width="1.7974" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
        </div>
  
        <!-- Duplication Message -->
        <h2 class="text-xl font-semibold mb-2 text-[#1D2739]">Duplication successful</h2>
        <p class="text-[#667185] mb-6">
          The property has been duplicated successfully. Would you like to start editing now or save for later?
        </p>
  
        <!-- Action Buttons -->
        <div class="space-y-4">
          <button @click="router.push(`/dashboard/property/${route.params.id}/edit`)" class="w-full py-4 bg-[#292929] text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700">
            Edit now
          </button>
          <button @click="router.push(`/dashboard/property`)" class="w-full text-[#292929] py-4 bg-[#EBE5E0]  rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
            Save for later
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const route = useRoute()
  const router = useRouter()
  // No additional logic needed for this static component
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  