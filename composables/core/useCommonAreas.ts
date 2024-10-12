// composables/useCommonAreas.ts
import { ref, computed } from 'vue';

interface CommonArea {
  id: string;
  name: string;
  type: 'interior' | 'exterior';
  canBeFurnished: boolean;
  houseId: string | null;
  images: string[] | null;
}

export function useCommonAreas() {
  const commonAreas = ref<CommonArea[]>([ { "id": "46ac856c-9bda-44c6-a72e-41497fd0bdc7", "name": "Kitchen", "type": "interior", "canBeFurnished": true, "houseId": null, "images": null }, { "id": "22b6d7ff-e15b-46d6-8686-79212a21a104", "name": "Laundry Area", "type": "interior", "canBeFurnished": true, "houseId": null, "images": null }, { "id": "e05fd5cb-9ae0-454f-a713-4b055f6f2a83", "name": "Bathroom/Restroom", "type": "interior", "canBeFurnished": true, "houseId": null, "images": null }, { "id": "a01a979f-ecfe-4108-9ede-d0eae228e320", "name": "Dining Area", "type": "interior", "canBeFurnished": true, "houseId": null, "images": null }, { "id": "2c35a3ff-0070-4c15-9035-9c5ae6967072", "name": "Living Room", "type": "interior", "canBeFurnished": true, "houseId": null, "images": null }, { "id": "4d4d2576-2c8e-4272-ae8c-791ab9e62931", "name": "Study/Office Area", "type": "interior", "canBeFurnished": true, "houseId": null, "images": null }, { "id": "1d68cace-c643-4647-b1a5-32160d934a16", "name": "Garden", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null }, { "id": "7091fd23-90fd-4247-9ae2-527f14899c08", "name": "Swimming Pool", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null }, { "id": "934ebb05-eb0d-4dc1-9047-316fd9ff0183", "name": "Fitness Center", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null }, { "id": "eda856f0-28b0-4b88-9d42-f3b111e53620", "name": "Rooftop Terrace", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null }, { "id": "39e3855f-8e1d-4e7e-ab9a-4c63d6ac6dec", "name": "Courtyard", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null }, { "id": "81793b74-7478-4511-b4cb-40b0b5d58cd7", "name": "Parking Area", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null }, { "id": "413321d9-1d25-428c-bd26-18e18f25d775", "name": "Balcony", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null }, { "id": "3ffb0dc4-3575-440a-b08a-5af84c452808", "name": "Patio", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null }, { "id": "a388d00d-6948-441b-8364-c8009308b328", "name": "Recreational area", "type": "exterior", "canBeFurnished": false, "houseId": null, "images": null } ]);

  const addCommonArea = (area: Omit<CommonArea, 'id'>) => {
    commonAreas.value.push({
      ...area,
      id: crypto.randomUUID(),
    });
  };

  const toggleFurnishedStatus = (id: string) => {
    const area = commonAreas.value.find((area) => area.id === id);
    if (area) {
      area.canBeFurnished = !area.canBeFurnished;
    }
  };

  const furnishedInterior = computed(() =>
    commonAreas.value.filter(
      (area) => area.canBeFurnished && area.type === 'interior'
    )
  );
  const unfurnishedInterior = computed(() =>
    commonAreas.value.filter(
      (area) => !area.canBeFurnished && area.type === 'interior'
    )
  );
  const furnishedExterior = computed(() =>
    commonAreas.value.filter(
      (area) => area.canBeFurnished && area.type === 'exterior'
    )
  );
  const unfurnishedExterior = computed(() =>
    commonAreas.value.filter(
      (area) => !area.canBeFurnished && area.type === 'exterior'
    )
  );

  return {
    commonAreas,
    addCommonArea,
    toggleFurnishedStatus,
    furnishedInterior,
    unfurnishedInterior,
    furnishedExterior,
    unfurnishedExterior,
  };
}
