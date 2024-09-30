// composables/useInactivity.ts
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useRouter } from 'vue-router';

export function useInactivity(timeout = 600000, warningTime = 60000) { // default timeout 10 mins, warning 1 min
  const router = useRouter();
  const lastActivity = ref(Date.now());
  const isWarningVisible = ref(false);
  const countdown = ref(warningTime / 1000); // Countdown in seconds
  
  // Function to update the last activity time
  const updateActivity = () => {
    lastActivity.value = Date.now();
    if (isWarningVisible.value) {
      isWarningVisible.value = false;
    }
  };

  // Function to check if the user is inactive
  const checkInactivity = () => {
    const elapsedTime = Date.now() - lastActivity.value;
    if (elapsedTime > timeout - warningTime && elapsedTime <= timeout && !isWarningVisible.value) {
      showWarning();
    } else if (elapsedTime > timeout) {
      handleLogout();
    }
  };

  // Function to show the warning modal
  const showWarning = () => {
    isWarningVisible.value = true;
    startCountdown();
  };

  // Function to start the countdown timer
  const startCountdown = () => {
    const interval = setInterval(() => {
      countdown.value--;
      if (countdown.value <= 0) {
        clearInterval(interval);
        handleLogout();
      }
    }, 1000);
  };

  // Function to log out the user
  const handleLogout = () => {
    // Clear any user data or tokens here
    localStorage.removeItem('userToken'); // Adjust based on how you're storing user data
    router.push('/login'); // Redirect to login page
  };

  // Set up event listeners to detect user activity
  const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
  
  onMounted(() => {
    events.forEach(event => window.addEventListener(event, updateActivity));

    // Check for inactivity every 1 minute (adjust the interval as needed)
    const inactivityInterval = setInterval(checkInactivity, 1000);

    // Cleanup when the component is unmounted
    onUnmounted(() => {
      events.forEach(event => window.removeEventListener(event, updateActivity));
      clearInterval(inactivityInterval);
    });
  });

  return {
    isWarningVisible,
    countdown,
  };
}
