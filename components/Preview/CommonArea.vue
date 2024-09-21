<template>
    <div class="p-8 bg-white rounded-lg shadow-sm max-w-5xl mx-auto">
      <h2 class="text-xl font-semibold mb-6">Common Area</h2>
      
      <div class="grid grid-cols-2 gap-6">
        <!-- Card Component for each common area -->
        <div v-for="(area, index) in commonAreas" :key="index" class="relative">
          <div class="relative rounded-lg overflow-hidden shadow-md bg-white border">
            <div class="relative w-full h-52 flex items-center justify-center overflow-hidden">
              <!-- Carousel Images -->
              <img
                v-if="area?.images?.length > 1"
                :src="area?.images[currentImageIndex[index]]"
                alt="common area image"
                class="w-full h-full object-cover transition-opacity"
              />
              
              <!-- Previous button -->
              <button
                v-if="area?.images?.length > 1"
                class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <!-- Next button -->
              <button
                v-if="area?.images?.length > 1"
                @click="nextImage(index)"
                class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <!-- Image description overlay -->
            <div class="absolute bottom-0 left-0 w-full bg-gray-700 bg-opacity-70 text-white p-2 flex justify-between items-center">
              <span class="text-sm">{{ area?.name }}</span>
              <span class="text-sm">{{ area?.images?.length }} {{ area?.images?.length > 1 ? 'images' : 'image' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  // Define the data structure for the common areas
  interface Area {
    name: string;
    type: string;
    images: string[];
  }
  
  // Sample data for the common areas using the provided structure
  const props = defineProps({
  commonAreas: {
    type: Object,
    default: () => []
  }
})
  
  // Manage the current image index for each carousel
  const currentImageIndex = ref<number[]>(Array(props.commonAreas?.value?.length).fill(0));
  
  // Function to show the next image
  const nextImage = (index: number) => {
    currentImageIndex.value[index] = (currentImageIndex.value[index] + 1) % props.commonAreas?.value[index]?.images?.length;
  };
  
  // Function to show the previous image
  const prevImage = (index: number) => {
    currentImageIndex.value[index] =
      (currentImageIndex.value[index] - 1 + props.commonAreas?.value[index]?.images.length) % props.commonAreas?.value[index]?.images?.length;
  };
  </script>
  
  <style scoped>
  /* Additional styling if needed */
  </style>
  