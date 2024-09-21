<!-- <div class="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
    <h2 class="mb-4 text-xl font-semibold">Link a bank account</h2>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-semibold">Bank Name</label>
      <select class="w-full px-3 py-2 border rounded-md">
        <option>First Bank</option>
      </select>
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-semibold">Account Number</label>
      <input type="text" placeholder="2012341243" class="w-full px-3 py-2 border rounded-md">
    </div>
    <div class="mb-4">
      <label class="block mb-2 text-sm font-semibold">Account Holder's Name</label>
      <input type="text" placeholder="Ada Dennis" class="w-full px-3 py-2 border rounded-md">
    </div>
    <div class="flex justify-end">
      <button class="px-4 py-2 mr-2 text-sm font-semibold text-gray-500 border rounded-md">Cancel</button>
      <button class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md">Save</button>
    </div>
  </div> -->

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
            <h2 class="text-xl font-medium mb-6 pl-[440px]">Link a bank account</h2>
            
            <div class="flex flex-col items-center justify-center space-y-6 w-full max-w-lg mx-auto">
              <!-- Icon with circle background -->    
              <div class="w-full">
                <label class="text-[#1D2739] text-sm">Bank name</label>
                <select class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4">
                  <option value="brother">Brother</option>
                  <option value="sister">Sister</option>
                </select>
              </div>
              <div class="w-full">
                <label class="text-[#1D2739] text-sm">Account number</label>
                <input type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter your account number" />
              </div>

              <div class="w-full">
                <label class="text-[#1D2739] text-sm">Account holder’s name</label>
                <input disabled type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter your account number" />

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
    
                <p class="text-[#667185] text-sm">Protected with advanced encryption</p>
              </div>
              </div>
              
              <!-- <button @click="router.push('/dashboard/profile/link-account')" class="bg-[#292929] text-white w-full py-4 px-6 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700">
                Add bank account information
              </button> -->
            </div>
          </div>
        </div>
      </main>
  
  <div class="flex justify-center items-center">
    <div class="absolute bottom-0 w-full">
      <div
      class="flex justify-between p-4 mt-6 max-w-2xl mx-auto w-full"
    >
      <button
        class="text-[#292929] border rounded-md px-4 py-3 hover:bg-gray-100"
      >
        Cancel
      </button>
      <button @click="router.push('/dashboard/profile/add-account-success')" class="text-white font-medium rounded-md px-6 py-3 bg-[#292929]">
        Save
      </button>
    </div>
    </div>
  </div>
    </Layout>
  </template>
  
  <script setup lang="ts">
  import Layout from '@/layouts/dashboard.vue';
  const router = useRouter()
  </script>
  
  <style scoped></style>
  