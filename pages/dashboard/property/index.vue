<template>
  <Layout>
    <template #header-content>
      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-between">
        <!-- Header left side -->
        <div class="flex items-center gap-x-4">
          <h4 class="text-[#1D2739] text-sm">Property Management</h4>
    
          <!-- Desktop View Buttons -->
          <div class="hidden lg:flex gap-x-4">
            <button @click="setActiveTab('listings')" :class="[activeTab === 'listings' ? 'bg-[#5B8469] text-white' : 'text-[#292929] text-xs bg-[#F0F2F5]']"
              class="font-medium text-xs px-4 py-2 rounded-md ">Listings</button>
            <button @click="setActiveTab('rental-applications')"
              :class="[activeTab === 'rental-applications' ? 'bg-[#5B8469] text-white' : 'text-[#292929] text-xs bg-[#F0F2F5]']"
              class=" px-4 py-2 text-xs rounded-md">Rental applications</button>
            <button @click="setActiveTab('lease-documents')"
              :class="[activeTab === 'lease-documents' ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#292929]']"
              class="font-medium text-xs  px-4 py-2 rounded-md">Lease Documents</button>
          </div>
    
          <!-- Mobile View Hamburger Menu -->
          <div class="lg:hidden">
            <button @click="isMobileMenuOpen = !isMobileMenuOpen" class="text-gray-700 p-2 rounded-md focus:outline-none">
              <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg v-else class="h-6 w-6" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
    
        <!-- Header right side (unchanged) -->
        <!-- (no changes needed here) -->
      </div>
    
      <!-- Mobile View Dropdown Menu -->
      <!-- (no changes needed here) -->
      <div v-if="isMobileMenuOpen" class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>
        <div class="fixed inset-0 flex">
          <div class="relative mr-16 flex w-full max-w-xs flex-1">
            <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
              <button @click="isMobileMenuOpen = false" type="button" class="-m-2.5 p-2.5">
                <span class="sr-only">Close sidebar</span>
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
  

            <div
              class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10"
            >
              <div class="flex h-16 shrink-0 items-center">
                <img
                  class="h-8 w-auto"
                  src="@/assets/img/logo.png"
                  alt="Your Company"
                />
              </div>
              <nav class="flex flex-1 flex-col space-y-6">
                <button @click="activeTab = 'listings'; isMobileMenuOpen = false"
                :class="[activeTab === 'listings' ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#292929]']"
                class="block w-full text-left px-4 py-3 rounded-md text-sm font-medium">Listings</button>
              <button @click="activeTab = 'rental-applications'; isMobileMenuOpen = false"
                :class="[activeTab === 'rental-applications' ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#292929]']"
                class="block w-full text-left px-4 py-3 rounded-md text-sm font-medium">Rental applications</button>
              <button @click="activeTab = 'lease-documents'; isMobileMenuOpen = false"
                :class="[activeTab === 'lease-documents' ? 'bg-[#5B8469] text-white' : 'bg-[#F0F2F5] text-[#292929]']"
                class="block w-full text-left px-4 py-3 rounded-md text-sm font-medium">Lease Documents</button>
            
              </nav>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Components for different tabs -->
    <PropertyListComponent @delete="openDeleteModal" @deactivate="openDeactivateModal" @duplicate="openDuplicateModal"
      v-if="activeTab === 'listings'" />
    <PropertyLeaseDocumentsComponents v-if="activeTab === 'lease-documents'" />
    <PropertyRentalComponent v-if="activeTab === 'rental-applications'" />

    <!-- Reusable Modals -->
   <!-- Reusable Modal for Delete Property -->
   <CoreReusableModal :loading="deleting" :isOpen="deleteModal" @close="deleteModal = false" @confirm="handleDeleteConfirm"
   title="Delete Property" :message="`By deleting ${selectedObj.name} Co-Living Space, you will permanently remove the listing from the platform. Are you sure you want to proceed?`" confirmButtonText="Yes, delete"
   cancelButtonText="Cancel" />

 <!-- Reusable Modal for Deactivate Property -->
 <CoreReusableModal :loading="deactivating" :isOpen="deactivateModal" @close="deactivateModal = false" @confirm="handleDeactivateConfirm"
   :title="`${selectedObj.isPublished ? 'Deactivate' : 'Activate'} Property`" message="Deactivating this property will make it unavailable for new inquiries and listings. You can reactivate it at any time."
   :confirmButtonText="`Yes, ${selectedObj.isPublished ? 'Deactivate' : 'Activate'}`" cancelButtonText="Cancel" />

 <!-- Reusable Modal for Duplicate Property -->
 <CoreReusableModal :loading="duplicating" :isOpen="duplicateModal" @close="duplicateModal = false" @confirm="handleDuplicateConfirm"
   title="Duplicate Property" :message="`Are you sure you want to duplicate this property, ${selectedObj.name} co-living space ? This will create a new copy of the property, you will retain current information, you can rename it and you can make edits after duplication.`"
   confirmButtonText="Yes, duplicate" cancelButtonText="Cancel" />
  </Layout>
</template>

<script lang="ts" setup>
import Layout from '@/layouts/dashboard.vue';
import { useRouter, useRoute } from 'vue-router';
import { useDeleteProperty } from '@/composables/modules/property/delete';
import { usePropertyDeactivate } from '@/composables/modules/property/deactivate';
import { useDuplicateProperty } from '@/composables/modules/property/duplicate';
import { useUserInitials } from '@/composables/core/useUserInitials';
import { useUser } from '@/composables/auth/user';

const { deleteProperty, loading: deleting } = useDeleteProperty();
const { deactivateProperty, loading: deactivating } = usePropertyDeactivate();
const { duplicateProperty, loading: duplicating } = useDuplicateProperty();
const { user } = useUser();
const route = useRoute();
const router = useRouter();
const selectedObj = ref({}) as any;

definePageMeta({
     middleware: 'auth'
});

const isMobileMenuOpen = ref(false);
const activeTab = ref('listings'); // Default active tab

// Initialize the active tab based on query params
onMounted(() => {
  if (route.query.activeTab) {
    activeTab.value = route.query.activeTab as string;
  }
});

// Function to change the active tab and update the query parameter
const setActiveTab = (tab: string) => {
  activeTab.value = tab;
  // Update the URL query parameter to reflect the active tab
  router.push({ query: { ...route.query, activeTab: tab } });
};

const initials = ref('') as any;
onMounted(() => {
  const { getInitials } = useUserInitials(user.value);
  initials.value = getInitials.value;
});

const deleteModal = ref(false);
const deactivateModal = ref(false);
const duplicateModal = ref(false);

const openDeleteModal = (data: any) => {
  selectedObj.value = data;
  deleteModal.value = true;
};

const openDeactivateModal = (data: any) => {
  selectedObj.value = data;
  deactivateModal.value = true;
};

const openDuplicateModal = (data: any) => {
  selectedObj.value = data;
  duplicateModal.value = true;
};

const handleDeleteConfirm = async () => {
  if (selectedObj.value.id) {
    await deleteProperty(selectedObj.value.id).then((res) => {
      console.log(res, 'res')
      if(res !== undefined){
      router.push(`/dashboard/property/${selectedObj.value.id}/delete-success`);
      }
      deleteModal.value = false;
    });
  }
};

const handleDeactivateConfirm = async () => {
  try {
    const actionType = selectedObj.value.isPublished ? 'deactivate' : 'activate';
    const successRoute = selectedObj.value.isPublished
      ? `/dashboard/property/${selectedObj.value.id}/deactivate-success`
      : `/dashboard/property/${selectedObj.value.id}/activate-success`;

      deactivateProperty(selectedObj.value.id, actionType).then((res: any) => {
        if(res !== undefined){
      deactivateModal.value = false;
      router.push(successRoute);
        }
        deactivateModal.value = false;
    })
    deactivateModal.value = false;
    router.push(successRoute);
  } catch (error) {
    useNuxtApp().$toast.error('Error processing property action.', {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    });
  }
};

const handleDuplicateConfirm = async () => {
  await duplicateProperty(selectedObj.value.id).then((res) => {
    console.log(res)
    duplicateModal.value = false;
    router.push(`/dashboard/property/${selectedObj.value.id}/duplicate-success`);
  });
};
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
