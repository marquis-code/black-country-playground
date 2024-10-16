<template>
<main>
  <div>
    <img
      :src="src"
      :class="computedClasses"
      :style="style"
      alt="Zoomed Image"
    />
  </div>
  <transition
  name="fade-zoom"
  appear
>
  <div
    v-if="isFullScreen"
    class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
    @click.self="toggleImage"
  >
    <img
      alt="Full-screen image"
      :src="src"
      class="max-w-screen-lg max-h-screen-lg object-contain transition-transform duration-500 ease-in-out"
    />
  </div>
</transition>
</main>
</template>

<script lang="ts" setup>
// Define props for `src`, `class`, and `style`
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  class: {
    type: String,
    default: ''
  },
  style: {
    type: Object,
    default: () => ({})
  }
});

// If you need to combine default and passed classes
const computedClasses = computed(() => {
  const defaultClasses = 'transition-transform duration-200 ease-in-out'; // You can add any default classes here
  return `${defaultClasses} ${props.class}`;
});
</script>

<style scoped>
/* Define the enter/leave transition classes */
.fade-zoom-enter-active, .fade-zoom-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-zoom-enter-from, .fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
.fade-zoom-enter-to, .fade-zoom-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style> 
