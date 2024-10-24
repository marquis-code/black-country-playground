<template>
    <div class="container mx-auto p-4">
      <!-- Heading and instructions -->
      <div class="space-y-2 mb-10">
        <h2 class="text-[#1D2739] font-light">
          Click to add as much pictures as you want to for each common area or space.
        </h2>
        <p class="text-sm">
          Accepts <span class="font-semibold text-[#1D2739]">jpg</span> & 
          <span class="font-semibold text-[#1D2739]">png</span> 
          <span class="font-semibold text-[#1D2739]">2MB</span> size max/each
        </p>
      </div>
  
      <!-- Common areas grid layout -->
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div v-for="area in commonAreas" :key="area.name" class="relative bg-gray-50 p-4 rounded-lg shadow">
          <!-- Image preview or placeholder -->
          <div class="flex items-center justify-center h-32 bg-gray-100 border rounded-lg mb-4">
            <img 
              v-if="images[area.name].length > 0"
              :src="images[area.name][currentImageIndex[area.name]]"
              alt="Uploaded Image" 
              class="w-16 h-16 object-cover"
            />
            <div v-else class="text-gray-500">
              <img src="@/assets/img/placeholder.png" alt="Placeholder" class="w-16 h-16 object-cover" />
            </div>
          </div>
  
          <!-- Area details and upload button -->
          <div class="flex justify-between items-center">
            <span class="text-sm font-medium text-gray-600">
              {{ area.name }} | {{ images[area.name].length }} {{ images[area.name].length === 1 ? 'image' : 'images' }}
            </span>
            <button
              @click="triggerFileUpload(area.name)"
              class="bg-gray-500 hover:bg-gray-700 text-white px-2 py-1 rounded-lg text-sm"
            >
              + Add photo
            </button>
          </div>
  
          <!-- Hidden file input for image upload -->
          <input 
            type="file" 
            accept="image/png, image/jpeg" 
            multiple 
            ref="fileInputs[area.name]" 
            @change="handleFileUpload($event, area.name)" 
            class="hidden" 
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive, onMounted } from 'vue'
  import { useBatchUploadFile } from '@/composables/core/batchUpload'
  
  // Props definition
  const props = defineProps({
    payload: {
      type: Object,
      required: true,
      default: () => ({ commonAreas: [] }) // Default to empty array if not passed
    },
    location: {
      type: String,
      required: true,
    },
  })
  
  // Ensure payload.commonAreas is an array
  const commonAreas = ref(Array.isArray(props.payload.commonAreas.value) ? props.payload.commonAreas.value : [])
  
  // Reactive state for managing images and upload process
  const images = reactive<{ [key: string]: string[] }>({})
  const progress = reactive<{ [key: string]: number }>({})
  const currentImageIndex = reactive<{ [key: string]: number }>({})
  const fileInputs = reactive<{ [key: string]: HTMLInputElement | null }>({})
  const loading = reactive<{ [key: string]: boolean }>({})
  
  // Initialize states for each common area
  onMounted(() => {
    commonAreas.value.forEach((area: any) => {
      images[area.name] = area.images || []
      progress[area.name] = 0
      currentImageIndex[area.name] = 0
      loading[area.name] = false
      fileInputs[area.name] = null
    })
  })
  
  // File upload logic
  const { uploadFiles, uploadResponse } = useBatchUploadFile()
  
  function triggerFileUpload(areaName: string) {
    if (fileInputs[areaName]) {
      fileInputs[areaName].click()
    }
  }
  
  async function handleFileUpload(event: Event, areaName: string) {
    const target = event.target as HTMLInputElement
    if (target && target.files && target.files.length > 0) {
      const files = Array.from(target.files).filter(file => file.size <= 2 * 1024 * 1024)
      
      if (files.length === 0) {
        alert('All files exceed 2MB')
        return
      }
  
      try {
        loading[areaName] = true
        progress[areaName] = 1
        const interval = setInterval(() => {
          if (progress[areaName] < 100) progress[areaName] += 10
        }, 300)
  
        await uploadFiles(files)
        clearInterval(interval)
        progress[areaName] = 100
  
        const uploadedUrls = uploadResponse.value.map(response => response.secure_url)
        images[areaName].push(...uploadedUrls)
        updatePayloadImages(areaName)
  
        loading[areaName] = false
      } catch (error) {
        loading[areaName] = false
        alert('Error uploading files')
        console.error('Error:', error)
      }
    }
  }
  
  // Helper functions for handling images
  function prevImage(areaName: string) {
    if (currentImageIndex[areaName] > 0) {
      currentImageIndex[areaName]--
    }
  }
  
  function nextImage(areaName: string) {
    if (currentImageIndex[areaName] < images[areaName].length - 1) {
      currentImageIndex[areaName]++
    }
  }
  
  function removeImage(areaName: string) {
    images[areaName].splice(currentImageIndex[areaName], 1)
    if (currentImageIndex[areaName] >= images[areaName].length) {
      currentImageIndex[areaName] = images[areaName].length - 1
    }
    updatePayloadImages(areaName)
  }
  
  function updatePayloadImages(areaName: string) {
    const area = commonAreas.value.find((area: any) => area.name === areaName)
    if (area) {
      area.images = images[areaName]
      sessionStorage.setItem('property', JSON.stringify(props.payload))
    }
  }
  </script>
  
  <style scoped>
  /* Custom styles for the loader and UI */
  .container {
    max-width: 1200px;
  }
  .shadow {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  