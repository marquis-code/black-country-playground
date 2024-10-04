import { member_api } from "@/api_factory/modules/member";
const loading = ref(false)

export const useDeleteMember = () => {
	const deleteMember = async (id: string | number) => {
		loading.value = true
		const res = await  member_api.$_delete_member(id) as any

        if (res.type !== 'ERROR') {
			useRouter().push('/dashboard/members')
        }
        loading.value = false
	}

	return { deleteMember, loading }
}
