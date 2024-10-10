<script setup lang="ts">
import moment from "moment";
import { useUser } from "@/composables/auth/user";
import { useFetchLeaseAgreement } from '@/composables/modules/lease/fetchLeaseAgreements';
import { useFetchLeaseTemplate } from '@/composables/modules/lease/fetch';
import { dynamicIcons } from '@/utils/assets';
import { useRouter } from 'vue-router';

const { user } = useUser();
const { loading: fetching, leaseAgreementList } = useFetchLeaseAgreement();
const { loading, leaseTemplateList } = useFetchLeaseTemplate();
const generateLeaseDocument = ref(false);
const dropdownVisible = ref<null | number>(null);
const activeTab = ref('all');
const router = useRouter();

// Grouping the lease agreements based on their status
const groupedLeaseAgreements = computed(() => {
  return {
    all: leaseAgreementList.value,
    pending: leaseAgreementList.value.filter(lease => lease.status === 'PENDING_SIGNAGE'),
    signed: leaseAgreementList.value.filter(lease => lease.status === 'SIGNED'),
    draft: leaseAgreementList.value.filter(lease => lease.status === 'draft')
  };
});

// Filtered list based on the active tab
const filteredLeaseAgreements = computed(() => {
  if (activeTab.value === 'all') return groupedLeaseAgreements.value.all;
  if (activeTab.value === 'pending') return groupedLeaseAgreements.value.pending;
  if (activeTab.value === 'signed') return groupedLeaseAgreements.value.signed;
  if (activeTab.value === 'draft') return groupedLeaseAgreements.value.draft;
  return [];
});

const shortenedText = (text: string) => {
  const maxLength = 2000;
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};

const toggleDropdown = (id: number) => {
  dropdownVisible.value = dropdownVisible.value === id ? null : id;
};

const viewTemplate = (itm: any) => {
  dropdownVisible.value = null;
};

const sendNow = (itm: any) => {
  dropdownVisible.value = null;
};

const duplicateTemplate = (itm: any) => {
  dropdownVisible.value = null;
};

const downloadTemplate = (itm: any) => {
  dropdownVisible.value = null;
};

const deleteTemplate = (itm: any) => {
  dropdownVisible.value = null;
};

const isLeaseAgreementContentEmpty = (content: string) => {
  // Create a new DOM parser to parse the HTML content
  const parser = new DOMParser();
  const doc = parser.parseFromString(content, 'text/html');
  
  // Check if the parsed HTML body is empty (no text or meaningful content)
  return !doc.body.textContent?.trim();
};

</script>

<template>
  <main>
    <main class="min-h-screen">
      <div>
        <section class="flex justify-between items-center">
          <div class="flex space-x-6 mb-4">
            <span @click="activeTab = 'all'" :class="[activeTab === 'all' ? 'border-[#5B8469] border-b-2 text-[#5B8469]' : 'text-gray-700']" class="text-sm font-medium text-gray-500 pb-2 cursor-pointer">All lease documents</span>
            <span @click="activeTab = 'pending'" :class="[activeTab === 'pending' ? 'border-[#5B8469] border-b-2 text-[#5B8469]' : 'text-gray-700']" class="text-sm font-medium text-gray-500 pb-2 cursor-pointer">Pending lease</span>
            <span @click="activeTab = 'signed'" :class="[activeTab === 'signed' ? 'border-[#5B8469] border-b-2 text-[#5B8469]' : 'text-gray-700']" class="text-sm font-medium text-gray-500 pb-2 cursor-pointer">Signed lease</span>
            <span @click="activeTab = 'draft'" :class="[activeTab === 'draft' ? 'border-[#5B8469] border-b-2 text-[#5B8469]' : 'text-gray-700']" class="text-sm font-medium text-gray-500 pb-2 cursor-pointer">Draft</span>
          </div>
          <div class="pb-3">
            <NuxtLink to="/dashboard/property/lease-documents/templates" class="bg-[#292929] text-white py-3 flex items-center gap-x-2 px-4 text-sm rounded-md">
              <img :src="dynamicIcons('white-add')" />
              New Lease
            </NuxtLink>
          </div>
        </section>
        <section v-if="filteredLeaseAgreements.length && !loading" class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div class="bg-white rounded-lg shadow p-4" v-for="lease in filteredLeaseAgreements" :key="lease.id">
            <div class="flex justify-between items-start">
              <div class="space-y-2 w-full">
                <div v-if="isLeaseAgreementContentEmpty(lease.leaseAgreementContent)" class="flex justify-center items-center w-full">
                  <img src="@/assets/icons/no-document.svg" alt="" class="h-32 w-full" />
                </div>
                <div v-else v-html="shortenedText(lease.leaseAgreementContent)" class="p-4 rounded-lg text-[10px] overflow-hidden min-h-[150px] max-h-[150px]"></div>
                <div class="flex justify-between items-center">
                  <h6 class="text-base font-semibold text-gray-800 truncate">{{ lease.signeeName ?? 'Nil' }}</h6>
                  <button class="p-2" @click="toggleDropdown(lease.id)">
                    <!-- SVG icon -->
                  </button>
                </div>
                <p class="text-xs text-gray-600">
                  Tenant:
                  <span class="font-medium text-[#1D2739]">{{ user.firstName }} {{ user.lastName }}</span>
                </p>
                <p class="text-xs text-gray-600">
                  Last updated:
                  <span class="font-medium text-[#1D2739]">{{ moment(lease.createdAt).format('DD MMM, YYYY') }}</span>
                </p>
              </div>
            </div>

            <!-- Dropdown Modal -->
            <div v-if="dropdownVisible === lease.id" class="absolute right-4 z-10 bg-white rounded-lg shadow-lg w-48 py-2">
              <ul class="text-gray-700">
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" @click="viewTemplate(lease)">
                  <!-- View Icon -->
                  <span>View</span>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" @click="sendNow(lease)">
                  <!-- Send Icon -->
                  <span>Send now</span>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" @click="duplicateTemplate(lease)">
                  <!-- Duplicate Icon -->
                  <span>Duplicate</span>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2" @click="downloadTemplate(lease)">
                  <!-- Download Icon -->
                  <span>Download</span>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center space-x-2 text-red-600" @click="deleteTemplate(lease)">
                  <!-- Delete Icon -->
                  <span>Delete</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section v-else-if="!filteredLeaseAgreements.length && loading">
          <!-- Loading Placeholder -->
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
