<template>
    <div class="h-screen flex flex-col">
      <Header />
      <main class="flex-1 flex overflow-hidden">
        <aside class="w-1/4 bg-white border-r">
          <MessagesSearchBar />
          <MessagesConversationList />
        </aside>
        <section class="flex-1">
          <MessagesMessageView />
        </section>
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import Header from '~/components/Header.vue';
  </script>
  