<template>
    <div v-if="isVisible" class="modal-backdrop z-50">
      <div class="modal-content">
        <div class="flex justify-center items-center bg-yellow-500 rounded-full w-16 h-16 mx-auto mb-4">
            <svg width="65" height="64" viewBox="0 0 65 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0.921875" width="63.1513" height="64" rx="31.5756" fill="#F3A218"/>
              <path d="M42.2031 32.375C42.2031 26.8521 37.7259 22.375 32.2031 22.375C26.6803 22.375 22.2031 26.8521 22.2031 32.375C22.2031 37.8978 26.6803 42.375 32.2031 42.375C37.7259 42.375 42.2031 37.8978 42.2031 32.375Z" stroke="white" stroke-width="1.5"/>
              <path d="M32.4453 37.375V32.375C32.4453 31.9036 32.4453 31.6679 32.2988 31.5214C32.1524 31.375 31.9167 31.375 31.4453 31.375" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M32.1953 28.377H32.2043" stroke="white" stroke-width="3.25" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
          </div>
          <h2 class="text-lg font-semibold text-center text-gray-700 mb-2">Warning</h2>
          <p class="text-gray-500 mb-6 text-center">Refreshing the page will lead to loss of changes. Do you want to proceed?</p>
        <!-- <div class="modal-actions">
          <button @click="confirm">Yes, Proceed</button>
          <button @click="cancel">Cancel</button>
        </div> -->
        <div class="space-y-3">
            <button
              type="button"
              class="w-full disabled:cursor-not-allowed text-sm disabled:opacity-25 bg-[#292929] text-white py-4 rounded-md font-semibold"
              @click="confirm"
              >
              Yes, Proceed
            </button>
            <button
              type="button"
              class="w-full bg-[#EBE5E0] text-gray-700 text-sm py-4 rounded-md font-semibold"
              @click="cancel"
            >
            Cancel
            </button>
          </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { defineProps, defineEmits } from 'vue'
  
  const props = defineProps({
    isVisible: Boolean
  })
  
  const emit = defineEmits(['confirm', 'cancel'])
  
  const confirm = () => {
    emit('confirm')
  }
  
  const cancel = () => {
    emit('cancel')
  }
  </script>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    max-width: 400px;
    width: 100%;
  }
  
  .modal-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
  }
  
  button {
    padding: 10px 20px;
    cursor: pointer;
  }
  </style>
  