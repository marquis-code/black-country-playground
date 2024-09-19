import { property_api } from "@/api_factory/modules/property";
import { useFetchProperty } from "@/composables/modules/property/fetchProperty";
import { use_create_property } from "@/composables/modules/property/create";
import { ref, onMounted } from "vue";

export const useEditProperty = () => {
  const { propertyObj, getProperty, loading: fetchingProperty } = useFetchProperty();
  const { payload } = use_create_property();
  const route = useRoute(); // Access the current route
  const router = useRouter()

  // Get the property ID from the route parameter
  const queryId = ref((route.params.id as string) || "");

  const loading = ref(false);
  const { $_update_property } = property_api;

  // Initialize the form on component mount
  onMounted(async () => {
    await initForm();
  });

  const initForm = async () => {
    loading.value = true;
    await getProperty();

    // Populate the form with the fetched property data
    populateForm(propertyObj.value);

    loading.value = false;
  };

  const populateForm = (data: any) => {
    payload.value.name = data.name;
    payload.value.description = data.description;
    payload.value.houseTypeId = data.houseTypeId;
    payload.value.flooringTypeId = data.flooringTypeId;
    payload.value.size = Number(data.size);
    payload.value.sizeUnit = data.sizeUnit;
    payload.value.bedroomCount = data.bedroomCount;
    payload.value.bathroomCount = data.bathroomCount;
    payload.value.floorNumber = data.floorNumber;
    payload.value.longitude = data.longitude;
    payload.value.latitude = data.latitude;
    payload.value.images = data.images;
    payload.value.address = data.address;
    payload.value.isFurnishedCommonArea = data.isFurnishedCommonArea;
    payload.value.commonAreas = data.commonAreas;
    payload.value.neighbouringLandmarks = data.neighbouringLandmarks;
    payload.value.rooms = data.rooms;
    payload.value.agentId = data.agentId;
    payload.value.rules = data.rules;
  };

  const editProperty = async () => {
    loading.value = true;
    const res = await $_update_property(Number(queryId), payload.value) as any
    if (res.type !== "ERROR") {
        router.push("/dashboard/property/success");
    }
    loading.value = false;
  };

  return { editProperty, payload, loading, initForm, fetchingProperty };
};
