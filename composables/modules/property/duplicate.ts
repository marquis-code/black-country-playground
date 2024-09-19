import { property_api } from "@/api_factory/modules/property";
const loading = ref(false)

export const useDuplicateProperty = () => {
	const duplicateProperty = async (id: string | number) => {
		loading.value = true
		const res = await property_api.$_duplicate_property(id) as any

        if (res.type !== 'ERROR') {
			useRouter().push('/dashboard/property')
        }
        loading.value = false
	}

	return { duplicateProperty, loading }
}
