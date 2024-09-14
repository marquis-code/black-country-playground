<!-- <template>
  <main>
    <div class="container mx-auto space-y-2">
      <p class="text-[#1D2739] font-medium text-sm">Can you provide references from previous landlords or property managers?</p>
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="bg-white py-1 relative"
      >
        <p class="text-sm text-[#1D2739] font-medium mt-">Untitled question (click to edit)</p>
        <div id="dropdown" class="relative cursor-pointer border-[0.5px] rounded-lg w-full bg-[#F0F2F5] mt-2">
          <select v-model="questions[index].type" class="w-full text-sm py-3 bg-[#F0F2F5] font-medium border-[#E4E7EC] outline-none px-2">
            <option value="short">Short response</option>
            <option value="long">Long response</option>
            <option value="dropdown-single">Dropdown (single select)</option>
            <option value="dropdown-multi">Dropdown (multi-select)</option>
          </select>
        </div>
        <div v-if="question.type === 'short'" class="relative mt-4">
          <input
            v-model="questions[index].placeholder"
            placeholder="Short response goes here"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
          />
        </div>
        <div v-else-if="question.type === 'long'" class="relative mt-4">
          <textarea
            v-model="questions[index].placeholder"
            placeholder="Long response goes here"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
            rows="4"
          ></textarea>
        </div>
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
</script> -->


<!-- <template>
  <main>
    <div class="container mx-auto space-y-2">
      <p class="text-[#1D2739] font-medium text-sm">Can you provide references from previous landlords or property managers?</p>
      <div
        v-for="(question, index) in questions"
        :key="index"
        class="bg-white py-1 relative"
      >

        <p class="text-sm text-[#1D2739] font-medium">Untitled question (click to edit)</p>


        <div id="dropdown" class="relative cursor-pointer border-[0.5px] rounded-lg w-full bg-[#F0F2F5] mt-2">
          <select v-model="question.widgetType" class="w-full text-sm py-3 bg-[#F0F2F5] font-medium border-[#E4E7EC] outline-none px-2">
            <option value="short">Short response</option>
            <option value="long">Long response</option>
            <option value="select">Dropdown (single select)</option>
          </select>
        </div>


        <div v-if="question.widgetType === 'short'" class="relative mt-4">
          <input
            v-model="question.question"
            placeholder="Short response goes here"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
          />
        </div>


        <div v-else-if="question.widgetType === 'long'" class="relative mt-4">
          <textarea
            v-model="question.question"
            placeholder="Long response goes here"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
            rows="4"
          ></textarea>
        </div>


        <div v-else-if="question.widgetType === 'select'" class="relative mt-4">
          <div
            v-for="(option, optIndex) in question.widgetOptions"
            :key="optIndex"
            class="mt-2 flex items-center"
          >
            <input
              v-model="question.widgetOptions[optIndex]"
              placeholder="Option"
              class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
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
import { ref, watch } from 'vue';

interface Question {
  question: string;
  widgetType: string;
  widgetOptions: string[] | null;
  metadata: any;
}

const emit = defineEmits<{
  (event: 'updateQuestions', questions: Question[]): void;
}>();

const questions = ref<Question[]>([
  { question: '', widgetType: 'short', widgetOptions: null, metadata: {} },
]);

// Watch questions and emit to parent component whenever they change
watch(questions, (newQuestions) => {
  emit('updateQuestions', newQuestions);
}, { deep: true });

function addQuestion() {
  questions.value.push({ question: '', widgetType: 'short', widgetOptions: null, metadata: {} });
}

function addOption(index: number) {
  if (!questions.value[index].widgetOptions) {
    questions.value[index].widgetOptions = [];
  }
  questions.value[index].widgetOptions.push('');
}
</script> -->

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
        <p class="text-sm text-[#1D2739] font-medium">Untitled question (click to edit)</p>

        <!-- Question Type Selector -->
        <div id="dropdown" class="relative cursor-pointer border-[0.5px] rounded-lg w-full bg-[#F0F2F5] mt-2">
          <select v-model="question.widgetType" class="w-full text-sm py-3 bg-[#F0F2F5] font-medium border-[#E4E7EC] outline-none px-2">
            <option value="input">Short response</option>
            <option value="long-response">Long response</option>
            <option value="select">Dropdown (single select)</option>
          </select>
        </div>

        <!-- Short Response -->
        <div v-if="question.widgetType === 'input'" class="relative mt-4">
          <input
            v-model="question.question"
            placeholder="Enter your question"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
          />
        </div>

        <!-- Long Response -->
        <div v-else-if="question.widgetType === 'long-response'" class="relative mt-4">
          <textarea
            v-model="question.question"
            placeholder="Enter your question"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
            rows="4"
          ></textarea>
          <p class="text-xs text-gray-400">This is a long response type.</p>
        </div>

        <!-- Dropdown (Single select) -->
        <div v-else-if="question.widgetType === 'select'" class="relative mt-4">
          <input
            v-model="question.question"
            placeholder="Enter your question"
            class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
          />
          <div
            v-for="(option, optIndex) in question.widgetOptions"
            :key="optIndex"
            class="mt-2 flex items-center"
          >
            <input
              v-model="question.widgetOptions[optIndex]"
              placeholder="Option"
              class="w-full text-sm bg-[#F0F2F5] font-medium py-3.5 outline-none border-[0.5px] mb-4 p-2 border-[#E4E7EC] rounded-md"
            />
            <button @click="removeOption(index, optIndex)" class="text-red-500 ml-2">
              Remove
            </button>
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
import { ref, watch } from 'vue';

interface Question {
  question: string;
  widgetType: string;
  widgetOptions: string[] | null;
  metadata: any;
}

const emit = defineEmits<{
  (event: 'updateQuestions', questions: Question[]): void;
}>();

const questions = ref<Question[]>([
  { question: '', widgetType: 'input', widgetOptions: null, metadata: {} },
]);

// Watch questions and emit to parent component whenever they change
watch(questions, (newQuestions) => {
  emit('updateQuestions', newQuestions);
}, { deep: true });

function addQuestion() {
  questions.value.push({ question: '', widgetType: 'input', widgetOptions: null, metadata: {} });
}

function addOption(index: number) {
  if (!questions.value[index].widgetOptions) {
    questions.value[index].widgetOptions = [];
  }
  questions.value[index].widgetOptions.push('');
}

function removeOption(questionIndex: number, optionIndex: number) {
  if (questions.value[questionIndex].widgetOptions) {
    questions.value[questionIndex].widgetOptions.splice(optionIndex, 1);
  }
}
</script>
