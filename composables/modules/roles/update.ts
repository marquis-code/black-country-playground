import { roles_api } from '@/api_factory/modules/roles-mgt'
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const loading = ref(false);
const route = useRoute() as any

const payload = ref({})

export const useUpdateRole = () => {
    const updateRole = async () => {
        loading.value = true;
        try {
            const res = await roles_api.$_update_role(route.params.id, payload.value);
            showToast({
                title: "Success",
                message: 'Role updated successfully',
                toastType: "success",
                duration: 3000
            });
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to update role',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    return { updateRole, loading };
};
