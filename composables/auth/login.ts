import { useUser } from "@/composables/auth/user";
import { auth_api } from "@/api_factory/modules/auth";

const credential = {
  email: ref(""),
  password: ref(""),
};

export const use_auth_login = () => {
  const router = useRouter();
  const loading = ref(false);

  const isFormDisabled = computed(() => {
    return (
      loading.value || !credential.email.value || !credential.password.value
    );
  });

  const login = async () => {
    loading.value = true;
    const res = (await auth_api.$_login({
      email: credential.email.value,
      password: credential.password.value,
    })) as any;
    console.log(res, "response gere");
    loading.value = false;
    if (res.type !== "ERROR") {
      useUser().createUser(res.data);
      router.push("/dashboard");
    }
  };
  return { credential, login, loading, isFormDisabled };
};
