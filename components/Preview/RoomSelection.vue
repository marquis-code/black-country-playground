<template>
    <div class="p-8 bg-white rounded-lg shadow-sm max-w-4xl mx-auto">
      <!-- Room Selection Tabs -->
      <div class="flex space-x-4 mb-6">
        <button
          v-for="room in rooms"
          :key="room"
          :class="['px-4 py-2 rounded-lg border', currentRoom === room ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-600']"
          @click="selectRoom(room)"
        >
          {{ room }}
        </button>
      </div>
  
      <!-- Furnished Toggle -->
      <div class="mb-6">
        <p class="font-medium text-gray-700">Is the room furnished?</p>
        <button
          @click="toggleFurnished"
          :class="['mt-2 px-4 py-2 rounded-lg font-medium', isFurnished ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800']"
        >
          {{ isFurnished ? 'Yes' : 'No' }}
        </button>
      </div>
  
      <!-- Interior Area -->
      <div class="mb-6">
        <h3 class="text-gray-500 font-medium mb-4">Interior area</h3>
        <div class="grid grid-cols-3 gap-4">
          <div
            v-for="(item, index) in interiorItems"
            :key="index"
            class="flex items-center p-4 border rounded-lg bg-white hover:bg-gray-100 cursor-pointer"
          >
            <span class="inline-block w-5 h-5 rounded-full bg-gray-200 mr-2"></span>
            <span class="text-gray-700">{{ item }}</span>
          </div>
          <div @click="addManually" class="flex items-center p-4 border rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
            <span class="text-gray-600 font-medium text-lg">+</span>
            <span class="ml-2 text-gray-700">Add manually</span>
          </div>
        </div>
      </div>
  
      <!-- Room Availability and Price -->
      <div class="mt-8 pt-4 border-t border-gray-200">
        <div class="flex justify-between items-center mb-4">
          <div>
            <p class="text-gray-500 font-medium">When is the room available?</p>
            <p class="text-gray-800">Available Now</p>
          </div>
          <div>
            <p class="text-gray-500 font-medium">Price</p>
            <p class="text-gray-800">150,000 per month</p>
          </div>
        </div>
        <p class="text-gray-800">Masters bedroom</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const rooms = ['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5'];
  const currentRoom = ref('Room 1');
  
  const selectRoom = (room: string) => {
    currentRoom.value = room;
  };
  
  const isFurnished = ref(false);
  
  const toggleFurnished = () => {
    isFurnished.value = !isFurnished.value;
  };
  
  const interiorItems = ref([
    'Bedframe',
    'Mattress',
    'Desk & chair',
    'Shelves/bookcases',
    'Wardrobes/closet',
    'Bathroom/Restroom',
    'Window coverings',
    'Air conditioning',
    'Ceiling/standing fan',
    'Water heating',
  ]);
  
  const addManually = () => {
    const newItem = prompt('Enter the item name:');
    if (newItem) interiorItems.value.push(newItem);
  };
  </script>
  
  <style scoped>
  /* Add any additional styles if necessary */
  </style>
  