<template>
    <main>
        <main class="min-h-screen">
            <div class="p-6">
              <section class="flex justify-between items-center">
                <div class="flex space-x-6 mb-4">
                  <span
                    class="text-lg font- text-[#326543] pb-2 border-b-4 border-[#326543] cursor-pointer"
                    >All lease documents</span
                  >
                  <span class="text-lg font- text-gray-500 pb-2 cursor-pointer"
                    >Pending signing</span
                  >
                  <span class="text-lg font- text-gray-500 pb-2 cursor-pointer"
                    >Signed lease</span
                  >
                  <span class="text-lg font- text-gray-500 pb-2 cursor-pointer"
                    >Draft</span
                  >
                </div>
                <div class="pb-3">
                  <button
                  @click="generateLeaseDocument = true"
                  class="bg-[#292929] text-white py-3 flex items-center gap-x-2 px-4 text-sm rounded-md"
                >
                <img :src="dynamicIcons('white-add')" />
                  Open Modal
                </button>
                </div>
              </section>
              <section class="grid grid-cols-4 gap-4">
                <div
                  class="bg-white rounded-lg shadow p-4"
                  v-for="itm in 8"
                  :key="itm"
                >
                  <img :src="dynamicImage('lease-doc.png')" />
                  <div class="flex justify-between items-center">
                    <div class="space-y-1">
                      <h6 class="text-base font-semibold text-gray-800">
                        Cummings, Frami and Lynch a...
                      </h6>
                      <p class="text-xs text-gray-600">
                        Tenant:
                        <span class="font-medium text-[#1D2739]">Ada Dennis</span>
                      </p>
                      <p class="text-xs text-gray-600">
                        Last updated:
                        <span class="font-medium text-[#1D2739]">15th May, 2024</span>
                      </p>
                    </div>
                    <button class="p-2">
                      <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.4922 12H12.5012"
                          stroke="#1D2739"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.4844 18H12.4934"
                          stroke="#1D2739"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.5 6H12.509"
                          stroke="#1D2739"
                          stroke-width="2.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </main>
          <PropertyGenerateLeaseAgreementModal
            v-if="generateLeaseDocument"
            @close="generateLeaseDocument = false"
          />
    </main>
  </template>
  
  <script setup lang="ts">
  import { dynamicIcons } from '@/utils/assets';
  const router = useRouter();
  const generateLeaseDocument = ref(false);
  </script>
  