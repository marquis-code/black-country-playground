import { auth_api } from '@/api_factory/modules/auth'
export const use_change_password = () => {
	const Router = useRouter()
	const credential = {
		currentPassword: ref(''),
        newPassword: ref(''),
		confirmPassword: ref('')
	}

	const loading = ref(false)


	const disabled = computed(() => {
		return (
		  loading.value || !credential.currentPassword.value || !credential.newPassword.value || !credential.confirmPassword
		);
	  });


  // Computed properties for validation
  const passwordMismatch = computed(() => {
	return credential.newPassword.value !== credential.confirmPassword.value;
  });

	const change_password = async () => {
		loading.value = true
		const res = (await auth_api.$_change_password({
			currentPassword: credential.currentPassword.value,
            newPassword: credential.newPassword.value
		})) as any

		loading.value = false
		if (res.type !== 'ERROR') {
			useNuxtApp().$toast.success("Password was updated successfully.", {
				autoClose: 5000,
				dangerouslyHTMLString: true,
			  });
			Router.push('/login')
		}
	}

	return { credential, change_password, loading, disabled, passwordMismatch }
}
