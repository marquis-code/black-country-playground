<template>
    <div class="bg-white rounded-lg mt-3 w-full">
      <h2 class="text-sm font-medium mb-4 text-[#1D2739]">Signature</h2>
  
      <!-- Signature Method Selector -->
      <section class="flex justify-between items-center">
        <div class="flex space-x-6 border-b">
          <button
            @click="setMode('draw')"
            :class="{ 'border-[#1D2739] text-[#1D2739]': mode === 'draw' }"
            class="pb-2 text-sm border-b-2 border-transparent"
          >
            Draw
          </button>
          <button
            @click="setMode('type')"
            :class="{ 'border-[#1D2739] text-[#1D2739]': mode === 'type' }"
            class="pb-2 text-sm border-b-2 border-transparent"
          >
            Type
          </button>
          <button
            @click="setMode('upload')"
            :class="{ 'border-[#1D2739] text-[#1D2739]': mode === 'upload' }"
            class="pb-2 text-sm border-b-2 border-transparent"
          >
            Upload
          </button>
        </div>
  
        <div class="flex items-center space-x-2">
          <div
            v-for="color in colors"
            :key="color"
            :style="{ backgroundColor: color }"
            class="w-6 h-6 rounded-full cursor-pointer border-4"
            :class="{
              'border-gray-300': selectedColor !== color,
              'border-black': selectedColor === color
            }"
            @click="selectColor(color)"
          ></div>
        </div>
      </section>
  
      <!-- Draw Mode -->
      <div v-if="mode === 'draw'" class="mb-4 border-[0.5px] rounded-lg">
        <Vue3Signature
          ref="signaturePad"
          class="bg-[#F0F2F5]"
          :sigOption="{ ...state.option, penColor: selectedColor }"
          :w="'600px'"
          :h="'100px'"
        />
        <div class="flex space-x-4 mt-2 p-3">
          <button @click="saveSignature('image/jpeg')" class="bg-black text-white text-xs px-4 py-2 rounded-sm">Save Drawing</button>
          <button @click="clearSignature" class="bg-black text-white text-xs px-4 py-2 rounded-sm">Clear</button>
          <button @click="undoSignature" class="bg-black text-white text-xs px-4 py-2 rounded-sm">Undo</button>
        </div>
      </div>
  
      <!-- Type Mode -->
      <div v-if="mode === 'type'" class="mb-4 rounded-b-lg border-[0.5px] border-gray-100 bg-[#F0F2F5]">
        <input
          v-model="typedSignature"
          placeholder="Type your signature"
          class="w-full p-2 py-10 outline-none text-center bg-[#F0F2F5] rounded"
          :style="{ fontFamily: 'Cursive', fontSize: '24px', color: selectedColor }"
        />
        <div class="m-3">
          <button @click="saveTypedSignatureAsImage" class="mt-2 bg-black text-white text-xs px-3 py-2.5 rounded-md">Save Typed Signature</button>
        </div>
        <canvas ref="canvas" class="hidden"></canvas>
      </div>
  
      <!-- Upload Mode -->
      <div v-if="mode === 'upload'" class="mb-4 border-[0.5px] border-gray-100 py-10 bg-[#F0F2F5] rounded-b-lg flex justify-center items-center">
        <div v-if="!previewImage" class="text-center py-8">
          <p class="text-sm text-gray-500">Supports <span class="text-black">jpg, png</span> <span class="text-sm text-gray-500">Size</span> <span class="text-black">20 MB</span></p>
          <label class="cursor-pointer text-black font-medium text-sm">
            <input type="file" @change="handleFileUpload" accept="image/*" class="hidden text-sm" />
            Select Image
          </label>
        </div>
        <div v-else class="mt-4">
          <img :src="previewImage" alt="Preview" class="max-w-xs h-32 w-32 object-cover border rounded-md" />
        </div>
        <button v-if="previewImage" @click="saveUploadedSignature" class="mt-2 ml-3 bg-black text-white text-xs px-3 py-2.5 rounded-md">Save Uploaded Signature</button>
      </div>
  
      <!-- Display the saved signature -->
      <div v-if="savedSignature" class="mt-6 p-4 rounded-lg border border-gray-50 bg-[#F0F2F5]">
        <h3 class="text-sm font-medium mb-2">Saved Signature:</h3>
        <div v-if="mode === 'draw' || mode === 'upload'" class="f">
          <img :src="savedSignature" alt="Signature" class="border p-2 h-32 w-full object-cover rounded max-w-xs" />
        </div>
        <div v-if="mode === 'type'" class="typed-signature">
          <img :src="savedSignature" alt="Typed Signature Image" class="border p-2 h-32 w-full object-cover rounded max-w-xs" />
        </div>
      </div>
  
      <p class="text-gray-600 mt-4 text-xs">
        By signing this document with an electronic signature, I agree that such signature will be as valid as handwritten signatures.
      </p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, reactive } from 'vue'
  import Vue3Signature from 'vue3-signature'
  
  const mode = ref('type') // Default mode
  const typedSignature = ref('')
  const savedSignature = ref<string | null>(null)
  const uploadedSignature = ref<File | null>(null)
  const previewImage = ref<string | null>(null) // Holds the preview image for uploaded signatures
  const selectedColor = ref('#0000FF') // Default signature color (blue)
  const colors = ['#000000', '#0000FF', '#FF0000'] // Available colors for signature
  
  const state = reactive({
    option: {
      backgroundColor: "rgb(255,255,255)"
    }
  })
  const signaturePad = ref(null)
  const canvas = ref<HTMLCanvasElement | null>(null)
  
  const setMode = (newMode: string) => {
    mode.value = newMode
  }
  
  const emit = defineEmits(['signature'])
  
  // Save the drawn signature
  const saveSignature = (type: string) => {
    if (signaturePad.value) {
      const signatureData = signaturePad.value.save(type)
      savedSignature.value = signatureData
      emit('signature', savedSignature.value)
    }
  }
  
  // Clear the drawn signature
  const clearSignature = () => {
    signaturePad.value?.clear()
  }
  
  // Undo the last action in the drawn signature
  const undoSignature = () => {
    signaturePad.value?.undo()
  }
  
  // Save the typed signature as an image using canvas
  const saveTypedSignatureAsImage = () => {
    if (!typedSignature.value || !canvas.value) return
  
    const ctx = canvas.value.getContext('2d')
    if (ctx) {
      canvas.value.width = 600
      canvas.value.height = 100
  
      ctx.fillStyle = 'rgb(255, 255, 255)' // Background color
      ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)
      ctx.font = '24px Cursive'
      ctx.fillStyle = selectedColor.value
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(typedSignature.value, canvas.value.width / 2, canvas.value.height / 2)
  
      savedSignature.value = canvas.value.toDataURL('image/png')
      emit('signature', savedSignature.value)
    }
  }
  
  // Handle file upload for signature and preview it
  const handleFileUpload = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0] || null
    uploadedSignature.value = file
  
    // Generate preview image
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        previewImage.value = e.target?.result as string
      }
      reader.readAsDataURL(file)
    }
  }
  
  // Save the uploaded signature (same as preview image)
  const saveUploadedSignature = () => {
    if (previewImage.value) {
      savedSignature.value = previewImage.value
      emit('signature', savedSignature.value)
    }
  }
  
  // Change the signature color
  const selectColor = (color: string) => {
    selectedColor.value = color
  }
  </script>
  