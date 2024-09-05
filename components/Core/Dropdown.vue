<template>
    <div class="relative inline-block text-left">
      <div @click="toggleDropdown" class="cursor-pointer">
        <!-- More Button -->
        <slot name="button"></slot>
      </div>
  
      <!-- Overlay -->
      <div v-if="isOpen" class="fixed inset-0 z-10" @click="closeDropdown"></div>
  
      <!-- Dropdown -->
      <transition name="fade">
        <div v-if="isOpen" class="absolute right-0 z-20 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div class="py-1">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  
  const isOpen = ref(false);
  
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };
  
  const closeDropdown = () => {
    isOpen.value = false;
  };
  
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('keydown', handleKeydown);
  });
  
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  };
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  