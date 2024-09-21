import { ref } from 'vue';

export const useGlobalModal = () => {
  const isModalVisible = ref(false);
  const modalData = ref({
    title: '',
    description: '',
    price: 0,
    location: '',
    // Add more fields as needed
  });

  const openModal = (data: any) => {
    modalData.value = data;
    isModalVisible.value = true;
  };

  const closeModal = () => {
    isModalVisible.value = false;
  };

  return {
    isModalVisible,
    modalData,
    openModal,
    closeModal,
  };
};
