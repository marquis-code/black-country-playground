import { useCustomToast } from '@/composables/core/useCustomToast';
import { access_api } from '@/api_factory/modules/access-control'
const { showToast } = useCustomToast();
const loading = ref(false);

export const useCreateAccessModule = () => {
    const createAccessModule = async (payload: any) => {
        loading.value = true;
        try {
            const res = await access_api.$_create_access_module(payload);
            showToast({
                title: "Success",
                message: 'Access Module created successfully',
                toastType: "success",
                duration: 3000
            });
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to create Access Module',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    return { createAccessModule, loading };
};
