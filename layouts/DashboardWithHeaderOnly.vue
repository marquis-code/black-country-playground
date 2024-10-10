<template>
  <main>
    <div class="bg-white shadow-sm border-b-[0.5px] border-gray-100">
      <div
        class="container mx-auto flex items-center justify-between bg-[#F9FAFB] py-3 rounded-lg"
      >
        <div class="flex items-center gap-x-2">
          <button
            @click="router.back()"
            class="flex items-center text-gray-500 bg-[#F9FAFB] border-[0.5px] rounded-md py-3 px-3 hover:text-gray-700"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15"
                stroke="#292929"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="ml-2 text-[#292929]">Back</span>
          </button>
          <slot name="left-content" />
        </div>
        <!-- <div class="flex items-center">
          <button class="relative">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.107 22.3083C11.9298 23.47 12.722 24.2763 13.6921 24.6782C17.411 26.2188 22.5864 26.2188 26.3053 24.6782C27.2754 24.2763 28.0676 23.47 27.8905 22.3083C27.7815 21.5944 27.243 20.9999 26.844 20.4194C26.3214 19.6497 26.2695 18.8102 26.2695 17.917C26.2695 14.4652 23.4619 11.667 19.9987 11.667C16.5355 11.667 13.728 14.4652 13.728 17.917C13.7279 18.8102 13.676 19.6497 13.1534 20.4194C12.7544 20.9999 12.2159 21.5944 12.107 22.3083Z"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.668 25.833C17.05 27.2707 18.3976 28.333 20.0013 28.333C21.6051 28.333 22.9526 27.2707 23.3346 25.833"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            class="-m-1.5 flex items-center p-1.5"
            id="user-menu-button"
            aria-expanded="false"
            aria-haspopup="true"
          >
            <span class="sr-only">Open user menu</span>
            <p class="bg-gray-900 text-white p-3 font-semibold rounded-lg">
              {{ initials }}
            </p>

            <span class="hidden lg:flex lg:items-center">
              <div>
                <span
                  v-if="user"
                  class="ml-4 text-sm py-0 my-0 font-semibold block leading-6 text-gray-900"
                  aria-hidden="true"
                >
                  {{ user?.firstName }} {{ user?.lastName }}</span
                >
                <span class="text-sm py-0 my-0 font-light text-[#667185] block"
                  >Super admin</span
                >
              </div>
              <svg
                @click="router.push('/dashboard/profile')"
                class="cursor-pointer"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
                  stroke="#1D2739"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div> -->
        <slot name="right-content" />
      </div>
    </div>
    <slot />
  </main>
</template>

<script setup lang="ts">
 const router = useRouter()
</script>