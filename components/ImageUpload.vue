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
import { useBatchUploadFile } from '@/composables/core/batchUpload'
const { uploadFiles, uploadResponse } = useBatchUploadFile()

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: false
  },
  roomName: {
    type: String,
    required: false
  }
})

const emit = defineEmits(['update:images'])

const fileInput = ref<HTMLInputElement | null>(null)
const images = reactive<string[]>([])
const currentImageIndex = ref(0)

// Emit the images array whenever it is updated
watch(images, (newImages) => {
  emit('update:images', newImages)
})

// Populate images if the location is "common-areas" and the label matches
onMounted(() => {
  if (props.location === 'common-areas') {
    const propertyData = sessionStorage.getItem('property')
    if (propertyData) {
      const property = JSON.parse(propertyData)
      const commonArea = property.commonAreas?.find((area: any) => area.name === props.label)
      if (commonArea && commonArea.images) {
        images.push(...commonArea.images) // Populate the images with existing images for the common area
      }
    }
  }
})

function triggerFileUpload() {
  if (fileInput.value) {
    fileInput.value.click()
  }
}

async function handleFileUpload(event: Event) {
  const target = event.target as HTMLInputElement
  if (target && target.files && target.files.length > 0) {
    try {
      const files = Array.from(target.files) // Get all files
      await uploadFiles(files) // Use the batch upload composable
      
      if (uploadResponse.value.length > 0) {
        // Extract secure URLs from the response and add them to the images array
        const uploadedUrls = uploadResponse.value.map(response => response.secure_url)
        images.push(...uploadedUrls) // Add the URLs to the images array to display in the UI
        
        // Update session storage for common areas if necessary
        if (props.location === 'common-areas') {
          const propertyData = sessionStorage.getItem('property')
          if (propertyData) {
            const property = JSON.parse(propertyData)
            
            // Ensure commonAreas exists and find the specific commonArea
            if (property.commonAreas) {
              const commonArea = property.commonAreas.find((area: any) => area.name === props.label)
              
              if (commonArea) {
                commonArea.images = [...(commonArea.images || []), ...uploadedUrls]
                sessionStorage.setItem('property', JSON.stringify(property)) // Save back to session storage
              } else {
                console.warn('Common area not found')
              }
            } else {
              console.warn('No common areas in property')
            }
          } else {
            console.warn('No property data in sessionStorage')
          }
        }

        if (props.location === 'rooms') {
            const propertyData = sessionStorage.getItem('property')
            if (propertyData) {
              const property = JSON.parse(propertyData)
              
              // Ensure rooms exist and find the specific room
              if (property.rooms) {
                const room = property.rooms.find((r: any) => r.name === props.roomName) // Find the room by name
                if (room) {
                  // Find the specific feature within the room by matching the feature name
                  const feature = room.features.find((f: any) => f.name === props.label) // Find the feature by name
                  
                  if (feature) {
                    // Add the uploaded images to the feature's images array
                    feature.images = [...(feature.images || []), ...uploadedUrls]
                    
                    // Update the session storage with the updated property data
                    sessionStorage.setItem('property', JSON.stringify(property))
                  } else {
                    console.warn('Feature not found in room')
                  }
                } else {
                  console.warn('Room not found')
                }
              } else {
                console.warn('No rooms in property')
              }
            } else {
              console.warn('No property data in sessionStorage')
            }
          }
      }
    } catch (error) {
      console.error('Error uploading files:', error)
    }
  } else {
    console.error('No files selected for upload')
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
