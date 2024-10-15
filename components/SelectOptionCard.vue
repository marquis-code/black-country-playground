<template>
    <div
      :class="[
        'flex flex-col items-center justify-center p-4  rounded-lg cursor-pointer transition-all duration-300',
        isSelected ? 'border-green-600 border-2' : 'border-[0.5px] border-gray-700'
      ]"
      @click="selectOption"
    >
      <img :src="dynamicImage(image)" alt="option image" class="w-44 h-44 mb-4" />
      <h3 class="text-base font-medium text-[#171717] text-center">{{ title }}</h3>
      <p class="text-sm text-center text-[#667185]">{{ description }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { dynamicImage } from '@/utils/assets'
  const props = defineProps({
    image: String,
    title: String,
    description: String,
    value: String,
    selectedValue: String
  });
  
  const emit = defineEmits(['select']);
  const isSelected = computed(() => props.value === props.selectedValue);
  
  const selectOption = () => {
    emit('select', props.value);
  };
  </script>
  
  <style scoped>
  /* Hover effect */
  div:hover {
    border-color: rgba(72, 187, 120, 0.5); /* Light green on hover */
  }
  </style>
  