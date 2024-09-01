<template>
    <div class="p-6  max-w-md mx-auto min-h-screen">
      <h2 class="mb-4 text-lg font-medium text-[#1D2739]">Change Password</h2>
      <div class="mb-4">
        <label class="block mb-1 text-xs font-medium" >Current Password</label>
        <input type="password" placeholder="Enter current password" class="w-full text-sm font-light bg-[#F0F2F5] outline-none px-3 py-3.5 border-[0.5px] rounded-md">
      </div>
      <div class="mb-4">
        <label class="block mb-1 text-xs font-medium" >New Password</label>
        <input type="password" placeholder="Enter new password" class="w-full text-sm font-light bg-[#F0F2F5] outline-none px-3 py-3.5 border-[0.5px] rounded-md">
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
definePageMeta({
     layout: 'dashboard'
})
</script>