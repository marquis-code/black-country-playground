<template>
    <div class="p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 class="mb-4 text-xl font-semibold">Profile Information</h2>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-semibold">Full Name</label>
        <input type="text" placeholder="Enter your name" class="w-full px-3 py-2 border rounded-md">
      </div>
      <div class="mb-4">
        <label class="block mb-2 text-sm font-semibold">Email Address</label>
        <input type="email" placeholder="ad@gmail.com" class="w-full px-3 py-2 border rounded-md" readonly>
      </div>
      <div class="flex justify-end">
        <button class="px-4 py-2 mr-2 text-sm font-semibold text-gray-500 border rounded-md">Cancel</button>
        <button class="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-md">Save</button>
      </div>
    </div>
  </template>
  