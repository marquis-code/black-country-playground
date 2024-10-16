<template>
  <div class="max-w-7xl mx-auto p-6 bg-white border-[0.5px] border-gray-25 rounded-sm">
    <!-- Role Title Input -->
    <div class="mb-6">
      <label for="role-title" class="block text-gray-700 font-medium mb-2">Role title</label>
      <input id="role-title" type="text" placeholder="e.g. Property manager"
        class="w-2/4 px-4 py-3 border-[0.5px] text-sm border-gray-300 outline-none rounded-md" />
    </div>

    <!-- Enable all super admin permissions -->
    <div class="mb-6 flex items-center gap-x-6 border-y py-4 border-gray-25">
      <div>
        <label class="flex-grow text-base text-[#171717] font-medium">Enable all super admin permissions</label>
      </div>
      <div>
        <input type="checkbox" v-model="enableAllSuperAdmin" @change="toggleAllPermissions"
          class="h-4 w-4 text-indigo-600">
      </div>
    </div>

    <!-- Permission Categories -->
    <div v-if="!loading" class="grid grid-cols-3 gap-10">
      <!-- Loop through grouped permissions -->
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
              <!-- Loader icon beside the permission checkbox when loading -->
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
          <!-- <div class="rounded-md bg-slate-200 h-44 w-44"></div> -->
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
</template>


<script lang="ts" setup>
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
</script>