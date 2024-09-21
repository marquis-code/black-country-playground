<template>
  <main>
    <TopNavBar />
  <div class="p-8 bg-gray-25 min-h-screen flex flex-col justify-between">
    <div class="max-w-2xl mx-auto w-full">

      <div class="max-w-3xl mx-auto p-6">
        <!-- Form Header -->
        <div class="text-gray-500 flex-col">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="36" height="36" rx="18" fill="#EAEAEA" />
            <path
              d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23"
              stroke="#1D2739"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <h2 class="text-lg font-semibold text-[#1D2739] mt-4">Link a new card</h2>
        </div>

        <form class="mt-6 space-y-4">
          <div class="relative">
            <label class="text-[#1D2739] text-sm">Number on card</label>
            <input
              type="text"
              class="w-full p-2 mt-1 outline-none focus-within:border-2 pl-16 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4"
              value="0000 2222 3333 4444"
            />
            <svg class="absolute top-9 left-5" width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" fill="white"/>
              <rect x="0.5" y="0.5" width="19" height="19" rx="3.5" stroke="#F2F4F7"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1052 14.0243C9.40867 14.856 8.50519 15.3581 7.51794 15.3581C5.31507 15.3581 3.5293 12.8583 3.5293 9.77474C3.5293 6.69115 5.31507 4.19141 7.51794 4.19141C8.50519 4.19141 9.40867 4.69349 10.1052 5.52519C10.8017 4.69349 11.7051 4.19141 12.6924 4.19141C14.8953 4.19141 16.681 6.69115 16.681 9.77474C16.681 12.8583 14.8953 15.3581 12.6924 15.3581C11.7051 15.3581 10.8017 14.856 10.1052 14.0243Z" fill="#ED0006"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1055 14.0243C10.9631 13.0002 11.5069 11.4764 11.5069 9.77474C11.5069 8.07311 10.9631 6.54927 10.1055 5.52519C10.802 4.69349 11.7054 4.19141 12.6927 4.19141C14.8956 4.19141 16.6813 6.69115 16.6813 9.77474C16.6813 12.8583 14.8956 15.3581 12.6927 15.3581C11.7054 15.3581 10.802 14.856 10.1055 14.0243Z" fill="#F9A000"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.1045 14.0244C10.9621 13.0004 11.5059 11.4765 11.5059 9.77492C11.5059 8.0733 10.9621 6.54948 10.1045 5.52539C9.24692 6.54948 8.70312 8.0733 8.70312 9.77492C8.70312 11.4765 9.24693 13.0004 10.1045 14.0244Z" fill="#FF5E00"/>
              </svg>
              
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div>
              <label class="text-[#1D2739] text-sm">Valid Till</label>
              <input
                type="text"
                class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4"
                value="08/2029"
              />
            </div>
            <div>
              <label class="text-[#1D2739] text-sm">CVV</label>
              <input
                type="password"
                class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4"
                value="****"
              />
            </div>
          </div>

          <!-- Encryption Notice -->
          <div
            class="mt-4 flex items-center justify-center space-x-2 text-gray-500 pt-5"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.99815 1.33398C5.99297 1.33398 4.6928 2.67998 3.15516 3.17058C2.52994 3.37007 2.21733 3.46981 2.09082 3.61042C1.9643 3.75102 1.92726 3.95648 1.85316 4.3674C1.0603 8.76465 2.79328 12.83 6.92622 14.4123C7.37028 14.5823 7.59228 14.6673 8.00035 14.6673C8.40835 14.6673 8.63042 14.5823 9.07442 14.4123C13.2071 12.8299 14.9384 8.76465 14.1453 4.3674C14.0712 3.95641 14.0341 3.75092 13.9076 3.61031C13.7811 3.4697 13.4685 3.37002 12.8433 3.17064C11.305 2.68008 10.0034 1.33398 7.99815 1.33398Z"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.89075 6.91992C6.17077 6.91992 5.81077 7.43992 5.73077 7.75992C5.65077 8.07992 5.65077 9.23992 5.69877 9.71992C5.85877 10.3199 6.25877 10.5679 6.65077 10.6479C7.01075 10.6799 8.53075 10.6679 8.97075 10.6679C9.61075 10.6799 10.0907 10.4399 10.2907 9.71992C10.3307 9.47992 10.3707 8.15992 10.2707 7.75992C10.0587 7.11992 9.53075 6.91992 9.13075 6.91992H6.89075Z"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M6.83398 6.63838C6.83398 6.59838 6.83945 6.3681 6.84038 6.07838C6.84125 5.81365 6.81798 5.55838 6.94438 5.32478C7.41798 4.38238 8.77798 4.47838 9.11398 5.43838C9.17218 5.59643 9.17572 5.84699 9.17398 6.07838C9.17178 6.37404 9.17798 6.63838 9.17798 6.63838"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>

            <p class="text-[#667185]">Protected with advanced encryption</p>
          </div>
        </form>
      </div>
    </div>
    <!-- Bottom Buttons -->
    <div
      class="flex justify-between p-4 bg-white mt-6 max-w-2xl mx-auto w-full"
    >
      <button
        class="text-[#292929] border rounded-md px-4 py-3 hover:bg-gray-100"
      >
        Cancel
      </button>
      <button @click="router.push('/profile/card-linked-success')" class="text-white font-medium rounded-md px-6 py-3 bg-[#292929]">
        Link Card
      </button>
    </div>
  </div>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
</script>

<style scoped></style>
