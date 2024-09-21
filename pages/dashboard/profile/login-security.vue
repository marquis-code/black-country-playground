<template>
  <Layout class="flex flex-col justify-between h-screen min-h-screen border-4 bg-gray-25 relative">
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
  <div class="p-8 bg-gray-25 min-h-screen">
    <div class="max-w-xl mx-auto p-6">
      <!-- Breadcrumbs -->
      <div class="text-sm text-gray-500 mb-4">
        <span class="font-semibold text-xl text-gray-700">Log in & security</span>
      </div>

      <section class="space-y-3">
        <!-- <div @click="router.push('/profile/create-password')" class="flex cursor-pointer justify-between items-center p-4 rounded-lg bg-white">
          <div class="space-y-2">
            <p class="text-[#1D2739] font-medium text-sm">Create password</p>
            <p class="text-[#1D2739] text-xs">
              You signed up using google/ios authentication, click to attach
              password.
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div> -->

        <div @click="router.push('/dashboard/profile/change-password')" class="flex cursor-pointer justify-between items-center p-4 rounded-lg bg-white">
          <div class="space-y-2">
            <p class="text-[#1D2739] text-sm font-medium">Change password</p>
            <p class="text-[#1D2739] text-xs">
              On clicking the switch, you are enabling biometric for transaction
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </section>
    </div>
  </div>
  </main>
</Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/dashboard.vue';
import { ref } from "vue";
const router = useRouter()

const options = ref({
  passwordLogin: true,
  biometricsLogin: true,
});
</script>

<style scoped>
.toggle-checkbox {
  width: 24px;
  height: 24px;
}
</style>
