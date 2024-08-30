<template>
    <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
      <div class="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <!-- Chat Content -->
        <div class="space-y-6">
          <!-- Date Divider -->
          <div class="flex justify-center">
            <div class="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              15 April 2024
            </div>
          </div>
  
          <!-- Message Sent -->
          <div class="flex justify-end">
            <div class="max-w-xs bg-green-100 text-gray-800 p-4 rounded-lg shadow-sm">
              <p>
                I came across your listing and was impressed by the features and amenities offered.
                I am very interested in learning more about the property and potentially scheduling a viewing.
              </p>
              <div class="text-right text-gray-500 text-sm mt-2">
                18:16
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block h-4 w-4 text-green-500"
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
  
          <!-- Date Divider -->
          <div class="flex justify-center">
            <div class="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
              Today
            </div>
          </div>
  
          <!-- Message Received -->
          <div class="flex justify-start">
            <div class="max-w-xs bg-gray-200 text-gray-800 p-4 rounded-lg shadow-sm">
              <p>
                Thank you for reaching out and expressing interest in [Property Description]. We appreciate your inquiry.
              </p>
              <div class="text-right text-gray-500 text-sm mt-2">
                18:12
              </div>
            </div>
          </div>
  
          <!-- Message Received -->
          <div class="flex justify-start">
            <div class="max-w-xs bg-gray-200 text-gray-800 p-4 rounded-lg shadow-sm">
              <p>
                The property is indeed available for rent, and we would be happy to provide you with more information and a different schedule from what is already in the listing page.
              </p>
              <div class="text-right text-gray-500 text-sm mt-2">
                18:12
              </div>
            </div>
          </div>
  
          <!-- Message Sent -->
          <div class="flex justify-end">
            <div class="max-w-xs bg-green-100 text-gray-800 p-4 rounded-lg shadow-sm">
              <p>
                Could you please provide me a different availability date for viewing the property.
              </p>
              <div class="text-right text-gray-500 text-sm mt-2">
                18:16
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block h-4 w-4 text-green-500"
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
  
          <!-- Message Sent -->
          <div class="flex justify-end">
            <div class="max-w-xs bg-green-100 text-gray-800 p-4 rounded-lg shadow-sm">
              <p>
                Thank you for your time and assistance. I look forward to hearing from you soon.
              </p>
              <div class="text-right text-gray-500 text-sm mt-2">
                18:16
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block h-4 w-4 text-green-500"
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
  
        <!-- Input Box -->
        <div class="mt-6 border-t pt-4">
          <div class="flex items-center">
            <input
              type="text"
              placeholder="Type a message here..."
              class="w-full p-3 bg-gray-100 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button class="ml-4 p-2 bg-blue-500 rounded-full text-white hover:bg-blue-600 focus:outline-none">
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
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    definePageMeta({
     layout: 'dashboard'
})

  // Script setup is empty as we don't need any logic for this static UI
  </script>
  
  <style scoped>
  /* No additional styles are necessary; Tailwind CSS handles all styling */
  </style>
  