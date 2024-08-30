<template>
    <div
      :class="[
        'flex',
        isSender ? 'justify-end' : 'justify-start',
        'space-x-2',
      ]"
    >
      <div
        :class="[
          'p-3 rounded-lg',
          isSender ? 'bg-green-100' : 'bg-gray-100',
        ]"
      >
        <p class="text-sm">{{ message.text }}</p>
        <span class="text-xs text-gray-500">{{ message.time }}</span>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  defineProps({
    message: {
      type: Object,
      required: true,
    },
    isSender: {
      type: Boolean,
      required: true,
    },
  });
  </script>
  