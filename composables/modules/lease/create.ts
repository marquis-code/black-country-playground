import { lease_api } from "@/api_factory/modules/lease";
import { useCustomToast } from '@/composables/core/useCustomToast'
const { showToast } = useCustomToast();
const loading = ref(false)
const payload = ref({
    body: "<html></html>",
    documentName: "template 1"
})
const router = useRouter()

export const useCreateLeaseTemplate = () => {
	const createLeaseTemplate = async () => {
		loading.value = true
		const res = await  lease_api.$_create_lease_template({
            body: `<html>${payload.value.body}</html>`,
            documentName: payload.value.documentName
        }) as any

        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: 'Lease Template was created successfully',
                toastType: "success",
                duration: 3000
              });
              router.push('/dashboard/property/lease-documents/lease-document-success')
        } else {
            showToast({
                title: "Error",
                message: 'Lease Template creation failed',
                toastType: "error",
                duration: 3000
              });
        }
        loading.value = false
	}

    const setPayloadObj = (data: any) => {
        payload.value.body = data.body
        payload.value.documentName = data.documentName
	}

	return { createLeaseTemplate, loading, payload, setPayloadObj }
}
