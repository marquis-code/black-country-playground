import { property_api } from '@/api_factory/modules/property'

export const useGetRoomFeatures = () => {
    const loading = ref(false)
    const roomFeaturesList = ref([] as any)

    const { $_fetch_room_features } = property_api

    const geRoomFeatures = async () => {
        loading.value = true

        const res = await $_fetch_room_features() as any

        if (res.type !== 'ERROR') {
            roomFeaturesList.value = res.data ?? []
        }
        loading.value = false
    }

    onMounted(() => {
        geRoomFeatures()
    })

    return { geRoomFeatures, loading, roomFeaturesList }
}
