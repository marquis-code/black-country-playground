<template>
    <div>
      <!-- Common Area Visuals -->
      <h4 class="text-[#1D2739]">Common area</h4>
      <div class="grid grid-cols-2 gap-4">
        <div v-for="(visual, index) in visuals.commonArea" :key="index" class="border p-2 rounded-md relative">
          <img :src="visual.imageUrl" alt="Visual Image" class="rounded-md mb-2 w-full h-48 object-cover" />
          <p class="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">{{ visual.type }} | {{ visual.images }} images</p>
        </div>
      </div>
  
      <!-- Room Visuals -->
      <div class="mt-4">
        <h4 class="text-[#1D2739]">Rooms</h4>
        <div class="flex gap-2 mt-2">
          <button v-for="(room, index) in visuals.rooms" 
                  :key="index"
                  @click="setActiveRoom(index)"
                  :class="{ 'bg-gray-200': activeRoomIndex === index }"
                  class="px-4 py-2 border rounded-md">
            {{ room.name }}
          </button>
        </div>
        <div class="grid grid-cols-2 gap-4 mt-4">
          <div v-for="(roomVisual, index) in activeRoomVisuals" :key="index" class="border p-2 rounded-md relative">
            <img :src="roomVisual.imageUrl" alt="Room Visual Image" class="rounded-md mb-2 w-full h-48 object-cover" />
            <p class="absolute bottom-2 left-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">{{ roomVisual.type }} | {{ roomVisual.images }} images</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  
  interface Visual {
    type: string
    images: number
    imageUrl: string
  }
  
  interface RoomVisual {
    name: string
    visuals: Visual[]
  }
  
  interface Visuals {
    commonArea: Visual[]
    rooms: RoomVisual[]
  }
  
  const props = defineProps<{
    visuals: Visuals
  }>()
  
  const activeRoomIndex = ref(0)
  
  // Computed property to get visuals of the active room
  const activeRoomVisuals = computed(() => {
    return props.visuals.rooms[activeRoomIndex.value].visuals
  })
  
  const setActiveRoom = (index: number) => {
    activeRoomIndex.value = index
  }
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  