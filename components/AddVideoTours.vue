<!-- <template>
    <main>
      <div class="container mx-auto p-4">
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
        <div class="space-y-2 pb-3">
            <h2 class="text-[#1D2739] font-light">Click to add as as much pictures as you want to for each common area or space.</h2>
            <p class="text-sm">Accepts <span class="font-semibold text-[#1D2739]">jpg</span> & <span class="font-semibold text-[#1D2739]"> png</span> <span class="font-semibold text-[#1D2739]">2MB</span> size max/each</p>
        
        </div>
     <section class="mt-3">
        <div class="grid grid-cols-2 gap-4">
            <ImageUpload label="Living room" />
            <ImageUpload label="Dining room" />
            <ImageUpload label="Laundry area" />
            <ImageUpload label="Kitchen" />
          </div>
     </section>
        </div>
        <slot name="action-buttons"></slot>
    </main>
    </template>
    
    <script setup lang="ts">
    import { ref, reactive } from 'vue'
    
    const tabs = ref(['Room 1', 'Room 2', 'Room 3', 'Room 4', 'Room 5'])
    const activeTab = ref('Room 1')
    
    // ImageUpload Component Logic
    const fileInput = ref<HTMLInputElement | null>(null)
    const images = reactive<{ [key: string]: string[] }>({
      'Bedroom': [],
      'Bathroom/Restroom': [],
      // Add more sections as needed
    })
    const currentImageIndex = ref<{ [key: string]: number }>({
      'Bedroom': 0,
      'Bathroom/Restroom': 0,
      // Add more sections as needed
    })
    
    function triggerFileUpload(section: string) {
      if (fileInput.value) {
        fileInput.value.click()
      }
    }
    
    function handleFileUpload(event: Event, section: string) {
      const target = event.target as HTMLInputElement
      if (target.files) {
        for (const file of Array.from(target.files)) {
          const reader = new FileReader()
          reader.onload = (e) => {
            if (e.target?.result) {
              images[section].push(e.target.result as string)
            }
          }
          reader.readAsDataURL(file)
        }
      }
    }
    
    function prevImage(section: string) {
      if (currentImageIndex.value[section] > 0) {
        currentImageIndex.value[section]--
      }
    }
    
    function nextImage(section: string) {
      if (currentImageIndex.value[section] < images[section].length - 1) {
        currentImageIndex.value[section]++
      }
    }
    
    function removeImage(section: string) {
      images[section].splice(currentImageIndex.value[section], 1)
      if (currentImageIndex.value[section] >= images[section].length) {
        currentImageIndex.value[section] = images[section].length - 1
      }
    }
    </script>
    
    <style scoped>
    /* Add your styles here */
    </style>
     -->

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
    