import { roles_api } from '@/api_factory/modules/roles-mgt'
import { ref } from 'vue';
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();

const loading = ref(false);
const role = ref({}) as any;
const route = useRoute()

export const useFetchRole = () => {

    const fetchRole = async () => {
        loading.value = true;
        try {
            const res = await roles_api.$_fetch_role_by_id(route.params.id);
            console.log(res.data, 'here')
            role.value = res.data;
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to fetch roles',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    onMounted(() => {
        fetchRole()
    });


    return { fetchRole, loading, role };
};
