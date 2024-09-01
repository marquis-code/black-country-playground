<template>
    <div class="w-full h-full bg-[#EBE5E0] border rounded-lg p-4 flex flex-col items-center justify-center">
      <div v-if="images.length === 0" class="flex flex-col h-64 bg-[#EBE5E0] rounded-lg p-4 w-full">
        <div class="flex justify-center items-center flex-grow">
          <img src="@/assets/img/image-02.png" alt="Placeholder" class="w-16 h-16" />
        </div>
        <div id="cardLabel" class="flex justify-between items-center mt-4 w-full">
          <div class="text-sm text-gray-600">{{ label }} | {{ images.length }} image</div>
          <button @click="triggerFileUpload" class="bg-[#7D7D7D] text-white py-1 px-3 rounded-md text-sm">
            + Add photo
          </button>
        </div>
      </div>
  
      <div v-else class="relative w-full">
        <div v-if="images.length > 1" class="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <button @click="prevImage" class="bg-gray-300 p-1 rounded-full">&larr;</button>
        </div>
        <img :src="images[currentImageIndex]" alt="Uploaded Image" class="w-full h-auto rounded-md" />
        <div v-if="images.length > 1" class="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
          <button @click="nextImage" class="bg-gray-300 p-1 rounded-full">&rarr;</button>
        </div>
        <div class="absolute top-2 right-2">
          <button @click="removeImage" class="bg-red-500 text-white p-1 rounded-full">×</button>
        </div>
      </div>
  
      <div v-if="images.length > 0" class="flex items-center justify-between w-full mt-2">
        <div class="text-sm text-gray-600">{{ label }} | {{ images.length }} {{ images.length === 1 ? 'image' : 'images' }}</div>
        <button @click="triggerFileUpload" class="bg-gray-200 text-gray-800 py-1 px-3 rounded-md">+ Add photo</button>
      </div>
  
      <input type="file" accept="image/png, image/jpeg" multiple ref="fileInput" @change="handleFileUpload" class="hidden" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  
  const props = defineProps({
    label: {
      type: String,
      required: true
    }
  })
  
  const fileInput = ref<HTMLInputElement | null>(null)
  const images = reactive<string[]>([])
  const currentImageIndex = ref(0)
  
  function triggerFileUpload() {
    if (fileInput.value) {
      fileInput.value.click()
    }
  }
  
  function handleFileUpload(event: Event) {
    const target = event.target as HTMLInputElement
    if (target.files) {
      for (const file of Array.from(target.files)) {
        const reader = new FileReader()
        reader.onload = (e) => {
          if (e.target?.result) {
            images.push(e.target.result as string)
          }
        }
        reader.readAsDataURL(file)
      }
    }
  }
  
  function prevImage() {
    if (currentImageIndex.value > 0) {
      currentImageIndex.value--
    }
  }
  
  function nextImage() {
    if (currentImageIndex.value < images.length - 1) {
      currentImageIndex.value++
    }
  }
  
  function removeImage() {
    images.splice(currentImageIndex.value, 1)
    if (currentImageIndex.value >= images.length) {
      currentImageIndex.value = images.length - 1
    }
  }
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
   