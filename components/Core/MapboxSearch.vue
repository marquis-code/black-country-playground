 <template>
<main>
  <div class="relative w-full h-[80vh] max-w-7xl mx-auto">
    <div class="absolute top-0 z-10 w-full">
      <section class="p-2">
        <input
          v-model="searchQuery"
          @input="debouncedHandleSearch"
          type="text"
          class="p-4 outline-none rounded-t-lg py-4 pl-10 shadow-md w-full"
          placeholder="Enter location"
        />
        <div class="absolute left-3 top-6">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83594 15C4.31183 15.3431 3.33594 15.8703 3.33594 16.4614C3.33594 17.4953 6.3207 18.3333 10.0026 18.3333C13.6845 18.3333 16.6693 17.4953 16.6693 16.4614C16.6693 15.8703 15.6934 15.3431 14.1693 15" stroke="#292929" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M12.0807 7.50033C12.0807 8.65091 11.148 9.58366 9.9974 9.58366C8.84681 9.58366 7.91406 8.65091 7.91406 7.50033C7.91406 6.34973 8.84681 5.41699 9.9974 5.41699C11.148 5.41699 12.0807 6.34973 12.0807 7.50033Z" stroke="#292929" stroke-width="1.5"/>
            <path d="M11.0452 14.5783C10.7641 14.849 10.3885 15.0003 9.99756 15.0003C9.60656 15.0003 9.2309 14.849 8.94981 14.5783C6.37598 12.0843 2.92672 9.29824 4.60882 5.25343C5.51831 3.06643 7.70151 1.66699 9.99756 1.66699C12.2936 1.66699 14.4767 3.06643 15.3862 5.25343C17.0662 9.29316 13.6254 12.0929 11.0452 14.5783Z" stroke="#292929" stroke-width="1.5"/>
          </svg>          
        </div>
        <div class="absolute right-3 top-6">
          <svg v-if="Object.keys(selectedObj).length" width="20" class="cursor-pointer" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.1641 2.78184C12.9383 2.0728 11.5152 1.66699 9.9974 1.66699C5.39502 1.66699 1.66406 5.39795 1.66406 10.0003C1.66406 14.6027 5.39502 18.3337 9.9974 18.3337C14.5997 18.3337 18.3307 14.6027 18.3307 10.0003C18.3307 9.42958 18.2733 8.87216 18.1641 8.33366" stroke="#5B8469" stroke-width="2" stroke-linecap="round"/>
            <path d="M6.66406 10.417C6.66406 10.417 7.91406 10.417 9.58073 13.3337C9.58073 13.3337 14.2131 5.69477 18.3307 4.16699" stroke="#5B8469" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <svg v-else @click="handleClose" class="cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.8307 4.16699L4.16406 15.8337M4.16406 4.16699L15.8307 15.8337" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
      </section>
      <!-- Dropdown suggestions -->
      <section class="absolute w-full top-12">
      <div class="px-2">
        <ul
        v-if="suggestions.length > 0"
        class="space-y-1 bg-white shadow-lg rounded-b-lg max-h-60 overflow-y-auto scrollbar-none z-20 mt-2 p-2"
      >
        <li
          v-for="(suggestion, index) in suggestions"
          :key="index"
          class="p-4 cursor-pointer hover:bg-gray-100 flex items-center gap-x-3"
          @click="selectLocation(suggestion)"
        >
          <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.07847 14.7443C8.7894 15.015 8.40293 15.1663 8.00073 15.1663C7.59853 15.1663 7.21213 15.015 6.923 14.7443C4.27535 12.2503 0.727174 9.46427 2.45751 5.41945C3.39309 3.23245 5.63889 1.83301 8.00073 1.83301C10.3626 1.83301 12.6084 3.23245 13.544 5.41945C15.2721 9.45921 11.7327 12.2589 9.07847 14.7443Z" fill="#5B8469" stroke="#5B8469"/>
            <path d="M10.3307 7.83333C10.3307 9.122 9.28606 10.1667 7.9974 10.1667C6.70873 10.1667 5.66406 9.122 5.66406 7.83333C5.66406 6.54467 6.70873 5.5 7.9974 5.5C9.28606 5.5 10.3307 6.54467 10.3307 7.83333Z" fill="white" stroke="#5B8469"/>
          </svg>
          <span class="text-sm">{{ suggestion.place_name }}</span>
        </li>
      </ul>
      </div>
      </section>
      <!-- Loading spinner when searching -->
      <div v-if="loading" class="absolute inset-0 flex items-center justify-center">
        <div class="spinner border-t-4 border-indigo-500 rounded-full w-6 h-6 animate-spin"></div>
      </div>
    </div>

    <!-- Error handling message -->
    <div v-if="errorMessage" class="absolute top-24 left-5 z-10 bg-red-500 text-white p-4 rounded-lg">
      {{ errorMessage }}
    </div>

    <!-- Mapbox Map -->
    <div ref="mapContainer" class="w-full h-full rounded-xl border-2 border-gray-200"></div>
  </div>
  <slot name="action-buttons"></slot>
</main>
  </template>
  
  <script setup lang="ts">
  import axios from "axios";
import mapboxgl from 'mapbox-gl';
import debounce from 'lodash.debounce';
import 'mapbox-gl/dist/mapbox-gl.css';
const route = useRoute()
// Props
const props = defineProps({
  payload: {
    type: Object,
    default: () => ({ latitude: ref(null), longitude: ref(null), address: ref('') }),
  },
});

// Emits
const emit = defineEmits(['locationSelected']);

const map = ref<mapboxgl.Map | null>(null);
const mapContainer = ref<HTMLDivElement | null>(null);
  const searchQuery = ref<string>(props.payload.address.value || ''); // Initialize with the existing address

if(route.query.id){
  searchQuery.value = props.payload.address
}

const suggestions = ref<any[]>([]);
const marker = ref<mapboxgl.Marker | null>(null);
const loading = ref<boolean>(false); // For displaying loading spinner
const errorMessage = ref<string | null>(null); // Error handling for search failures

const handleClose = () => {
  suggestions.value = []
}


// Watch for changes in props.payload.address and update searchQuery
watch(
  () => props.payload.address.value,
  (newAddress) => {
    if (newAddress) {
      searchQuery.value = newAddress;
    }
  },
  { immediate: true } // Ensures the watch triggers immediately
);



// Mapbox access token (replace with your own)
const accessToken = 'pk.eyJ1IjoibWFycXVpczE5OTktIiwiYSI6ImNrenJic2xubjB1OXQycGxnMGp2a2NvM2kifQ.7S-nXi_BJHFzVXUlgK8VTg';

// Bounding box for Lagos, Nigeria
const mapBounds = [
  [3.0, 6.4],  // Southwest coordinates
  [4.0, 6.6],   // Northeast coordinates
];

onMounted(() => {
  mapboxgl.accessToken = accessToken;
  // props.payload.

  // Get user's current location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;

        // Initialize Mapbox map centered at the user's current location
        map.value = new mapboxgl.Map({
          container: mapContainer.value!,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [userLon, userLat], // Center at the user's location
          zoom: 12, // Set a reasonable zoom level
        });

        // Add marker for user's location
        new mapboxgl.Marker()
          .setLngLat([userLon, userLat])
          .addTo(map.value);

        // Add navigation control (zoom in/out)
        map.value.addControl(new mapboxgl.NavigationControl());

        // If an existing location is already present in the payload, move to that
        if (props.payload.latitude.value && props.payload.longitude.value) {
          const el = document.createElement('div');
          el.className =
            'marker bg-indigo-600 flex items-center gap-x-2 text-gray-800 text-sm p-2 py-4 font-light rounded-lg shadow-md bg-white';
          el.innerHTML = `<strong>
            <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.07847 14.2443C7.7894 14.515 7.40293 14.6663 7.00073 14.6663C6.59853 14.6663 6.21213 14.515 5.923 14.2443C3.27535 11.7503 -0.272826 8.96427 1.45751 4.91945C2.39309 2.73245 4.63889 1.33301 7.00073 1.33301C9.3626 1.33301 11.6084 2.73245 12.544 4.91945C14.2721 8.95921 10.7327 11.7589 8.07847 14.2443Z" fill="#5B8469" stroke="#5B8469"/>
            </svg> Your saved address </strong>`;

          marker.value = new mapboxgl.Marker(el)
            .setLngLat([props.payload.longitude.value, props.payload.latitude.value])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 }).setText(props.payload.address.value)
            )
            .addTo(map.value);

          // Fly to the saved address
          map.value.flyTo({ center: [props.payload.longitude.value, props.payload.latitude.value], zoom: 14 });
        }
      },
      (error) => {
        console.error("Error getting user's location:", error);
        initializeDefaultMap(); // Fallback to default map initialization
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
    initializeDefaultMap(); // Fallback to default map initialization
  }

  // Handle window resize to make map responsive
  window.addEventListener('resize', () => {
    map.value!.resize();
  });
});

// Function to initialize the map at a default location
const initializeDefaultMap = () => {
  map.value = new mapboxgl.Map({
    container: mapContainer.value!,
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.0060, 40.7128], // Default to a central location, e.g., New York City
    zoom: 2, // Zoomed out to show more of the map initially
  });

  // Add navigation control (zoom in/out)
  map.value.addControl(new mapboxgl.NavigationControl());
};

const handleSearch = async () => {
  if (searchQuery.value.length > 2) {
    loading.value = true;
    errorMessage.value = null;

    try {
      // Fetch location suggestions from Mapbox Geocoding API
      const response = await fetch(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchQuery.value}.json?access_token=${accessToken}`
      );

      if (!response.ok) {
        throw new Error('Failed to fetch locations');
      }

      const data = await response.json();

      // Handle empty search results
      if (data.features.length === 0) {
        errorMessage.value = 'No locations found. Please try another search.';
      }

      suggestions.value = data.features;
    } catch (error) {
      errorMessage.value = 'Error occurred while searching. Please try again.';
    } finally {
      loading.value = false;
    }
  } else {
    suggestions.value = [];
    errorMessage.value = null;
  }
};

const selectedObj = ref({}) as any

const debouncedHandleSearch = debounce(handleSearch, 300);


const selectLocation = (location: any) => {
  // Move map to selected location
  const [lng, lat] = location.center;

  map.value!.flyTo({ center: [lng, lat], zoom: 14 });

  // Remove existing marker, if any
  if (marker.value) {
    marker.value.remove();
  }

  // Create a custom marker with text
  const el = document.createElement('div');
  el.className = 'marker bg-indigo-600 flex items-center gap-x-2 text-gray-800 text-sm p-2 py-4 font-light rounded-lg shadow-md bg-white';
  el.innerHTML = `<strong>
    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.07847 14.2443C7.7894 14.515 7.40293 14.6663 7.00073 14.6663C6.59853 14.6663 6.21213 14.515 5.923 14.2443C3.27535 11.7503 -0.272826 8.96427 1.45751 4.91945C2.39309 2.73245 4.63889 1.33301 7.00073 1.33301C9.3626 1.33301 11.6084 2.73245 12.544 4.91945C14.2721 8.95921 10.7327 11.7589 8.07847 14.2443Z" fill="#5B8469" stroke="#5B8469"/>
</svg> Address is saved and will be shared with potential tenants. Click on next proceed</strong>`;

  marker.value = new mapboxgl.Marker(el)
    .setLngLat([lng, lat])
    .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(location.place_name))
    .addTo(map.value);

  const locationInfo = {
    address: location.place_name,
    latitude: lat,
    longitude: lng,
  };

  selectedObj.value = locationInfo;

  // Emit the location details
  emit('locationSelected', {
    address: location.place_name,
    latitude: lat,
    longitude: lng,
  });

  // Update the payload props with the selected location's data
  props.payload.latitude.value = lat;
  props.payload.longitude.value = lng;
  props.payload.address.value = location.place_name;

  // Call the searchAmenities function to fetch amenities
  searchAmenities(lat, lng);

  suggestions.value = [];
  searchQuery.value = location.place_name;
};
const searchAmenities = async (lat: number, lon: number) => {
  loading.value = true;
  const amenityTypes = ['hospital', 'school'];
  const amenitiesResults: any[] = [];

  try {
    for (const amenityType of amenityTypes) {
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

      const fetchedAmenities = response.data.map((facility: any) => ({
        // ...facility,
        // id: facility.place_id,
        name: facility.name || amenityType, // Use `amenityType` if the name is missing
        description: facility.display_name,
        latitude: facility.lat,
        longitude: facility.lon,
        type: amenityType,
      }));

      // Add to amenitiesResults
      amenitiesResults.push(...fetchedAmenities);
      console.log(amenitiesResults, 'Final amenities')
      props.payload.neighbouringLandmarks.value = amenitiesResults
    }

    // Remove previous markers
    map.value.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        map.value.removeLayer(layer);
      }
    });

    // Update the amenities array
    amenities.value = amenitiesResults;

    // Add markers to the map for each fetched amenity
    amenities.value.forEach((facility: any) => {
      L.marker([facility.lat, facility.lon])
        .addTo(map.value)
        .bindPopup(`Amenity: ${facility.name}`);
    });

    // Append fetched amenities to `props.payload.neighbouringLandmarks`
    props.payload.neighbouringLandmarks.value = [
      ...(props.payload.neighbouringLandmarks.value || []),
      ...amenities.value,
    ];

    searched.value = true;
    showDropdown.value = true;
  } catch (error) {
    console.error("Error fetching amenities:", error);
  } finally {
    loading.value = false;
  }
};


</script>
  

  <style scoped>
  /* Custom styles for the loading spinner */
  .spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #6366f1; /* Tailwind Indigo 500 */
    border-radius: 50%;
    width: 24px;
    height: 24px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  
  /* Marker customization */
  .marker {
    display: flex;
    min-width: 100px;
    text-align: center;
  }
</style>