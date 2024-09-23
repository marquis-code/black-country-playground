<template>
  <LayoutWithoutSidebar>
    <header
    class="px-4 py-5 flex items-center justify-between container mx-auto fixed top-0 left-0 right-0 z-50"
  >
    <div
      @click="router.push('/dashboard')"
      class="flex items-center space-x-2 cursor-pointer"
    >
      <img src="@/assets/icons/logo.svg" alt="Logo" class="h-8 w-auto" />
      <span class="text-lg font-semibold">BlackCountry</span>
    </div>
    <div class="flex space-x-4 items-center">
      <button class="text-[#326543] text-sm hover:text-[#326543]">
        Preview
      </button>
      <button
        @click="router.push('/dashboard/property/create-steps')"
        class="bg-white border text-sm border-gray-300 text-gray-700 px-4 py-3 rounded-md hover:bg-gray-100"
      >
        Cancel
      </button>
      <button @click="handleSaveAndExit"
        class="bg-gray-900 text-sm text-white px-4 py-3 rounded-md hover:bg-gray-800"
      >
        Save & exit
      </button>
    </div>
  </header>

    <!-- Main Content -->
    <main class="flex flex-col py-3 mt-20 overflow-y-auto max-w-7xl lg:w-6/12 mx-auto px-4">
      <PreviewPropertyPreview :payload="payload" class="" />
    </main>

    <!-- Fixed Bottom Section -->
    <section class="fixed bottom-0 left-0 right-0 bg-white py-3 border-t shadow-md z-50 px-6">
      <div class="flex justify-between items-center container mx-auto">
        <button @click="router.back()" class="text-[#292929] bg-[#EBE5E0] px-6 py-3 rounded-md">Previous</button>
        <button @click="handlePublish" class="bg-[#292929] text-white text-sm px-6 py-3 rounded-md">Publish</button>
      </div>
    </section>
  </LayoutWithoutSidebar>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import { use_create_property } from '@/composables/modules/property/create';
const { payload, create_property, loading } = use_create_property();
import { useGlobalModal } from '@/composables/core/useGlobalModal';

const { openModal } = useGlobalModal();

const handleSaveAndExit = () => {
  create_property();
};

const handlePublish = () => {
  create_property();
};

const property = {
  title: 'Luxury Apartment',
  description: 'Spacious apartment in downtown.',
  price: 500000,
  location: 'New York, NY',
};

const showPreview = (propertyDetails: any) => {
  openModal(propertyDetails);
};
</script>

<style scoped>
/* Ensure the main content area does not overlap with the fixed sections */
main {
  padding-top: 4rem; /* Space for the fixed header */
  padding-bottom: 4rem; /* Space for the fixed bottom section */
  height: calc(100vh - 8rem); /* Adjust height considering the fixed header and footer */
  overflow-y: auto; /* Make the main content scrollable */
}
</style>
