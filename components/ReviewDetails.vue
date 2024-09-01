<template>
<main>
    <div class="container mx-auto py-6 space-y-6">
        <!-- Toggle Buttons -->
        <div class="flex space-y-4 flex-col">
          <div class="flex items-center justify-between space-x-4">
            <span class="font-light text-[#1D2739]">Smoking allowed</span>
            <div class="flex gap-x-4">
              <button
                @click="toggleSmoking(true)"
                :class="smokingAllowed ? activeClass : inactiveClass"
                class="px-6 py-2 text-[#1D2739] font-medium rounded-md text-sm border border-gray-300"
              >
                Yes
              </button>
              <button
                @click="toggleSmoking(false)"
                :class="!smokingAllowed ? activeClass : inactiveClass"
                class="px-6 py-2 text-[#1D2739] font-medium rounded-md text-sm border border-gray-300"
              >
                No
              </button>
            </div>
          </div>
    
          <div class="flex items-center justify-between space-x-4">
            <span class="font-light text-[#1D2739]">Pets allowed</span>
            <div class="flex gap-x-4">
              <button
                @click="togglePets(true)"
                :class="petsAllowed ? activeClass : inactiveClass"
                class="px-6 py-2 text-[#1D2739] font-medium rounded-md text-sm border border-gray-300"
              >
                Yes
              </button>
              <button
                @click="togglePets(false)"
                :class="!petsAllowed ? activeClass : inactiveClass"
                class="px-6 py-2 text-[#1D2739] font-medium rounded-md text-sm border border-gray-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
    
        <!-- Custom Rule Input -->
        <div>
          <h3 class="text-sm font-medium mb-2">Custom rule</h3>
          <input
            v-model="newRule"
            placeholder="Enter custom rule"
            class="w-full p-3 border-[0.5px] bg-[#F0F2F5] border-gray-300 outline-none text-sm rounded-md"
          />
          <button @click="addRule" class="mt-4 text-[#1D2739] font-medium bg-[#F0F2F5] border py-2.5 flex justify-between items-center gap-x-3 text-sm px-3 rounded-lg">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2V10" stroke="#1D2739" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 6H10" stroke="#1D2739" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
            Add rule</button>
        </div>
    
        <!-- Custom Rules List -->
        <div v-if="rules.length > 0">
          <div class="space-y-4">
            <div
              v-for="(rule, index) in rules"
              :key="index"
              class="flex items-start space-x-2 p-4 bg-white border border-[#E4E7EC] rounded-md"
            >
              <div class="mt-1">
                <span class="block w-3 h-3 bg-black rounded-md"></span>
              </div>
              <p class="text-[#1D2739]">{{ rule }}</p>
            </div>
          </div>
        </div>
      </div>
      <slot name="action-buttons"></slot>
</main>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  // States for toggle buttons
  const smokingAllowed = ref(false)
  const petsAllowed = ref(false)
  
  // State for new rule input
  const newRule = ref<string>('')
  
  // States for custom rules list
  const rules = ref<string[]>([])
  
  // Toggle functions
  function toggleSmoking(allowed: boolean) {
    smokingAllowed.value = allowed
  }
  
  function togglePets(allowed: boolean) {
    petsAllowed.value = allowed
  }
  
  // Function to add a new rule
  function addRule() {
    if (newRule.value.trim()) {
      rules.value.push(newRule.value.trim())
      newRule.value = ''
    }
  }
  
  // Tailwind CSS classes
  const activeClass = 'bg-black text-white'
  const inactiveClass = 'bg-white text-black'
  </script>
  
  <style scoped>
  /* Additional styles can be added if needed */
  </style>
  