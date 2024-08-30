<!-- pages/roles.vue -->
<template>
    <div>
      <MembersTopNavigation :pageTitle="'Roles Management'" />
      <div class="mt-6 space-y-6">
        <MembersRoleCreation />
        <MembersRolesList />
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import TopNavigation from '@/components/TopNavigation.vue';
  import RoleCreation from '@/components/RoleCreation.vue';
  import RolesList from '@/components/RolesList.vue';
  </script>
  