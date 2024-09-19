<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    @click.self="closeModal"
  >
    <div class="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
      <h2 class="text-lg font-semibold mb-4">Configure table</h2>
      <div class="space-y-4">
        <CoreToggleSwitch
          id="masterBedroom"
          label="Property Name"
          v-model="options.propertyName"
        />

        <CoreToggleSwitch
          id="propertyType"
          label="Property Type"
          v-model="options.propertyType"
        />

        <CoreToggleSwitch
          id="location"
          label="Location"
          v-model="options.location"
        />

        <CoreToggleSwitch
          id="roomOccupied"
          label="Rooms occupied"
          v-model="options.occupants"
        />

        <CoreToggleSwitch
          id="roomsCount"
          label="Rooms Count"
          v-model="options.roomsOccupied"
        />

        <CoreToggleSwitch
          id="bathroomCount"
          label="Bathroom count"
          v-model="options.bathroomCount"
        />

        <CoreToggleSwitch
          id="agentManagers"
          label="Agents/Property Managers"
          v-model="options.agents"
        />
      </div>
      <div class="mt-6 gap-x-6 flex justify-between">
        <button
          class="bg-[#EBE5E0] text-[#292929] w-full px-4 py-2.5 text-sm rounded"
          @click="resetOptions"
        >
          Reset
        </button>
        <button
          class="bg-[#292929] w-full text-white px-4 py-2.5 text-sm rounded"
          @click="saveOptions"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const options = ref({
  propertyName: true,
  propertyType: true,
  location: true,
  occupants: true,
  roomsOccupied: true,
  roomsCount: true,
  bathroomCount: false,
  agents: false,
});

const closeModal = () => {
  // Emit an event to close the modal
  emit("close");
};

const resetOptions = () => {
  options.value = {
    propertyName: true,
    propertyType: true,
    location: true,
    occupants: true,
    roomsOccupied: true,
    roomsCount: true,
    bathroomCount: false,
    agents: false,
  };
};

const saveOptions = () => {
  // Save logic goes here
  console.log("Options saved:", options.value);
  closeModal();
};
</script>

<style scoped>
.toggle-checkbox {
  width: 24px;
  height: 24px;
}
</style>
