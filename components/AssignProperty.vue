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
                    <ul>
                        <li v-for="user in users" :key="user" @click="selectUser(user)"
                            class="px-4 py-3 text-sm border-b-[0.5px] last:border-b-0 hover:bg-gray-50 cursor-pointer">
                            {{ user }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <slot name="action-buttons"></slot>
    </main>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const selectedUser = ref('');
const showDropdown = ref(false);
const users = ref([
    'Olga Effertz',
    'Joy Adetunji',
    'Gayle Bailey',
    'Patrick Harvey',
    'Robyn Lueilwitz',
]);

function toggleDropdown() {
    showDropdown.value = !showDropdown.value;
}

function selectUser(user: string) {
    selectedUser.value = user;
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