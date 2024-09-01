<template>
  <main>
    <div class="container mx-auto space-y-2">
      <p class="text-[#1D2739] font-medium text-sm">Can you provide references from previous landlords or property managers?</p>
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="bg-white py-1 relative"
      >
        <!-- Question Title -->
        <p class="text-sm text-[#1D2739] font-medium mt-">Untitled question (click to edit)</p>

        <!-- Question Type Selector -->
        <div id="dropdown" class="relative cursor-pointer border-[0.5px] rounded-lg w-full bg-[#F0F2F5] mt-2">
          <select v-model="questions[index].type" class="w-full text-sm py-3 bg-[#F0F2F5] font-medium border-[#E4E7EC] outline-none px-2">
            <option value="short">Short response</option>
            <option value="long">Long response</option>
            <option value="dropdown-single">Dropdown (single select)</option>
            <option value="dropdown-multi">Dropdown (multi-select)</option>
          </select>
        </div>

        <!-- Short Response -->
        <div v-if="question.type === 'short'" class="relative mt-4">
          <input
            v-model="questions[index].placeholder"
            placeholder="Short response goes here"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
          />
        </div>

        <!-- Long Response -->
        <div v-else-if="question.type === 'long'" class="relative mt-4">
          <textarea
            v-model="questions[index].placeholder"
            placeholder="Long response goes here"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
            rows="4"
          ></textarea>
        </div>

        <!-- Dropdown (Single select) -->
        <div v-else-if="question.type === 'dropdown-single'" class="relative mt-4">
          <div
            v-for="(option, optIndex) in question.options"
            :key="optIndex"
            class="mt-2 flex items-center"
          >
            <input
              :value="option"
              @input="updateOption(index, optIndex, $event.target.value)"
              placeholder="Option"
              class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
            />
          </div>
          <button @click="addOption(index)" class="text-[#1D2739] flex items-center gap-x-2 border-[0.5px] px-3 py-2 rounded-md text-sm">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2V10" stroke="#1D2739" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 6H10" stroke="#1D2739" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>  Add option
          </button>
        </div>

        <!-- Dropdown (Multi-select) -->
        <div v-else-if="question.type === 'dropdown-multi'" class="relative mt-4">
          <div
            v-for="(option, optIndex) in question.options"
            :key="optIndex"
            class="mt-2 flex items-center"
          >
            <input
              :value="option"
              @input="updateOption(index, optIndex, $event.target.value)"
              placeholder="Option"
              class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] p-2 border-[#E4E7EC] rounded-md"
            />
          </div>
          <button @click="addOption(index)" class="text-[#1D2739] flex items-center gap-x-2 border-[0.5px] px-3 py-2 rounded-md text-sm">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 2V10" stroke="#1D2739" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M2 6H10" stroke="#1D2739" stroke-linecap="round" stroke-linejoin="round"/>
            </svg> Add option
          </button>
        </div>
      </div>

      <!-- Button to Add New Question -->
      <button @click="addQuestion" class="text-[#1D2739] flex items-center gap-x-2 border-[0.5px] px-3 py-2 rounded-md text-sm mt-4">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 2V10" stroke="#1D2739" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2 6H10" stroke="#1D2739" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        Add question
      </button>
    </div>

    <slot name="action-buttons"></slot>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Question {
  title: string;
  type: string;
  placeholder: string;
  options: string[];
}

const questions = ref<Question[]>([
  { title: '', type: 'short', placeholder: 'Short response goes here', options: [] },
]);

function addQuestion() {
  questions.value.push({ title: '', type: 'short', placeholder: 'Short response goes here', options: [] });
}

function addOption(index: number) {
  questions.value[index].options.push('');
}

function updateOption(questionIndex: number, optionIndex: number, value: string) {
  questions.value[questionIndex].options[optionIndex] = value;
}
</script>
