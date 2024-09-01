<template>
<main class="min-h-screen">
  <div class="p-6">
    <!-- Header Section -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex space-x-4">
        <button class="text-gray-700 font-semibold focus:outline-none">Members</button>
        <button class="text-gray-500 font-semibold focus:outline-none">Roles & permissions</button>
        <button class="text-gray-500 font-semibold focus:outline-none">Audit trail</button>
      </div>
    </div>

    <!-- Filters and Other Actions -->
    <div class="flex justify-between items-center mb-6">
      <div class="flex space-x-4">
        <button class="flex items-center gap-x-2 px-4 py-2 text-sm space-x-3 bg-white border-[0.5px] border-gray-300 rounded-md text-[#1D2739">
          Filter
          <img :src="dynamicIcons('gray-filter')" />
        </button>
        <div class="relative">
          <input type="text" placeholder="Search" class="px-4 text-sm py-3 outline-none pl-10 border-[0.5px] border-gray-300 text-[#667185] rounded-md w-64">
          <img class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" :src="dynamicIcons('gray-search')" />
        </div>
      </div>
      <div class="flex space-x-4">
        <div>
          <button @click="openModal" class="px-4 py-3 flex text-sm items-center gap-x-3 bg-[#292929] text-white rounded-md hover:bg-gray-800">
            <img :src="dynamicIcons('white-add')" /> New member
          </button>
        </div>
        <button class="px-4 py-3 bg-white flex items-center gap-x-3 text-[#292929] border-[0.5px] text-sm border-gray-300 rounded-md">
          <img :src="dynamicIcons('gray-settings')" />
          Configure table</button>
        <button class="px-4 py-3 bg-white border-[0.5px] text-sm flex items-center gap-x-3 border-gray-300 rounded-md text-gray-70">
          <img :src="dynamicIcons('gray-download')" />
          Export</button>
      </div>
    </div>

    <!-- Placeholder for no members -->
    <div v-if="!!!transactions" class="flex flex-col items-center justify-center h-96 bg-white rounded-lg ">
      <div class="flex items-center justify-center p-6 mb-4">
        <img :src="dynamicIcons('users-illustration')" alt="Icon" />
      </div>
      <p class="text-[#1D2739] font-medium text-sm">You’re yet to invite members</p>
    </div>
    <!-- Reusable Modal Component -->
    <MembersInviteMemberModal class="" :isOpen="isModalOpen" @close="closeModal" />
  </div>
<div class="px-6">
  <div v-if="transactions" class="bg-white rounded-lg">
    <table class="min-w-full bg-white">
      <thead class="border-b-[0.5px] border-gray-50">
        <tr>
          <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Full name</th>
          <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Email</th>
          <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Role</th>
          <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Status</th>
          <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Last active</th>
          <th class="py-5 px-5 text-right text-sm font-medium text-gray-500 tracking-wider">Action</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-50">
        <tr class="cursor-pointer" @click="router.push(`/dashboard/members/${index}`)" v-for="(item, index) in transactions" :key="index">
          <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185] font-semibold">{{ item.tenantName }}</td>
          <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.email }}</td>
          <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.role }}</td>
          <td class="py-5 px-5 whitespace-nowrap text-sm">
            <span
              :class="{
                'bg-green-100 text-green-800': item.status === 'Active',
                'bg-yellow-100 text-yellow-800': item.status === 'Invite Pending',
              }"
              class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
            >
              {{ item.status }}
            </span>
          </td>
          <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.lastActive }}</td>
          <td class="py-5 px-5 whitespace-nowrap text-sm text-right">
            <button @click="toggleDropdown(index)" class="inline-flex items-center text-sm font-medium text-[#667185] hover:text-black">
              <img :src="dynamicIcons('more-icon')" />
            </button>
                       <!-- Dropdown Menu -->
                       <div
                       v-if="activeDropdown === index"
                       class="absolute right-16 z-50 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg"
                     >
                       <ul class="py-1 text-sm text-gray-700">
                         <li>
                           <a
                           @click.prevent="handleDropdownClick"
                             href="#"
                             class="block px-4 py-2 hover:bg-gray-100 text-start"
                             >View user</a
                           >
                         </li>
                         <li>
                           <a
                           @click.prevent="handleDropdownClick"
                             href="#"
                             class="block px-4 py-2 hover:bg-gray-100 text-start"
                             >Deactivate user</a
                           >
                         </li>
                         <li>
                           <a
                           @click.prevent="handleDropdownClick"
                             href="#"
                             class="block px-4 py-2 hover:bg-gray-100 text-start"
                             >Remove user</a
                           >
                         </li>
                       </ul>
                     </div>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Screen Overlay -->
    <div
    v-if="activeDropdown !== null"
    @click="closeDropdown"
    class="fixed inset-0 z-40 bg-black opacity-25"
  ></div>

    <!-- Pagination -->
    <nav class="flex justify-between items-center mt-4 px-4 py-6">
      <div class="-mt-px flex w-0 flex-1">
        <button class="px-6 text-sm py-2 bg-[#F9FAFB] text-[#545454] border-[0.5px] rounded-md" disabled>Previous</button>
      </div>
      <div class="hidden md:-mt-px md:flex">
        <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">1</a>
        <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-[#1D2739]" aria-current="page">2</a>
        <a href="#" class="inline-flex items-center border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">3</a>
        <span class="inline-flex items-center border-transparent px-4 pt-4 text-sm font-medium text-gray-500">...</span>
        <a href="#" class="inline-flex items-center border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">8</a>
        <a href="#" class="inline-flex items-center border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">9</a>
        <a href="#" class="inline-flex items-center border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">10</a>
      </div>
      <div class="-mt-px flex w-0 flex-1 justify-end">
        <button class="px-6 text-sm py-2 bg-[#292929] text-white rounded-md">Next</button>
      </div>
    </nav>
  </div>
</div>
</main>
</template>

<script lang="ts" setup>
    import { dynamicIcons } from '@/utils/assets'; 
    const router = useRouter()
import { ref } from 'vue';
definePageMeta({
     layout: 'dashboard'
})

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const transactions = ref([
  {
    tenantName: 'Viola Gottlieb',
    email: 'VG73@hotmail.com',
    role: 'Super Admin',
    status: 'Active',
    lastActive: '11/03/2024',
  },
  {
    tenantName: 'Forrest Bosco',
    email: 'Jake.Koelpin@yahoo.com',
    role: 'Property Manager',
    status: 'Invite Pending',
    lastActive: '11/03/2024',
  },
  {
    tenantName: 'Veronica Harber',
    email: 'Antoinette82@yahoo.com',
    role: 'Service Provider',
    status: 'Active',
    lastActive: 'N/A',
  },
  {
    tenantName: 'Antoinette Marquardt',
    email: 'Veronica14@hotmail.com',
    role: 'Legal Compliance',
    status: 'Invite Pending',
    lastActive: '11/03/2024',
  },
  {
    tenantName: 'Jake Koelpin',
    email: 'jk4@hotmail.com',
    role: 'Finance Admin',
    status: 'Active',
    lastActive: '11/03/2024',
  },
  {
    tenantName: 'Ernest McCullough',
    email: 'Ernest95@yahoo.com',
    role: 'Tenant relations',
    status: 'Active',
    lastActive: '11/03/2024',
  },
  {
    tenantName: 'Katherine Kunde',
    email: 'Katherine_Kunde@gmail.com',
    role: 'Agent',
    status: 'Invite Pending',
    lastActive: 'N/A',
  },
]);

// State to manage which dropdown is active
const activeDropdown = ref<number | null>(null);

// Function to toggle the dropdown visibility
const toggleDropdown = (index: number) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = index;
  }
};

// Function to close the dropdown
const closeDropdown = () => {
  activeDropdown.value = null;
};

// Function to handle dropdown option click
const handleDropdownClick = () => {
  closeDropdown();
  // Additional logic for handling the selected option can be added here
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
