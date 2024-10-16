import { permission_api } from '@/api_factory/modules/permissions-mgt'
import { ref } from 'vue';
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();

const loading = ref(false);
const adminPermission = ref(null);

export const useFindAdminPermission = () => {
    const findAdminPermission = async (id: string) => {
        loading.value = true;
        try {
            const res = await permission_api.$_find_admin_permission(id);
            adminPermission.value = res.data;
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to find Admin Permission',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    return { findAdminPermission, loading, adminPermission };
};
