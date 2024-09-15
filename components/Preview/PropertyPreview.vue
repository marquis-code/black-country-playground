<template>
    <div class="bg-white p-6 rounded-lg shadow border-[0.5px] space-y-10">
      <!-- Section: Basic Property Information -->
      <div>
        <h2 class="text-xl font-semibold">Review property details and proceed to publish to the public</h2>
        <div class="mt-4">
          <h3 class="text font-medium text-[#1D2739]">Basic property information</h3>
          <div class="mt-2">
            <PreviewPropertyDetails :property="property" />
          </div>
        </div>
      </div>
  
      <!-- Section: Detailed Property Information -->
      <div>
        <h3 class="text font-medium text-[#1D2739]">Detailed property information</h3>
        <div class="mt-2">
          <PreviewDetailedInformation :details="details" />
        </div>
      </div>

         <!-- Section: Room Details -->
    <div>
        <div class="mt-2">
          <PreviewRoomDetails :rooms="rooms" />
        </div>
      </div>
  
  
      <!-- Section: Add Visuals -->
      <div>
        <div class="flex justify-between items-center">
        <h3 class="text-lg text-[#1D2739]">Add visuals</h3>
        <button class="text-[#326543] font-medium mb-3">Edit</button>
       </div>
        <div class="mt-2">
          <PreviewPropertyVisuals :visuals="visuals" />
        </div>
      </div>
  
      <!-- Section: Finalize Listings and Edit -->
      <div class="space-y-3">
      <div class="flex justify-between items-center">
        <h3 class="text font-medium text-[#1D2739]">Finalize listings and edit</h3>
        <button class="text-[#326543] mb-3">Edit</button>
      </div>
        <div class="mt-2">
          <PreviewFinalizeListing :rules="rules" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">  
  import { dynamicImage } from '@/utils/assets'
  // Example data to be replaced with actual data or API call
  const property = {
    name: 'Cursus tincidunt eu non morbi. Erat egestas id neque',
    description: 'Lorem ipsum dolor sit amet consectetur...',
    type: 'Apartment',
    floor: 'Tiles',
    size: '287468 sqm',
    bedrooms: 5,
    bathrooms: 6,
    location: 'Cursus tincidunt eu non morbi...',
  }
  
  const details = {
    isFurnished: true,
    interiorAmenities: ['Living room', 'Kitchen', 'Air conditioning'],
    exteriorAmenities: ['Parking space/garage', 'Balcony'],
    rooms: [
      { name: 'Room 1', isFurnished: true, interiorItems: ['Bedframe', 'Mattress'] },
      // Add more rooms if needed
    ],
  }
  
  const visuals = {
  commonArea: [
    { type: 'Living room', images: 3, imageUrl: dynamicImage('room-placeholder.png') },
    { type: 'Dining room', images: 2, imageUrl: dynamicImage('room-placeholder.png') },
    { type: 'Laundry area', images: 3, imageUrl: dynamicImage('room-placeholder.png') },
    { type: 'Kitchen', images: 3, imageUrl: dynamicImage('room-placeholder.png') },
  ],
  rooms: [
    { name: 'Room 1', visuals: [{ type: 'Laundry area', images: 3, imageUrl: dynamicImage('room-placeholder.png') }] },
    { name: 'Room 2', visuals: [{ type: 'Dining room', images: 2, imageUrl: dynamicImage('room-placeholder.png') }] },
    // Add more room visuals if needed
  ]
}
  const rules = {
    smokingAllowed: false,
    petsAllowed: true,
    preScreeningQuestions: [
      'Do you have any pets? If yes, please specify the type and breed.',
      'Can you provide references from previous landlords?',
    ],
  }


  // Example data to be replaced with actual data or API call
const rooms = [
  {
    name: 'Room 1',
    isFurnished: true,
    interiorItems: [
      'Bedframe', 'Mattress', 'Desk & chair', 'Shelves/bookcases', 
      'Wardrobes/closet', 'Bathroom/Restroom', 'Window coverings', 
      'Air conditioning', 'Ceiling/standing fan', 'Water heating'
    ],
    availability: 'Available Now',
    price: '150,000 per month',
    roomType: 'Masters bedroom'
  },
  {
    name: 'Room 2',
    isFurnished: true,
    interiorItems: [
      'Bedframe', 'Mattress', 'Desk & chair', 'Shelves/bookcases', 
      'Wardrobes/closet', 'Bathroom/Restroom', 'Window coverings', 
      'Air conditioning', 'Ceiling/standing fan', 'Water heating'
    ],
    availability: 'Available Now',
    price: '150,000 per month',
    roomType: 'Masters bedroom'
  },
  {
    name: 'Room 3',
    isFurnished: true,
    interiorItems: [
      'Bedframe', 'Mattress', 'Desk & chair', 'Shelves/bookcases', 
      'Wardrobes/closet', 'Bathroom/Restroom', 'Window coverings', 
      'Air conditioning', 'Ceiling/standing fan', 'Water heating'
    ],
    availability: 'Available Now',
    price: '150,000 per month',
    roomType: 'Masters bedroom'
  },
  {
    name: 'Room 4',
    isFurnished: true,
    interiorItems: [
      'Bedframe', 'Mattress', 'Desk & chair', 'Shelves/bookcases', 
      'Wardrobes/closet', 'Bathroom/Restroom', 'Window coverings', 
      'Air conditioning', 'Ceiling/standing fan', 'Water heating'
    ],
    availability: 'Available Now',
    price: '150,000 per month',
    roomType: 'Masters bedroom'
  },
  {
    name: 'Room 5',
    isFurnished: true,
    interiorItems: [
      'Bedframe', 'Mattress', 'Desk & chair', 'Shelves/bookcases', 
      'Wardrobes/closet', 'Bathroom/Restroom', 'Window coverings', 
      'Air conditioning', 'Ceiling/standing fan', 'Water heating'
    ],
    availability: 'Available Now',
    price: '150,000 per month',
    roomType: 'Masters bedroom'
  },
  // Add more rooms if needed
]
  </script>
  
  <style scoped>
  /* Custom styles if needed */
  </style>
  