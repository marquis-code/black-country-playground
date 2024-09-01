<template>
    <div class="p-4 bg-white rounded-lg flex justify-between items-center space-x-4 mb-4">
      <div class="flex items-center space-x-4">
        <!-- Icon -->
        <div class="bg-blue-50 rounded-full">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="44" height="44" rx="22" fill="#F0F5FD"/>
                <path d="M24.9154 19.083C25.0586 19.1039 25.1977 19.1301 25.332 19.1611C25.5784 19.218 25.7015 19.2465 25.8491 19.3642C25.9333 19.4314 26.0384 19.5643 26.0845 19.6621C26.1654 19.8334 26.1654 19.9996 26.1654 20.3319V24.858C26.1654 25.2718 25.732 25.556 25.332 25.4636C24.9488 25.3751 24.5262 25.326 24.082 25.326C23.2832 25.326 22.5539 25.4847 21.9987 25.7462C21.4435 26.0077 20.7141 26.1663 19.9154 26.1663C19.4712 26.1663 19.0486 26.1173 18.6654 26.0288C18.419 25.9719 18.2959 25.9434 18.1483 25.8257C18.0641 25.7585 17.959 25.6256 17.9129 25.5278C17.832 25.3565 17.832 25.1903 17.832 24.858V20.3319C17.832 19.9181 18.2654 19.6339 18.6654 19.7263C18.7997 19.7573 18.9388 19.7835 19.082 19.8044" stroke="#6A9AEB" stroke-linecap="round"/>
                <path d="M23.0404 22.6247C23.0404 23.2 22.574 23.6663 21.9987 23.6663C21.4234 23.6663 20.957 23.2 20.957 22.6247C20.957 22.0494 21.4234 21.583 21.9987 21.583C22.574 21.583 23.0404 22.0494 23.0404 22.6247Z" fill="white" stroke="#6A9AEB"/>
                <path d="M19.293 23.042V23.0457" stroke="#6A9AEB" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M24.707 22.2051V22.2088" stroke="#6A9AEB" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21.9987 17.833V19.4997M20.332 19.083V19.9163M23.6654 18.2497V19.083" stroke="#6A9AEB" stroke-linecap="round"/>
                </svg>                
        </div>
        <div class="space-y-1">
          <h3 class="text- font-medium text-[#1D2739]">{{ service.title }}</h3>
          <p class="text-sm text-gray-600">
            <img :src="dynamicIcons('location')" />
          </p>
        </div>
      </div>
      <div class="text-right space-y-3">
        <span
          :class="badgeClass(service.status)"
          class="px-3 py-1.5 text-xs font-semibold rounded-full">
          {{ service.status }}
        </span>
        <p class="text-sm text-gray-500">{{ service.date }}</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { dynamicIcons } from '@/utils/assets';
  interface Service {
    title: string;
    location: string;
    status: string;
    date: string;
  }
  
  const badgeClass = (status: string) => {
    switch (status) {
      case 'New request':
        return 'bg-blue-100 text-blue-800';
      case 'Accepted':
        return 'bg-purple-100 text-purple-800';
      case 'Upcoming':
        return 'bg-yellow-100 text-yellow-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Cancelled':
        return 'bg-gray-100 text-gray-800';
      case 'Declined':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  const service: Service = {
    title: 'Plumbing Service',
    location: 'Iconic Tower, off Ajose Adegun VI, Lagos.',
    status: 'New request',
    date: '03/04/2024',
  };
  </script>
  
  <style scoped>
  /* Add any additional styling here */
  </style>
  