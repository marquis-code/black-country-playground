<template>
    <div>
      <div>
        <h4 class="font- text-sm text-[#667185]">Define your rules for potential tenants</h4>
        <div class="mt-2 space-y-5">
          <p class="text-[#667185] flex justify-between items-center">Smoking allowed: <spa>{{ rules.smokingAllowed ? 'Yes' : 'No' }}</spa></p>
          <p class="text-[#667185] flex justify-between items-center">Pets allowed: <span>{{ rules.petsAllowed ? 'Yes' : 'No' }}</span></p>
        </div>
      </div>
      <div class="mt-4">
        <h4 class="font-medium">Set pre-screening questions</h4>
        <ul>
          <li v-for="question in rules.preScreeningQuestions" :key="question">{{ question }}</li>
        </ul>
      </div>
      <div class="mt-4">
        <h4 class="font-medium">Assign property to Agent/Property manager</h4>
        <p>{{ rules.agent }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  interface Rules {
    smokingAllowed: boolean
    petsAllowed: boolean
    preScreeningQuestions: string[]
    agent: string
  }
  
  const props = defineProps<{
    rules: Rules
  }>()
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  