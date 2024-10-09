import { lease_api } from "@/api_factory/modules/lease";
const loading = ref(false)
const leaseTemplateList = ref([])

export const useFetchLeaseTemplate = () => {
	const fetchLeaseTemplate = async () => {
		loading.value = true
		const res = await  lease_api.$_fetch_lease_template() as any
         console.log(res?.data?.result, 'here')
        if (res.type !== 'ERROR') {
			leaseTemplateList.value = res?.data?.result
        }
        loading.value = false
	}

	onMounted(() => {
		fetchLeaseTemplate()
	})

	return { fetchLeaseTemplate, loading, leaseTemplateList }
}
