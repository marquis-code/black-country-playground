<template>
  <div class="min-h-screen  flex items-center justify-center">
    <div class="max-w-xl w-full  p-8">
      <!-- Notification Header -->
      <h2 class="text-lg font-medium text-[#171717] mb-6">Notification</h2>

      <!-- Email Notification Section -->
      <div class="">
        <div class="flex justify-between items-center mb-4 bg-white rounded-lg px-5 py-4">
          <span class="font text-sm text-[#1D2739]">Email Notification</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
        </div>

        <!-- Notifications List -->
        <div class="bg-white rounded-lg p-5 space-y-5">
          <CoreNotificationToggle label="New Property Listing Created" />
          <CoreNotificationToggle label="Property Listing Updated" />
          <CoreNotificationToggle label="New Visitation Scheduled" />
          <CoreNotificationToggle label="Visitation Reminder" />
          <CoreNotificationToggle label="Visitation Feedback Request" />
          <CoreNotificationToggle label="New Tenant Application" />
          <CoreNotificationToggle label="New Maintenance Request" />
          <CoreNotificationToggle label="New User registered" />
          <CoreNotificationToggle label="User activity" />
          <CoreNotificationToggle label="New Message" />
        </div>
      </div>

      <!-- Push/In-app Notification Section -->
      <div class="mt-6">
        <div class="flex justify-between items-center mb-4 bg-white rounded-lg px-5 py-4">
          <span class="font text-sm text-[#1D2739]">Push/In-app Notification</span>
          <label class="switch">
            <input type="checkbox" checked />
            <span class="slider round"></span>
          </label>
        </div>

        <!-- Notifications List -->
        <div class="bg-white rounded-lg p-5 space-y-5">
          <CoreNotificationToggle label="New Property Listing Created" checked />
          <CoreNotificationToggle label="Property Listing Updated" checked />
          <CoreNotificationToggle label="New Visitation Scheduled" checked />
          <CoreNotificationToggle label="Visitation Reminder" checked />
          <CoreNotificationToggle label="Visitation Feedback Request" checked />
          <CoreNotificationToggle label="New Tenant Application" checked />
          <CoreNotificationToggle label="New Maintenance Request" checked />
          <CoreNotificationToggle label="New User registered" checked />
          <CoreNotificationToggle label="User activity" checked />
          <CoreNotificationToggle label="New Message" checked />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
     layout: 'dashboard'
})
// Nothing here for now, but you can add your logic if needed
</script>

<style scoped>
/* Toggle Switch CSS */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #4caf50;
}

input:checked + .slider:before {
  transform: translateX(20px);
}

/* General Styling */
body {
  @apply bg-gray-50;
}
</style>
