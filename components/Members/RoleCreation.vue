<!-- components/RoleCreation.vue -->
<template>
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-xl font-semibold mb-4">New Role</h2>
  
      <form @submit.prevent="createRole">
        <div class="mb-4">
          <label for="role" class="block text-gray-700">Role Title</label>
          <input id="role" type="text" v-model="roleTitle" class="w-full p-2 border rounded-lg"/>
        </div>
  
        <!-- Permissions Checkboxes -->
        <div class="grid grid-cols-3 gap-4">
          <div v-for="category in categories" :key="category.name" class="space-y-2">
            <h3 class="font-semibold">{{ category.name }}</h3>
            <div v-for="permission in category.permissions" :key="permission">
              <label class="inline-flex items-center">
                <input type="checkbox" :value="permission" v-model="selectedPermissions">
                <span class="ml-2">{{ permission }}</span>
              </label>
            </div>
          </div>
        </div>
  
        <div class="mt-4">
          <button type="submit" class="bg-black text-white py-2 px-4 rounded-lg">Create Role</button>
        </div>
      </form>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  
  const roleTitle = ref('');
  const selectedPermissions = ref<string[]>([]);
  
  const categories = [
    { name: 'Property Management', permissions: ['Add new property', 'View all properties', 'Deactivate property'] },
    { name: 'Tenant Management', permissions: ['View all tenants', 'View tenant information', 'Assign maintenance requests'] },
    { name: 'Financial Management', permissions: ['Select all', 'Furnished', 'Not furnished'] },
    // Add more categories as per the image
  ];
  
  function createRole() {
    // Handle role creation
  }
  </script>
  