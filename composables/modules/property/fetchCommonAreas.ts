import { ref, onMounted } from 'vue';
import { property_api } from '@/api_factory/modules/property';

export const useGetCommonAreas = () => {
    const loading = ref(false);
    const commonAreasList = ref<any[]>([]);
    const interiorAreas = ref<any[]>([]);
    const exteriorAreas = ref<any[]>([]);
    const exteriorFurnishedAreas = ref<any[]>([]);
    const exteriorUnfurnishedAreas = ref<any[]>([]);
    const interiorFurnishedAreas = ref<any[]>([]);
    const interiorUnfurnishedAreas = ref<any[]>([]);

    const { $_fetch_common_areas } = property_api;

    const getCommonAreas = async () => {
        loading.value = true;

        const res = await $_fetch_common_areas() as any;

        if (res.type !== 'ERROR') {
            commonAreasList.value = res?.data || [];

            // Update the categorized lists
            categorizeCommonAreas();
        }
        
        loading.value = false;
    };

    const categorizeCommonAreas = () => {
        interiorAreas.value = commonAreasList.value.filter((area: any) => area.type === 'interior');
        exteriorAreas.value = commonAreasList.value.filter((area: any) => area.type === 'exterior');
        
        exteriorFurnishedAreas.value = exteriorAreas.value.filter((area: any) => area.canBeFurnished);
        exteriorUnfurnishedAreas.value = exteriorAreas.value.filter((area: any) => !area.canBeFurnished);
        
        interiorFurnishedAreas.value = interiorAreas.value.filter((area: any) => area.canBeFurnished);
        interiorUnfurnishedAreas.value = interiorAreas.value.filter((area: any) => !area.canBeFurnished);
    };

    // onMounted(() => {
    //     getCommonAreas();
    // });

    return { 
        getCommonAreas, 
        loading, 
        commonAreasList, 
        interiorAreas, 
        exteriorAreas, 
        exteriorFurnishedAreas, 
        exteriorUnfurnishedAreas, 
        interiorFurnishedAreas, 
        interiorUnfurnishedAreas 
    };
};
