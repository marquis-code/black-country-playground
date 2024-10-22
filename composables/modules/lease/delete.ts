import { lease_api } from "@/api_factory/modules/lease";
import { useCustomToast } from '@/composables/core/useCustomToast'
import { useFetchLeaseAgreement } from '@/composables/modules/lease/fetchLeaseAgreements'
const { showToast } = useCustomToast();
const { fetchLeaseAgreement } = useFetchLeaseAgreement()
const loading = ref(false)
const route = useRoute();
const router = useRouter();

export const useDeleteLeaseTemplate = () => {
	const deleteLeaseTemplate = async (id: string | number) => {
		loading.value = true
		const res = await  lease_api.$_delete_lease_template(id) as any

        if (res.type !== 'ERROR') {
			showToast({
				title: "Success",
				message: "Lease Agreement was deleted successfully",
				toastType: "success",
				duration: 3000
			  });
			  fetchLeaseAgreement()
			  window.location.reload();
			//   router.push({ path: router.currentRoute.value.fullPath, replace: true });
			//   navigateTo(route.fullPath, { replace: true });
			// useRouter().push('/dashboard/property?activeTab=lease-documents')
        }
        loading.value = false
	}

	return { deleteLeaseTemplate, loading }
}
