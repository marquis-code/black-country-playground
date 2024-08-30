<!-- layouts/default.vue -->
<template>
    <div class="flex h-screen bg-gray-100">
      <MembersSidebar />
      <div class="flex-1 flex flex-col">
        <slot />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Sidebar from '@/components/Sidebar.vue';
  </script>
  