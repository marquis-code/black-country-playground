<template>
    <div class="mb-6 p-6 lg:p-0">
        <h2 class="text- font-medium">Similar Properties</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <div v-for="property in similarProperties" :key="property.id" class="bg-white rounded-lg overflow-hidden">
            <img :src="dynamicImage(property.image)" alt="Property Image" class="w-full rounded-lg h-64 object-cover" />
            <div class="py-4 space-y-2">
              <h3 class="text- font-medium text-[#1D2739]">{{ property.name }}</h3>
              <p class="text-[#79797F] text-xs flex">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.94366 12.4644C7.69072 12.7012 7.35257 12.8337 7.00064 12.8337C6.64872 12.8337 6.31062 12.7012 6.05762 12.4644C3.74093 10.2822 0.636277 7.84435 2.15032 4.30513C2.96895 2.3915 4.93403 1.16699 7.00064 1.16699C9.06727 1.16699 11.0323 2.3915 11.851 4.30513C13.3631 7.83992 10.2661 10.2897 7.94366 12.4644Z"
                    fill="#5B8469"
                    stroke="#5B8469"
                  />
                  <path
                    d="M9.04165 6.41667C9.04165 7.54425 8.12756 8.45833 6.99998 8.45833C5.8724 8.45833 4.95831 7.54425 4.95831 6.41667C4.95831 5.28908 5.8724 4.375 6.99998 4.375C8.12756 4.375 9.04165 5.28908 9.04165 6.41667Z"
                    fill="#EAEAEA"
                    stroke="#5B8469"
                  />
                </svg>

                {{ property.address }}
              </p>
              <p class="text-[#1D2739] font-medium text-xs">{{ property.price }}</p>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { dynamicImage } from "@/utils/assets";
const similarProperties = ref([
  {
    id: 1,
    image: "property1.png",
    name: "Jason Co-living Space",
    address: "Iconic Tower, off Ajose Adegun VI, Lagos.",
    price: "5 bedrooms | 6 baths | 5254 sqft",
  },
  {
    id: 2,
    image: "property2.png",
    name: "Jason Co-living Space",
    address: "Iconic Tower, off Ajose Adegun VI, Lagos.",
    price: "5 bedrooms | 6 baths | 5254 sqft",
  },
  {
    id: 3,
    image: "property1.png",
    name: "Jason Co-living Space",
    address: "Iconic Tower, off Ajose Adegun VI, Lagos.",
    price: "5 bedrooms | 6 baths | 5254 sqft",
  },
  {
    id: 4,
    image: "property2.png",
    name: "Jason Co-living Space",
    address: "Iconic Tower, off Ajose Adegun VI, Lagos.",
    price: "5 bedrooms | 6 baths | 5254 sqft",
  },
]);
</script>