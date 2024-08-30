<template>
    <div class="flex justify-between items-center">
      <span class="text-gray-800 font-medium">{{ label }}</span>
      <label class="switch">
        <input type="checkbox" v-model="isChecked" @change="emitChange" />
        <span class="slider round"></span>
      </label>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits, ref } from 'vue';
  
  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  });
  
  const emits = defineEmits(['update:checked']);
  
  const isChecked = ref(props.checked);
  
  const emitChange = () => {
    emits('update:checked', isChecked.value);
  };
  </script>
  
  <style scoped>
  .switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
  }
  
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;
    border-radius: 34px;
  }
  
  .slider:before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
  
  input:checked + .slider {
    background-color: #4caf50;
  }
  
  input:checked + .slider:before {
    transform: translateX(20px);
  }
  </style>
  