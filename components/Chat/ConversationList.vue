<template>
    <div class="space-y-2">
      <ChatConversationItem
        v-for="(conversation, index) in conversations"
        :key="index"
        :conversation="conversation"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import ConversationItem from '~/components/ConversationItem.vue';
  
  const conversations = ref([
    {
      name: 'John Walton',
      message: "I'm interested in renting a room in the apartment",
      date: '08 Feb',
      status: 'read',
      avatar: 'path/to/avatar.jpg',
    },
    // Add more conversations
  ]);
  </script>
  