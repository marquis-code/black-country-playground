<template>
  <main class="mt-10">
    <div class="p-6 rounded-lg w-full max-w-6xl mx-auto border-[0.5px] bg-white border-gray-100">
       <div class="mb-3">
        <button @click="router.back()" class="bg-[#F9FAFB] text-[#1D2739] text-sm font-semibold rounded-md px-4 py-3 flex items-center gap-x-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              
            Go back</button>
       </div>
      <h2 class="text- font-semibold mb-4">Preview Document</h2>
      <p>{{templateObj.name ?? 'Nil'}}</p>
      <div
        v-html="templateObj.body"
        class="p-4 rounded-lg shadow-sm min-h-[300px]"
      ></div>
    </div>
  </main>
</template>

<script setup lang="ts">
const templateObj = ref({}) as any;
const router = useRouter()
onMounted(() => {
  const parsedData = JSON.parse(localStorage.getItem("templateObj"));
  templateObj.value = parsedData;
});
</script>
