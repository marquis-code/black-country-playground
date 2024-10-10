<template>
      <div class="bg-white rounded-lg w-full">

        <CoreVue3Signature @signature="handleSignature" class="w-full" />
  
        <div class="mt-6 flex justify-between gap-x-6 pb-4">
          <button @click="emit('close')" class="bg-[#EBE5E0] text-[#292929] w-full text-sm  px-6 py-3 rounded-lg">Reset</button>
          <button @click="submitSignature" class="bg-[#292929] w-full text-sm text-white px-6 py-3 rounded-lg">Submit</button>
        </div>
      </div>
  </template>
  
  <script setup lang="ts">
  const payload = ref({
    signature: ''
  })

  const emit = defineEmits(['close', 'agreementData'])
  

  const submitSignature = () => {
    console.log(payload.value, 'ooo')
    emit('agreementData', payload.value)
    emit('close')
  }

  const handleSignature = (data: any) => {
    payload.value.signature = data
  }
  </script>
  
  <style scoped>
  canvas {
    border: 1px solid #ddd;
  }
  </style>
  