<template>
  <div>
    <!-- Button to open modal -->
    <button @click="showModal = true" class="bg-blue-500 text-white px-4 py-2 rounded">
      Configure Table
    </button>

    <!-- Modal for toggling columns -->
    <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div class="bg-white p-4 rounded shadow-lg w-1/3">
        <h2 class="text-lg font-bold mb-4">Configure Table</h2>
        <div v-for="(column, index) in columns" :key="index" class="flex items-center mb-2">
          <span class="flex-1">{{ column.label }}</span>
          <input type="checkbox" v-model="column.visible" />
        </div>
        <div class="flex justify-between mt-4">
          <button @click="resetColumns" class="bg-gray-300 text-black px-4 py-2 rounded">Reset</button>
          <button @click="saveColumns" class="bg-black text-white px-4 py-2 rounded">Save</button>
        </div>
      </div>
    </div>

    <!-- Table -->
    <table class="min-w-full border-collapse">
      <thead>
        <tr>
          <th v-for="column in visibleColumns" :key="column.key" class="px-4 py-2 border">
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(property, rowIndex) in properties" :key="property.id">
          <td v-for="column in visibleColumns" :key="column.key" class="px-4 py-2 border">
            {{ getPropertyValue(property, column.key) }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td v-for="column in visibleColumns" :key="column.key" class="px-4 py-2 border">
            <!-- Placeholder for footer content -->
            Footer {{ column.label }}
          </td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const showModal = ref(false)

// Columns data
const columns = ref([
  { label: 'Property Name', key: 'name', visible: true },
  { label: 'Property Type', key: 'houseType.name', visible: true },
  { label: 'Location', key: 'address', visible: true },
  { label: 'Rooms Occupied', key: 'availableRoomsCount', visible: false },
  { label: 'Rooms Count', key: 'bedroomCount', visible: true },
  { label: 'Bathroom Count', key: 'bathroomCount', visible: false },
  { label: 'Agents/Property Managers', key: 'agent.firstName', visible: false },
])

// Sample data for the table from the backend
const properties = ref([
  {
    id: "5f66fb8c-09a3-4e37-be27-2d7fbf961bf1",
    name: "Acme props block 1",
    description: "Acme Real Estate",
    houseTypeId: "cb7d7653-0b84-4a90-a918-8e69f17ff899",
    flooringTypeId: "43bbe094-cce0-4706-b430-6c7d1ed4c54f",
    size: "300",
    sizeUnit: "sq ft",
    bedroomCount: 5,
    bathroomCount: 7,
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    floorNumber: 2,
    countryId: null,
    stateId: null,
    cityId: null,
    coordinates: {
      type: "Point",
      coordinates: [
        3.406448,
        6.465422
      ]
    },
    address: "Broad street lagos island",
    isFurnishedCommonArea: true,
    isPublished: true,
    deletedAt: null,
    createdAt: "2024-09-09T12:30:19.392Z",
    updatedAt: "2024-09-09T12:30:19.392Z",
    agent: {
      id: "a14b6ad1-a663-45e3-aa06-4f8dc19907a1",
      firstName: "Prince",
      lastName: "Ita",
      email: "prince1659@mailinator.com",
      isEmailVerified: true,
      isActive: true,
      createdAt: "2024-09-06T03:13:32.717Z",
      updatedAt: "2024-09-06T03:13:32.717Z",
      deletedAt: null,
      authProvider: "bc"
    },
    houseType: {
      id: "cb7d7653-0b84-4a90-a918-8e69f17ff899",
      name: "Pent House",
      createdAt: "2024-09-09T12:10:16.140Z",
      updatedAt: "2024-09-09T12:10:16.140Z"
    },
    availableRoomsCount: 1,
    unavailableRoomsCount: 0,
    futureAvailableRoomsCount: 0,
    leastAvailableDate: null
  }
])

// Computed property to get only visible columns
const visibleColumns = computed(() => {
  return columns.value.filter(column => column.visible)
})

// Function to extract nested properties
const getPropertyValue = (property: any, key: string) => {
  return key.split('.').reduce((obj, k) => obj && obj[k], property) || 'N/A'
}

// Function to reset columns visibility
const resetColumns = () => {
  columns.value.forEach(column => {
    column.visible = true // Reset all to visible
  })
  showModal.value = false
}

// Function to save the changes and close modal
const saveColumns = () => {
  showModal.value = false
}
</script>

<style scoped>
/* Add any custom styles here */
</style>
