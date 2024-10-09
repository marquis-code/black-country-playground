<template>
  <main>
    <div id="header"
        class="sticky top-0 z-40 flex  shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white shadow-sm"
      >
    <slot class="px-4 sm:gap-x-6 sm:px-6 lg:px-8" name="header-content"></slot>
    </div>
    <slot />
  </main>
</template>

<script setup lang="ts">
definePageMeta({
     middleware: 'auth'
})
</script>