import { access_api } from '@/api_factory/modules/access-control'
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const loading = ref(false);

const updatePayload = ref({})

export const useUpdateAccessModule = () => {
    const updateAccessModule = async (id: any) => {
        loading.value = true;
        try {
            const res = await access_api.$_update_access_modules(id, updatePayload.value);
            showToast({
                title: "Success",
                message: 'Access Module updated successfully',
                toastType: "success",
                duration: 3000
            });
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to update Access Module',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    const setPayload = (data: any) => {
        updatePayload.value = { ...data}
    }

    return { updateAccessModule, setPayload, loading, updatePayload };
};
