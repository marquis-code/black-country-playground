import { rental_api } from "@/api_factory/modules/rental";
import { useCustomToast } from '@/composables/core/useCustomToast'
import { useRouter } from "vue-router"; // Make sure to import the router

const loading = ref(false);

export const useDeclineRental = () => {
  const { showToast } = useCustomToast();
  const router = useRouter(); // Initialize router

  // Function to handle rental action (either cancel or approve)
  const declineRentalApplication = async (id: string, payload: any) => {
    loading.value = true;
    
    try {
      // Make patch request using the payload
      const res = await rental_api.$_cancel_rental_application(id, payload) as any;
      if (res.type !== 'ERROR') {
        showToast({
          title: "Success",
          message: 'Rental application was declined successfully.',
          toastType: "success",
          duration: 3000
        });
        router.push('/dashboard/property/rental-applications/decline-success')
      } else {
        console.log(res, 'hello')
        showToast({
          title: "Error",
          message:  res.data.error,
          toastType: "error",
          duration: 3000
        });
        console.error("Failed to update rental status", res.message);
      }
    } catch (error) {
      showToast({
        title: "Error",
        message:  "An unexpected error occurred.",
        toastType: "error",
        duration: 3000
      });
    } finally {
      loading.value = false;
    }
  };

  return { declineRentalApplication, loading };
};
