<template>
      <LayoutWithoutSidebar>
        <template #header-content>
          <header
            class="bg-white px-4 flex items-center justify-between container mx-auto"
          >
            <div
              @click="router.push('/dashboard')"
              class="flex items-center space-x-2"
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
        </template>
      <main class="flex flex-col justify-between py-3">
        <header
        class="bg-white px-4 flex items-center justify-between container mx-auto"
      >
        <div
          @click="router.push('/dashboard')"
          class="flex items-center space-x-2"
        >
          <img src="@/assets/icons/logo.svg" alt="Logo" class="h-8 w-auto" />
          <span class="text-lg font-semibold">BlackCountry</span>
        </div>
        <div class="flex space-x-4 items-center">
          <!-- <button @click="router.push('/dashboard/property/preview')" class="text-[#326543] font-semibold py-3 text-sm hover:text-[#326543]">
            Preview
          </button> -->
          <button
            @click="router.back()"
            type="button"
            class="bg-white border text-sm border-gray-300 text-gray-700 px-4 py-3 font-semibold rounded-md hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            @click="handleSaveAndExit"
            :disabled="loading"
            class="bg-gray-900 disabled:cursor-not-allowed disabled:opacity-25 text-sm font-semibold text-white px-4 py-3 rounded-md hover:bg-gray-800"
          >
            {{ loading ? "saving..." : "Save & exit" }}
          </button>
        </div>
      </header>
      <PreviewPropertyPreview :payload="payload" class="max-w-6xl mx-auto" />
   <section class="flex justify-center items-center">
    <section class="flex justify-between items-center container mx-auto absolute bottom-3 w-full">
      <div>
        <button @click="router.back()" class="text-[#292929] bg-[#EBE5E0] px-6 py-3 rounded-md">Previous</button>
      </div>
      <div>
        <button @click="handleSaveAndExit" class="bg-[#292929] text-white text-sm px-6 py-3 rounded-md">Publish</button>
      </div>
      </section>
   </section>
      </main>
    </LayoutWithoutSidebar>
  </template>

  <script lang="ts" setup>
  const router = useRouter()
  import { use_create_property } from '@/composables/modules/property/create'
  const { payload, create_property, loading } = use_create_property()
  import { useGlobalModal } from '@/composables/core/useGlobalModal';

const { openModal } = useGlobalModal();

  const handleSaveAndExit = () => {
 create_property()
}

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