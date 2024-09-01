<template>
<main class="min-h-screen">
  <div class="max-w-2xl mx-auto mt-10 p-4">
    <div class="relative mb-6">
      <input
        type="text"
        placeholder="Search"
        class="w-full p-3 pl-12 bg-[#EAEAEA] text-sm rounded-lg text-gray-700 outline-none"
      />
      <svg class="absolute top-3 left-5" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.668 12.166L14.668 15.166" stroke="#667185" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M13.332 7.83398C13.332 4.52028 10.6458 1.83398 7.33203 1.83398C4.01832 1.83398 1.33203 4.52028 1.33203 7.83398C1.33203 11.1477 4.01832 13.834 7.33203 13.834C10.6458 13.834 13.332 11.1477 13.332 7.83398Z" stroke="#667185" stroke-width="1.5" stroke-linejoin="round"/>
        </svg>
    </div>
    <div class="space-y-6">
      <div class="" v-for="(group, index) in groupedNotifications" :key="index">
        <p class="text-[#1D2739] mb-4 rounded-md px-6 py-3 bg-white text-sm">{{ group.date }}</p>
        <div class="bg-white rounded-xl">
          <div v-for="(notification, i) in group.notifications" :key="i" @click="router.push(`/dashboard/notification/${i}`)" class="bg-white border-b cursor-pointer last:border-b-0 border-gray-50  p-4 flex items-start justify-between">
            <div class="flex items-start">
              <div class="h-10 w-10 rounded-full flex items-center justify-center">
                <img :src="dynamicIcons(notification.iconPath)" />
              </div>
              <div class="ml-4">
                <p class="font-medium text-[#1D2739] text-sm">{{ notification.title }}</p>
                <p class="text-gray-500 text-xs max-w-lg">{{ notification.description }}</p>
              </div>
            </div>
            <div class="text-xs text-gray-500">{{ notification.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
</template>

<script lang="ts" setup>
const router = useRouter()
import { dynamicIcons } from "@/utils/assets";
definePageMeta({
  layout: "dashboard",
});
const groupedNotifications = ref([
  {
    date: "25th March, 2024",
    notifications: [
      {
        title: "New Property Listing Created",
        description: "A new property, {Property Name}, has been listed by {Property Manager}.",
        time: "08 Feb",
        bgColor: "indigo-100",
        iconColor: "indigo-500",
        iconPath: "notification",
      },
      {
        title: "Property Listing Updated",
        description: "The listing for {Property Name} has been updated by {Property Manager}.",
        time: "08 Feb",
        bgColor: "yellow-100",
        iconColor: "yellow-500",
        iconPath: "bell",
      },
      {
        title: "Tenant Move-Out",
        description: "{Tenant Name} has moved out of {Property Name}. Conduct a final inspection.",
        time: "08 Feb",
        bgColor: "yellow-100",
        iconColor: "yellow-500",
        iconPath: "config",
      },
    ],
  },
  {
    date: "23rd March, 2024",
    notifications: [
      {
        title: "New Tenant Application Submitted",
        description: "A new rental application has been submitted by {Tenant Name} for {Property Name}.",
        time: "08 Feb",
        bgColor: "indigo-100",
        iconColor: "indigo-500",
        iconPath: "notification",
      },
    ],
  },
  {
    date: "2nd February, 2024",
    notifications: [
      {
        title: "Lease Agreement Signed",
        description: "{Tenant Name} has signed a lease agreement for {Property Name}. Ensure all documents are signed.",
        time: "08 Feb",
        bgColor: "yellow-100",
        iconColor: "yellow-500",
        iconPath: "config",
      },
      {
        title: "Tenant Move-In",
        description: "{Tenant Name} has moved into {Property Name}. Confirm the move-in process is complete.",
        time: "08 Feb",
        bgColor: "yellow-100",
        iconColor: "yellow-500",
        iconPath: "config",
      },
      {
        title: "New Maintenance Request",
        description: "A new maintenance request has been submitted for {Property Name}.",
        time: "08 Feb",
        bgColor: "indigo-100",
        iconColor: "indigo-500",
        iconPath: "config",
      },
    ],
  },
])
</script>
