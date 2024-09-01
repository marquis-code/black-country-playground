<template>
    <div class="space-y-8">
      <div v-for="(group, index) in groupedServices" :key="index">
        <h2 class="text-sm font-medium text-gray-700 mb-4 bg-white rounded-lg px-4 py-3.5">{{ group.date }}</h2>
        <div>
          <TenantServiceCard
            v-for="(service, serviceIndex) in group.services"
            :key="serviceIndex"
            :service="service"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>  
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
    { title: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Completed', date: '03/04/2024' },
    { title: 'Appliance repair', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Cancelled', date: '03/04/2024' },
    { title: 'Plumbing Service', location: 'Iconic Tower, off Ajose Adegun VI, Lagos.', status: 'Declined', date: '03/04/2024' },
  ];
  
  const groupedServices = [
    {
      date: '23rd March, 2024',
      services: services.slice(0, 4),
    },
    {
      date: '23rd March, 2024',
      services: services.slice(4),
    },
  ];
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  