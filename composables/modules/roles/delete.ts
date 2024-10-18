import { roles_api } from '@/api_factory/modules/roles-mgt'
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const loading = ref(false);

export const useDeleteRole = () => {
    const deleteRole = async (id: string) => {
        loading.value = true;
        try {
            const res = await roles_api.$_delete_role(id);
            showToast({
                title: "Success",
                message: 'Role deleted successfully',
                toastType: "success",
                duration: 3000
            });
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to delete role',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    return { deleteRole, loading };
};