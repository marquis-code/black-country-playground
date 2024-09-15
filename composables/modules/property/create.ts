import { property_api } from "@/api_factory/modules/property";
export const use_create_property = () => {
  const Router = useRouter();
  const payload = ref({
    name: null,
    description: null,
    houseTypeId: null,
    flooringTypeId: null,
    size: 0,
    sizeUnit: null,
    bedroomCount: 0,
    bathroomCount: 0,
    floorNumber: 0,
    longitude: null,
    latitude: null,
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    address: null,
    isFurnishedCommonArea: false,
    commonAreas: [],
    neighbouringLandmarks: [],
    rooms: [],
    agentId: null,
    rules: [],
  }) as any;

  const loading = ref(false);

  const create_property = async () => {
    loading.value = true;
    const res = (await property_api.$_create(payload.value)) as any;

    loading.value = false;
    if (res.type !== "ERROR") {
      Router.push("/dashboard/property/success");
    }
  };

  const setPropertyData = (data: any) => {
    payload.value = { ...data}
  };

  return { payload, create_property, loading, setPropertyData };
};
