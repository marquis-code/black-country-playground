import { rental_api } from "@/api_factory/modules/rental";
import { useRouter } from "vue-router"; // Make sure to import the router

const loading = ref(false);

// const payload =ref( { id: '', status: '', idDocs: null})

export const useDeclineRental = () => {
  const router = useRouter(); // Initialize router

  // Function to handle rental action (either cancel or approve)
  const declineRentalApplication = async (id: string, payload: any) => {
    loading.value = true;
    
    try {
      // Make patch request using the payload
      const res = await rental_api.$_cancel_rental_application(id, payload) as any;
      
      // Check if the response is not an error
      if (res.type !== 'ERROR') {
        // Redirect to dashboard after successful cancellation or approval
        router.push('/dashboard/');
      } else {
        console.error("Failed to update rental status", res.message);
      }
    } catch (error) {
      console.error("An error occurred while updating the rental status", error);
    } finally {
      loading.value = false;
    }
  };

  return { declineRentalApplication, loading };
};
