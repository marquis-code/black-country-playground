<template>
  <div class="bg-white rounded-lg shadow-sm p-4">
    <div class="flex space-x-4 mb-6">
      <!-- Room Tabs -->
      <button
        v-for="room in rooms"
        :key="room.name"
        :class="['px-4 py-2 rounded-lg border', currentRoom.name === room.name ? 'bg-gray-200 text-gray-800' : 'bg-white text-gray-600']"
        @click="selectRoom(room)"
      >
        {{ room.name }}
      </button>
    </div>

    <!-- Interior Area -->
    <div v-if="currentRoom" class="mb-6">
      <h3 class="text-gray-500 font-medium mb-4">Interior area</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(feature, index) in currentRoom.features"
          :key="index"
          class="flex items-center p-4 border rounded-lg bg-white gap-x-2 hover:bg-gray-100 cursor-pointer"
        >
          <!-- <span class="inline-block w-5 h-5 rounded-full bg-gray-200 mr-2"></span> -->
          <img :src="dynamicImage('roomBg.png')" alt="Living room" class="w-5 h-5">
          <span class="text-gray-700 text-sm">{{ feature.name }}</span>
        </div>
        <div @click="addManually" class="flex items-center p-4 border rounded-lg bg-white hover:bg-gray-100 cursor-pointer">
          <span class="text-gray-600 font-medium text-lg">+</span>
          <span class="ml-2 text-gray-700">Add manually</span>
        </div>
      </div>
    </div>

    <!-- Room Availability and Price -->
    <div v-if="currentRoom" class="mt-8 pt-4 border-t border-gray-200">
      <div class="flex justify-between items-center mb-4">
        <div>
          <p class="text-gray-500 font-medium">When is the room available?</p>
          <p class="text-gray-800">{{ currentRoom.availability === 'available_now' ? 'Available Now' : currentRoom.availableFrom }}</p>
        </div>
        <div>
          <p class="text-gray-500 font-medium">Price</p>
          <p class="text-gray-800">{{ currentRoom.rentAmount ? currentRoom.rentAmount.toLocaleString() : '0' }} per {{ currentRoom.rentFrequency }}</p>
        </div>
      </div>
      <p class="text-gray-800">{{ currentRoom.isMaster ? 'Master\'s bedroom' : '' }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define the props to receive the room data
const props = defineProps({
  rooms: {
    type: Array,
    default: () => []
  }
})

// Current selected room
const currentRoom = ref(props.rooms[0] || {}); // Set the first room as the default selected room

// Function to select a room
const selectRoom = (room) => {
  currentRoom.value = room;
};

// Function to add manual features to the room
const addManually = () => {
  const newItem = prompt('Enter the item name:');
  if (newItem) {
    if (!currentRoom.value.features) {
      currentRoom.value.features = [];
    }
    currentRoom.value.features.push({ name: newItem, images: [] });
  }
};
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>
