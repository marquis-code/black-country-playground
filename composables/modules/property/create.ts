import { ref, watch } from 'vue';
import { useStorage } from '@vueuse/core';
import { property_api } from "@/api_factory/modules/property";
import { useRouter } from "vue-router";

// Initialize payload with useStorage to persist the data
const persistedPayload = {
  name: useStorage('property_name', null),
  description: useStorage('property_description', null),
  houseTypeId: useStorage('property_houseTypeId', null),
  flooringTypeId: useStorage('property_flooringTypeId', null),
  size: useStorage('property_size', null),
  sizeUnit: useStorage('property_sizeUnit', null),
  bedroomCount: useStorage('property_bedroomCount', null),
  bathroomCount: useStorage('property_bathroomCount', null),
  floorNumber: useStorage('property_floorNumber', null),
  longitude: useStorage('property_longitude', null),
  latitude: useStorage('property_latitude', null),
  images: useStorage('property_images', []),
  address: useStorage('property_address', null),
  isFurnishedCommonArea: useStorage('property_isFurnishedCommonArea', false),
  commonAreas: useStorage('property_commonAreas', []),
  neighbouringLandmarks: useStorage('property_neighbouringLandmarks', []),
  rooms: useStorage('property_rooms', []),
  agentId: useStorage('property_agentId', null),
  rules: useStorage('property_rules', []),
  questions: useStorage('property_questions', []),
};

const runtimePayload = {
  name: ref(null),
  description: ref(null),
  houseTypeId: ref(null),
  flooringTypeId: ref(null),
  size: ref(null), // Remove `Number` here, keep it as `ref`
  sizeUnit: ref(null),
  bedroomCount: ref(null), // Remove `Number` here, keep it as `ref`
  bathroomCount: ref(null), // Remove `Number` here, keep it as `ref`
  floorNumber: ref(null), // Remove `Number` here, keep it as `ref`
  longitude: ref(null),
  latitude: ref(null),
  images: ref([]),
  address: ref(null),
  isFurnishedCommonArea: ref(false),
  commonAreas: ref([]),
  neighbouringLandmarks: ref([]),
  rooms: ref([]),
  agentId: ref(null),
  rules: ref([]),
  questions: ref([])
};

// Watch for changes to runtimePayload and update persistedPayload accordingly
Object.keys(runtimePayload).forEach((key) => {
  watch(runtimePayload[key], (val) => {
    persistedPayload[key].value = val;
  }, { deep: true });
});

// Load initial data from persistedPayload into runtimePayload
(() => {
  Object.keys(runtimePayload).forEach((key) => {
    runtimePayload[key].value = persistedPayload[key].value;
  });
})();

// Function to reset the payloads to their initial state
const resetPayload = () => {
  Object.keys(runtimePayload).forEach((key) => {
    const initialValue = Array.isArray(runtimePayload[key].value) ? [] : null;
    runtimePayload[key].value = initialValue;
    persistedPayload[key].value = initialValue;
  });
  // Reset specific fields with default values
  runtimePayload.isFurnishedCommonArea.value = false;
  persistedPayload.isFurnishedCommonArea.value = false;
};

export const use_create_property = () => {
  const Router = useRouter();
  const loading = ref(false);

  // const create_property = async () => {
  //   // Convert specific fields to numbers before creating the final payload
  //   const finalPayload = Object.keys(runtimePayload).reduce((acc, key) => {
  //     acc[key] = (['size', 'bedroomCount', 'bathroomCount', 'floorNumber'].includes(key) && runtimePayload[key].value !== null)
  //       ? Number(runtimePayload[key].value)
  //       : runtimePayload[key].value;
  //     return acc;
  //   }, { isPublished: true });
  
  //   console.log(finalPayload);
  
  //   loading.value = true;
  //   try {
  //     const res = await property_api.$_create(finalPayload);
  //     if (res.type !== "ERROR") {
  //       // Property created successfully, reset the payload
  //       resetPayload();
  //       Router.push("/dashboard/property/success");
  //     }
  //   } catch (error) {
  //     console.error('Error creating property:', error);
  //   } finally {
  //     loading.value = false;
  //   }
  // };

  const create_property = async () => {
    // Remove rooms that have no features array
    const filteredRooms = runtimePayload.rooms.value
      .filter((room) => Array.isArray(room.features) && room.features.length > 0)
      .map((room) => {
        // Remove empty fields from each room
        return Object.keys(room).reduce((acc, key) => {
          const value = room[key];

          // Check if the value is non-empty and should be included
          if (
            value !== null &&
            value !== "" &&
            !(Array.isArray(value) && value.length === 0)
          ) {
            acc[key] = value;
          }

          return acc;
        }, {});
      });

    // Convert specific fields to numbers before creating the final payload
    const finalPayload = Object.keys(runtimePayload).reduce((acc, key) => {
      acc[key] = (['size', 'bedroomCount', 'bathroomCount', 'floorNumber'].includes(key) && runtimePayload[key].value !== null)
        ? Number(runtimePayload[key].value)
        : runtimePayload[key].value;
      return acc;
    }, { isPublished: true });

    // Set the cleaned and filtered rooms into the final payload
    finalPayload.rooms = filteredRooms;

    console.log(finalPayload);

    loading.value = true;
    try {
      const res = await property_api.$_create(finalPayload);
      if (res.type !== "ERROR") {
        // Property created successfully, reset the payload
        resetPayload();
        Router.push("/dashboard/property/success");
      }
    } catch (error) {
      console.error('Error creating property:', error);
    } finally {
      loading.value = false;
    }
  };
  

  return { payload: runtimePayload, create_property, loading };
};