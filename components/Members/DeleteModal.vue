<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="close">
      <div class="bg-white p-6 rounded-lg shadow-lg w-[450px] text-center">
        <div class="mb-6 space-y-4">
         <div class="flex justify-center items-center">
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.925781" width="63.1513" height="64" rx="31.5756" fill="#DD900D"/>
                <path d="M22.6992 32.375C22.6992 27.8967 22.6992 25.6575 24.0905 24.2662C25.4817 22.875 27.7209 22.875 32.1992 22.875C36.6775 22.875 38.9167 22.875 40.308 24.2662C41.6992 25.6575 41.6992 27.8967 41.6992 32.375C41.6992 36.8533 41.6992 39.0925 40.308 40.4838C38.9167 41.875 36.6775 41.875 32.1992 41.875C27.7209 41.875 25.4817 41.875 24.0905 40.4838C22.6992 39.0925 22.6992 36.8533 22.6992 32.375Z" stroke="white" stroke-width="1.5"/>
                <path d="M32.4414 37.375V32.375C32.4414 31.9036 32.4414 31.6679 32.2949 31.5214C32.1485 31.375 31.9128 31.375 31.4414 31.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M32.1914 28.377H32.2004" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
         </div>
                
          <h3 class="text-lg font-medium text-[#1D2739] mb-2">Delete Role</h3>
          <p class="text-base text-[#667185] mb-4 leading-snug">You are confirming your decision to delete the property manager role. <span class="text-[#1D2739] font-medium">Note: Deleting this role deletes all accounts associated with this role.</span></p>
        </div>
        <div class="space-y-4">
          <button @click="close" class="w-full py-3.5 text-sm font-semibold bg-[#292929] text-white rounded-md">No, Cancel</button>
          <button class="w-full py-3.5 bg-[#EBE5E0] font-semibold text-sm text-[#292929] rounded-md">Yes, Continue</button>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['close']);
  
  const close = () => {
    emit('close');
  };
  </script>
  