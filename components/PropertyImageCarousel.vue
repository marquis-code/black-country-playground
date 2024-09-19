<template>
  <div class="relative max-w-4xl mx-auto">
    <div class="overflow-hidden rounded-lg">
      <!-- Render each image -->
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image"
        :alt="'Image ' + (index + 1)"
        :class="['w-full transition-transform duration-500', index === currentImageIndex ? 'block' : 'hidden']"
      />
    </div>

    <!-- Carousel dots -->
    <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      <span
        v-for="(image, index) in images"
        :key="index"
        @click="goToSlide(index)"
        :class="['w-3 h-3 rounded-full cursor-pointer', index === currentImageIndex ? 'bg-gray-800' : 'bg-gray-400']"
      ></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useIntervalFn } from '@vueuse/core';

interface CarouselProps {
  images: string[];
  interval?: number; // Optional prop for changing interval time
}

const props = defineProps<CarouselProps>();

const currentImageIndex = ref(0);
const intervalTime = props.interval || 3000; // Default to 3 seconds

// Function to go to a specific slide
const goToSlide = (index: number) => {
  currentImageIndex.value = index;
};

// Automatically change the image at intervals
const { pause, resume } = useIntervalFn(() => {
  currentImageIndex.value =
    (currentImageIndex.value + 1) % props.images?.length;
}, intervalTime);

// Start the interval when the component is mounted
onMounted(() => {
  resume();
});

// Cleanup when the component is unmounted
onUnmounted(() => {
  pause();
});
</script>

<style scoped>
/* You can still add custom styles if needed */
</style>
