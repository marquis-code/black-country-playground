<template>
    <main class="min-h-screen">
        <div class="p-6">
            <nav class="mb-4">
              <ul class="flex space-x-4">
                <li><a href="#" class="text-green-700 font-medium border-b-4 border-[#326543] pb-1">All Applications</a></li>
                <li><a href="#" class="text-[#475367] font-medium">Pending</a></li>
                <li><a href="#" class="text-[#475367] font-medium">Approved</a></li>
                <li><a href="#" class="text-[#475367] font-medium">Declined</a></li>
              </ul>
            </nav>
            <div class="grid grid-cols-3 gap-4">
              <div
                v-for="(application, index) in applications"
                :key="index"
                class="bg-white p-4 rounded-lg cursor-pointer border-[0.5px] border-gray-100"
                @click="router.push(`/dashboard/property/rental-applications/${index}`)"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <img 
                      :src="application.applicant.image" 
                      alt="Applicant Image" 
                      class="w-12 h-12 rounded-lg object-cover mr-4"
                    />
                    <div>
                      <h3 class="text-[#1D2739]">{{ application.applicant.name }}</h3>
                      <p class="text-sm text-gray-500">{{ application.applicant.email }}</p>
                    </div>
                  </div>
                  <div v-if="application.status === 'New'" class="bg-blue-100 text-blue-700 px-2.5 py-1.5 rounded-full text-xs font-semibold">
                    New
                  </div>
                  <div v-if="application.status === 'Approved'" class="bg-green-100 text-green-700 px-2.5 py-1.5 rounded-full text-xs font-semibold">
                    Approved
                  </div>
                  <div v-if="application.status === 'Pending'" class="bg-yellow-100 text-yellow-700 px-2.5 py-1.5 rounded-full text-xs font-semibold">
                    Pending
                  </div>
                  <div v-if="application.status === 'Declined'" class="bg-red-100 text-red-700 px-2.5 py-1.5 rounded-full text-xs font-semibold">
                    Declined
                  </div>
                </div>
                <div class="mt-4">
                  <p  class="text-[#1D2739]">{{ application.property.name }}</p>
                  <p class="text-sm text-[#667185] font-light">{{ application.property.location }}</p>
                </div>
              </div>
            </div>
          </div>
      </main>
  </template>
  
  <script setup lang="ts">
  import Layout from '@/layouts/dashboard.vue';
  const router = useRouter()
  const applications = [
    {
      applicant: {
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        name: 'Jake Tokumbo',
        email: 'Regina_OKon19@yahoo.com',
      },
      property: {
        name: 'Cummings, Frami and Lynch apartments',
        location: 'Jason Gardens co-living space, Iconic Tower, off Ajo...'
      },
      status: 'New'
    },
    {
      applicant: {
        image: 'https://randomuser.me/api/portraits/men/75.jpg',
        name: 'Ramiro Hodkiewicz',
        email: 'Ramiro_Hodkiewicz97@hotmail.com',
      },
      property: {
        name: 'Cummings, Frami and Lynch apartments',
        location: 'Jason Gardens co-living space, Iconic Tower, off Ajo...'
      },
      status: 'Approved'
    },
    {
      applicant: {
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        name: 'Regina O\'Kon',
        email: 'Regina_OKon19@yahoo.com',
      },
      property: {
        name: 'Cummings, Frami and Lynch apartments',
        location: 'Jason Gardens co-living space, Iconic Tower, off Ajo...'
      },
      status: 'Approved'
    },
    {
      applicant: {
        image: 'https://randomuser.me/api/portraits/women/65.jpg',
        name: 'Ramiro Hodkiewicz',
        email: 'Ramiro_Hodkiewicz97@hotmail.com',
      },
      property: {
        name: 'Cummings, Frami and Lynch apartments',
        location: 'Jason Gardens co-living space, Iconic Tower, off Ajo...'
      },
      status: 'Pending'
    },
    {
      applicant: {
        image: 'https://randomuser.me/api/portraits/men/41.jpg',
        name: 'Regina O\'Kon',
        email: 'Regina_OKon19@yahoo.com',
      },
      property: {
        name: 'Cummings, Frami and Lynch apartments',
        location: 'Jason Gardens co-living space, Iconic Tower, off Ajo...'
      },
      status: 'Declined'
    },
    {
      applicant: {
        image: 'https://randomuser.me/api/portraits/men/41.jpg',
        name: 'Regina O\'Kon',
        email: 'Regina_OKon19@yahoo.com',
      },
      property: {
        name: 'Cummings, Frami and Lynch apartments',
        location: 'Jason Gardens co-living space, Iconic Tower, off Ajo...'
      },
      status: 'Declined'
    }
  ]
  </script>
  
  <style scoped>
  /* Optional: Custom styles for better UI control */
  </style>
  