<template>
    <div class="flex-1 z-10 overflow-y-auto p-4 space-y-3 bg-white">
      <div class="text-center my-3 text-sm text-gray-400">Today</div>
      <!-- Sort messages by `createdAt` before rendering them -->
      <ChatMessageBubble
        v-for="(msg, index) in sortedRoomChats"
        :key="index"
        :message="msg"
        :isMine="msg.senderId === user.id"
        :status="msg.status"
      />
    </div>
  </template>
  
  <script setup lang="ts">  
  import { useUser } from "@/composables/auth/user";
  const { user } = useUser();
  const props = defineProps({
    messages: Array,
    roomChats: Array
  });
  
  // Sort messages by `createdAt` in ascending order
  const sortedRoomChats = computed(() => {
    return [...props.roomChats].sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
  });
  </script>
  