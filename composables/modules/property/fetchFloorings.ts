import { property_api } from '@/api_factory/modules/property'

export const useGetFloorings = () => {
    const loading = ref(false)
    const flooringsList = ref([] as any)

    const { $_fetch_floorings } = property_api

    const geFloorings = async () => {
        loading.value = true

        const res = await $_fetch_floorings() as any

        if (res.type !== 'ERROR') {
            flooringsList.value = res.data ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        geFloorings()
    })

    return { geFloorings, loading, flooringsList }
}
