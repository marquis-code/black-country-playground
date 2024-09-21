<template>
    <div class="p-8 bg-white rounded-lg shadow-sm max-w-lg mx-auto">
      <form @submit.prevent="submitAnswers">
        <div v-for="(questionObj, index) in questions" :key="index" class="mb-6">
          <label :for="'question-' + index" class="block text-gray-700 text-sm font-medium mb-2">
            {{ questionObj.question }}
          </label>
  
          <!-- Render Input Field -->
          <input
            v-if="questionObj.widgetType === 'input'"
            v-model="answers[index]"
            :type="questionObj.metadata?.responseType === 'long-response' ? 'text' : 'text'"
            :placeholder="questionObj.question"
            :id="'question-' + index"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
          />
  
          <!-- Render Select Dropdown -->
          <select
            v-else-if="questionObj.widgetType === 'select'"
            v-model="answers[index]"
            :id="'question-' + index"
            class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="" disabled>Select an option</option>
            <option
              v-for="(option, optIndex) in questionObj.widgetOptions"
              :key="optIndex"
              :value="option"
            >
              {{ option }}
            </option>
          </select>
        </div>
  
        <!-- Submit Button -->
        <div class="mt-6">
          <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, computed } from 'vue';
  
  interface Question {
    question: string;
    widgetType: string;
    widgetOptions?: string[] | null;
    metadata?: Record<string, any> | null;
  }
  
  // Define props for the component
  const props = defineProps<{
    questions: Question[] | null; // Allow for the possibility that questions might be null
  }>();
  
  // Ensure that `questions` is always treated as an array using a computed property
  const questions = computed(() => {
    return Array.isArray(props.questions) ? props.questions : [];
  });
  
  // Store answers in a reactive array based on the number of questions
  const answers = ref<(string | null)[]>(questions.value.map(() => null));
  
  // Function to handle form submission
  const submitAnswers = () => {
    // You can handle the submission logic here
    console.log("User Answers:", answers.value);
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  