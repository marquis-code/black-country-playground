<template>
    <div class="container mx-auto py-8">
      <!-- Search input and buttons -->
      <div class="flex items-center">
        <input
          v-model="location"
          type="text"
          placeholder="Enter location"
          class="border rounded px-4 py-2 w-full"
        />
        <button
          @click="searchLocation"
          class="ml-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>
  
      <!-- Buttons to search for different amenities -->
      <div class="flex justify-around my-4">
        <button
          v-for="option in searchOptions"
          :key="option"
          @click="searchAmenities(option)"
          class="bg-green-500 text-white px-4 py-2 rounded"
        >
          {{ option }}
        </button>
      </div>
  
      <!-- Map container -->
      <div class="relative h-96 w-full mb-6" id="map"></div>
  
      <!-- Amenity results -->
      <div v-if="amenities.length > 0" class="p-4 bg-gray-100 rounded">
        <h3 class="text-lg font-semibold mb-4">Found Amenities:</h3>
        <ul>
          <li
            v-for="amenity in amenities"
            :key="amenity.id"
            class="mb-2 p-2 border-b border-gray-300 cursor-pointer hover:bg-gray-200"
            @click="zoomToAmenity(amenity)"
          >
            <p class="text-md font-medium">{{ amenity.name }}</p>
            <p class="text-sm text-gray-600">Lat: {{ amenity.lat }}, Lon: {{ amenity.lon }}</p>
          </li>
        </ul>
      </div>
      <div v-else-if="searched && amenities.length === 0">
        <p class="text-center text-red-500">No amenities found for the selected category.</p>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import axios from 'axios';
  import 'leaflet/dist/leaflet.css';
  import * as L from 'leaflet';
  
  const location = ref('');
  const map = ref<any>(null);
  const searched = ref(false);
  const searchOptions = ['Hospital', 'School', 'Market/Shopping Plaza', 'Police Station', 'Restaurants/Eateries'];
  
  const loading = ref(false);
  const amenities = ref<any[]>([]);
  
  onMounted(() => {
    // Initialize map with a default transport map tile layer
    map.value = L.map('map').setView([0, 0], 13); // Center on the equator as a placeholder
    
    L.tileLayer('https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=4ac5aea846644296969cbecbe5c94229', {
      maxZoom: 18,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map.value);
  
    // Get user's current location and update the map
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        map.value.setView([latitude, longitude], 13);
        L.marker([latitude, longitude])
          .addTo(map.value)
          .bindPopup('You are here')
          .openPopup();
  
        // Fetch default amenities near the user's current location
        searchAmenitiesAtCoords(latitude, longitude);
      });
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  });
  
  const searchLocation = async () => {
    if (!location.value) return;
    loading.value = true;
  
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: location.value,
          format: 'json',
          limit: 1,
        },
      });
  
      if (response.data.length > 0) {
        const place = response.data[0];
        const lat = place.lat;
        const lon = place.lon;
  
        map.value.setView([lat, lon], 13);
        L.marker([lat, lon]).addTo(map.value).bindPopup(`Location: ${place.display_name}`).openPopup();
  
        // Fetch amenities near the searched location
        searchAmenitiesAtCoords(lat, lon);
      }
    } catch (error) {
      console.error('Error fetching location:', error);
    } finally {
      loading.value = false;
    }
  };
  
  const searchAmenitiesAtCoords = async (lat: number, lon: number) => {
    loading.value = true;
    
    try {
      const response = await axios.get('https://nominatim.openstreetmap.org/search', {
        params: {
          q: `hospital near ${lat}, ${lon}`, // You can modify this query for different amenities
          format: 'json',
          limit: 5,
        },
      });
  
      // Remove previous markers
      map.value.eachLayer((layer: any) => {
        if (layer instanceof L.Marker) {
          map.value.removeLayer(layer);
        }
      });
  
      amenities.value = response.data.map((facility: any) => ({
        id: facility.place_id,
        name: facility.display_name,
        lat: facility.lat,
        lon: facility.lon,
      }));
  
      // Add new markers for amenities
      amenities.value.forEach((facility: any) => {
        L.marker([facility.lat, facility.lon])
          .addTo(map.value)
          .bindPopup(`Amenity: ${facility.name}`);
      });
  
      searched.value = true;
    } catch (error) {
      console.error('Error fetching amenities:', error);
    } finally {
      loading.value = false;
    }
  };
  
  // Method to zoom to selected amenity from the list
  const zoomToAmenity = (amenity: any) => {
    map.value.setView([amenity.lat, amenity.lon], 15);
    L.marker([amenity.lat, amenity.lon]).addTo(map.value).bindPopup(`Amenity: ${amenity.name}`).openPopup();
  };
  </script>
  
  <style scoped>
  #map {
    height: 400px;
    width: 100%;
  }
  </style>
  