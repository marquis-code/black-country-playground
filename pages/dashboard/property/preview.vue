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
      <PreviewPropertyPreview class="max-w-3xl mx-auto" />
    </LayoutWithoutSidebar>
  </template>

  <script lang="ts" setup>
  import { use_create_property } from '@/composables/modules/property/create'
  const { payload, create_property, loading, setPropertyData } = use_create_property()
  const router = useRouter()

  const handleSaveAndExit = () => {
  const storedData = sessionStorage.getItem('property')
 let propertyData = storedData ? JSON.parse(storedData) : {}
 setPropertyData(propertyData)
 create_property()
}
</script>