<template>
  <Layout class="flex flex-col justify-between h-screen min-h-screen border-4 bg-gray-25 relative">
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
    <div class="flex flex-col justify-between">
      <div  v-if="currentStep === 1" class="max-w-3xl  mx-auto p-6 w-full">
        <div class="text-gray-500 flex-col">
          <svg @click="hopBack" class="cursor-pointer"  width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            
          <h2 class="text-lg font-semibold text-[#1D2739] pt-3">Profile Information</h2>
        </div>
        <form class="space-y-6">
          <div class=""> 
            <div class="mt-6 bg-[#F0F2F5] rounded-lg p-6  justify-center text-center flex items-center">
              <div id="image-preview" class="mb-4">
                <img
                  v-if="user.profilePicture || profileImage"
                  :src="profileImage || user.profilePicture"
                  alt="Profile Preview"
                  class="h-20 w-20 rounded-full object-cover"
                />
              </div>
      
              <!-- Add photo button is always visible -->
              <div class="">
                <div class="flex justify-center items-center">
                  <button @click="triggerFileUpload" class="bg-[#5B8469] text-white py-2 px-4 rounded-md flex items-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 2V10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M2 6H10" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span v-if="loading">Uploading...</span>
                    <span v-else>Add photo</span>
                  </button>
                  <input
                    type="file"
                    accept="image/*"
                    class="hidden"
                    ref="fileInput"
                    @change="onFileSelected"
                  />
                </div>
                <p class="text-[#1D2739] text-sm mt-2">Accepts jpg & png, 2MB size max/each</p>
              </div>
            </div>
      
            <div class="mt-8">
              <div class="space-y-1">
                <div class="border-[0.5px] border-gray-50 rounded-md ">
                  <NuxtLink
                    v-for="(item, idx) in accountSettings"
                    :key="idx"
                    :to="item.path"
                    class="flex items-center cursor-pointer justify-between p-4 rounded-lg"
                  >
                    <div class="flex items-center justify-between w-full">
                      <div class="flex items-center space-x-3">
                        <img :src="dynamicIcons(item.icon)" alt="" />
                        <span class="text-sm font- text-[#1D2739]">{{ item.label }}</span>
                      </div>
                      <div>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6.00003 4C6.00003 4 10 6.94593 10 8C10 9.05413 6 12 6 12"
                            stroke="#667185"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label class="text-[#1D2739] text-sm">Full name</label>
            <input v-model="addressObj.fullName" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" >
          </div>
  
          <div>
            <label class="text-[#1D2739] text-sm">Email Address</label>
            <input v-model="credential.email" type="email" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4"  disabled />
          </div>
          <div>
            <label class="text-[#1D2739] text-sm">Role <span class="text-red-500">*</span></label>
            <input type="tel" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" value="Super Admin" disabled placeholder="Enter your role" />
          </div>
        </form>
      </div>
  
      <div v-if="currentStep === 2" class="max-w-2xl  mx-auto p-6 w-full">
        <div class="text-gray-500 flex-col">
          <svg  @click="hopBack"  class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            
          <h2 class="text-lg font-semibold text-[#1D2739] pt-3">Rental History</h2>
        </div>
        <form class="mt-6 space-y-4">
          <div>
            <label class="text-[#1D2739] text-sm" >Current Landlord's Name <span class="text-red-500">*</span></label>
            <input v-model="credential.currentLandlord" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter full name" />
          </div>
  
          <div>
            <label class="text-[#1D2739] text-sm" >Rental Address <span class="text-red-500">*</span></label>
            <input v-model="credential.rentalAddress" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter residential address" />
          </div>
  
          <div>
            <label class="text-[#1D2739] text-sm" >Length of Tenancy <span class="text-red-500">*</span></label>
            <input v-model="credential.lengthOfTenancy" type="tel" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter length of tenancy" />
          </div>
  
          <div>
            <label class="text-[#1D2739] text-sm" >Reason for Moving Out <span class="text-red-500">*</span></label>
            <textarea v-model="credential.reasonForMovingOut" row="10" cols="10" class="w-full resize-none p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter reason for moving out"></textarea>
          </div>
  
        </form>
      </div>
  
  
      <div  v-if="currentStep === 3" class="max-w-2xl  mx-auto p-6 w-full">
        <div class="text-gray-500 flex-col">
          <svg  @click="hopBack"   class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
            <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            
          <h2 class="text-lg font-semibold text-[#1D2739] pt-3">Employment Information</h2>
        </div>
      <form class="mt-6 space-y-5">
        <div>
          <label class="text-[#1D2739] text-sm">Are you currently employed? <span class="text-red-500">*</span></label>
          <select v-model="credential.employmentStatus" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4">
            <option value="employed">Employed</option>
            <option value="unemployed">Un-Employed</option>
            <option value="self-employed">Self Employed</option>
          </select>
        </div>
  
        <div>
          <label class="text-[#1D2739] text-sm">Employer's Full Name <span class="text-red-500">*</span></label>
          <input v-model="credential.employerName" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter employer's name" />
        </div>
  
        <div>
          <label class="text-[#1D2739] text-sm">Organization Address</label>
          <input v-model="credential.employerAddress" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter organization's address" />
        </div>
  
        <div>
          <label class="text-[#1D2739] text-sm">Occupation</label>
          <input v-model="credential.occupation" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter your job role" />
        </div>
  
        <div>
          <label class="text-[#1D2739] text-sm">Monthly Net Salary <span class="text-red-500">*</span></label>
          <input v-model="credential.monthlyNetSalary" type="tel" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter your monthly net salary" />
        </div>
      </form>
  
    </div>
  
  
    <div v-if="currentStep === 4" class="max-w-2xl  mx-auto p-6 w-full">
      <div class="text-gray-500 flex-col">
        <svg  @click="hopBack"  class="cursor-pointer" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
          <path d="M20.5 13C20.5 13 15.5 16.6824 15.5 18C15.5 19.3177 20.5 23 20.5 23" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          
          
        <h2 class="text-lg font-semibold text-[#1D2739] pt-3">Next of kin</h2>
      </div>
    <form class="mt-6 space-y-4">
      <section class="flex gap-x-6 justify-between items-center"></section>
      <section class="flex justify-between items-center gap-x-6">
        <div class="w-full">
          <label class="text-[#1D2739] text-sm">Full Name <span class="text-red-500">*</span></label>
          <input  v-model="credential.nextOfKinName" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter full name" />
        </div>
    
        <div class="w-full">
          <label class="text-[#1D2739] text-sm">Relationship <span class="text-red-500">*</span></label>
          <select  v-model="credential.nextOfKinRelationship" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4">
            <option value="brother">Brother</option>
            <option value="sister">Sister</option>
          </select>
        </div>
      </section>
  
      <div>
        <label class="text-[#1D2739] text-sm">Email Address <span class="text-red-500">*</span></label>
        <input v-model="credential.nextOfKinEmail" type="email" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter email address" />
      </div>
  
      <div>
        <label class="text-[#1D2739] text-sm">Residential Address <span class="text-red-500">*</span></label>
        <input v-model="credential.nextOfKinAddress" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter residential address" />
      </div>
  
      <div>
        <label class="text-[#1D2739] text-sm">Phone Number <span class="text-red-500">*</span></label>
        <input v-model="credential.nextOfKinPhone" type="tel" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter phone number" />
      </div>
  
      <div>
        <label class="text-[#1D2739] text-sm">Occupation</label>
        <input v-model="credential. nextOfKinOccupation" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="e.g. Accountant" />
      </div>
  <section class="flex gap-x-6 justify-between items-center">
  
    <div class="w-full">
      <label class="text-[#1D2739] text-sm">Organization Name</label>
      <input v-model="credential.nextOfKinEmployer" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter organization name" />
    </div>
  
    <div class="w-full">
      <label class="text-[#1D2739] text-sm">Office Address</label>
      <input v-model="credential.nextOfKinEmployerAddress" type="text" class="w-full p-2 mt-1 outline-none focus-within:border-2 focus-within:border-[#5B8469] border-[0.5px] text-sm rounded-md bg-[#E4E7EC] py-4" placeholder="Enter office address" />
    </div>
  </section>
    </form>
  
    </div>
    <!-- <div class="flex justify-between p-4 bg-white mt-6 max-w-2xl mx-auto  w-full">
      <button @click="goBack" class="text-[#292929] border rounded-md px-4 py-3 hover:bg-gray-100">Cancel</button>
      <button :disabled="updating" @click="handleSave" class="text-white disabled:opacity-25 disabled: cursor-not-allowed font-medium rounded-md px-6 py-3 bg-[#292929]">{{updating ? 'Processing..' : 'Save'}}</button>
    </div> -->
    </div>
  </main>
<div class="flex justify-center items-center bg-white ">
  <div class="flex justify-between p-4 mt-6 max-w-3xl mx-auto  w-full absolute bottom-0">
    <button @click="goBack" class="text-[#292929] border rounded-md px-4 py-3 hover:bg-gray-100">Cancel</button>
    <button :disabled="updating" @click="handleSave" class="text-white disabled:opacity-25 disabled: cursor-not-allowed font-medium rounded-md px-6 py-3 bg-[#292929]">{{updating ? 'Processing..' : 'Save'}}</button>
  </div>
</div>
</Layout>
    </template>
<script setup lang="ts">
import Layout from '@/layouts/dashboard.vue';
import {useHopBack } from '@/composables/core/useHopBack';

import { use_update_profile } from '@/composables/auth/updateProfile';
import { useRouter, useRoute } from 'vue-router';
import { useUser } from '@/composables/auth/user';
  import { useUploadFile } from '@/composables/core/upload'
  
const { hopBack } = useHopBack();

// Import user composable
const { user } = useUser();

// API to update profile
const { credential, updateProfile, loading: updating } = use_update_profile();

// Step management
const currentStep = ref(1);
const router = useRouter();
const route = useRoute();

// Address object and LGA array
const addressObj = ref({
  state: '',
  lga: '',
  fullName: ''
});
const lgasArray = ref<string[]>([]);

// When the page mounts, populate credential with user data
onMounted(() => {
  if (user.value) {
    // Destructure user object and assign values to credential
    credential.value = {
      email: user.value.email || '',
      phoneNumber: user.value.phoneNumber || '',
      dateOfBirth: user.value.dateOfBirth || '',
      gender: user.value.gender || '',
      maritalStatus: user.value.maritalStatus || '',
      currentLandlord: user.value.currentLandlord || '',
      rentalAddress: user.value.rentalAddress || '',
      lengthOfTenancy: user.value.lengthOfTenancy || '',
      reasonForMovingOut: user.value.reasonForMovingOut || '',
      employmentStatus: user.value.employmentStatus || '',
      employerName: user.value.employerName || '',
      employerAddress: user.value.employerAddress || '',
      occupation: user.value.occupation || '',
      monthlyNetSalary: user.value.monthlyNetSalary || '',
      nextOfKinName: user.value.nextOfKinName || '',
      nextOfKinRelationship: user.value.nextOfKinRelationship || '',
      nextOfKinEmail: user.value.nextOfKinEmail || '',
      nextOfKinAddress: user.value.nextOfKinAddress || '',
      nextOfKinPhone: user.value.nextOfKinPhone || '',
      nextOfKinOccupation: user.value.nextOfKinOccupation || '',
      nextOfKinEmployer: user.value.nextOfKinEmployer || '',
      nextOfKinEmployerAddress: user.value.nextOfKinEmployerAddress || ''
    };

    // Update full name in addressObj
    addressObj.value.fullName = `${user.value.firstName || ''} ${user.value.lastName || ''}`.trim();
    addressObj.value.state = user.value.state || '';
    addressObj.value.lga = user.value.lga || '';
  }

  // Set the query param for the step
  if (!route.query.step) {
    router.push({ query: { step: currentStep.value } });
  } else {
    currentStep.value = parseInt(route.query.step as string);
  }
});

// Function to go back to the previous step
const goBack = () => {
  if (currentStep.value > 1) {
    currentStep.value -= 1;
    router.push({ query: { step: currentStep.value } });
  } else {
    router.push('/profile/profile-settings')
  }
};

// Handle the save function (no changes here)
const handleSave = async () => {
  // Split full name into first and last name
  const nameParts = addressObj.value.fullName.trim().split(" ");
  const firstName = nameParts[0] || "";
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(" ") : "";

  let savePromise;

  switch (currentStep.value) {
    case 1:
      // Save Personal Information
      savePromise = updateProfile({
        firstName: firstName,
        lastName: lastName,
        email: credential.value.email,
        phoneNumber: credential.value.phoneNumber,
        dateOfBirth: credential.value.dateOfBirth,
        gender: credential.value.gender,
        maritalStatus: credential.value.maritalStatus,
        state: addressObj.value.state,
        lga: addressObj.value.lga,
      });
      break;

    case 2:
      // Save Rental History
      savePromise = updateProfile({
        currentLandlord: credential.value.currentLandlord,
        rentalAddress: credential.value.rentalAddress,
        lengthOfTenancy: credential.value.lengthOfTenancy,
        reasonForMovingOut: credential.value.reasonForMovingOut,
      });
      break;

    case 3:
      // Save Employment Information
      savePromise = updateProfile({
        employmentStatus: credential.value.employmentStatus,
        employerName: credential.value.employerName,
        employerAddress: credential.value.employerAddress,
        occupation: credential.value.occupation,
        monthlyNetSalary: credential.value.monthlyNetSalary,
      });
      break;

    case 4:
      // Save Next of Kin Information
      savePromise = updateProfile({
        nextOfKinName: credential.value.nextOfKinName,
        nextOfKinRelationship: credential.value.nextOfKinRelationship,
        nextOfKinEmail: credential.value.nextOfKinEmail,
        nextOfKinAddress: credential.value.nextOfKinAddress,
        nextOfKinPhone: credential.value.nextOfKinPhone,
        nextOfKinOccupation: credential.value.nextOfKinOccupation,
        nextOfKinEmployer: credential.value.nextOfKinEmployer,
        nextOfKinEmployerAddress: credential.value.nextOfKinEmployerAddress,
      });
      break;
  }

  // Handle the result of the save operation
  savePromise
    .then((res) => {
      console.log(res, 'res here')
      // If save is successful, go to the next step
      if (currentStep.value < 4) {
        currentStep.value += 1;
        router.push({ query: { step: currentStep.value } });
      } else {
        router.push('/profile')
        // Optionally, show a success message when the final step is completed
        useNuxtApp().$toast.success("Profile update completed successfully!");
      }
    }).catch((err) => {
      console.error("Error saving data:", err);
      // useNuxtApp().$toast.error("There was an error saving your data.");
      // No step increment if an error occurs
    });
}

  const { uploadFile, loading, uploadResponse } = useUploadFile();
  
  // Profile image state
  const profileImage = ref<string | null>(null);
  const fileInput = ref<HTMLInputElement | null>(null);
  
  // Function to trigger file upload
  const triggerFileUpload = () => {
    fileInput.value?.click();
  };

  // Function to handle file selection and upload
const onFileSelected = async (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0];
  if (file) {
    // Preview the image locally
    const reader = new FileReader();
    reader.onload = () => {
      profileImage.value = reader.result as string;
    };
    reader.readAsDataURL(file);

    // Upload the file using the composable
    await uploadFile(file);

    if (uploadResponse.value?.secure_url) {
      // Update profile with the secure URL after upload
      const uploadPayload = { profilePicture: uploadResponse.value.secure_url }
      await updateProfile(uploadPayload);
    }
  }
};
</script>
