<template>
  <min>
    <div class="p-4">

    <div class="overflow-hidden">
      <div class="flex space-x-2 mb-4 overflow-x-auto scrollbar-hide">
        <button
          v-for="room in rooms"
          :key="room.id"
          @click="setActiveRoom(room.name)"
          :class="{ 'bg-[#EBE5E0]': activeRoom === room.name, 'bg-white': activeRoom !== room.name }"
          class="px-4 py-2 border-[0.5px] text-[#1D2739] text-sm rounded-lg flex-shrink-0"
        >
          {{ room.name }}
        </button>
      </div>
    </div>

    <!-- Is the room furnished? -->
    <div class="mb-4 flex justify-between items-center">
      <h3 class="text-sm">Is the room furnished?</h3>
      <div class="flex space-x-2">
        <button
          @click="setFurnishedStatus(true)"
          :class="{ 'bg-gray-700 text-white': isRoomFurnished, 'bg-white border-gray-300': !isRoomFurnished }"
          class="px-6 py-2 text-sm rounded-md"
        >
          Yes
        </button>
        <button
          @click="setFurnishedStatus(false)"
          :class="{ 'bg-gray-700 text-white': !isRoomFurnished, 'bg-white border-gray-300': isRoomFurnished }"
          class="px-6 py-2 text-sm rounded-md"
        >
          No
        </button>
      </div>
    </div>

    <!-- Interior Area -->
    <div class="mb-4">
      <h3 class="mb-2">Interior area</h3>

      <div class="space-y-2 grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
        <label
          v-for="item in roomFeaturesList"
          :key="item.name"
          :for="item.name"
          class="flex text-sm cursor-pointer pl-3 py-3 items-start gap-4 rounded-lg border transition"
          :class="{
            'bg-green-50 border-green-500': isSelected(item.name, 'interior'),
            'border-gray-200': !isSelected(item.name, 'interior')
          }"
        >
          <div class="flex items-center">
            <input
              type="checkbox"
              class="hidden rounded border-gray-300"
              :id="item.name"
              :checked="isSelected(item.name, 'interior')"
              @change="toggleSelection(item.name, 'interior')"
            />
          </div>
          <div>
            <strong class="font-medium text-sm text-[#171717]">
              {{ item.name }}
            </strong>
          </div>
        </label>
      </div>
    </div>
    
    <!-- Manual Input for Features -->
    <div v-if="showManualInput" class="mt-4">
      <input
        v-model="manualInput"
        @keyup.enter="addManualItem"
        type="text"
        placeholder="e.g Basement"
        class="mt-1 block w-full bg-[#E4E7EC] text-sm px-3 py-3.5 border-[0.5px] outline-none border-gray-50 rounded-md"
      />
      <button
        @click="addManualItem"
        class="px-4 py-2 flex gap-x-2 items-center justify-center"
      >
        Add manually
      </button>
    </div>

    <!-- Availability options and other details -->
    <div class="mb-4">
      <h3 class="text-sm">When is the room available?</h3>
      <div class="flex space-x-2 pt-3">
        <button
          v-for="option in availabilityOptions"
          :key="option.value"
          @click="setAvailability(option.value)"
          :class="{ 'border-[#5B8469] border bg-gray-100': availability === option.value, 'border-gray-200 border': availability !== option.value }"
          class="rounded-lg text-[#1D2739] text-sm px-6 py-2 cursor-pointer"
        >
          {{ option.label }}
        </button>
      </div>
    </div>

    <!-- Conditional Fields Based on Availability -->
    <div v-if="availability === 'available_now'" class="mt-4 space-y-4">
      <div class="w-full mt-4">
        <label class="block text-sm font-medium mb-2">Set price</label>
        <div class="flex items-center bg-[#E4E7EC] border-[0.5px] border-gray-50 rounded-md px-3 py-2">
          <select
            v-model="rentFrequency"
            class="bg-transparent py-1.5 text-sm outline-none border-none pr-2"
          >
            <option value="monthly">Monthly</option>
            <option value="annual">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
          <input
            type="text"
            v-model="rentAmount"
            placeholder="e.g 1000"
            class="bg-transparent text-sm outline-none flex-grow"
          />
        </div>
      </div>
      <div class="space-y-4">
        <CoreToggleSwitch
          id="applyAll"
          label="Apply these responses above to all remaining rooms"
          @change="applyResponsesToAllRooms"
          v-model="applyToAllRooms"
        />
        <CoreToggleSwitch
        v-if="(!isAnyRoomMaster || setAsMasterBedroom)" 
          id="masterBedroom"
          label="Set as master's bedroom"
          v-model="setAsMasterBedroom"
        />
      </div>
    </div>

    <div v-else-if="availability === 'unavailable'" class="mt-4">
      <label class="block text-sm font-medium">Enter occupant’s name</label>
      <input
        type="text"
        v-model="occupantsName"
        placeholder="e.g Rita"
        class="mt-1 block w-full bg-[#E4E7EC] text-sm px-3 py-3.5 border-[0.5px] outline-none border-gray-50 rounded-md"
      />
      <div class="w-full mt-4">
        <label class="block text-sm font-medium mb-2">Set price</label>
        <div class="flex items-center bg-[#E4E7EC] border-[0.5px] border-gray-50 rounded-md px-3 py-2">
          <select
            v-model="rentFrequency"
            class="bg-transparent py-1.5 text-sm outline-none border-none pr-2"
          >
            <option value="monthly">Monthly</option>
            <option value="annual">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
          <input
            type="text"
            v-model="rentAmount"
            placeholder="e.g 1000"
            class="bg-transparent text-sm outline-none flex-grow"
          />
        </div>
      </div>
      <div class="space-y-4 mt-4">
        <CoreToggleSwitch
          id="applyAll"
          label="Apply these responses above to all remaining rooms"
          v-model="applyToAllRooms"
        />
        <CoreToggleSwitch
        v-if="!isAnyRoomMaster || setAsMasterBedroom"
        id="masterBedroom"
        label="Set as master's bedroom"
        v-model="setAsMasterBedroom"
      />
      </div>
    </div>

    <div v-else-if="availability === 'available_from_date'" class="mt-4">
      <label class="block text-sm font-medium">Enter availability date</label>
      <input
        v-model="availabilityDate"
        type="date"
        class="mt-1 block w-full bg-[#E4E7EC] text-sm px-3 py-3.5 border-[0.5px] outline-none border-gray-50 rounded-md"
      />
      <label class="block text-sm font-medium mt-4">Enter occupant’s name</label>
      <input
        v-model="occupantsName"
        type="text"
        placeholder="e.g Rita"
        class="mt-1 block w-full bg-[#E4E7EC] text-sm px-3 py-3.5 border-[0.5px] outline-none border-gray-50 rounded-md"
      />
      <div class="w-full mt-4">
        <label class="block text-sm font-medium mb-2">Set price</label>
        <div class="flex items-center bg-[#E4E7EC] border-[0.5px] border-gray-50 rounded-md px-3 py-2">
          <select
            v-model="rentFrequency"
            class="bg-transparent py-1.5 text-sm outline-none border-none pr-2"
          >
            <option value="monthly">Monthly</option>
            <option value="annual">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
          <input
            type="text"
            v-model="rentAmount"
            placeholder="e.g 1000"
            class="bg-transparent text-sm outline-none flex-grow"
          />
        </div>
      </div>
      <div class="space-y-4 mt-4">
        <CoreToggleSwitch
        id="applyAll"
        label="Apply these responses above to all remaining rooms"
        @change="applyResponsesToAllRooms"
        v-model="applyToAllRooms"
      />
      <CoreToggleSwitch
        v-if="(!isAnyRoomMaster || setAsMasterBedroom)" 
        id="masterBedroom"
        label="Set as master's bedroom"
        v-model="setAsMasterBedroom"
      />
      </div>
    </div>
  </div>
  <slot name="action-buttons"></slot>
  </min>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineEmits, defineProps, computed } from 'vue';

// Props
const props = defineProps({
  payload: {
    type: Object,
    required: true,
    default: () => ({ bedroomCount: 5 })
  },
  roomFeaturesList: {
    type: Array,
    default: () => []
  },
});

const emit = defineEmits(['emitRoomData']);

// Reactive state
const activeRoom = ref('Room 1') as any;
const availability = ref('available_now') as any;
const availabilityDate = ref('') as any;
const occupantsName = ref('') as any;
const rentAmount = ref<number | string>('') as any;
const isRoomFurnished = ref(true);
const applyToAllRooms = ref(false);
const setAsMasterBedroom = ref(false);
const rentFrequency = ref<string>('monthly') as any;
const roomFeatures = ref<any[]>([]) as any;
const rooms = ref<any[]>([]) as any;
const roomData = ref<any[]>([]) as any;
const manualInput = ref('') as any;
const showManualInput = ref(false);

const availabilityOptions = [
  { label: 'Available Now', value: 'available_now' },
  { label: 'Not available', value: 'unavailable' },
  { label: 'Available from (specify date)', value: 'available_from_date' },
];

// Adding a manual item to room features
const addManualItem = () => {
  const trimmedInput = manualInput.value.trim();
  if (trimmedInput) {
    roomFeatures.value.push({ name: trimmedInput, images: [] });
    manualInput.value = '';
    showManualInput.value = false;
  }
};

// Save room data to the payload
const saveRoomData = (roomName: string) => {
  const roomIndex = props.payload.rooms.value.findIndex((room) => room.name === roomName);
  if (roomIndex !== -1) {
    // Update the room object
    props.payload.rooms.value[roomIndex] = {
      name: roomName,
      availability: availability.value,
      availableFrom: availability.value === 'available_from_date' ? availabilityDate.value : null,
      occupantName: occupantsName.value,
      isMaster: setAsMasterBedroom.value,
      rentAmount: rentAmount.value ? parseInt(rentAmount.value.toString(), 10) : 0,
      rentFrequency: rentFrequency.value,
      isFurnished: isRoomFurnished.value,
      features: roomFeatures.value,
      images: []
    };

    // Ensure only one room is the master bedroom
    if (setAsMasterBedroom.value) {
      props.payload.rooms.value.forEach((room, index) => {
        if (index !== roomIndex) room.isMaster = false;
      });
    }

    emit('emitRoomData', props.payload.rooms.value[roomIndex]);
  }
};

// Generate room objects based on bedroom count
const generateRooms = (bedroomCount: number) => {
  rooms.value = Array.from({ length: bedroomCount }, (_, i) => ({
    id: i + 1,
    name: `Room ${i + 1}`,
    isMaster: false,
  }));
};

// Auto-save form data when changes are detected
watch(
  [availability, availabilityDate, occupantsName, rentAmount, rentFrequency, isRoomFurnished, setAsMasterBedroom, roomFeatures],
  () => saveRoomData(activeRoom.value),
  { deep: true }
);

// Initialize room data
const initializeRoomData = () => {
  roomData.value = props.payload.rooms.value?.length
    ? [...props.payload.rooms.value]
    : rooms.value.map((room: any) => ({
        name: room.name,
        availability: 'available_now',
        availableFrom: null,
        occupantName: null,
        isMaster: false,
        rentAmount: null,
        currencyCode: 'NGN',
        rentFrequency: 'monthly',
        isFurnished: true,
        features: [],
        images: []
      }))
}

// Component mount lifecycle
onMounted(() => {
  console.log(props.payload.bedroomCount, 'Room count')
  if (props.payload.rooms.value && props.payload.rooms.value.length > 0) {
    rooms.value = props.payload.rooms.value;
  } 
  generateRooms(Number(props.payload.bedroomCount.value));
  initializeRoomData();
  loadRoomData(activeRoom.value);
});

// Set active room and load its data
const setActiveRoom = (roomName: string) => {
  saveRoomData(activeRoom.value);
  activeRoom.value = roomName;
  loadRoomData(roomName);
};

// Watch changes to rooms array and update payload
watch(
  rooms,
  (newRooms) => {
    props.payload.rooms.value = newRooms;
  },
  { deep: true }
);


const loadRoomData = (roomName: string) => {
  const room = roomData.value.find((r) => r.name === roomName);
  if (room) {
    availability.value = room.availability;
    availabilityDate.value = room.availableFrom;
    occupantsName.value = room.occupantName;
    rentAmount.value = room.rentAmount;
    rentFrequency.value = room.rentFrequency;
    isRoomFurnished.value = room.isFurnished;
    setAsMasterBedroom.value = room.isMaster;
    roomFeatures.value = Array.isArray(room.features) ? room.features : []; // Ensure it's always an array
  }
};


// Apply current room responses to all remaining rooms
const applyResponsesToAllRooms = () => {
  const currentRoomData = roomData.value.find((room) => room.name === activeRoom.value);
  if (currentRoomData) {
    roomData.value.forEach((room) => {
      if (room.name !== activeRoom.value) {
        Object.assign(room, { ...currentRoomData, name: room.name });
      }
    });
    emit('emitRoomData', roomData.value);
  }
};

// Toggle selection of room features
const toggleSelection = (item: string) => {
  const index = roomFeatures.value.findIndex((feature) => feature.name === item);
  index > -1 ? roomFeatures.value.splice(index, 1) : roomFeatures.value.push({ name: item, images: [] });
};

// Check if a feature is selected
// const isSelected = (item: string) => roomFeatures.value.some((feature) => feature.name === item);
const isSelected = (item: string) => {
  return Array.isArray(roomFeatures.value) && roomFeatures.value.some((feature) => feature.name === item);
};

// Set furnished status
const setFurnishedStatus = (status: boolean) => {
  isRoomFurnished.value = status;
};

// Function to set availability
const setAvailability = (value: string) => {
  availability.value = value;
  if (value === 'available_now') {
    occupantsName.value = null;
    availabilityDate.value = null;
  } else if (value === 'unavailable') {
    availabilityDate.value = null;
  } else if (value === 'available_from_date') {
    occupantsName.value = null;
  }
  saveRoomData(activeRoom.value);
};

// Computed property to check if any room is marked as the master bedroom
const isAnyRoomMaster = computed(() => roomData.value.some((room) => room.isMaster));
</script>

<style scoped>
/* Custom CSS to hide the scrollbar */
.scrollbar-hide {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome, Safari, and Opera */
}
</style>
