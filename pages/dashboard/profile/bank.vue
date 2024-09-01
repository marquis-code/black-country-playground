<template>
<section class="min-h-screen" >
  <div class="p-6 max-w-md mx-auto space-y-10">
    <h2 class="mb-4 text-lg font-medium text-[#1D2739]">Link a bank account</h2>
<div class="space-y-4">
  <div class="mb-4">
    <label class="block mb-1 text-xs font-medium">Bank Name</label>
    <select class="w-full bg-[#F0F2F5] px-3 py-3.5 text-sm font-light border-[0.5px] outline-none rounded-md">
      <option value="">Select bank name</option>
      <option>First Bank</option>
    </select>
  </div>
  <div class="mb-4">
    <label class="block mb-1 text-xs font-medium">Account Number</label>
    <input type="text" placeholder="Enter your account number" class="w-full text-sm font-light bg-[#F0F2F5] outline-none px-3 py-3.5 border-[0.5px] rounded-md">
  </div>
  <div class="mb-4">
    <label class="block mb-1 text-xs font-medium">Account Holder's Name</label>
    <input type="text" placeholder="Ada Dennis" class="w-full bg-[#F0F2F5] text-sm font-light outline-none px-3 py-3.5 border-[0.5px] rounded-md">
  </div>
</div>
  </div>
  <div class="flex justify-center items-center text-sm text-[#667185] gap-x-2">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.0001 1.33203C5.99492 1.33203 4.69476 2.67802 3.15711 3.16863C2.5319 3.36812 2.21928 3.46786 2.09277 3.60846C1.96626 3.74907 1.92921 3.95453 1.85512 4.36545C1.06226 8.7627 2.79524 12.828 6.92817 14.4104C7.37224 14.5804 7.59424 14.6654 8.0023 14.6654C8.4103 14.6654 8.63237 14.5804 9.07637 14.4104C13.209 12.828 14.9404 8.7627 14.1473 4.36545C14.0732 3.95446 14.0361 3.74896 13.9096 3.60836C13.783 3.46775 13.4704 3.36806 12.8452 3.16869C11.307 2.67813 10.0054 1.33203 8.0001 1.33203Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.8927 6.92188C6.17273 6.92188 5.81273 7.44188 5.73273 7.76188C5.65273 8.08188 5.65273 9.24187 5.70073 9.72187C5.86073 10.3219 6.26073 10.5699 6.65273 10.6499C7.0127 10.6819 8.5327 10.6699 8.9727 10.6699C9.6127 10.6819 10.0927 10.4419 10.2927 9.72187C10.3327 9.48187 10.3727 8.16188 10.2727 7.76188C10.0607 7.12188 9.5327 6.92188 9.1327 6.92188H6.8927Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M6.83203 6.64033C6.83203 6.60033 6.8375 6.37005 6.83843 6.08033C6.8393 5.8156 6.81603 5.56033 6.94243 5.32673C7.41603 4.38433 8.77603 4.48033 9.11203 5.44033C9.17023 5.59838 9.17376 5.84894 9.17203 6.08033C9.16983 6.37599 9.17603 6.64033 9.17603 6.64033" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
      
    Protected with advanced encryption</div>
</section>
</template>

<script setup lang="ts">
    definePageMeta({
     layout: 'dashboard'
})
  // Handle form submission logic here.
  </script>
  
  <style scoped>
  /* Additional scoped styles if necessary */
  </style>
  