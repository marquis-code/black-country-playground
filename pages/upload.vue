<template>
    <div>
      <h1>PDF Editor</h1>
      <input type="file" @change="onFileChange" accept="application/pdf" />
      <canvas ref="pdfCanvas" v-if="pdfLoaded"></canvas>
      <button v-if="pdfLoaded" @click="editPdfContent">Edit PDF</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { PDFDocument, rgb } from 'pdf-lib';
  import * as pdfjsLib from 'pdfjs-dist/build/pdf';
  
  // Set the worker source
  pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
  
  const pdfCanvas = ref<HTMLCanvasElement | null>(null);
  const pdfLoaded = ref(false);
  let pdfData: ArrayBuffer | null = null;
  
  // Function to handle file input and load PDF
  const onFileChange = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
  
    if (file && file.type === 'application/pdf') {
      const fileReader = new FileReader();
  
      fileReader.onload = async (e) => {
        pdfData = e.target?.result as ArrayBuffer;
        await renderPdf(pdfData);  // Render the uploaded PDF
        pdfLoaded.value = true;
      };
  
      fileReader.readAsArrayBuffer(file);
    }
  };
  
  // Function to render the PDF in the canvas
  const renderPdf = async (pdfData: ArrayBuffer) => {
    if (!pdfCanvas.value) return;
  
    const loadingTask = pdfjsLib.getDocument({ data: pdfData });
    const pdf = await loadingTask.promise;
    const page = await pdf.getPage(1);  // Get the first page of the PDF
  
    const viewport = page.getViewport({ scale: 1.5 });  // Adjust scale for visibility
    const context = pdfCanvas.value.getContext('2d');
    pdfCanvas.value.height = viewport.height;
    pdfCanvas.value.width = viewport.width;
  
    if (context) {
      const renderContext = {
        canvasContext: context,
        viewport: viewport,
      };
      await page.render(renderContext).promise;  // Render the PDF page to the canvas
    }
  };
  
  // Function to edit the PDF using pdf-lib
  const editPdfContent = async () => {
    if (!pdfData) return;
  
    const pdfDoc = await PDFDocument.load(pdfData);
    const pages = pdfDoc.getPages();
    const firstPage = pages[0];
  
    firstPage.drawText('Edited PDF Content!', {
      x: 50,
      y: 700,
      size: 30,
      color: rgb(0, 0.53, 0.71),
    });
  
    const editedPdfBytes = await pdfDoc.save();
    await renderPdf(editedPdfBytes);  // Re-render the edited PDF
  };
  </script>
  
  <style scoped>
  button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  canvas {
    margin-top: 20px;
    border: 1px solid #000;
  }
  </style>
  