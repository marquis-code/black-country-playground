import { roles_api } from '@/api_factory/modules/roles-mgt'
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const loading = ref(false);
const router = useRouter()

// const payload = ref({})

export const useCreateRole = () => {
    const createRole = async (payload: any) => {
        loading.value = true;
        try {
            const res = await roles_api.$_create_role(payload) as any
            if (res.type !== 'ERROR') {
                showToast({
                    title: "Success",
                    message: 'Role created successfully',
                    toastType: "success",
                    duration: 3000
                });
                router.push('/dashboard/members/role-success')
            } else {
                showToast({
                    title: "Error,",
                    message: res.data.error || 'Something went wrong while creating role.',
                    toastType: "error",
                    duration: 3000
                });
            }
            return res;
        } catch (error) {
            console.log(error, 'error here')
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
