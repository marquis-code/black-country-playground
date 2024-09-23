 <!-- <template>
    <div class="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      {{ payload }}
      <div class="flex justify-between items-center mb-6">
        <div class="text-sm text-gray-600">Listings | <span class="font-semibold">{{payload.name ?? 'Nil'}}</span></div>
        <div class="flex space-x-2">
          <button class="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-600">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-2 mb-6">
        <img :src="payload.images.value[0]" alt="Main Image" class="col-span-2 row-span-2 w-full h-full object-cover rounded-lg">
        <img v-for="(image, index) in payload.images.value" :key="index" :src="image" class="w-full h- object-cover rounded-lg" />
      </div>
      <div class="flex justify-between mb-4">
        <div>
          <h2 class="text-2xl font-semibold mb-1">{{payload?.name ?? 'Nil'}}</h2>
          <p class="text-sm text-gray-500">{{payload.address ?? 'Nil'}}</p>
        </div>
        <div class="flex space-x-4 items-center">
          <div class="text-center">
            <img class="w-10 h-10 rounded-full" :src="manager.photo" alt="Property Manager">
            <p class="text-xs mt-1">{{ manager.name }}</p>
          </div>
          <button class="bg-green-600 text-white px-4 py-2 rounded-md">Send Application</button>
        </div>
      </div>
      <div class="flex space-x-2 mb-4">
        <button v-for="(tab, index) in tabs" :key="index" class="px-4 py-2 rounded-md" :class="{'bg-gray-200': activeTab === tab}" @click="activeTab = tab">{{ tab }}</button>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg">Property Description</h3>
        <p class="text-sm text-gray-600">{{ payload.description.value ?? 'Nil' }}</p>
      </div>
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h3 class="font-semibold text-lg">Property Highlights</h3>
          <ul class="text-sm text-gray-600">
            <li><span class="font-semibold">Property size:</span> {{ payload.size?.value }} {{ payload?.sizeUnit?.value }}</li>
            <li><span class="font-semibold">Flooring type:</span> {{ payload?.flooringTypeId?.value }} </li>
            <li><span class="font-semibold">Number of bedrooms:</span> {{ payload?.bedroomCount?.value ?? 'Nil' }}</li>
            <li><span class="font-semibold">Number of bathrooms/rest rooms:</span> {{ payload?.bathroomCount?.value ?? 'Nil' }}</li>
            <li><span class="font-semibold">Floor number:</span> {{payload?.floorCount?.value ?? 'Nil'}}</li>
            <li><span class="font-semibold">Architecture:</span> Apartment</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Co-living with: 2 Persons</h3>
          <table class="w-full text-sm text-left text-gray-600">
            <thead>
              <tr>
                <th class="py-2 px-3 bg-gray-100">Occupants</th>
                <th class="py-2 px-3 bg-gray-100">Room Occupied</th>
                <th class="py-2 px-3 bg-gray-100">Available from</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(occupant, index) in coLiving" :key="index">
                <td class="py-2 px-3">{{ occupant.name }}</td>
                <td class="py-2 px-3">{{ occupant.roomOccupied }}</td>
                <td class="py-2 px-3">{{ occupant.availableFrom }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg">Property Visitation</h3>
        <table class="w-full text-sm text-left text-gray-600">
          <thead>
            <tr>
              <th class="py-2 px-3 bg-gray-100">Day</th>
              <th class="py-2 px-3 bg-gray-100">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(visitation, index) in propertyVisitation" :key="index">
              <td class="py-2 px-3">{{ visitation.day }}</td>
              <td class="py-2 px-3">{{ visitation.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <button class="w-full py-2 bg-black text-white rounded-lg mt-4">Schedule a visit</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
 import { use_create_property } from '@/composables/modules/property/create'
 const { payload } = use_create_property()

  // Dummy data
  const galleryImages = [
    { url: "https://via.placeholder.com/150" },
    { url: "https://via.placeholder.com/150" },
    { url: "https://via.placeholder.com/150" },
    { url: "https://via.placeholder.com/150" }
  ];
  
  const manager = {
    name: "Joy Adetunji",
    photo: "https://via.placeholder.com/150"
  };
  
  const tabs = ['Property Overview', 'Common areas', 'Room 1', 'Room 2'];
  const activeTab = ref(tabs[0]);
  
  const propertyDescription = "Lorem ipsum dolor sit amet consectetur. Ut fusce rhoncus eu justo sit. Eget duis et proin elit lorem hendrerit. Aliquet dignissim sit sem arcu turpis sit. Fringilla porta tempus pellentesque interdum pellentesque.";
  
  const coLiving = [
    { name: "Rita", roomOccupied: 1, availableFrom: "24/05/2024" },
    { name: "Maxwell", roomOccupied: 2, availableFrom: "Not available" }
  ];
  
  const propertyVisitation = [
    { day: "Monday", time: "10:00 AM" },
    { day: "Tuesday", time: "10:00 AM" },
    { day: "Wednesday", time: "10:00 AM" }
  ];
  </script>
  
  <style scoped>
  /* You can add any additional custom styling here */
  </style> -->


   <template>
    <div class="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-lg">
      <!-- Breadcrumb & Share Icon -->
      {{ payload }}
      <div class="flex justify-between items-center mb-6">
        <div class="text-sm text-gray-600">Listings | <span class="font-semibold">{{ payload.name ?? 'Nil' }}</span></div>
        <div class="flex space-x-2">
          <button class="p-2 rounded-full hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 text-gray-600">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </button>
        </div>
      </div>
  
      <!-- Main Image and Gallery -->
      <div class="grid grid-cols-4 gap-2 mb-6">
        <img :src="payload.images.value[0]" alt="Main Image" class="col-span-2 row-span-2 w-full h-full object-cover rounded-lg">
        <img v-for="(image, index) in payload.images.value" :key="index" :src="image" class="w-full object-cover rounded-lg" />
      </div>
  
      <!-- Property Information -->
      <div class="flex justify-between mb-4">
        <div>
          <h2 class="text-2xl font-semibold mb-1">{{ payload?.name ?? 'Nil' }}</h2>
          <p class="text-sm text-gray-500">{{ payload.address ?? 'Nil' }}</p>
        </div>
        <div class="flex space-x-4 items-center">
          <div class="text-center">
            <img class="w-10 h-10 rounded-full" :src="manager.photo" alt="Property Manager">
            <p class="text-xs mt-1">{{ manager.name }}</p>
          </div>
          <button class="bg-green-600 text-white px-4 py-2 rounded-md">Send Application</button>
        </div>
      </div>
  
      <!-- Dynamic Tabs -->
      <div class="flex space-x-2 mb-4">
        <button v-for="(tab, index) in tabs" :key="index" class="px-4 py-2 rounded-md" :class="{'bg-gray-200': activeTab === tab}" @click="activeTab = tab">
          Room {{ index + 1 }}
        </button>
      </div>
  
      <!-- Content Based on Active Tab -->
      <div v-if="activeTab" class="mb-6">
        <h3 class="font-semibold text-lg">Room {{ tabs.indexOf(activeTab) + 1 }} Details</h3>
        <ul class="text-sm text-gray-600">
          <li><span class="font-semibold">Bed Size:</span> {{ activeTab.bedSize }}</li>
          <li><span class="font-semibold">Furniture:</span> {{ activeTab.furniture }}</li>
          <li><span class="font-semibold">View:</span> {{ activeTab.view }}</li>
        </ul>
      </div>
  
      <!-- Property Description -->
      <div class="mb-6">
        <h3 class="font-semibold text-lg">Property Description</h3>
        <p class="text-sm text-gray-600">{{ payload.description.value ?? 'Nil' }}</p>
      </div>
  
      <div class="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h3 class="font-semibold text-lg">Property Highlights</h3>
          <ul class="text-sm text-gray-600">
            <li><span class="font-semibold">Property size:</span> {{ payload.size?.value }} {{ payload?.sizeUnit?.value }}</li>
            <li><span class="font-semibold">Flooring type:</span> {{ payload?.flooringTypeId?.value }} </li>
            <li><span class="font-semibold">Number of bedrooms:</span> {{ payload?.bedroomCount?.value ?? 'Nil' }}</li>
            <li><span class="font-semibold">Number of bathrooms/rest rooms:</span> {{ payload?.bathroomCount?.value ?? 'Nil' }}</li>
            <li><span class="font-semibold">Floor number:</span> {{payload?.floorCount?.value ?? 'Nil'}}</li>
            <li><span class="font-semibold">Architecture:</span> Apartment</li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-lg">Co-living with: 2 Persons</h3>
          <table class="w-full text-sm text-left text-gray-600">
            <thead>
              <tr>
                <th class="py-2 px-3 bg-gray-100">Occupants</th>
                <th class="py-2 px-3 bg-gray-100">Room Occupied</th>
                <th class="py-2 px-3 bg-gray-100">Available from</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(occupant, index) in coLiving" :key="index">
                <td class="py-2 px-3">{{ occupant.name }}</td>
                <td class="py-2 px-3">{{ occupant.roomOccupied }}</td>
                <td class="py-2 px-3">{{ occupant.availableFrom }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="mb-6">
        <h3 class="font-semibold text-lg">Property Visitation</h3>
        <table class="w-full text-sm text-left text-gray-600">
          <thead>
            <tr>
              <th class="py-2 px-3 bg-gray-100">Day</th>
              <th class="py-2 px-3 bg-gray-100">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(visitation, index) in propertyVisitation" :key="index">
              <td class="py-2 px-3">{{ visitation.day }}</td>
              <td class="py-2 px-3">{{ visitation.time }}</td>
            </tr>
          </tbody>
        </table>
      </div>
  
      <button class="w-full py-2 bg-black text-white rounded-lg mt-4">Schedule a visit</button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import { use_create_property } from '@/composables/modules/property/create';
  const { payload } = use_create_property();
  
  // Dummy data
  const manager = {
    name: "Joy Adetunji",
    photo: "https://via.placeholder.com/150"
  };
  
  // Generate tabs based on bedroom count
  const bedroomCount = payload?.bedroomCount?.value ?? 1; // Assuming bedroomCount is fetched from payload
  
  const tabs = Array.from({ length: bedroomCount }, (_, index) => ({
    id: index + 1,
    bedSize: 'Queen Size', // Example data
    furniture: 'Wardrobe, Study Table',
    view: index % 2 === 0 ? 'City View' : 'Garden View'
  }));
  
  const activeTab = ref(tabs[0]);
  </script>
  
  <style scoped>
  /* You can add any additional custom styling here */
  </style>
  