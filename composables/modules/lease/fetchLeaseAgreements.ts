import { lease_api } from "@/api_factory/modules/lease";
const loading = ref(false)
const leaseAgreementList = ref([])

export const useFetchLeaseAgreement = () => {
	const fetchLeaseAgreement = async () => {
		loading.value = true
		const res = await  lease_api.$_fetch_lease_agreement() as any
         console.log(res?.data?.result, 'here')
        if (res.type !== 'ERROR') {
			leaseAgreementList.value = res?.data?.result
        }
        loading.value = false
	}

	onMounted(() => {
		fetchLeaseAgreement()
	})

	return { fetchLeaseAgreement, loading, leaseAgreementList }
}
