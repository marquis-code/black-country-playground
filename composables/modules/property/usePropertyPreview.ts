export const usePropertyPreview = () => {
    const isPreviewVisible = ref(false);
    const propertyDetails = ref({
        name: ref(null),
        description: ref(null),
        houseTypeId: ref(null),
        flooringTypeId: ref(null),
        size: ref(null),
        sizeUnit: ref(null),
        bedroomCount: ref(null),
        bathroomCount: ref(null),
        floorNumber: ref(null),
        longitude: ref(null),
        latitude: ref(null),
        images: ref([
          "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        ]),
        address: ref(null),
        isFurnishedCommonArea: ref(false),
        commonAreas: ref([]),
        neighbouringLandmarks: ref([]),
        rooms: ref([]),
        agentId: ref(null),
        rules: ref([]),
        questions: ref([])
      });

      const openPreview = (details: any) => {
        propertyDetails.value = details;
        isPreviewVisible.value = true;
      };
    
      const closePreview = () => {
        isPreviewVisible.value = false;
      };
  
    const previewProperty = () => {

    }

    return { previewProperty, propertyDetails, openPreview, closePreview, isPreviewVisible}
}