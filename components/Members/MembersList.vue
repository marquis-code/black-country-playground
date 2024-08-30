<!-- components/MembersList.vue -->
<template>
    <div class="bg-white rounded-lg shadow">
      <div class="flex justify-between p-4">
        <h2 class="text-xl font-semibold">Members</h2>
        <button class="bg-black text-white py-2 px-4 rounded-lg">New Member</button>
      </div>
  
      <table class="w-full text-left">
        <thead>
          <tr>
            <th class="p-4">Full name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last active</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="member in members" :key="member.email" class="border-t">
            <td class="p-4">{{ member.name }}</td>
            <td>{{ member.email }}</td>
            <td>{{ member.role }}</td>
            <td>{{ member.status }}</td>
            <td>{{ member.lastActive }}</td>
          </tr>
        </tbody>
      </table>
  
      <div class="p-4">
        <button class="text-blue-500">Previous</button>
        <button class="text-blue-500 ml-4">Next</button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  const members = [
    { name: 'Viola Gottlieb', email: 'VG73@hotmail.com', role: 'Super Admin', status: 'Active', lastActive: '11/03/2024' },
    { name: 'Forrest Bosco', email: 'Jake.Koelpin@yahoo.com', role: 'Property Manager', status: 'Invite Pending', lastActive: '11/03/2024' },
    // Add more members as per the image
  ];
  </script>
  