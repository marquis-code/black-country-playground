<template>
  <div class="flex">
    <!-- Editor Section -->
    <div class="w-3/4 p-4">
      <quill-editor
        v-model="content"
        :options="editorOptions"
        class="border p-4 rounded shadow"
      />
    </div>

    <!-- Settings Section -->
    <div class="w-1/4 p-4 bg-gray-100">
      <h2 class="font-semibold mb-4">Settings</h2>
      <div class="mb-4">
        <label class="block text-gray-700">Font Size</label>
        <input
          type="number"
          v-model="fontSize"
          class="mt-1 w-full border rounded p-2"
          min="12"
          max="36"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700">Font Style</label>
        <select v-model="fontStyle" class="mt-1 w-full border rounded p-2">
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Helvetica">Helvetica</option>
        </select>
      </div>
      <button @click="previewDocument" class="bg-blue-500 text-white py-2 px-4 rounded">
        Preview
      </button>
      <button @click="submitDocument" class="bg-green-500 text-white py-2 px-4 mt-2 rounded">
        Submit
      </button>
    </div>
  </div>

  <!-- Preview Modal -->
  <div v-if="showPreview" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-4 rounded shadow-lg w-3/4 max-h-screen overflow-y-auto">
      <h2 class="text-xl font-bold mb-4">Document Preview</h2>
      <div v-html="content" class="prose"></div>
      <button @click="showPreview = false" class="mt-4 bg-red-500 text-white py-2 px-4 rounded">
        Close Preview
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';

const content = ref<string>('');
const showPreview = ref(false);
const fontSize = ref<number>(14);
const fontStyle = ref<string>('Arial');

const editorOptions = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ 'header': [1, 2, 3, false] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'align': [] }],
      ['link', 'image'],
    ],
  },
};

const previewDocument = () => {
  showPreview.value = true;
};

const submitDocument = async () => {
  try {
    const response = await fetch('/api/submit-document', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: content.value }),
    });

    if (response.ok) {
      alert('Document submitted successfully');
    } else {
      alert('Failed to submit the document');
    }
  } catch (error) {
    console.error('Error submitting document:', error);
  }
};
</script>

<style scoped>
.prose {
  font-size: var(--font-size, 14px);
  font-family: var(--font-family, 'Arial');
}
</style>
