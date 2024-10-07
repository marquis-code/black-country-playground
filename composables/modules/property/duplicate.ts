import { property_api } from "@/api_factory/modules/property";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

export const useDuplicateProperty = () => {
	const duplicateProperty = async (id: string | number) => {
		loading.value = true
		const res = await property_api.$_duplicate_property(id) as any

        if (res.type !== 'ERROR') {
			useRouter().push('/dashboard/property')
			showToast({
				title: "Success",
				message: 'Success!',
				toastType: "success",
				duration: 3000
			  });
        } else {
			showToast({
				title: "Error",
				message: res?.data?.error || "An error occured",
				toastType: "error",
				duration: 3000
			  });
		}
        loading.value = false
	}

	return { duplicateProperty, loading }
}
