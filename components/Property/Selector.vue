<template>
	<div class="flex flex-col gap-2">
	  <label class="text-sm text-[#6E717C] font-medium">{{ label }}</label>
	  <VueMultiselect
	  v-model="selectedProperty"
      placeholder="Search properties"
      :searchable="true"
      :internal-search="false"
      :options="properties"
      :multiple="false"
      :taggable="false"
      track-by="id"
      :loading="loading"
	  :allow-empty="false"
	  :hide-selected="true" 
      select-label=""
	  label="name"
      @search-change="searching"
      @select="handleSelection"
      @open="is_droped_down = true"
      @close="is_droped_down = false"
	  >
	  <!-- Display when something is selected -->
      <template v-if="selectedProperty?.id && !is_droped_down" #selection="">
        <div class="flex gap-2 w-full overflow-hidden max-w-[300px]">
          <img v-if="selectedProperty.images?.length" :src="selectedProperty.images[0]" class="w-10 h-10 rounded-full object-cover border" alt="property image">
          <img v-else src="@/assets/img/gallery2.png" class="w-10 h-10 rounded-full object-cover border" alt="default image">
          <div class="flex flex-col gap-1">
            <p class="text-sm">{{ selectedProperty.name }}</p>
            <p class="text-xs">{{ `${selectedProperty.description.slice(0, 20)}...` || 'No description' }}</p>
          </div>
        </div>
      </template>

      <!-- Display for each option in the dropdown -->
      <template #option="{ option }">
        <div class="flex gap-2 w-full overflow-hidden max-w-[300px]">
          <img v-if="option.images?.length" :src="option.images[0]" class="w-10 h-10 rounded-full object-cover border" alt="property image">
          <img v-else src="@/assets/img/gallery2.png" class="w-10 h-10 rounded-full object-cover border" alt="default image">
          <div class="flex flex-col gap-1">
            <p class="text-sm">{{ option.name }}</p>
            <p class="text-xs">{{ `${option.description.slice(0, 20)}...` || 'No description' }}</p>
          </div>
        </div>
      </template>
	  </VueMultiselect>
	</div>
  </template>
  
  <script setup lang="ts">
  import VueMultiselect from 'vue-multiselect'
  import { watchDebounced } from '@vueuse/core'
  import { property_api } from '@/api_factory/modules/property'
  import 'vue-multiselect/dist/vue-multiselect.css'
  
  const emit = defineEmits(['update:modelValue', 'property-selected'])
  const props = defineProps({
	label: { type: String, default: 'Select Property' },
	modelValue: { type: Object, required: true }
  })
  
  const is_droped_down = ref(false)
  const loading = ref(false)
  const search = ref('')
  const properties = ref([]) as Ref<any[]>
  
  const fetchRentalProperties = async () => {
	loading.value = true
	try {
    const payload = {
      searchQuery: search.value
    }
	  const res = await property_api.$_fetch_properties_with_rentals(payload) as any
	  if (res.type !== 'ERROR') {
		properties.value = res.data.result?.length ? res.data.result : []
	  }
	} catch (error) {
	  console.error('Failed to fetch properties', error)
	} finally {
	  loading.value = false
	}
  }
  
  const searching = (val: string) => {
	search.value = val
  }
  
  const selectedProperty = ref(props.modelValue)
  
  const handleSelection = (val: any) => {
	selectedProperty.value = val
	emit('update:modelValue', val)
	emit('property-selected', val)
  }
  
  // Debounce search to reduce API calls
  watchDebounced(search, fetchRentalProperties, { debounce: 500, maxWait: 1000 })
  
  // Initial fetch
  fetchRentalProperties()
  </script>
  