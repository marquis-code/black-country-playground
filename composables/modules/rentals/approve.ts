import { rental_api } from "@/api_factory/modules/rental";
import { useCustomToast } from '@/composables/core/useCustomToast'
import { useRouter } from "vue-router"; // Make sure to import the router

const loading = ref(false);

// const payload =ref( { id: '', status: '', idDocs: null})

export const useApproveRental = () => {
  const router = useRouter(); // Initialize router
  const { showToast } = useCustomToast();

  // Function to handle rental action (either cancel or approve)
  const approveRentalApplication = async (id: string, payload: any) => {
    loading.value = true;
    
    try {
      // Make patch request using the payload
      const res = await rental_api.$_approve_rental_application(id, payload) as any;
      console.log(res, 'approce')
      // Check if the response is not an error
      if (res.type !== 'ERROR') {
        showToast({
          title: "Error",
          message: 'Rental application was approved successfully.',
          toastType: "error",
          duration: 3000
        });
      } else {
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

  return { approveRentalApplication, loading };
};
