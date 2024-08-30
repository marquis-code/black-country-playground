<template>
    <div
      class="flex items-center justify-between p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
    >
      <div class="flex items-center">
        <img
          :src="conversation.avatar"
          alt="avatar"
          class="w-10 h-10 rounded-full"
        />
        <div class="ml-3">
          <h3 class="text-sm font-semibold">{{ conversation.name }}</h3>
          <p class="text-xs text-gray-500">{{ conversation.message }}</p>
        </div>
      </div>
      <div class="text-xs text-gray-500">
        <span>{{ conversation.date }}</span>
        <span
          v-if="conversation.status === 'unread'"
          class="block w-2 h-2 bg-green-500 rounded-full"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    conversation: {
      type: Object,
      required: true,
    },
  });
  </script>
  