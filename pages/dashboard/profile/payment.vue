<template>
    <div class="p-6 max-w-md mx-auto min-h-screen">
      <h2 class="mb-10 text-lg font-medium text-[#171717]">Payment Information</h2>
      <div class="flex items-center justify-center mb-6">
        <!-- <div class="w-16 h-16 rounded-full bg-gray-300"></div> -->
        <img :src="dynamicIcons('payment-illustration')" />
      </div>
      <p class="mb-6 text-center text-[#1D2739]">No payment information added yet</p>
      <button @click="router.push('/dashboard/profile/bank')" class="w-full py-4 text-sm font-semibold text-white bg-[#292929] rounded-md">Add bank account information</button>
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
