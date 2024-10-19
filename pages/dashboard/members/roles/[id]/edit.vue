<template>
    <Layout>
      <template #header-content>
        <div class="container mx-auto flex items-center justify-between py-3 rounded-lg">
          <div class="flex items-center justify-between gap-x-2 w-full">
            <div class="flex items-center gap-x-2">
              <button @click="router.back()" class="flex items-center text-gray-500 bg-[#F9FAFB] border-[0.5px] rounded-md py-3 px-3 hover:text-gray-700">
                <span class="ml-2 text-[#292929]">Back</span>
              </button>
              <h1 class="text-base pl-3 font-semibold">Edit Role: {{ roleTitle }}</h1>
            </div>
            <div>
              <button :disabled="isSubmitDisabled || updating" @click="submitForm" class="bg-[#292929] disabled:cursor-not-allowed disabled:opacity-25 text-white px-4 py-3 rounded-lg">
                {{ updating ? "Saving..." : "Save changes" }}
              </button>
            </div>
          </div>
        </div>
      </template>
  
    <section>
      <div v-if="!loadingRole">
          <div v-if="permissions.length && !fetching" class="mx-auto p-3 bg-white border-[0.5px] border-gray-25 rounded-lg">
              <div class="p-4">
                <div class="mb-4 space-y-2">
                  <label for="role-title" class="block text-base">Role Title</label>
                  <input id="role-title" v-model="roleTitle" class="w-2/4 px-4 py-3 border-[0.5px] text-sm border-gray-300 outline-none rounded-md" />
                </div>
        
                <!-- Permissions List -->
                <div class="grid grid-cols-3 gap-8">
                  <div v-for="(module, index) in groupedPermissions" :key="index" class="mb-4">
                    <h3 class="text-[#667185] text-base flex items-center font-semibold mb-2 uppercase">{{ module.name }}</h3>
                    <div class="space-y-3">
                      <label class="custom-checkbox-container ml-4">
                        <input type="checkbox" @change="selectAllPermissions(module)" :checked="isModuleFullySelected(module)" class="hidden-checkbox" />
                        Select all
                        <span class="custom-checkbox"></span>
                      </label>
        
                      <div v-for="permission in module.permissions" :key="permission.id" class="ml-4">
                        <label class="custom-checkbox-container">
                          {{ permission.name }}
                          <input type="checkbox" v-model="selectedPermissions" :value="permission.id" class="hidden-checkbox" />
                          <span class="custom-checkbox"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
      <div v-else class="flex flex-col justify-between items-center space-y-2">
        <div class="rounded-md p-4 w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
              <div class="flex-1 space-y-6 py-1">
                <div class="h-44 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
   </div>
    </section>
    </Layout>
  </template>



<script lang="ts" setup>
import Layout from "@/layouts/dashboard.vue";
import { useFetchPermissions } from "@/composables/modules/permission-mgt/fetch-permissions";
import { useUpdateRole } from "@/composables/modules/roles/update";
import { useFetchRole } from '@/composables/modules/roles/fetchRoleById';
const { loading: loadingRole, role } = useFetchRole();
const router = useRouter()
const route = useRoute()


// Fetch permissions from the backend
const { permissions, loading: fetching } = useFetchPermissions();
const { updateRole, loading: updating } = useUpdateRole();

// State for the role form
const roleTitle = ref(role.value.name); // Pre-fill the role title with the existing role name
const enableAllPermissions = ref(false);
const selectedPermissions = ref<string[]>([]);

watchEffect(() => {
  if (role.value?.name?.length) {
    roleTitle.value = role.value.name;
  }
});

watchEffect(() => {
  if (role.value?.permissions?.length) {
    selectedPermissions.value = role.value.permissions.map((perm: any) => perm.modulePermission.id);
  }
});
// const selectedPermissions = ref<string[]>(role.value.permissions.map((perm: any) => perm.modulePermission.id)); // Pre-select permissions based on the role data

// Group permissions by accessModule
const groupedPermissions = computed(() => {
  const groups = permissions.value.reduce((acc: any, permission: any) => {
    const module = permission.accessModule.name;
    if (!acc[module]) {
      acc[module] = { name: module, permissions: [] };
    }
    acc[module].permissions.push(permission);
    return acc;
  }, {});
  return Object.values(groups);
});

// Select All Permissions for a Module
const selectAllPermissions = (module: any) => {
  const modulePermissions = module.permissions.map((perm: any) => perm.id);
  if (isModuleFullySelected(module)) {
    selectedPermissions.value = selectedPermissions.value.filter(
      (permId: string) => !modulePermissions.includes(permId)
    );
  } else {
    selectedPermissions.value.push(
      ...modulePermissions.filter(
        (permId: string) => !selectedPermissions.value.includes(permId)
      )
    );
  }
};

// Check if all permissions in a module are selected
const isModuleFullySelected = (module: any) => {
  const modulePermissions = module.permissions.map((perm: any) => perm.id);
  return modulePermissions.every((permId: string) =>
    selectedPermissions.value.includes(permId)
  );
};

// Toggle All Permissions
const toggleAllPermissions = () => {
  if (enableAllPermissions.value) {
    selectedPermissions.value = permissions.value.map((perm: any) => perm.id);
  } else {
    selectedPermissions.value = [];
  }
};

// Submit Form Function (for updating the role)
const submitForm = async () => {
  const formattedRoleName = roleTitle.value.trim();
  if (!formattedRoleName) {
    console.error("Invalid role name. Please provide a valid name.");
    return;
  }

  const roleData = {
    role: { name: formattedRoleName },
    permissionIds: selectedPermissions.value,
  };

  console.log(roleData, 'role data here')

  try {
    await updateRole(roleData); // Call the update API with the role ID
    console.log("Role successfully updated.");
  } catch (error) {
    console.error("Error updating role:", error);
  }
};

// Computed property to check if the submit button should be disabled
// const isSubmitDisabled = computed(() => {
//   return roleTitle.value.trim() === '' || selectedPermissions.value.length === 0;
// });

// Computed property to check if the submit button should be disabled
const isSubmitDisabled = computed(() => {
  return (roleTitle.value?.trim() || '') === '' || selectedPermissions.value.length === 0;
});
</script>

<style scoped>
/* Hide the default checkbox */
.hidden-checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Custom checkbox container */
.custom-checkbox-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  color: #667185; /* Light text color */
}

/* Custom checkbox style */
.custom-checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #f0f4f8;
  border-radius: 6px;
  position: relative;
  margin-left: auto;
  transition: all 0.3s ease;
  border: 1px solid #d1d5db;
}

/* Checkmark (green tick) */
.custom-checkbox::after {
  content: '';
  position: absolute;
  width: 6px;
  height: 10px;
  border: solid green;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  transition: transform 0.2s ease;
}

/* When checkbox is checked, show the green tick */
.hidden-checkbox:checked + .custom-checkbox {
  background-color: #e6ffe6;
  border-color: #34d399; /* Light green */
}

.hidden-checkbox:checked + .custom-checkbox::after {
  transform: translate(-50%, -50%) scale(1);
}

/* Additional styling for text alignment and layout */
.custom-checkbox-container {
  padding: 10px;
}

/* Hide the default checkbox */
.hidden-checkbox {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
  /* Custom checkbox container */
  .custom-checkbox-container {
    display: flex;
    align-items: center;
  }
  
  /* Custom checkbox style */
  .custom-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: #f0f4f8;
    border-radius: 6px;
    position: relative;
    margin-right: 8px; /* Reduced margin for no large space */
    transition: all 0.3s ease;
    border: 1px solid #d1d5db;
  }
  
  /* Checkmark (green tick) */
  .custom-checkbox::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 10px;
    border: solid green;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s ease;
  }
  
  /* When checkbox is checked, show the green tick */
  .hidden-checkbox:checked + .custom-checkbox {
    background-color: #e6ffe6;
    border-color: #34d399; /* Light green */
  }
  
  .hidden-checkbox:checked + .custom-checkbox::after {
    transform: translate(-50%, -50%) scale(1);
  }
  
  /* Label Styling */
  .checkbox-label {
    font-size: 16px;
    color: #667185; /* Light grey text color */
    vertical-align: middle;
  }
</style>
