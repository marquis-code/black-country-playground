<template>
    <div class="space-y-6">
        <!-- Current Residence -->
    <section>
      <div class="mb-6">
          <h3 class="text-base font-medium text-[#1D2739] mb-4 border-[0.5px] py-3 px-3 rounded-lg bg-white">Rental History</h3>
        </div>

      <div class="border-[0.5px] py-3 px-3 rounded-lg bg-white">
          <div class="space-y-5 p-3 text-sm">
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Current Landlord:</span> {{rentalObj?.tenant?.currentLandlord ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Rental Address:</span> {{rentalObj?.tenant?.rentalAddress ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Length of Tenancy:</span> {{rentalObj?.tenant?.lengthOfTenancy ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Reason for moving out:</span> {{rentalObj?.tenant?.reasonForMovingOut ?? 'Nil'}}</p>
          </div>
      </div>
    </section>

        <!-- Employment Information -->
        <section class="mb-6">
          <h3 class="text-base font-medium text-[#1D2739] mb-4 border-[0.5px] flex justify-between items-center py-3 px-3 rounded-lg bg-white">
            <span>Employment Information</span>
            <!-- <a href="#" class="text-blue-500">Edit</a> -->
          </h3>

          <div class="border-[0.5px] py-6 px-3 rounded-lg bg-white">
              <div class="space-y-5 p-3 text-sm">
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Employment Status:</span> {{rentalObj?.tenant?.employmentStatus ?? 'Nil'}}</p>
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Employer’s full name:</span> {{rentalObj?.tenant?.employerName ?? 'Nil'}}</p>
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Occupation:</span>{{rentalObj?.tenant?.occupation ?? 'Nil'}}</p>
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Organization address:</span>{{rentalObj?.tenant?.employerAddress ?? 'Nil'}}</p>
                  <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Monthly Net salary:</span>{{rentalObj?.tenant?.monthlyNetSalary ?? 'Nil'}}</p>
                </div>
          </div>
        </section>

        <!-- Next of Kin -->
        <section class="mb-6">
          <h3 class="text-base font-medium text-[#1D2739] mb-4 border-[0.5px] py-3 px-3 rounded-lg bg-white">Next of Kin</h3>
      <div class="border-[0.5px] py-6 px-3 rounded-lg bg-white">
          <div class="space-y-5 p-3 text-sm">
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Full name:</span> {{rentalObj?.tenant?.nextOfKinName ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Relationship:</span> {{rentalObj?.tenant?.nextOfKinRelationship ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Email address:</span> {{rentalObj?.tenant?.nextOfKinEmail ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Residential address:</span>{{rentalObj?.tenant?.nextOfKinAddress ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Phone number:</span>{{rentalObj?.tenant?.nextOfKinPhone ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Occupation:</span>{{rentalObj?.tenant?.nextOfKinOccupation ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Organization name:</span> {{rentalObj?.tenant?.nextOfKinEmployer ?? 'Nil'}}</p>
              <p class="flex justify-between items-center text-[#1D2739]"><span class="text-[#667185] font-light">Office address:</span>{{rentalObj?.tenant?.nextOfKinEmployerAddress ?? 'Nil'}}</p>
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
        <div v-if="rentalObj?.idDocs?.fileUrls" class="grid grid-cols-2 gap-6">
          <img class="w-96 h- rounded-lg border border-gray-300" v-for="itm in rentalObj?.idDocs?.fileUrls" :key="itm" :src="itm" />
        </div>
          <img
             v-else
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
const props = defineProps({
          rentalObj: {
            type: Object
          }
        })
</script>