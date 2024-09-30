<template>
  <div>
   <div class="relative">
    <svg class="absolute left-3 top-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.83594 15C4.31183 15.3431 3.33594 15.8703 3.33594 16.4614C3.33594 17.4953 6.3207 18.3333 10.0026 18.3333C13.6845 18.3333 16.6693 17.4953 16.6693 16.4614C16.6693 15.8703 15.6934 15.3431 14.1693 15" stroke="#292929" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M12.0807 7.50033C12.0807 8.65091 11.148 9.58366 9.9974 9.58366C8.84681 9.58366 7.91406 8.65091 7.91406 7.50033C7.91406 6.34973 8.84681 5.41699 9.9974 5.41699C11.148 5.41699 12.0807 6.34973 12.0807 7.50033Z" stroke="#292929" stroke-width="1.5"/>
      <path d="M11.0452 14.5783C10.7641 14.849 10.3885 15.0003 9.99756 15.0003C9.60656 15.0003 9.2309 14.849 8.94981 14.5783C6.37598 12.0843 2.92672 9.29824 4.60882 5.25343C5.51831 3.06643 7.70151 1.66699 9.99756 1.66699C12.2936 1.66699 14.4767 3.06643 15.3862 5.25343C17.0662 9.29316 13.6254 12.0929 11.0452 14.5783Z" stroke="#292929" stroke-width="1.5"/>
      </svg>
      
    <input
      ref="searchInput"
      type="text"
      placeholder="Search for a location"
      class="py-3 w-full pl-10 outline-none border border-gray-100 rounded-t-md"
    />
    <svg v-if="locationSelected"  class="absolute right-3 top-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.1641 2.78184C12.9383 2.0728 11.5152 1.66699 9.9974 1.66699C5.39502 1.66699 1.66406 5.39795 1.66406 10.0003C1.66406 14.6027 5.39502 18.3337 9.9974 18.3337C14.5997 18.3337 18.3307 14.6027 18.3307 10.0003C18.3307 9.42958 18.2733 8.87216 18.1641 8.33366" stroke="#5B8469" stroke-width="2" stroke-linecap="round"/>
      <path d="M6.66406 10.417C6.66406 10.417 7.91406 10.417 9.58073 13.3337C9.58073 13.3337 14.2131 5.69477 18.3307 4.16699" stroke="#5B8469" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      
   </div>
    <GoogleMap
      :api-key="googleMapsApiKey"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="zoom"
    >
      <Marker 
        :options="{
          position: center, 
          icon: userIcon 
        }" 
      />
      <!-- <Marker
        v-for="(marker, index) in markers"
        :key="index"
        :options="{
          position: marker.location, 
          icon: amenityIcon 
        }"
      /> -->
    </GoogleMap>
  </div>
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";
import { Loader } from "@googlemaps/js-api-loader";
const userIcon = '@/assets/icons/current-location.svg'; // Add a URL for the user icon
const amenityIcon = '@/assets/icons/current-location.svg'; // Add a URL for the amenity icon

export default {
  name: "App",
  components: { GoogleMap, Marker },
  props: {
    payload: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // center: { lat: 40.689247, lng: -111.044502 }, // Default to a general location
      center: null,
      zoom: 15,
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      autocomplete: null, // This will hold the autocomplete object
      placesService: null, // To handle the Places API service
      markers: [], // Store markers for amenities,
      locationSelected: false,
    };
  },
  // mounted() {
  //   // Set map center to the user's current location on mount
  //   this.setCurrentLocation();
  //   this.payload.latitude.value = 
  //   this.payload.longitude.value = 
  //   this.payload.address.value = 

  //   // Initialize Autocomplete once the component is mounted
  //   this.initAutocomplete();
  // },
  mounted() {
    this.setCurrentLocation();
  // Set the initial input value for the search field
  if (this.payload.address.value) {
    this.$refs.searchInput.value = this.payload.address.value; // Set input field value
  }

  // If latitude and longitude are provided, set the center
  if (this.payload.latitude.value && this.payload.longitude.value) {
    this.center = {
      lat: this.payload.latitude.value,
      lng: this.payload.longitude.value,
    };
  }

  // Initialize Autocomplete once the component is mounted
  this.initAutocomplete();
},
  methods: {
    setCurrentLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.zoom = 15; // Adjust the zoom level if needed
          },
          (error) => {
            console.error("Error getting user location: ", error);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    initAutocomplete() {
      // Load Google Maps places library
      const loader = new Loader({
        apiKey: this.googleMapsApiKey,
        version: "weekly",
        libraries: ["places"],
      });

      loader
        .load()
        .then(() => {
          const input = this.$refs.searchInput;
          this.autocomplete = new google.maps.places.Autocomplete(input);

          // Add a listener for the place changed event
          this.autocomplete.addListener("place_changed", this.onPlaceChanged);

          // Initialize Places service for nearby searches
          const map = new google.maps.Map(document.createElement('div')); // Temporary map for places service
          this.placesService = new google.maps.places.PlacesService(map);
        })
        .catch((error) => {
          console.error("Error loading Google Maps API:", error);
        });
    },
    onPlaceChanged() {
      const place = this.autocomplete.getPlace();

      if (!place.geometry) {
        console.error("No details available for the selected place");
        return;
      }

      // Update the map center to the new location
      this.center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      // Populate selected location data into props
      this.populateSelectedLocationData(place);

      // Optionally, update the zoom level to fit the selected place better
      this.zoom = 15;

      // Search for amenities near the selected place
      this.searchNearbyAmenities();
    },
    populateSelectedLocationData(place) {
      // Set the payload values with selected location data
      this.$emit('update:payload', {
        ...this.payload,
        latitude: { value: place.geometry.location.lat() },
        longitude: { value: place.geometry.location.lng() },
        address: { value: place.formatted_address || place.name }, // Using formatted_address or place name
        neighbouringLandmarks: { value: [] } // Initialize as an empty array for now
      });
      this.locationSelected = true;
      this.payload.latitude.value = place.geometry.location.lat()
      this.payload.longitude.value = place.geometry.location.lng()
      this.payload.address.value = place.formatted_address || place.name
    },
    searchNearbyAmenities() {
      if (!this.placesService) {
        console.error("Places Service not initialized");
        return;
      }

      // Clear previous markers
      this.markers = [];

      // Set up request parameters for the nearby search
      const request = {
        location: this.center,
        radius: 1500, // Define the radius (in meters) to search for amenities
        type: ['restaurant', 'cafe', 'park', 'gym', 'hospitals', 'schools', 'church'], // Add more amenity types as needed
      };

      // Perform the nearby search
      this.placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          // Emit the amenities found
          this.emitAmenitiesData(results);
        } else {
          console.error("Error retrieving nearby amenities: ", status);
        }
      });
    },
    emitAmenitiesData(amenities) {
      // Format and emit the amenities data to the parent component
      const formattedAmenities = amenities.map((place) => ({
        name: place.name,
        type: place.types.join(", "), // Joining types for display
        description: place.vicinity, // Description can be set to vicinity or custom
        longitude: place.geometry.location.lng(),
        latitude: place.geometry.location.lat(),
        address: place.vicinity,
      }));

      // Store markers for each amenity
      this.markers = formattedAmenities.map(amenity => ({
        name: amenity.name,
        location: {
          lat: amenity.latitude,
          lng: amenity.longitude,
        },
      }));

      // Update props with neighbouring landmarks data
      this.$emit('update:payload', {
        ...this.payload,
        neighbouringLandmarks: { value: formattedAmenities },
      });

      this.payload.neighbouringLandmarks.value = formattedAmenities

      // Example of how to log the amenities data
      console.log("Nearby amenities:", formattedAmenities);
    },
  },
};
</script>

<style>
/* Optional Styling */
#search-box {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>