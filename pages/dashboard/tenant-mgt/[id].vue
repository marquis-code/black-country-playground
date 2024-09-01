<template>
<main class="min-h-screen">
  <div class="flex max-w-6xl mx-auto">
    <!-- Sidebar -->
    <div class="mr-6 max-w-5xl w-96">
      <TenantProfile />
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-6 max-w-6xl">
      <!-- Tabs -->
      <div class="mb-6">
        <nav class="flex space-x-4">
          <a href="#" class="py-2 text-[#475367] font-medium text-base" :class="{'border-[#326543] border-b-4 text-[#326543]': selectedTab === 'details'}" @click.prevent="selectedTab = 'details'">Tenant's details</a>
          <a href="#" class="py-2 text-[#475367] font-medium text-base" :class="{'border-[#326543] border-b-4 text-[#326543]': selectedTab === 'payment'}" @click.prevent="selectedTab = 'payment'">Payment history</a>
          <a href="#" class="py-2 text-[#475367] font-medium text-base" :class="{'border-[#326543] border-b-4 text-[#326543]': selectedTab === 'lease'}" @click.prevent="selectedTab = 'lease'">Lease Document</a>
          <a href="#" class="py-2 text-[#475367] font-medium text-base" :class="{'border-[#326543] border-b-4 text-[#326543]': selectedTab === 'maintenance'}" @click.prevent="selectedTab = 'maintenance'">Maintenance request</a>
        </nav>
      </div>


      <div v-if="selectedTab === 'details'">
         <TenantDetails />
      </div>
      <!-- Other Tabs -->
      <div v-if="selectedTab === 'payment'">
        <TenantPaymentList />
      </div>
      <div v-if="selectedTab === 'lease'">
        <TenantLeaseDocument />
      </div>
      <div v-if="selectedTab === 'maintenance'">
        <TenantServiceList />
      </div>
    </div>
  </div>
</main>
  </template>
  
  <script lang="ts" setup>
import { ref } from 'vue';
  definePageMeta({
     layout: 'dashboard'
})
  const selectedTab = ref('details');
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  