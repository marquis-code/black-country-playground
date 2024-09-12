import { ref, onMounted, watch } from 'vue'
import { property_api } from '@/api_factory/modules/property'
import { debounce } from 'lodash'

export const useGetProperties = () => {
    const loadingProperties = ref(false)
    const propertiesList = ref([] as any)
    const searchQuery = ref('')
    const currentPage = ref(1)
    const perPage = ref(20)
    const totalPages = ref(1) // To store total pages

    const { $_fetch_properties } = property_api

    const getProperties = async () => {
        loadingProperties.value = true

        // Pass page, perPage, and searchQuery to the API factory
        const res = await $_fetch_properties(currentPage.value, perPage.value, searchQuery.value) as any

        if (res.type !== 'ERROR') {
            propertiesList.value = res?.data?.result ?? []
            totalPages.value = res?.data?.metadata?.total ?? 1 // Set total pages
            perPage.value = res?.data?.metadata?.page ?? 1 // Set total pages
        }
        loadingProperties.value = false
    }

    // Debounced version of getProperties to avoid multiple API calls
    const debouncedGetProperties = debounce(getProperties, 300) // 300ms delay

    // Watch searchQuery to trigger the search when it changes
    watch(searchQuery, () => {
        currentPage.value = 1 // Reset to page 1 for new search
        debouncedGetProperties() // Call the debounced version
    })

    // Watch currentPage for pagination
    watch(currentPage, () => {
        getProperties()
    })

    onMounted(() => {
        getProperties()
    })

    return {
        getProperties,
        debouncedGetProperties,
        loadingProperties,
        propertiesList,
        searchQuery,
        currentPage,
        perPage,
        totalPages,
    }
}
