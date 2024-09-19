import { property_api } from "@/api_factory/modules/property";
import { useRouter } from "vue-router";

const payload = {
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
};


export const use_create_property = () => {
  const Router = useRouter();
  
  const loading = ref(false);

  const create_property = async () => {
    const finalPayload = {
      name: payload.name.value,
      description: payload.description.value,
      // houseTypeId:  payload.houseTypeId.value,
      // flooringTypeId: payload.flooringTypeId.value,
      // size:  payload.size.value,
      // sizeUnit:  payload.sizeUnit.value,
      // bedroomCount: payload.bedroomCount.value,
      // bathroomCount:  payload.bathroomCount.value,
      // floorNumber:  payload.floorNumber.value,
      // longitude:  payload.longitude.value,
      // latitude:  payload.latitude.value,
      // images: payload.images.value,
      // address:  payload.address.value,
      // isFurnishedCommonArea:  payload.isFurnishedCommonArea.value,
      // commonAreas:  payload.commonAreas.value,
      // neighbouringLandmarks:  payload.neighbouringLandmarks.value,
      // rooms: payload. rooms.value,
      // agentId:  payload.agentId.value,
      // rules:  payload.rules.value,
      // questions:  payload.name.value,
    }

    console.log(finalPayload )
  
    loading.value = true;
    try {
      console.log(unref(payload.name))
      // const res = await property_api.$_create({
      //   name: payload.name.value,
      //   description: payload.description.value,
      //   houseTypeId:  payload.houseTypeId.value,
      //   flooringTypeId: payload.flooringTypeId.value,
      //   size:  payload.size.value,
      //   sizeUnit:  payload.sizeUnit.value,
      //   bedroomCount: payload.bedroomCount.value,
      //   bathroomCount:  payload.bathroomCount.value,
      //   floorNumber:  payload.floorNumber.value,
      //   longitude:  payload.longitude.value,
      //   latitude:  payload.latitude.value,
      //   images: payload.images.value,
      //   address:  payload.address.value,
      //   isFurnishedCommonArea:  payload.isFurnishedCommonArea.value,
      //   commonAreas:  payload.commonAreas.value,
      //   neighbouringLandmarks:  payload.neighbouringLandmarks.value,
      //   rooms: payload. rooms.value,
      //   agentId:  payload.agentId.value,
      //   rules:  payload.rules.value,
      //   questions:  payload.name.value,
      // }) as any
      // if (res.type !== "ERROR") {
      //   Router.push("/dashboard/property/success");
      // }
    } catch (error) {
      console.error('Error creating property:', error);
    } finally {
      loading.value = false;
    }
  };

  const setPropertyData = (data: any) => {
    for (const key in data) {
      if (payload[key] !== undefined) {
        // Update the payload ref with the new data
        if (Array.isArray(data[key])) {
          // Deep clone arrays
          payload[key].value = JSON.parse(JSON.stringify(data[key]));
        } else if (typeof data[key] === 'object' && data[key] !== null) {
          // Deep clone objects
          payload[key].value = { ...data[key] };
        } else {
          // Direct assignment for primitive values
          payload[key].value = data[key];
        }
      }
    }
    console.log(payload, 'updated payload'); // For debugging purposes
  };

  return { payload, create_property, loading, setPropertyData };
};
