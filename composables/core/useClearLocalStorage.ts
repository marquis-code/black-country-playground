import { useRouter } from 'vue-router';

export function useClearLocalStorage() {
  const router = useRouter();

  const clearLocalStorage = () => {
    // Get the user and token values before clearing
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    // Clear all localStorage items
    localStorage.clear();

    // Restore user and token
    if (user) {
      localStorage.setItem('user', user);
    }
    if (token) {
      localStorage.setItem('token', token);
    }

    // Redirect the user to the specified page
    router.push('/dashboard/property');
  };

  return { clearLocalStorage };
}
