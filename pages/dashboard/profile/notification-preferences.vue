<template>
  <Layout class="flex flex-col justify-between h-screen min-h-screen bg-gray-25 relative">
    <template #header-content>
      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6 justify-between">
        <div class="flex items-center gap-x-4">
          <button @click="router.back()" class="text-[#1D2739] flex items-center gap-x-3 px-4 py-3 text-sm bg-gray-50 rounded-md">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            Back</button>
        </div>
      </div>
    </template>
    <main>  
      <div class="p-6 bg-gray-25 min-h-screen">
        <div class="max-w-2xl mx-auto space-y-5">
          <div class="space-y-3">
            <section class=" border-[0.5px] bg-white rounded-md border-gray-50 p-3">
              <CoreToggleSwitch
                id="emailNotification"
                label="Email Notification"
                v-model="options.emailNotification"
              />
            </section>
    
            <section class="space-y-6 border-[0.5px] bg-white rounded-md border-gray-50 p-3">
              <CoreToggleSwitch
                id="rentDueReminders"
                label="Rent Due Reminders"
                v-model="options.rentDueReminders"
              />
    
              <CoreToggleSwitch
                id="leaseRenewalNotices"
                label="Lease Renewal Notices"
                v-model="options.leaseRenewalNotices"
              />
    
              <CoreToggleSwitch
                id="propertyAlerts"
                label="Property Alerts"
                v-model="options.propertyAlerts"
              />
    
              <CoreToggleSwitch
                id="maintenanceUpdates"
                label="Maintenance Updates"
                v-model="options.maintenanceUpdates"
              />
    
              <CoreToggleSwitch
                id="securityAlerts"
                label="Security Alerts"
                v-model="options.securityAlerts"
              />
            </section>
    
            <section class=" border-[0.5px] bg-white rounded-md border-gray-50 p-3">
              <CoreToggleSwitch
                id="Push/In-appNotification"
                label="Push/In-app Notification"
                v-model="options.emailNotification"
              />
            </section>
    
            <section class="space-y-6 border-[0.5px] bg-white rounded-md border-gray-50 p-3">
              <CoreToggleSwitch
                id="rentDueReminders"
                label="Rent Due Reminders"
                v-model="options.rentDueReminders"
              />
    
              <CoreToggleSwitch
                id="leaseRenewalNotices"
                label="Lease Renewal Notices"
                v-model="options.leaseRenewalNotices"
              />
    
              <CoreToggleSwitch
                id="propertyAlerts"
                label="Property Alerts"
                v-model="options.propertyAlerts"
              />
    
              <CoreToggleSwitch
                id="maintenanceUpdates"
                label="Maintenance Updates"
                v-model="options.maintenanceUpdates"
              />
    
              <CoreToggleSwitch
                id="securityAlerts"
                label="Security Alerts"
                v-model="options.securityAlerts"
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/dashboard.vue';
import { ref } from "vue";

const options = ref({
  emailNotification: true,
  rentDueReminders: true,
  leaseRenewalNotices: true,
  propertyAlerts: true,
  rentalApplicationUpdates: true,
  maintenanceUpdates: true,
  securityAlerts: false,
});

definePageMeta({
     middleware: 'auth'
})
</script>

<style scoped>
.toggle-checkbox {
  width: 24px;
  height: 24px;
}
</style>
