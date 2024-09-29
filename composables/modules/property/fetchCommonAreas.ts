import { property_api } from '@/api_factory/modules/property';

export const useGetCommonAreas = () => {
    const loading = ref(false);
    const commonAreasList = ref([]) as any
    // const interiorAreas = ref([]) as any
    // const exteriorAreas = ref([]) as any
    // const exteriorFurnishedAreasList = ref([]) as any
    // const exteriorUnFurnishedAreasList = ref([]) as any
    // const interiorFurnishedAreasList = ref([]) as any
    // const interiorUnFurnishedAreasList = ref([]) as any

    const { $_fetch_common_areas } = property_api;

    const getCommonAreas = async () => {
        loading.value = true;

        const res = await $_fetch_common_areas() as any

        if (res.type !== 'ERROR') {
            console.log(res.data, 'common')
            commonAreasList.value = res.data ?? [];
            console.log(res.data, 'here')

            // Group properties into interior and exterior
        }
        
        loading.value = false;
    };

    const interiorAreas = computed(() => {
        return commonAreasList.value.filter((area: any) => area.type === 'interior');
    })
    const exteriorAreas = computed(() => {
        return commonAreasList.value.filter((area: any) => area.type === 'exterior');
    })
    const exteriorFurnishedAreasList =  computed(() => {
        return commonAreasList.value.filter((area: any) => area.type === 'exterior' && area.canBeFurnished === true);
    })
    const exteriorUnFurnishedAreasList =  computed(() => {
        return commonAreasList.value.filter((area: any) => area.type === 'exterior' && !area.canBeFurnished);
    })
    const interiorFurnishedAreasList =  computed(() => {
        return commonAreasList.value.filter((area: any) => area.type === 'interior' && area.canBeFurnished);
    })
    const interiorUnFurnishedAreasList =  computed(() => {
        return commonAreasList.value.filter((area: any) => area.type === 'interior' && !area.canBeFurnished);
    })

    onMounted(() => {
        getCommonAreas();
    });

    return { getCommonAreas, loading, commonAreasList, interiorAreas, exteriorAreas, exteriorFurnishedAreasList, exteriorUnFurnishedAreasList, interiorFurnishedAreasList, interiorUnFurnishedAreasList };
};
