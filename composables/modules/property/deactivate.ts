import { property_api } from "@/api_factory/modules/property";
import { useGetProperties } from "@/composables/modules/property/fetchProperties";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
import { ref } from "vue";

export const usePropertyDeactivate = () => {
  const { getProperties } = useGetProperties();
  const loading = ref(false);
  const { $_update_property } = property_api;

  const deactivateProperty = async (id: any, actionType: string) => {
    const updatedData = {
      isPublished: actionType !== 'deactivate'
    };

    await updateProperty(id, updatedData);
  };

  const updateProperty = async (id: any, updatedData: any) => {
    loading.value = true;
    try {
      const res = await $_update_property(id, updatedData);
      if (res.type !== "ERROR") { 
        await getProperties();
        showToast({
          title: "Success",
          message: 'Success!',
          toastType: "success",
          duration: 3000
        });
        return res
      } else {
        showToast({
          title: "Error",
          message: res?.data?.error || "An error occured",
          toastType: "error",
          duration: 3000
        });
        return res
      }
    } catch (error) {
      console.error("Error updating property:", error);
    } finally {
      loading.value = false;
    }
  };

  return { deactivateProperty, loading };
};
