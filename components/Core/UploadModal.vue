<template>
<main>
 <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <h2 class="text-lg font-medium mb-4">Generate lease agreement</h2>
      <!-- <div v-if="extractedContent">
        <h3>Extracted Content</h3>
        <pre>{{ extractedContent }}</pre>
      </div> -->
      <div
        class="border-2 border-dashed rounded-lg p-4 flex flex-col items-center bg-[#F9FAFB] justify-center gap-2"
        @drop.prevent="handleFileDrop"
        @dragover.prevent
      >
        <div v-if="!selectedFile">
       <div class="flex justify-center items-center pb-3">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66797 20.0009V24.2411C6.66797 29.6494 6.66797 32.3538 8.14475 34.1853C8.4431 34.5553 8.78015 34.8924 9.15019 35.1908C10.9818 36.6676 13.686 36.6676 19.0943 36.6676C20.2703 36.6676 20.8581 36.6676 21.3966 36.4776C21.5086 36.4379 21.6183 36.3926 21.7255 36.3413C22.2406 36.0949 22.6563 35.6793 23.4878 34.8478L31.382 26.9534C32.3455 25.9901 32.8271 25.5083 33.081 24.8958C33.3346 24.2833 33.3346 23.6019 33.3346 22.2394V16.6676C33.3346 10.3821 33.3346 7.23945 31.382 5.28682C29.6168 3.52155 26.8788 3.35219 21.7255 3.33594M21.668 35.8343V35.0009C21.668 30.2868 21.668 27.9298 23.1325 26.4653C24.597 25.0009 26.954 25.0009 31.668 25.0009H32.5013" stroke="#1D2739" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20.0013 9.9987H6.66797H20.0013ZM13.3346 3.33203V16.6654V3.33203Z" fill="#5B8469"/>
              <path d="M20.0013 9.9987H6.66797M13.3346 3.33203V16.6654" stroke="#DD900D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
       </div>
              
          <p class="text-[#292929] text-center text-sm">
            Drag and drop photos here or <span class="text-[#326543] cursor-pointer" @click="chooseFile">Choose file</span>
          </p>
          <p class="text-xs text-[#667185] text-center">Supported formats: pdf, doc</p>
          <input type="file" ref="fileInput" class="hidden" @change="handleFileSelect" />
        </div>
        <div v-else class="w-full">
          <div class="flex items-center justify-between">
           <div class="flex items-center gap-2">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="36" height="36" rx="8" fill="#5B8469"/>
              <path d="M21.3333 22.167H15.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M21.332 18.833H18.832" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M25.0846 19.667C25.0846 22.8097 25.0846 24.3811 24.0473 25.3573C23.01 26.3337 21.3404 26.3337 18.0013 26.3337H17.3574C14.6397 26.3337 13.2809 26.3337 12.3372 25.6688C12.0668 25.4783 11.8268 25.2524 11.6244 24.9979C10.918 24.1097 10.918 22.8308 10.918 20.2731V18.1518C10.918 15.6825 10.918 14.4479 11.3088 13.4618C11.937 11.8765 13.2656 10.6261 14.9499 10.0348C15.9977 9.66699 17.3095 9.66699 19.9331 9.66699C21.4324 9.66699 22.182 9.66699 22.7806 9.87716C23.7431 10.215 24.5023 10.9296 24.8613 11.8354C25.0846 12.3989 25.0846 13.1044 25.0846 14.5155V19.667Z" stroke="white" stroke-width="1.5" stroke-linejoin="round"/>
              <path d="M10.918 18.0003C10.918 16.4662 12.1616 15.2226 13.6957 15.2226C14.2506 15.2226 14.9047 15.3198 15.4441 15.1752C15.9234 15.0468 16.2978 14.6724 16.4262 14.1931C16.5707 13.6537 16.4736 12.9996 16.4736 12.4448C16.4736 10.9106 17.7172 9.66699 19.2513 9.66699" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
            <div>
              <p class="text-[#292929] font-medium ">{{ selectedFile.name }}</p>
              <p class="text-xs text-gray-500">{{ fileSize }} MB</p>
            </div>
           </div>
            <div>
              <button @click="removeFile" class="text-[#326543] text-sm">Remove</button>
            </div>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2.5 mt-2">
            <div :style="{ width: uploadProgress + '%' }" class="bg-green-600 h-2.5 rounded-full"></div>
          </div>
          <p class="text-sm text-gray-500 text-right mt-1">{{ uploadProgress }}%</p>
        </div>
      </div>

      <div class="mt-20 flex justify-between w-full gap-x-5">
        <button @click="cancelUpload" class="px-4 w-full py-4 bg-[#EBE5E0] text-gray-700 rounded-md">Cancel</button>
        <button @click="continueAction" class="px-4 w-full py-4 bg-[#292929] text-white rounded-md" :disabled="!selectedFile">Continue</button>
      </div>
    </div>
  </div> 
</main>
  </template>

<script setup lang="ts">
import { ref } from 'vue';
import mammoth from 'mammoth';
import * as pdfjsLib from 'pdfjs-dist/webpack'; // Importing pdfjs-dist for text extraction
import { useCreateLeaseTemplate } from '@/composables/modules/lease/create'

const { payload } = useCreateLeaseTemplate();
const router = useRouter();

const selectedFile = ref<File | null>(null);
const uploadProgress = ref(0);
const fileSize = ref(0);
const extractedContent = ref<string>(''); // To store the extracted content as text/HTML

const fileInput = ref<HTMLInputElement | null>(null);

const handleFileSelect = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    selectedFile.value = target.files[0];
    fileSize.value = (selectedFile.value.size / (1024 * 1024)).toFixed(2); // Convert to MB
    startUpload();
  }
};

const chooseFile = () => {
  fileInput.value?.click();
};

const removeFile = () => {
  selectedFile.value = null;
  uploadProgress.value = 0;
  extractedContent.value = ''; // Reset content when file is removed
};

const handleFileDrop = (event: DragEvent) => {
  const file = event.dataTransfer?.files[0];
  if (file) {
    selectedFile.value = file;
    fileSize.value = (selectedFile.value.size / (1024 * 1024)).toFixed(2); // Convert to MB
    startUpload();
  }
};

// Function to extract text from docx file using mammoth
const readDocxFile = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value;
};

// Extract text from PDF using pdfjs-dist
const readPdfFile = async (file: File): Promise<string> => {
  const arrayBuffer = await file.arrayBuffer();
  const typedArray = new Uint8Array(arrayBuffer);
  const pdf = await pdfjsLib.getDocument(typedArray).promise;

  let text = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const pageText = await page.getTextContent();
    const pageContent = pageText.items.map(item => item.str).join(' ');
    text += pageContent + '\n';
  }

  return text;
};

const startUpload = async () => {
  if (!selectedFile.value) return;

  // Reset content and progress
  extractedContent.value = '';
  uploadProgress.value = 0;

  let content = '';
  const fileType = selectedFile.value.type;

  if (fileType === 'application/pdf') {
    content = await readPdfFile(selectedFile.value);
  } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
    content = await readDocxFile(selectedFile.value);
  } else {
    console.log('Unsupported file type');
    return;
  }

  extractedContent.value = content;
  payload.value.body = extractedContent.value;

  // Simulating API call and updating progress
  const simulateUpload = new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      if (uploadProgress.value >= 100) {
        clearInterval(interval);
        resolve();
      } else {
        uploadProgress.value += 10;
      }
    }, 200);
  });

  await simulateUpload;
  console.log('Upload complete');
};

const cancelUpload = () => {
  removeFile();
};

const continueAction = () => {
  if (uploadProgress.value === 100) {
    console.log('Continue with file:', selectedFile.value);
    console.log('Extracted content:', extractedContent.value);
    router.push('/dashboard/property/lease-documents/preview-upload');
  }
};
</script>
