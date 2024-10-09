<template>
  <main>
    <main class="min-h-screen">
      <div class="">
        <section class="flex justify-between items-center">
          <div class="flex space-x-6 mb-4">
            <span class="text font-medium text-[#326543] pb-2 border-b-4 border-[#326543] cursor-pointer">All lease documents</span>
            <span class="text font-medium text-gray-500 pb-2 cursor-pointer">Pending signing</span>
            <span class="text font-medium text-gray-500 pb-2 cursor-pointer">Signed lease</span>
            <span class="text font-medium text-gray-500 pb-2 cursor-pointer">Draft</span>
          </div>
          <div class="pb-3">
            <!-- <button @click="generateLeaseDocument = true" class="bg-[#292929] text-white py-3 flex items-center gap-x-2 px-4 text-sm rounded-md">
              <img :src="dynamicIcons('white-add')" />
              New Lease
            </button> -->
            <button @click="router.push('/dashboard/property/lease-documents/templates')" class="bg-[#292929] text-white py-3 flex items-center gap-x-2 px-4 text-sm rounded-md">
              <img :src="dynamicIcons('white-add')" />
              New Lease
            </button>
          </div>
        </section>
        <section v-if="leaseTemplateList.length && !loading" class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div class="bg-white rounded-lg shadow p-4" v-for="itm in leaseTemplateList" :key="itm">
            <div class="flex justify-between items-start">
              <div class="space-y-2">
                <div v-html="shortenedText(itm.body)" class="p-4 rounded-lg text-[10px] overflow-hidden min-h-[150px] max-h-[150px]"></div>
                <div class="flex justify-between items-center">
                  <h6 class="text-base font-semibold text-gray-800 truncate">{{ itm?.name ?? 'Nil' }}</h6>
                  <button class="p-2" @click="toggleDropdown(itm.id)">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.4922 12H12.5012" stroke="#1D2739" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.4844 18H12.4934" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M12.5 6H12.509" stroke="#1D2739" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </button>
                </div>
                <p class="text-xs text-gray-600">
                  Tenant:
                  <span class="font-medium text-[#1D2739]">{{ user.firstName }} {{ user.lastName }}</span>
                </p>
                <p class="text-xs text-gray-600">
                  Last updated:
                  <span class="font-medium text-[#1D2739]">{{ moment(itm?.createdAt).format('DD MMM, YYYY') }}</span>
                </p>
              </div>
            </div>

            <!-- Dropdown Modal -->
            <div v-if="dropdownVisible === itm.id" class="absolute right-4 z-10 bg-white rounded-lg shadow-lg w-48 py-2">
              <ul class="text-gray-700">
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" @click="viewTemplate(itm)">
                  <img src="path/to/view-icon.svg" alt="View" class="w-4 h-4" />
                  <span>View</span>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" @click="sendNow(itm)">
                  <img src="path/to/send-icon.svg" alt="Send" class="w-4 h-4" />
                  <span>Send now</span>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" @click="duplicateTemplate(itm)">
                  <img src="path/to/duplicate-icon.svg" alt="Duplicate" class="w-4 h-4" />
                  <span>Duplicate</span>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" @click="downloadTemplate(itm)">
                  <img src="path/to/download-icon.svg" alt="Download" class="w-4 h-4" />
                  <span>Download</span>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 text-red-600" @click="deleteTemplate(itm)">
                  <img src="path/to/delete-icon.svg" alt="Delete" class="w-4 h-4" />
                  <span>Delete</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section v-else-if="!leaseTemplateList.length && loading">
          <div class="rounded-md p-4 w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-32 bg-slate-200 rounded"></div>
                <div class="space-y-3">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-32 w-full bg-slate-200 rounded col-span-2"></div>
                    <div class="h-32 w-full bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div class="h-32 w-full bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div v-else class="flex justify-center items-center flex-col h-96 bg-white rounded-md border-[0.5px] border-gray-100">
          <img src="@/assets/icons/empty-state.svg" alt="" />
          <p class="text-[#1D2739]">No document found</p>
        </div>
      </div>
    </main>
    <PropertyGenerateLeaseAgreementModal v-if="generateLeaseDocument" @close="generateLeaseDocument = false" />
  </main>
</template>

<script setup lang="ts">
import moment from "moment";
import { useUser } from "@/composables/auth/user";
const { user } = useUser();
import { useFetchLeaseTemplate } from '@/composables/modules/lease/fetch';
const { loading, leaseTemplateList } = useFetchLeaseTemplate();
import { dynamicIcons } from '@/utils/assets';
const generateLeaseDocument = ref(false);
const dropdownVisible = ref<null | number>(null); // To track the visible dropdown

const shortenedText = (text: string) => {
  const maxLength = 2000; // Adjust this value based on how much content you want to show
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const router = useRouter()

// Methods for dropdown actions
const toggleDropdown = (id: number) => {
  dropdownVisible.value = dropdownVisible.value === id ? null : id;
};

const viewTemplate = (itm: any) => {
  // Logic for viewing the template
  dropdownVisible.value = null;
};

const sendNow = (itm: any) => {
  // Logic for sending the template
  dropdownVisible.value = null;
};

const duplicateTemplate = (itm: any) => {
  // Logic for duplicating the template
  dropdownVisible.value = null;
};

const downloadTemplate = (itm: any) => {
  // Logic for downloading the template
  dropdownVisible.value = null;
};

const deleteTemplate = (itm: any) => {
  // Logic for deleting the template
  dropdownVisible.value = null;
};
</script>

<style scoped>
/* Additional styles for the dropdown modal */
</style>
