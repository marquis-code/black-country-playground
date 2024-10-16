import { permission_api } from '@/api_factory/modules/permissions-mgt'
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const loading = ref(false);

const payload = ref({})

export const useCreateAdminPermission = () => {
    const createAdminPermission = async () => {
        loading.value = true;
        try {
            const res = await permission_api.$_create_admin_permission(payload.value);
            showToast({
                title: "Success",
                message: 'Admin Permission created successfully',
                toastType: "success",
                duration: 3000
            });
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to create Admin Permission',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    return { createAdminPermission, loading };
};
