import { auth_api } from '@/api_factory/modules/auth'
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

export const use_change_password = () => {
	const Router = useRouter();
	const credential = {
		currentPassword: ref(''),
		newPassword: ref(''),
		confirmPassword: ref(''),
	};

	const loading = ref(false);

	const passwordMismatch = computed(() => {
		return credential.newPassword.value !== credential.confirmPassword.value;
	});

	const currentPasswordSameAsNew = computed(() => {
		return credential.currentPassword.value === credential.newPassword.value;
	});

	const errorMessage = computed(() => {
		if (loading.value) {
			return 'Processing your request...';
		}
		if (!credential.currentPassword.value) {
			return 'Current password is required.';
		}
		if (!credential.newPassword.value) {
			return 'New password is required.';
		}
		if (!credential.confirmPassword.value) {
			return 'Please confirm your new password.';
		}
		if (passwordMismatch.value) {
			return 'New password and confirmation do not match.';
		}
		if (currentPasswordSameAsNew.value) {
			return 'New password cannot be the same as the current password.';
		}
		return ''; // No error
	});

	const disabled = computed(() => {
		return (
			loading.value ||
			!credential.currentPassword.value ||
			!credential.newPassword.value ||
			!credential.confirmPassword.value ||
			passwordMismatch.value ||  // Check for password mismatch
			currentPasswordSameAsNew.value // Check if current password is the same as new password
		);
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
				useNuxtApp().$toast.error(res?.data?.error || 'An error occurred while changing the password.', {
					autoClose: 5000,
					dangerouslyHTMLString: true,
				});
			}
		} catch (error: any) {
			loading.value = false;
			useNuxtApp().$toast.error(error.response?.data?.message || 'An unexpected error occurred. Please try again.', {
				autoClose: 5000,
				dangerouslyHTMLString: true,
			});
		}
	};

	return { credential, change_password, loading, disabled, errorMessage };
};
