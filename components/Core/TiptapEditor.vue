<template>
    <div>
      <editor-content :editor="editor" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount, PropType } from 'vue';
  import { Editor } from '@tiptap/vue-3';
  import StarterKit from '@tiptap/starter-kit';
  
  // Define props for dynamic content and extensions
  const props = defineProps<{
    modelValue: string;
    extensions?: any[];
    onUpdate?: (content: string) => void;
  }>();
  
  const emit = defineEmits(['update:modelValue']);
  
  // Initialize editor with default or custom extensions
  const editor = ref<Editor | null>(null);
  
  onMounted(() => {
    editor.value = new Editor({
      content: props.modelValue || '<p>Hello World!</p>',
      extensions: props.extensions || [StarterKit],
      onUpdate: ({ editor }) => {
        // Emit the updated content
        emit('update:modelValue', editor.getHTML());
  
        // Call optional custom handler if passed
        if (props.onUpdate) {
          props.onUpdate(editor.getHTML());
        }
      },
    });
  });
  
  onBeforeUnmount(() => {
    if (editor.value) {
      editor.value.destroy();
    }
  });
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  