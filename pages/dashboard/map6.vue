<template>
  <div class="container mx-auto -mt-28 relative">
    <!-- Search bar and filters -->
    <div class="absolute left-0 lg:fixed top-45 lg:left-[1068px] transform -translate-x-1/2 z-50 w-11/12 max-w-3xl bg-white rounded-lg shadow-lg p-4">
      <div class="flex items-center relative">
        <input
          v-model="location"
          type="text"
          placeholder="Enter location"
          class="bg-[#292929] pl-14 text-white py-3 rounded-md  placeholder-gray-400 focus:outline-none w-full"
        />
        <!-- Search icon -->
        <svg class="absolute left-6" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- SVG paths here -->
        </svg>
        
        <!-- Sidebar toggle -->
        <div class="bg-[#292929] text-white rounded-md px-4 py-3 shadow-md z-10 flex items-center gap-x-2 ml-2">
          <!-- Sidebar toggle SVG and button -->
        </div>
      </div>

      <!-- Buttons to search for different amenities -->
      <div class="flex justify-around my-4">
        <button
          v-for="option in searchOptions"
          :key="option"
          @click="searchAmenities(selectedLat, selectedLon, option)"
          class="px-4 py-3 rounded transition-colors text-sm duration-200 ease-in-out"
          :class="{
            'bg-[#5B8469] text-white': selectedOption === option,
            'bg-[#E4E7EC] text-[#292929]': selectedOption !== option
          }"
        >
          {{ option }}
        </button>
      </div>

      <!-- Amenity results -->
      <section v-if="showDropdown">
        <!-- Display amenities here -->
      </section>
    </div>

    <!-- Map container -->
    <div class="relative h-96 w-full mb-6 mt-28 z-10" id="map"></div> <!-- Set lower z-index to ensure map is below -->
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import mapboxgl from "mapbox-gl";
import axios from "axios";

// Mapbox Access Token
mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const showDropdown = ref(true);
const toggleSidebar = () => {
  showDropdown.value = !showDropdown.value;
};

const location = ref("");
const map = ref<mapboxgl.Map | null>(null);
const searched = ref(false);
const searchOptions = [
  "Hospital",
  "School",
  "Market/Shopping Plaza",
  "Police Station",
  "Restaurants/Eateries",
];
const selectedOption = ref<string | null>(null);

const loading = ref(false);
const amenities = ref<any[]>([]);
const selectedLat = ref(0);
const selectedLon = ref(0);
const searchTimeout = ref<any>(null);

onMounted(async () => {
  // Initialize Mapbox map
  map.value = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11', // Change this to desired Mapbox style
    center: [3.3792, 6.5244], // Default center (Lagos coordinates)
    zoom: 10,
  });

  // Get user's current location and update the map
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      selectedLat.value = latitude;
      selectedLon.value = longitude;

      map.value?.flyTo({ center: [longitude, latitude], zoom: 13 });
      new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map.value)
        .setPopup(new mapboxgl.Popup().setHTML("You are here")).togglePopup();

      // Fetch default amenities near the user's current location
      searchAmenities(latitude, longitude, "Hospital"); // Default to hospitals on load
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
});

// Watch for changes in the location input and trigger search
watch(location, (newLocation) => {
  if (newLocation) {
    if (searchTimeout.value) clearTimeout(searchTimeout.value);
    searchTimeout.value = setTimeout(() => {
      searchLocation();
    }, 500); // Adjust the debounce delay as needed
  }
});

const searchLocation = async () => {
  if (!location.value) return;
  loading.value = true;

  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: location.value,
          format: "json",
          limit: 1,
        },
      }
    );

    if (response.data.length > 0) {
      const place = response.data[0];
      const lat = place.lat;
      const lon = place.lon;

      map.value?.flyTo({ center: [lon, lat], zoom: 13 });
      new mapboxgl.Marker().setLngLat([lon, lat]).addTo(map.value)
        .setPopup(new mapboxgl.Popup().setHTML(`Location: ${place.display_name}`)).togglePopup();

      selectedLat.value = lat;
      selectedLon.value = lon;

      // Fetch amenities near the searched location
      searchAmenities(lat, lon, "Hospital"); // Default to hospitals on search
    }
  } catch (error) {
    console.error("Error fetching location:", error);
  } finally {
    loading.value = false;
  }
};

const searchAmenities = async (lat: number, lon: number, amenityType: string) => {
  loading.value = true;
  selectedOption.value = amenityType;

  try {
    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: `${amenityType} near ${lat}, ${lon}`,
          format: "json",
          limit: 5,
        },
      }
    );

    // Remove previous markers
    map.value?.clear(); // For Mapbox, you need to manage the markers in an array to remove them

    amenities.value = response.data.map((facility: any) => ({
      ...facility,
      id: facility.place_id,
      name: facility.name || 'No name',
      display_name: facility.display_name,
      lat: facility.lat,
      lon: facility.lon,
    }));

    // Add new markers for amenities
    amenities.value.forEach((facility: any) => {
      new mapboxgl.Marker()
        .setLngLat([facility.lon, facility.lat])
        .addTo(map.value)
        .setPopup(new mapboxgl.Popup().setHTML(`Amenity: ${facility.name}`));
    });

    searched.value = true;
    showDropdown.value = true;
  } catch (error) {
    console.error("Error fetching amenities:", error);
  } finally {
    loading.value = false;
  }
};

// Method to zoom to selected amenity from the list
const zoomToAmenity = (amenity: any) => {
  map.value?.flyTo({ center: [amenity.lon, amenity.lat], zoom: 15 });
  new mapboxgl.Marker()
    .setLngLat([amenity.lon, amenity.lat])
    .addTo(map.value)
    .setPopup(new mapboxgl.Popup().setHTML(`Amenity: ${amenity.name}`)).togglePopup();

  showDropdown.value = false;

  const landmarksArray = ref([]) as any[];
  landmarksArray.push({
    name: amenity.name ?? amenity.display_name,
    type: amenity.type,
    description: amenity.display_name,
    longitude: amenity.lon,
    latitude: amenity.lat,
    address: amenity.display_name
  });

  const storedData = sessionStorage.getItem("property");
  let propertyData = storedData ? JSON.parse(storedData) : {};
  propertyData = {
    ...propertyData,
    neighbouringLandmarks: landmarksArray,
  };
  sessionStorage.setItem("property", JSON.stringify(propertyData));
};
</script>

<style scoped>
#map {
  height: 700px;
  width: 100%;
  z-index: 10; /* Ensure map has a lower z-index */
}

/* Loading spinner */
.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
