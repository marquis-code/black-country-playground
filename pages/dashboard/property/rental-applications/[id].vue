<template>
  <Layout>
    <template #header-content>
      <div
        class="flex justify-between items-center p-4 w-full"
      >
        <div class="flex items-center space-x-5">
          <button
            @click="goBack"
            class="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-md"
          >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            Back
          </button>
          <span class="text-xl font-medium text-[#1D2739]">Ada Dennis</span>
        </div>
        <div class="flex space-x-4">
          <button class="bg-[#EBE5E0] text-sm text-[#292929] px-6 py-3 rounded-md">
            Decline
          </button>
          <button class="bg-[#292929] text-white px-6 py-3 text-sm rounded-md">
            Approve
          </button>
        </div>
      </div>
    </template>
    <main class="min-h-screen">
      <div class="flex max-w-6xl mx-auto">
        <!-- Sidebar -->
        <div class="mr-6 max-w-5xl w-96">
          <PropertyApplicantProfile />
        </div>

        <!-- Main Content -->
        <div class="flex-1 p-6 max-w-6xl">
          <div>
            <PropertyApplicantDetails />
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script lang="ts" setup>
import Layout from "@/layouts/dashboard.vue";
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
