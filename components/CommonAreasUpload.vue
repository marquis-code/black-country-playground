<template>
  <div>
    <!-- Common Areas Grid Layout -->
    <section class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div
        v-for="(commonArea, featureIndex) in commonAreas"
        :key="commonArea.name"
        class="relative border border-gray-25 rounded-lg p-4 bg-[#F7F6F3]"
      >
        <!-- Placeholder or Image Preview -->
        <div
          class="relative w-full h-44 rounded-lg overflow-hidden bg-gray-25 flex items-center justify-center"
        >
          <template v-if="loadingStateCommonAreas[featureIndex]">
            <!-- Show spinner while uploading -->
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-gray-500"></div>
          </template>
          <template v-else>
            <img
              v-if="commonArea.images.length"
              :src="commonArea.images[0]"
              alt="Image"
              class="w-full h-full object-cover rounded-md"
            />
            <div class="flex justify-center items-center h-full" v-else>
              <!-- Placeholder image when no image is present -->
              <img
                src="@/assets/img/image-02.png"
                alt="Placeholder Image"
                class="w-20 h-20 object-cover"
              />
            </div>
          </template>
        </div>

        <!-- Common Area Info and Add Photo Button -->
        <div class="flex justify-between items-center mt-4">
          <div class="text-gray-800">
            <span>{{ commonArea.name }}</span>
            <span class="text-gray-500"> | {{ commonArea.images.length }} image</span>
          </div>
          <button
            @click="triggerFileInputCommonArea(featureIndex)"
            class="px-4 py-2 flex items-center bg-gray-600 text-white text-sm rounded-md hover:bg-gray-500"
          >
            + Add photo
          </button>
        </div>

        <!-- Hidden file input for uploading images -->
        <input
          type="file"
          accept="image/png, image/jpeg"
          multiple
          @change="uploadImagesCommonArea($event, featureIndex)"
          class="hidden"
          ref="fileInputCommonAreas"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useBatchUploadFile } from '@/composables/core/batchUpload'; // Import composable for uploading files
import { useCustomToast } from '@/composables/core/useCustomToast';
import { use_create_property } from '@/composables/modules/property/create';
const { payload } = use_create_property();
const { showToast } = useCustomToast();

// Use composable for batch uploading files
const { uploadFiles, uploadResponse, loading } = useBatchUploadFile();

// State for common areas
const commonAreas = ref<any[]>([]);
const loadingStateCommonAreas = ref<boolean[]>([]);
const activeImageIndexCommonAreas = ref<number[]>([]);
const activeCommonAreaIndex = ref(0);
const currentCommonArea = computed(() => commonAreas.value[activeCommonAreaIndex.value]);

// On mounted, load common areas from local storage
onMounted(() => {
  const savedCommonAreas = localStorage.getItem('property_commonAreas');
  if (savedCommonAreas) {
    const parsedCommonAreas = JSON.parse(savedCommonAreas);

    // Check if the parsedCommonAreas is an array of arrays and flatten it if necessary
    if (Array.isArray(parsedCommonAreas[0])) {
      commonAreas.value = parsedCommonAreas.flat();
    } else {
      commonAreas.value = parsedCommonAreas;
    }

    // Initialize activeImageIndexCommonAreas for each common area
    commonAreas.value.forEach((commonArea) => {
      activeImageIndexCommonAreas.value.push(0); // Initialize active image index for each common area
      loadingStateCommonAreas.value.push(false); // Initialize loading state for each common area
    });
  }
});

// Watch common areas and persist them to local storage when changes occur
watch(commonAreas, (newCommonAreas) => {
  localStorage.setItem('property_commonAreas', JSON.stringify(newCommonAreas));
}, { deep: true });

// Handle batch file input and upload for common areas
const uploadImagesCommonArea = async (event: Event, featureIndex: number) => {
  const files = (event.target as HTMLInputElement).files;
  if (files && files.length > 0) {
    loadingStateCommonAreas.value[featureIndex] = true; // Show loading spinner

    try {
      const formData = new FormData();
      for (const file of files) {
        formData.append('files[]', file);
      }

      // Upload files
      const response = await uploadFiles(formData);

      // Handle the upload response and add the images to the appropriate common area's images array
      if (uploadResponse.value && uploadResponse.value.length) {
        uploadResponse.value.forEach((uploadedFile: any) => {
          commonAreas.value[featureIndex].images.push(uploadedFile.secure_url); // Group images by commonArea
        });
        activeImageIndexCommonAreas.value[featureIndex] =
          commonAreas.value[featureIndex].images.length - 1;
        showToast({
          title: 'Success',
          message: 'Batch upload successful!',
          toastType: 'success',
          duration: 3000,
        });
      }
    } catch (error) {
      showToast({
        title: 'Error',
        message: 'Batch upload failed. Please try again.',
        toastType: 'error',
        duration: 3000,
      });
    } finally {
      loadingStateCommonAreas.value[featureIndex] = false; // Hide loading spinner
    }
  }
};

// Trigger file input for common areas
const triggerFileInputCommonArea = (featureIndex: number) => {
  const fileInputs = document.querySelectorAll('input[type="file"]');
  if (fileInputs[featureIndex]) fileInputs[featureIndex].click();
};
</script>

<style scoped>
/* Styling for the spinner */
.spinner-border {
  border-color: transparent transparent gray transparent;
}

/* Styling for the grid layout */
.grid-cols-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

@media (max-width: 1024px) {
  .grid-cols-2 {
    grid-template-columns: 1fr;
  }
}

/* Add additional styles as needed for responsiveness and layout */
</style>
