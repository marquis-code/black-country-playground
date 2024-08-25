<template>
    <div class="relative">
      <VueDatePicker v-model="dateValue" :placeholder="placeholder" />
    </div>
  </template>
  
  <script lang="ts" setup>
  import VueDatePicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  
  const props = defineProps({
    modelValue: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      default: 'Select a date',
    }
  });
  
  const dateValue = ref(props.modelValue);
  const emit = defineEmits(['update:modelValue'])
  
  watch(dateValue, (newValue: any) => {
    emit('update:modelValue', newValue);
  });
  </script>
  