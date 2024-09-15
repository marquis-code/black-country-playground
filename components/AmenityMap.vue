<template>
    <div class="container mx-auto -mt-28 relative">
      {{loading}}
      <!-- Search input and buttons -->
      <div class="fixed top-45 left-[1068px] transform -translate-x-1/2 z-50 w-11/12 max-w-3xl bg-white rounded-lg shadow-lg p-4">
        <div class="flex items-center">
          <input
            v-model="location"
            type="text"
            placeholder="Enter location"
            class="bg-[#292929] text-white py-3 rounded-md pl-4 placeholder-gray-400 focus:outline-none w-full"
          />
          <div class="bg-[#292929] text-white rounded-md px-4 py-3 shadow-md z-10 flex items-center gap-x-2 ml-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33203 4.16675H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.33203 10H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M3.33203 15.8333H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <button @click="toggleSidebar">{{ showDropdown ? 'Hide' : 'Open' }}</button>
          </div>
        </div>
    
        <!-- Buttons to search for different amenities -->
        <div class="flex justify-around my-4">
          <button
            v-for="option in searchOptions"
            :key="option"
            @click="searchAmenities(selectedLat, selectedLon, option)"
            class="px-4 py-3 rounded transition-colors text-sm duration-200 ease-in-out "
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
            <div v-if="amenities.length > 0" class="px-4 z-50 relative bg-white opacity-95 rounded-lg">
                <h3 class="text-lg py-0 my-0 font-medium text-[#1D2739] mb-4">Neighborhood Amenities</h3>
                <ul class="space-y-3">
                  <li
                    v-for="amenity in amenities"
                    :key="amenity.id"
                    class="bg-white border opacity-100 border-gray-50 gap-x-4  cursor-pointer z-50 p-4 rounded-lg flex items-center"
                    @click="zoomToAmenity(amenity)"
                  >
                    <div>
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="44" height="44" rx="22" fill="#EBF0EC"/>
                            <path d="M19.918 24.5C19.1559 24.6715 18.668 24.9351 18.668 25.2307C18.668 25.7476 20.1604 26.1667 22.0013 26.1667C23.8423 26.1667 25.3346 25.7476 25.3346 25.2307C25.3346 24.9351 24.8467 24.6715 24.0846 24.5" stroke="#5B8469" stroke-linecap="round"/>
                            <path d="M23.0404 20.7502C23.0404 21.3255 22.574 21.7918 21.9987 21.7918C21.4234 21.7918 20.957 21.3255 20.957 20.7502C20.957 20.1749 21.4234 19.7085 21.9987 19.7085C22.574 19.7085 23.0404 20.1749 23.0404 20.7502Z" fill="white" stroke="#5B8469"/>
                            <path d="M22.5226 24.2892C22.3821 24.4245 22.1942 24.5002 21.9988 24.5002C21.8033 24.5002 21.6154 24.4245 21.4749 24.2892C20.188 23.0422 18.4634 21.6491 19.3044 19.6267C19.7592 18.5332 20.8508 17.8335 21.9988 17.8335C23.1468 17.8335 24.2384 18.5332 24.6931 19.6267C25.5331 21.6466 23.8127 23.0465 22.5226 24.2892Z" stroke="#5B8469"/>
                            </svg>
                    </div>
                    
                    <div>
                        <p class="text-sm font-medium text-[#1D2739]">{{ amenity.name }}</p>
                        <p class="text-sm text-gray-600">{{amenity.display_name}}</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div v-else-if="searched && amenities.length === 0">
                <p class="text-center text-red-500 py-20">No amenities found for the selected category.</p>
              </div>
        </section>
      </div>
    
      <!-- Map container -->
      <div class="relative h-96 w-full mb-6 mt-28 z-10" id="map"></div> <!-- Set lower z-index to ensure map is below -->
    </div>
  </template>
  
  <script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";

const showDropdown = ref(true);
const toggleSidebar = () => {
  showDropdown.value = !showDropdown.value;
};

const location = ref("");
const map = ref<any>(null);
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
  // Initialize map with a default transport map tile layer
  map.value = L.map("map").setView([0, 0], 13); // Center on the equator as a placeholder

  L.tileLayer(
    "https://tile.thunderforest.com/transport/{z}/{x}/{y}.png?apikey=4ac5aea846644296969cbecbe5c94229",
    {
      maxZoom: 18,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }
  ).addTo(map.value);

  // Get user's current location and update the map
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      selectedLat.value = latitude;
      selectedLon.value = longitude;

      // Reverse geocoding to get the address
      try {
        const response = await axios.get(
          "https://nominatim.openstreetmap.org/reverse",
          {
            params: {
              lat: latitude,
              lon: longitude,
              format: "json",
            },
          }
        );

        if (response.data && response.data.display_name) {
            console.log(response, 'here ooo')
            const storedData = sessionStorage.getItem("property");
            let propertyData = storedData ? JSON.parse(storedData) : {};
            propertyData = {
                ...propertyData,
                latitude:response?.data?.lat,
                longitude: response?.data?.lon,
                address: response?.data?.display_name
            }
            sessionStorage.setItem("property", JSON.stringify(propertyData));
        }

        map.value.setView([latitude, longitude], 13);
        L.marker([latitude, longitude])
          .addTo(map.value)
          .bindPopup("You are here")
          .openPopup();

        // Fetch default amenities near the user's current location
        searchAmenities(latitude, longitude, "Hospital"); // Default to hospitals on load
      } catch (error) {
        console.error("Error during reverse geocoding:", error);
      }
    });
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
});

// Watch for changes in the location input and trigger search
watch(location, (newLocation) => {
  if (newLocation) {
    // Debounce to limit the number of API calls
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

      map.value.setView([lat, lon], 13);
      L.marker([lat, lon])
        .addTo(map.value)
        .bindPopup(`Location: ${place.display_name}`)
        .openPopup();

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

const searchAmenities = async (
  lat: number,
  lon: number,
  amenityType: string
) => {
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
    map.value.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        map.value.removeLayer(layer);
      }
    });

    amenities.value = response.data.map((facility: any) => ({
      ...facility,
      id: facility.place_id,
      name: facility.name,
      display_name: facility.display_name,
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
    showDropdown.value = true;
  } catch (error) {
    console.error("Error fetching amenities:", error);
  } finally {
    loading.value = false;
  }
};

const landmarksArray = ref([]) as any
// Method to zoom to selected amenity from the list
const zoomToAmenity = (amenity: any) => {
  console.log(amenity, 'amenity selected')
  map.value.setView([amenity.lat, amenity.lon], 15);
  L.marker([amenity.lat, amenity.lon])
    .addTo(map.value)
    .bindPopup(`Amenity: ${amenity.name}`)
    .openPopup();
  showDropdown.value = false;
  landmarksArray.value.push({
    name: amenity.name ?? amenity.display_name,
    type: amenity.type,
    description: amenity.display_name,
    longitude: amenity.lon,
    latitude: amenity.lat,
    address: amenity.display_name
  })

  const storedData = sessionStorage.getItem("property");
  let propertyData = storedData ? JSON.parse(storedData) : {};
  propertyData = {
    ...propertyData,
    neighbouringLandmarks: landmarksArray.value,
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
  