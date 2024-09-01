<template>
<main class="min-h-screen">
  <div class="max-w-2xl mx-auto mt-10 bg-white rounded-lg shadow-sm">
    <!-- Header -->
    <div class="flex items-center p-4 border-b border-gray-200">
      <button @click="goBack" class="mr-4">
        <svg
          class="h-6 w-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="John Walton" class="h-10 w-10 rounded-full object-cover mr-3" />
      <p class="font-semibold text-gray-900">John Walton</p>
      <button class="ml-auto">
        <svg
          class="h-6 w-6 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v1m6.364-1.364a9 9 0 11-12.728 0M15 19a9 9 0 100-14.732"
          />
        </svg>
      </button>
    </div>

    <!-- Chat messages -->
    <div class="p-6 space-y-4 overflow-y-auto h-[500px]">
      <div class="relative flex items-center justify-center">
        <div class="absolute inset-0 flex items-center">
          <div class="border-t w-full border-gray-200"></div>
        </div>
        <div class="relative px-1 bg-white">
          <span class="text-xs text-[#1D2739] px-3 py-1.5 bg-gray-100 rounded-full">15 April 2024</span>
        </div>
      </div>

      <div class="flex justify-end">
        <div class="bg-green-100 text-green-900 rounded-lg p-4 max-w-xs">
          <p class="text-sm">I came across your listing and was impressed by the features and amenities offered. I am very interested in learning more about the property and potentially scheduling a viewing.</p>
          <p class="text-right text-sm text-gray-500 mt-2">18:16 <svg class="inline-block h-4 w-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg></p>
        </div>
      </div>

      <div class="relative flex items-center justify-center">
        <div class="absolute inset-0 flex items-center">
          <div class="border-t w-full border-gray-200"></div>
        </div>
        <div class="relative px-1 bg-white">
          <span class="text-xs text-[#1D2739] px-3 py-1.5 bg-gray-100 rounded-full">Today</span>
        </div>
      </div>

      <div class="flex justify-start">
        <div class="bg-gray-100 text-gray-900 rounded-lg p-4 max-w-xs">
          <p class="text-sm">Thank you for reaching out and expressing interest in [Property Description]. We appreciate your inquiry.</p>
          <p class="text-right text-sm text-gray-500 mt-2">18:12</p>
        </div>
      </div>

      <div class="flex justify-start">
        <div class="bg-gray-100 text-gray-900 rounded-lg p-4 max-w-xs">
          <p class="text-sm">The property is indeed available for rent, and we would be happy to provide you with more information and a different schedule from what is already in the listing page.</p>
          <p class="text-right text-sm text-gray-500 mt-2">18:12</p>
        </div>
      </div>

      <div v-for="(message, index) in messages" :key="index" class="flex" :class="message.sentByUser ? 'justify-end' : 'justify-start'">
        <div :class="message.sentByUser ? 'bg-green-100 text-green-900' : 'bg-gray-100 text-gray-900' " class="rounded-lg p-4 max-w-xs">
          <p>{{ message.text }}</p>
          <p class="text-right text-sm text-gray-500 mt-2">{{ message.time }} <svg v-if="message.sentByUser" class="inline-block h-4 w-4 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg></p>
        </div>
      </div>
    </div>

    <!-- Message input -->
    <div class="p-4 border-t border-gray-200 flex items-center">
      <input
        v-model="newMessage"
        type="text"
        placeholder="Type a message here..."
        class="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
        @keyup.enter="sendMessage"
      />
      <button @click="sendMessage" class="ml-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <svg class="h-6 w-6 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10l9-9m0 0l9 9m-9-9v12" />
        </svg>
      </button>
    </div>
  </div>
</main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const router  = useRouter()
  definePageMeta({
     layout: 'dashboard'
})

// Dummy data for chat messages
const messages = ref([
  {
    text: 'Could you please provide me a different availability date for viewing the property.',
    time: '18:16',
    sentByUser: true,
  },
  {
    text: 'Thank you for your time and assistance. I look forward to hearing from you soon.',
    time: '18:16',
    sentByUser: true,
  }
]);

const newMessage = ref('');

const sendMessage = () => {
  if (newMessage.value.trim()) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add user's message to the chat
    messages.value.push({
      text: newMessage.value,
      time: time,
      sentByUser: true,
    });

    // Clear the input field
    newMessage.value = '';

    // Simulate a bot response
    setTimeout(() => {
      messages.value.push({
        text: 'Thank you for reaching out. We will get back to you shortly.',
        time: time,
        sentByUser: false,
      });
    }, 1000);
  }
};

const goBack = () => {
  // Handle back navigation
  console.log('Back button clicked');
};
</script>

<style>
/* Optional: Custom styles if necessary */
</style>
