<template>
    <LayoutWithoutSidebar>
    <div class="flex min-h-screen">
      <!-- Left Side: Text Editor -->
      <div class="flex-1 p-6 bg-white">
        <h2 class="text-2xl font-semibold text-gray-800 text-center mb-4">Lease Agreement</h2>
        <p class="text-center text-gray-500 mb-6">
          This is a legally binding agreement. If not Understood, consult an Attorney.
        </p>
        <div contenteditable="true" class="border border-gray-300 p-4 rounded-lg shadow-sm min-h-[300px]" ref="editor">
          Start editing your text here...
        </div>
      </div>
  
      <!-- Right Side: Settings Panel -->
      <div class="w-1/3 p-6 bg-gray-50 border-l border-gray-200">
        <h3 class="text-xl font-semibold text-gray-800 mb-4">Settings</h3>
        <p class="text-gray-500 mb-6">Edit template according to your liking</p>
  
        <div class="space-y-6">
          <!-- Status -->
          <div>
            <p class="text-gray-500 text-sm mb-1">Status</p>
            <span class="px-4 py-2 bg-gray-200 text-gray-700 rounded-full">Drafted</span>
          </div>
  
          <!-- Alignment -->
          <div>
            <p class="text-gray-500 text-sm mb-1">Alignment</p>
            <div class="flex space-x-2">
              <button @click="setAlignment('justify')" class="p-2 border rounded-md hover:bg-gray-100">Justify</button>
              <button @click="setAlignment('left')" class="p-2 border rounded-md hover:bg-gray-100">Left align</button>
              <button @click="setAlignment('center')" class="p-2 border rounded-md hover:bg-gray-100">Right align</button>
              <button @click="setAlignment('right')" class="p-2 border rounded-md hover:bg-gray-100">Right align</button>
            </div>
          </div>
  
          <!-- Listing -->
          <div>
            <p class="text-gray-500 text-sm mb-1">Listing</p>
            <div class="flex space-x-2">
              <button @click="setList('ordered')" class="p-2 border rounded-md hover:bg-gray-100">Ordered List</button>
              <button @click="setList('unordered')" class="p-2 border rounded-md hover:bg-gray-100">Unordered List</button>
            </div>
          </div>
  
          <!-- Font Style & Size -->
          <div>
            <p class="text-gray-500 text-sm mb-1">Font style & size</p>
            <div class="flex space-x-2 items-center">
              <select v-model="selectedFont" class="p-2 border rounded-md">
                <option value="Arial">Arial</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Courier New">Courier New</option>
                <!-- Add more fonts as needed -->
              </select>
              <input type="number" v-model="fontSize" class="w-16 p-2 border rounded-md" min="8" max="48" />
            </div>
            <div class="flex space-x-2 mt-2">
              <button @click="setBold" class="p-2 border rounded-md hover:bg-gray-100">B</button>
              <button @click="setUnderline" class="p-2 border rounded-md hover:bg-gray-100">U</button>
              <button @click="setItalic" class="p-2 border rounded-md hover:bg-gray-100">I</button>
              <input type="color" v-model="fontColor" class="p-2 border rounded-md" />
            </div>
          </div>
  
          <!-- Paragraph Format -->
          <div>
            <p class="text-gray-500 text-sm mb-1">Paragraph format</p>
            <div class="flex space-x-2">
              <button @click="setHeading('p')" class="p-2 border rounded-md hover:bg-gray-100">Normal</button>
              <button @click="setHeading('h1')" class="p-2 border rounded-md hover:bg-gray-100">H1</button>
              <button @click="setHeading('h2')" class="p-2 border rounded-md hover:bg-gray-100">H2</button>
              <button @click="setHeading('h3')" class="p-2 border rounded-md hover:bg-gray-100">H3</button>
              <button @click="setHeading('h4')" class="p-2 border rounded-md hover:bg-gray-100">H4</button>
              <button @click="setHeading('h5')" class="p-2 border rounded-md hover:bg-gray-100">H5</button>
              <button @click="setHeading('h6')" class="p-2 border rounded-md hover:bg-gray-100">H6</button>
            </div>
          </div>
  
          <!-- Insert Options -->
          <div>
            <p class="text-gray-500 text-sm mb-1">Insert</p>
            <div class="flex space-x-2">
              <button @click="insertImage" class="p-2 border rounded-md hover:bg-gray-100">Image</button>
              <button @click="insertLine" class="p-2 border rounded-md hover:bg-gray-100">Solid line</button>
              <button @click="insertTable" class="p-2 border rounded-md hover:bg-gray-100">Table layout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</LayoutWithoutSidebar>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import LayoutWithoutSidebar from '@/layouts/dashboardWithoutSidebar.vue'
  
  const editor = ref<HTMLElement | null>(null);
  const selectedFont = ref('Arial');
  const fontSize = ref(14);
  const fontColor = ref('#000000');
  
  const setAlignment = (alignment: string) => {
    if (editor.value) {
      document.execCommand('justify' + alignment, false, '');
    }
  };
  
  const setList = (listType: string) => {
    if (editor.value) {
      document.execCommand(listType === 'ordered' ? 'insertOrderedList' : 'insertUnorderedList', false, '');
    }
  };
  
  const setBold = () => {
    if (editor.value) {
      document.execCommand('bold', false, '');
    }
  };
  
  const setUnderline = () => {
    if (editor.value) {
      document.execCommand('underline', false, '');
    }
  };
  
  const setItalic = () => {
    if (editor.value) {
      document.execCommand('italic', false, '');
    }
  };
  
  const setHeading = (tag: string) => {
    if (editor.value) {
      document.execCommand('formatBlock', false, tag);
    }
  };
  
  const insertImage = () => {
    const url = prompt('Enter image URL');
    if (url && editor.value) {
      document.execCommand('insertImage', false, url);
    }
  };
  
  const insertLine = () => {
    if (editor.value) {
      document.execCommand('insertHorizontalRule', false, '');
    }
  };
  
  const insertTable = () => {
    if (editor.value) {
      const rows = prompt('Enter number of rows');
      const cols = prompt('Enter number of columns');
      if (rows && cols) {
        let table = '<table border="1" style="width: 100%">';
        for (let i = 0; i < parseInt(rows); i++) {
          table += '<tr>';
          for (let j = 0; j < parseInt(cols); j++) {
            table += '<td>&nbsp;</td>';
          }
          table += '</tr>';
        }
        table += '</table>';
        editor.value.innerHTML += table;
      }
    }
  };
  
  // Watch font style and size changes
  watch(selectedFont, (newFont) => {
    if (editor.value) {
      editor.value.style.fontFamily = newFont;
    }
  });
  
  watch(fontSize, (newSize) => {
    if (editor.value) {
      editor.value.style.fontSize = newSize + 'px';
    }
  });
  
  watch(fontColor, (newColor) => {
    if (editor.value) {
      document.execCommand('foreColor', false, newColor);
    }
  });
  </script>
  
  <style scoped>
  /* Any additional custom styles */
  </style>
  