<template>
  <main>
    <div class="container mx-auto p-4">
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
            <input
              type="checkbox"
              class="hidden rounded border-gray-300"
              :id="item.name"
              :checked="isSelected(item.name, 'interior')"
              @change="toggleSelection(item.name, 'interior')"
            />
            <div>
              <strong class="font-medium text-sm text-[#171717]">{{ item.name }}</strong>
            </div>
          </label>
        </div>
      </div>
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
          <label for="rentAmount" class="block text-sm font-medium mb-2">Set prices</label>
          <div class="flex items-center bg-[#E4E7EC] border-[0.5px] border-gray-50 rounded-md px-3 py-2">
            <select
              v-model="rentFrequency"
              class="bg-transparent py-1.5 text-sm outline-none border-none pr-2"
            >
              <option value="monthly">Monthly</option>
              <option value="annual">Yearly</option>
              <option value="weekly">Weekly</option>
            </select>
            <!-- <input
              type="number"
              v-model.number="rentAmount"
              placeholder="e.g 1000"
              class="bg-transparent text-sm outline-none flex-grow"
            /> -->
            <input
            id="rentAmount"
            type="text"
            v-model="formattedRentAmount"
            placeholder="e.g. 1,000"
            class="bg-transparent text-sm outline-none flex-grow"
            @input="onInput"
            @keydown="filterInput"
            @focus="clearFormatting"
            @blur="applyFormatting"
      
          />
          </div>
        </div>
        <div class="space-y-4 mt-3">
          <CoreToggleSwitch
            id="applyAll"
            label="Apply these responses above to all remaining rooms"
            @change="applyResponsesToAllRooms"
            v-model="applyToAllRooms"
          />
          <!-- <CoreToggleSwitch
            v-if="(!isAnyRoomMaster || setAsMasterBedroom)" 
            id="masterBedroom"
            label="Set as master's bedroom"
            v-model="setAsMasterBedroom"
          /> -->
          <CoreToggleSwitch
          id="masterBedroom"
          label="Set as master's bedroom"
          v-model="setAsMasterBedroom"
        />
        </div>
      </div>

      <div v-else-if="availability === 'unavailable'" class="mt-4">
     <div class="mt-4">
      <label class="block text-sm font-medium">Enter occupant’s name</label>
      <input
        type="text"
        v-model="occupantsName"
        placeholder="e.g Rita"
        class="mt-1 block w-full bg-[#E4E7EC] text-sm px-3 py-3.5 border-[0.5px] outline-none border-gray-50 rounded-md"
      />
     </div>

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
            <!-- <input
              type="number"
              v-model.number="rentAmount"
              placeholder="e.g 1000"
              class="bg-transparent text-sm outline-none flex-grow"
            /> -->
            <input
            type="text"
            v-model="formattedRentAmount"
            placeholder="e.g 1,000"
            class="bg-transparent text-sm outline-none flex-grow"
            @input="onInput"
          />
          </div>
        </div>

        <div class="space-y-4 mt-3">
          <CoreToggleSwitch
            id="applyAll"
            label="Apply these responses above to all remaining rooms"
            @change="applyResponsesToAllRooms"
            v-model="applyToAllRooms"
          />
          <!-- <CoreToggleSwitch
          v-if="(!isAnyRoomMaster || setAsMasterBedroom)" 
            id="masterBedroom"
            label="Set as master's bedroom"
            v-model="setAsMasterBedroom"
          /> -->
          <CoreToggleSwitch
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

     <div class="mt-4">
      <label class="block text-sm font-medium">Enter occupant’s name</label>
      <input
        type="text"
        v-model="occupantsName"
        placeholder="e.g Rita"
        class="mt-1 block w-full bg-[#E4E7EC] text-sm px-3 py-3.5 border-[0.5px] outline-none border-gray-50 rounded-md"
      />
     </div>

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
            <!-- <input
              type="number"
              v-model.number="rentAmount"
              placeholder="e.g 1000"
              class="bg-transparent text-sm outline-none flex-grow"
            /> -->
            <input
            type="text"
            v-model="formattedRentAmount"
            placeholder="e.g 1,000"
            class="bg-transparent text-sm outline-none flex-grow"
            @input="onInput"
          />
          </div>
        </div>

        <!-- <div class="space-y-4 mt-4">
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
        </div> -->
        <div class="space-y-4 mt-3">
          <CoreToggleSwitch
            id="applyAll"
            label="Apply these responses above to all remaining rooms"
            @change="applyResponsesToAllRooms"
            v-model="applyToAllRooms"
          />
          <!-- <CoreToggleSwitch
          v-if="(!isAnyRoomMaster || setAsMasterBedroom)" 
            id="masterBedroom"
            label="Set as master's bedroom"
            v-model="setAsMasterBedroom"
          /> -->
          <CoreToggleSwitch
            id="masterBedroom"
            label="Set as master's bedroom"
            v-model="setAsMasterBedroom"
          />
        </div>
      </div>
      <slot name="action-buttons"></slot>
    </div>
  </main>
</template>


<script setup lang="ts">
import { ref, onMounted, watch, defineProps, defineEmits, computed } from 'vue';
// Props
const props = defineProps({
  payload: {
    type: Object,
    required: true,
    default: () => ({})
  },
  roomFeaturesList: {
    type: Array,
    default: () => []
  }
});
const emit = defineEmits(['emitRoomData']);
// Reactive state
const activeRoom = ref('Room 1');
const rooms = ref([]);
const roomData = ref([]);
const isRoomFurnished = ref(true);
const availability = ref('available_now');
const availabilityDate = ref('');
const occupantsName = ref('');
const rentAmount = ref<number | null>(null);
const rentFrequency = ref<string>('monthly');
const roomFeatures = ref([]);
const setAsMasterBedroom = ref(false);
const applyToAllRooms = ref(false);
const manualInput = ref('');
const showManualInput = ref(false);
const availabilityOptions = [
  { label: 'Available Now', value: 'available_now' },
  { label: 'Not available', value: 'unavailable' },
  { label: 'Available from (specify date)', value: 'available_from_date' }
];
// Computed property to check if any room is marked as the master bedroom
const isAnyRoomMaster = computed(() => {
  return roomData.value.some(room => room.isMaster);
});
// Initialize room data
const initializeRoomData = () => {
  roomData.value = props.payload.rooms.value.length
    ? [...props.payload.rooms.value]
    : Array.from({ length: props.payload.bedroomCount.value }, (_, i) => ({
        name: `Room ${i + 1}`,
        availability: 'available_now',
        availableFrom: null,
        occupantName: '',
        isMaster: false,
        rentAmount: '',
        rentFrequency: 'monthly',
        isFurnished: true,
        features: [],
        images: []
      }));
  rooms.value = roomData.value;
};
// const initializeRoomData = () => {
//   roomData.value = Array.from({ length: props.payload.bedroomCount.value }, (_, i) => ({
//     name: `Room ${i + 1}`,
//     availability: 'available_now',
//     availableFrom: null,
//     occupantName: '',
//     isMaster: false,
//     rentAmount: '',
//     rentFrequency: 'monthly',
//     isFurnished: true,
//     features: [],
//     images: []
//   }));
//   rooms.value = roomData.value;
// };
// Save room data
// const saveRoomData = (roomName: string) => {
//   const roomIndex = roomData.value.findIndex((room) => room.name === roomName);
//   if (roomIndex !== -1) {
//     roomData.value[roomIndex] = {
//       ...roomData.value[roomIndex],
//       availability: availability.value,
//       availableFrom: availabilityDate.value,
//       occupantName: occupantsName.value,
//       rentAmount: rentAmount.value,
//       rentFrequency: rentFrequency.value,
//       isFurnished: isRoomFurnished.value,
//       isMaster: setAsMasterBedroom.value,
//       features: roomFeatures.value
//     };
//   }
//   emit('emitRoomData', roomData.value[roomIndex]);
// };
// const saveRoomData = (roomName) => {
//   const roomIndex = roomData.value.findIndex((room) => room.name === roomName);
//   if (roomIndex !== -1) {
//     roomData.value[roomIndex] = {
//       ...roomData.value[roomIndex],
//       availability: availability.value,
//       availableFrom: availabilityDate.value,
//       occupantName: occupantsName.value,
//       // rentAmount: rentAmount.value,
//       rentAmount: parseInt(rentAmount.value, 10) || 0, // Convert to integer
//       rentFrequency: rentFrequency.value,
//       isFurnished: isRoomFurnished.value,
//       isMaster: setAsMasterBedroom.value,
//       features: roomFeatures.value
//     };
//   }
//   emit('emitRoomData', roomData.value);
// };
const saveRoomData = (roomName) => {
  const roomIndex = roomData.value.findIndex((room) => room?.name === roomName);
  if (roomIndex !== -1) {
    // If the current room is set as the master bedroom, unset all other rooms as master
    if (setAsMasterBedroom.value) {
      roomData.value = roomData.value.map((room, index) => ({
        ...room,
        isMaster: index === roomIndex, // Only the current room is set as the master
      }));
    }
    // Update the room data for the current room
    roomData.value[roomIndex] = {
      ...roomData.value[roomIndex],
      availability: availability.value,
      availableFrom: availabilityDate.value,
      occupantName: occupantsName.value,
      rentAmount: parseInt(rentAmount.value, 10) || 0, // Convert to integer
      rentFrequency: rentFrequency.value,
      isFurnished: isRoomFurnished.value,
      isMaster: setAsMasterBedroom.value, // Already set correctly above
      features: roomFeatures.value,
    };
  }
  emit('emitRoomData', roomData.value);
};
// Load room data when switching tabs
// const loadRoomData = (roomName: string) => {
//   const room = roomData.value.find((r) => r.name === roomName);
//   if (room) {
//     availability.value = room.availability;
//     availabilityDate.value = room.availableFrom;
//     occupantsName.value = room.occupantName;
//     rentAmount.value = room.rentAmount;
//     rentFrequency.value = room.rentFrequency;
//     isRoomFurnished.value = room.isFurnished;
//     setAsMasterBedroom.value = room.isMaster;
//     roomFeatures.value = room.features || [];
//   }
// };
const loadRoomData = (roomName) => {
  const room = roomData.value.find((r) => r.name === roomName);
  if (room) {
    availability.value = room.availability;
    availabilityDate.value = room.availableFrom;
    occupantsName.value = room.occupantName;
    rentAmount.value = room.rentAmount;
    rentFrequency.value = room.rentFrequency;
    isRoomFurnished.value = room.isFurnished;
    setAsMasterBedroom.value = room.isMaster;
    roomFeatures.value = room.features || [];
  }
};
// Set active room and save/load data
const setActiveRoom = (roomName: string) => {
  saveRoomData(activeRoom.value);
  activeRoom.value = roomName;
  loadRoomData(roomName);
};
// Manually add an item to the room features list
const addManualItem = () => {
  const trimmedInput = manualInput.value.trim();
  if (trimmedInput) {
    roomFeatures.value.push({ name: trimmedInput, images: [] });
    manualInput.value = '';
    showManualInput.value = false;
    saveRoomData(activeRoom.value); // Save data to persist the manually added item
  }
};
// Toggle selection of room features
const toggleSelection = (item: string) => {
  const index = roomFeatures.value.findIndex((feature) => feature.name === item);
  index > -1 ? roomFeatures.value.splice(index, 1) : roomFeatures.value.push({ name: item, images: [] });
  saveRoomData(activeRoom.value);
};
// Check if a feature is selected
const isSelected = (item: string) => roomFeatures.value.some((feature) => feature.name === item);
// Watch changes to roomData and update the payload
watch(roomData, (newData) => {
  props.payload.rooms.value = newData;
}, { deep: true });
// Set furnished status
const setFurnishedStatus = (status: boolean) => {
  isRoomFurnished.value = status;
  saveRoomData(activeRoom.value);
};
// Set the availability status of the room
const setAvailability = (value: string) => {
  availability.value = value;
  if (value === 'available_now') {
    occupantsName.value = '';
    availabilityDate.value = '';
  } else if (value === 'unavailable') {
    availabilityDate.value = '';
  } else if (value === 'available_from_date') {
    occupantsName.value = '';
  }
  saveRoomData(activeRoom.value);
};
// Apply responses to all remaining rooms
const applyResponsesToAllRooms = () => {
  roomData.value.forEach(room => {
    if (room.name !== activeRoom.value) {
      Object.assign(room, {
        availability: availability.value,
        availableFrom: availabilityDate.value,
        occupantName: occupantsName.value,
        rentAmount: Number(rentAmount.value),
        rentFrequency: rentFrequency.value,
        isFurnished: isRoomFurnished.value,
        features: [...roomFeatures.value],
      });
    }
  });
};

onMounted(() => {
  initializeRoomData();
  loadRoomData(activeRoom.value);
});

// function formatCurrency(value) {
//   // Ensure the value is a string, convert if it's not
//   if (typeof value !== 'string') {
//     value = String(value);
//   }

//   // Remove any non-numeric characters except for decimals
//   const numericValue = value.replace(/[^\d.]/g, '');

// //   // Handle cases where input is not a valid number
// //   if (!numericValue || isNaN(parseFloat(numericValue))) {
// //     return value; // Return unformatted if invalid input
// //   }

// //   // Split the value by the decimal point to handle whole numbers and decimals separately
// //   const [integerPart, decimalPart] = numericValue.split('.');

// //   // Format the integer part with commas
// //   const formattedInteger = parseInt(integerPart, 10).toLocaleString('en-US');

// //   // Reconstruct the final formatted value, including decimals if present
// //   return decimalPart !== undefined
// //     ? `${formattedInteger}.${decimalPart.slice(0, 2)}` // Limit decimals to 2 places
// //     : formattedInteger;
// // }


// // // Computed property to format the value as currency
// // const formattedRentAmount = computed({
// //   get() {
// //     // Format the rentAmount into currency while typing
// //     return rentAmount.value ? formatCurrency(rentAmount.value) : '';
// //   },
// //   set(value) {
// //     // Remove formatting to get the raw number while typing
// //     rentAmount.value = unformatCurrency(value);
// //   }
// // });

// // Helper function to remove formatting and get raw value
// function unformatCurrency(value) {
//   // Remove commas and any non-numeric characters
//   return value.replace(/[^\d]/g, '');
// }

// Optional: Watch raw rentAmount for backend submission or other purposes
watch(rentAmount, (newValue) => {
  console.log('Raw rent amount for backend:', newValue);
});

// Optional: You can also use a direct `@input` handler to dynamically manage user input
function onInput(event) {
  // Raw number is stored in rentAmount; display is controlled via `formattedRentAmount`
  rentAmount.value = unformatCurrency(event.target.value);
}




// Computed property to format the value as currency
const formattedRentAmount = computed({
  get() {
    return rentAmount.value ? formatCurrency(rentAmount.value) : '';
  },
  set(value) {
    rentAmount.value = unformatCurrency(value);
  }
});

// Helper function to format currency
function formatCurrency(value: string): string {
  // Ensure the value is a string, convert if it's not
  if (typeof value !== 'string') {
    value = String(value);
  }

  // Remove any non-numeric characters except for decimals
  const numericValue = value.replace(/[^\d.]/g, '');

  // Handle cases where input is not a valid number
  if (!numericValue || isNaN(parseFloat(numericValue))) {
    return value; // Return unformatted if invalid input
  }

  // Split the value by the decimal point
  const [integerPart, decimalPart] = numericValue.split('.');

  // Format the integer part with commas
  const formattedInteger = parseInt(integerPart, 10).toLocaleString('en-US');

  // Reconstruct the final formatted value
  return decimalPart !== undefined
    ? `${formattedInteger}.${decimalPart.slice(0, 2)}` // Limit decimals to 2 places
    : formattedInteger;
}

// Helper function to remove formatting and get raw value
function unformatCurrency(value: string): string {
  return value.replace(/[^\d]/g, '');
}

// Method to filter input
function filterInput(event: KeyboardEvent) {
  const allowedKeys = [
    'Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown',
    'Control', 'Shift', 'Meta', // Allow modifier keys
  ];

  // Allow digits and decimal point
  if (/^\d$/.test(event.key) || event.key === '.') {
    return; // Allow digits and decimal point
  }

  // Prevent other keys from being entered
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault(); // Block the input
  }
}

// Optional: Clear formatting on focus
function clearFormatting() {
  formattedRentAmount.value = unformatCurrency(formattedRentAmount.value);
}

// Optional: Apply formatting on blur
function applyFormatting() {
  formattedRentAmount.value = formatCurrency(rentAmount.value);
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>