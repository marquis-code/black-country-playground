<template>
<main>
  <div v-if="!route?.params?.id?.length">
    <div class="flex justify-between items-center">
      <div>
        <!-- {{editPayload}} -->
        <h4 class="font-light text-[#667185]">Property name</h4>
        <p>{{payload?.name?.value}}</p>
      </div>
      <button @click="router.push('/dashboard/property/new')" class="text-green-600 font-semibold">Edit</button>
    </div>
    <div class="mt-4">
      <h4 class="font-light text-[#667185]">Brief description</h4>
      <p class="text-sm text-[#1D2739]">{{payload?.description?.value}}</p>
      <a href="#" class="text-blue-500">View more</a>
    </div>                            
    <div class="mt-4 grid grid-cols-2 gap-4">
      <div>
        <h4 class="font-light text-[#667185]">Building/property type</h4>
        <p class="text-sm text-[#1D2739]">{{ propertyObj?.name }}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Floor type</h4>
        <p class="text-sm text-[#1D2739]">{{ floorObj?.name }}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Property size</h4>
        <p class="text-sm text-[#1D2739]">{{ payload?.size?.value }} {{payload?.sizeUnit?.value}}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Number of bedrooms</h4>
        <p class="text-sm text-[#1D2739]">{{ payload?.bathroomCount?.value  }}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Number of bathrooms/Rest room</h4>
        <p class="text-sm text-[#1D2739]">{{ payload?.bathroomCount?.value }}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Property location</h4>
        <p class="text-sm text-[#1D2739]">{{ payload?.address?.value  }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex justify-between items-center">
      <div>
        <!-- {{editPayload}} -->
        <h4 class="font-light text-[#667185]">Property name</h4>
        <p>{{editPayload?.name?.value}}</p>
      </div>
      <button @click="router.push('/dashboard/property/new')" class="text-green-600 font-semibold">Edit</button>
    </div>
    <div class="mt-4">
      <h4 class="font-light text-[#667185]">Brief description</h4>
      <p class="text-sm text-[#1D2739]">{{editPayload?.description?.value}}</p>
      <a href="#" class="text-blue-500">View more</a>
    </div>                            
    <div class="mt-4 grid grid-cols-2 gap-4">
      <div>
        <h4 class="font-light text-[#667185]">Building/property type</h4>
        <p class="text-sm text-[#1D2739]">{{ editPropertyObj?.name }}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Floor type</h4>
        <p class="text-sm text-[#1D2739]">{{ editFloorObj?.name }}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Property size</h4>
        <p class="text-sm text-[#1D2739]">{{ editPayload?.size?.value }} {{editPayload?.sizeUnit?.value}}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Number of bedrooms</h4>
        <p class="text-sm text-[#1D2739]">{{ editPayload?.bathroomCount?.value  }}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Number of bathrooms/Rest room</h4>
        <p class="text-sm text-[#1D2739]">{{ editPayload?.bathroomCount?.value }}</p>
      </div>
      <div>
        <h4 class="font-light text-[#667185]">Property location</h4>
        <p class="text-sm text-[#1D2739]">{{ editPayload?.address?.value  }}</p>
      </div>
    </div>
  </div>
</main>
  </template>
  
  <script setup lang="ts">
import { useGetFloorings } from '@/composables/modules/property/fetchFloorings'
import { useGetPropertyTypes } from '@/composables/modules/property/fetchPropertyTypes'
const { propertyTypesList, getPropertyTypes } = useGetPropertyTypes()
const { flooringsList, geFloorings  } = useGetFloorings()

const route = useRoute()

import { useEditProperty } from '@/composables/modules/property/update'
  const { payload:editPayload, loading:editLoading }  = useEditProperty()

  const router = useRouter()
    import { use_create_property } from '@/composables/modules/property/create'
  const { payload, create_property, loading } = use_create_property()
  interface Property {
    name: string
    description: string
    type: string
    floor: string
    size: string
    bedrooms: number
    bathrooms: number
    location: string
  }

  const props = defineProps<{
    property: Property
  }>()

  const floorObj = computed(() => {
    return flooringsList.value.find((item) => item.id === payload.flooringTypeId.value)
  })

  const propertyObj = computed(() => {
    return propertyTypesList.value.find((item) => item.id ===  payload.houseTypeId.value)
  })

  const editFloorObj = computed(() => {
    return flooringsList.value.find((item) => item.id === editPayload.flooringTypeId.value)
  })

  const editPropertyObj = computed(() => {
    return propertyTypesList.value.find((item) => item.id ===  editPayload.houseTypeId.value)
  })
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  