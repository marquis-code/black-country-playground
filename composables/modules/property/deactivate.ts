// import { property_api } from "@/api_factory/modules/property";
// import { useGetProperties } from "@/composables/modules/property/fetchProperties";

// export const usePropertyDeactivate = () => {
//   const { getProperties } = useGetProperties();

//   const loading = ref(false);
//   const { $_update_property } = property_api;

//   const deactivateProperty = (id: any) => {
//     const updatedProperty = {
//       isPublished: false
//     };

//     // // Call the update function with the modified property data
//     updateProperty(id, updatedProperty);
//   };

//   const updateProperty = async (id: any, updatedData: any) => {
//     console.log(updatedData, 'fROM UPDATE PROPERTY')
//     loading.value = true;
//     const res = await $_update_property(id, updatedData) as any;
//       if (res.type !== "ERROR") {
//         getProperties();
//       }

//     loading.value = false;
//   };

//   return { deactivateProperty, loading, getProperties };
// };

import { property_api } from "@/api_factory/modules/property";
import { useGetProperties } from "@/composables/modules/property/fetchProperties";
import { ref } from "vue"; // Ensure you import ref

export const usePropertyDeactivate = () => {
  const { getProperties } = useGetProperties();
  const loading = ref(false);
  const { $_update_property } = property_api;

  const deactivateProperty = async (id: any) => {
    const updatedProperty = {
      isPublished: false
    };

    // Call the update function and wait for its completion
    await updateProperty(id, updatedProperty);
  };

  const updateProperty = async (id: any, updatedData: any) => {
    console.log(updatedData, 'FROM UPDATE PROPERTY');
    loading.value = true;
    const res = await $_update_property(id, updatedData) as any;
    
    if (res.type !== "ERROR") {
      await getProperties(); // Wait for the properties to be updated
    }

    loading.value = false;
  };

  return { deactivateProperty, loading, getProperties };
};
