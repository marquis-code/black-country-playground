<template>
  <min>
    <div class="py-6">
        <div class="flex space-x-4 mb-4">
          <button
            v-for="room in rooms"
            :key="room.name"
            @click="setActiveRoom(room.name)"
            :class="{
              'bg-[#EBE5E0]': activeRoom === room.name,
              'bg-white': activeRoom !== room.name,
            }"
            class="px-4 py-2 border-[0.5px] text-[#1D2739] text-sm rounded-lg"
          >
            {{ room.name }}
          </button>
        </div>
        <div class="mb-4 flex justify-between items-center">
          <h3 class="mb-2 text-[#1D2739]">Is the room furnished?</h3>
          <div class="flex space-x-2">
            <button
              :class="{
                'bg-black text-white': isRoomFurnished,
                'bg-white border border-gray-300 text-gray-700': !isRoomFurnished
              }"
              class="text-sm px-6 py-2 rounded-md"
              @click="setFurnishedStatus(true)"
            >
              Yes
            </button>
            <button
              :class="{
                'bg-black text-white': !isRoomFurnished,
                'bg-white border border-gray-300 text-gray-700': isRoomFurnished
              }"
              class="text-sm px-6 py-2 rounded-md"
              @click="setFurnishedStatus(false)"
            >
              No
            </button>
          </div>
        </div>
        <div class="mb-4">
          <h3 class="mb-2">Interior area</h3>

          <div class="space-y-2 grid grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <label
              v-for="item in interiorItems"
              :key="item"
              :for="item"
              class="flex text-sm cursor-pointer pl-3 py-3 items-start gap-4 rounded-lg border transition"
              :class="{
                'bg-green-50 border-green-500': isSelected(item, 'interior'),
                'border-gray-200': !isSelected(item, 'interior')
              }"
            >
            <img src="@/assets/icons/roomItems.svg" alt="" />
              <div class="flex items-center">
                <input
                  type="checkbox"
                  class="size-4 hidden rounded border-gray-300"
                  :id="item"
                  :checked="isSelected(item, 'interior')"
                  @change="toggleSelection(item, 'interior')"
                />
              </div>
              <div>
                <strong class="font-medium text-sm text-[#171717]">
                  {{ item }}
                </strong>
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
          <img :src="dynamicIcons('gray-add')" />
          Add manually
          </button>
        </div>
      </div>
    <div class="w-full">
      <div class="mb-4">
        <label class="block text-sm font-medium text-[#1D2739]"
          >When is the room available?</label
        >
        <div class="mt-2 flex space-x-4">
            <div
              v-for="option in availabilityOptions"
              :key="option.value"
              :class="{
                'border-[#5B8469] border bg-gray-100': availability === option.value,
                'border-gray-200 border': availability !== option.value,
              }"
              class="rounded-lg text-[#1D2739] text-sm px-6 py-2 cursor-pointer"
              @click="handleAvailabilityOptionClick(option)"
            >
              {{ option.label }}
            </div>
          </div>
      </div>
      <div v-if="availability === 'now'" class="mt-4 space-y-4">
       <div class="w-full mt-4">
        <label class="block text-sm font-medium mb-2">Set price</label>
        <div class="flex items-center bg-[#E4E7EC] border-[0.5px] border-gray-50 rounded-md px-3 py-2">
          <select
            v-model="priceFrequency"
            class="bg-transparent py-1.5 text-sm outline-none border-none pr-2"
          >
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
          </select>
          <input
            type="text"
            v-model="price"
            placeholder="e.g 1000"
            class="bg-transparent text-sm outline-none flex-grow"
          />
        </div>
      </div>
        <div class="space-y-4">
            <CoreToggleSwitch
              id="applyAll"
              label="Apply these responses above to all remaining rooms"
              v-model="applyToAllRooms"
            />
        
            <CoreToggleSwitch
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
                v-model="priceFrequency"
                class="bg-transparent py-1.5 text-sm outline-none border-none pr-2"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="weekly">Weekly</option>
              </select>
              <input
                type="text"
                v-model="price"
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
        <label class="block text-sm font-medium mt-4"
          >Enter occupant’s name</label
        >
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
                v-model="priceFrequency"
                class="bg-transparent py-1.5 text-sm outline-none border-none pr-2"
              >
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
                <option value="weekly">Weekly</option>
              </select>
              <input
                type="text"
                v-model="price"
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
import { ref } from "vue";
import { dynamicIcons } from '@/utils/assets'
const availability = ref("now");
const activeRoom = ref('Room 1') as any;

// Room data
const rooms = ref([
  { id: 1, name: 'Room 1', isMaster: false },
  { id: 2, name: 'Room 2', isMaster: false },
  { id: 3, name: 'Room 3', isMaster: false },
  { id: 4, name: 'Room 4', isMaster: false },
  { id: 5, name: 'Room 5', isMaster: false },
]);

// Room features, availability, and form data
const roomData = ref<any[]>(rooms.value.map((room: any) => ({
  name: room.name,
  availability: "available_now",
  availableFrom: "",
  occupantName: "",
  isMaster: false,
  images: [],
  isFurnished: true,
  rentAmount: 0,
  currencyCode: "NGN",
  rentFrequency: "monthly",
  features: [],
})));

const availabilityDate = ref('')
const occupantsName = ref('')
const price = ref<string>('');
const isFurnished = ref<boolean>(false);
const showManualInput = ref<boolean>(false);
const manualInput = ref<string>('');
const applyToAllRooms = ref<boolean>(false);
const setAsMasterBedroom = ref<boolean>(false);
const priceFrequency = ref<string>('monthly');
const interiorItems = ref<string[]>([
  'Bedframe',
  'Mattress',
  'Desk & chair',
  'Shelves/bookcases',
  'Wardrobes/closet',
  'Bathroom/Restroom',
  'Window coverings',
  'Air conditioning',
  'Ceiling/standing fan',
  'Water heating',
]);
// Emit event to notify parent component
const emit = defineEmits(['updateCommonAreas', 'updateIsFurnished', 'updateRoomData', 'emitRoomData']);

const handleAvailabilityOptionClick = (option: any) => {
  availability.value = option.value
}
// Availability options array
const availabilityOptions = [
  { label: 'Available Now', value: 'now' },
  { label: 'Not available', value: 'unavailable' },
  { label: 'Available from (specify date)', value: 'available_from_date' },
];

// // Load room data when a room is selected
// const loadRoomData = (roomName: string) => {
//   const room = roomData.value.find(r => r.name === roomName);
//   if (room) {
//     availability.value = room.availability;
//     availabilityDate.value = room.availableFrom;
//     occupantsName.value = room.occupantName;
//     price.value = room.rentAmount;
//     priceFrequency.value = room.rentFrequency;
//     isRoomFurnished.value = room.isFurnished;
//     setAsMasterBedroom.value = room.isMaster;
//     roomFeatures.value = room.features;
//   }
// };

// // Method to update room data when user inputs data
// const updateRoomData = (roomName: string) => {
//   const room = roomData.value.find((r: any) => r.name === roomName);
//   if (room) {
//     room.availability = availability.value;
//     room.availableFrom = availability.value === 'available_from_date' ? availabilityDate.value : '';
//     room.occupantName = occupantsName.value;
//     room.isMaster = setAsMasterBedroom.value;
//     room.rentAmount = price.value;
//     room.rentFrequency = priceFrequency.value;
//     room.isFurnished = isRoomFurnished.value;
//     room.features = roomFeatures.value;
//   }
// };

// Method to update room data when the user inputs data and before switching rooms
// const updateRoomData = (roomName: string) => {
//   const roomIndex = roomData.value.findIndex((r: any) => r.name === roomName);
//   if (roomIndex !== -1) {
//     // Update the existing room's data
//     roomData.value[roomIndex] = {
//       name: roomName,
//       availability: availability.value,
//       availableFrom: availability.value === 'available_from_date' ? availabilityDate.value : '',
//       occupantName: occupantsName.value,
//       isMaster: setAsMasterBedroom.value,
//       rentAmount: parseInt(price.value),
//       rentFrequency: priceFrequency.value,
//       isFurnished: isRoomFurnished.value,
//       features: roomFeatures.value,
//       images: [] // You can update this to reflect actual images
//     };
    
//     // Emit the updated roomData array to the parent component
//     emit('updateRoomData', roomData.value);
//   }
// };
// // Load room data when a room is selected
// const loadRoomData = (roomName: string) => {
//   const room = roomData.value.find(r => r.name === roomName);
//   if (room) {
//     availability.value = room.availability;
//     availabilityDate.value = room.availableFrom;
//     occupantsName.value = room.occupantName;
//     price.value = room.rentAmount.toString();
//     priceFrequency.value = room.rentFrequency;
//     isRoomFurnished.value = room.isFurnished;
//     setAsMasterBedroom.value = room.isMaster;
//     roomFeatures.value = room.features;
//   }
// };

// Method to update room data when the user inputs data and before switching rooms
// const updateRoomData = (roomName: string) => {
//   const roomIndex = roomData.value.findIndex((r: any) => r.name === roomName);
//   if (roomIndex !== -1) {
//     // Create room data object
//     const room = {
//       name: roomName,
//       availability: availability.value,
//       availableFrom: availability.value === 'available_from_date' ? availabilityDate.value : '',
//       occupantName: occupantsName.value,
//       isMaster: setAsMasterBedroom.value,
//       rentAmount: parseInt(price.value),
//       rentFrequency: priceFrequency.value,
//       isFurnished: isRoomFurnished.value,
//       features: roomFeatures.value,
//       images: [] // You can update this to reflect actual images
//     };
    
//     // Emit the room data for this specific room
//     emit('emitRoomData', room);

//     // Clear the current room's form data after emitting
//     clearRoomFormData();
//   }
// };

// Method to update room data
const saveRoomData = (roomName: string) => {
  const roomIndex = roomData.value.findIndex((r: any) => r.name === roomName);
  if (roomIndex !== -1) {
    // Update the existing room's data
    roomData.value[roomIndex] = {
      name: roomName,
      availability: availability.value,
      availableFrom: availability.value === 'available_from_date' ? availabilityDate.value : '',
      occupantName: occupantsName.value,
      isMaster: setAsMasterBedroom.value,
      rentAmount: parseInt(price.value),
      rentFrequency: priceFrequency.value,
      isFurnished: isRoomFurnished.value,
      features: roomFeatures.value,
      images: [] // Update this with actual image data if available
    };
    
    // Emit the room data for this specific room
    emit('emitRoomData', roomData.value[roomIndex]);
  }
};


// Load room data when a room is selected
const loadRoomData = (roomName: string) => {
  const room = roomData.value.find(r => r.name === roomName);
  if (room) {
    availability.value = room.availability;
    availabilityDate.value = room.availableFrom;
    occupantsName.value = room.occupantName;
    price.value = room.rentAmount.toString();
    priceFrequency.value = room.rentFrequency;
    isRoomFurnished.value = room.isFurnished;
    setAsMasterBedroom.value = room.isMaster;
    roomFeatures.value = room.features;
  }
  // const room = roomData.value.find(r => r.name === roomName);
  // if (room) {
  //   availability.value = room.availability;
  //   availabilityDate.value = room.availableFrom;
  //   occupantsName.value = room.occupantName;
  //   price.value = room.rentAmount.toString();
  //   priceFrequency.value = room.rentFrequency;
  //   isRoomFurnished.value = room.isFurnished;
  //   setAsMasterBedroom.value = room.isMaster;
  //   roomFeatures.value = room.features;
  // }
};

// Clear form data after room is emitted
const clearRoomFormData = () => {
  availability.value = "now";
  availabilityDate.value = "";
  occupantsName.value = "";
  price.value = "";
  priceFrequency.value = "monthly";
  isRoomFurnished.value = false;
  setAsMasterBedroom.value = false;
  roomFeatures.value = [];
};

const setActiveRoom = (roomName: any) => {
  // activeRoom.value = roomName;

  // // Update the current room's data before switching
  // updateRoomData(activeRoom.value);
  // // Load the new room's data
  // loadRoomData(roomName);

   // Save the current room's data before switching
   saveRoomData(activeRoom.value);
  
  // Clear the form data to prevent overwriting
  clearRoomFormData();
  
  // Load the new room's data
  loadRoomData(roomName);

  // Set the active room to the new one
  activeRoom.value = roomName;
}

// Save and exit function to emit data and move to the next step
const saveAndExit = () => {
  // Save the current room data
  saveRoomData(activeRoom.value);

  // Clear the form data
  clearRoomFormData();

  // You can add logic here to navigate to the next step or emit a signal
  // Example: emit('nextStep');
};

// Function to toggle selection
const toggleSelection = (item: string, type: string) => {
  const index = roomFeatures.value.findIndex(
    (area: any) => area.name === item && area.type === type
  );
  if (index > -1) {
    // Deselect the item
    roomFeatures.value.splice(index, 1);
  } else {
    // Select the item
    roomFeatures.value.push({
      name: item,
      type,
      images: [], // Start with empty images
    });
  }
  // Emit updated array to parent
  emit("updateCommonAreas", roomFeatures.value);
};

// Method to add manual item
const addManualItem = () => {
  if (manualInput.value.trim() !== '') {
    interiorItems.value.push(manualInput.value.trim());
    manualInput.value = ''; // Clear the input field after adding
    showManualInput.value = false; // Hide the input field after adding
  }
};

const roomFeatures = ref<any[]>([]);

// Function to check if an item is already selected
const isSelected = (item: string, type: string) => {
  return roomFeatures.value.some(
    (area: any) => area.name === item && area.type === type
  );
};


const isRoomFurnished = ref(true);
const setFurnishedStatus = (status: boolean) => {
  isRoomFurnished.value = status;
  emit("updateIsFurnished", isRoomFurnished.value);
};
</script>

<style scoped>
/* Custom styles */
button {
    transition: background-color 0.3s, color 0.3s;
  }
  
  input {
    transition: border-color 0.3s;
  }
  
  input:focus {
    outline: none;
    border-color: orange;
  }

  /* Additional custom styles if needed */
select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  
  select::-ms-expand {
    display: none;
  }
  
  select option {
    background-color: white;
    color: black;
  }
  
  input {
    min-width: 0; /* Ensures that the input can shrink */
  }
</style>

