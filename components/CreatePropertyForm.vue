<template>
    <form class="space-y-4">
        <div class="space-y-1">
          <label for="property-name" class="block font-medium text-[#1D2739] text-sm">Property name</label>
          <input
            type="text"
            name="property-name"
            id="property-name"
            v-model="payload.name.value"
            class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
            placeholder="Enter property Name"
          />
        </div>
        <div class="space-y-1">
          <label for="property-description" class="block font-medium text-[#1D2739] text-sm"
            >Brief description</label
          >
          <textarea
            rows="6"
            cols="6"
            name="property-description"
            id="property-description"
            v-model="payload.description.value"
            class="w-full px-4 py-2 resize-none border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
            placeholder="Enter property description"
          ></textarea>
        </div>
        <div class="space-y-1">
          <label for="property-type" class="block font-medium text-[#1D2739] text-sm"
            >Building/property type</label
          >
          <select
          name="property-type"
          id="property-type"
          v-model="payload.houseTypeId.value"
          class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
          >
           <option value="">Select property type</option>
           <option :value="item.id" v-for="(item, idx) in propertyTypesList" :key="idx">
            {{ item.name }}
           </option>
          </select>
        </div>
        <div class="space-y-1">
          <label for="flooring-type" class="block font-medium text-[#1D2739] text-sm">Flooring type</label>
          <select
          name="flooring-type"
          id="flooring-type"
          v-model="payload.flooringTypeId.value"
          class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
          >
           <option :value="item.id" v-for="(item, idx) in flooringsList" :key="idx">
            {{ item.name }}
           </option>
          </select>
        </div>
        <div class="space-y-1">
          <label name="property-size-unit" for="property-size" class="block text-sm font-medium text-gray-700">Property size</label>
          <div class="mt-1 relative rounded-md shadow-sm">
            <!-- Dropdown Select embedded -->
            <div class="absolute inset-y-0 left-0 flex items-center">
              <select
                name="property-size-unit"
                id="property-size-unit"
                v-model.number="payload.sizeUnit.value"
                class="focus:ring-indigo-500 text-lg focus:border-indigo-500 outline-none h-full py-0 pl-3 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md">
                <option v-for="item in propertyUnits" :key="item" :value="item">{{item}}</option>
              </select>
            </div>
            <!-- Input field -->
            <label name="property-size" for="property-size" class="block sr-only text-sm font-medium text-gray-700">Property size</label>
            <input
             type="tel"
              name="property-size"
              id="property-size"
              v-model.number="payload.size.value"
              class="w-full px-4 py-3.5 pl-32 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
              placeholder="e.g 1000"
            />
          </div>
        </div>
        <div class="flex justify-between items-center">
          <label for="floor-number" class="block font-medium text-[#1D2739] text-sm">Floor number</label>
          <div class="flex items-center space-x-2">
            <button
              type="button"
              @click="handleFloorNumberDecrease"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              -
            </button>
            <input
            type="tel"
            name="floor-number"
              id="floor-number"
              class="text-center bg-[#292929] text-white w-16 px-4 py-2 border rounded-lg"
              v-model.number="payload.floorNumber.value"
            />
            <button
              type="button"
              @click="payload.floorNumber.value ++"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <label name="bedroom-count" class="block font-medium text-[#1D2739] text-sm">Number of bedrooms</label>
          <div class="flex items-center space-x-2">
            <button
              @click="handleBedroomNumberDecrease"
              type="button"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              -
            </button>
            <input
            type="tel"
            name="bedroom-count"
            id="bedroom-count"
              class="text-center bg-[#292929] text-white w-16 px-4 py-2 border rounded-lg"
              v-model.number="payload.bedroomCount.value"
            />
            <button
              @click="payload.bedroomCount.value ++"
              type="button"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        <div class="flex pb-20 justify-between items-center">
          <label for="bathroom-count" class="block font-medium text-[#1D2739] text-sm"
            >Number of bathrooms/Restrooms</label
          >
          <div class="flex items-center space-x-2">
            <button
              type="button"
              @click="handleBathroomNumberDecrease"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              -
            </button>
            <input
              type="tel"
              name="bathroom-count"
              id="bathroom-count"
              class="text-center bg-[#292929] text-white w-16 px-4 py-2 border rounded-lg"
              v-model.number="payload.bathroomCount.value"
            />
            <button
              type="button"
              @click="payload.bathroomCount.value ++"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>
        </div>

      <slot name="action-buttons" />
      </form>
</template>

<script setup lang="ts">
import { useGetPropertyTypes } from '@/composables/modules/property/fetchPropertyTypes'
import { useGetFloorings } from '@/composables/modules/property/fetchFloorings'
const { propertyTypesList } = useGetPropertyTypes()
const { flooringsList } = useGetFloorings()
const props = defineProps<{ payload: any }>()


const emit = defineEmits<{
  (e: 'updateFormData', data: any): void
}>()

// function updateParentFormData() {
//   emit('updateFormData', localFormData.value)
// }

// Watch for changes in the props and update localFormData
// watch(
//   () => props.formData,
//   (newFormData: any) => {
//     localFormData.value = { ...newFormData }
//   },
//   { deep: true } // Make sure deep watch is enabled to track changes within objects
// )

// Emit updated form data to parent component when inputs change
// watch(
//   localFormData,
//   (updatedFormData: any) => {
//     emit('updateFormData', updatedFormData)
//   },
//   { deep: true }
// )

const handleFloorNumberDecrease = () => {
  if(props.payload.value.floorNumber === 0) return 
  props.payload.value.floorNumber --
}

const handleBedroomNumberDecrease = () => {
  if(props.payload.bedroomCount.value === 0) return 
  props.payload.bedroomCount.value --
}

const handleBathroomNumberDecrease = () => {
  if(props.payload.bathroomCount.value === 0) return 
  props.payload.bathroomCount.value --
}

const propertyUnits = [
  "sqm",
  "acre",
  "hectare",
  "sq ft",
  "sq in",
  "sq yd",
  "sq mi",
  "are",
  "centiare",
  "rood",
  "section",
  "perch"
];

</script>
