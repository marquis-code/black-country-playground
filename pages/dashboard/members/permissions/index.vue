<template>
<main class="min-h-screen">
    <div class="p-6">
        <!-- Search Bar -->
        <div class="flex justify-between items-center mb-6">
          <div class="relative">
            <input type="text" placeholder="Search" class="px-4 text-sm py-3 outline-none pl-10 border-[0.5px] border-gray-300 text-[#667185] rounded-md w-64">
            <img class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" :src="dynamicIcons('gray-search')" />
          </div>
          <button class="px-4 py-2.5 flex text-sm items-center gap-x-3 bg-[#292929] text-white rounded-md hover:bg-gray-800">
            <img :src="dynamicIcons('white-add')" /> New role
          </button>
        </div>
    
        <!-- Grid Layout for Roles -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <MembersRoleCard class="cursor-pointer" @click="router.push(`/dashboard/members/permissions/${index}`)" v-for="(role, index) in roles" :key="index" :role="role" />
        </div>
      </div>
</main>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
 const router = useRouter()

definePageMeta({
     layout: 'dashboard'
})
  
  const roles = ref([
    {
      title: 'Admin',
      description: 'Permissions',
      permissions: 'Lorem ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur.',
      accounts: 2,
      avatars: ['/avatars/avatar1.jpg', '/avatars/avatar2.jpg'],
    },
    {
      title: 'Property manager',
      description: 'Permissions',
      permissions: 'Lorem ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur.',
      accounts: 2,
      avatars: ['/avatars/avatar3.jpg', '/avatars/avatar4.jpg'],
    },
    {
      title: 'Admin',
      description: 'Permissions',
      permissions: 'Lorem ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur.',
      accounts: 2,
      avatars: ['/avatars/avatar1.jpg', '/avatars/avatar2.jpg'],
    },
    {
      title: 'Property manager',
      description: 'Permissions',
      permissions: 'Lorem ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur.',
      accounts: 2,
      avatars: ['/avatars/avatar3.jpg', '/avatars/avatar4.jpg'],
    },
    {
      title: 'Admin',
      description: 'Permissions',
      permissions: 'Lorem ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur.',
      accounts: 2,
      avatars: ['/avatars/avatar1.jpg', '/avatars/avatar2.jpg'],
    },
    {
      title: 'Property manager',
      description: 'Permissions',
      permissions: 'Lorem ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur. Lorem, ipsum, dolor, sit amet, consectetur.',
      accounts: 2,
      avatars: ['/avatars/avatar3.jpg', '/avatars/avatar4.jpg'],
    },
    // Add more roles as necessary
  ]);
  </script>
  