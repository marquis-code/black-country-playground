<!-- <template>
<Layout>
  <template #header-content>
    <div
    class="container mx-auto flex items-center justify-between py-3 rounded-lg"
  >
    <div class="flex items-center justify-between gap-x-2 w-full">
    <div class="flex items-center gap-x-2">
      <button
      @click="router.back()"
      class="flex items-center text-gray-500 bg-[#F9FAFB] border-[0.5px] rounded-md py-3 px-3 hover:text-gray-700"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15"
          stroke="#292929"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span class="ml-2 text-[#292929]">Back</span>
    </button>
     <h1 class="text-base pl-3 font-semibold">New role</h1>
    </div>
     
     <div>
        <button class="bg-[#292929] text-white px-4 py-3 rounded-lg">Create New Role</button>
     </div>
    </div>
  </div>
  </template>
  <div class="mx-auto p-6 bg-white border-[0.5px] border-gray-25 rounded-sm">

    <div class="mb-6">
      <label for="role-title" class="block text-gray-700 font-medium mb-2">Role title</label>
      <input id="role-title" type="text" placeholder="e.g. Property manager"
        class="w-2/4 px-4 py-3 border-[0.5px] text-sm border-gray-300 outline-none rounded-md" />
    </div>


    <div class="mb-6 flex items-center gap-x-6 border-y py-4 border-gray-25">
      <div>
        <label class="flex-grow text-base text-[#171717] font-medium">Enable all super admin permissions</label>
      </div>
      <div>
        <input type="checkbox" v-model="enableAllSuperAdmin" @change="toggleAllPermissions"
          class="h-4 w-4 text-indigo-600">
      </div>
    </div>


    <div v-if="!loading" class="grid grid-cols-3 gap-10">

      <div v-for="(category, categoryName) in groupedPermissions" :key="categoryName" class="space-y-6">
        <h3 class="font-medium text-[#171717] text-sm mb-3">{{ categoryName }}</h3>
        <ul class="space-y-4">
          <li>
            <label class="flex items-center justify-between text-[#667185] text-sm">
              Select all
              <input type="checkbox" v-model="category.selectAll" @change="toggleCategoryPermissions(categoryName)"
                class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </label>
          </li>
          <li v-for="permission in category.items" :key="permission.id" class="flex items-center justify-between">
            <label class="text-[#667185] text-sm flex items-center">
              {{ permission.label }}
    
              <span v-if="permission.isLoading"
                class="ml-2 h-4 w-4 border-2 border-gray-300 border-t-2 border-t-indigo-600 animate-spin rounded-full"></span>
            </label>
            <input type="checkbox" v-model="permission.checked" @change="togglePermission(categoryName, permission)"
              class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
          </li>
        </ul>
      </div>
    </div>
    <section v-else>
      <div class="rounded-md p-4 w-full mx-auto mt-10">
        <div class="animate-pulse flex space-x-4">

          <div class="flex-1 space-y-6 py-1">
            <div class="h-32 bg-slate-200 rounded"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="h-32 w-full bg-slate-200 rounded col-span-2"></div>
                <div class="h-32 w-full bg-slate-200 rounded col-span-1"></div>
              </div>
              <div class="h-32 w-full bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</Layout>
</template>


<script lang="ts" setup>
import Layout from "@/layouts/dashboard.vue";
import { useFetchPermissions } from '@/composables/modules/permission-mgt/fetch-permissions'
// const { roles } = useFetchRoles()
const { permissions: permissionsList, loading } = useFetchPermissions()

const enableAllSuperAdmin = ref(false);
const groupedPermissions = ref([]) as any
const groupPermissions = () => {
  if (Array.isArray(permissionsList.value)) {
    groupedPermissions.value = permissionsList.value.reduce((acc: any, permission: any) => {
      const moduleName = permission.accessModule.name;

      if (!acc[moduleName]) {
        acc[moduleName] = {
          selectAll: false,
          items: []
        };
      }

      acc[moduleName].items.push({
        id: permission.id,
        label: permission.name,
        checked: false,
        isLoading: false
      });

      return acc;
    }, {});
  } else {
    console.error("permissionsList is not an array or has not been loaded yet.");
  }
};

// Watch for changes in permissionsList and trigger grouping once it's loaded
watchEffect(() => {
  if (permissionsList.value && Array.isArray(permissionsList.value)) {
    groupPermissions();
  }
});

// Watch for changes in the permissions list to group them accordingly
watchEffect(() => {
  if (permissionsList.value) {
    groupPermissions();
  }
});


const toggleCategoryPermissions = (category: string) => {
  const allSelected = groupedPermissions.value[category].selectAll;
  groupedPermissions.value[category].items.forEach((item: any) => {
    item.checked = allSelected;
    handlePermissionUpdate(item);
  });
};

// Function to update individual permissions
const handlePermissionUpdate = async (permission: any) => {
  permission.isLoading = true; // Show the loader
  try {
    // Call your API to update the permission state
    await useUpdatePermission(permission.id, permission.checked);
    // After successful API call, ensure the checkbox remains checked
  } catch (error) {
    // Handle the error, e.g., show a toast or alert
    console.error("Error updating permission:", error);
  } finally {
    permission.isLoading = false; // Hide the loader
  }
};

// Toggle individual permission checkbox
const togglePermission = (category: string, permission: any) => {
  permission.checked = !permission.checked;
  handlePermissionUpdate(permission);
};
</script> -->

<script lang="ts" setup>
import Layout from "@/layouts/dashboard.vue";
import { ref, watchEffect } from 'vue';
import { useFetchPermissions } from '@/composables/modules/permission-mgt/fetch-permissions'

const { permissions: permissionsList, loading } = useFetchPermissions()

const enableAllSuperAdmin = ref(false); // Track the state of the "Enable all super admin permissions" checkbox
const roleTitle = ref('');
const groupedPermissions = ref([]) as any;
const selectedPermissions = ref([]); // Array to hold selected permission IDs

// Group permissions by categories
const groupPermissions = () => {
  if (Array.isArray(permissionsList.value)) {
    groupedPermissions.value = permissionsList.value.reduce((acc: any, permission: any) => {
      const moduleName = permission.accessModule.name;

      if (!acc[moduleName]) {
        acc[moduleName] = {
          selectAll: false,
          items: []
        };
      }

      acc[moduleName].items.push({
        id: permission.id,
        label: permission.name,
        checked: false, // Initialize each checkbox as unchecked
      });

      return acc;
    }, {});
  } else {
    console.error("permissionsList is not an array or has not been loaded yet.");
  }
};

// Watch for changes in permissionsList and trigger grouping once it's loaded
watchEffect(() => {
  if (permissionsList.value && Array.isArray(permissionsList.value)) {
    groupPermissions();
  }
});

// Toggle all permissions when "Enable all super admin permissions" is clicked
const toggleAllSuperAdminPermissions = () => {
  enableAllSuperAdmin.value = !enableAllSuperAdmin.value;

  // Toggle all category permissions based on "Enable all" checkbox
  Object.keys(groupedPermissions.value).forEach(category => {
    groupedPermissions.value[category].items.forEach((permission: any) => {
      permission.checked = enableAllSuperAdmin.value; // Set all to the same state
      handlePermissionSelection(permission); // Add/remove from selectedPermissions array
    });
    groupedPermissions.value[category].selectAll = enableAllSuperAdmin.value;
  });
};

// Handle category-level "Select All"
const toggleCategoryPermissions = (category: string) => {
  const allSelected = groupedPermissions.value[category].selectAll;
  groupedPermissions.value[category].items.forEach((item: any) => {
    item.checked = allSelected;
    handlePermissionSelection(item);
  });
};

// Handle individual permission selection
const handlePermissionSelection = (permission: any) => {
  if (permission.checked) {
    if (!selectedPermissions.value.includes(permission.id)) {
      selectedPermissions.value.push(permission.id);
    }
  } else {
    const index = selectedPermissions.value.indexOf(permission.id);
    if (index !== -1) {
      selectedPermissions.value.splice(index, 1);
    }
  }
};

// Toggle individual permission checkbox
const togglePermission = (category: string, permission: any) => {
  permission.checked = !permission.checked;
  handlePermissionSelection(permission);

  // Check if all permissions in the category are selected to toggle "Select All"
  groupedPermissions.value[category].selectAll = groupedPermissions.value[category].items.every((item: any) => item.checked);
};

// Function to create a new role
const createRole = () => {
  const payload = {
    roleTitle: roleTitle.value,
    permissions: selectedPermissions.value
  };
  console.log("Sending payload to backend:", payload);
  // Call your API to send the payload
};
</script>

<template>
  <Layout>
    <template #header-content>
      <div class="container mx-auto flex items-center justify-between py-3 rounded-lg">
        <div class="flex items-center justify-between gap-x-2 w-full">
          <div class="flex items-center gap-x-2">
            <button @click="router.back()" class="flex items-center text-gray-500 bg-[#F9FAFB] border-[0.5px] rounded-md py-3 px-3 hover:text-gray-700">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15" stroke="#292929" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="ml-2 text-[#292929]">Back</span>
            </button>
            <h1 class="text-base pl-3 font-semibold">New role</h1>
          </div>
          <div>
            <button @click="createRole" class="bg-[#292929] text-white px-4 py-3 rounded-lg">Create New Role</button>
          </div>
        </div>
      </div>
    </template>

    <div class="mx-auto p-6 bg-white border-[0.5px] border-gray-25 rounded-sm">
      <!-- Role Title Input -->
      <div class="mb-6">
        <label for="role-title" class="block text-gray-700 font-medium mb-2">Role title</label>
        <input v-model="roleTitle" id="role-title" type="text" placeholder="e.g. Property manager"
          class="w-2/4 px-4 py-3 border-[0.5px] text-sm border-gray-300 outline-none rounded-md" />
      </div>

      <!-- Enable all super admin permissions -->
      <div class="mb-6 flex items-center gap-x-6 border-y py-4 border-gray-25">
        <div>
          <label class="flex-grow text-base text-[#171717] font-medium">Enable all super admin permissions</label>
        </div>
        <div>
          <input type="checkbox" v-model="enableAllSuperAdmin" @change="toggleAllSuperAdminPermissions"
            class="h-4 w-4 text-indigo-600">
        </div>
      </div>

      <!-- Permission Categories -->
      <div v-if="!loading" class="grid grid-cols-3 gap-10">
        <div v-for="(category, categoryName) in groupedPermissions" :key="categoryName" class="space-y-6">
          <h3 class="font-medium text-[#171717] text-sm mb-3">{{ categoryName }}</h3>
          <ul class="space-y-4">
            <li>
              <label class="flex items-center justify-between text-[#667185] text-sm">
                Select all
                <input type="checkbox" v-model="category.selectAll" @change="toggleCategoryPermissions(categoryName)"
                  class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
              </label>
            </li>
            <li v-for="permission in category.items" :key="permission.id" class="flex items-center justify-between">
              <label class="text-[#667185] text-sm flex items-center">
                {{ permission.label }}
              </label>
              <input type="checkbox" v-model="permission.checked" @change="togglePermission(categoryName, permission)"
                class="mr-2 h-4 w-4 text-indigo-600 border-gray-300 rounded">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
</template>
