<template>
  <main>
    <div class=" flex items-center justify-center p-6">
      <div class="max-w-3xl w-full bg-white shadow-lg rounded-lg p-6">
        <!-- Search Bar -->
        <div class="relative mb-6">
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

        <!-- Notifications -->
        <div class="space-y-8">
          <!-- First Date Group -->
          <div>
            <h3 class="text-gray-500 font-semibold mb-4">25th March, 2024</h3>
            <div class="space-y-4">
              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">
                      New Property Listing Created
                    </h4>
                    <p class="text-gray-600 text-sm">
                      A new property, {Property Name}, has been listed by
                      {Property Manager}...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>

              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
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
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">
                      Property Listing Updated
                    </h4>
                    <p class="text-gray-600 text-sm">
                      The listing for {Property Name} has been updated by
                      {Property Manager}...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>

              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
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
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Tenant Move-Out</h4>
                    <p class="text-gray-600 text-sm">
                      {Tenant Name} has moved out of {Property Name}. Conduct a
                      final inspection...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>
            </div>
          </div>

          <!-- Second Date Group -->
          <div>
            <h3 class="text-gray-500 font-semibold mb-4">23rd March, 2024</h3>
            <div class="space-y-4">
              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">
                      New Tenant Application Submitted
                    </h4>
                    <p class="text-gray-600 text-sm">
                      A new rental application has been submitted by {Tenant
                      Name} for {Property Name}...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>
            </div>
          </div>

          <!-- Third Date Group -->
          <div>
            <h3 class="text-gray-500 font-semibold mb-4">2nd February, 2024</h3>
            <div class="space-y-4">
              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
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
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">
                      Lease Agreement Signed
                    </h4>
                    <p class="text-gray-600 text-sm">
                      {Tenant Name} has signed a lease agreement for {Property
                      Name}. Ensure all legal documents are in place...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>

              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
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
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">Tenant Move-In</h4>
                    <p class="text-gray-600 text-sm">
                      {Tenant Name} has moved into {Property Name}. Confirm the
                      move-in process has been completed...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>

              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">
                      New Maintenance Request
                    </h4>
                    <p class="text-gray-600 text-sm">
                      A new maintenance request has been submitted for {Property
                      Name}. Review the details...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>

              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-blue-200 text-blue-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </div>
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">
                      Maintenance Request Completed
                    </h4>
                    <p class="text-gray-600 text-sm">
                      The maintenance request for {Property Name} has been
                      marked as completed. Verify the completion...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>

              <div
                class="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm"
              >
                <div class="flex items-start">
                  <div
                    class="w-10 h-10 bg-yellow-200 text-yellow-600 rounded-full flex items-center justify-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6"
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
                  <div class="ml-4">
                    <h4 class="font-semibold text-gray-800">
                      Property Listing Deleted
                    </h4>
                    <p class="text-gray-600 text-sm">
                      The listing for {Property Name} has been removed by
                      {Property Manager}. Ensure all records are updated...
                    </p>
                  </div>
                </div>
                <span class="text-gray-500 text-sm">08 Feb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!!notifications.length" class=" flex items-center justify-center p-6">
      <div class="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <!-- Search Bar -->
        <div class="relative mb-6">
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

        <!-- No Notifications Found -->
        <div
          class="flex flex-col items-center justify-center bg-gray-50 rounded-lg p-10 text-center"
        >
          <div class="relative">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-24 h-24 bg-gray-100 rounded-full"></div>
            </div>
            <div class="relative z-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h1m0-4h-1m-1 9a1 1 0 001 1h.001a1 1 0 001-1v-4a1 1 0 00-.878-.993l-.002-.007A1 1 0 0012 11h-.001a1 1 0 00-1 1v4zM8 18a6 6 0 1012 0H8z"
                />
              </svg>
            </div>
          </div>
          <p class="text-gray-600 mt-4">No notifications found</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const notifications = ref([])
definePageMeta({
  layout: "dashboard",
});
// Add any required script logic here
</script>

<style scoped>
/* No additional styles needed for this design */
</style>
