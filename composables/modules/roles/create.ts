import { roles_api } from '@/api_factory/modules/roles-mgt'
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const loading = ref(false);
const router = useRouter()

const payload = ref({})

export const useCreateRole = () => {
    const createRole = async () => {
        loading.value = true;
        try {
            const res = await roles_api.$_create_role(payload);
            showToast({
                title: "Success",
                message: 'Role created successfully',
                toastType: "success",
                duration: 3000
            });
            router.push('/dashboard/members/role-success')
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to create role',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    return { createRole, loading };
};
