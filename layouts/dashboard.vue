<template>
<main class="">
  <div class="">
    <div v-if="isOpen" class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
      <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>
      <div class="fixed inset-0 flex">
        <div class="relative mr-16 flex w-full max-w-xs flex-1">
          <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
            <button @click="isOpen = false" type="button" class="-m-2.5 p-2.5">
              <span class="sr-only">Close sidebar</span>
              <svg
                class="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div
            class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 pb-4 ring-1 ring-white/10"
          >
            <div class="flex h-16 shrink-0 items-center">
              <img
                class="h-8 w-auto"
                src="@/assets/img/logo.png"
                alt="Your Company"
              />
            </div>
            <nav class="flex flex-1 flex-col">
              <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" class="-mx-2 space-y-1">
                    <li v-for="(item, idx) in sidebarItems" :key="idx">
                      <NuxtLink
                        @click.native="isOpen = false"
                        :to="item.url"
                        class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm font-semibold leading-6 text-white"
                      >
                      <img
                      :src="dynamicIcons(item.icon)"
                        :alt="item.name"
                        class="h-6 w-6"
                      />
                        <span class="flex justify-between items w-full">
                          {{ item.name }}
                          <span v-if="item.name === 'Messages'" class="bg-[#BA110B] text-white rounded-full h-3 w-3 p-3 flex justify-center items-center">1</span>
                         </span>
                      </NuxtLink>
                    </li>
                  </ul>
                </li>
         
                <li class="mt-auto">
                  <a
                    href="#"
                    class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                  >
                    <svg
                      class="h-6 w-6 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Settings
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col"
    >
      <div
        class="flex grow flex-col gap-y-5 overflow-y-auto bg-[#292929] px-6 pb-4"
      >
        <div class="flex h-16 shrink-0 items-center">
          <img
            class="h-10 w-auto"
            src="@/assets/img/logo.png"
            alt="Your Company"
          />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="(item, idx) in sidebarItems" :key="idx">
                  <NuxtLink
                    :to="item.url"
                    class="group flex gap-x-3 rounded-md p-2 text-sm font-medium leading-6 text-white hover:text-white hover:bg-gray-800"
                  >
                    <img
                      :src="dynamicIcons(item.icon)"
                      :alt="item.name"
                      class="h-6 w-6"
                    />
                   <span class="flex justify-between items w-full">
                    {{ item.name }}
                    <span v-if="item.name === 'Messages'" class="bg-[#BA110B] text-white rounded-full h-3 w-3 p-3 flex justify-center items-center">1</span>
                   </span>
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a
                href="#"
                class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <img
                  :src="dynamicIcons('settings')"
                  alt="settings"
                  class="h-6 w-6"
                />
                Settings
              </a>
              <button
                @click="showBLogoutModal = true"
                class="group -mx-2 flex w-full gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
              >
                <img
                  :src="dynamicIcons('logout')"
                  alt="logout"
                  class="h-6 w-6"
                />
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">

  <div id="header"
        class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
      >
        <button @click="isOpen = true" type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden">
          <span class="sr-only">Open sidebar</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>

        <slot name="header-content"></slot>
      </div>

      <main class="py-10 bg-[#F9FAFB]">
        <div class="px-4 sm:px-6 lg:px-8">
          <slot />
        </div>
      </main>
    </div>
  </div>

  <CoreModalWithoutCloseBtn
  :isOpen="showBLogoutModal"
  @close="showBLogoutModal = false"
  >
  <div
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  @click.self="onCancel"
>
  <div class="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
    <!-- Icon -->
    <div class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4">
      <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.921875" width="63.1513" height="64" rx="31.5756" fill="#F3A218"/>
        <path d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z" stroke="white" stroke-width="1.5"/>
        <path d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.1953 28.377H32.2043" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    </div>
    
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-700 mb-2">Logout</h2>

    <!-- Message -->
    <p class="text-gray-500 mb-6">Are you sure you want to logout?</p>

    <!-- Buttons -->
    <div class="space-y-3">
      <button
        type="button"
        class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-3.5 rounded-md font-semibold"
        @click="onConfirm"
        :disabled="loading"
      >
        Yes, log out
      </button>
      <button
        type="button"
        class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-3.5 rounded-md font-semibold"
        @click="onCancel"
      >
        Cancel
      </button>
    </div>
  </div>
</div>
  </CoreModalWithoutCloseBtn>

  <CoreModal
  :isOpen="showBLogoutModal"
  @close="showBLogoutModal = false"
  >
  <div
  class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
  @click.self="onCancel"
>
  <div class="bg-white rounded-xl p-6 max-w-sm w-full text-center shadow-lg">
    <!-- Icon -->
    <div class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4">
      <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.921875" width="63.1513" height="64" rx="31.5756" fill="#F3A218"/>
        <path d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z" stroke="white" stroke-width="1.5"/>
        <path d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M32.1953 28.377H32.2043" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    </div>
    
    <!-- Title -->
    <h2 class="text-lg font-semibold text-gray-700 mb-2">Logout</h2>

    <!-- Message -->
    <p class="text-gray-500 mb-6">Are you sure you want to logout?</p>

    <!-- Buttons -->
    <div class="space-y-3">
      <button
        type="button"
        class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-3.5 rounded-md font-semibold"
        @click="onConfirm"
        :disabled="loading"
      >
        Yes, log out
      </button>
      <button
        type="button"
        class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-3.5 rounded-md font-semibold"
        @click="onCancel"
      >
        Cancel
      </button>
    </div>
  </div>
</div>
  </CoreModal>
</main>
</template>

<script setup lang="ts">
const showBLogoutModal = ref(false);
import { dynamicIcons } from "@/utils/assets";
const router = useRouter();
const loading = ref(false)
const onConfirm = () => {
  showBLogoutModal.value = true
  // Logic for logout
  localStorage.clear()
  setTimeout(() => {
    // loading.value = false
    showBLogoutModal.value = false
    router.push('/login')
    window.location.href = "/login"
  }), 3000
  console.log("Logging out...");
};

const onCancel = () => {
  showBLogoutModal.value = false
  // Logic to close the modal
  console.log("Cancelled");
};


const isOpen = ref(false)

const sidebarItems = ref([
  {
    name: "Dashboard",
    icon: "dashboard-home",
    url: "/dashboard",
  },
  {
    name: "Property Management",
    icon: "property-mgt",
    url: "/dashboard/property",
  },
  {
    name: "Tenants Management",
    icon: "tenants-mgt",
    url: "/dashboard/tenant-mgt",
  },
  {
    name: "Messages",
    icon: "messages",
    url: "/dashboard/messages",
  },
  {
    name: "Finance Management",
    icon: "finance-mgt",
    url: "/dashboard/finance-mgt",
  },
  {
    name: "Members",
    icon: "members",
    url: "/dashboard/members",
  },
]);

const checkOnlineStatus = () => {
  if (navigator.onLine) {
    router.push(router?.options?.history?.state?.current);
  } else {
    // router.push("/login");
    useNuxtApp().$toast.error("You are currently offline.", {
      autoClose: 5000,
      dangerouslyHTMLString: true,
    });
  }
};

onMounted(() => {
  // Check online status when the component is mounted
  checkOnlineStatus();

  // Listen for online and offline events
  window.addEventListener("online", checkOnlineStatus);
  window.addEventListener("offline", checkOnlineStatus);
});

onUnmounted(() => {
  // Remove event listeners to prevent memory leaks
  window.removeEventListener("online", checkOnlineStatus);
  window.removeEventListener("offline", checkOnlineStatus);
});
</script>

<style scoped>
.router-link-exact-active {
  background-color: #5B8469;
  color: white;
}

.container {
  max-width: 1280px; /* Adjust this max-width as needed */
  min-width: 320px;  /* Set a reasonable min-width */
  margin: 0 auto;
}
</style>
