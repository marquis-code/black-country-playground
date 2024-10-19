<template>
    <div>
      <h1>Nuxt 3 Reusable Tiptap Editor</h1>
  
      <!-- Using the TiptapEditor with custom content and event handler -->
      <CoreTiptapEditor
        v-model:modelValue="editorContent"
        :extensions="[StarterKit]"
        @update:modelValue="handleContentUpdate"
      />
  
      <!-- Display the content being edited -->
      <div>
        <h2>Preview</h2>
        <div v-html="editorContent"></div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import StarterKit from '@tiptap/starter-kit';
  
  // Reactive variable to hold editor content
  const editorContent = ref('<p>Initial content</p>');
  
  // Function to handle content update from the editor
  const handleContentUpdate = (newContent: string) => {
    console.log('Updated Content:', newContent);
  };
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  