import { property_api } from '@/api_factory/modules/property'
import { useRoute } from 'vue-router'

const propertyObj = ref<Record<string, any>>({})
const route = useRoute()

export const useFetchProperty = () => {
    const loading = ref(false)
    const error = ref<string | null>(null)

    const { $_fetch_single_property } = property_api

    const queryId = ref(route.params.id as string | null)

    const getProperty = async () => {
        // Ensure the queryId is available before making the API call
        if (!queryId.value) {
            error.value = 'No property ID available to fetch'
            return
        }

        loading.value = true
        error.value = null // Reset error state
        try {
            const res = await $_fetch_single_property(queryId.value) as any
            if (res.type !== 'ERROR') {
                propertyObj.value = res.data.data
            } else {
                error.value = 'Failed to fetch property data'
            }
        } catch (e) {
            error.value = 'An unexpected error occurred'
        } finally {
            loading.value = false
        }
    }

    onMounted(() => {
        getProperty()
    })

    return { propertyObj, loading, error, getProperty }
}
