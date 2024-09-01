<template>
    <!-- Modal Backdrop and Modal -->
    <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" @click.self="closeModal">
      <div class="bg-white rounded-lg shadow-lg w-[600px] max-w-7xl">
        <h2 class="text-lg font-semibold text-gray-800 mb-6 pl-6 pt-6">Invite member(s)</h2>
        
       <div class="px-6">
         <!-- Dynamic Email and Role Inputs -->
         <div v-for="(member, index) in members" :key="index" class="mb-4 flex space-x-2">
            <div class="flex-1">
              <label class="block text-[#1D2739] font-medium mb-1 text-sm">Email</label>
              <input type="email" v-model="member.email" placeholder="Enter email address" class="w-full px-4 py-3 bg-[#F0F2F5] outline-none border-[0.5px] text-sm border-gray-100 rounded-md">
            </div>
            <div class="flex-1">
              <label class="block text-[#1D2739] font-medium mb-1 text-sm">Role</label>
              <select v-model="member.role" class="w-full px-4 py-3 bg-[#F0F2F5] outline-none border-[0.5px] text-sm border-gray-100 rounded-md">
                <option value="" disabled>Select a role</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Agent">Agent</option>
                <!-- Add other roles here -->
              </select>
            </div>
          </div>
          
          <!-- Add Member Button -->
          <div class="mb-6">
            <button @click="addMember" class="text-[#171717] bg-[#F9FAFB] font-medium flex text-sm py-3 px-3 rounded-lg items-center gap-x-3">
              <img :src="dynamicIcons('gray-add')" alt="Icon" />
              Add member</button>
          </div>
       </div>
        
        <!-- Action Buttons -->
        <div class="border-t border-gray-100 py-4">
         <div class="px-6 flex justify-between items-center space-x-4">
            <button @click="closeModal" class="px-4 py-3.5 font-semibold w-full border-[0.5px] text-sm bg-white text-[#292929] rounded-md">Cancel</button>
            <button @click="sendInvite" class="px-4 py-3.5 font-semibold w-full text-sm bg-[#292929] text-white rounded-md">Send invite</button>
         </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script lang="ts" setup>
      import { dynamicIcons } from '@/utils/assets'; 
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';

// Props for controlling the modal's visibility
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});

// Emit event to close the modal
const emit = defineEmits(['close']);

// Close modal function
const closeModal = () => {
  emit('close');
};

// Array to store added members
const members = ref<{ email: string; role: string }[]>([
  { email: '', role: '' },
]);

// Function to add a new row for a member
const addMember = () => {
  members.value.push({ email: '', role: '' });
};

// Function to send the invite (API call)
const sendInvite = async () => {
  // Filter out any incomplete rows (where email or role is empty)
  const validMembers = members.value.filter(member => member.email && member.role);
  
  if (validMembers.length > 0) {
    try {
      // Replace with your API endpoint
      const response = await fetch('/api/invite', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ members: validMembers }),
      });

      if (response.ok) {
        // Handle success (e.g., show a success message)
        console.log('Invite sent successfully');
        closeModal(); // Close the modal after successful submission
      } else {
        // Handle error (e.g., show an error message)
        console.error('Failed to send invite');
      }
    } catch (error) {
      console.error('Error sending invite:', error);
    }
  }
};
</script>
