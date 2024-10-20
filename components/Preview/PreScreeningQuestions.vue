<template>
    <div class="bg-white rounded-lg shadow-sm">
      <p class="pb-3">Pre-screening questions</p>
      <form @submit.prevent="submitAnswers">
        <div v-for="(questionObj, index) in questions" :key="index" class="mb-6">
          <label :for="'question-' + index" class="block text-gray-700 text-sm font-medium mb-2">
            {{ questionObj.question }}
          </label>
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
  