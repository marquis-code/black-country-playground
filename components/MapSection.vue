<!-- 
<template>
<main>
  <div class="relative h-screen">

    <div class="absolute top-2 left-0 right-0  flex items-center px-5">
      <div class="bg-[#292929] text-white rounded-md px-4 py-2 shadow-md z-10 flex items-center space-x-2 w-full">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.83203 15C4.30792 15.3431 3.33203 15.8703 3.33203 16.4614C3.33203 17.4953 6.3168 18.3333 9.9987 18.3333C13.6806 18.3333 16.6654 17.4953 16.6654 16.4614C16.6654 15.8703 15.6894 15.3431 14.1654 15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12.0846 7.50008C12.0846 8.65066 11.1519 9.58341 10.0013 9.58341C8.85072 9.58341 7.91797 8.65066 7.91797 7.50008C7.91797 6.34949 8.85072 5.41675 10.0013 5.41675C11.1519 5.41675 12.0846 6.34949 12.0846 7.50008Z" stroke="white" stroke-width="1.5"/>
          <path d="M11.0491 14.5781C10.7681 14.8487 10.3924 15.0001 10.0015 15.0001C9.61047 15.0001 9.2348 14.8487 8.95372 14.5781C6.37989 12.0841 2.93063 9.298 4.61273 5.25319C5.52222 3.06618 7.70542 1.66675 10.0015 1.66675C12.2975 1.66675 14.4806 3.06619 15.3901 5.25319C17.0701 9.29291 13.6293 12.0927 11.0491 14.5781Z" stroke="white" stroke-width="1.5"/>
        </svg>
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Enter a location"
          class="bg-[#292929] text-white py-1.5 placeholder-gray-400 focus:outline-none w-full"
          @input="showDropdown = true"
        />
      </div>

      <div class="bg-[#292929] text-white rounded-md px-4 py-3 shadow-md z-10 flex items-center gap-x-2 ml-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.33203 4.16675H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.33203 10H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M3.33203 15.8333H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <button @click="toggleSidebar">{{ showDropdown ? 'Hide' : 'Open' }}</button>
      </div>
    </div>


    <div v-if="showDropdown" class="absolute top-14 left-0 right-0 m-5 bg-white border opacity-95 shadow-md rounded-lg p-4 z-20">
      <h2 class="text-lg font-medium text-[#1D2739] mb-4">Neighborhood Amenities</h2>
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex space-x-4 mb-4">
          <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
                  :class="{'text-white bg-[#5B8469]': activeFilter === filter, 'bg-[#E4E7EC] text-[#292929]': activeFilter !== filter}"
                  class="px-4 py-2 rounded-md text-sm border whitespace-nowrap">
            {{ filter }}
          </button>
        </div>
      </div>
      <div class="space-y-4 z-50">
        <div v-for="(item, index) in items" :key="index" class="bg-white border opacity-100 border-gray-50 shadow cursor-pointer z-50 p-4 rounded-lg flex justify-between items-center">
          <div class="flex items-center gap-x-3">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="22" fill="#EBF0EC"/>
              <path d="M19.918 24.5C19.1559 24.6715 18.668 24.9351 18.668 25.2307C18.668 25.7476 20.1604 26.1667 22.0013 26.1667C23.8423 26.1667 25.3346 25.7476 25.3346 25.2307C25.3346 24.9351 24.8467 24.6715 24.0846 24.5" stroke="#5B8469" stroke-linecap="round"/>
              <path d="M23.0404 20.7502C23.0404 21.3255 22.574 21.7918 21.9987 21.7918C21.4234 21.7918 20.957 21.3255 20.957 20.7502C20.957 20.1749 21.4234 19.7085 21.9987 19.7085C22.574 19.7085 23.0404 20.1749 23.0404 20.7502Z" fill="white" stroke="#5B8469"/>
              <path d="M22.5226 24.2892C22.3821 24.4245 22.1942 24.5002 21.9988 24.5002C21.8033 24.5002 21.6154 24.4245 21.4749 24.2892C20.188 23.0422 18.4634 21.6491 19.3044 19.6267C19.7592 18.5332 20.8508 17.8335 21.9988 17.8335C23.1468 17.8335 24.2384 18.5332 24.6931 19.6267C25.5331 21.6466 23.8127 23.0465 22.5226 24.2892Z" stroke="#5B8469"/>
            </svg>
           <div>
            <h3 class="font-semibold text-[#1D2739]">{{ item.name }}</h3>
            <p class="text-sm text-[#667185]">{{ item.address }}</p>
            <span class="text-xs text-[#292929] bg-[#EAEAEA] px-2 py-1 rounded-full">{{ item.type }}</span>
           </div>
          </div>
          <span class="text-sm text-[#171717]">{{ item.time }}</span>
        </div>
      </div>
    </div>


    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126746.26575699888!2d3.245361318263777!3d6.548376092354154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50b720d9075%3A0xdee5fa622bdf4e93!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1630942124939!5m2!1sen!2sng"
      width="100%"
      height="70%"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      class="absolute top-0 left-0 w-full rounded-md"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
  <slot name="action-buttons"></slot>
</main>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

const showDropdown = ref(false);
const searchQuery = ref('');
const sidebarVisible = ref(true);
const activeFilter = ref('School');
const filters = ['Hospital', 'School', 'Market/Shopping Plaza', 'Police Station', 'Restaurants/Eateries'];
const items = ref([
  {
    name: "Glory International Prim/Sec School",
    address: "10521 Veterans Ademola way",
    type: "Public school",
    time: "20 min drive"
  },
  {
    name: "Glory International Prim/Sec School",
    address: "10521 Veterans Ademola way",
    type: "Public school",
    time: "20 min drive"
  },
  {
    name: "Glory International Prim/Sec School",
    address: "10521 Veterans Ademola way",
    type: "Public school",
    time: "20 min drive"
  },
  // Add more items as needed
]);

const toggleSidebar = () => {
  showDropdown.value = !showDropdown.value;
};

onMounted(() => {
  // Simulating fetching user's current location and setting it to the searchQuery
  searchQuery.value = "12, off black country estate, Lagos state"; // This can be replaced with actual geolocation logic
});
</script>

<style scoped>
/* Additional styling if necessary */
.icon-location::before {
  content: url('path_to_location_icon.svg'); /* Replace with the actual path to your location icon */
}

.icon-menu::before {
  content: url('path_to_menu_icon.svg'); /* Replace with the actual path to your menu icon */
}

.scrollbar-hide {
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Safari and Chrome */
}

</style> -->

 <template>
  <main>
    <div class="relative h-screen">

      <div class="absolute top-2 left-0 right-0 flex items-center px-5">
        <div class="bg-[#292929] text-white rounded-md px-4 py-2 shadow-md z-10 flex items-center space-x-2 w-full">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83203 15C4.30792 15.3431 3.33203 15.8703 3.33203 16.4614C3.33203 17.4953 6.3168 18.3333 9.9987 18.3333C13.6806 18.3333 16.6654 17.4953 16.6654 16.4614C16.6654 15.8703 15.6894 15.3431 14.1654 15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M12.0846 7.50008C12.0846 8.65066 11.1519 9.58341 10.0013 9.58341C8.85072 9.58341 7.91797 8.65066 7.91797 7.50008C7.91797 6.34949 8.85072 5.41675 10.0013 5.41675C11.1519 5.41675 12.0846 6.34949 12.0846 7.50008Z" stroke="white" stroke-width="1.5"/>
            <path d="M11.0491 14.5781C10.7681 14.8487 10.3924 15.0001 10.0015 15.0001C9.61047 15.0001 9.2348 14.8487 8.95372 14.5781C6.37989 12.0841 2.93063 9.298 4.61273 5.25319C5.52222 3.06618 7.70542 1.66675 10.0015 1.66675C12.2975 1.66675 14.4806 3.06619 15.3901 5.25319C17.0701 9.29291 13.6293 12.0927 11.0491 14.5781Z" stroke="white" stroke-width="1.5"/>
          </svg>
          <input
            type="text"
            v-model="searchQuery"
            placeholder="Enter a location"
            class="bg-[#292929] text-white py-1.5 placeholder-gray-400 focus:outline-none w-full"
            @input="onSearchInput"
          />
          <div v-if="loading" class="spinner"></div> 
        </div>
        <div class="bg-[#292929] text-white rounded-md px-4 py-3 shadow-md z-10 flex items-center gap-x-2 ml-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.33203 4.16675H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.33203 10H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.33203 15.8333H16.6654" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <button @click="toggleSidebar">{{ showDropdown ? 'Hide' : 'Open' }}</button>
        </div>
      </div>
  

      <div v-if="locationSuggestions.length > 0" class="absolute top-14 left-0 right-0 m-5 bg-white border opacity-95 shadow-md rounded-lg p-4 z-20">
        <ul>
          <li v-for="(location, index) in locationSuggestions" :key="index" @click="selectLocation(location)" class="cursor-pointer py-2 px-4 hover:bg-gray-100">
            {{ location.place_name }}
          </li>
        </ul>
      </div>


    <div v-if="showDropdown" class="absolute top-14 left-0 right-0 m-5 bg-white border opacity-95 shadow-md rounded-lg p-4 z-20">
      <h2 class="text-lg font-medium text-[#1D2739] mb-4">Neighborhood Amenities</h2>
      <div class="overflow-x-auto scrollbar-hide">
        <div class="flex space-x-4 mb-4">
          <button v-for="filter in filters" :key="filter" @click="activeFilter = filter"
                  :class="{'text-white bg-[#5B8469]': activeFilter === filter, 'bg-[#E4E7EC] text-[#292929]': activeFilter !== filter}"
                  class="px-4 py-2 rounded-md text-sm border whitespace-nowrap">
            {{ filter }}
          </button>
        </div>
      </div>
      <div class="space-y-4 z-50">

        <div v-for="(item, index) in filteredItems" :key="index" @click="selectFilteredLocation(item)"
          class="bg-white border opacity-100 border-gray-50 shadow cursor-pointer z-50 p-4 rounded-lg flex justify-between items-center">
          <div class="flex items-center gap-x-3">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="44" height="44" rx="22" fill="#EBF0EC"/>
              <path d="M19.918 24.5C19.1559 24.6715 18.668 24.9351 18.668 25.2307C18.668 25.7476 20.1604 26.1667 22.0013 26.1667C23.8423 26.1667 25.3346 25.7476 25.3346 25.2307C25.3346 24.9351 24.8467 24.6715 24.0846 24.5" stroke="#5B8469" stroke-linecap="round"/>
              <path d="M23.0404 20.7502C23.0404 21.3255 22.574 21.7918 21.9987 21.7918C21.4234 21.7918 20.957 21.3255 20.957 20.7502C20.957 20.1749 21.4234 19.7085 21.9987 19.7085C22.574 19.7085 23.0404 20.1749 23.0404 20.7502Z" fill="white" stroke="#5B8469"/>
              <path d="M22.5226 24.2892C22.3821 24.4245 22.1942 24.5002 21.9988 24.5002C21.8033 24.5002 21.6154 24.4245 21.4749 24.2892C20.188 23.0422 18.4634 21.6491 19.3044 19.6267C19.7592 18.5332 20.8508 17.8335 21.9988 17.8335C23.1468 17.8335 24.2384 18.5332 24.6931 19.6267C25.5331 21.6466 23.8127 23.0465 22.5226 24.2892Z" stroke="#5B8469"/>
            </svg>
           <div>
            <h3 class="font-semibold text-[#1D2739]">{{ item.name }}</h3>
            <p class="text-sm text-[#667185]">{{ item.address }}</p>
            <span class="text-xs text-[#292929] bg-[#EAEAEA] px-2 py-1 rounded-full">{{ item.type }}</span>
           </div>
          </div>
          <span class="text-sm text-[#171717]">{{ item.time }}</span>
        </div>
      </div>
    </div>
  

      <div ref="mapContainer" class="absolute top-0 left-0 w-full h-4/5 z-0"></div>
    </div>
    <slot name="action-buttons"></slot>
  </main>
</template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue';
  import mapboxgl from 'mapbox-gl';
  import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
  
  // Mapbox access token
  mapboxgl.accessToken = 'pk.eyJ1IjoibWFycXVpczE5OTktIiwiYSI6ImNrenJic2xubjB1OXQycGxnMGp2a2NvM2kifQ.7S-nXi_BJHFzVXUlgK8VTg';
  const geocodingClient = mbxGeocoding({ accessToken: mapboxgl.accessToken });
  
  const mapContainer = ref(null);
  const showDropdown = ref(false);
  const map = ref(null);
  const marker = ref(null);
  const searchQuery = ref('');
  const locationSuggestions = ref([]);
  const selectedLocation = ref({});
  const loading = ref(false);
  
  // Initialize the Mapbox map
  onMounted(() => {
    map.value = new mapboxgl.Map({
      container: mapContainer.value,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [3.3792, 6.5244], // Initial map center (Lagos coordinates)
      zoom: 10,
    });
  });
  
  // Handle search input changes and fetch location suggestions from Mapbox Geocoding API
  const onSearchInput = async () => {
    if (searchQuery.value.length > 2) {
      loading.value = true;
      const response = await geocodingClient
        .forwardGeocode({
          query: searchQuery.value,
          autocomplete: true,
          limit: 5,
        })
        .send();
  
      locationSuggestions.value = response.body.features;
      loading.value = false;
    } else {
      locationSuggestions.value = [];
    }
  };
  
  // When the user selects a location from the suggestions
  const selectLocation = (location) => {
    selectedLocation.value = location;
    locationSuggestions.value = [];
    searchQuery.value = location.place_name;

    emitLocation(location);
  
    // Fly the map to the selected location's coordinates
    map.value.flyTo({
      center: location.geometry.coordinates,
      zoom: 14,
    });
  
    // Add a marker to the selected location
    if (marker.value) {
      marker.value.remove();
    }
    marker.value = new mapboxgl.Marker()
      .setLngLat(location.geometry.coordinates)
      .addTo(map.value);
  };
  
  const toggleSidebar = () => {
  showDropdown.value = !showDropdown.value;
};

const emit = defineEmits<{
  (event: 'locationSelected', data: any): void
}>()
// Emit the selected location’s data after selection
const emitLocation = (location: any) => {
  console.log(location, 'location here')
  emit('locationSelected', {
    latitude: location.geometry.coordinates[1],
    longitude: location.geometry.coordinates[0],
    fullAddress: location.place_name
  });
};

const activeFilter = ref('School');
const filters = ['Hospital', 'School', 'Market/Shopping Plaza', 'Police Station', 'Restaurants/Eateries'];
const items = ref([
  {
    name: "Glory International Prim/Sec School",
    address: "10521 Veterans Ademola way",
    type: "Public school",
    time: "20 min drive",
    category: "School",
    coordinates: [3.3792, 6.5244]
  },
  {
    name: "Ikeja General Hospital",
    address: "Lagos Ave, Ikeja",
    type: "Hospital",
    time: "15 min drive",
    category: "Hospital",
    coordinates: [3.3619, 6.5802]
  },
  {
    name: "Ikeja City Mall",
    address: "Obafemi Awolowo Way, Ikeja",
    type: "Shopping Plaza",
    time: "12 min drive",
    category: "Market/Shopping Plaza",
    coordinates: [3.3633, 6.5942]
  }
]);

const filteredItems = computed(() => {
  return items.value.filter(item => item.category === activeFilter);
});

// When the user selects a location from filtered categories
const selectFilteredLocation = (item) => {
  emitLocation(item);

  // Fly the map to the selected location's coordinates
  map.value.flyTo({
    center: item.coordinates,
    zoom: 14,
  });

  // Add a marker to the selected location
  if (marker.value) {
    marker.value.remove();
  }
  marker.value = new mapboxgl.Marker()
    .setLngLat(item.coordinates)
    .addTo(map.value);
};
  </script>
  
  <style scoped>
  /* Mapbox requires some default styling for controls */
  @import 'mapbox-gl/dist/mapbox-gl.css';
  
  /* Spinner for loading search results */
  .spinner {
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #fff;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 0.8s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  </style>