import { lease_api } from "@/api_factory/modules/lease";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)

export const useSignLease = () => {
	const signLeaseAgreement = async (id: string | number, payload: any) => {
		loading.value = true;
		try {
			const res = await lease_api.$_sign_lease_agreement(id, payload) as any;
			console.log(res, 'res here')
			if (res.type !== 'ERROR') {
				showToast({
					title: "Success",
					message: "Lease Agreement was signed successfully!",
					toastType: "success",
					duration: 3000
				});
				return res;  // Fix: The return statement was incomplete.
			} else {
				showToast({
					title: "Error",
					message: res.data?.error || 'Something went wrong while signing the lease agreement!',
					toastType: "error",
					duration: 3000
				});
			}
		} catch (error) {
			// Catch and handle any unexpected errors
			showToast({
				title: "Error",
				message: 'An unexpected error occurred while signing the lease agreement.',
				toastType: "error",
				duration: 3000
			});
		} finally {
			loading.value = false;  // Ensure loading is set to false after the operation
		}
	};

	return { signLeaseAgreement, loading };
};
