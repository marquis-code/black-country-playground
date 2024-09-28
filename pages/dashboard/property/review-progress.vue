<template>
<Layout>
  <template #header-content>
   <div class="w-full max-w-5xl mx-auto">
    <button @click="router.push('/dashboard/property/new')" class="bg-[#F9FAFB] text-[#1D2739] text-sm font-semibold rounded-md px-4 py-3 flex items-center gap-x-2">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
      Go back</button>
   </div>
  </template>
  <main>
    <div class="p-6 max-w-5xl mx-auto bg-white">
      <!-- Breadcrumb & Share Icon -->
      <div class="flex justify-between items-center mb-6">
        <div class="text-sm text-gray-600">Listings | <span class="font-semibold">{{ payload.name.value ?? 'Nil' }}</span></div>
        <div class="flex space-x-2 items-center">
          <button class="p-2 rounded-full hover:bg-gray-100">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
              <path d="M25.5 13.4165C25.5 14.7972 24.3807 15.9165 23 15.9165C21.6192 15.9165 20.5 14.7972 20.5 13.4165C20.5 12.0358 21.6192 10.9165 23 10.9165C24.3807 10.9165 25.5 12.0358 25.5 13.4165Z" stroke="#1D2739" stroke-width="1.5"/>
              <path d="M15.5 18C15.5 19.3807 14.3807 20.5 13 20.5C11.6193 20.5 10.5 19.3807 10.5 18C10.5 16.6192 11.6193 15.5 13 15.5C14.3807 15.5 15.5 16.6192 15.5 18Z" stroke="#1D2739" stroke-width="1.5"/>
              <path d="M25.5 22.5835C25.5 23.9642 24.3807 25.0835 23 25.0835C21.6192 25.0835 20.5 23.9642 20.5 22.5835C20.5 21.2027 21.6192 20.0835 23 20.0835C24.3807 20.0835 25.5 21.2027 25.5 22.5835Z" stroke="#1D2739" stroke-width="1.5"/>
              <path d="M15.2734 16.958L20.6901 14.4585M15.2734 19.0418L20.6901 21.5414" stroke="#1D2739" stroke-width="1.5"/>
              </svg>
              
          </button>
          <button>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="18" fill="#EAEAEA"/>
              <path d="M24.2192 11.3285C21.9844 9.95769 20.034 10.5101 18.8623 11.39C18.3818 11.7508 18.1417 11.9312 18.0003 11.9312C17.859 11.9312 17.6188 11.7508 17.1383 11.39C15.9667 10.5101 14.0162 9.95769 11.7815 11.3285C8.84872 13.1275 8.18509 19.0624 14.9499 24.0695C16.2384 25.0232 16.8827 25.5 18.0003 25.5C19.118 25.5 19.7622 25.0232 21.0507 24.0695C27.8156 19.0624 27.1519 13.1275 24.2192 11.3285Z" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
          </button>
        </div>
      </div>
  
      <!-- Main Image and Gallery -->
      <div v-if="payload.images.value" class="grid grid-cols-4 gap-2 mb-6">
        <img :src="payload.images.value[0]" alt="Main Image" class="col-span-2 row-span-2 w-full h-full object-cover rounded-lg">
        <img v-for="(image, index) in payload.images.value" :key="index" :src="image" class="w-full object-cover rounded-lg" />
      </div>
      <div v-else class="grid grid-cols-4 gap-2 mb-6">
        <img src="https://via.placeholder.com/500x300" alt="Main Image" class="col-span-2 row-span-2 w-full h-full object-cover rounded-lg">
        <img v-for="itm in 4" :key="itm" src="https://via.placeholder.com/500x300" class="w-full h-32 object-cover rounded-lg" />
      </div>
  
      <!-- Property Information -->
      <div class="flex justify-between mb-4">
        <div>
          <h2 class="text-2xl font-semibold mb-1">{{ payload?.name?.value ?? 'Nil' }}</h2>
          <p class="text-sm text-gray-500 flex items-center gap-x-3">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.07847 14.2448C8.7894 14.5155 8.40293 14.6668 8.00073 14.6668C7.59853 14.6668 7.21213 14.5155 6.923 14.2448C4.27535 11.7508 0.727174 8.96476 2.45751 4.91994C3.39309 2.73294 5.63889 1.3335 8.00073 1.3335C10.3626 1.3335 12.6084 2.73294 13.544 4.91994C15.2721 8.9597 11.7327 11.7594 9.07847 14.2448Z" fill="#5B8469" stroke="#5B8469"/>
              <path d="M10.3337 7.33333C10.3337 8.622 9.28899 9.66667 8.00033 9.66667C6.71166 9.66667 5.66699 8.622 5.66699 7.33333C5.66699 6.04467 6.71166 5 8.00033 5C9.28899 5 10.3337 6.04467 10.3337 7.33333Z" fill="white" stroke="#5B8469"/>
              </svg>
              
            {{ payload.address?.value ?? 'Nil' }}</p>
        </div>
        <!-- <div class="flex space-x-4 items-center">
          <div class="text-center">
            <img class="w-10 h-10 rounded-full" :src="manager.photo" alt="Property Manager">
            <p class="text-xs mt-1">{{ manager.name }}</p>
          </div>
          <button class="bg-green-600 text-white px-4 py-2 rounded-md">Send Application</button>
        </div> -->
      </div>
  
      <main class="lg:flex lg:space-x-6 space-y-6 lg:space-y-0">
        <section class="lg:w-7/12 space-y-6">
          <div class="max-w-5xl mx-auto bg-white">
            <!-- Dynamic Tabs -->
            <div class="mt-4 flex space-x-2 overflow-x-auto hide-scrollbar scrollbar-hide">
              <button
                :class="[activeTab === 'property-overview' ? 'bg-[#EBE5E0]' : 'bg-[#F0F2F5]']"
                @click="handleSelectedTab('property-overview')"
                class="text-[#292929] text-sm py-2 px-4  rounded-md flex-shrink-0 whitespace-nowrap w-auto"
              >
                Property Overview
              </button>
              <button
                :class="[activeTab === 'common-areas' ? 'bg-[#EBE5E0]' : 'bg-[#F0F2F5]']"
                @click="handleSelectedTab('common-areas')"
                class="text-[#292929] text-sm py-2 px-4 rounded-md flex-shrink-0 whitespace-nowrap w-auto"
              >
                Common Areas
              </button>
              <button
                v-for="room in tabs"
                :key="room.id"
                :class="[activeTab === room.name ? 'bg-[#EBE5E0]' : 'bg-[#F0F2F5]']"
                @click="handleSelectedTab(room, 'dynamic')"
                class="text-[#292929] text-sm py-2 px-4 rounded-md flex-shrink-0 whitespace-nowrap w-auto"
              >
                {{ room.name }}
              </button>
            </div>

            <div v-if="activeTab === 'property-overview'" class="">
              
              <!-- <p class="text-sm text-gray-600">{{ payload.description.value ?? 'No description available' }}</p> -->
              <h2  class="text-sm text-[#1D2739] font-medium bg-white border-[0.5px] py-3 px-3 rounded-sm border-gray-50">Property Description</h2>
              <div class="pt-4 bg-white rounded-lg border-gray-50 p-3 border-[0.5px] text-sm">
                <p class="text-[#1D2739] mt-2  leading-snug text-sm">
                  {{payload.description.value ?? 'Nil'}}
                  <a v-if="payload?.description?.length > 50" href="#" class="text-blue-500">View more</a>
                </p>
              </div>
        
              <!-- Property Highlights -->
              <h3 class="text-base text-[#1D2739] font-medium bg-white border-[0.5px] py-3 px-3 rounded-sm border-gray-50">Property Highlights</h3>
              <div class="">
                <div class="gap-4 space-y-6 bg-white rounded-lg border-gray-50 p-3 border-[0.5px] text-sm">
              <div class="flex justify-between items-center">
                  <div class="text-[#667185]">Property size <span class="font-medium text-[#1D2739]">{{payload?.size.value ?? 'Nil'}} {{payload?.sizeUnit.value ?? 'Nil'}}</span></div>
                  <div class="text-[#667185]">Flooring type <span class="font-medium text-[#1D2739]">{{property?.flooringType?.name.value ?? 'Nil'}}</span></div>
              </div>
            <div class="flex justify-between items-center">
              <div class="text-[#667185]">Number of bedrooms <span class="font-medium text-[#1D2739]">{{payload?.bedroomCount.value ?? 'Nil'}}</span></div>
              <div class="text-[#667185]">Number of bathrooms <span class="font-medium text-[#1D2739]d">{{payload?.bathroomCount.value ?? 'Nil'}}</span></div>
            </div>
                  <div class="text-[#667185]">Floor number <span class="font-medium text-[#1D2739]">{{payload?.floorNumber.value ?? 'Nil'}}</span></div>
            <div class="flex justify-between items-center">
              <div class="text-[#667185]">Architecture <span class="font-medium text-[#1D2739]">Apartment</span></div>
              <div class="text-[#667185]">{{payload?.availableRoomsCount ?? 'Nil'}} rooms available <span class="text-[#326543]">Now</span></div>
            </div>
                </div>
        
                <!-- Co-living with -->
                <h2 class="text-sm font-medium text-[#667185] mt-6 border-[0.5px] py-3 px-3 rounded-lg border-gray-50">Co-living with <span class="text-[#1D2739]">{{payload?.bedroomCount.value - 1}} Persons</span></h2>
                <table class="w-full mt-2 table-fixed text-sm">
                  <thead>
                    <tr class="bg-[#F9FAFB] rounded-lg">
                      <th class="text-left text-sm py-3 pl-6 font-medium text-[#1D2739]">Occupants</th>
                      <th class="text-left text-sm py-3 font-medium text-[#1D2739]">Room occupied</th>
                      <th class="text-left text-sm py-3 font-medium text-[#1D2739]">Available from</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(room, index) in formattedRoomData" :key="index">
                      <td class="text-[#1D2739] py-3 pl-6">{{ room.occupant }}</td>
                      <td class="text-[#1D2739] py-3">{{ room.roomOccupied }}</td>
                      <td class="text-[#1D2739] py-3">{{ room.availableFrom }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
        
              <!-- Property Visitation -->
              <!-- <h2 class="text-sm font-medium text-[#667185] mt-6 border-[0.5px] py-3 px-3 rounded-lg border-gray-50">Property visitation</h2>
              <div class="rounded-md border-[0.5px] border-gray-50 bg-white">
                <table class="w-full mt-2 table-fixed text-sm">
                  <thead>
                    <tr class="bg-[#F9FAFB] rounded-lg">
                      <th class="text-left py-3 text-[#667185] pl-4">Day</th>
                      <th class="text-left py-3 text-[#667185]">Time</th>
                    </tr>
                  </thead>
                  <tbody class="space-y-6">
                    <tr class="">
                      <td class="text-[#1D2739] py-3  pl-4">Monday</td>
                      <td class="text-[#1D2739] py-3 ">10:00 AM</td>
                    </tr>
                    <tr class="">
                      <td class="text-[#1D2739] py-3  pl-4">Tuesday</td>
                      <td class="text-[#1D2739] py-3 ">10:00 AM</td>
                    </tr>
                    <tr class="">
                      <td class="text-[#1D2739] py-3  pl-4">Wednesday</td>
                      <td class="text-[#1D2739] py-3 ">10:00 AM</td>
                    </tr>
                  </tbody>
                </table>
              </div> -->
        
              <!-- House Rules -->
              <h2 class="text-sm font-medium text-[#1D2739] mt-6 border-[0.5px] py-3 px-3 rounded-lg border-gray-50">House Rules</h2>
              <div class="">
                <ul v-if="payload?.rules?.length" class="space-y-1">
                  <p class="border-[0.5px] rounded-lg border-gray-50 py-3 text-sm pl-4">{{payload?.rules[0]?.rule }}</p>
                  <p class="border-[0.5px] rounded-lg border-gray-50 py-3 text-sm pl-4">{{payload?.rules[1]?.rule }}</p>
                  <div class="border-[0.5px] rounded-lg border-gray-50 py-3">
                      <p class="py-3 text-sm pl-4">Other rules</p>
                    <div class="pl-5">
                      <ul class="list-disc ml-5 space-y-4 text-sm">
                      <li v-for="(item, idx) in otherRules" :key="idx" class="text-[#1D2739] leading-snug">{{item.rule}}</li>
                       </ul>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
      
            <div v-if="activeTab === 'common-areas'" class="mb-6 mt-4">
              <h3 class="font-semibold text-lg">Common Areas</h3>
              <p class="text-sm text-gray-600">This section provides details about the shared common areas of the property.</p>
              <div class="space-y-6">
                <!-- Gallery Section -->
                <div class="flex cursor-pointer items-center border-[0.5px] border-gray-50 space-x-4 bg-white p-4 rounded-lg">
                  <img :src="dynamicImage('placeholder.png')" alt="Gallery" class="w-12 h-12 rounded-full">
                  <div class="flex-1">
                    <h3 class="text-lg font-medium">Gallery</h3>
                    <p class="text-gray-500 text-sm">Click to view photos of all common areas</p>
                  </div>
                  <button class="text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
            
                <!-- Interior Features Section -->
                <h2 class="text- pl-4 font-medium bg-white border-[0.5px] py-4 border-gray-50">Interior Features</h2>
                <div class="bg-white p-6 rounded-lg border-[0.5px] space-y-4 border-gray-50">  
                  <div class="space-y-2">
                    <p class="font-medium text-sm text-[#667185]">
                      Furnished: <span class="font-medium text-gray-900">{{payload?.isFurnishedCommonArea ? 'Yes' : 'No'}}</span>
                    </p>
            
                    <div class="space-y-2">
                      <p class="text-sm font- text-[#667185]">Amenities</p>
            
                      <!-- Amenities -->
                      <div class="grid grid-cols-3 gap-3">
                        <div v-for="item in interiorCommonAreas" :key="item.id" class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                          <img :src="dynamicImage('roomBg.png')" alt="Living room" class="w-7 h-7">
                          <p class="text-[#1D2739] text-sm">{{item.name}}</p>
                        </div>
                      </div>
                      <button class="mt-2 font-medium text-[#1D2739]">View less</button>
                    </div>
                  </div>
                </div>
            
                <!-- Exterior Features Section -->
                <h2 class="text- pl-4 font-medium bg-white border-[0.5px] py-4 border-gray-50">Exterior Feature</h2>
                <div class="bg-white p-6 rounded-lg space-y-4">
                  <div class="space-y-2">
                    <p class="text-sm font- text-[#667185]">Amenities</p>
            
                    <!-- Exterior Amenities -->
                    <div class="grid grid-cols-3 gap-3">
                      <div  v-for="item in exteriorCommonAreas" :key="item.id" class="flex items-center space-x-2 p-2 bg-white border-[0.5px] border-gray-100 rounded-md">
                        <img :src="dynamicImage('roomBg.png')" alt="Parking space" class="w-7 h-7">
                        <p class="text-[#1D2739] text-sm">{{item.name}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      
            <div v-if="activeTab !== 'property-overview' && activeTab !== 'common-areas'" class="mt-4">
              <div class="flex cursor-pointer items-center border-[0.5px] border-gray-50 space-x-4 bg-white p-4 rounded-lg">
                <img :src="dynamicImage('placeholder.png')" alt="Gallery" class="w-12 h-12 rounded-full">
                <div class="flex-1">
                  <h3 class="text-lg font-medium">Gallery</h3>
                  <p class="text-gray-500 text-sm">Click to view photos of all common areas</p>
                </div>
                <button class="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <div class="space-y-3">
                <div 
                  v-for="(value, key) in selectedRoomObj" 
                  :key="key" 
                  class="flex justify-between border-[0.5px] p-3 rounded-md items-center gap-x-2 bg-white"
                >
                  <p>{{ key }}</p>
            
                  <!-- Check if the key is 'features' -->
                  <div v-if="key === 'features'" class="features-container space-y-4">
                    <div v-for="feature in value" :key="feature.name" class="feature-item">
                      <!-- Only display features that have a name -->
                      <h3 v-if="feature.name" class="feature-name text-sm">{{ feature.name }}</h3>
            
                      <!-- Display images only if they exist and the feature has a name -->
                      <div v-if="feature.images.length > 0 && feature.name" class="images-container space-y-4">
                        <div
                          v-for="(image, index) in feature.images"
                          :key="index"
                          class="image-wrapper"
                        >
                          <img :src="image" :alt="`${feature.name} Image ${index + 1}`" class="feature-image h-20 w-full" />
                          <span class="image-tag text-xs px-3 py-1 border rounded-lg ">{{ feature.name }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p v-else>{{ value ?? 'Nil' }}</p>
                </div>
              </div>
            </div>
            
          </div>
        </section>
        <section class="lg:w-5/12 space-y-6">
  
     <!-- Property Manager -->
     <div class="bg-[#F0F2F5] p-6 rounded-md">
      <div class="flex items-center justify-between space-x-4">
        <div class="flex items-center space-x-4">
          <img
            :src="dynamicImage(propertyManagerImage)"
            alt="Property Manager"
            class="w-10 h-10 rounded-full"
          />
          <div>
            <h3 class="font-bold text-[#1D2739]">
              <span v-if="payload.agent">
                {{ payload.agent.firstName }}
                {{ payload.agent.lastName }}
              </span>
              <span v-else>Nil</span>
            </h3>
            <p class="text-xs text-[#1D2739]">Property Manager</p>
          </div>
        </div>
        <div class="ml-auto flex space-x-2">
          <button @click="makeCall" class="p-2 rounded-full">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="22" fill="#EBE5E0" />
              <path
                d="M15.1483 21.9523C14.3583 20.5747 13.9769 19.4499 13.7469 18.3097C13.4067 16.6233 14.1852 14.976 15.4748 13.9249C16.0199 13.4806 16.6447 13.6324 16.967 14.2107L17.6946 15.5161C18.2714 16.5508 18.5598 17.0682 18.5026 17.6167C18.4454 18.1652 18.0565 18.6119 17.2786 19.5053L15.1483 21.9523ZM15.1483 21.9523C16.7474 24.7406 19.2569 27.2514 22.0483 28.8523M22.0483 28.8523C23.4259 29.6423 24.5507 30.0238 25.691 30.2538C27.3773 30.594 29.0247 29.8155 30.0757 28.5258C30.52 27.9808 30.3682 27.356 29.79 27.0337L28.4846 26.306C27.4498 25.7292 26.9325 25.4409 26.384 25.4981C25.8355 25.5552 25.3887 25.9442 24.4953 26.722L22.0483 28.8523Z"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M26.1663 14.5V21.1667M29.4997 17.8333H22.833"
                stroke="#1D2739"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button @click="sendSms" class="p-2 rounded-full">
            <svg
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="44" height="44" rx="22" fill="#5B8469" />
              <path
                d="M22.417 14.5031C21.6711 14.492 20.9209 14.5107 20.1915 14.5592C16.7056 14.7909 13.929 17.607 13.7005 21.1422C13.6558 21.8341 13.6558 22.5506 13.7005 23.2424C13.7837 24.53 14.3532 25.7222 15.0236 26.7288C15.4128 27.4336 15.1559 28.3132 14.7505 29.0815C14.4582 29.6355 14.312 29.9125 14.4294 30.1126C14.5467 30.3127 14.8089 30.3191 15.3332 30.3318C16.37 30.3571 17.0692 30.0631 17.6242 29.6538C17.939 29.4217 18.0964 29.3057 18.2049 29.2923C18.3133 29.279 18.5268 29.3669 18.9537 29.5427C19.3373 29.7007 19.7828 29.7982 20.1915 29.8254C21.3783 29.9043 22.6199 29.9045 23.8092 29.8254C27.295 29.5937 30.0717 26.7777 30.3002 23.2424C30.3354 22.6967 30.3428 22.1356 30.3225 21.5833"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.5 16.5837H30.3333M27.4167 13.667V19.5003"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9956 22.417H22.003M25.3252 22.417H25.3327M18.666 22.417H18.6735"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="mt-6">
        <button
          class="mt-4 w-full bg-[#292929] text-white py-3 text-sm rounded-md"
        >
          Send application
        </button>
      </div>
    </div>
  
    <h3
      class="text-sm text-[#1D2739] font-medium bg-white border-[0.5px] px-3 py-3 rounded-sm border-gray-100"
    >
      Neighborhood Amenities
    </h3>
  
      <!-- <div class="mb-4 overflow-x-auto scrollbar-hidden">
        <div class="flex space-x-2">
          <button
            v-for="type in amenityTypes"
            :key="type"
            @click="toggleVisibility(type)"
            :class="[
              'px-4 rounded text-sm',
              visibleType === type
                ? 'bg-gray-300 text-[#344054]'
                : 'bg-gray-200',
            ]"
          >
            {{ type }}
          </button>
        </div>
      </div>
      <div
        v-for="type in amenityTypes"
        :key="type"
        v-show="visibleType === type"
      >
        <div
          v-for="amenity in groupedAmenities[type]"
          :key="amenity.id"
          class="p-4 mb-2 border-[0.5px] rounded-lg flex items-center gap-x-2"
        >
          <div class="flex items-center">
            <svg
              width="50"
              height="49"
              viewBox="0 0 50 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="0.5"
                width="48"
                height="48"
                rx="24"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="48"
                height="48"
                rx="24"
                stroke="#F9FAFB"
              />
              <rect
                x="3"
                y="2.5"
                width="44"
                height="44"
                rx="22"
                fill="#F4F4F4"
              />
              <path
                d="M22.917 27C22.1549 27.1715 21.667 27.4351 21.667 27.7307C21.667 28.2476 23.1594 28.6667 25.0003 28.6667C26.8413 28.6667 28.3337 28.2476 28.3337 27.7307C28.3337 27.4351 27.8457 27.1715 27.0837 27"
                stroke="#1D2739"
                stroke-linecap="round"
              />
              <path
                d="M26.0413 23.2497C26.0413 23.825 25.575 24.2913 24.9997 24.2913C24.4244 24.2913 23.958 23.825 23.958 23.2497C23.958 22.6744 24.4244 22.208 24.9997 22.208C25.575 22.208 26.0413 22.6744 26.0413 23.2497Z"
                fill="white"
                stroke="#1D2739"
              />
              <path
                d="M25.5236 26.7887C25.383 26.924 25.1952 26.9997 24.9998 26.9997C24.8043 26.9997 24.6164 26.924 24.4759 26.7887C23.189 25.5417 21.4643 24.1486 22.3054 22.1262C22.7601 21.0327 23.8517 20.333 24.9998 20.333C26.1478 20.333 27.2393 21.0327 27.6941 22.1262C28.5341 24.1461 26.8137 25.546 25.5236 26.7887Z"
                stroke="#1D2739"
              />
            </svg>
          </div>
          <div>
            <h3 class="font-xs text-[#1D2739] font-medium">
              {{ amenity.description }}
            </h3>
            <p class="text-sm text-[#667185]">{{ amenity.address }}</p>
          </div>
        </div>
      </div> -->

      <!-- <div class="mb-4 flex space-x-2">
        <button
          v-for="type in amenityTypes"
          :key="type"
          @click="toggleVisibility(type)"
          :class="[
            'px-4 py-2 rounded text-sm',
            visibleType === type
              ? 'bg-[#EBE5E0] text-[#344054]'
              : 'bg-[#F0F2F5]',
          ]"
        >
          {{ type }}
        </button>
      </div> -->
      <!-- {{payload?.neighbouringLandmarks.value}} -->
      <!-- <AmenitiesGrouping :propertyObj="payload" /> -->
      <div class="mb-4 overflow-x-auto scrollbar-hidden">
        <!-- <div class="flex space-x-2">
          <button
            v-for="type in amenityTypes"
            :key="type"
            @click="toggleVisibility(type)"
            :class="[
              'px-4 py-2 rounded text-sm',
              visibleType === type
                ? 'bg-[#EBE5E0] text-[#344054]'
                : 'bg-[#F0F2F5]',
            ]"
          >
            {{ type }}
          </button>
        </div> -->
        <div class="flex space-x-2">
          <button
            v-for="type in amenityTypes"
            :key="type"
            @click="toggleVisibility(type)"
            :class="[
              'flex-1 px-4 py-2 rounded text-sm text-center', // Added 'flex-1' for equal width and 'text-center'
              visibleType === type
                ? 'bg-[#EBE5E0] text-[#344054]'
                : 'bg-[#F0F2F5]',
            ]"
          >
            {{ type }}
          </button>
        </div>
      </div>
      <div
        v-for="type in amenityTypes"
        :key="type"
        v-show="visibleType === type"
      >
        <div
          v-for="amenity in groupedAmenities[type]"
          :key="amenity.id"
          class="px-4 py-2 mb-2 border-[0.5px] rounded-lg flex items-center gap-x-2"
        >
          <div class="flex items-center">
            <svg
              width="50"
              height="49"
              viewBox="0 0 50 49"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="1"
                y="0.5"
                width="48"
                height="48"
                rx="24"
                fill="white"
              />
              <rect
                x="1"
                y="0.5"
                width="48"
                height="48"
                rx="24"
                stroke="#F9FAFB"
              />
              <rect
                x="3"
                y="2.5"
                width="44"
                height="44"
                rx="22"
                fill="#F4F4F4"
              />
              <path
                d="M22.917 27C22.1549 27.1715 21.667 27.4351 21.667 27.7307C21.667 28.2476 23.1594 28.6667 25.0003 28.6667C26.8413 28.6667 28.3337 28.2476 28.3337 27.7307C28.3337 27.4351 27.8457 27.1715 27.0837 27"
                stroke="#1D2739"
                stroke-linecap="round"
              />
              <path
                d="M26.0413 23.2497C26.0413 23.825 25.575 24.2913 24.9997 24.2913C24.4244 24.2913 23.958 23.825 23.958 23.2497C23.958 22.6744 24.4244 22.208 24.9997 22.208C25.575 22.208 26.0413 22.6744 26.0413 23.2497Z"
                fill="white"
                stroke="#1D2739"
              />
              <path
                d="M25.5236 26.7887C25.383 26.924 25.1952 26.9997 24.9998 26.9997C24.8043 26.9997 24.6164 26.924 24.4759 26.7887C23.189 25.5417 21.4643 24.1486 22.3054 22.1262C22.7601 21.0327 23.8517 20.333 24.9998 20.333C26.1478 20.333 27.2393 21.0327 27.6941 22.1262C28.5341 24.1461 26.8137 25.546 25.5236 26.7887Z"
                stroke="#1D2739"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-sm text-[#1D2739]">
              {{ amenity.description }}
            </h3>
            <p class="text-sm text-[#667185]">{{ amenity.address }}</p>
          </div>
        </div>
      </div>
  
        </section>
      </main>
  
    </div>
  </main>
</Layout>
  </template>
  
  <!-- <script setup lang="ts">
  import Layout from '@/layouts/dashboardWithoutSidebar'
  const propertyManagerImage = ref("shape.png");
  import { dynamicImage, dynamicIcons } from '@/utils/assets/dynamicIcons'
  import { ref, computed } from 'vue';
  import { use_create_property } from '@/composables/modules/property/create';
  const { payload } = use_create_property();
  const router = useRouter()

  const visibleType = ref(null) as any;
  definePageMeta({
     middleware: 'auth'
  })
  
  // Dummy data
  const manager = {
    name: "Joy Adetunji",
    photo: "https://via.placeholder.com/150"
  };
  
  // Generate tabs based on bedroom count
  const bedroomCount = payload?.bedroomCount?.value ?? 1; // Assuming bedroomCount is fetched from payload
  // Computed property to group amenities by type
const groupedAmenities = computed(() => {
  if (payload) {
    return payload?.neighbouringLandmarks.value?.reduce((acc, amenity) => {
      const { type } = amenity;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(amenity);
      return acc;
    }, {});
  }
});
  
  // const activeTab = ref(tabs[0]);
  const activeTab = ref("property-overview");
  const selectedRoomObj = ref({});
  
  // Generate tabs based on bedroom count
  const tabs = payload?.rooms?.value?.map((room: any, index: number) => ({
    id: index + 1,
    name: `Room ${index + 1}`,
    details: room,
  }));
  
  // Handling tab switch
  const handleSelectedTab = (item: any, itemType: string | null = null) => {
    if (itemType === 'dynamic') {
      console.log(selectedRoomObj.value, 'room obk jee', item)
      activeTab.value = item.name;
      selectedRoomObj.value = item.details;
    } else {
      activeTab.value = item;
    }
  };
  
  // This is just for demo purposes; replace it with your actual image function
  const dynamicImage = (img: string) => `https://via.placeholder.com/150?text=${img}`;

  const exteriorCommonAreas = computed(() => {
     return payload.commonAreas.value.filter((item: any) => item.type === 'exterior')
  })

  const interiorCommonAreas = computed(() => {
    return payload?.commonAreas?.value.filter((item: any) => item.type === 'interior')
  })


  // Method to handle 'View more' click
const viewMore = () => {
  alert('Displaying more amenities...');
};

const phoneNumber = "+1234567890"; // Replace with a dynamic number if needed

const makeCall = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const sendSms = () => {
  window.location.href = `sms:${phoneNumber}`;
};

// Get all unique amenity types
const amenityTypes = computed(() => {
  if (groupedAmenities.value) {
    return Object.keys(groupedAmenities?.value);
  }
});

onMounted(() => {
  if (amenityTypes?.value?.length > 0) {
    visibleType.value = amenityTypes.value[0];
  }
});

// Method to toggle visibility of amenity lists
const toggleVisibility = (type: any) => {
  visibleType.value = visibleType.value === type ? null : type;
};

const formattedRoomData = computed(() => {
if(payload?.rooms?.value){
  return payload?.rooms?.value.map(room => {
    return {
      occupant: room?.occupantName || "No occupant",
      roomOccupied: room?.name,
      availableFrom: room?.availability === "available_now"
        ? "Available now"
        : room?.availableFrom
          ? new Date(room?.availableFrom).toLocaleDateString()
          : "Not available"
    };
  });
}
});

  </script>
  

  <style scoped>
/* Custom scrollbar hide */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}

.scrollbar-hidden {
  -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}
</style> -->

<script setup lang="ts">
import Layout from '@/layouts/dashboardWithoutSidebar';
import { use_create_property } from '@/composables/modules/property/create';

const { payload } = use_create_property();
const router = useRouter();

const visibleType = ref(null); // Changed type to `any` removed
definePageMeta({
  middleware: 'auth'
});

// Generate tabs based on bedroom count
const bedroomCount = payload?.bedroomCount?.value ?? 1;

// Computed property to group amenities by type
const groupedAmenities = computed(() => {
  if (payload) {
    return payload?.neighbouringLandmarks.value?.reduce((acc, amenity) => {
      const { type } = amenity;
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(amenity);
      return acc;
    }, {});
  }
});

// Tabs for rooms
const tabs = payload?.rooms?.value?.map((room: any, index: number) => ({
  id: index + 1,
  name: `Room ${index + 1}`,
  details: room,
}));

const activeTab = ref("property-overview");
const selectedRoomObj = ref({});

// Handling tab switch
const handleSelectedTab = (item: any, itemType: string | null = null) => {
  if (itemType === 'dynamic') {
    console.log(selectedRoomObj.value, 'room obj jee', item);
    activeTab.value = item.name;
    selectedRoomObj.value = item.details;
  } else {
    activeTab.value = item;
  }
};

// Method to handle 'View more' click
const viewMore = () => {
  alert('Displaying more amenities...');
};

const phoneNumber = "+1234567890"; // Replace with a dynamic number if needed

const makeCall = () => {
  window.location.href = `tel:${phoneNumber}`;
};

const sendSms = () => {
  window.location.href = `sms:${phoneNumber}`;
};

// Get all unique amenity types
const amenityTypes = computed(() => {
  if (groupedAmenities.value) {
    return Object.keys(groupedAmenities?.value);
  }
});

// Method to toggle visibility of amenity lists
const toggleVisibility = (type: any) => {
  visibleType.value = visibleType.value === type ? null : type;
};

onMounted(() => {
  console.log('Amenity Types:', amenityTypes.value); // Log amenity types
  if (amenityTypes?.value?.length > 0) {
    visibleType.value = amenityTypes.value[0];
  }
});

const formattedRoomData = computed(() => {
  if (payload?.rooms?.value) {
    return payload?.rooms?.value.map(room => {
      return {
        occupant: room?.occupantName || "No occupant",
        roomOccupied: room?.name,
        availableFrom: room?.availability === "available_now"
          ? "Available now"
          : room?.availableFrom
            ? new Date(room?.availableFrom).toLocaleDateString()
            : "Not available"
      };
    });
  }
});

</script>

<style scoped>

button {
  min-height: 48px; /* Ensures all buttons have the same height */
}
/* Custom scrollbar hide */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
}

.scrollbar-hidden {
  -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
  scrollbar-width: none; /* Hide scrollbar for Firefox */
}
</style>
