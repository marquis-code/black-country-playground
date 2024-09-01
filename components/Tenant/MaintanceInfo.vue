<template>
    <div class="p-6 space-y-8">
      <div v-for="(group, index) in groupedServices" :key="index">
        <h2 class="text-sm font-medium text-gray-700 mb-4 bg-white rounded-lg px-4 py-3.5">{{ group.date }}</h2>
        <div>
          <div @click="router.push(`/dashboard/tenant-mgt/maintanance-request/${serviceIndex}`)" v-for="(service, serviceIndex) in group.services" :key="serviceIndex" class="p-4 bg-white cursor-pointer rounded-lg flex justify-between items-center mb-4">
            <div class="flex items-center space-x-4">
              <!-- Icon -->
              <div class="bg-blue-50 rounded-full">
                <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="44" height="44" rx="22" fill="#F0F5FD"/>
                    <path d="M15.5028 24.4221C15.5254 24.2067 15.6816 24.033 15.9938 23.6857L16.6812 22.9173C16.8492 22.7045 16.9685 22.334 16.9685 22.0005C16.9685 21.6673 16.8492 21.2967 16.6812 21.084L15.9938 20.3155C15.6816 19.9682 15.5254 19.7946 15.5028 19.5791C15.4801 19.3636 15.5968 19.1612 15.83 18.7564L16.1591 18.1853C16.408 17.7534 16.5324 17.5375 16.7441 17.4514C16.9558 17.3653 17.1953 17.4332 17.6742 17.5691L18.4877 17.7982C18.7934 17.8687 19.1142 17.8287 19.3933 17.6853L19.6179 17.5557C19.8573 17.4024 20.0414 17.1763 20.1434 16.9106L20.366 16.2457C20.5124 15.8057 20.5856 15.5857 20.7598 15.4598C20.9341 15.334 21.1656 15.334 21.6284 15.334H22.3716C22.8346 15.334 23.066 15.334 23.2402 15.4598C23.4145 15.5857 23.4877 15.8057 23.6341 16.2457L23.8567 16.9106C23.9586 17.1763 24.1428 17.4024 24.3822 17.5557L24.6068 17.6853C24.8859 17.8287 25.2067 17.8687 25.5124 17.7982L26.3259 17.5691C26.8048 17.4332 27.0442 17.3653 27.256 17.4514C27.4677 17.5375 27.5921 17.7534 27.841 18.1853L28.17 18.7564C28.4033 19.1612 28.5199 19.3636 28.4973 19.5791C28.4746 19.7946 28.3185 19.9682 28.0062 20.3155L27.3188 21.084C27.1509 21.2967 27.0316 21.6673 27.0316 22.0005C27.0316 22.334 27.1508 22.7045 27.3188 22.9173L28.0062 23.6857C28.3185 24.033 28.4746 24.2067 28.4973 24.4221C28.5199 24.6377 28.4033 24.8401 28.17 25.2449L27.841 25.8159C27.5921 26.2478 27.4677 26.4638 27.256 26.5499C27.0442 26.636 26.8048 26.5681 26.3259 26.4321L25.5124 26.203C25.2066 26.1325 24.8858 26.1725 24.6066 26.316L24.3821 26.4456C24.1427 26.5989 23.9586 26.8249 23.8568 27.0907L23.6341 27.7557C23.4877 28.1957 23.4145 28.4157 23.2402 28.5415C23.066 28.6673 22.8346 28.6673 22.3716 28.6673H21.6284C21.1656 28.6673 20.9341 28.6673 20.7598 28.5415C20.5856 28.4157 20.5124 28.1957 20.366 27.7557" stroke="#6A9AEB" stroke-linecap="round"/>
                    <path d="M15.8259 26.5205C16.5459 25.8005 18.9939 23.3765 19.2339 23.0965C19.4877 22.8005 19.2819 22.4005 19.4043 21.1605C19.4636 20.5605 19.5926 20.111 19.9619 19.7765C20.4019 19.3605 20.7619 19.3605 22.0019 19.3325C23.0819 19.3605 23.2099 19.2405 23.3219 19.5205C23.4019 19.7205 23.1619 19.8405 22.8739 20.1605C22.2339 20.8005 21.8579 21.1205 21.8219 21.3205C21.5619 22.2005 22.5859 22.7205 23.1459 22.1605C23.3577 21.9487 24.3379 20.9605 24.4339 20.8805C24.5059 20.8165 24.6783 20.8196 24.7619 20.9205C24.8339 20.9913 24.8419 21.0005 24.8339 21.3205C24.8265 21.6167 24.8298 22.042 24.8307 22.4805C24.8319 23.0487 24.8019 23.6805 24.5619 24.0005C24.0819 24.7205 23.2819 24.7605 22.5619 24.7925C21.8819 24.8325 21.3219 24.7605 21.1459 24.8885C21.0019 24.9605 20.2419 25.7605 19.3219 26.6805L17.6819 28.3205C16.3219 29.4005 14.8259 27.7205 15.8259 26.5205Z" fill="white" stroke="#6A9AEB" stroke-linecap="round"/>
                    </svg>                    
              </div>
              <!-- Service Info -->
              <div class="space-y-1">
                <h3 class="text- font-medium text-[#1D2739]">{{ service.title }}</h3>
                <p class="text-sm text-gray-600 flex items-center">
                    <img :src="dynamicIcons('location')" />
                </p>
              </div>
            </div>
            <div class="text-right space-y-3">
              <!-- Status Badge -->
              <span :class="badgeClass(service.status)" class="px-3 py-1 text-xs font-semibold rounded-full">
                {{ service.status }}
              </span>
              <p class="text-sm text-gray-500">{{ service.date }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { dynamicIcons } from '@/utils/assets';
    const router = useRouter()
  interface Service {
    title: string;
    location: string;
    status: string;
    date: string;
  }
  
  const services: Service[] = [
    { title: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'New request', date: '03/04/2024' },
    { title: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Accepted', date: '03/04/2024' },
    { title: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Upcoming', date: '03/04/2024' },
    { title: 'Plumbing Service', location: 'Flat 12, Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Cancelled', date: '03/04/2024' },
    { title: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Completed', date: '03/04/2024' },
    { title: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Done', date: '03/04/2024' },
    { title: 'Appliance repair', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Cancelled', date: '03/04/2024' },
  ];
  
  const groupedServices = [
    {
      date: '23rd March, 2024',
      services: services.slice(0, 5),
    },
    {
      date: '23rd March, 2024',
      services: services.slice(5),
    },
  ];
  
  const badgeClass = (status: string) => {
    switch (status) {
      case 'New request':
        return 'bg-blue-100 text-blue-800';
      case 'Accepted':
        return 'bg-purple-100 text-purple-800';
      case 'Upcoming':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-gray-100 text-gray-800';
      case 'Completed':
      case 'Done':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  </script>
  
  <style scoped>
  /* Additional custom styles if needed */
  </style>
  