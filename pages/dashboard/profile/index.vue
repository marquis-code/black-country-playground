<template>
  <div class="flex items-center justify-center">
    <div class="max-w-md w-full bg-white shadow-lg rounded-lg p-8">
      <!-- Profile Section -->
      <div class="flex flex-col items-center">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile Image"
          class="w-24 h-24 rounded-full object-cover border-4 border-gray-100 shadow-sm"
        />
        <h2 class="mt-4 text-xl font-semibold text-gray-800">Rufus Ugochukwu</h2>
        <p class="text-gray-500">Agent</p>
      </div>

      <!-- Divider -->
      <div class="mt-6 border-t border-gray-200"></div>

      <!-- Account Settings -->
      <div class="mt-6 space-y-4">
        <!-- Profile Settings -->
        <a
          href="#"
          class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-150"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-3 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 18.364A9 9 0 0112 4a9 9 0 017.121 14.364M15 11a3 3 0 11-6 0 3 3 0 016 0zM12 14.5a6.987 6.987 0 00-4.9 2M12 14.5a6.987 6.987 0 014.9 2M12 14.5v1.5"
              />
            </svg>
            <span class="text-gray-800 font-medium">Profile settings</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- Payment Information -->
        <a
          href="#"
          class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-150"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-3 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M3 6h18M3 14h18m-5 4H8m-2 0a2 2 0 01-2-2v-8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2z"
              />
            </svg>
            <span class="text-gray-800 font-medium">Payment Information</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- Notification Preference -->
        <a
          href="#"
          class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-150"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-3 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-9.197-5.281C8.612 6.868 8.363 8.159 7.27 8.829 6.22 9.473 5 9.615 4 9.615 4 10.932 5 12 6.5 12H8l1 5v1H7a2 2 0 01-2-2v-1H4m6-4h1a1 1 0 001-1m0 0a2 2 0 114 0"
              />
            </svg>
            <span class="text-gray-800 font-medium">Notification Preference</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>

        <!-- Login and Security -->
        <a
          href="#"
          class="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-150"
        >
          <div class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 mr-3 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7M9 9v3M9 9a4 4 0 018 0v3M9 9a4 4 0 00-8 0v3"
              />
            </svg>
            <span class="text-gray-800 font-medium">Login and Security</span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 011.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </a>
      </div>

      <!-- Logout Button -->
      <div class="mt-6">
        <a
          href="#"
          class="flex items-center text-red-600 font-semibold hover:text-red-500 transition-colors duration-150"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-8v1m0 0V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2h4a2 2 0 002-2v-1"
            />
          </svg>
          Log out
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
     layout: 'dashboard'
})
// Add your logic here if necessary
</script>

<style scoped>
body {
  @apply bg-gray-50;
}

.max-w-md {
  width: 100%;
}
</style>
