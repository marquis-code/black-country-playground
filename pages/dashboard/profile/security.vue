<template>
  <div class="p-6  max-w-xl mx-auto min-h-screen">
    <h2 class="mb-4 text-lg font-me                                                                                                              dium">Login & Security</h2>
    <div @click="router.push('/dashboard/profile/password')" class="flex cursor-pointer items-center justify-between bg-white rounded-lg px-6 py-3">
      <div class="space-y-1">
        <p class="text-sm font-medium text-[#1D2739]                                                                                               ">Change Password</p>
        <p class="text-[#1D2739] text-xs">On clicking the switch, you are enabling biometric for transaction</p>
      </div>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12" stroke="#667185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>        
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter()
definePageMeta({
     layout: 'dashboard'
})
</script>
