<template>
  <main class="space-y-6">
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div class="rounded-lg space-y-4">
        <CardsUserStats />
        <CardsDownloadStats />
      </div>
      <div class="rounded-lg">
        <ChartsSignup />
      </div>
    </div>

    <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
      <div class="rounded-lg">
        <ChartsRevenue />
      </div>
      <div class="rounded-lg">
        <ChartsOccupancyRate />
      </div>
    </div>

    <section class="max-w mx-auto w-full grid grid-cols-4 gap-6 mt-10">
      <FiltersDropdown
        :options="['Today', 'This Week', 'This Month', 'This Year']"
        v-model="selectedTimeFrame"
      />
      <FiltersDropdown
        :options="['All Agents', 'This Week', 'This Month', 'This Year']"
        v-model="selectedAgents"
      />
      <FiltersDropdown
        :options="[
          'All Property managers',
          'This Week',
          'This Month',
          'This Year',
        ]"
        v-model="selectedManagers"
      />
      <FiltersDropdown
        :options="['All properties', 'This Week', 'This Month', 'This Year']"
        v-model="selectedProperties"
      />
    </section>

    <div
      class="px-4 sm:px-6 lg:px-8 border bg-white rounded-lg border-gray-50 mt-3"
    >
      <div class="-mx-4 mt-8 sm:-mx-0">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th
                scope="col"
                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
              >
                Property name
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Property Manager/Agent
              </th>
              <th
                scope="col"
                class="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Searches
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Favorites
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Application
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Approved
              </th>
              <th
                scope="col"
                class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
              >
                Rejected
              </th>
              <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                <span class="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(item, idx) in tableData" :key="idx">
              <td
                class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
              >
                {{ item.property_name }}
              </td>
              <td
                class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell"
              >
                {{ item.property_manager }}
              </td>
              <td
                class="hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 lg:table-cell"
              >
                {{ item.searches }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ item.favorites }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ item.applications }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ item.approved }}
              </td>
              <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                {{ item.rejected }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<script lang="ts" setup>
const selectedTimeFrame = ref("Today");
const selectedAgents = ref('All Agents')
const selectedManagers = ref('All Property managers')
const selectedProperties = ref('All properties')
definePageMeta({
  layout: "dashboard",
});

const tableData = ref([
  {
    property_name: "Gerlach Inc",
    property_manager: "Kellie Gleason",
    searches: 1,
    favorites: 0,
    applications: 0,
    approved: 0,
    rejected: 0,
  },
  {
    property_name: "Gerlach Inc",
    property_manager: "Kellie Gleason",
    searches: 1,
    favorites: 0,
    applications: 0,
    approved: 0,
    rejected: 0,
  },
  {
    property_name: "Gerlach Inc",
    property_manager: "Kellie Gleason",
    searches: 1,
    favorites: 0,
    applications: 0,
    approved: 0,
    rejected: 0,
  },
  {
    property_name: "Gerlach Inc",
    property_manager: "Kellie Gleason",
    searches: 1,
    favorites: 0,
    applications: 0,
    approved: 0,
    rejected: 0,
  },
]);
</script>
