<template>
  <DashboardWithHeaderOnly>
    <template #left-content>
      <h1 class="text-lg font-medium text-[#1D2739]">Select a template</h1>
    </template>
    <template #right-content>
      <div class="flex items-center">
        <button class="relative">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.107 22.3083C11.9298 23.47 12.722 24.2763 13.6921 24.6782C17.411 26.2188 22.5864 26.2188 26.3053 24.6782C27.2754 24.2763 28.0676 23.47 27.8905 22.3083C27.7815 21.5944 27.243 20.9999 26.844 20.4194C26.3214 19.6497 26.2695 18.8102 26.2695 17.917C26.2695 14.4652 23.4619 11.667 19.9987 11.667C16.5355 11.667 13.728 14.4652 13.728 17.917C13.7279 18.8102 13.676 19.6497 13.1534 20.4194C12.7544 20.9999 12.2159 21.5944 12.107 22.3083Z"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.668 25.833C17.05 27.2707 18.3976 28.333 20.0013 28.333C21.6051 28.333 22.9526 27.2707 23.3346 25.833"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          type="button"
          class="-m-1.5 flex items-center p-1.5"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span class="sr-only">Open user menu</span>
          <p class="bg-gray-900 text-white p-3 font-semibold rounded-lg">
            {{ initials }}
          </p>

          <span class="hidden lg:flex lg:items-center">
            <div>
              <span
                v-if="user"
                class="ml-4 text-sm py-0 my-0 font-semibold block leading-6 text-gray-900"
                aria-hidden="true"
              >
                {{ user?.firstName }} {{ user?.lastName }}</span
              >
              <span class="text-sm py-0 my-0 font-light text-[#667185] block"
                >Super admin</span
              >
            </div>
            <svg
              @click="router.push('/dashboard/profile')"
              class="cursor-pointer"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                stroke="#1D2739"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </div>
    </template>
    <main class="min-h-screen mt-10">
      <div class="container mx-auto">
        <section v-if="leaseTemplateList.length && !loading" class="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <!-- Static Blank Template Card -->
          <div @click="router.push('/dashboard/property/lease-documents/create')" class="bg-white border-[0.5px] border-gray-100  rounded-lg shadow  p-4 flex flex-col justify-between">
            <div class="space-y-2 sr-only">
              <h6 class="text-base font-semibold">Blank Template</h6>
              <p class="text-sm">Start from scratch</p>
            </div>
            <div class="flex justify-between flex-col items-start mt-4">
              <!-- <p class="text-sm text-primary-500 cursor-pointer">Start</p> -->
              <h6 class="text-base font-semibold">Blank Template</h6>
              <p class="text-sm">Start from scratch</p>
            </div>
          </div>
        
          <!-- Dynamic Template Cards -->
          <div class="bg-white rounded-lg shadow p-4" v-for="itm in leaseTemplateList" :key="itm.id">
            <div class="flex justify-between items-start">
              <div class="space-y-2">
                <div v-html="shortenedText(itm.body)" class="p-4 rounded-lg text-[10px] overflow-hidden min-h-[300px] max-h-[150px]"></div>
                <div class="space-y-3 pt-3">
                  <div class="flex justify-between items-center">
                    <h6 class="text-base font-semibold text-gray-800 truncate">Sample Template</h6>
                  </div>
                  <div class="flex justify-between items-center">
                    <button @click="handleTemplate('preview', itm)" class="text-sm text-[#326543] font-medium cursor-pointer">Preview</button>
                    <button @click="handleTemplate('edit', itm)" class="text-sm text-[#326543] font-medium cursor-pointer">Use this template</button>
                  </div>
                </div>
              </div>
            </div>
        
            <!-- Dropdown Modal -->
            <!-- <div v-if="dropdownVisible === itm.id" class="absolute right-4 z-10 bg-white rounded-lg shadow-lg w-48 py-2">
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
            </div> -->
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
    <PropertyGenerateLeaseAgreementModal :template="selectedTemplate" v-if="generateLeaseDocument" @close="generateLeaseDocument = false" />
  </DashboardWithHeaderOnly>
</template>

<script setup lang="ts">
import DashboardWithHeaderOnly from '@/layouts/DashboardWithHeaderOnly.vue'
import { useUserInitials } from '@/composables/core/useUserInitials';
import { useUser } from "@/composables/auth/user";
const { user } = useUser();
import { useFetchLeaseTemplate } from '@/composables/modules/lease/fetch';
const { loading, leaseTemplateList } = useFetchLeaseTemplate();
import { useCreateLeaseTemplate } from '@/composables/modules/lease/create'

const { payload } = useCreateLeaseTemplate();
const generateLeaseDocument = ref(false);
const dropdownVisible = ref<null | number>(null); // To track the visible dropdown

const initials = ref('');

definePageMeta({
     middleware: 'auth'
});

onMounted(() => {
  const { getInitials } = useUserInitials(user.value);
  initials.value = getInitials.value;
});

const shortenedText = (text: string) => {
  const maxLength = 2000; // Adjust this value based on how much content you want to show
  return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
};
const selectedTemplate = ref({}) as any

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

const handleTemplate = (action: string, item: any) => {
  localStorage.setItem('templateObj', JSON.stringify(item))
  payload.value.body = `<html>${item.body}</html>`;
  selectedTemplate.value = item
  if(action === 'edit'){
    // generateLeaseDocument.value = true
    router.push(`/dashboard/property/lease-documents/preview-upload`)
  }

  if(action === 'preview'){
    router.push(`/dashboard/property/lease-documents/${item.id}`)
  }
}
</script>

<style scoped>
/* Additional styles for the dropdown modal */
</style>
