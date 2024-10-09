<template>
<main>
  <div class="p-6">
    <div class="flex items-center space-x-4 mb-6">
      <button class="text-gray-500">
        <span class="material-icons">arrow_back</span>
      </button>
      <h1 class="text-xl font-semibold">Select a template</h1>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <TemplateCard 
        v-for="template in templates" 
        :key="template.id" 
        :template="template" 
      />
    </div>

    <div class="flex justify-between items-center mt-6">
      <button 
        class="bg-gray-200 text-gray-500 px-4 py-2 rounded"
        :disabled="currentPage === 1"
        @click="prevPage"
      >
        Previous
      </button>
      <div class="flex space-x-2">
        <span 
          v-for="page in totalPages" 
          :key="page" 
          @click="goToPage(page)"
          class="cursor-pointer px-2 py-1"
          :class="{'text-blue-500': page === currentPage, 'text-gray-500': page !== currentPage}"
        >
          {{ page }}
        </span>
      </div>
      <button 
        class="bg-blue-500 text-white px-4 py-2 rounded"
        :disabled="currentPage === totalPages"
        @click="nextPage"
      >
        Next
      </button>
    </div>
  </div>
  <PropertyGenerateLeaseAgreementModal v-if="generateLeaseDocument" @close="generateLeaseDocument = false" />
</main>
  </template>
  
  <script setup lang="ts">  
  // Sample template data
  const templates = ref([
    { id: 1, name: 'Blank template', description: 'Start from scratch' },
    { id: 2, name: 'Sample template', description: 'Use this template' },
    { id: 3, name: 'Sample template', description: 'Use this template' },
    { id: 4, name: 'Sample template', description: 'Use this template' },
    { id: 5, name: 'Sample template', description: 'Use this template' },
    { id: 6, name: 'Sample template', description: 'Use this template' },
    { id: 7, name: 'Sample template', description: 'Use this template' },
    { id: 8, name: 'Sample template', description: 'Use this template' },
  ]);
  
  const generateLeaseDocument = ref(false);

  const currentPage = ref(1);
  const totalPages = 10;
  
  const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--;
  };
  
  const nextPage = () => {
    if (currentPage.value < totalPages) currentPage.value++;
  };
  
  const goToPage = (page: number) => {
    currentPage.value = page;
  };
  </script>
  
  <style scoped>
  .material-icons {
    font-size: 24px;
  }
  </style>
  