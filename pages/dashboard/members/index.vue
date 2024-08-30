<!-- pages/index.vue -->
<template>
    <div>
      <MembersMembersList />
      <div>
        <button @click="showModal = true" class="bg-blue-500 text-white px-4 py-2 rounded">Open Modal</button>
        <CoreModal :isOpen="showModal" title="Example Modal" @close="showModal = false">
          <p>This is the content inside the modal.</p>
        </CoreModal>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import MembersList from '@/components/MembersList.vue';
    
  const showModal = ref(false);
  </script>