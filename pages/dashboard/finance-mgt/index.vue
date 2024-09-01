<template>
<main class="space-y-6 min-h-screen">
    <div class="flex items-center space-x-4">
        <button @click="openModal" class="flex text-sm gap-x-2 border-[0.5px] items-center px-4 py-3 bg-gray-25 hover:bg-gray-200 rounded-lg text-[#292929]">
          Filter
          <img :src="dynamicIcons('gray-filter')" />
        </button>
        <div class="relative flex-1">
          <input
            type="text"
            placeholder="Search"
            class="w-6/12 px-4 py-3.5 text-sm outline-none border-[0.5px] bg-gray-25 rounded-lg pl-10 text-gray-700 placeholder-gray-500 "
          />
          <img class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" :src="dynamicIcons('gray-search')" />
        </div>
        <div class="relative">
        <button @click="toggleDownloadModal" class="flex text-sm gap-x-2 border-[0.5px] items-center px-4 py-3 bg-gray-25 hover:bg-gray-200 rounded-lg text-[#292929]">
            <img :src="dynamicIcons('gray-download')" />
          Export
        </button>
        <div v-if="isDownloadModalOpen" class="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
            <div class="absolute right-10 top-40 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div @click="isDownloadModalOpen = false" v-for="(item, idx) in downloadOptions" :key="idx" class="p-4 cursor-pointer border-b last:border-b-0 border-gray-25 flex items-center">
                <img :src="dynamicIcons(item.icon)" />
                <span class="text-[#1D2739] text-sm">{{item.label}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:flex p-3 border border-gray-25 rounded-lg bg-white">
        <div v-for="(item, idx) in firstSection" :key="idx" class="h-32 cursor-pointer space-y-4 w-full border-gray-100 lg:border-r last:border-r-0 p-4">
          <div class="flex justify-end items-end ">
            <img :src="dynamicIcons(item.icon)" :alt="item.label" class="h-10 w-10 bg-gray-100 p-2 rounded-md" />
          </div>
          <div class="space-y-0.5">
            <h2 class="text-[#1D2739] font-medium text-2xl">
                {{item.value}}.<span class="text-sm">00</span>
              </h2>
            <h6 class="text-[#667185] font-light text-sm">{{item.label}}</h6>
          </div>
        </div>
      </div>

    <div class="p-6 bg-white rounded-lg shadow-md">
      <table class="min-w-full bg-white">
        <thead class="border-b-[0.5px] border-gray-50">
          <tr>
            <th class="py-3 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Date</th>
            <th class="py-3 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Transaction ID</th>
            <th class="py-3 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Property name</th>
            <th class="py-3 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Tenant name</th>
            <th class="py-3 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Payment method</th>
            <th class="py-3 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Amount (NGN)</th>
            <th class="py-3 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Category</th>
            <th class="py-3 px-5 text-left text-sm font-medium text-gray-500 tracking-wider">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="(item, index) in transactions" :key="index">
            <td class="py-4 px-5 whitespace-nowrap text-sm text-gray-700">
              {{ item.date }}
              <br />
              <span class="text-gray-400 text-xs">{{ item.time }}</span>
            </td>
            <td class="py-4 px-5 whitespace-nowrap text-sm text-gray-700">
              <span class="block font-medium">{{ item.transactionId }}</span>
              <span class="text-gray-400 text-xs">{{ item.transactionCode }}</span>
            </td>
            <td class="py-4 px-5 whitespace-nowrap text-sm text-gray-700">{{ item.propertyName }}</td>
            <td class="py-4 px-5 whitespace-nowrap text-sm text-gray-700">{{ item.tenantName }}</td>
            <td class="py-4 px-5 whitespace-nowrap text-sm text-gray-700">{{ item.paymentMethod }}</td>
            <td class="py-4 px-5 whitespace-nowrap text-sm text-gray-700">{{ item.amount }}</td>
            <td class="py-4 px-5 whitespace-nowrap text-sm text-gray-700">{{ item.category }}</td>
            <td class="py-4 px-5 whitespace-nowrap text-sm">
              <span
                :class="{
                  'bg-green-100 text-green-800': item.status === 'Paid',
                  'bg-yellow-100 text-yellow-800': item.status === 'Due',
                  'bg-red-100 text-red-800': item.status === 'Overdue',
                }"
                class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
              >
                {{ item.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
      <nav class="flex justify-between items-center mt-4 px-4 pt-6">
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
    <CoreFilterModal v-if="showModal" @close="closeModal" />
</main>
  </template>
  
  <script lang="ts" setup>
    import { dynamicIcons } from '@/utils/assets';
    definePageMeta({
     layout: 'dashboard'
})

const isDownloadModalOpen = ref(false);

const toggleDownloadModal = () => {
  isDownloadModalOpen.value = !isDownloadModalOpen.value;
};

const downloadOptions = ref([
    { icon: 'gray-pdf', value: '₦5,300,000', label: 'Pdf' },
  { icon: 'gray-excel', value: '₦5,300,000', label: 'Excel/spreadsheet' },
  { icon: 'gray-csv', value: '₦5,300,000', label: 'csv' },
])


const firstSection = ref([
  { icon: 'total-income', value: '₦5,300,000', label: 'Rent received' },
  { icon: 'total-income', value: '₦5,300,000', label: 'Service charge' },
  { icon: 'total-income', value: '₦5,300,000', label: 'Upcoming rent' },
  { icon: 'total-income', value: '₦5,300,000', label: 'Outstanding rent' },
  { icon: 'maintance', value: '₦1,300,000', label: 'Maintance' },
])

const showModal = ref(false);

const openModal = () => {
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
};

  const transactions = ref([
    {
      date: '22/03/2024',
      time: '11:20 am',
      transactionId: 'TXN123456',
      transactionCode: '789',
      propertyName: 'Sunshine Apartments',
      tenantName: 'Gary Schimmel',
      paymentMethod: 'Card',
      amount: '116, 20.52',
      category: 'Rent',
      status: 'Paid',
    },
    {
      date: '22/03/2024',
      time: '11:20 am',
      transactionId: 'TXN123456',
      transactionCode: '789',
      propertyName: 'Green Acres',
      tenantName: 'Jay Witting',
      paymentMethod: 'Bank transfer',
      amount: '693,490.61',
      category: 'Security',
      status: 'Due',
    },
    {
      date: '22/03/2024',
      time: '11:20 am',
      transactionId: 'TXN123456',
      transactionCode: '789',
      propertyName: 'Sunset Villas',
      tenantName: 'Jennie Boyer',
      paymentMethod: 'Bank Debit',
      amount: '597,700.55',
      category: 'Rent',
      status: 'Overdue',
    },
    {
      date: '22/03/2024',
      time: '11:20 am',
      transactionId: 'TXN123456',
      transactionCode: '789',
      propertyName: 'Wuckert, Moen and Murphy',
      tenantName: 'Jeanette Langworth',
      paymentMethod: 'Bank Debit',
      amount: '633,420.08',
      category: 'Maintenance',
      status: 'Due',
    },
    {
      date: '22/03/2024',
      time: '11:20 am',
      transactionId: 'TXN123456',
      transactionCode: '789',
      propertyName: 'Kuhn Group',
      tenantName: 'Mitchell Nienow',
      paymentMethod: 'Card',
      amount: '886,28.00',
      category: 'Service charge',
      status: 'Paid',
    },
  ]);
  
  const currentPage = ref(1);
  </script>