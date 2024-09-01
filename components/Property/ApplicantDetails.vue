<template>
    <div class="space-y-6">
        <!-- Current Residence -->
    <section>
      <div class="mb-6">
          <h3 class="text-base font-medium text-[#1D2739] mb-4 border-[0.5px] py-3 px-3 rounded-lg bg-white">Rental History</h3>
        </div>

      <div class="border-[0.5px] py-3 px-3 rounded-lg bg-white">
          <div class="space-y-5 p-3 text-sm">
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Current Landlord:</span> Jake Tokumbo</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Rental Address:</span> 02 Federal Palace, Ikeja</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Length of Tenancy:</span> 12 months</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Reason for moving out:</span> Get Closer to my job</p>
          </div>
      </div>
    </section>

        <!-- Employment Information -->
        <section class="mb-6">
          <h3 class="text-base font-medium text-[#1D2739] mb-4 border-[0.5px] flex justify-between items-center py-3 px-3 rounded-lg bg-white">
            <span>Employment Information</span>
            <a href="#" class="text-blue-500">Edit</a>
          </h3>

          <div class="border-[0.5px] py-6 px-3 rounded-lg bg-white">
              <div class="space-y-5 p-3 text-sm">
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Employment Status:</span> Employed</p>
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Employer’s full name:</span> Chibuike Eweren</p>
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Occupation:</span> ---</p>
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Organization address:</span> ---</p>
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Monthly Net salary:</span> 0000000</p>
                </div>
          </div>
        </section>

        <!-- Next of Kin -->
        <section class="mb-6">
          <h3 class="text-base font-medium text-[#1D2739] mb-4 border-[0.5px] py-3 px-3 rounded-lg bg-white">Next of Kin</h3>
      <div class="border-[0.5px] py-6 px-3 rounded-lg bg-white">
          <div class="space-y-5 p-3 text-sm">
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Full name:</span> John Eweren</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Relationship:</span> Brother</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Email address:</span> je@gmail.com</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Residential address:</span> 02 Federal Palace, Ikeja</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Phone number:</span> 091000000000</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Occupation:</span> Entrepreneur</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Organization name:</span> J&E.Sons</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Office address:</span> 02 Federal Palace, Ikeja</p>
            </div>
      </div>
        </section>

        <!-- ID Card -->
      <section>
        <h3 class="font-medium text-[#1D2739] text-sm mb-4 border-[0.5px] py-3 px-3 rounded-lg bg-white">ID Card</h3>
        <div class="border-[0.5px] py-3 px-3 rounded-lg bg-white text-sm">
          <div class="mb-4 space-y-3">
            <p>ID Type:</p>
            <h3 class="ttext-sm font-medium text-[#1D2739] mb-4 border-[0.5px] py-3 px-3 rounded-lg bg-[#E4E7EC]">ID Card</h3>
          </div>
          
          <img
            :src="dynamicImage('id-card.png')"
            alt="ID Card"
            class="w-96 h- rounded-lg border border-gray-300"
          />
        </div>
      </section>
      </div>
</template>

<script lang="ts" setup>
import { dynamicImage } from '@/utils/assets';
</script>