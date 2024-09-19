<template>
    <div class="flex flex-col lg:flex-row gap-6 p-6">
      <!-- Left Section -->
      <div class="lg:w-1/2 space-y-6">
        <!-- Property Title and Overview -->
        <div>
          <h1 class="text-2xl font-medium">{{propertyObj?.name ?? 'Ni'}}</h1>
          <p class="text-sm gap-x-2 text-gray-500 flex items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.07847 14.2443C8.7894 14.515 8.40293 14.6663 8.00073 14.6663C7.59853 14.6663 7.21213 14.515 6.923 14.2443C4.27535 11.7503 0.727174 8.96427 2.45751 4.91945C3.39309 2.73245 5.63889 1.33301 8.00073 1.33301C10.3626 1.33301 12.6084 2.73245 13.544 4.91945C15.2721 8.95921 11.7327 11.7589 9.07847 14.2443Z" fill="#5B8469" stroke="#5B8469"/>
                <path d="M10.3337 7.33333C10.3337 8.622 9.28899 9.66667 8.00033 9.66667C6.71166 9.66667 5.66699 8.622 5.66699 7.33333C5.66699 6.04467 6.71166 5 8.00033 5C9.28899 5 10.3337 6.04467 10.3337 7.33333Z" fill="white" stroke="#5B8469"/>
                </svg>
            {{propertyObj?.address ?? 'Nil'}}
          </p>

          <div class="mt-4 flex space-x-2 overflow-x-auto hide-scrollbar">
            <button
              @click="activeTab = 'property-overview'"
              class="text-[#292929] text-sm py-2 px-4 bg-[#EBE5E0] rounded-md flex-shrink-0 whitespace-nowrap w-auto"
            >
              Property Overview
            </button>
            <button
              @click="activeTab = 'common-areas'"
              class="text-[#292929] text-sm py-2 px-4 bg-[#F0F2F5] rounded-md flex-shrink-0 whitespace-nowrap w-auto"
            >
              Common areas
            </button>
            <button
              @click="activeTab = 'room-1'"
              class="text-[#292929] text-sm py-2 px-4 bg-[#F0F2F5] rounded-md flex-shrink-0 whitespace-nowrap w-auto"
            >
              Room 1
            </button>
            <button
              @click="activeTab = 'room-2'"
              class="text-[#292929] text-sm py-2 px-4 bg-[#F0F2F5] rounded-md flex-shrink-0 whitespace-nowrap w-auto"
            >
              Room 2
            </button>
          </div>
        </div>
            <InfoOverview :property="propertyObj" v-if="activeTab === 'property-overview'" />
            <InteriorExteriorFeatures :property="propertyObj" v-if="activeTab === 'common-areas'" />
      </div>
  
      <!-- Right Section -->
      <div class="lg:w-1/2 space-y-6">
        <!-- Property Manager -->
        <div class="bg-[#F0F2F5] p-6 rounded-md">
            <div class="flex items-center justify-between space-x-4">
          <div class="flex items-center space-x-4">
            <img  :src="dynamicImage(propertyManagerImage)" alt="Property Manager" class="w-10 h-10 rounded-full">
            <div>
              <h3  class="font-bold text-[#1D2739]">
               <span v-if="propertyObj.agent">
                {{propertyObj.agent.firstName}}
                {{propertyObj.agent.lastName}}
               </span>
               <span v-else>Nil</span>
              </h3>
              <p class="text-xs text-[#1D2739]">Property Manager</p>
            </div>
          </div>
          <div class="ml-auto flex space-x-2">
            <button  @click="makeCall" class="p-2 rounded-full">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="#EBE5E0"/>
                <path d="M15.1483 21.9523C14.3583 20.5747 13.9769 19.4499 13.7469 18.3097C13.4067 16.6233 14.1852 14.976 15.4748 13.9249C16.0199 13.4806 16.6447 13.6324 16.967 14.2107L17.6946 15.5161C18.2714 16.5508 18.5598 17.0682 18.5026 17.6167C18.4454 18.1652 18.0565 18.6119 17.2786 19.5053L15.1483 21.9523ZM15.1483 21.9523C16.7474 24.7406 19.2569 27.2514 22.0483 28.8523M22.0483 28.8523C23.4259 29.6423 24.5507 30.0238 25.691 30.2538C27.3773 30.594 29.0247 29.8155 30.0757 28.5258C30.52 27.9808 30.3682 27.356 29.79 27.0337L28.4846 26.306C27.4498 25.7292 26.9325 25.4409 26.384 25.4981C25.8355 25.5552 25.3887 25.9442 24.4953 26.722L22.0483 28.8523Z" stroke="#1D2739" stroke-width="1.5" stroke-linejoin="round"/>
                <path d="M26.1663 14.5V21.1667M29.4997 17.8333H22.833" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
                
            </button>
            <button @click="sendSms" class="p-2 rounded-full">
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="#5B8469"/>
                <path d="M22.417 14.5031C21.6711 14.492 20.9209 14.5107 20.1915 14.5592C16.7056 14.7909 13.929 17.607 13.7005 21.1422C13.6558 21.8341 13.6558 22.5506 13.7005 23.2424C13.7837 24.53 14.3532 25.7222 15.0236 26.7288C15.4128 27.4336 15.1559 28.3132 14.7505 29.0815C14.4582 29.6355 14.312 29.9125 14.4294 30.1126C14.5467 30.3127 14.8089 30.3191 15.3332 30.3318C16.37 30.3571 17.0692 30.0631 17.6242 29.6538C17.939 29.4217 18.0964 29.3057 18.2049 29.2923C18.3133 29.279 18.5268 29.3669 18.9537 29.5427C19.3373 29.7007 19.7828 29.7982 20.1915 29.8254C21.3783 29.9043 22.6199 29.9045 23.8092 29.8254C27.295 29.5937 30.0717 26.7777 30.3002 23.2424C30.3354 22.6967 30.3428 22.1356 30.3225 21.5833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.5 16.5837H30.3333M27.4167 13.667V19.5003" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9956 22.417H22.003M25.3252 22.417H25.3327M18.666 22.417H18.6735" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                
            </button>
          </div>
          </div>
         <div class="mt-6">
            <button class="mt-4 w-full bg-[#292929] text-white py-3 text-sm rounded-md">Send application</button>
         </div>
        </div>

        <h3 class="text-sm text-[#1D2739] font-medium bg-white border-[0.5px] px-3 py-3 rounded-sm border-gray-100">Neighborhood Amenities</h3>
        <!-- <div class="bg-white p-3 border-[0.5px] border-gray-50 rounded-md">
          <div class="mt-2 flex space-x-2">
            <button class="2d">Hospital</button>
            <button class="py-2 text-xs px-4 bg-white text-[#344054] border border-gray-300 rounded-md">Schools</button>
            <button class="py-2 text-xs px-4 bg-white text-[#344054] border border-gray-300 rounded-md">Market/Shopping Plaza</button>
            <button class="py-2 text-xs px-4 bg-white text-[#344054] border border-gray-300 rounded-md">Police Station</button>
          </div>

          <div class="mt-6 space-y-2">
            <div v-for="itm in 2" :key="itm" class="flex bg-white justify-between border-b-[0.5px] pb-3 last:border-b-0">
   <div class="flex items-center gap-x-3">
    <div class="flex items-center">
        <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="0.5" width="48" height="48" rx="24" fill="white"/>
            <rect x="1" y="0.5" width="48" height="48" rx="24" stroke="#F9FAFB"/>
            <rect x="3" y="2.5" width="44" height="44" rx="22" fill="#F4F4F4"/>
            <path d="M22.917 27C22.1549 27.1715 21.667 27.4351 21.667 27.7307C21.667 28.2476 23.1594 28.6667 25.0003 28.6667C26.8413 28.6667 28.3337 28.2476 28.3337 27.7307C28.3337 27.4351 27.8457 27.1715 27.0837 27" stroke="#1D2739" stroke-linecap="round"/>
            <path d="M26.0413 23.2497C26.0413 23.825 25.575 24.2913 24.9997 24.2913C24.4244 24.2913 23.958 23.825 23.958 23.2497C23.958 22.6744 24.4244 22.208 24.9997 22.208C25.575 22.208 26.0413 22.6744 26.0413 23.2497Z" fill="white" stroke="#1D2739"/>
            <path d="M25.5236 26.7887C25.383 26.924 25.1952 26.9997 24.9998 26.9997C24.8043 26.9997 24.6164 26.924 24.4759 26.7887C23.189 25.5417 21.4643 24.1486 22.3054 22.1262C22.7601 21.0327 23.8517 20.333 24.9998 20.333C26.1478 20.333 27.2393 21.0327 27.6941 22.1262C28.5341 24.1461 26.8137 25.546 25.5236 26.7887Z" stroke="#1D2739"/>
            </svg>
      </div>
                    
              <div class="text-sm space-y-0.5">
                <p class="font-xs text-[#1D2739] font-medium">Glory International Prim/Sec School</p>
                <p class="text-sm text-[#667185]">10521 Veterans Ademola way</p>
                <p class="text-xs text-[#667185]">Public school</p>
              </div>
   </div>
              <p class="text-sm text-[#171717]">20 min drive</p>
            </div>
          </div>
        </div> -->
        <div class="">
          <!-- Render buttons for each type -->
          <div class="mb-4 flex space-x-2">
            <button 
              v-for="type in amenityTypes" 
              :key="type" 
              @click="toggleVisibility(type)"
              :class="['px-4 py-2 rounded text-sm', visibleType === type ? 'bg-gray-300 text-[#344054]' : 'bg-gray-200']"
            >
              {{ type }}
            </button>
          </div>
      
          <!-- Render amenities based on selected type -->
          <div v-for="type in amenityTypes" :key="type" v-show="visibleType === type">
            <div v-for="amenity in groupedAmenities[type]" :key="amenity.id" class="p-4 mb-2 border-[0.5px] rounded-lg flex items-center gap-x-2">
              <div class="flex items-center">
                <svg width="50" height="49" viewBox="0 0 50 49" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="0.5" width="48" height="48" rx="24" fill="white"/>
                    <rect x="1" y="0.5" width="48" height="48" rx="24" stroke="#F9FAFB"/>
                    <rect x="3" y="2.5" width="44" height="44" rx="22" fill="#F4F4F4"/>
                    <path d="M22.917 27C22.1549 27.1715 21.667 27.4351 21.667 27.7307C21.667 28.2476 23.1594 28.6667 25.0003 28.6667C26.8413 28.6667 28.3337 28.2476 28.3337 27.7307C28.3337 27.4351 27.8457 27.1715 27.0837 27" stroke="#1D2739" stroke-linecap="round"/>
                    <path d="M26.0413 23.2497C26.0413 23.825 25.575 24.2913 24.9997 24.2913C24.4244 24.2913 23.958 23.825 23.958 23.2497C23.958 22.6744 24.4244 22.208 24.9997 22.208C25.575 22.208 26.0413 22.6744 26.0413 23.2497Z" fill="white" stroke="#1D2739"/>
                    <path d="M25.5236 26.7887C25.383 26.924 25.1952 26.9997 24.9998 26.9997C24.8043 26.9997 24.6164 26.924 24.4759 26.7887C23.189 25.5417 21.4643 24.1486 22.3054 22.1262C22.7601 21.0327 23.8517 20.333 24.9998 20.333C26.1478 20.333 27.2393 21.0327 27.6941 22.1262C28.5341 24.1461 26.8137 25.546 25.5236 26.7887Z" stroke="#1D2739"/>
                    </svg>
              </div>
            <div>
              <h3  class="font-xs text-[#1D2739] font-medium">{{ amenity.description }}</h3>
              <p class="text-sm text-[#667185]">{{ amenity.address }}</p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
const propertyManagerImage = ref("shape.png");
const activeTab = ref('property-overview')
  const props = defineProps({
    propertyObj: {
      type: Object,
      default: () => {}
    }
  })

// Computed property to group amenities by type
const groupedAmenities = computed(() => {
if(props?.propertyObj){
  return props?.propertyObj?.neighbouringLandmarks?.reduce((acc, amenity) => {
    const { type } = amenity;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(amenity);
    return acc;
  }, {});
}
});

const phoneNumber = '+1234567890'; // Replace with a dynamic number if needed

const makeCall = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const sendSms = () => {
  window.location.href = `sms:${phoneNumber}`;
};

// Get all unique amenity types
const amenityTypes = computed(() => {
  if(groupedAmenities.value){
   return Object.keys(groupedAmenities?.value)
  }
});

// State to keep track of the currently visible type
const visibleType = ref(null) as any;

// Set the first type as the default visible type
onMounted(() => {
  if (amenityTypes?.value?.length > 0) {
    visibleType.value = amenityTypes.value[0];
  }
});

// Method to toggle visibility of amenity lists
const toggleVisibility = (type: any) => {
  visibleType.value = visibleType.value === type ? null : type;
};

</script>
  
<!-- Custom CSS to hide scrollbar -->
<style>
  .hide-scrollbar {
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
  }

  .hide-scrollbar::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
</style>