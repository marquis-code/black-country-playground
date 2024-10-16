import { permission_api } from '@/api_factory/modules/permissions-mgt'
import { ref } from 'vue';
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();

const loading = ref(false);
const permissions = ref([]);

export const useFetchPermissions = () => {
    const fetchPermissions = async () => {
        loading.value = true;
        try {
            const res = await permission_api.$_fetch_permissions();
            console.log(res.data, 'heee')
            permissions.value = res.data.result;
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to fetch Permissions',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        fetchPermissions()
    })

    return { fetchPermissions, loading, permissions };
};
