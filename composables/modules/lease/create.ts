import { lease_api } from "@/api_factory/modules/lease";
import { useCustomToast } from '@/composables/core/useCustomToast';
import { useStorage } from '@vueuse/core';
const { showToast } = useCustomToast();
const loading = ref(false);

// Bind payload to localStorage
const payload = useStorage('lease-template-payload', {
    body: "<html></html>",
    documentName: "",
    propertyId: "",
    startDate: "",
    endDate: "",
    tenantId: ""
});

const router = useRouter();

export const useCreateLeaseTemplate = () => {
    const createLeaseTemplate = async () => {
        loading.value = true;
        const res = await lease_api.$_create_lease_template({
            body: `<html>${payload.value.body}</html>`,
            documentName: payload.value.documentName
        }) as any;

        if (res.type !== 'ERROR') {
            showToast({
                title: "Success",
                message: 'Lease Template was created successfully',
                toastType: "success",
                duration: 3000
            });
            // Clear the payload after successful creation
            payload.value = {
                body: "<html></html>",
                documentName: "",
                propertyId: "",
                startDate: "",
                endDate: "",
                tenantId: ""
            };
            router.push('/dashboard/property/lease-documents/lease-document-success');
        } else {
            showToast({
                title: "Error",
                message: 'Lease Template creation failed',
                toastType: "error",
                duration: 3000
            });
        }
        loading.value = false;
    };

    const setPayloadObj = (data: any) => {
        // Update the payload and it will be automatically synced to localStorage
        payload.value.body = data.body || payload.value.body;
        payload.value.documentName = data.documentName || payload.value.documentName;
        payload.value.propertyId = data.propertyId || payload.value.propertyId;
        payload.value.startDate = data.startDate || payload.value.startDate;
        payload.value.endDate = data.endDate || payload.value.endDate;
        payload.value.tenantId = data.tenantId || payload.value.tenantId;
    };

    return { createLeaseTemplate, loading, payload, setPayloadObj };
};
