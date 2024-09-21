import { property_api } from "@/api_factory/modules/property";
import { useFetchProperty } from "@/composables/modules/property/fetchProperty";
import { use_create_property } from "@/composables/modules/property/create";
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

export const useEditProperty = () => {
  const { propertyObj, getProperty, loading: fetchingProperty } = useFetchProperty();
  const { payload } = use_create_property();
  const route = useRoute(); // Access the current route
  const router = useRouter();

  // Get the property ID from the route parameter
  const queryId = ref(route.params.id as string || "");

  const loading = ref(false);
  const { $_update_property } = property_api;

  // Initialize the form on component mount
  onMounted(async () => {
    await initForm();
  });

  const initForm = async () => {
    loading.value = true;
    await getProperty(queryId.value); // Fetch the property using queryId

    // Populate the form with the fetched property data
    populateForm(propertyObj.value);

    loading.value = false;
  };

  const populateForm = (data: any) => {
    payload.name.value = data.name || "";
    payload.description.value = data.description || "";
    payload.houseTypeId.value = data.houseTypeId || "";
    payload.flooringTypeId.value = data.flooringTypeId || "";
    payload.size.value = data.size || "";
    payload.sizeUnit.value = data.sizeUnit || "";
    payload.bedroomCount.value = data.bedroomCount || "";
    payload.bathroomCount.value = data.bathroomCount || "";
    payload.floorNumber.value = data.floorNumber || "";
    payload.longitude.value = data.longitude || "";
    payload.latitude.value = data.latitude || "";
    payload.images.value = data.images || [];
    payload.address.value = data.address || "";
    payload.isFurnishedCommonArea.value = data.isFurnishedCommonArea || false;
    payload.commonAreas.value = data.commonAreas || [];
    payload.neighbouringLandmarks.value = data.neighbouringLandmarks || [];
    payload.rooms.value = data.rooms || [];
    payload.agentId.value = data.agentId || "";
    payload.rules.value = data.rules || [];
    payload.questions.value = data.questions || [];
  };

  const finalPayload = () => ({
    name: payload.name.value,
    description: payload.description.value,
    houseTypeId: payload.houseTypeId.value,
    flooringTypeId: payload.flooringTypeId.value,
    size: Number(payload.size.value),
    sizeUnit: payload.sizeUnit.value,
    bedroomCount: payload.bedroomCount.value,
    bathroomCount: payload.bathroomCount.value,
    floorNumber: payload.floorNumber.value,
    longitude: payload.longitude.value,
    latitude: payload.latitude.value,
    images: payload.images.value,
    address: payload.address.value,
    isFurnishedCommonArea: payload.isFurnishedCommonArea.value,
    commonAreas: payload.commonAreas.value,
    neighbouringLandmarks: payload.neighbouringLandmarks.value,
    rooms: payload.rooms.value,
    agentId: payload.agentId.value,
    rules: payload.rules.value,
    questions: payload.questions.value,
  });

  const editProperty = async () => {
    loading.value = true;
    const res = await $_update_property(queryId.value, finalPayload()); // Pass queryId.value
    if (res.type !== "ERROR") {
      router.push("/dashboard/property/success");
    }
    loading.value = false;
  };

  return { editProperty, payload, loading, initForm, fetchingProperty };
};
