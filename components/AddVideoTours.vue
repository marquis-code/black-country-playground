 <template>
      <main>
        <div class="container mx-auto p-4">
          <!-- Tabs -->
          <div class="flex space-x-4 mb-4">
            <button
              v-for="tab in tabs"
              :key="tab"
              @click="activeTab = tab"
              :class="activeTab === tab ? 'bg-[#EBE5E0]' : 'bg-white'"
              class="px-4 py-2 border-[0.5px] rounded-md text-sm text-[#1D2739]"
            >
              {{ tab }}
            </button>
          </div>
    
          <!-- Image Upload Section for Each Room's Features -->
          <section v-if="activeRoom" class="mt-3">
            <div class="space-y-2 pb-3">
              <h2 class="text-[#1D2739] font-light">Click to add as many pictures as you want for each feature of the room.</h2>
              <p class="text-sm">Accepts <span class="font-semibold text-[#1D2739]">jpg</span> & <span class="font-semibold text-[#1D2739]">png</span>, <span class="font-semibold text-[#1D2739]">2MB</span> size max/each</p>
            </div>
    
            <!-- Feature Image Upload for the selected room -->
            <div class="grid grid-cols-2 gap-4">
              <ImageUpload
                v-for="feature in activeRoom.features"
                :key="feature.name"
                :roomName="activeRoom.name"
                :label="feature.name"
                location="rooms"
                @update:images="handleImages"
              />
            </div>
          </section>
        </div>
    
        <slot name="action-buttons"></slot>
      </main>
    </template>
    
    <script setup lang="ts">    
    const tabs = ref<string[]>([]) // Array to hold room names
    const activeTab = ref('') // To track the active tab
    const rooms = ref<any[]>([]) // To store the rooms array
    const activeRoom = ref<any>(null) // The currently selected room based on activeTab

    function handleImages(images: any) {
  console.log(images); // This will log the base64 array of images
}
    
    // On mount, get the property from session storage and populate tabs
    onMounted(() => {
      const property = JSON.parse(sessionStorage.getItem('property') || '{}')
      if (property && property.rooms) {
        rooms.value = property.rooms // Save rooms data
        tabs.value = property.rooms.map((room: any) => room.name) // Extract room names for tabs
        activeTab.value = tabs.value[0] // Set the first room as active by default
        activeRoom.value = rooms.value.find((room: any) => room.name === activeTab.value) // Set the first room as the active room
      }
    })
    
    // Watch activeTab and update activeRoom accordingly
    watch(activeTab, (newTab: any) => {
      activeRoom.value = rooms.value.find(room => room.name === newTab)
    })    
    </script>
    
    <style scoped>
    /* Add your custom styles here */
    </style>
    