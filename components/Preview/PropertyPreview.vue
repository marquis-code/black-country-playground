<template>
    <div class="bg-white p-6 rounded-lg shadow border-[0.5px] space-y-10">
      {{property}}
      <div>
        <h2 class="text-xl font-semibold">Review property details and proceed to publish to the public</h2>
        <div class="mt-4">
          <h3 class="text font-medium text-[#1D2739]">Basic property information</h3>
          <div class="mt-2">
            <PreviewPropertyDetails :property="property" />
          </div>
        </div>
      </div>
  

      <div>
        <h3 class="text font-medium text-[#1D2739]">Detailed property information</h3>
        <div class="mt-2">
          <PreviewDetailedInformation :details="details" />
        </div>
      </div>

      <div>        
        <!-- Display images if the payload has images -->
        <section v-if="Array.isArray(payload.images.value) && payload.images.value.length" class="grid grid-cols-2 gap-6">
          <div v-for="(item, index) in payload.images.value" :key="index" class="border p-2">
            <img 
              :src="item" 
              :alt="'Image ' + (index + 1)" 
              class="w-full h-44 w-auto object-cover"
            />
          </div>
        </section>
        
        <!-- Display a fallback message when no images are available -->
        <p v-else>No images available.</p>
      </div>
     <div>
        <div class="mt-2">
          <PreviewRoomDetails :rooms="payload.rooms.value" />
        </div>
      </div>
      <div>
      </div>
      <div class="space-y-3">
      <!-- <div class="flex justify-between items-center">
        <h3 class="text font-medium text-sm text-[#1D2739]">Finalize listings and edit</h3>
        <button class="text-[#326543] mb-3">Edit</button>
      </div> -->
        <!-- <div class="mt-2">
          <PreviewFinalizeListing :rules="payload.rules.value" />
        </div> -->
      </div>
       <PreviewCommonArea :commonAreas="payload.commonAreas.value" />
      <PreviewRoomSelection :rooms="payload.rooms.value" />
      <PreviewListingRules :rules="payload.rules.value" />
      <PreviewPreScreeningQuestions :questions="payload.questions.value" />
    </div>
  </template>
  
  <script setup lang="ts">  
const props = defineProps({
  payload: {
    type: Object,
    default: () => {}
  }
})
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  