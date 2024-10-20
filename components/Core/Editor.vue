<script setup lang="ts">
import { ref } from 'vue'

// Text input binding
const description = ref('')

// Toolbar options
const alignmentOptions = ['justify', 'left', 'right', 'center']
const fontStyles = ['Arial', 'Serif', 'Monospace']
const fontSizes = ['12', '14', '16', '18', '20']
const headings = ['Heading 1', 'Heading 2', 'Heading 3']

// You can manage state for other UI options as needed
const selectedAlignment = ref('justify')
const selectedFontStyle = ref('Arial')
const selectedFontSize = ref('14')
const selectedHeading = ref('Heading 1')
const status = ref('Draft')
</script>

<template>
  <div class="flex h-screen">
    <!-- Left side (Text Input Area) -->
    <div class="w-2/3 p-6">
      <h1 class="text-2xl font-bold mb-4">Lease Agreement</h1>
      <textarea 
        v-model="description"
        placeholder="Start typing here..."
        class="w-full h-full border p-4 rounded-md resize-none text-sm"
      ></textarea>
    </div>

    <!-- Right side (Editor Functionalities Section) -->
    <div class="w-1/3 bg-gray-50 p-6 border-l-2">
      <!-- Status Section -->
      <div class="mb-4">
        <h2 class="font-semibold mb-2">Status</h2>
        <p>{{ status }}</p>
      </div>

      <!-- Alignment Options -->
      <div class="mb-4">
        <h2 class="font-semibold mb-2">Alignment</h2>
        <div class="flex space-x-2">
          <button
            v-for="alignment in alignmentOptions"
            :key="alignment"
            @click="selectedAlignment = alignment"
            :class="{ 'bg-blue-500 text-white': selectedAlignment === alignment }"
            class="border px-2 py-1 rounded"
          >
            {{ alignment.charAt(0).toUpperCase() + alignment.slice(1) }} align
          </button>
        </div>
      </div>

      <!-- Font Style & Size -->
      <div class="mb-4">
        <h2 class="font-semibold mb-2">Font style & size</h2>
        <select v-model="selectedFontStyle" class="border px-2 py-1 rounded w-full mb-2">
          <option v-for="style in fontStyles" :key="style" :value="style">{{ style }}</option>
        </select>
        <select v-model="selectedFontSize" class="border px-2 py-1 rounded w-full">
          <option v-for="size in fontSizes" :key="size" :value="size">{{ size }}px</option>
        </select>
      </div>

      <!-- Paragraph Format -->
      <div class="mb-4">
        <h2 class="font-semibold mb-2">Paragraph Format</h2>
        <select v-model="selectedHeading" class="border px-2 py-1 rounded w-full">
          <option v-for="heading in headings" :key="heading" :value="heading">{{ heading }}</option>
        </select>
      </div>

      <!-- Insert Options -->
      <div>
        <h2 class="font-semibold mb-2">Insert</h2>
        <div class="flex space-x-2">
          <button class="border px-2 py-1 rounded">Signature</button>
          <button class="border px-2 py-1 rounded">Image</button>
          <button class="border px-2 py-1 rounded">Solid line</button>
          <button class="border px-2 py-1 rounded">Table</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
textarea {
  font-family: Arial, sans-serif;
  font-size: 14px;
  line-height: 1.5;
}
</style>
