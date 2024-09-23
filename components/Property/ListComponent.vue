<template>
  <main>
    <!-- <section class="">
      <div class="">
        <div
          class="lg:flex justify-between items-center mb-6 space-y-4 lg:space-y-0 w-full"
        >
          <div class="flex space-x-4 w-full lg:w-2/3">
            <button
              @click="propertyFilterModal = true"
              class="flex items-center gap-x-2 px-4 py-2 text-sm bg-white border-[0.5px] border-gray-300 rounded-md text-[#1D2739]"
            >
              Filter
              <img :src="dynamicIcons('gray-filter')" />
            </button>
            <div class="relative w-full">
              <input
                v-model="filters.searchQuery"
                placeholder="Search properties..."
                type="text"
                class="px-4 text-sm py-3 w-full outline-none pl-10 border-[0.5px] border-gray-300 text-[#667185] rounded-md"
              />
              <img
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
                :src="dynamicIcons('gray-search')"
              />
            </div>
          </div>
          <div class="flex justify-end items-end space-x-4 lg:w-1/3">
            <button
            @click="showModal = true"
              class="px-4 py-3 bg-white flex items-center gap-x-3 text-[#292929] border-[0.5px] text-sm border-gray-300 rounded-md"
            >
              <img :src="dynamicIcons('gray-settings')" />
              Configure table
            </button>
            <section class="relative">
              <button
                @click="toggleDownloadDropdown"
                class="px-4 py-3 bg-white border-[0.5px] text-sm flex items-center gap-x-3 border-gray-300 rounded-md text-gray-70"
              >
                <img :src="dynamicIcons('gray-download')" />
                Export
              </button>
              <div
                v-if="downloadDropdown"
                class="absolute right-4 z-50 mt-2 bg-white border border-gray-200 w-44 rounded-lg shadow-lg"
              >
                <ul
                  class="py-1 text-sm text-gray-700 divide-gray-100 divide-y-[0.5px]"
                >
                  <li>
                    <a
                      @click="handleExport('pdf')"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                    >
                      <img :src="dynamicIcons('gray-pdf')" />
                      PDF</a
                    >
                  </li>
                  <li>
                    <a
                      @click="handleExport('excel')"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                    >
                      <img :src="dynamicIcons('gray-excel')" />
                      Excel/Spreadsheet</a
                    >
                  </li>
                  <li>
                    <a
                      @click="handleExport('csv')"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                    >
                      <img :src="dynamicIcons('gray-csv')" />
                      CSV</a
                    >
                  </li>
                </ul>
              </div>
            </section>
            <button
              @click="router.push('/dashboard/property/create-steps')"
              class="px-4 py-3 flex text-sm items-center gap-x-3 bg-[#292929] text-white rounded-md hover:bg-gray-800"
            >
              <img :src="dynamicIcons('white-add')" /> New Property
            </button>
          </div>
        </div>
      </div>
    </section> -->
    <section class="px-4 sm:px-6 lg:px-8">
      <div class="">
        <div class="lg:flex justify-between items-center mb-6 space-y-4 lg:space-y-0 w-full">
          <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full lg:w-2/3">
            <button
              @click="propertyFilterModal = true"
              class="flex items-center gap-x-2 px-4 py-2 text-sm bg-white border-[0.5px] border-gray-300 rounded-md text-[#1D2739] w-full sm:w-auto"
            >
              Filter
              <img :src="dynamicIcons('gray-filter')" />
            </button>
            <div class="relative w-full">
              <input
                v-model="filters.searchQuery"
                placeholder="Search properties..."
                type="text"
                class="px-4 text-sm py-3 w-full outline-none pl-10 border-[0.5px] border-gray-300 text-[#667185] rounded-md"
              />
              <img
                class="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                :src="dynamicIcons('gray-search')"
              />
            </div>
          </div>
          <div class="flex flex-col sm:flex-row justify-end items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 lg:w-1/3">
            <button
              @click="showModal = true"
              class="px-4 py-3 bg-white flex items-center gap-x-3 text-[#292929] border-[0.5px] text-sm border-gray-300 rounded-md w-full sm:w-auto"
            >
              <img :src="dynamicIcons('gray-settings')" />
              Configure table
            </button>
            <section class="relative w-full sm:w-auto">
              <button
                @click="toggleDownloadDropdown"
                class="px-4 py-3 bg-white border-[0.5px] text-sm flex items-center gap-x-3 border-gray-300 rounded-md text-gray-70 w-full sm:w-auto"
              >
                <img :src="dynamicIcons('gray-download')" />
                Export
              </button>
              <div
                v-if="downloadDropdown"
                class="absolute right-0 sm:right-4 z-50 mt-2 bg-white border border-gray-200 w-44 rounded-lg shadow-lg"
              >
                <ul class="py-1 text-sm text-gray-700 divide-gray-100 divide-y-[0.5px]">
                  <li>
                    <a
                      @click="handleExport('pdf')"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                    >
                      <img :src="dynamicIcons('gray-pdf')" />
                      PDF
                    </a>
                  </li>
                  <li>
                    <a
                      @click="handleExport('excel')"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                    >
                      <img :src="dynamicIcons('gray-excel')" />
                      Excel/Spreadsheet
                    </a>
                  </li>
                  <li>
                    <a
                      @click="handleExport('csv')"
                      href="#"
                      class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                    >
                      <img :src="dynamicIcons('gray-csv')" />
                      CSV
                    </a>
                  </li>
                </ul>
              </div>
            </section>
            <button
              @click="router.push('/dashboard/property/create-steps')"
              class="px-4 py-3 flex text-sm items-center gap-x-3 bg-[#292929] text-white rounded-md hover:bg-gray-800 w-full sm:w-auto"
            >
              <img :src="dynamicIcons('white-add')" /> New Property
            </button>
          </div>
        </div>
      </div>
    </section>
    

    <div>
      <div
        v-if="propertiesList && !loadingProperties"
        class="bg-white rounded-lg overflow-hidden overflow-x-auto"
      >
        <table class="min-w-full bg-white">
          <thead class="border-b-[0.5px] border-gray-50 sticky top-0">
            <tr>
              <th
                v-for="column in visibleColumns"
                :key="column.key"
                class="py-5 px-5 text-left text-sm font-medium text-gray-500 tracking-wider"
              >
                {{ column.label }}
              </th>
              <th
              class="py-5 px-5 text-right text-sm font-medium text-gray-500 tracking-wider"
            >
              Action
            </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-50">
            <tr
             class="cursor-pointer"
              v-for="(property, index) in propertiesList"
              :key="property.id"
            >
              <td
                v-for="column in visibleColumns"
                :key="column.key"
                class="py-5 px-5 whitespace-nowrap text-sm text-[#667185] font-semibold relative"
              >
                {{ getPropertyValue(property, column.key) }}
              </td>
              <td class="py-5 px-5 whitespace-nowrap text-sm text-right">
                <button
                  @click="toggleDropdown(index)"
                  class="inline-flex items-center text-sm font-medium text-[#667185] hover:text-black"
                >
                  <svg
                    width="48"
                    height="44"
                    viewBox="0 0 48 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.9966 22H22.0041"
                      stroke="#292929"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M27 22H27.0075"
                      stroke="#1D2739"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 22H17.0075"
                      stroke="#1D2739"
                      stroke-width="2.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <div
                  v-if="activeDropdown === index"
                  class="absolute right-16 z-50 mt-2 w- bg-white border border-gray-200 rounded-md shadow-lg"
                >
                  <ul
                    class="py-1 text-sm text-gray-700 divide divide-y-[0.5px]"
                  >
                    <li>
                      <a
                        @click.prevent="handleDropdownClick('view', property)"
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                      >
                        <img :src="dynamicIcons('view-property')" />
                        View property</a
                      >
                    </li>
                    <li>
                      <a
                        @click.prevent="handleDropdownClick('edit', property)"
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                      >
                        <img :src="dynamicIcons('edit-property')" />
                        Edit property</a
                      >
                    </li>
                    <li>
                      <a
                        @click.prevent="
                          handleDropdownClick('duplicate', property)
                        "
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                      >
                        <img :src="dynamicIcons('duplicate-property')" />
                        Duplicate property & edit</a
                      >
                    </li>
                    <li>
                      <a
                        @click.prevent="
                          handleDropdownClick('deactivate', property)
                        "
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                      >
                        <img :src="dynamicIcons('deactivate-property')" />
                        Deactivate property</a
                      >
                    </li>
                    <li>
                      <a
                        @click.prevent="handleDropdownClick('delete', property)"
                        href="#"
                        class="block flex items-center gap-x-2 px-4 py-3 hover:bg-gray-100 text-start"
                      >
                        <img :src="dynamicIcons('delete-property')" />
                        Delete property</a
                      >
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div
          v-if="activeDropdown !== null"
          @click="closeDropdown"
          class="fixed inset-0 z-40 bg-black opacity-25"
        ></div>
        <div
          v-if="downloadDropdown"
          @click="downloadDropdown = false"
          class="fixed inset-0 z-40 bg-black opacity-25"
        ></div>
        <CorePagination
          :total="metadata.total"
          :page="metadata.page"
          :perPage="metadata.perPage"
          :pages="metadata.pages"
          @page-changed="handlePageChange"
        />
      </div>
      <div
        v-if="loadingProperties && propertiesList.length === 0"
        class="h-32 bg-slate-200 rounded animate-pulse w-full m-3"
      ></div>
      <div
        v-if="!loadingProperties && propertiesList.length === 0"
        class="flex justify-center items-center flex-col"
      >
        <div class="flex justify-center items-center">
          <svg
            width="153"
            height="124"
            viewBox="0 0 153 124"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="76.5" cy="58" r="52" fill="#EAEAEA" />
            <circle cx="21.5" cy="25" r="5" fill="#BDBDBD" />
            <circle cx="18.5" cy="109" r="7" fill="#BDBDBD" />
            <circle cx="145.5" cy="41" r="7" fill="#BDBDBD" />
            <circle cx="134.5" cy="14" r="4" fill="#BDBDBD" />
            <g filter="url(#filter0_b_5289_71375)">
              <rect
                x="52.5"
                y="34"
                width="48"
                height="48"
                rx="24"
                fill="#9D9D9D"
              />
              <path
                d="M66.8514 59.2135C66.4984 56.9162 66.3219 55.7676 66.7562 54.7494C67.1905 53.7311 68.154 53.0344 70.0811 51.6411L71.521 50.6C73.9183 48.8667 75.1169 48 76.5 48C77.8831 48 79.0817 48.8667 81.479 50.6L82.9189 51.6411C84.846 53.0344 85.8095 53.7311 86.2438 54.7494C86.6781 55.7676 86.5016 56.9162 86.1486 59.2135L85.8476 61.1724C85.3471 64.4289 85.0969 66.0572 83.929 67.0286C82.7611 68 81.0537 68 77.6388 68H75.3612C71.9463 68 70.2389 68 69.071 67.0286C67.9031 66.0572 67.6529 64.4289 67.1524 61.1724L66.8514 59.2135Z"
                stroke="white"
                stroke-width="2"
                stroke-linejoin="round"
              />
              <path
                d="M74.5 64H78.5"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_5289_71375"
                x="44.5"
                y="26"
                width="64"
                height="64"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="4" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_5289_71375"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_5289_71375"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <p class="text-[#1D2739]">No properties found.</p>
      </div>
    </div>

    <PropertyConfigTableModal
      v-if="propertyConfigModal"
      @close="propertyConfigModal = false"
    />
    <PropertyFilterModal
      v-if="propertyFilterModal"
      @close="propertyFilterModal = false"
      @applyFilters="handleApplyFilters"
    />

    <CoreModal :showCloseBtn="false" title="Configure Table" :isOpen="showModal" @close="showModal = false">
      <div>
        <div
          v-for="(column, index) in columns"
          :key="index"
          class="flex items-center mb-2"
        >
          <span class="flex-1 text-sm text-[#1D2739]">{{ column.label }}</span>
          <label :for="column.label" class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
            <span class="relative">
              <input :id="column.label" type="checkbox" v-model="column.visible" class="hidden peer toggle">
              <div class="w-10 h-6 rounded-full shadow-inner dark:bg-[#F0F2F5] peer-checked:dark:bg-[#099137]"></div>
              <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-[#FFFFFF]"></div>
            </span>
          </label>
        </div>
        <div class="flex justify-between mt-10 gap-x-6">
          <button
            @click="resetColumns"
            class="bg-[#EBE5E0] w-full font-medium text-[#292929] text-sm px-4 py-2.5 rounded-lg"
          >
            Reset
          </button>
          <button
            @click="saveColumns"
            class="bg-[#292929] text-sm font-medium w-full text-white px-4 py-2.5 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </CoreModal>
  </main>
</template>

<script lang="ts" setup>
import { useGetProperties } from "@/composables/modules/property/fetchProperties";
import { dynamicIcons } from "@/utils/assets";
import { exportData } from "@/composables/core/exportData";
import { useRouter, useRoute } from "vue-router";
const route = useRoute();
const router = useRouter();
const testConfigModal = ref(true);

const deleteModal = ref(false);
const onCancel = () => {
  deleteModal.value = false;
};

const onConfirm = () => {
  deleteModal.value = false;
};

const {
  loadingProperties,
  propertiesList,
  searchQuery,
  filters,
  metadata,
  getProperties,
  applyFilters,
} = useGetProperties();

const handlePageChange = (val: any) => {
  metadata.value.page = val || 1;
  getProperties(); // Explicitly call the method to fetch new data
};

const downloadDropdown = ref(false);

const toggleDownloadDropdown = () => {
  downloadDropdown.value = !downloadDropdown.value;
};

const activeTab = ref("property") as any; // Default to step 1

// Set the active tab based on the query parameter
onMounted(() => {
  if (route.query.activeTab) {
    activeTab.value = route.query.activeTab;
  }
});

const propertyConfigModal = ref(false);
const propertyFilterModal = ref(false);

const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

// State to manage which dropdown is active
const activeDropdown = ref<number | null>(null);

// Function to toggle the dropdown visibility
const toggleDropdown = (index: number) => {
  if (activeDropdown.value === index) {
    activeDropdown.value = null;
  } else {
    activeDropdown.value = index;
  }
};

// Function to close the dropdown
const closeDropdown = () => {
  activeDropdown.value = null;
};

const emit = defineEmits(["delete", "deactivate", "duplicate"]);

// Function to handle dropdown option click
const handleDropdownClick = (action: any, item: any) => {
  if (action === "view") {
    return router.push(`/dashboard/property/${item.id}`);
  }

  if (action === "edit") {
    return router.push(`/dashboard/property/${item.id}/edit`);
  }
  closeDropdown();
  emit(action, item);
};

const handleExport = (type: string) => {
  if (type === "csv") {
    exportData(propertiesList.value, "csv", "property-listings");
  }

  if (type === "pdf") {
    exportData(propertiesList.value, "pdf", "property-listings");
  }

  if (type === "excel") {
    exportData(propertiesList.value, "excel", "property-listings");
  }
  downloadDropdown.value = false;
};

const openFilterModal = () => {
  propertyFilterModal.value = true;
};

const handleApplyFilters = (filters: any) => {
  applyFilters(filters);
};

const showModal = ref(false);

// Columns data
const columns = ref([
  { label: "Property Name", key: "name", visible: true },
  { label: "Property Type", key: "houseType.name", visible: true },
  { label: "Location", key: "address", visible: true },
  { label: "Rooms Occupied", key: "availableRoomsCount", visible: false },
  { label: "Rooms Count", key: "bedroomCount", visible: true },
  { label: "Bathroom Count", key: "bathroomCount", visible: false },
  { label: "Agents/Property Managers", key: "agent.firstName", visible: false },
]);

// Computed property to get only visible columns
const visibleColumns = computed(() => {
  return columns.value.filter((column) => column.visible);
});

// Function to extract nested properties
const getPropertyValue = (property: any, key: string) => {
  return key.split(".").reduce((obj, k) => obj && obj[k], property) || "N/A";
};

// Function to reset columns visibility
const resetColumns = () => {
  columns.value.forEach((column) => {
    column.visible = true; // Reset all to visible
  });
  showModal.value = false;
};

// Function to save the changes and close modal
const saveColumns = () => {
  showModal.value = false;
};
</script>

<style scoped>
/* Custom styles */
.toggle {
  --tw-translate-x: -100%;
  appearance: none;
  background-color: #ccc;
  width: 3rem;
  height: 1.5rem;
  border-radius: 9999px;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.toggle::before {
  content: '';
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  width: 1.25rem;
  height: 1.25rem;
  background-color: white;
  border-radius: 9999px;
  transition: transform 0.3s ease;
}

.toggle:checked {
  background-color: #48bb78;
}

.toggle:checked::before {
  transform: translateX(1.5rem);
}
</style>
