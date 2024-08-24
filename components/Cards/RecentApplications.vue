<template>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-4">
        <div
          v-for="itm in 6"
          :key="itm"
          class="rounded-lg space-y-6 border border-gray-50 bg-white p-4"
        >
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-x-3">
        <img src="@/assets/img/recent-applicant.png" class="h-14 w-14" />
        <div>
          <h4 class="text-[#1D2739]">Regina O'Kon</h4>
          <p class="text-sm text-[#667185] font-light">Regina_OKon19@yahoo.com</p>
        </div>
       </div>
       <div>
        <span class="text-[#1D4ED8] font-medium text-xs rounded-full bg-[#E8EDFB] px-5 py-2">New</span>
       </div>
    </div>
  <div>
    <h4 class="text-[#1D2739]">Cummings, Frami and Lynch apartments</h4>
    <p class="text-sm text-[#667185] font-light">Jason Gardens co-living space, Iconic Tower, off A..</p>
  </div>
      </div>
      </div>
</template>
