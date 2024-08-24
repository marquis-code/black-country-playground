<template>
    <div class="w-full">
      <div class="relative inline-block text-left w-full">
        <div>
          <button
            type="button"
            class="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-3 text-sm font-semibold text-gray-900 border border-gray-50 hover:bg-gray-50"
            @click="toggleDropdown"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {{ selectedOption }}
            <svg
              class="-mr-1 h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
  
        <div
          v-if="isOpen"
          class="absolute w-full right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="py-1" role="none">
            <a
              href="#"
              v-for="(option, index) in options"
              :key="index"
              @click.prevent="selectOption(option)"
              class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              role="menuitem"
              tabindex="-1"
            >
              {{ option }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits, defineProps, watch } from 'vue'
  
  // Define props
  const props = defineProps({
    options: {
      type: Array as () => string[],
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    }
  })
  
  // Define emits
  const emit = defineEmits(['update:modelValue'])
  
  // Reactive variables
  const isOpen = ref(false)
  const selectedOption = ref(props.modelValue)
  
  // Watch the modelValue prop to update the selectedOption if it changes externally
  watch(() => props.modelValue, (newValue) => {
    selectedOption.value = newValue
  })
  
  // Function to toggle the dropdown
  const toggleDropdown = () => {
    isOpen.value = !isOpen.value
  }
  
  // Function to select an option and close the dropdown
  const selectOption = (option: string) => {
    selectedOption.value = option
    isOpen.value = false
    emit('update:modelValue', option)
  }
  </script>
  
  <style scoped></style>
  