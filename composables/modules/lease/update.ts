import { lease_api } from "@/api_factory/modules/lease";
const loading = ref(false)
const updatePayload = ref({})

export const useUpdateLeaseTemplate = () => {
	const updateLeaseTemplate = async (id: any) => {
		loading.value = true
		const res = await  lease_api.$_update_lease_template(id, updatePayload.value) as any

        if (res.type !== 'ERROR') {
			console.log('Lease Template was updated successfully')
        }
        loading.value = false
	}

    const setUpdateObj = (data: any) => {
		updatePayload.value = data
	}

	return { updateLeaseTemplate, loading, updatePayload, setUpdateObj }
}
