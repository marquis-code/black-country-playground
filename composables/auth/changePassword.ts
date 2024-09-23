import { auth_api } from '@/api_factory/modules/auth'

export const use_change_password = () => {
	const Router = useRouter();
	const credential = {
		currentPassword: ref(''),
		newPassword: ref(''),
		confirmPassword: ref(''),
	};

	const loading = ref(false);

	const disabled = computed(() => {
		return (
			loading.value ||
			!credential.currentPassword.value ||
			!credential.newPassword.value ||
			!credential.confirmPassword.value
		);
	});

	// Computed properties for validation
	const passwordMismatch = computed(() => {
		return credential.newPassword.value !== credential.confirmPassword.value;
	});

	const change_password = async () => {
		loading.value = true;
		try {
			const res = (await auth_api.$_change_password({
				currentPassword: credential.currentPassword.value,
				newPassword: credential.newPassword.value,
			})) as any;

			loading.value = false;

			if (res.type !== 'ERROR') {
				useNuxtApp().$toast.success("Password was updated successfully.", {
					autoClose: 5000,
					dangerouslyHTMLString: true,
				});
				localStorage.clear();
				Router.push('/dashboard/profile/password-change-success');
			} else {
				// Handle specific error response from the API
				useNuxtApp().$toast.error(res?.data?.error || 'An error occurred while changing the password.', {
					autoClose: 5000,
					dangerouslyHTMLString: true,
				});
			}
		} catch (error: any) {
			loading.value = false;
			// Display a general error message for unexpected errors
			useNuxtApp().$toast.error(error.response?.data?.message || 'An unexpected error occurred. Please try again.', {
				autoClose: 5000,
				dangerouslyHTMLString: true,
			});
		}
	};

	return { credential, change_password, loading, disabled, passwordMismatch };
};
