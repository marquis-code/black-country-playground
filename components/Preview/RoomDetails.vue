<template>
  <div class="bg-white rounded-lg shadow-sm mx-auto">
    <h2 class="text-lg font-semibold mb-6">Rooms</h2>

    <div v-for="(room, index) in rooms" :key="index" class="mb-8 border-b pb-6">
      <!-- Room Name and Occupant Information -->
      <h3 class="text- font-semibold mb-2">{{ room?.name }} <span v-if="room?.isMaster" class="text-sm font-light">(Master Room)</span></h3>
      <p class="text-gray-600 mb-2">Occupant: {{ room?.occupantName }}</p>
      
      <!-- Availability Information -->
      <p v-if="room?.availability === 'available_now'" class="text-green-600 mb-2">Available Now</p>
      <p v-else-if="room?.availability === 'unavailable'" class="text-red-600 mb-2">Unavailable</p>
      <p v-else class="text-yellow-600 mb-2">Available from: {{ formatDate(room?.availableFrom) }}</p>
      
      <!-- Rent and Furnishing Details -->
      <p class="text-gray-800 mb-2">Rent: {{ formatCurrency(room?.rentAmount, room?.currencyCode) }} per {{ room?.rentFrequency }}</p>
      <p class="text-gray-600 mb-2">Furnished: {{ room?.isFurnished ? 'Yes' : 'No' }}</p>

      <!-- Room Images Carousel -->
      <!-- <div class="relative rounded-lg overflow-hidden shadow-md bg-white border mb-4">
        <div class="relative w-full h-64 flex items-center justify-center overflow-hidden">
          <img
            v-if="room?.images?.length > 1"
            :src="room?.images[currentRoomImage[index]]"
            alt="room image"
            class="w-full h-full object-cover transition-opacity"
          />
          <button
            v-if="room?.images?.length > 1"
            @click="prevRoomImage(index)"
            class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            v-if="room?.images?.length > 1"
            @click="nextRoomImage(index)"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-1 shadow hover:bg-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div> -->


      <div class="mt-4">
        <h3 class="text-gray-500 font-medium mb-2">Interior Area</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            v-for="(feature, fIndex) in room?.features || []"
            :key="fIndex"
            class="relative rounded-lg overflow-hidden shadow-md bg-white border"
          >
            <div class="relative w-full h-32 flex items-center justify-center overflow-hidden">
              <img
                :src="feature.images[0]"
                alt="feature image"
                class="w-full h-full object-cover transition-opacity"
              />
            </div>
            <p class="absolute bottom-0 left-0 w-full bg-gray-700 bg-opacity-70 text-white p-2 text-sm">
              {{ feature.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- <script setup lang="ts">
import { ref, defineProps } from 'vue';

// Define the data structure interfaces
interface Feature {
  name: string;
  images: string[];
}

interface Room {
  name: string;
  availability: 'available_now' | 'unavailable' | 'available_from_date';
  availableFrom?: string;
  occupantName: string;
  isMaster: boolean;
  images: string[];
  isFurnished: boolean;
  rentAmount: number;
  currencyCode: string;
  rentFrequency: string;
  features: Feature[];
}

// Define props for the component
const props = defineProps<{
  rooms: Room[];
}>();

// Manage the current image index for each room's carousel
const currentRoomImage = ref<number[]>(Array(props.rooms.length).fill(0));

// Function to show the next image
const nextRoomImage = (index: number) => {
  currentRoomImage.value[index] = (currentRoomImage.value[index] + 1) % props.rooms[index].images.length;
};

// Function to show the previous image
const prevRoomImage = (index: number) => {
  currentRoomImage.value[index] =
    (currentRoomImage.value[index] - 1 + props.rooms[index].images.length) % props.rooms[index].images.length;
};

// Helper function to format the date
const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

// Helper function to format currency
const formatCurrency = (amount: number, currencyCode: string | undefined) => {
  // Default to 'NGN' (Naira) if no valid currencyCode is provided
  const validCurrencyCode = currencyCode || 'NGN';
  
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: validCurrencyCode,
    }).format(amount);
  } catch (error) {
    console.error(`Invalid currency code: ${currencyCode}. Defaulting to 'NGN'.`);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  }
};

</script>

<style scoped>
/* Additional styling if needed */
</style> -->

<script setup lang="ts">
import { ref, defineProps } from 'vue';

// Define the data structure interfaces
interface Feature {
  name: string;
  images: string[];
}

interface Room {
  name: string;
  availability: 'available_now' | 'unavailable' | 'available_from_date';
  availableFrom?: string;
  occupantName: string;
  isMaster: boolean;
  images: string[];
  isFurnished: boolean;
  rentAmount: number;
  currencyCode: string;
  rentFrequency: string;
  features: Feature[];
}

// Define props for the component
const props = defineProps<{
  rooms: Room[];
}>();

// Manage the current image index for each room's carousel
const currentRoomImage = ref<number[]>(Array(props.rooms?.length || 0).fill(0));

// Function to show the next image
const nextRoomImage = (index: number) => {
  const imagesLength = props.rooms[index]?.images.length || 1;
  currentRoomImage.value[index] = (currentRoomImage.value[index] + 1) % imagesLength;
};

// Function to show the previous image
const prevRoomImage = (index: number) => {
  const imagesLength = props.rooms[index]?.images.length || 1;
  currentRoomImage.value[index] =
    (currentRoomImage.value[index] - 1 + imagesLength) % imagesLength;
};

// Helper function to format the date
const formatDate = (date: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};

// Helper function to format currency
const formatCurrency = (amount: number, currencyCode: string | undefined) => {
  // Default to 'NGN' (Naira) if no valid currencyCode is provided
  const validCurrencyCode = currencyCode || 'NGN';
  
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: validCurrencyCode,
    }).format(amount);
  } catch (error) {
    console.error(`Invalid currency code: ${currencyCode}. Defaulting to 'NGN'.`);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'NGN',
    }).format(amount);
  }
};
</script>
