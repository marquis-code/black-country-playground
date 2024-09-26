import { auth_api } from "@/api_factory/modules/auth";


export const use_admin_profile = () => {
  const profileObj = ref({}) as any
  const loading = ref(false);

  const getProfile = async () => {
    loading.value = true;
    try {
      const res = await auth_api.$_get_profile();

      if(res.status == 200 || res.status == 201){
        console.log(res, 'res here');
         profileObj.value = res.data
      }

    } catch (error) {
        useNuxtApp().$toast.error('Error Fetching profile.', {
            autoClose: 5000,
            dangerouslyHTMLString: true,
          });
    } finally {
      loading.value = false;
    }
  };

  onMounted(() => {
    getProfile()
  })

  return { getProfile, loading, profileObj };
};
