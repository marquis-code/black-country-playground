<!-- components/Modal.vue -->
<template>
    <transition name="modal">
      <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div class="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
          <div class="flex justify-between items-center mb-4">
            <h3 class="text-xl font-semibold">{{ title }}</h3>
            <button @click="closeModal" class="text-gray-500 hover:text-gray-700">
              <XIcon class="w-6 h-6" />
            </button>
          </div>
          <div>
            <slot />
          </div>
        </div>
      </div>
    </transition>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  import { XIcon } from '@heroicons/vue/solid';
  
  const props = defineProps({
    isOpen: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      default: 'Modal Title',
    },
  });
  
  const emits = defineEmits(['close']);
  
  function closeModal() {
    emits('close');
  }
  </script>
  
  <style scoped>
  .modal-enter-active, .modal-leave-active {
    transition: opacity 0.3s ease;
  }
  .modal-enter-from, .modal-leave-to {
    opacity: 0;
  }
  </style>
  