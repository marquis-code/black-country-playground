import { access_api } from '@/api_factory/modules/access-control'
import { useCustomToast } from '@/composables/core/useCustomToast';
const { showToast } = useCustomToast();

const loading = ref(false);
const accessModules = ref([]);


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

export const useFetchAccessModules = () => {
    const metadata = ref({
        page: 1,
        perPage: 7,
        total: 100,
        pages: 0,
    });

    // Filters including dates and agentId
    const filters = ref({
        searchQuery: null
    });


    const fetchAccessModules = async () => {
        loading.value = true;
        try {
            const res = await access_api.$_fetch_access_modules(metadata.value, filters.value);
            accessModules.value = res.data;
            return res;
        } catch (error) {
            showToast({
                title: "Error",
                message: 'Failed to fetch Access Modules',
                toastType: "error",
                duration: 3000
            });
            throw error;
        } finally {
            loading.value = false;
        }
    };


    // Debounced version of getProperties to avoid multiple API calls
    const debouncedGetProperties = debounce(fetchAccessModules, 300); // 300ms delay

    // Watch for changes in filters and metadata.page/perPage
    watch(filters, () => {
        if (metadata.value.page !== 1) {
            setPaginationObj(1); // Reset to the first page when search query changes
        }
        loading.value = true;
        fetchAccessModules()
    }, { deep: true });

    watch( [metadata.value.page, metadata.value.perPage], // Watch only page and perPage
        () => {
            // debouncedGetProperties(); // Use the debounced version here
            fetchAccessModules()
        }
    );

    const setPaginationObj = (val: number) => {
        if (metadata.value.page !== val) {
            metadata.value.page = val;
        }
    };

    // Expose a method to apply the filters (from the UI)
    const applyFilters = (newFilters: any) => {
        filters.value = { ...filters.value, ...newFilters };
    };

    onMounted(() => {
        fetchAccessModules()
        // Call debounced function once on mount
        // debouncedGetProperties();
    });

    onBeforeUnmount(() => {
        // Clear timeout to avoid memory leaks
        debouncedGetProperties.cancel?.();
    });



    return { fetchAccessModules, loading, accessModules, setPaginationObj,metadata, filters, applyFilters }
}
