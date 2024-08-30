<template>
    <div class="flex flex-col h-full">
      <div class="flex items-center p-3 bg-white shadow-md">
        <button class="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <h3 class="text-lg font-semibold">{{ conversation.name }}</h3>
      </div>
      <div class="flex-1 overflow-y-auto p-3 space-y-4">
        <ChatMessageItem
          v-for="(message, index) in messages"
          :key="index"
          :message="message"
          :isSender="message.sender === 'me'"
        />
      </div>
      <div class="flex items-center p-3 border-t">
        <input
          type="text"
          placeholder="Type a message here..."
          class="flex-1 bg-gray-100 rounded-lg p-2 focus:outline-none"
        />
        <button class="ml-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v18m9-9H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import MessageItem from '~/components/MessageItem.vue';
  
  const conversation = {
    name: 'John Walton',
  };
  
  const messages = [
    {
      text: 'I came across your listing and was impressed by the features...',
      sender: 'me',
      time: '18:16',
      date: '15 April 2024',
    },
    {
      text: 'Thank you for reaching out and expressing interest...',
      sender: 'other',
      time: '18:12',
    },
    // Add more messages
  ];
  </script>
  