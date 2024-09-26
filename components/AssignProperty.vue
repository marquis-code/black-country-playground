<template>
    <main>
        <div class="relative w-full">
            <label class="block text-sm font-medium text-gray-700">Assign property</label>
            <div class="mt-1 relative">
                <input type="text" readonly placeholder="Single agent/property manager" v-model="selectedUser"
                    @click="toggleDropdown"
                    class="w-full bg-[#F0F2F5] text-sm py-3 px-4 border-[0.5px] outline-none border-gray-100 rounded-md cursor-pointer" />
                <div v-if="showDropdown" ref="dropdown"
                    class="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md py-1">
                    <ul v-if="!loading">
                        <li v-for="user in agents" :key="user.id" @click="selectUser(user)"
                            class="px-4 py-3 text-sm border-b-[0.5px] last:border-b-0 hover:bg-gray-50 cursor-pointer">
                            {{ user.firstName }} {{ user.lastName }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <slot name="action-buttons"></slot>
    </main>
</template>

<script setup lang="ts">
const props = defineProps({
  agents: {
    type: Array,
    default: () => []
  },
  loading: {
    type: Boolean,
    default: false
  },
  payload: {
    type: Object,
    default: () => ({ agentId: '' }) // Ensure the default payload structure includes agentId
  }
});

// Emit events to the parent component
const emit = defineEmits(['update:payload']);

// Reactive variables
const selectedUser = ref('');
const showDropdown = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

// Create a computed property that always returns an array
const agentList = computed(() => Array.isArray(props.agents) ? props.agents : []);

// Toggles the dropdown visibility
function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

// Selects the user and emits the selected value to the parent component
function selectUser(user: any) {
  console.log(user, 'selected')
  props.payload.agentId.value = user.id
  emit('update:payload', { ...props.payload, agentId: user.id }); // Emit the updated payload
  selectedUser.value = `${user.firstName} ${user.lastName}`;
  showDropdown.value = false;
}

// Handle clicks outside the dropdown to close it
function handleClickOutside(event: MouseEvent) {
  const dropdown = dropdownRef.value;
  if (dropdown && !dropdown.contains(event.target as Node)) {
    showDropdown.value = false;
  }
}

// Prefill the agent data on component mount
onMounted(() => {
  console.log(props.agents, 'agents list');
  console.log(props.payload.agentId, 'already selected agent');

  // Prefill agent details if `props.payload.agentId` is available
  if (props.payload.agentId) {
    const agent = agentList.value.find((user: any) => user.id === props.payload.agentId);
    if (agent) {
      selectedUser.value = `${agent.firstName} ${agent.lastName}`;
    }
  }

  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
