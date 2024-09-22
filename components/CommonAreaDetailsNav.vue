<template>
    <main>
     <nav class="bg-[#292929] text-white py-3 w-full">
       <div class="container mx-auto flex justify-between items-center px-4">
         <NuxtLink to="/dashboard" class="flex cursor-pointer items-center gap-x-3">
           <!-- Logo -->
           <div class="flex items-center space-x-2">
             <img src="@/assets/icons/logo-with-text.svg" alt="logo" class=" object-contain" />
           </div>
         </NuxtLink>
   
         <!-- Hamburger Menu for mobile -->
         <div class="block lg:hidden">
           <button @click="isOpen = true" class="p-2">
             <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
             </svg>
           </button>
         </div>
   
         <!-- Navigation Links and Profile - Hidden on mobile -->
         <div class="hidden lg:flex items-center pl-4 justify-between w-full">
           <div class="flex items-center space-x-6">
             <!-- Links -->
             <div class="flex space-x-6">
               <NuxtLink  :class="[route.path === '/dashboard' ? 'bg-[#1D1D1D]' : '' ]" to="/dashboard" class="flex items-center space-x-1 text-gray-300 px-3 rounded-md hover:text-white ">
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M2.08331 9.99967C2.08331 6.26772 2.08331 4.40175 3.24268 3.24237C4.40205 2.08301 6.26803 2.08301 9.99998 2.08301C13.7319 2.08301 15.5979 2.08301 16.7573 3.24237C17.9166 4.40175 17.9166 6.26772 17.9166 9.99967C17.9166 13.7316 17.9166 15.5976 16.7573 16.757C15.5979 17.9163 13.7319 17.9163 9.99998 17.9163C6.26803 17.9163 4.40205 17.9163 3.24268 16.757C2.08331 15.5976 2.08331 13.7316 2.08331 9.99967Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                   <path d="M5 7.50033H7.91667M14.1667 7.50033H15M10 6.66699V8.33366M12.0833 6.66699V8.33366" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                   <path d="M15 12.5003H10M5.83333 12.5003H5M7.91667 11.667V13.3337" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
                 <span class="text-sm">Dashboard</span>
               </NuxtLink>
               <NuxtLink :class="[route.path === '/dashboard/property' ? 'bg-[#1D1D1D]' : '' ]" to="/dashboard/property" class="flex items-center space-x-1 text-white px-3 py-3 rounded-md">
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1.66669 15.0003C1.66669 13.7167 1.66669 13.0747 1.95563 12.6032C2.1173 12.3394 2.33913 12.1176 2.60296 11.9559C3.07447 11.667 3.71632 11.667 5.00002 11.667C6.28372 11.667 6.92557 11.667 7.39708 11.9559C7.66091 12.1176 7.88274 12.3394 8.04441 12.6032C8.33335 13.0747 8.33335 13.7167 8.33335 15.0003C8.33335 16.284 8.33335 16.9259 8.04441 17.3974C7.88274 17.6612 7.66091 17.8831 7.39708 18.0447C6.92557 18.3337 6.28372 18.3337 5.00002 18.3337C3.71632 18.3337 3.07447 18.3337 2.60296 18.0447C2.33913 17.8831 2.1173 17.6612 1.95563 17.3974C1.66669 16.9259 1.66669 16.284 1.66669 15.0003Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                   <path d="M11.6667 15.0003C11.6667 13.7167 11.6667 13.0747 11.9556 12.6032C12.1173 12.3394 12.3391 12.1176 12.6029 11.9559C13.0744 11.667 13.7164 11.667 15 11.667C16.2837 11.667 16.9256 11.667 17.3971 11.9559C17.6609 12.1176 17.8828 12.3394 18.0444 12.6032C18.3334 13.0747 18.3334 13.7167 18.3334 15.0003C18.3334 16.284 18.3334 16.9259 18.0444 17.3974C17.8828 17.6612 17.6609 17.8831 17.3971 18.0447C16.9256 18.3337 16.2837 18.3337 15 18.3337C13.7164 18.3337 13.0744 18.3337 12.6029 18.0447C12.3391 17.8831 12.1173 17.6612 11.9556 17.3974C11.6667 16.9259 11.6667 16.284 11.6667 15.0003Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                   <path d="M1.66669 5.00033C1.66669 3.71663 1.66669 3.07478 1.95563 2.60327C2.1173 2.33943 2.33913 2.11761 2.60296 1.95593C3.07447 1.66699 3.71632 1.66699 5.00002 1.66699C6.28372 1.66699 6.92557 1.66699 7.39708 1.95593C7.66091 2.11761 7.88274 2.33943 8.04441 2.60327C8.33335 3.07478 8.33335 3.71663 8.33335 5.00033C8.33335 6.28403 8.33335 6.92588 8.04441 7.39738C7.88274 7.66122 7.66091 7.88304 7.39708 8.04472C6.92557 8.33366 6.28372 8.33366 5.00002 8.33366C3.71632 8.33366 3.07447 8.33366 2.60296 8.04472C2.33913 7.88304 2.1173 7.66122 1.95563 7.39738C1.66669 6.92588 1.66669 6.28403 1.66669 5.00033Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                   <path d="M11.6667 5.00033C11.6667 3.71663 11.6667 3.07478 11.9556 2.60327C12.1173 2.33943 12.3391 2.11761 12.6029 1.95593C13.0744 1.66699 13.7164 1.66699 15 1.66699C16.2837 1.66699 16.9256 1.66699 17.3971 1.95593C17.6609 2.11761 17.8828 2.33943 18.0444 2.60327C18.3334 3.07478 18.3334 3.71663 18.3334 5.00033C18.3334 6.28403 18.3334 6.92588 18.0444 7.39738C17.8828 7.66122 17.6609 7.88304 17.3971 8.04472C16.9256 8.33366 16.2837 8.33366 15 8.33366C13.7164 8.33366 13.0744 8.33366 12.6029 8.04472C12.3391 7.88304 12.1173 7.66122 11.9556 7.39738C11.6667 6.92588 11.6667 6.28403 11.6667 5.00033Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                   </svg>
                 <span class="text-sm">Listings</span>
               </NuxtLink>
               <a href="#" class="flex items-center space-x-1 text-gray-300 hover:text-white">
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M1.95951 11.0113C1.66533 9.09692 1.51824 8.13977 1.88016 7.29123C2.24208 6.44268 3.04505 5.86211 4.65097 4.70096L5.85085 3.83341C7.8486 2.38897 8.84744 1.66675 10 1.66675C11.1526 1.66675 12.1514 2.38897 14.1492 3.83341L15.3491 4.70096C16.955 5.86211 17.7579 6.44268 18.1199 7.29123C18.4818 8.13977 18.3347 9.09692 18.0405 11.0113L17.7897 12.6437C17.3726 15.3575 17.1641 16.7144 16.1909 17.5239C15.2176 18.3334 13.7948 18.3334 10.949 18.3334H9.05102C6.2053 18.3334 4.78245 18.3334 3.80919 17.5239C2.83593 16.7144 2.62741 15.3575 2.21038 12.6437L1.95951 11.0113Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                   </svg>
                   
                 <span class="text-sm">My home</span>
               </a>
               <NuxtLink :class="[route.path === '/dashboard/messages' ? 'bg-[#1D1D1D]' : '' ]" to="/dashboard/messages" class="flex items-center space-x-1 text-gray-300 hover:text-white">
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M11.8089 17.4084C15.2947 17.1768 18.0714 14.3607 18.2999 10.8254C18.3445 10.1336 18.3445 9.41709 18.2999 8.72526C18.0714 5.18999 15.2947 2.37395 11.8089 2.14223C10.6196 2.06318 9.37802 2.06335 8.19118 2.14223C4.70534 2.37395 1.92869 5.18999 1.70022 8.72526C1.65551 9.41709 1.65551 10.1336 1.70022 10.8254C1.78343 12.113 2.35288 13.3052 3.02328 14.3118C3.41253 15.0166 3.15563 15.8962 2.75019 16.6645C2.45786 17.2185 2.31169 17.4955 2.42905 17.6956C2.54642 17.8957 2.80857 17.9021 3.33288 17.9148C4.36974 17.9401 5.06892 17.6461 5.62392 17.2368C5.93869 17.0048 6.09608 16.8887 6.20455 16.8753C6.31302 16.862 6.52649 16.9499 6.95336 17.1258C7.33702 17.2838 7.78248 17.3813 8.19118 17.4084C9.37802 17.4873 10.6196 17.4875 11.8089 17.4084Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                   <path d="M9.99606 10H10.0035M13.3256 10H13.3331M6.66644 10H6.67392" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                   </svg>
                 <span class="text-sm">Messages</span>
               </NuxtLink>
             </div>
           </div>
   
           <!-- Right Side: Icons and Profile -->
           <div class="flex items-center">
            <button
            @click="toggleView"
            type="button"
            class="flex cursor-pointer items-center space-x-1 bg-[#1D1D1D] px-3 py-3 rounded-md hover:bg-gray-700"
          >
            <svg
              v-if="listView"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.66663 4.16699H16.6666"
                stroke="#EBE5E0"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M3.33337 4.16699H3.34086"
                stroke="#FDFCFC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33337 10H3.34086"
                stroke="#FDFCFC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3.33337 15.833H3.34086"
                stroke="#FDFCFC"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66663 10H16.6666"
                stroke="#EBE5E0"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M6.66663 15.833H16.6666"
                stroke="#EBE5E0"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
    
            <svg
              v-else
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 10.0738V7.69615C18.3333 6.07615 18.3333 5.26615 17.8452 4.76287C17.357 4.2596 16.5713 4.2596 15 4.2596H13.2678C12.5033 4.2596 12.497 4.25811 11.8096 3.91332L9.03324 2.52084C7.87402 1.93945 7.29442 1.64875 6.67697 1.66895C6.05951 1.68915 5.49896 2.01715 4.37786 2.67316L3.35464 3.2719C2.53115 3.75375 2.1194 3.99469 1.89302 4.3955C1.66666 4.7963 1.66666 5.28441 1.66666 6.26061V13.1236C1.66666 14.4063 1.66666 15.0476 1.95187 15.4046C2.14166 15.642 2.40762 15.8018 2.70166 15.8547C3.14354 15.9342 3.68456 15.6177 4.76655 14.9844C5.50129 14.5546 6.20842 14.1081 7.08738 14.2292C7.8239 14.3306 8.50832 14.7963 9.16666 15.1265"
                stroke="#EBE5E0"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.66666 1.66797V14.1963"
                stroke="#FDFCFC"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M12.5 4.17383V9.18517"
                stroke="#FDFCFC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.7558 16.8124L18.2934 18.3316M17.6409 14.698C17.6409 16.3369 16.3127 17.6655 14.6742 17.6655C13.0357 17.6655 11.7073 16.3369 11.7073 14.698C11.7073 13.0591 13.0357 11.7305 14.6742 11.7305C16.3127 11.7305 17.6409 13.0591 17.6409 14.698Z"
                stroke="#FDFCFC"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
    
            <span>{{ listView ? "List view" : "Map View" }}</span>
          </button>
             <!-- <slot name="extra" /> -->

             
            <div class="space-x-1 px-2">
             <button class="">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect width="40" height="40" rx="6" fill="#1D1D1D"/>
                 <path d="M26.2187 13.3285C23.9839 11.9577 22.0335 12.5101 20.8618 13.39C20.3813 13.7508 20.1412 13.9312 19.9998 13.9312C19.8585 13.9312 19.6183 13.7508 19.1378 13.39C17.9662 12.5101 16.0157 11.9577 13.781 13.3285C10.8482 15.1275 10.1846 21.0624 16.9494 26.0695C18.2379 27.0232 18.8822 27.5 19.9998 27.5C21.1175 27.5 21.7618 27.0232 23.0503 26.0695C29.8151 21.0624 29.1514 15.1275 26.2187 13.3285Z" stroke="#EBE5E0" stroke-width="1.5" stroke-linecap="round"/>
                 </svg>
             </button>
             <button class="">
               <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <rect width="40" height="40" rx="6" fill="#1D1D1D"/>
                 <path d="M21.4417 27.4998C21.2952 27.7524 21.0849 27.962 20.8319 28.1078C20.5788 28.2535 20.292 28.3302 20 28.3302C19.708 28.3302 19.4212 28.2535 19.1681 28.1078C18.9151 27.962 18.7048 27.7524 18.5583 27.4998M25 16.6665C25 15.3404 24.4732 14.0687 23.5355 13.131C22.5979 12.1933 21.3261 11.6665 20 11.6665C18.6739 11.6665 17.4021 12.1933 16.4645 13.131C15.5268 14.0687 15 15.3404 15 16.6665C15 22.4998 12.5 24.1665 12.5 24.1665H27.5C27.5 24.1665 25 22.4998 25 16.6665Z" stroke="#EBE5E0" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg>
             </button>
            </div>
             <div @click="router.push('/dashboard/profile')" class="flex cursor-pointer items-center space-x-1">
               <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9271 39.7854C40.9459 37.8885 42.5541 35.5977 43.6524 33.0546C44.7507 30.5115 45.3157 27.7701 45.3125 25C45.3125 13.7812 36.2188 4.6875 25 4.6875C13.7813 4.6875 4.68751 13.7812 4.68751 25C4.68431 27.7701 5.24932 30.5115 6.34762 33.0546C7.44592 35.5977 9.05416 37.8885 11.0729 39.7854C14.8374 43.3414 19.8216 45.3195 25 45.3125C30.1785 45.3195 35.1626 43.3414 38.9271 39.7854ZM12.8021 37.1083C14.2648 35.2784 16.1209 33.8015 18.2326 32.7873C20.3443 31.7731 22.6574 31.2477 25 31.25C27.3427 31.2477 29.6557 31.7731 31.7674 32.7873C33.8792 33.8015 35.7353 35.2784 37.1979 37.1083C35.6021 38.7202 33.7022 39.9992 31.6083 40.8711C29.5144 41.743 27.2682 42.1904 25 42.1875C22.7318 42.1904 20.4856 41.743 18.3917 40.8711C16.2978 39.9992 14.3979 38.7202 12.8021 37.1083ZM32.8125 18.75C32.8125 20.822 31.9894 22.8091 30.5243 24.2743C29.0592 25.7394 27.072 26.5625 25 26.5625C22.928 26.5625 20.9409 25.7394 19.4757 24.2743C18.0106 22.8091 17.1875 20.822 17.1875 18.75C17.1875 16.678 18.0106 14.6909 19.4757 13.2257C20.9409 11.7606 22.928 10.9375 25 10.9375C27.072 10.9375 29.0592 11.7606 30.5243 13.2257C31.9894 14.6909 32.8125 16.678 32.8125 18.75Z" fill="#D6D0CC"/>
                 </svg>
               <span class="font-semibold">{{user?.firstName}} {{user?.lastName}}</span>
               <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M15 7.50004C15 7.50004 11.3176 12.5 10 12.5C8.68233 12.5 5 7.5 5 7.5" stroke="#EBE5E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                 </svg> 
             </div>
           </div>
         </div>
       </div>
     </nav>
   
     <div v-if="isOpen" class="relative z-50 xl:hidden" role="dialog" aria-modal="true">
       <!--
         Off-canvas menu backdrop, show/hide based on off-canvas menu state.
   
         Entering: "transition-opacity ease-linear duration-300"
           From: "opacity-0"
           To: "opacity-100"
         Leaving: "transition-opacity ease-linear duration-300"
           From: "opacity-100"
           To: "opacity-0"
       -->
       <div class="fixed inset-0 bg-gray-900/80" aria-hidden="true"></div>
   
       <div class="fixed inset-0 flex">
         <!--
           Off-canvas menu, show/hide based on off-canvas menu state.
   
           Entering: "transition ease-in-out duration-300 transform"
             From: "-translate-x-full"
             To: "translate-x-0"
           Leaving: "transition ease-in-out duration-300 transform"
             From: "translate-x-0"
             To: "-translate-x-full"
         -->
         <div class="relative mr-16 flex w-full max-w-xs flex-1">
           <!--
             Close button, show/hide based on off-canvas menu state.
   
             Entering: "ease-in-out duration-300"
               From: "opacity-0"
               To: "opacity-100"
             Leaving: "ease-in-out duration-300"
               From: "opacity-100"
               To: "opacity-0"
           -->
           <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
             <button @click="isOpen = false" type="button" class="-m-2.5 p-2.5">
               <span class="sr-only">Close sidebar</span>
               <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
               </svg>
             </button>
           </div>
   
           <!-- Sidebar component, swap this element with another sidebar if you like -->
           <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
             <div class="flex h-16 shrink-0 items-center pt-4">
               <img src="@/assets/icons/logo-with-text.svg" alt="logo" class=" object-contain" />
             </div>
             <nav class="flex flex-1 flex-col">
               <ul role="list" class="flex flex-1 flex-col gap-y-7">
                 <li>
                   <ul role="list" class="-mx-2 space-y-1">
                     <li>
                       <!-- Current: "bg-gray-800 text-white", Default: "text-gray-400 hover:text-white hover:bg-gray-800" -->
                       <NuxtLink @click.native="isOpen = false" to="/dashboard" class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M2.08331 9.99967C2.08331 6.26772 2.08331 4.40175 3.24268 3.24237C4.40205 2.08301 6.26803 2.08301 9.99998 2.08301C13.7319 2.08301 15.5979 2.08301 16.7573 3.24237C17.9166 4.40175 17.9166 6.26772 17.9166 9.99967C17.9166 13.7316 17.9166 15.5976 16.7573 16.757C15.5979 17.9163 13.7319 17.9163 9.99998 17.9163C6.26803 17.9163 4.40205 17.9163 3.24268 16.757C2.08331 15.5976 2.08331 13.7316 2.08331 9.99967Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                           <path d="M5 7.50033H7.91667M14.1667 7.50033H15M10 6.66699V8.33366M12.0833 6.66699V8.33366" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M15 12.5003H10M5.83333 12.5003H5M7.91667 11.667V13.3337" stroke="#D0D5DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>
                         Dashboard
                       </NuxtLink>
                     </li>
                     <li>
                       <NuxtLink @click.native="isOpen = false" to="/dashboard/property" class="group flex gap-x-3 rounded-md bg-gray-800 p-2 text-sm font-semibold leading-6 text-white">
                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.66669 15.0003C1.66669 13.7167 1.66669 13.0747 1.95563 12.6032C2.1173 12.3394 2.33913 12.1176 2.60296 11.9559C3.07447 11.667 3.71632 11.667 5.00002 11.667C6.28372 11.667 6.92557 11.667 7.39708 11.9559C7.66091 12.1176 7.88274 12.3394 8.04441 12.6032C8.33335 13.0747 8.33335 13.7167 8.33335 15.0003C8.33335 16.284 8.33335 16.9259 8.04441 17.3974C7.88274 17.6612 7.66091 17.8831 7.39708 18.0447C6.92557 18.3337 6.28372 18.3337 5.00002 18.3337C3.71632 18.3337 3.07447 18.3337 2.60296 18.0447C2.33913 17.8831 2.1173 17.6612 1.95563 17.3974C1.66669 16.9259 1.66669 16.284 1.66669 15.0003Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                           <path d="M11.6667 15.0003C11.6667 13.7167 11.6667 13.0747 11.9556 12.6032C12.1173 12.3394 12.3391 12.1176 12.6029 11.9559C13.0744 11.667 13.7164 11.667 15 11.667C16.2837 11.667 16.9256 11.667 17.3971 11.9559C17.6609 12.1176 17.8828 12.3394 18.0444 12.6032C18.3334 13.0747 18.3334 13.7167 18.3334 15.0003C18.3334 16.284 18.3334 16.9259 18.0444 17.3974C17.8828 17.6612 17.6609 17.8831 17.3971 18.0447C16.9256 18.3337 16.2837 18.3337 15 18.3337C13.7164 18.3337 13.0744 18.3337 12.6029 18.0447C12.3391 17.8831 12.1173 17.6612 11.9556 17.3974C11.6667 16.9259 11.6667 16.284 11.6667 15.0003Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                           <path d="M1.66669 5.00033C1.66669 3.71663 1.66669 3.07478 1.95563 2.60327C2.1173 2.33943 2.33913 2.11761 2.60296 1.95593C3.07447 1.66699 3.71632 1.66699 5.00002 1.66699C6.28372 1.66699 6.92557 1.66699 7.39708 1.95593C7.66091 2.11761 7.88274 2.33943 8.04441 2.60327C8.33335 3.07478 8.33335 3.71663 8.33335 5.00033C8.33335 6.28403 8.33335 6.92588 8.04441 7.39738C7.88274 7.66122 7.66091 7.88304 7.39708 8.04472C6.92557 8.33366 6.28372 8.33366 5.00002 8.33366C3.71632 8.33366 3.07447 8.33366 2.60296 8.04472C2.33913 7.88304 2.1173 7.66122 1.95563 7.39738C1.66669 6.92588 1.66669 6.28403 1.66669 5.00033Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                           <path d="M11.6667 5.00033C11.6667 3.71663 11.6667 3.07478 11.9556 2.60327C12.1173 2.33943 12.3391 2.11761 12.6029 1.95593C13.0744 1.66699 13.7164 1.66699 15 1.66699C16.2837 1.66699 16.9256 1.66699 17.3971 1.95593C17.6609 2.11761 17.8828 2.33943 18.0444 2.60327C18.3334 3.07478 18.3334 3.71663 18.3334 5.00033C18.3334 6.28403 18.3334 6.92588 18.0444 7.39738C17.8828 7.66122 17.6609 7.88304 17.3971 8.04472C16.9256 8.33366 16.2837 8.33366 15 8.33366C13.7164 8.33366 13.0744 8.33366 12.6029 8.04472C12.3391 7.88304 12.1173 7.66122 11.9556 7.39738C11.6667 6.92588 11.6667 6.28403 11.6667 5.00033Z" fill="#EBE5E0" stroke="#EBE5E0" stroke-width="1.5"/>
                           </svg>
                         Listings
                         </NuxtLink>
                     </li>
                     <li>
                       <NuxtLink @click.native="isOpen = false" to="" class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M1.95951 11.0113C1.66533 9.09692 1.51824 8.13977 1.88016 7.29123C2.24208 6.44268 3.04505 5.86211 4.65097 4.70096L5.85085 3.83341C7.8486 2.38897 8.84744 1.66675 10 1.66675C11.1526 1.66675 12.1514 2.38897 14.1492 3.83341L15.3491 4.70096C16.955 5.86211 17.7579 6.44268 18.1199 7.29123C18.4818 8.13977 18.3347 9.09692 18.0405 11.0113L17.7897 12.6437C17.3726 15.3575 17.1641 16.7144 16.1909 17.5239C15.2176 18.3334 13.7948 18.3334 10.949 18.3334H9.05102C6.2053 18.3334 4.78245 18.3334 3.80919 17.5239C2.83593 16.7144 2.62741 15.3575 2.21038 12.6437L1.95951 11.0113Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                           </svg>
                           
                         My home
                       </NuxtLink>
                     </li>
                     <li>
                       <NuxtLink @click.native="isOpen = false" to="" class="group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white">
                         <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M11.8089 17.4084C15.2947 17.1768 18.0714 14.3607 18.2999 10.8254C18.3445 10.1336 18.3445 9.41709 18.2999 8.72526C18.0714 5.18999 15.2947 2.37395 11.8089 2.14223C10.6196 2.06318 9.37802 2.06335 8.19118 2.14223C4.70534 2.37395 1.92869 5.18999 1.70022 8.72526C1.65551 9.41709 1.65551 10.1336 1.70022 10.8254C1.78343 12.113 2.35288 13.3052 3.02328 14.3118C3.41253 15.0166 3.15563 15.8962 2.75019 16.6645C2.45786 17.2185 2.31169 17.4955 2.42905 17.6956C2.54642 17.8957 2.80857 17.9021 3.33288 17.9148C4.36974 17.9401 5.06892 17.6461 5.62392 17.2368C5.93869 17.0048 6.09608 16.8887 6.20455 16.8753C6.31302 16.862 6.52649 16.9499 6.95336 17.1258C7.33702 17.2838 7.78248 17.3813 8.19118 17.4084C9.37802 17.4873 10.6196 17.4875 11.8089 17.4084Z" stroke="#D0D5DD" stroke-width="1.5" stroke-linejoin="round"/>
                           <path d="M9.99606 10H10.0035M13.3256 10H13.3331M6.66644 10H6.67392" stroke="#D0D5DD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                        Messages
                       </NuxtLink>
                     </li>
                   </ul>
                 </li>
                 <NuxtLink  @click.native="isOpen = false" to="/dashboard/profile" class="-mx-6 mt-auto">
                   <a href="#" class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-gray-800">
                     <img class="h-8 w-8 rounded-full bg-gray-800" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                     <span class="sr-only">Your profile</span>
                     <span aria-hidden="true">{{user?.firstName}} {{user?.firstName}}</span>
                   </a>
                 </NuxtLink>
               </ul>
             </nav>
           </div>
         </div>
       </div>
     </div>
    </main>
     </template>
     
     <script setup lang="ts">
     import { useUser } from '@/composables/auth/user'
     const { user } = useUser()
     const isOpen = ref(false)
     const router = useRouter()
     const route = useRoute()
     </script>
     
     <style scoped>
     /* Add additional styles if needed */
     </style>
     