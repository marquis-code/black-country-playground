import { roles_api } from '@/api_factory/modules/roles-mgt'
import { ref } from 'vue';
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();
const route = useRoute()

const loading = ref(false);
const admins = ref([]);

function debounce(fn: Function, delay: number) {
    let timeoutId: number | undefined;
    const debounced = function (...args: any) {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            fn(...args);
        }, delay);
    };

    debounced.cancel = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
    };

    return debounced;
}

export const useFindAdminByRole = () => {
        // Filters including dates and agentId
        const filters = ref({
            searchQuery: null,
        });

    const findAdminByRole = async () => {
        loading.value = true;

        try {
            const res = await roles_api.$_find_admin_by_role(route.params.id, filters.value);
            admins.value = res.data;
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to find admins by role',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };

    // Debounced version of getProperties to avoid multiple API calls
    const debouncedGetProperties = debounce(findAdminByRole, 300); // 300ms delay

    // Watch for changes in filters and metadata.page/perPage
    watch(filters, () => {
        loading.value = true;
        findAdminByRole()
    }, { deep: true });

        // Expose a method to apply the filters (from the UI)
        const applyFilters = (newFilters: any) => {
            filters.value = { ...filters.value, ...newFilters };
        };
    
        onMounted(() => {
            findAdminByRole()
            // Call debounced function once on mount
            // debouncedGetProperties();
        });
    
        onBeforeUnmount(() => {
            // Clear timeout to avoid memory leaks
            debouncedGetProperties.cancel?.();
        });
    


    return { findAdminByRole, loading, admins, filters, applyFilters };
};
