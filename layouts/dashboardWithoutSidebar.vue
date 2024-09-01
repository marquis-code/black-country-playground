<template>
  <main>
    <div id="header"
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
    <slot name="header-content"></slot>
    </div>
    <slot />
  </main>
</template>

<!-- <header class="bg-white p-4 flex items-center justify-between container mx-auto">
    <div @click="router.push('/dashboard')" class="flex items-center space-x-2">
      <img src="@/assets/icons/logo.svg" alt="Logo" class="h-8 w-auto" />
      <span class="text-lg font-semibold">BlackCountry</span>
    </div>
    <div class="flex space-x-4 items-center">
      <button class="text-[#326543] text-sm lg:text-base hover:text-[#326543]">Preview</button>
      <button @click="router.push('/dashboard/property/create-steps')"
        class="bg-white border text-sm lg:text-base border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
      >
        Cancel
      </button>
      <button
        class="bg-gray-900 text-sm lg:text-base text-white px-4 py-2 rounded-md hover:bg-gray-800"
      >
        Save & exit
      </button>
    </div>
  </header> -->
