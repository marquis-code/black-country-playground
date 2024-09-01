<template>
<main class="min-h-screen">
  <div class="flex items-center justify-center">
    <div class="max-w-md w-full p-8 space-y-8">
      <div class="flex flex-col items-center">
        <div class="border-4 border-gray-100 rounded-full">
          <img
          src="@/assets/img/avatar.png"
          alt="Profile Image"
          class="w-24 h-24 rounded-full border-4 object-cover border-gray-500"
        />
        </div>
        <h2 class="mt-3 text-lg font-semibold text-[#1D2739]">Rufus Ugochukwu</h2>
        <p class="text-[#667185] font-light">Agent</p>
      </div>

   <div class="">
    <div class="border-[0.5px] bg-white border-gray-50 rounded-lg py-4">
      <p class="text-[#1D2739] pl-4 text-sm">Account settings</p>
    </div>


    <div class="mt-2 bg-white rounded-lg py-3">
      <NuxtLink :to="item.url" v-for="(item, idx) in profileListItems" :key="idx"
        href="#"
        class="flex items-center justify-between p-4 transition-colors duration-150"
      >
        <div class="flex items-center gap-x-3">
          <img :src="dynamicIcons(item.icon)" />
          <span class="text-gray-800 font-medium text-sm">{{item.name}}</span>
        </div>
          <img :src="dynamicIcons('more-icon')" />
      </NuxtLink>
    </div>


    <div class="mt-6 border-[0.5px] bg-white border-gray-50 rounded-lg py-4 pl-4">
      <a
        href="#"
        class="flex items-center text-sm text-[#BA110B] gap-x-3 font-semibold hover:text-[#BA110B] transition-colors duration-150"
      >
      <img :src="dynamicIcons('logout-red')" />
        
        Log out
      </a>
    </div>
   </div>
    </div>
  </div>
</main>
</template>

<script setup lang="ts">
import { dynamicIcons } from "@/utils/assets";
definePageMeta({
     layout: 'dashboard'
})

const profileListItems = ref([
  {
    name: 'Profile settings',
    url: '/dashboard/profile/settings',
    icon: 'profile-icon'
  },
  {
    name: 'Payment Information',
    icon: 'payment',
    url: '/dashboard/profile/payment',
  },
  {
    name: 'Notification Preference',
    icon: 'notification',
    url: '/dashboard/profile/notification',
  },
  {
    name: 'Login and Security',
    icon: 'security',
    url: '/dashboard/profile/security',
  }
])
</script>

<style scoped>
body {
  @apply bg-gray-50;
}

.max-w-md {
  width: 100%;
}
</style>
