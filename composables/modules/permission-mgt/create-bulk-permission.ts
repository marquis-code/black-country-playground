import { permission_api } from '@/api_factory/modules/permissions-mgt'
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const loading = ref(false);

const payload = ref({})

export const useCreatePermissionBulk = () => {
    const createPermissionBulk = async () => {
        loading.value = true;
        try {
            const res = await permission_api.$_create_permission_bulk(payload.value);
            showToast({
                title: "Success",
                message: 'Permissions created in bulk successfully',
                toastType: "success",
                duration: 3000
            });
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to create bulk Permissions',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    return { createPermissionBulk, loading };
};
