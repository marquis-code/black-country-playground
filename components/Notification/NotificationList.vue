<template>
    <div class="max-w-xl mx-auto py-4">
      <div class="bg-gray-100 rounded-lg shadow-sm p-4" v-if="notifications.length === 0">
        <p class="text-center text-gray-500">No notifications found</p>
      </div>
      <div v-else>
        <div v-for="group in groupedNotifications" :key="group.date" class="my-6">
          <div class="text-gray-600 font-semibold mb-2">{{ group.date }}</div>
          <div v-for="notification in group.notifications" :key="notification.id" class="flex items-center p-4 mb-2 bg-white rounded-lg shadow-sm">
            <div :class="`w-12 h-12 flex items-center justify-center rounded-full ${notification.iconBgColor}`">
              <span :class="`text-white text-lg`">{{ notification.icon }}</span>
            </div>
            <div class="ml-4 flex-1">
              <div class="text-gray-800 font-semibold">{{ notification.title }}</div>
              <div class="text-gray-600">{{ notification.description }}</div>
            </div>
            <div class="text-gray-500">{{ notification.date }}</div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  interface Notification {
    id: number
    title: string
    description: string
    date: string
    icon: string
    iconBgColor: string
  }
  
  const notifications = ref<Notification[]>([
    {
      id: 1,
      title: 'New Property Listing Created',
      description: 'A new property, {Property Name}, has been listed by {Property Manager}.',
      date: '25th March, 2024',
      icon: '🏠',
      iconBgColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Property Listing Updated',
      description: 'The listing for {Property Name} has been updated by {Property Manager}.',
      date: '25th March, 2024',
      icon: '✏️',
      iconBgColor: 'bg-yellow-500',
    },
    // Add more notifications as needed
  ])
  
  const groupedNotifications = computed(() => {
    return notifications.value.reduce((groups, notification) => {
      const date = notification.date
      if (!groups[date]) {
        groups[date] = []
      }
      groups[date].push(notification)
      return groups
    }, {} as Record<string, Notification[]>)
  })
  </script>
  
  <style scoped>
  /* Add any custom styles here */
  </style>
  