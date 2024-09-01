<template>
    <form class="space-y-4">
        <div class="space-y-1">
          <label class="block font-medium text-[#1D2739] text-sm">Property name</label>
          <input
            type="text"
            class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
            placeholder="Enter full name"
          />
        </div>
        <div class="space-y-1">
          <label class="block font-medium text-[#1D2739] text-sm"
            >Brief description</label
          >
          <textarea
            rows="6"
            cols="6"
            class="w-full px-4 py-2 resize-none border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
            placeholder="Enter your reason for moving out"
          ></textarea>
        </div>
        <div class="space-y-1">
          <label class="block font-medium text-[#1D2739] text-sm"
            >Building/property type</label
          >
          <input
            type="text"
            class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
            placeholder="Enter your phone number"
          />
        </div>
        <div class="space-y-1">
          <label class="block font-medium text-[#1D2739] text-sm">Flooring type</label>
          <input
            type="text"
            class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
            placeholder="Enter your phone number"
          />
        </div>
        <div class="space-y-1">
          <label class="block font-medium text-[#1D2739] text-sm">Property size</label>
          <input
            type="text"
            class="w-full px-4 py-3.5 border-[0.5px] text-sm bg-[#F0F2F5] rounded-lg outline-none"
            placeholder="sqm e.g 1000"
          />
        </div>
        <div class="flex justify-between items-center">
          <label class="block font-medium text-[#1D2739] text-sm">Floor number</label>
          <div class="flex items-center space-x-2">
            <button
              type="button"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              -
            </button>
            <input
              type="text"
              class="text-center bg-[#292929] text-white w-12 px-4 py-2 border rounded-lg"
              value="0"
            />
            <button
              type="button"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <label class="block font-medium text-[#1D2739]">Number of bedrooms</label>
          <div class="flex items-center space-x-2">
            <button
              type="button"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              -
            </button>
            <input
              type="text"
              class="text-center bg-[#292929] text-white w-12 px-4 py-2 border rounded-lg"
              value="0"
            />
            <button
              type="button"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <label class="block font-medium text-[#1D2739]"
            >Number of bathrooms/Restrooms</label
          >
          <div class="flex items-center space-x-2">
            <button
              type="button"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              -
            </button>
            <input
              type="text"
              class="text-center bg-[#292929] text-white w-12 px-4 py-2 border rounded-lg"
              value="0"
            />
            <button
              type="button"
              class="bg-[#F9FAFB] text-gray-600 px-4 py-2 rounded-lg"
            >
              +
            </button>
          </div>
        </div>

      <slot name="action-buttons" />
      </form>
</template>
