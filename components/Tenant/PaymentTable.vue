<template>
    <div class="bg-white rounded-lg">
      <table class="min-w-full">
        <thead class="border-b border-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Invoice ID</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Invoice form</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Amount</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Date</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Status</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-100">
          <tr v-for="invoice in invoices" :key="invoice.id">
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ invoice.id }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ invoice.form }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ invoice.amount }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ invoice.date }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ invoice.status }}</td>
            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
              <button class="p-2 rounded-full">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.332 2.22586C10.3514 1.65863 9.21296 1.33398 7.9987 1.33398C4.3168 1.33398 1.33203 4.31875 1.33203 8.00065C1.33203 11.6825 4.3168 14.6673 7.9987 14.6673C11.6806 14.6673 14.6654 11.6825 14.6654 8.00065C14.6654 7.54405 14.6194 7.09812 14.532 6.66732" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round"/>
                    <path d="M5.33203 8.33398C5.33203 8.33398 6.33203 8.33398 7.66536 10.6673C7.66536 10.6673 11.3712 4.5562 14.6654 3.33398" stroke="#1D2739" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts" setup>
  const invoices = [
    { id: '#1075 478', form: 'Gary Schimmel', amount: '116,120.52', date: '22/03/2024', status: 'Pending' },
    { id: '#1075 478', form: 'Jay Witting', amount: '116,120.52', date: '22/03/2024', status: 'Pending' },
    { id: '#1075 478', form: 'Jennie Boyer', amount: '116,120.52', date: '22/03/2024', status: 'Pending' },
  ];
  </script>
  