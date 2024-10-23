<template>
   <main class="relative h-screen">
    <section>
      <AmenityMap @locationSelected="handleSelectedLocation" @searchResult="handleSearchResult" @amenityObj="handleSelectedAmenity" />
    </section>
     <!-- <slot name="action-buttons"></slot> -->
   </main>
  </template>

  <script setup lang="ts">
  const emit = defineEmits<{
  (event: 'locationSelected', data: any): any
  (event: 'searchResult', data: any): any
  (event: 'selectedAmenity', data: any): any
}>()
 const handleSelectedLocation = (data: any) => {
  emit('locationSelected', data)
 }

 const handleSearchResult = (data: any) => {
  emit('searchResult', data)
 }

 const handleSelectedAmenity = (data: any) => {
  emit('selectedAmenity', data)
 }
</script>