<template>
   <main class="min-h-screen">
       <!-- Header with Back Button, Title, and Action Buttons -->
       <div class="flex justify-between items-center mb-6">
<div class="flex items-center gap-x-3">
    <button @click="goBack" class="flex items-center text-gray-600">
        <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back
      </button>
      <h2 class="text- font-medium text-gray-800">Property managers</h2>
</div>
        <div class="space-x-2">
          <button @click="openDeleteModal" class="px-4 py-2 bg-gray-200 text-gray-700 rounded-md">Delete</button>
          <button class="px-4 py-2 bg-black text-white rounded-md">Edit</button>
        </div>
      </div>
    <div class="max-w-4xl mx-auto p-6 bg-white ">
        <!-- Title with Icon -->
        <div class="flex items-center gap-x-4 mb-8">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5289_79355)">
              <g opacity="0.8">
              <g clip-path="url(#clip1_5289_79355)">
              <rect width="30" height="30" rx="6" fill="#292929"/>
              <path d="M0.288893 22.1683C0.288893 21.2754 2.18618 20.8592 3.46852 20.8592C3.83222 20.8592 4.44286 20.9324 4.44286 21.4217C4.44286 22.379 2.46915 22.9013 1.45511 22.9013C0.917007 22.9013 0.288893 22.7092 0.288893 22.1683ZM5.08715 21.4217C5.08715 20.8383 4.66193 20.2149 3.46852 20.2149C2.14582 20.2149 -0.355615 20.6233 -0.355615 22.1683C-0.355615 22.9922 0.372212 23.5456 1.45511 23.5456C2.72148 23.5456 5.08715 22.9227 5.08715 21.4217ZM-3.83203 27.9431C-2.18319 28.5347 0.317385 29.1483 3.59738 29.1483C8.76429 29.1483 15.6336 28.5407 15.6336 23.2875C15.6336 21.2788 14.3731 20.3911 13.3601 19.6777C12.4693 19.0502 11.9204 18.6226 11.8641 17.7713C11.8269 17.2101 12.0911 16.7012 12.3974 16.1121C12.7408 15.4514 13.13 14.7027 13.13 13.7557C13.13 12.4706 12.1768 11.0872 10.0842 11.0872C8.42154 11.0872 6.88774 11.7374 5.26415 12.4259C3.17606 13.3113 0.808875 14.315 -2.53609 14.315C-2.99821 14.315 -3.42883 14.2835 -3.83203 14.2274V10.6873C-3.066 10.7825 -2.29483 10.8303 -1.52291 10.8304C2.47908 10.8304 5.28465 9.48091 7.75997 8.29031C9.86835 7.27605 11.8597 6.31834 14.2938 6.31834C17.6584 6.31834 19.4187 8.22447 19.4187 10.1073C19.4187 11.3722 18.7625 12.1425 18.0679 12.9578C17.3522 13.7978 16.612 14.6666 16.612 16.0756C16.612 17.4279 17.1432 18.1547 17.6569 18.8575C18.2565 19.6777 18.8767 20.5262 18.8767 22.5413C18.8767 26.3868 15.2362 28.7672 11.6886 30.1738H-3.83203V27.9431ZM-3.83203 24.7762C-2.24314 25.3485 -0.567193 25.6416 1.12163 25.6424C4.04462 25.6424 8.9482 24.9974 8.9482 20.6786C8.9482 19.4081 7.9279 17.6185 5.65936 17.6185C4.13225 17.6185 2.92891 18.02 1.76528 18.4083C0.581585 18.8031 -0.536279 19.1761 -2.00252 19.1761C-2.64293 19.1761 -3.25659 19.0658 -3.83203 18.8903V15.6571C-3.4019 15.7076 -2.96917 15.7328 -2.53609 15.7324C1.09725 15.7324 3.71437 14.6228 5.81736 13.7311C7.36929 13.073 8.70948 12.5047 10.0842 12.5047C11.2845 12.5047 11.7123 13.1509 11.7123 13.7557C11.7123 14.3562 11.4341 14.8915 11.1395 15.4585C10.7863 16.138 10.3862 16.9082 10.4494 17.8652C10.5537 19.4349 11.6109 20.1795 12.5435 20.8366C13.4779 21.4947 14.2159 22.0142 14.2159 23.2875C14.2159 25.1949 13.1151 27.7307 3.59738 27.7307C0.174495 27.7307 -2.3468 27.0087 -3.83203 26.4209V24.7762ZM-3.83203 19.5672C-3.25292 19.726 -2.64078 19.8206 -2.00252 19.8206C-0.431594 19.8206 0.789015 19.4133 1.96926 19.0196C3.13547 18.6304 4.23672 18.263 5.65936 18.263C7.65745 18.263 8.30391 19.8905 8.30391 20.6786C8.30391 23.5044 5.82038 24.9981 1.12163 24.9981C-0.891562 24.9981 -2.59761 24.5495 -3.83203 24.0809V19.5672ZM-3.83203 7.25878C-3.25102 7.38798 -2.65773 7.45398 -2.06253 7.45563C1.70247 7.45563 4.59675 5.87866 7.6609 4.20931C10.7509 2.52571 13.9463 0.784916 18.1603 0.784916C20.1113 0.784916 21.7738 1.34914 22.9674 2.41671C24.1265 3.4532 24.7393 4.86569 24.7393 6.50137C24.7393 8.21756 23.6855 9.76194 22.57 11.3968C21.3578 13.1738 20.104 15.0111 20.104 17.2401C20.104 21.9624 23.9307 24.7261 30.629 24.8763V26.574C30.6003 26.5763 30.5719 26.5826 30.5449 26.5927C25.6866 28.4678 22.5467 25.1217 22.406 24.965C22.3756 24.9227 22.3355 24.8883 22.2889 24.8649C22.2424 24.8415 22.1909 24.8297 22.1388 24.8305C22.0867 24.8314 22.0355 24.8448 21.9898 24.8698C21.944 24.8947 21.905 24.9304 21.8761 24.9737C21.8391 25.03 21.8212 25.0968 21.8249 25.164H21.8225C21.8225 25.1729 21.799 26.0872 20.9976 27.4345C20.5588 28.1725 19.8197 29.1384 18.5911 30.1738H13.3385C14.0817 29.8224 14.8786 29.3912 15.6396 28.8723C18.2151 27.1157 19.521 24.9858 19.521 22.5413C19.521 20.3157 18.807 19.339 18.1771 18.4771C17.683 17.8013 17.2563 17.2175 17.2563 16.0756C17.2563 14.9038 17.8888 14.1615 18.5583 13.3756C19.298 12.5075 20.063 11.6096 20.063 10.1073C20.063 7.90416 18.0813 5.67382 14.2938 5.67382C11.7128 5.67382 9.65704 6.66261 7.48067 7.70946C4.94944 8.92705 2.33209 10.1859 -1.52291 10.1859C-2.39752 10.1859 -3.18385 10.12 -3.83203 10.0359V7.25878ZM-3.83203 1.24337C-3.09168 1.75212 -1.9941 2.18575 -0.397707 2.18575C3.19397 2.18575 5.87672 0.582884 8.71704 -1.11431C11.6035 -2.83892 14.5882 -4.62224 18.6755 -4.62224C22.3753 -4.62224 25.5729 -3.31961 28.179 -0.75083C29.4033 0.455965 30.2015 1.67398 30.629 2.42016V6.28941C30.6218 6.31217 30.6159 6.3353 30.6111 6.3587C30.459 7.09776 29.2861 8.05223 28.0443 9.0626C25.6819 10.9849 22.7416 13.3771 22.7552 17.1119C22.7608 18.6828 23.4254 20.1007 24.5785 21.0021C25.654 21.8426 26.9806 22.1239 28.2739 22.1239C29.0972 22.1236 29.9062 22.0092 30.629 21.8534V24.2322C24.3402 24.0863 20.7485 21.5566 20.7485 17.2401C20.7485 15.2101 21.9451 13.4561 23.1023 11.76C24.2238 10.1161 25.3836 8.41636 25.3836 6.50137C25.3836 2.75624 22.4131 0.1404 18.1603 0.1404C13.7821 0.1404 10.5137 1.92113 7.35266 3.64358C4.36255 5.27257 1.53821 6.81111 -2.06253 6.81111C-2.69086 6.81111 -3.28551 6.72693 -3.83203 6.59699V1.24337ZM30.629 11.3227C30.2133 11.6657 29.8131 11.9752 29.4261 12.2744C27.7527 13.5673 26.4311 14.5887 26.4311 16.4855C26.4311 17.3569 26.7635 18.0316 27.3918 18.4366C27.8973 18.7623 28.5356 18.8844 29.1805 18.8844C29.6791 18.8844 30.181 18.8111 30.629 18.7025V20.3993C28.3704 20.9443 26.5802 20.7675 25.4516 19.8851C24.643 19.2531 24.1768 18.2404 24.1729 17.1067C24.1617 14.0493 26.6996 11.9841 28.939 10.1621C29.5567 9.65941 30.1384 9.18498 30.629 8.71487V11.3227ZM30.629 18.0362C29.6975 18.2855 28.4756 18.3679 27.7408 17.895C27.2932 17.6064 27.0756 17.1454 27.0756 16.4855C27.0756 14.9051 28.2267 14.0154 29.8201 12.7842C30.0914 12.5755 30.361 12.3646 30.629 12.1516V18.0362ZM30.629 30.1738H19.571C21.5216 28.3568 22.1593 26.7099 22.3656 25.814C22.7876 26.1794 23.491 26.7013 24.4554 27.1246C25.8174 27.7223 27.9852 28.2202 30.629 27.2487V30.1738Z" fill="white" fill-opacity="0.9"/>
              </g>
              </g>
              </g>
              <defs>
              <clipPath id="clip0_5289_79355">
              <rect width="30" height="30" fill="white"/>
              </clipPath>
              <clipPath id="clip1_5289_79355">
              <rect width="30" height="30" rx="6" fill="white"/>
              </clipPath>
              </defs>
              </svg>
              
          <h2 class="text- font-medium text-gray-800">Property manager</h2>
        </div>
    
        <!-- Permissions Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Property Management -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">Property management</h3>
            <ul class="space-y-4">
              <li v-for="(permission, index) in propertyManagement" :key="index" class="text-[#667185] text-sm">{{ permission }}</li>
            </ul>
          </div>
    
          <!-- Tenant Management -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">Tenant management</h3>
            <ul class="space-y-4">
              <li v-for="(permission, index) in tenantManagement" :key="index" class="text-[#667185] text-sm">{{ permission }}</li>
            </ul>
          </div>
    
          <!-- Financial Management -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">Financial management</h3>
            <ul class="space-y-4">
              <li v-for="(permission, index) in financialManagement" :key="index" class="text-[#667185] text-sm">{{ permission }}</li>
            </ul>
          </div>
    
          <!-- Messages -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">Messages</h3>
            <ul class="space-y-4">
              <li v-for="(permission, index) in messages" :key="index" class="text-[#667185] text-sm">{{ permission }}</li>
            </ul>
          </div>
    
          <!-- Notifications -->
          <div>
            <h3 class="font-semibold text-gray-800 mb-3">Notifications</h3>
            <ul class="space-y-4">
              <li v-for="(permission, index) in notifications" :key="index" class="text-[#667185] text-sm">{{ permission }}</li>
            </ul>
          </div>
        </div>
      </div>

        <!-- Delete Confirmation Modal -->
    <MembersDeleteModal v-if="isDeleteModalOpen" @close="closeDeleteModal" />
   </main>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';

  definePageMeta({
     layout: 'dashboard'
})
  
  
  // Define permission categories
  const propertyManagement = ref([
    'Add new property',
    'View all properties',
    'View property information',
    'View rental applications',
    'View application information',
    'Approve & decline rental applications',
  ]);
  
  const tenantManagement = ref([
    'View all tenants',
    'View tenant information',
    'View all maintenance requests',
    'View maintenance requests information',
    'Assign maintenance requests',
  ]);
  
  const financialManagement = ref(['Select all', 'Furnished', 'Not furnished']);
  
  const messages = ref([
    'Select all',
    'View all tenants',
    'View tenant information',
    'View all maintenance requests',
    'View maintenance requests information',
    'Assign maintenance requests',
  ]);
  
  const notifications = ref([
    'Select all',
    'View all members',
    'View members information',
    'Invite new members',
  ]);

  const isDeleteModalOpen = ref(false);

const openDeleteModal = () => {
  isDeleteModalOpen.value = true;
};

const closeDeleteModal = () => {
  isDeleteModalOpen.value = false;
};

const goBack = () => {
  // Logic to go back to the previous page
};
  </script>
  