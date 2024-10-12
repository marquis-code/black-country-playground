<template>
  <div>
    <!-- Thumbnail Image -->
    <img
      :src="src"
      @click="toggleImage"
      class="cursor-pointer rounded-lg"
      alt="Thumbnail"
    />

    <!-- Fullscreen Image Preview with Transition -->
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
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isFullScreen: false,
    };
  },
  methods: {
    toggleImage() {
      this.isFullScreen = !this.isFullScreen;
    },
  },
};
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
