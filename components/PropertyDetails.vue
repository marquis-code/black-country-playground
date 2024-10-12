<template>
  <div class="p-8">
    <div class="mb-4 flex items-center justify-between">
      <label>Is the common area furnished?</label>
      <div class="flex space-x-2 mt-2">
        <button
          @click="toggleFurnished(true)"
          :class="{ 'bg-black text-white': isFurnished, 'bg-gray-100': !isFurnished }"
          class="px-4 py-2 rounded"
        >
          Yes
        </button>
        <button
          @click="toggleFurnished(false)"
          :class="{ 'bg-black text-white': !isFurnished, 'bg-gray-100': isFurnished }"
          class="px-4 py-2 rounded"
        >
          No
        </button>
      </div>
    </div>
    <div v-for="(category, index) in visibleCategories" :key="index" class="mb-8">
      <h2 class="text-base font-medium mb-2">{{ category.title }}</h2>
      <div class="grid grid-cols-3 gap-4">
        <div
          v-for="area in category.areas"
          :key="area.id"
          @click="toggleAreaSelection(area)"
          :class="{
            'bg-green-100 border-green-500': isSelected(area),
            'bg-white': !isSelected(area)
          }"
          class="p-4 border rounded cursor-pointer flex items-center space-x-2"
        >
        <img src="@/assets/img/roomBg.png" alt="Icon" class="w-6 h-6" />
          <span class="text-sm">{{ area.name }}</span>
        </div>
      </div>
      <input
        v-model="newAreaNames[index]"
        :placeholder="'e.g ' + category.example"
        class="border p-2 text-sm border-gray-200 mt-2 w-full py-3 rounded-md"
      />
      <button
        @click="addCommonArea(category.type, category.canBeFurnished, index)"
        class="text-blue-500 mt-2"
      >
        + Add manually
      </button>
    </div>
<!-- 
    <div class="mt-8">
      <h2 class="text-lg font-bold">Selected Common Areas</h2>
      <ul class="list-disc pl-4">
        <li v-for="area in selectedCommonAreas" :key="area.id">
          {{ area.name }} ({{ area.type }} - {{ area.canBeFurnished ? 'Furnished' : 'Not Furnished' }})
        </li>
      </ul>
    </div> -->
  </div>
</template>


<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { useStorage } from '@vueuse/core';
import { useGetCommonAreas } from '@/composables/modules/property/fetchCommonAreas';
import { use_create_property } from '@/composables/modules/property/create';

interface CommonArea {
  id: string;
  name: string;
  type: 'interior' | 'exterior';
  canBeFurnished: boolean;
  houseId: string | null;
  images: string[] | null;
}

// Persisted data using `useStorage` to ensure data remains after navigation
const persistedIsFurnished = useStorage('property_isFurnishedCommonArea', false);
const persistedCommonAreas = useStorage('property_commonAreas', []);

// Fetch common areas from the composable
const { commonAreasList, getCommonAreas } = useGetCommonAreas();
const { payload } = use_create_property();

const isFurnished = ref(persistedIsFurnished.value);
const newAreaNames = ref<string[]>([]);
const selectedCommonAreas = ref<CommonArea[]>(persistedCommonAreas.value);

// Define mandatory areas that should always be included
const mandatoryInteriorAreas = [
  'Living Room',
  'Dining Area',
  'Kitchen',
  'Bathroom/Restroom',
  'Laundry Area',
  'Study/Office Area',
];
const mandatoryExteriorAreas = [
  'Garden',
  'Swimming Pool',
  'Fitness Center',
  'Rooftop Terrace',
  'Courtyard',
  'Parking Area',
  'Balcony',
  'Patio',
  'Recreational area',
];

// Function to merge mandatory areas and avoid duplicates
function mergeWithMandatoryAreas(
  filteredAreas: CommonArea[],
  mandatoryAreas: string[],
  type: 'interior' | 'exterior'
) {
  const mandatoryAreaObjects = commonAreasList.value.filter(
    (area) => area.type === type && mandatoryAreas.includes(area.name)
  );
  const combinedAreas = [...filteredAreas, ...mandatoryAreaObjects];

  // Remove duplicates by using a Map
  const uniqueAreas = new Map(combinedAreas.map((area) => [area.id, area]));
  return Array.from(uniqueAreas.values());
}

// Function to check if an area is selected
function isSelected(area: CommonArea) {
  return selectedCommonAreas.value.some(
    (selected) =>
      selected.id === area.id ||
      (selected.name === area.name && selected.type === area.type)
  );
}

const categories = computed(() => [
  {
    title: 'Interior Furnished',
    type: 'interior',
    canBeFurnished: true,
    example: 'Living room',
    areas: mergeWithMandatoryAreas(
      commonAreasList.value.filter(
        (area) => area.type === 'interior' && area.canBeFurnished
      ),
      mandatoryInteriorAreas,
      'interior'
    ),
  },
  {
    title: 'Interior Not Furnished',
    type: 'interior',
    canBeFurnished: false,
    example: 'Storage area',
    areas: mergeWithMandatoryAreas(
      commonAreasList.value.filter(
        (area) => area.type === 'interior' && !area.canBeFurnished
      ),
      mandatoryInteriorAreas,
      'interior'
    ),
  },
  {
    title: 'Exterior Furnished',
    type: 'exterior',
    canBeFurnished: true,
    example: 'Balcony',
    areas: mergeWithMandatoryAreas(
      commonAreasList.value.filter(
        (area) => area.type === 'exterior' && area.canBeFurnished
      ),
      mandatoryExteriorAreas,
      'exterior'
    ),
  },
  {
    title: 'Exterior Not Furnished',
    type: 'exterior',
    canBeFurnished: false,
    example: 'Garden',
    areas: mergeWithMandatoryAreas(
      commonAreasList.value.filter(
        (area) => area.type === 'exterior' && !area.canBeFurnished
      ),
      mandatoryExteriorAreas,
      'exterior'
    ),
  },
]);

const visibleCategories = computed(() =>
  categories.value.filter((category) => category.canBeFurnished === isFurnished.value)
);

// Initialize newAreaNames array with empty strings for each category
newAreaNames.value = Array(categories.value.length).fill('');

// Sync selected common areas with persisted storage in real-time
watch(
  selectedCommonAreas,
  (newSelectedAreas) => {
    persistedCommonAreas.value = newSelectedAreas;
    payload.commonAreas.value = newSelectedAreas;
  },
  { deep: true, immediate: true }
);

// Sync isFurnished with persisted storage in real-time
watch(
  isFurnished,
  (newIsFurnished) => {
    persistedIsFurnished.value = newIsFurnished;
    payload.isFurnishedCommonArea.value = newIsFurnished;
  }
);

// Watch for changes in payload.commonAreas and trigger getCommonAreas if it is empty
watch(
  () => payload.commonAreas.value,
  (newCommonAreas) => {
    if (!newCommonAreas.length) {
      getCommonAreas();
    }
  },
  { immediate: true }
);

function toggleFurnished(state: boolean) {
  isFurnished.value = state;
  // Clear all selected common areas when toggling between furnished and not furnished
  selectedCommonAreas.value = [];
}

function addCommonArea(type: 'interior' | 'exterior', canBeFurnished: boolean, index: number) {
  const name = newAreaNames.value[index].trim();
  if (name) {
    const newArea: CommonArea = {
      id: crypto.randomUUID(),
      name,
      type,
      canBeFurnished,
      houseId: null,
      images: [],
    };
    commonAreasList.value.push(newArea);
    selectedCommonAreas.value.push(newArea); // Immediately add the new area to selected areas
    newAreaNames.value[index] = ''; // Clear the input field after adding
  } else {
    alert('Please enter a valid name for the common area.');
  }
}

function toggleAreaSelection(area: CommonArea) {
  const index = selectedCommonAreas.value.findIndex((selected) => selected.id === area.id);
  if (index !== -1) {
    selectedCommonAreas.value.splice(index, 1); // Deselect if already selected
  } else {
    selectedCommonAreas.value.push(area); // Select if not already selected
  }
}

// function getMergedAreas() {
//   const allAreas = [...commonAreasList.value, ...selectedCommonAreas.value];
//   // Remove duplicates by using a Map with a unique key of `name + type`
//   const uniqueAreas = new Map(allAreas.map((area) => [area.name.toLowerCase() + area.type, area])
//   );
//   return Array.from(uniqueAreas.values());
// }

// Combine `commonAreasList` with `selectedCommonAreas` and remove duplicates
function getMergedAreas() {
  // Ensure `commonAreasList` is not empty
  if (!commonAreasList.value.length) {
    getCommonAreas();
  }

  const allAreas = [...commonAreasList.value, ...selectedCommonAreas.value];
  // Remove duplicates by using a Map with a unique key of `name + type`
  const uniqueAreas = new Map(
    allAreas.map((area) => [area.name.toLowerCase() + area.type, area])
  );
  return Array.from(uniqueAreas.values());
}


// // Load existing selected areas and isFurnished state when the component mounts
// onMounted(() => {
//   if (persistedCommonAreas.value.length > 0) {
//     selectedCommonAreas.value = [...persistedCommonAreas.value];
//     // Ensure that common areas are reloaded into categories if needed
//     commonAreasList.value.push(...persistedCommonAreas.value);
//   } else {
//     getCommonAreas();
//   }
//   isFurnished.value = persistedIsFurnished.value;
// });

// Ensure that `commonAreasList` is fetched on mount and when empty
onMounted(() => {
  if (!commonAreasList.value.length) {
    getCommonAreas();
  }

  if (persistedCommonAreas.value.length > 0) {
    selectedCommonAreas.value = [...persistedCommonAreas.value];
  }

  isFurnished.value = persistedIsFurnished.value;
});

watch(
  selectedCommonAreas,
  (newSelectedAreas) => {
    persistedCommonAreas.value = newSelectedAreas;
    payload.commonAreas.value = newSelectedAreas;
  },
  { deep: true, immediate: true }
);
</script>



<style scoped>
button {
  transition: background-color 0.2s ease, color 0.2s ease;
}
</style>
