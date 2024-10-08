import { property_api } from "@/api_factory/modules/property";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)
const router = useRouter()
const selectedProperty = ref({}) as any

export const useDuplicateProperty = () => {
	const duplicateProperty = async (id: string | number, selectedObj: any) => {
		loading.value = true
		selectedProperty.value = selectedObj
		const res = await property_api.$_duplicate_property(id) as any

        if (res.type !== 'ERROR') {
			useRouter().push('/dashboard/property')
			showToast({
				title: "Success",
				message: `${selectedObj.value.name} Property was duplicated Successfully!`,
				toastType: "success",
				duration: 3000
			  });
			  router.push(`/dashboard/property/${selectedObj.value.id}/duplicate-success`);
			  return res
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
