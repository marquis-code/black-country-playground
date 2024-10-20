import { property_api } from "@/api_factory/modules/property";
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const loading = ref(false);

const selectedProperty = ref({}) as any;
const router = useRouter();

export const useDeleteProperty = () => {
    const deleteProperty = async (id: string | number, selectedObj: any) => {
        selectedProperty.value = selectedObj;
        loading.value = true;
        
        try {
            const res = await property_api.$_delete_property(id) as any;

            if (res.type !== 'ERROR') {
                showToast({
                    title: "Success",
                    message: `${selectedObj.value.name} Property was deleted Successfully!`,
                    toastType: "success",
                    duration: 3000
                });
                useRouter().push('/dashboard/property/delete-success');
                return res;
            } else {
                showToast({
                    title: "Error",
                    message: res?.data?.error || "An error occurred",
                    toastType: "error",
                    duration: 3000
                });
            }
        } catch (error) {
            showToast({
                title: "Error",
                message: "An unexpected error occurred.",
                toastType: "error",
                duration: 3000
            });
        } finally {
            loading.value = false;
        }
    };

    return { deleteProperty, loading };
};
