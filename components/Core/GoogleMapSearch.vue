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

const typeMapping = {
  school: "Schools",
  hospital: "Hospitals",
  restaurant: "Restaurants",
  cafe: "Cafes",
  park: "Parks",
  gym: "Gyms",
  church: "Churches",
  lodging: "Hotels",
  // Add other mappings as necessary
};

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
      center: null,
      zoom: 15,
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      autocomplete: null,
      placesService: null,
      markers: [],
      locationSelected: false,
    };
  },
  mounted() {
    this.setCurrentLocation();
    if (this.payload.address.value) {
      this.$refs.searchInput.value = this.payload.address.value;
    }
    if (this.payload.latitude.value && this.payload.longitude.value) {
      this.center = {
        lat: this.payload.latitude.value,
        lng: this.payload.longitude.value,
      };
    }
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
            this.zoom = 15;
          },
          (error) => console.error("Error getting user location:", error)
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    },
    initAutocomplete() {
      const loader = new Loader({
        apiKey: this.googleMapsApiKey,
        version: "weekly",
        libraries: ["places"],
      });
      loader.load().then(() => {
        const input = this.$refs.searchInput;
        this.autocomplete = new google.maps.places.Autocomplete(input);
        this.autocomplete.addListener("place_changed", this.onPlaceChanged);
        const map = new google.maps.Map(document.createElement("div"));
        this.placesService = new google.maps.places.PlacesService(map);
      });
    },
    onPlaceChanged() {
      const place = this.autocomplete.getPlace();
      if (!place.geometry) return;
      this.center = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      this.populateSelectedLocationData(place);
      this.zoom = 15;
      this.searchNearbyAmenities();
    },
    populateSelectedLocationData(place) {
      this.$emit("update:payload", {
        ...this.payload,
        latitude: { value: place.geometry.location.lat() },
        longitude: { value: place.geometry.location.lng() },
        address: { value: place.formatted_address || place.name },
        neighbouringLandmarks: { value: [] },
      });
      this.locationSelected = true;
      this.payload.latitude.value = place.geometry.location.lat();
      this.payload.longitude.value = place.geometry.location.lng();
      this.payload.address.value = place.formatted_address || place.name;
    },
    searchNearbyAmenities() {
      if (!this.placesService) return;
      this.markers = [];
      const request = {
        location: this.center,
        radius: 1500,
        type: [
          "restaurant",
          "cafe",
          "park",
          "gym",
          "hospital",
          "school",
          "church",
        ],
      };
      this.placesService.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          this.emitAmenitiesData(results);
        }
      });
    },
    emitAmenitiesData(amenities) {
      console.log(amenities, 'here are the amenities')
      // Create a flat array to hold all amenities
      const amenitiesArray = amenities
        .map((place) => {
          const mainType = place.types.find((type) => typeMapping[type]);
          if (mainType) {
            const simplifiedType = typeMapping[mainType];

            return {
              name: place.name,
              address: place.vicinity,
              description: place.vicinity,
              latitude: place.geometry.location.lat(),
              longitude: place.geometry.location.lng(),
              type: simplifiedType,
            };
          }
        })
        .filter(Boolean); // Remove any undefined entries

      // Update markers based on the new structure
      this.markers = amenitiesArray.map((amenity) => ({
        name: amenity.name,
        location: {
          lat: amenity.latitude,
          lng: amenity.longitude,
        },
      }));

      // Emit the data as a flat array of objects
      this.$emit("update:payload", {
        ...this.payload,
        neighbouringLandmarks: { value: amenitiesArray },
      });

      this.payload.neighbouringLandmarks.value = amenitiesArray;
    },
  },
};
</script>

<style>
/* Optional styling for search box or other components */
#search-box {
  width: 100%;
  padding: 10px;
  font-size: 16px;
}
</style>
