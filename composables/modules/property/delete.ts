import { property_api } from "@/api_factory/modules/property";
const loading = ref(false)

export const useDeleteProperty = () => {
	const deleteProperty = async (id: string | number) => {
		loading.value = true
		const res = await property_api.$_delete_property(id) as any

        if (res.type !== 'ERROR') {
			useRouter().push('/dashboard/property')
        }
        loading.value = false
	}

	return { deleteProperty, loading }
}
