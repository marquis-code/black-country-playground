<template>
 <main class="min-h-screen">
  <div class="max-w-2xl mx-auto mt-10 p-4">
    <!-- Date with horizontal lines -->
    <div class="relative flex items-center justify-center my-6">
      <div class="absolute inset-0 flex items-center">
        <div class="border-t w-full border-gray-100"></div>
      </div>
      <div class="relative px-1 bg-white">
        <span class="text-[#1D2739] bg-[#F0F2F5] text-xs px-3 py-2 rounded-full">15 April 2024</span>
      </div>
    </div>
    
    <!-- Notification card -->
    <div class="bg-white rounded-lg p-6">
      <p class="font-semibold text-sm text-[#1D2739]">Property Listing</p>
      <p class="text-[#1D2739] mt-2 text-sm">
        A new property, {Property Name}, has been listed by {Property Manager}. Please review the listing details to ensure accuracy and completeness.
      </p>
      <a href="#" class="text-[#326543] underline text-sm font-medium mt-4 inline-block">
        Click to view Property created
      </a>
    </div>
  </div>
 </main>
</template>


<script lang="ts" setup>
const router = useRouter()
import { dynamicIcons } from "@/utils/assets";
definePageMeta({
  layout: "dashboard",
});
</script>