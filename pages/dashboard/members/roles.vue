
<template>
  <div class="max-w-4xl mx-auto p-6 bg-white border-[0.5px] border-gray-25 rounded-sm">
    <!-- Role Title Input -->
    <div class="mb-6">
      <label for="role-title" class="block text-gray-700 font-medium mb-2">Role title</label>
      <input
        id="role-title"
        type="text"
        placeholder="e.g. Property manager"
        class="w-2/4 px-4 py-3 border-[0.5px] text-sm border-gray-300 outline-none rounded-md"
      />
    </div>

    <!-- Enable all super admin permissions -->
    <div class="mb-6 flex items-center gap-x-6 border-y py-4 border-gray-25">
      <div>
        <label class="flex-grow text-base text-[#171717] font-medium">Enable all super admin permissions</label>
      </div>
     <div>
      <input type="checkbox" v-model="enableAllSuperAdmin" @change="toggleAllPermissions" class="h-4 w-4 text-indigo-600">
     </div>
    </div>

    <!-- Permission Categories -->
    <div class="grid grid-cols-3 gap-10">
      <!-- Property Management -->
      <div class="space-y-6">
        <h3 class="font-medium text-[#171717] text-sm mb-3">Property management</h3>
        <ul class="space-y-4">
          <li>
            <label class="flex items-center justify-between text-[#667185] text-sm">
              Select all
              <input type="checkbox" v-model="permissions.propertyManagement.selectAll" @change="toggleCategoryPermissions('propertyManagement')" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
          <li v-for="(permission, index) in permissions.propertyManagement.items" :key="index" class="">
            <label class="flex items-center justify-between text-[#667185] text-sm">
              {{ permission.label }}
              <input type="checkbox" v-model="permission.checked" class="mr-2 h-4 w-4  border-gray-300 text-sm rounded">
            </label>
          </li>
        </ul>
      </div>

      <!-- Tenant Management -->
      <div class="space-y-6">
        <h3 class="font-medium text-[#171717] text-sm mb-3">Tenant management</h3>
        <ul class="space-y-2">
          <li>
            <label class="flex items-center justify-between text-[#667185] text-sm">
              Select all
              <input type="checkbox" v-model="permissions.tenantManagement.selectAll" @change="toggleCategoryPermissions('tenantManagement')" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
          <li v-for="(permission, index) in permissions.tenantManagement.items" :key="index">
            <label class="flex items-center justify-between text-[#667185] text-sm">
              {{ permission.label }}
              <input type="checkbox" v-model="permission.checked" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
        </ul>
      </div>

      <!-- Financial Management -->
      <div class="space-y-6">
        <h3 class="font-medium text-[#171717] text-sm mb-3">Financial management</h3>
        <ul class="space-y-2">
          <li>
            <label class="flex items-center justify-between text-[#667185] text-sm">
              Select all
              <input type="checkbox" v-model="permissions.financialManagement.selectAll" @change="toggleCategoryPermissions('financialManagement')" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
          <li v-for="(permission, index) in permissions.financialManagement.items" :key="index">
            <label class="flex items-center justify-between text-[#667185] text-sm">
              {{ permission.label }}
              <input type="checkbox" v-model="permission.checked" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
        </ul>
      </div>

      <!-- Members -->
      <div>
        <h3 class="font-medium text-[#171717] text-sm mb-3">Members</h3>
        <ul class="space-y-2">
          <li>
            <label class="flex items-center justify-between text-[#667185] text-sm">
              Select all
              <input type="checkbox" v-model="permissions.members.selectAll" @change="toggleCategoryPermissions('members')" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
          <li v-for="(permission, index) in permissions.members.items" :key="index">
            <label class="flex items-center justify-between text-[#667185] text-sm">
              {{ permission.label }}
              <input type="checkbox" v-model="permission.checked" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
        </ul>
      </div>

      <!-- Messages -->
      <div class="space-y-6">
        <h3 class="font-medium text-[#171717] text-sm mb-3">Messages</h3>
        <ul class="space-y-2">
          <li>
            <label class="flex items-center justify-between text-[#667185] text-sm">
              Select all
              <input type="checkbox" v-model="permissions.messages.selectAll" @change="toggleCategoryPermissions('messages')" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
          <li v-for="(permission, index) in permissions.messages.items" :key="index">
            <label class="flex items-center justify-between text-[#667185] text-sm">
              {{ permission.label }}
              <input type="checkbox" v-model="permission.checked" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
        </ul>
      </div>

      <!-- Notifications -->
      <div class="space-y-6">
        <h3 class="font-medium text-[#171717] text-sm mb-3">Notifications</h3>
        <ul class="space-y-2">
          <li>
            <label class="flex items-center justify-between text-[#667185] text-sm">
              Select all
              <input type="checkbox" v-model="permissions.notifications.selectAll" @change="toggleCategoryPermissions('notifications')" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
          <li v-for="(permission, index) in permissions.notifications.items" :key="index">
            <label class="flex items-center justify-between text-[#667185] text-sm">
              {{ permission.label }}
              <input type="checkbox" v-model="permission.checked" class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>



<script lang="ts" setup>
import { ref } from 'vue';

const enableAllSuperAdmin = ref(false);

definePageMeta({
     layout: 'dashboard'
})

const permissions = ref({
  propertyManagement: {
    selectAll: false,
    items: [
      { label: 'Add new property', checked: false },
      { label: 'View all properties', checked: false },
      { label: 'View property information', checked: false },
      { label: 'Deactivate property', checked: false },
      { label: 'Delete property', checked: false },
      { label: 'View rental applications', checked: false },
      { label: 'View application information', checked: false },
      { label: 'Approve & decline rental applications', checked: false },
      { label: 'Send lease agreement to tenants', checked: false },
      { label: 'View lease documents', checked: false },
      { label: 'Generate new lease agreement', checked: false },
      { label: 'Edit lease agreement', checked: false },
      { label: 'Duplicate & edit lease', checked: false },
      { label: 'Download lease', checked: false },
      { label: 'Delete lease document', checked: false },
      { label: 'Sign lease documents', checked: false }
    ]
  },
  tenantManagement: {
    selectAll: false,
    items: [
      { label: 'View all tenants', checked: false },
      { label: 'View tenant information', checked: false },
      { label: 'View all maintenance requests', checked: false },
      { label: 'View maintenance requests information', checked: false },
      { label: 'Assign maintenance requests', checked: false }
    ]
  },
  financialManagement: {
    selectAll: false,
    items: [
      { label: 'Furnished', checked: false },
      { label: 'Not furnished', checked: false }
    ]
  },
  members: {
    selectAll: false,
    items: [
      { label: 'View all members', checked: false },
      { label: 'View members information', checked: false },
      { label: 'Invite new members', checked: false },
      { label: 'Deactivate members', checked: false },
      { label: 'Delete/remove members', checked: false },
      { label: 'View all roles & permissions', checked: false },
      { label: 'Create new roles', checked: false },
      { label: 'View all permissions', checked: false }
    ]
  },
  messages: {
    selectAll: false,
    items: [
      { label: 'View all tenants', checked: false },
      { label: 'View tenant information', checked: false },
      { label: 'View all maintenance requests', checked: false },
      { label: 'View maintenance requests information', checked: false },
      { label: 'Assign maintenance requests', checked: false }
    ]
  },
  notifications: {
    selectAll: false,
    items: [
      { label: 'View all members', checked: false },
      { label: 'View members information', checked: false },
      { label: 'Invite new members', checked: false },
      { label: 'Deactivate members', checked: false },
      { label: 'Delete/remove members', checked: false },
      { label: 'View all roles & permissions', checked: false },
      { label: 'Create new roles', checked: false },
      { label: 'View all permissions', checked: false }
    ]
  }
});

const toggleAllPermissions = () => {
  for (const category in permissions.value) {
    permissions.value[category as keyof typeof permissions.value].selectAll = enableAllSuperAdmin.value;
    permissions.value[category as keyof typeof permissions.value].items.forEach(item => {
      item.checked = enableAllSuperAdmin.value;
    });
  }
};

const toggleCategoryPermissions = (category: keyof typeof permissions.value) => {
  const allSelected = permissions.value[category].selectAll;
  permissions.value[category].items.forEach(item => {
    item.checked = allSelected;
  });
};
</script>
