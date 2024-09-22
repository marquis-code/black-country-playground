<template>
    <section class="w-full p-8 ">
      <!-- Navigation Breadcrumb -->
      <div class="flex items-center space-x-2 text-sm mb-4">
        <a href="#" class="text-gray-600 hover:underline">Listings</a>
        <span class="text-gray-400">|</span>
        <a href="#" class="text-gray-600 hover:underline">Jason Gardens</a>
        <span class="text-gray-400">|</span>
        <span class="text-gray-900 font-semibold">Gallery (All photos)</span>
      </div>
  
      <!-- Gallery Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="(image, index) in galleryImages" :key="index" class="relative">
          <img :src="dynamicImage(image.url)" :alt="image.caption" class="w-full h-auto rounded-lg shadow-sm object-cover"/>
          <div class="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
            {{ image.caption }}
          </div>
        </div>
      </div>
  
      <!-- Scroll to top button -->
      <button @click="scrollToTop" class="fixed bottom-4 right-4 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-800">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </section>
  </template>
  
  <script setup lang="ts">
  import { dynamicImage } from "@/utils/assets";
  // Sample image data (replace these with real images from your app or API)
  const galleryImages = ref([
    { url: 'gallery1.png', caption: 'Living Room' },
    { url: 'gallery2.png', caption: 'Kitchen' },
    { url: 'gallery3.png', caption: 'Bathroom' },
    { url: 'gallery1.png', caption: 'Balcony' },
    { url: 'gallery2.png', caption: 'Kitchen' },
    { url: 'gallery3.png', caption: 'Bedroom' },
    { url: 'gallery1.png', caption: 'Living Room' },
    { url: 'gallery2.png', caption: 'Kitchen' },
    { url: 'gallery3.png', caption: 'Bathroom' },
    { url: 'gallery1.png', caption: 'Balcony' },
    { url: 'gallery2.png', caption: 'Kitchen' },
    { url: 'gallery3.png', caption: 'Bedroom' },
    // Add more images as needed
  ])
  
  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  </script>
  
  <style scoped>
  /* Optional: Add custom styles for the gallery if needed */
  </style>
  