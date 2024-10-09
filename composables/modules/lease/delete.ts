import { lease_api } from "@/api_factory/modules/lease";
const loading = ref(false)

export const useDeleteLeaseTemplate = () => {
	const deleteLeaseTemplate = async (id: string | number) => {
		loading.value = true
		const res = await  lease_api.$_delete_lease_template(id) as any

        if (res.type !== 'ERROR') {
			useRouter().push('/dashboard/property?activeTab=lease-documents')
        }
        loading.value = false
	}

	return { deleteLeaseTemplate, loading }
}
