<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <h2>Configure table</h2>
      <div v-for="(value, key) in localOptions" :key="key" class="flex justify-between items-center mb-4">
        <label>{{ key }}</label>
        <input type="checkbox" v-model="localOptions[key]" />
      </div>
      <button @click="saveConfiguration">Save</button>
      <button @click="$emit('close')">Cancel</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const props = defineProps({
  options: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['save', 'close']);

// Make a local copy of options to work with
const localOptions = ref({ ...props.options });

watch(
  () => props.options,
  (newOptions) => {
    localOptions.value = { ...newOptions };
  },
  { immediate: true }
);

const saveConfiguration = () => {
  emit('save', localOptions.value);
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure it's above other elements */
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}
</style>
