import { property_api } from "@/api_factory/modules/property";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

const selectedProperty = ref({}) as any
const router = useRouter()

export const useDeleteProperty = () => {
	const deleteProperty = async (id: string | number, selectedObj: any) => {
		selectedProperty.value = selectedObj
		loading.value = true
		const res = await property_api.$_delete_property(id) as any

        if (res.type !== 'ERROR') {
			useRouter().push('/dashboard/property')
			showToast({
				title: "Success",
				message: `${selectedObj.value.name} Property was deleted Successfully!`,
				toastType: "success",
				duration: 3000
			  });
			  useRouter().push('/dashboard/property/delete-success')
			//   console.log(res, 'dsfdsffffd')
			//   router.push('/dashboard/property/delete-success');
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

	return { deleteProperty, loading }
}
