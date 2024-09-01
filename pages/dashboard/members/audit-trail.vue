<template>
    <main class="min-h-screen">
      <div class="p-6">
  
        <!-- Filters and Other Actions -->
        <div class="flex justify-between items-center mb-6">
          <div class="flex space-x-4">
            <button class="flex items-center gap-x-2 px-4 py-2 text-sm bg-white border border-gray-50 rounded-md text-[#1D2739]">
              <img :src="dynamicIcons('gray-filter')" /> Filter
            </button>
            <div class="relative">
              <input type="text" placeholder="Search" class="px-4 text-sm py-3 outline-none pl-10 border border-gray-50 text-[#667185] rounded-md w-64" />
              <img class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" :src="dynamicIcons('gray-search')" />
            </div>
          </div>
          <div class="flex space-x-4">
            <button class="px-4 py-3 bg-white flex text-sm items-center gap-x-3 text-[#292929] border border-gray-50 rounded-md">
              <img :src="dynamicIcons('gray-settings')" /> Configure table
            </button>
            <button class="px-4 py-3 bg-white border text-sm flex items-center gap-x-3 border-gray-50 rounded-md text-gray-70">
              <img :src="dynamicIcons('gray-download')" /> Export
            </button>
          </div>
        </div>
  
        <!-- Table Section -->
        <div class="bg-white rounded-lg shadow-md">
          <table class="min-w-full bg-white">
            <thead class="border-b border-gray-200">
              <tr>
                <th class="py-5 px-5 text-left text-sm font-medium text-gray-500">Members</th>
                <th class="py-5 px-5 text-left text-sm font-medium text-gray-500">Timestamp</th>
                <th class="py-5 px-5 text-left text-sm font-medium text-gray-500">Action type</th>
                <th class="py-5 px-5 text-left text-sm font-medium text-gray-500">Description</th>
                <th class="py-5 px-5 text-left text-sm font-medium text-gray-500">Entity type</th>
                <th class="py-5 px-5 text-left text-sm font-medium text-gray-500">IP address</th>
                <th class="py-5 px-5 text-left text-sm font-medium text-gray-500">Status</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
              <tr v-for="(item, index) in transactions" :key="index" class="hover:bg-gray-50">
                <td class="py-5 px-5 whitespace-nowrap text-sm text-[#1D2739] font-medium">
                  <div>{{ item.tenantName }}</div>
                  <div class="text-gray-400">{{ item.role }}</div>
                </td>
                <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.timestamp }}</td>
                <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.actionType }}</td>
                <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.description }}</td>
                <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.entityType }}</td>
                <td class="py-5 px-5 whitespace-nowrap text-sm text-[#667185]">{{ item.ipAddress }}</td>
                <td class="py-5 px-5 whitespace-nowrap text-sm">
                  <span
                    :class="{
                      'bg-green-100 text-green-800': item.status === 'Success',
                      'bg-red-100 text-red-800': item.status === 'Fail',
                    }"
                    class="px-4 py-1 inline-flex text-xs leading-5 font-semibold rounded-full"
                  >
                    {{ item.status }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <nav class="flex justify-between items-center mt-4 px-4 py-6">
            <div class="-mt-px flex w-0 flex-1">
              <button class="px-6 text-sm py-2 bg-[#F9FAFB] text-[#545454] border border-gray-300 rounded-md" disabled>Previous</button>
            </div>
            <div class="hidden md:-mt-px md:flex">
              <a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">1</a>
              <a href="#" class="inline-flex items-center px-4 pt-4 text-sm font-medium text-[#1D2739]" aria-current="page">2</a>
              <a href="#" class="inline-flex items-center border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">3</a>
              <span class="inline-flex items-center border-transparent px-4 pt-4 text-sm font-medium text-gray-500">...</span>
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
  import { ref } from 'vue';
  import { dynamicIcons } from '@/utils/assets';

  definePageMeta({
     layout: 'dashboard'
})
  
  const transactions = ref([
    {
      tenantName: "Gary Schimmel",
      role: "Property manager",
      timestamp: "22/03/2024 11:20 am",
      actionType: "Create",
      description: "Created a new property listing",
      entityType: "Property management",
      ipAddress: "116,00279",
      status: "Success",
    },
    {
      tenantName: "Jay Witting",
      role: "Agent",
      timestamp: "22/03/2024 11:20 am",
      actionType: "Approve",
      description: "Approved a maintenance request",
      entityType: "Maintenance",
      ipAddress: "116,00279",
      status: "Success",
    },
    {
      tenantName: "Jennie Boyer",
      role: "Agent",
      timestamp: "22/03/2024 11:20 am",
      actionType: "Login",
      description: "Logged into the system",
      entityType: "User session",
      ipAddress: "116,00279",
      status: "Fail",
    },
    {
      tenantName: "Jeanette Langworth",
      role: "Agent",
      timestamp: "22/03/2024 11:20 am",
      actionType: "Reject",
      description: "Rejected a rental application",
      entityType: "Rental application",
      ipAddress: "116,00279",
      status: "Fail",
    },
    {
      tenantName: "Mitchell Nienow",
      role: "Agent",
      timestamp: "22/03/2024 11:20 am",
      actionType: "View",
      description: "Viewd lease agreement details",
      entityType: "Lease management",
      ipAddress: "116,00279",
      status: "Success",
    },
  ]);
  
  const openModal = () => {
    // logic to open a modal
  };
  
  </script>
  