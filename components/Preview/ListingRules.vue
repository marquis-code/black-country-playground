<template>
    <div class="bg-white rounded-lg">
      <h2 class="text font-medium mb-6">Finalize listings and edit</h2>
      <div class="mb-6">
        <h3 class="text font-medium text-gray-600">
          Define your rules for potential tenants
        </h3>
        <div class="mt-4">
          <div v-for="(ruleObj, index) in rules" :key="index" class="flex justify-between py-2">
            <!-- If the rule has options, display it as a select dropdown -->
            <div v-if="ruleObj.options" class="flex-1 mr-4">
              <label class="block text-gray-700 text-sm font-medium mb-1">
                {{ ruleObj.rule }}
              </label>
              <select
                v-model="answers[index]"
                class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option v-for="(option, optIndex) in ruleObj.options" :key="optIndex" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>
            
            <!-- Display custom rules without options -->
            <div v-else class="flex-1">
              <span class="block text-gray-700">{{ ruleObj.rule }}</span>
            </div>
  
            <!-- Display the answer (if available) or placeholder text -->
            <div v-if="ruleObj.answer" class="ml-4 text-gray-900 font-medium">
              {{ ruleObj.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, computed } from 'vue';
  
  interface Rule {
    rule: string;
    options?: string[];
    answer?: string;
  }
  
  // Define props for the component
  const props = defineProps<{
    rules: Rule[] | null; // Allow the possibility that rules might be null
  }>();
  
  // Ensure that `rules` is always treated as an array using a computed property
  const rules = computed(() => {
    return Array.isArray(props.rules) ? props.rules : [];
  });
  
  // Store the selected answers in a reactive array
  const answers = ref(rules.value.map(rule => rule.answer || null));
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  