import { property_api } from "@/api_factory/modules/property";
export const use_create_property = () => {
  const Router = useRouter();
  const payload = ref({
    name: "",
    description: "",
    houseTypeId: "",
    flooringTypeId: "",
    size: 0,
    sizeUnit: "",
    bedroomCount: 0,
    bathroomCount: 0,
    floorNumber: 0,
    longitude: null,
    latitude: null,
    images: [
      "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    address: "",
    isFurnishedCommonArea: false,
    commonAreas: [],
    neighbouringLandmarks: [
      {
        name: "string",
        type: "School",
        description: "Acme School",
        longitude: 3.406448,
        latitude: 6.465422,
        address: "Broad street lagos island",
      },
    ],
    rooms: [],
    agentId: "",
    rules: [],
  }) as any;

  const loading = ref(false);

  const create_property = async () => {
    loading.value = true;
    const res = (await property_api.$_create(payload.value)) as any;

    loading.value = false;
    if (res.type !== "ERROR") {
      Router.push("/dashboard/property");
    }
  };

  const setPropertyData = (data: any) => {
    payload.value = { ...data}
  };

  return { payload, create_property, loading, setPropertyData };
};
