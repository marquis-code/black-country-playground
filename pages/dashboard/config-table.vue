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

definePageMeta({
     middleware: 'auth'
})

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
