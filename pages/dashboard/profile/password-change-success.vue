<template>
    <main class="min-h-screen bg-gray-25 flex justify-center items-center">
      <div class="p-6 max-w-lg mx-auto">
          <div class="flex items-center justify-center mb-4">
            <div class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.421875" width="63.1513" height="64" rx="31.5756" fill="#0F973D"/>
                    <path d="M43.6606 32.3577C43.6606 25.7398 38.2958 20.375 31.678 20.375C25.0601 20.375 19.6953 25.7398 19.6953 32.3577C19.6953 38.9754 25.0601 44.3403 31.678 44.3403C38.2958 44.3403 43.6606 38.9754 43.6606 32.3577Z" stroke="white" stroke-width="1.7974"/>
                    <path d="M27.0781 32.9633L30.0239 35.9839L36.5045 28.7344" stroke="white" stroke-width="1.7974" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
            </div>
          </div>
          <h2 class="mb-4 text-xl text-[#171717] font-semibold text-center">Password changed Successful</h2>
          <p class="mb-6 text-[#667185] text-center">You have successfully changed a password to your account.</p>
          <button @click="router.push('/dashboard/profile/payment-information')" class="w-full py-4 text-sm font-semibold text-white bg-[#292929] rounded-md">Proceed to login</button>
        </div>
    </main>
    </template>
  
    <script setup lang="ts">
   const router = useRouter()
  </script>