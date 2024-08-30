<!-- components/RolesList.vue -->
<template>
    <div class="bg-white rounded-lg shadow p-4">
      <h2 class="text-xl font-semibold mb-4">Existing Roles</h2>
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="p-4">Role Name</th>
            <th>Permissions</th>
            <th>Members</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="role in roles" :key="role.name" class="border-t">
            <td class="p-4">{{ role.name }}</td>
            <td>
              <ul>
                <li v-for="permission in role.permissions" :key="permission">
                  - {{ permission }}
                </li>
              </ul>
            </td>
            <td>{{ role.members }}</td>
            <td>
              <button class="text-blue-500 hover:underline mr-2">Edit</button>
              <button class="text-red-500 hover:underline">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup lang="ts">
  const roles = [
    {
      name: 'Super Admin',
      permissions: ['Add new property', 'View all properties', 'Deactivate property'],
      members: 5,
    },
    {
      name: 'Property Manager',
      permissions: ['View all tenants', 'Assign maintenance requests'],
      members: 12,
    },
    // Add more roles as needed
  ];
  </script>
  