<template>
  <div class="bg-white rounded- shadow-sm">
    <h2 class="text-xl font-semibold mb-6">Common Area</h2>
    
    <!-- Display common areas in a grid layout -->
    <div class="grid grid-cols-2 gap-6">
      <div v-for="(area, index) in commonAreas" :key="index" class="relative">
        <div class="relative rounded-lg overflow-hidden shadow-md bg-white border">
          <div class="relative w-full h-52 flex items-center justify-center overflow-hidden">
            <!-- Carousel Images -->
            <img
              v-if="area?.images?.length > 0"
              :src="area.images[currentImageIndex[index]]"
              alt="common area image"
              class="w-full h-full object-cover transition-opacity"
            />
            <img v-else src="@/assets/icons/image-unavailable.svg" alt="" class="h-20 w-20" />
            
            <!-- Previous button -->
            <button
              v-if="area.images.length > 1"
              @click="prevImage(index)"
              class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <!-- Next button -->
            <button
              v-if="area.images.length > 1"
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
            <span class="text-sm">{{ area.name }}</span>
            <span class="text-sm">{{ area.images.length }} {{ area.images.length > 1 ? 'images' : 'image' }}</span>
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

// Define the props correctly
const props = defineProps({
  commonAreas: {
    type: Array as () => Area[],
    required: true,
    default: () => [],
  },
});

// Manage the current image index for each carousel
const currentImageIndex = ref<number[]>(Array(props.commonAreas.length).fill(0));

// Watch for changes to `commonAreas` to keep `currentImageIndex` in sync
watch(
  () => props.commonAreas,
  (newAreas) => {
    currentImageIndex.value = Array(newAreas.length).fill(0);
  },
  { immediate: true }
);

// Function to show the next image
const nextImage = (index: number) => {
  const totalImages = props.commonAreas[index]?.images.length;
  if (totalImages) {
    currentImageIndex.value[index] = (currentImageIndex.value[index] + 1) % totalImages;
  }
};

// Function to show the previous image
const prevImage = (index: number) => {
  const totalImages = props.commonAreas[index]?.images.length;
  if (totalImages) {
    currentImageIndex.value[index] = (currentImageIndex.value[index] - 1 + totalImages) % totalImages;
  }
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
