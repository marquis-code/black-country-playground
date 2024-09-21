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
      <div class="p-8 flex flex-col justify-between">
        <div class="">
          <h2 class="text-lg font-medium mb-6 pl-[440px]">Payment Information</h2>
          
          <div class="flex flex-col items-center justify-center pt-10 w-full max-w-lg mx-auto">
            <!-- Icon with circle background -->
            <div class="relative flex items-center justify-center w-32 h-32 mb-4">
              <div class="rounded-full flex items-center justify-center">
                <svg width="152" height="124" viewBox="0 0 152 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="76" cy="58" r="52" fill="#EAEAEA"/>
                  <circle cx="21" cy="25" r="5" fill="#BDBDBD"/>
                  <circle cx="18" cy="109" r="7" fill="#BDBDBD"/>
                  <circle cx="145" cy="41" r="7" fill="#BDBDBD"/>
                  <circle cx="134" cy="14" r="4" fill="#BDBDBD"/>
                  <g filter="url(#filter0_b_5517_93034)">
                  <rect x="52" y="34" width="48" height="48" rx="24" fill="#9D9D9D"/>
                  <path d="M67.3438 62.1961L80.1727 49.3672M82.6296 57.0541L80.4302 59.2536M78.5529 61.1084L77.5742 62.0871" stroke="white" stroke-width="2" stroke-linecap="round"/>
                  <path d="M67.1747 62.1411C65.6084 60.5749 65.6084 58.0355 67.1747 56.4693L74.4693 49.1747C76.0355 47.6084 78.5749 47.6084 80.1411 49.1747L84.8253 53.8589C86.3916 55.4251 86.3916 57.9645 84.8253 59.5307L77.5307 66.8253C75.9645 68.3916 73.4251 68.3916 71.8589 66.8253L67.1747 62.1411Z" stroke="white" stroke-width="1.5"/>
                  <path d="M68 68H84" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                  </g>
                  <defs>
                  <filter id="filter0_b_5517_93034" x="44" y="26" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="4"/>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_5517_93034"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_5517_93034" result="shape"/>
                  </filter>
                  </defs>
                  </svg>
                  
              </div>
              <div class="absolute w-32 h-32 bg-gray-100 rounded-full opacity-50"></div>
            </div>
            <p class="text-[#1D2739] mb-6">No payment information added yet</p>
            <button @click="router.push('/dashboard/profile/link-account')" class="bg-[#292929] text-white w-full py-4 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700">
              Add bank account information
            </button>
          </div>
        </div>
      </div>
    </main>

<!-- <div class="flex justify-center items-center">
  <div class="absolute bottom-0 w-full">
    <div
    class="flex justify-between p-4 mt-6 max-w-2xl mx-auto w-full"
  >
    <button
      class="text-[#292929] border rounded-md px-4 py-3 hover:bg-gray-100"
    >
      Cancel
    </button>
    <button class="text-white font-medium rounded-md px-6 py-3 bg-[#292929]">
      Save
    </button>
  </div>
  </div>
</div> -->
  </Layout>
</template>

<script setup lang="ts">
import Layout from '@/layouts/dashboard.vue';
const router = useRouter()
</script>

<style scoped></style>
