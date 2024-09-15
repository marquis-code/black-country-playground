<template>
  <Layout>
    <template #header-content>
      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-between">
        <div class="flex items-center gap-x-4">
          <h4 class="text-[#1D2739] text-lg">Property Management</h4>
          <button @click="router.push('/dashboard/property')" class="bg-[#5B8469] font-medium px-4 py-3 rounded-md text-white">Listings</button>
          <button @click="router.push('/dashboard/property/rental-applications')" class="text-[#292929] font-medium bg-[#F0F2F5] px-4 py-3 rounded-md">Rental applications</button>
          <button @click="router.push('/dashboard/property/lease-documents')" class="text-[#292929] font-medium bg-[#F0F2F5] px-4 py-3 rounded-md">Lease Documents</button>
        </div>
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <NuxtLink
            to="/dashboard/notification"
            class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">View notifications</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </NuxtLink>
          <div
            class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10"
            aria-hidden="true"
          ></div>
          <div class="relative">
            <button
              type="button"
              class="-m-1.5 flex items-center p-1.5"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
            >
              <span class="sr-only">Open user menu</span>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="#292929"/>
                <path d="M20.0817 20.1818C20.0817 21.4242 19.8544 22.4924 19.3999 23.3864C18.9453 24.2765 18.3222 24.9621 17.5305 25.4432C16.7427 25.9205 15.8468 26.1591 14.843 26.1591C13.8355 26.1591 12.9358 25.9205 12.1442 25.4432C11.3563 24.9621 10.7351 24.2746 10.2805 23.3807C9.82599 22.4867 9.59872 21.4205 9.59872 20.1818C9.59872 18.9394 9.82599 17.8731 10.2805 16.983C10.7351 16.089 11.3563 15.4034 12.1442 14.9261C12.9358 14.4451 13.8355 14.2045 14.843 14.2045C15.8468 14.2045 16.7427 14.4451 17.5305 14.9261C18.3222 15.4034 18.9453 16.089 19.3999 16.983C19.8544 17.8731 20.0817 18.9394 20.0817 20.1818ZM18.343 20.1818C18.343 19.2348 18.1896 18.4375 17.8828 17.7898C17.5798 17.1383 17.1631 16.6458 16.6328 16.3125C16.1063 15.9754 15.5097 15.8068 14.843 15.8068C14.1726 15.8068 13.5741 15.9754 13.0476 16.3125C12.5211 16.6458 12.1044 17.1383 11.7976 17.7898C11.4946 18.4375 11.343 19.2348 11.343 20.1818C11.343 21.1288 11.4946 21.928 11.7976 22.5795C12.1044 23.2273 12.5211 23.7197 13.0476 24.0568C13.5741 24.3902 14.1726 24.5568 14.843 24.5568C15.5097 24.5568 16.1063 24.3902 16.6328 24.0568C17.1631 23.7197 17.5798 23.2273 17.8828 22.5795C18.1896 21.928 18.343 21.1288 18.343 20.1818ZM22.2706 26V14.3636H26.4183C27.3198 14.3636 28.0679 14.5189 28.6626 14.8295C29.2611 15.1402 29.7081 15.5701 30.0036 16.1193C30.299 16.6648 30.4467 17.2955 30.4467 18.0114C30.4467 18.7235 30.2971 19.3504 29.9979 19.892C29.7024 20.4299 29.2554 20.8485 28.657 21.1477C28.0623 21.447 27.3142 21.5966 26.4126 21.5966H23.2706V20.0852H26.2536C26.8217 20.0852 27.2839 20.0038 27.6399 19.8409C27.9998 19.678 28.263 19.4413 28.4297 19.1307C28.5964 18.8201 28.6797 18.447 28.6797 18.0114C28.6797 17.572 28.5945 17.1913 28.424 16.8693C28.2573 16.5473 27.9941 16.3011 27.6342 16.1307C27.2782 15.9564 26.8104 15.8693 26.2308 15.8693H24.0263V26H22.2706ZM28.0149 20.75L30.8899 26H28.8899L26.0717 20.75H28.0149Z" fill="#EBE5E0"/>
                </svg>
                
              <span class="hidden lg:flex lg:items-center">
              <div>
                <span
                class="ml-4 text-sm py-0 my-0 font-semibold block leading-6 text-gray-900"
                aria-hidden="true"
                >Viola Gottlieb</span
              >
              <span class="text-sm py-0 my-0 font-light text-[#667185] block">Super admin</span>
              </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="#1D2739" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
              </span>
            </button>
          </div>
        </div>
      </div>
    </template>
  <main class="min-h-screen">
    <div class="p-6">
      <!-- Filters and Other Actions -->
      <div class="flex justify-between items-center mb-6">
        <div class="flex space-x-4">
          <button @click="propertyFilterModal = true" class="flex items-center gap-x-2 px-4 py-2 text-sm space-x-3 bg-white border-[0.5px] border-gray-300 rounded-md text-[#1D2739]">
            Filter
            <img :src="dynamicIcons('gray-filter')" />
          </button>
          <div class="relative">
            <input
            v-model="searchQuery"
            placeholder="Search properties..."
            @input="handleSearch"
            type="text" class="px-4 text-sm py-3 outline-none pl-10 border-[0.5px] border-gray-300 text-[#667185] rounded-md w-64">
            <img class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" :src="dynamicIcons('gray-search')" />
          </div>
        </div>
        <div class="flex space-x-4">
          <button @click="propertyConfigModal = true" class="px-4 py-3 bg-white flex items-center gap-x-3 text-[#292929] border-[0.5px] text-sm border-gray-300 rounded-md">
            <img :src="dynamicIcons('gray-settings')" />
            Configure table
          </button>
          <button class="px-4 py-3 bg-white border-[0.5px] text-sm flex items-center gap-x-3 border-gray-300 rounded-md text-gray-70">
            <img :src="dynamicIcons('gray-download')" />
            Export
          </button>
          <button @click="router.push('/dashboard/property/create-steps')" class="px-4 py-3 flex text-sm items-center gap-x-3 bg-[#292929] text-white rounded-md hover:bg-gray-800">
            <img :src="dynamicIcons('white-add')" /> New Property
          </button>
        </div>
      </div>
      <!-- Table -->
      <div class="bg-white rounded-lg">
        <table v-if="propertiesList" class="min-w-full bg-white">
          <thead  class="border-b-[0.5px] border-gray-50">
            <tr>
              <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Property name</th>
              <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Property type</th>
              <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Location</th>
              <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Agent assigned</th>
              <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Occupants</th>
              <th class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Bathroom count</th>
              <th class="py-5 px-5 text-right text-sm font-medium text-gray-500 tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr class="cursor-pointer" v-for="(item, index) in propertiesList" :key="index">
              <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185] font-semibold relative">
                <p>{{ item.name ?? 'Nil' }}</p>
                <span v-if="item.status === 'draft'" class="text-[#1D2739] absolute left-0 bottom-0 bg-[#F7D394] text-xs px-3 py-1 rounded-sm">Draft</span>
              </td>
              <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.propertyType ?? 'Nil' }}</td>
              <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.address ?? 'Nil' }}</td>
              <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item?.agent?.firstName }} {{ item?.agent?.lastName }}</td>
              <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.occupants ?? 'Nil' }}</td>
              <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.bathroomCount  ?? 'Nil' }}</td>
              <td class="py-5 px-5 whitespace-nowrap text-sm text-right">
                <button @click="toggleDropdown(index)" class="inline-flex items-center text-sm font-medium text-[#667185] hover:text-black">
                  <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9966 22H22.0041" stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M27 22H27.0075" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M17 22H17.0075" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
                </button>
                <!-- Dropdown Menu -->
                <div
                  v-if="activeDropdown === index"
                  class="absolute right-16 z-50 mt-2 w- bg-white border border-gray-200 rounded-md shadow-lg"
                >
                  <ul class="py-1 text-sm text-gray-700 divide divide-y-[0.5px]">
                    <li>
                      <a
                        @click.prevent="handleDropdownClick"
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                        >
                        <img :src="dynamicIcons('view-property')" />
                        View property</a
                      >
                    </li>
                    <li>
                      <a
                        @click.prevent="handleDropdownClick"
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                        >
<img :src="dynamicIcons('edit-property')" />
                        Edit property</a
                      >
                    </li>
                    <li>
                      <a
                        @click.prevent="handleDropdownClick"
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                        >
<img :src="dynamicIcons('duplicate-property')" />
                        Duplicate property & edit</a
                      >
                    </li>
                    <li>
                      <a
                        @click.prevent="handleDropdownClick"
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                        >
                        <img :src="dynamicIcons('deactivate-property')" />
                        Deactivate property</a
                      >
                    </li>
                    <li>
                      <a
                        @click.prevent="handleDropdownClick"
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                        >
                        <img  :src="dynamicIcons('delete-property')"/>
                        Delete property</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div v-if="loadingProperties" class="h-32 bg-slate-200 rounded animate-pulse w-full m-3"></div>
        <div v-if="!loadingProperties && propertiesList.length === 0">
          No properties found.
        </div>
        <!-- Screen Overlay -->
        <div
          v-if="activeDropdown !== null"
          @click="closeDropdown"
          class="fixed inset-0 z-40 bg-black opacity-25"
        ></div>

        <!-- Pagination -->
        <nav v-if="propertiesList && !loadingProperties" class="flex justify-between items-center mt-4 px-4 py-6">
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

  <PropertyConfigTableModal v-if="propertyConfigModal" @close="propertyConfigModal = false" />
  <PropertyFilterModal v-if="propertyFilterModal" @close="propertyFilterModal = false" />
</Layout>
</template>

<script lang="ts" setup>
import { useGetProperties } from '@/composables/modules/property/fetchProperties'
import Layout from '@/layouts/dashboard.vue';
import { dynamicIcons } from '@/utils/assets';
const router = useRouter()

const { 
  getProperties, 
  loadingProperties, 
  propertiesList, 
  searchQuery, 
  currentPage, 
  totalPages, 
  debouncedGetProperties 

 } = useGetProperties()

const propertyConfigModal = ref(false)
const propertyFilterModal = ref(false)

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

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

// Handle search input change
const handleSearch = () => {
  debouncedGetProperties()
}

// Navigate to the previous page
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

// Navigate to the next page
const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
