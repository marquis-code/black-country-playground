<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
      <h2 class="text-lg font-medium mb-4">Generate lease agreement</h2>
      <div class="space-y-6">
        <div>
          <PropertySelector @property-selected="handleSelectedProperty" v-model="selectedProperty" label="Choose a Property" />
        </div>

       <section>
        <div v-if="!loadingTenants" class="space-y-1">
          <CoreGeneralSelector
            v-model="selectedItem"
            :options="tenantsList"
            :loading="loadingTenants"
            label="Select Tenant"
            track-by="id"
            label-key="firstName"
            @search-change="getTenantsWithActiveRentals"
            @option-selected="handleSelection"
          />
        </div>
        <div v-if="loadingTenants" class="h-14 animate-pulse w-full bg-slate-200 rounded col-span-2"></div>
       </section>

        <section class="flex justify-between items-center gap-x-6 w-full mt-6">
          <div class="w-full">
            <label class="block text-sm pb-1 font-medium text-[#6E717C]">Start Date</label>
            <input v-model="payload.startDate" type="date" placeholder="select start date" class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none" />
          </div>
          <div class="w-full">
            <label class="block text-sm pb-1 font-medium text-[#6E717C]">End date</label>
            <input v-model="payload.endDate" type="date" placeholder="select end date" class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none" />
          </div>
        </section>
        <div v-if="startDate && endDate && diffInDays < 365" class="text-red-500 text-sm">
          The lease duration must be at least one year.
        </div>

        <div>
          <label class="block text-sm pb-1 font-medium text-[#6E717C]">Lease document title</label>
          <input v-model="payload.documentName" type="text" placeholder="Enter title" class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none" />
        </div>
      </div>

      <div class="mt-10 flex justify-between gap-x-6">
        <button class="bg-[#EBE5E0] font-semibold text-[#292929] w-full px-4 py-3.5 text-sm rounded-md" @click="closeModal">Cancel</button>
        <button  :disabled="isFormEmpty" class="bg-[#292929] disabled:cursor-not-allowed disabled:opacity-25 font-semibold w-full text-white px-4 py-3.5 text-sm rounded-md" @click="applyFilters">Continue</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCreateLeaseTemplate } from '@/composables/modules/lease/create'
import { useGetTenantsWithActiveRentals } from '@/composables/modules/property/fetchTenantWithActiveRentalApplication'
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();

const { getTenantsWithActiveRentals, tenantsList, houseId, loadingTenants } = useGetTenantsWithActiveRentals()
const { payload } = useCreateLeaseTemplate()
const router = useRouter()

// Check if the form is empty
const isFormEmpty = computed(() => {
  const startDate = new Date(payload.value.startDate)
  const endDate = new Date(payload.value.endDate)
  const diffInDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))

  return (
    !payload.value.endDate || 
    !payload.value.startDate || 
    !payload.value.documentName || 
    !selectedItem.value.id || 
    !selectedProperty.value || 
    diffInDays < 365
  )
})

watch([() => payload.value.startDate, () => payload.value.endDate], ([newStartDate, newEndDate]) => {
  if (newStartDate && newEndDate) {
    const startDate = new Date(newStartDate)
    const endDate = new Date(newEndDate)
    const diffInDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))

    if (diffInDays < 365) {
      showToast({
          title: "Error",
          message: "The lease duration must be at least one year.",
          toastType: "error",
          duration: 3000
        });
    }
  }
})

const selectedProperty = ref(null)
const selectedItem = ref({})

const templateObj = ref({})
onMounted(() => {
  const parsedData = JSON.parse(localStorage.getItem('templateObj'))
  templateObj.value = parsedData
})

const handleSelectedProperty = (data: any) => {
  payload.value.propertyId = data.id
}

// Watch for changes in the selected property and fetch tenants with active rentals
watch(selectedProperty, (newProperty) => {
  if (newProperty && newProperty.id) {
    console.log('Fetching tenants for property:', newProperty.id)
    houseId.value = newProperty.id
    getTenantsWithActiveRentals()
  }
})

const handleSelection = (item: any) => {
  payload.value.tenantId = item.id
  console.log('Selected item:', item)
}

const emit = defineEmits(['close'])

const closeModal = () => {
  emit('close')
}

const applyFilters = () => {
  const startDate = new Date(payload.value.startDate)
  const endDate = new Date(payload.value.endDate)
  const diffInDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24))

  if (diffInDays < 365) {
    // Show an error message or handle it
    showToast({
          title: "Error",
          message: "The lease duration must be at least one year.",
          toastType: "error",
          duration: 3000
        });
    return
  }

  router.push('/dashboard/property/lease-documents/create-methods')
  payload.value.documentName = ""
  payload.value.startDate = ""
  payload.value.endDate = ""
  closeModal()
}

// const applyFilters = () => {
//   router.push('/dashboard/property/lease-documents/create-methods')
//   payload.value.documentName = ""
//   payload.value.startDate = ""
//   payload.value.endDate = ""
//   closeModal()
// }
</script>
