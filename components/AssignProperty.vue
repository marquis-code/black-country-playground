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
    }
})

const selectedUser = ref('');
const showDropdown = ref(false)
function toggleDropdown() {
    showDropdown.value = !showDropdown.value;
}

function selectUser(user: string) {
    const storedData = sessionStorage.getItem('property')
    let propertyData = storedData ? JSON.parse(storedData) : {}

    // Update the session storage with new location data
    propertyData = {
        ...propertyData, // merge with existing data
        agentId: user?.id
    }

    // Store the updated data back to session storage
    sessionStorage.setItem('property', JSON.stringify(propertyData))
    console.log(user, 'user here')
    selectedUser.value = `${user.firstName} ${user.lastName}`;
    showDropdown.value = false;
}

function handleClickOutside(event: MouseEvent) {
    const dropdown = dropdownRef.value;
    if (dropdown && !dropdown.contains(event.target as Node)) {
        showDropdown.value = false;
    }
}

const dropdownRef = ref<HTMLElement | null>(null);

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Add any additional styles if necessary */
</style>