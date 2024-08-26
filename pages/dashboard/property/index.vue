<template>
  <main class="space-y-6 lg:p-6">
    <!-- Top Controls -->
    <div class="lg:flex space-y-6 lg:space-y-0 items-center justify-between">
      <div class="flex space-x-4">
        <button
          class="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center space-x-2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8333 3.33325H2.5"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.16667 15.8333H2.5"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5013 15.8333H14.168"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5013 9.58325H9.16797"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.4987 3.33325H15.832"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M4.16667 9.58325H2.5"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12.082 1.66675C12.4703 1.66675 12.6644 1.66675 12.8176 1.73018C13.0218 1.81476 13.184 1.97699 13.2686 2.18118C13.332 2.33432 13.332 2.52846 13.332 2.91675V3.75008C13.332 4.13836 13.332 4.33251 13.2686 4.48565C13.184 4.68984 13.0218 4.85207 12.8176 4.93665C12.6644 5.00008 12.4703 5.00008 12.082 5.00008C11.6938 5.00008 11.4996 5.00008 11.3464 4.93665C11.1423 4.85207 10.98 4.68984 10.8954 4.48565C10.832 4.33251 10.832 4.13836 10.832 3.75008V2.91675C10.832 2.52846 10.832 2.33432 10.8954 2.18118C10.98 1.97699 11.1423 1.81476 11.3464 1.73018C11.4996 1.66675 11.6938 1.66675 12.082 1.66675Z"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.418 14.1667C10.8062 14.1667 11.0004 14.1667 11.1536 14.2302C11.3577 14.3147 11.52 14.477 11.6046 14.6812C11.668 14.8343 11.668 15.0285 11.668 15.4167V16.2501C11.668 16.6383 11.668 16.8325 11.6046 16.9857C11.52 17.1898 11.3577 17.3521 11.1536 17.4367C11.0004 17.5001 10.8062 17.5001 10.418 17.5001C10.0297 17.5001 9.83555 17.5001 9.68239 17.4367C9.47822 17.3521 9.31597 17.1898 9.23139 16.9857C9.16797 16.8325 9.16797 16.6383 9.16797 16.2501V15.4167C9.16797 15.0285 9.16797 14.8343 9.23139 14.6812C9.31597 14.477 9.47822 14.3147 9.68239 14.2302C9.83555 14.1667 10.0297 14.1667 10.418 14.1667Z"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7.91797 7.91675C8.30625 7.91675 8.50039 7.91675 8.65355 7.98018C8.85772 8.06476 9.01997 8.22699 9.10455 8.43116C9.16797 8.58433 9.16797 8.7785 9.16797 9.16675V10.0001C9.16797 10.3883 9.16797 10.5825 9.10455 10.7357C9.01997 10.9398 8.85772 11.1021 8.65355 11.1867C8.50039 11.2501 8.30625 11.2501 7.91797 11.2501C7.52969 11.2501 7.33554 11.2501 7.1824 11.1867C6.97821 11.1021 6.81598 10.9398 6.7314 10.7357C6.66797 10.5825 6.66797 10.3883 6.66797 10.0001V9.16675C6.66797 8.7785 6.66797 8.58433 6.7314 8.43116C6.81598 8.22699 6.97821 8.06476 7.1824 7.98018C7.33554 7.91675 7.52969 7.91675 7.91797 7.91675Z"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Filter</span>
        </button>
        <div class="relative">
          <input
            type="text"
            placeholder="Search"
            class="w-full px-4 pl-10 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
          <svg
            class="absolute inset-y-0 left-3 top-3 flex items-center icon-search"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5289_71366)">
              <path
                d="M14.582 14.5833L18.332 18.3333"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.668 9.16675C16.668 5.02461 13.3101 1.66675 9.16797 1.66675C5.02584 1.66675 1.66797 5.02461 1.66797 9.16675C1.66797 13.3089 5.02584 16.6667 9.16797 16.6667C13.3101 16.6667 16.668 13.3089 16.668 9.16675Z"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_5289_71366">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <div class="flex space-x-4">
       <div class="w-full">
        <button
        class="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center space-x-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.7633 5.95108L17.3519 5.23725C17.0409 4.69739 16.8854 4.42746 16.6207 4.31982C16.356 4.21219 16.0567 4.29712 15.4581 4.46699L14.4413 4.7534C14.0591 4.84154 13.6581 4.79154 13.3092 4.61225L13.0284 4.45027C12.7292 4.25861 12.499 3.97603 12.3716 3.64387L12.0934 2.81272C11.9104 2.2627 11.8189 1.9877 11.601 1.8304C11.3833 1.6731 11.0939 1.6731 10.5153 1.6731H9.58628C9.0077 1.6731 8.71836 1.6731 8.50053 1.8304C8.28274 1.9877 8.19125 2.2627 8.00827 2.81272L7.72997 3.64387C7.60257 3.97603 7.37241 4.25861 7.07317 4.45027L6.79244 4.61225C6.44348 4.79154 6.04252 4.84154 5.66035 4.7534L4.64349 4.46699C4.04487 4.29712 3.74557 4.21219 3.48092 4.31982C3.21627 4.42746 3.06074 4.69739 2.74966 5.23725L2.33834 5.95108C2.04675 6.45712 1.90095 6.71015 1.92925 6.9795C1.95754 7.24885 2.15272 7.4659 2.54308 7.90002L3.40228 8.86059C3.61228 9.12642 3.76137 9.58975 3.76137 10.0063C3.76137 10.4231 3.61233 10.8863 3.40231 11.1522L2.54308 12.1128C2.15272 12.5469 1.95755 12.7639 1.92925 13.0333C1.90095 13.3027 2.04675 13.5557 2.33834 14.0617L2.74965 14.7755C3.06072 15.3153 3.21627 15.5853 3.48092 15.6929C3.74557 15.8006 4.04488 15.7157 4.64351 15.5458L5.66031 15.2593C6.04256 15.1712 6.44359 15.2213 6.79259 15.4006L7.07328 15.5626C7.37245 15.7543 7.60256 16.0368 7.72995 16.3689L8.00827 17.2002C8.19125 17.7502 8.28274 18.0252 8.50053 18.1825C8.71836 18.3398 9.0077 18.3398 9.58628 18.3398H10.5153C11.0939 18.3398 11.3833 18.3398 11.601 18.1825C11.8189 18.0252 11.9104 17.7502 12.0934 17.2002L12.3717 16.3689C12.499 16.0368 12.7291 15.7543 13.0284 15.5626L13.309 15.4006C13.658 15.2213 14.059 15.1712 14.4413 15.2593L15.4581 15.5458C16.0567 15.7157 16.356 15.8006 16.6207 15.6929C16.8854 15.5853 17.0409 15.3153 17.3519 14.7755L17.7633 14.0617C18.0549 13.5557 18.2006 13.3027 18.1724 13.0333C18.144 12.7639 17.9489 12.5469 17.5585 12.1128L16.6993 11.1522C16.4893 10.8863 16.3402 10.4231 16.3402 10.0063C16.3402 9.58975 16.4894 9.12642 16.6993 8.86059L17.5585 7.90002C17.9489 7.4659 18.144 7.24885 18.1724 6.9795C18.2006 6.71015 18.0549 6.45712 17.7633 5.95108Z"
            stroke="#292929"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M12.931 9.99992C12.931 11.6108 11.6251 12.9166 10.0143 12.9166C8.40346 12.9166 7.09766 11.6108 7.09766 9.99992C7.09766 8.38909 8.40346 7.08325 10.0143 7.08325C11.6251 7.08325 12.931 8.38909 12.931 9.99992Z"
            stroke="#292929"
            stroke-width="1.5"
          />
        </svg>
        <span class="text-[#292929] text-sm">Configure table</span>
      </button>
       </div>
       <div>
        <button
        class="bg-white border border-gray-300 rounded-md px-4 py-2 flex items-center space-x-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.0013 12.0833V3.75M10.0013 12.0833C9.4178 12.0833 8.32758 10.4214 7.91797 10M10.0013 12.0833C10.5848 12.0833 11.6751 10.4214 12.0846 10"
            stroke="#292929"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.6654 13.75C16.6654 15.8183 16.2337 16.25 14.1654 16.25H5.83203C3.7637 16.25 3.33203 15.8183 3.33203 13.75"
            stroke="#292929"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="text-[#292929] text-sm">Export</span>
      </button>
       </div>
      <div class="w-full">
        <button @click="router.push('/dashboard/property/create-steps')"
        class="bg-[#292929] text-white rounded-md px-4 py-2 flex items-center space-x-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 3.33325V16.6666"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.33203 10H16.6654"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <span class="text-sm">New Property</span>
      </button>
      </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="flex items-center justify-center h-full">
      <div class="text-center">
        <div
          class="px-4 py-5 sm:p-6 h-80 rounded-lg flex flex-col gap-y-4 justify-center items-center border-gray-50"
        >
          <img
            :src="dynamicIcons('leases-empty-state')"
            alt="leases empty state"
            class=""
          />
          <p class="text-[#1D2739]">No property added yet</p>
        </div>
        <!-- <div
          class="bg-gray-200 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center"
        >
        <img :src="dynamicIcons('payment-empty-state')" alt="leases empty state" class="" />
        </div>
        <p class="text-gray-500 mt-4">No property added yet</p> -->
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { dynamicIcons } from "@/utils/assets";
const router = useRouter()
definePageMeta({
  layout: "dashboard",
});
</script>
