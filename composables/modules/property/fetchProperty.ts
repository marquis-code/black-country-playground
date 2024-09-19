import { property_api } from '@/api_factory/modules/property'
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const propertyObj = ref<Record<string, any>>({})

export const useFetchProperty = () => {
    const loading = ref(false)
    const error = ref<string | null>(null)
    const route = useRoute() // Access the current route
    const router = useRouter()

    const { $_fetch_single_property } = property_api

    // Get the property ID from the route parameter
    const queryId = ref(route.params.id as string || '')

    const getProperty = async () => {
        if (!queryId.value) {
            error.value = 'No property ID available to fetch'
            return
        }

        loading.value = true
        error.value = null // Reset error state
        try {
            const res = await $_fetch_single_property(queryId.value) as any
            propertyObj.value = res.data
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
