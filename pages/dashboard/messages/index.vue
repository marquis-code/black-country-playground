<template>
    <div class="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div class="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <!-- Search Bar with Icons -->
        <div class="flex items-center mb-4">
          <div class="relative flex-grow">
            <input
              type="text"
              placeholder="Search"
              class="w-full p-3 pl-10 bg-gray-100 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="absolute left-3 top-3 h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM16 16l4 4"
              />
            </svg>
          </div>
          <button class="ml-4 p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
          <button class="ml-2 p-2 bg-gray-100 rounded-full text-gray-700 hover:bg-gray-200 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5h12M9 3v2m0 4v12m3-12v12m6-12v12"
              />
            </svg>
          </button>
        </div>
  
        <!-- Messages List -->
        <div class="space-y-4">
          <!-- Message Item -->
          <div class="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div class="ml-4 flex-grow">
              <h4 class="font-semibold text-gray-800">John Walton</h4>
              <p class="text-gray-600">I'm interested in renting a room in the apartment</p>
            </div>
            <div class="flex items-center">
              <span class="text-gray-500 text-sm mr-4">08 Feb</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
  
          <!-- Message Item -->
          <div class="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div class="ml-4 flex-grow">
              <h4 class="font-semibold text-gray-800">Jason Co-living space Broadcast</h4>
              <p class="text-gray-600">
                I will send the address shortly. Kindly schedule through the platform.
              </p>
            </div>
            <div class="flex items-center">
              <span class="text-gray-500 text-sm mr-4">08 Feb</span>
              <div class="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            </div>
          </div>
  
          <!-- Message Item -->
          <div class="flex items-start p-4 bg-gray-50 rounded-lg shadow-sm">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              class="w-10 h-10 rounded-full object-cover"
            />
            <div class="ml-4 flex-grow">
              <h4 class="font-semibold text-gray-800">John Walton</h4>
              <p class="text-gray-600">I'm interested in renting a room in the apartment</p>
            </div>
            <div class="flex items-center">
              <span class="text-gray-500 text-sm mr-4">08 Feb</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
     layout: 'dashboard'
})

  // No additional script logic is needed for this static UI
  </script>
  
  <style scoped>
  /* No additional styles are necessary; Tailwind CSS handles all styling */
  </style>
  