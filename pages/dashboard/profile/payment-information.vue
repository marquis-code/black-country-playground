<template>
    <div class="max-w-lg mx-auto mt-10 p-6 min-h-screen">
      <h2 class="text-xl font-medium text-gray-900 mb-6">Payment Information</h2>
      
<section class="space-y-6">
    <div class="bg-white rounded-xl">
        <div class="p-4 rounded-lg flex items-center justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <img :src="dynamicIcons('payment-method-icon')" />
              </div>
              <div class="ml-4">
                <p class="text-sm text-gray-900">**** **** **** 1234</p>
                <p class="text-sm text-gray-500">First Bank</p>
              </div>
            </div>
          </div>
          <div class="space-x-4 px-4 pb-3 flex items-center gap-x-44">
           <div> <span class="text-xs text-[#1D2739] bg-gray-100 px-2 py-1 rounded-xl">Default</span></div>
            <div><button class="text-[#1D2739] text-xs font-semibold">Delete</button></div>
          </div>
    </div>
  
      <div class="p-4 bg-white rounded-lg flex items-center justify-between cursor-pointer">
        <p class="text-success-emphasis font-medium text-sm text-[#171717]">Add new bank account</p>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.50004 5C7.50004 5 12.5 8.68242 12.5 10C12.5 11.3177 7.5 15 7.5 15" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>            
      </div>
</section>
    </div>
  </template>
  
  <script setup lang="ts">
  import { dynamicIcons } from "@/utils/assets";
  const router = useRouter()
  definePageMeta({
   layout: 'dashboard'
})                                                                     
// Handle form submission logic here.
</script>

<style scoped>
/* Additional scoped styles if necessary */
</style>
