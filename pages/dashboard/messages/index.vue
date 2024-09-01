<template>
<main class="min-h-screen">

  <div class="max-w-2xl mx-auto mt-10 p-4 bg-white rounded-lg shadow-sm relative">
    <!-- Search bar with icons -->
    <div class="flex items-center space-x-4 mb-6">
      <div class="relative w-full">
        <input
          type="text"
          placeholder="Search"
          class="w-full pl-10 pr-4 py-3 text-sm rounded-lg bg-[#EAEAEA] outline-none"
        />
        <svg
          class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3.5a7.5 7.5 0 016.15 12.15z"
          />
        </svg>
      </div>
      <button class="p-2 rounded-lg bg-[#EAEAEA]">
        <img :src="dynamicIcons('gray-add')" />
      </button>
     <div class="relative">
      <button @click="toggleDropdown"  class="p-2 rounded-lg bg-[#EAEAEA]">
        <img :src="dynamicIcons('gray-filter')" />
      </button>
      <div v-if="isDropdownOpen" class="absolute right-0 mt-2 w-60 bg-white border border-gray-50 rounded-xl z-10">
        <div v-for="(filter, index) in filters" :key="index" @click="selectFilter(filter)" class="p-4 flex border-b last:border-b-0 border-gray-50 items-center hover:bg-gray-100 cursor-pointer">
          <img :src="filter.avatar" alt="User Avatar" class="h-10 w-10 rounded-full object-cover mr-3" />
          <div>
            <p class="font-medium text-sm text-[#1D2739]">{{ filter.name }}</p>
            <p class="text-[#1D2739] text-xs">{{ filter.role }}</p>
          </div>
        </div>
      </div>
     </div>
    </div>

    <!-- User list -->
    <div class="rounded-lg">
      <div v-for="(user, index) in users" :key="index"  class="flex border-b border-gray-50 last:border-0 items-center justify-between p-4 bg-white">
        <div class="flex items-center space-x-4">
          <img :src="dynamicImage('avatar.png')" alt="User Avatar" class="h-10 w-10 rounded-full object-cover" />
          <div>
            <p class="font-medium text-sm text-[#1D2739]">{{ user.name }}</p>
            <p class="text-[#667185] text-xs">{{ user.message }}</p>
          </div>
        </div>
        <div class="flex flex-col items-end space-y-1">
          <p  class="text-xs text-[#667185]">{{ user.date }}</p>
          <svg
            v-if="user.status === 'completed'"
            class="h-5 w-5 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span
            v-if="user.status === 'active'"
            class="h-2 w-2 rounded-full bg-green-500"
          ></span>
        </div>
      </div>
    </div>
  </div>
</main>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import { dynamicImage, dynamicIcons } from "@/utils/assets";
  const router  = useRouter()
  definePageMeta({
     layout: 'dashboard'
})
  
  const isDropdownOpen = ref(false);
  
  const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
  };
  
  const closeDropdown = (event) => {
    if (event.target.closest('.relative')) return;
    isDropdownOpen.value = false;
  };
  
  onMounted(() => {
    document.addEventListener('click', closeDropdown);
  });
  
  const selectFilter = (filter) => {
    console.log('Selected filter:', filter);
    isDropdownOpen.value = false;
  };
  
  const users = ref([
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'John Walton',
      message: "I'm interested in renting a room in the apartment",
      date: '08 Feb',
      status: 'completed',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'Jason Co-living space Broadcast',
      message: 'I will send the address shortly. Kindly schedule through the platform.',
      date: '08 Feb',
      status: 'active',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      name: 'John Walton',
      message: "I'm interested in renting a room in the apartment",
      date: '08 Feb',
      status: 'completed',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'John Walton',
      message: "I'm interested in renting a room in the apartment",
      date: '08 Feb',
      status: 'completed',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'Jason Co-living space Broadcast',
      message: 'I will send the address shortly. Kindly schedule through the platform.',
      date: '08 Feb',
      status: 'active',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      name: 'John Walton',
      message: "I'm interested in renting a room in the apartment",
      date: '08 Feb',
      status: 'completed',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'John Walton',
      message: "I'm interested in renting a room in the apartment",
      date: '08 Feb',
      status: 'completed',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      name: 'Jason Co-living space Broadcast',
      message: 'I will send the address shortly. Kindly schedule through the platform.',
      date: '08 Feb',
      status: 'active',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      name: 'John Walton',
      message: "I'm interested in renting a room in the apartment",
      date: '08 Feb',
      status: 'completed',
    },
  ]);
  
  const filters = ref([
    {
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      name: 'Jeffery McKenzie',
      role: 'Super admin',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/42.jpg',
      name: 'Susie Roob',
      role: 'Property manager',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      name: 'Lonnie Wisoky',
      role: 'Property manager',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      name: 'Stacey Towne',
      role: 'Property manager',
    },
    {
      avatar: 'https://randomuser.me/api/portraits/men/62.jpg',
      name: 'John Walton',
      role: 'Property manager',
    },
  ]);
  </script>
  