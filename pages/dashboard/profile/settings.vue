<template>
  <main>
    <div class="p-6 max-w-md mx-auto min-h-screen">
      <h2 class="mb-4 text-xl font-semibold text-[#1D2739]">
        Profile Information
      </h2>
      <div class="mb-4">
        <label class="block mb-1 text-sm text-[#1D2739]">Full Name</label>
        <input
          type="text"
          placeholder=""
          class="w-full bg-[#E4E7EC] px-3 py-3 border-[0.5px] outline-none rounded-md"
        />
      </div>
      <div class="mb-4">
        <label class="block mb-1 text-sm text-[#1D2739]">Email Address</label>
        <input
          type="email"
          placeholder=""
          class="w-full bg-[#E4E7EC] px-3 py-3 border-[0.5px] outline-none rounded-md"
        />
      </div>
    </div>
    <div class="bg-white">
      <footer
        class="bg-white p-4 space-x-4 max-w-md mx-auto flex justify-between items-center"
      >
        <button @click="router.back()" class="bg-gray-300 text-gray-700 py-2 px-4 rounded">
          Cancel
        </button>
        <button class="bg-black text-white py-2 px-4 rounded">Save</button>
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
const router = useRouter()
definePageMeta({
  layout: "dashboard",
});
// Handle form submission logic here.
</script>

<style scoped>
/* Additional scoped styles if necessary */
</style>
