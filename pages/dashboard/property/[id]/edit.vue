<template>
  <main>
    <LayoutWithoutSidebar>
      <template #header-content>
        <header
          class="bg-white px-4 flex items-center justify-between container mx-auto"
        >
          <div
            @click="router.push('/dashboard')"
            class="flex items-center space-x-2"
          >
            <img src="@/assets/icons/logo.svg" alt="Logo" class="h-8 w-auto" />
            <span class="text-lg font-semibold">BlackCountry</span>
          </div>
          <div class="flex space-x-4 items-center">
            <button @click="router.push(`/dashboard/property/preview`)" class="text-[#326543] text-sm hover:text-[#326543]">
              Preview
            </button>
            <button
              @click="openCancelModal = true"
              type="button"
              class="bg-white border text-sm border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              @click="handleSaveAndExit"
              :disabled="loading"
              class="bg-gray-900 disabled:cursor-not-allowed disabled:opacity-25 text-sm text-white px-4 py-2 rounded-md hover:bg-gray-800"
            >
              {{ loading ? "saving..." : "Save & exit" }}
            </button>
          </div>
        </header>
      </template>
      <main v-if="!fetchingProperty">
        <div
          class="lg:flex space-y-10 lg:space-y-0 lg:max-w-6xl w-full mx-auto py-10"
        >
          <aside
            id="first-part"
            class="space-y-3 lg:max-w-xs w-full px-5 lg:px-0 relative"
          >
            <div
              v-for="step in steps"
              :key="step.id"
              class="flex items-center px-4 py-2 rounded-lg font-medium gap-x-1"
              :class="{
                'bg-[#5B8469] text-white': activeParentStep === step.id,
                '': activeParentStep !== step.id,
              }"
              @click="handleStepClick(step.id)"
            >
              <div
                class="w-10 h-10 flex items-center justify-center rounded-full mr-3 relative"
                :class="{
                  'text-black': activeParentStep === step.id,
                  'text-white': activeParentStep !== step.id,
                }"
              >
                <div v-if="step.completed">
                  <svg
                    class="absolute -right-[270px] top-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.166 2.7816C12.9403 2.07256 11.5172 1.66675 9.99935 1.66675C5.39697 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6024 5.39697 18.3334 9.99935 18.3334C14.6017 18.3334 18.3327 14.6024 18.3327 10.0001C18.3327 9.42933 18.2753 8.87192 18.166 8.33342"
                      stroke="#5B8469"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M6.66602 10.4167C6.66602 10.4167 7.91602 10.4167 9.58268 13.3334C9.58268 13.3334 14.215 5.69452 18.3327 4.16675"
                      stroke="#5B8469"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <span v-if="!step.completed" class="font-semibold absolute">{{
                  step.id
                }}</span>

                <svg
                  v-if="activeParentStep !== step.id"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <g clip-path="url(#clip0_5289_73233)">
                      <rect width="30" height="30" rx="15" fill="#292929" />
                      <path
                        d="M0.288893 22.1673C0.288893 21.2744 2.18618 20.8582 3.46852 20.8582C3.83222 20.8582 4.44286 20.9314 4.44286 21.4207C4.44286 22.378 2.46915 22.9004 1.45511 22.9004C0.917007 22.9004 0.288893 22.7083 0.288893 22.1673ZM5.08715 21.4207C5.08715 20.8373 4.66193 20.2139 3.46852 20.2139C2.14582 20.2139 -0.355615 20.6223 -0.355615 22.1673C-0.355615 22.9912 0.372212 23.5447 1.45511 23.5447C2.72148 23.5447 5.08715 22.9217 5.08715 21.4207ZM-3.83203 27.9421C-2.18319 28.5337 0.317385 29.1474 3.59738 29.1474C8.76429 29.1474 15.6336 28.5398 15.6336 23.2865C15.6336 21.2778 14.3731 20.3901 13.3601 19.6767C12.4693 19.0492 11.9204 18.6216 11.8641 17.7704C11.8269 17.2092 12.0911 16.7002 12.3974 16.1111C12.7408 15.4504 13.13 14.7017 13.13 13.7548C13.13 12.4696 12.1768 11.0863 10.0842 11.0863C8.42154 11.0863 6.88774 11.7364 5.26415 12.4249C3.17606 13.3103 0.808875 14.314 -2.53609 14.314C-2.99821 14.314 -3.42883 14.2825 -3.83203 14.2264V10.6863C-3.066 10.7815 -2.29483 10.8293 -1.52291 10.8294C2.47908 10.8294 5.28465 9.47993 7.75997 8.28933C9.86835 7.27507 11.8597 6.31736 14.2938 6.31736C17.6584 6.31736 19.4187 8.22349 19.4187 10.1063C19.4187 11.3712 18.7625 12.1415 18.0679 12.9568C17.3522 13.7968 16.612 14.6656 16.612 16.0747C16.612 17.4269 17.1432 18.1537 17.6569 18.8565C18.2565 19.6767 18.8767 20.5252 18.8767 22.5403C18.8767 26.3858 15.2362 28.7662 11.6886 30.1729H-3.83203V27.9421ZM-3.83203 24.7752C-2.24314 25.3475 -0.567193 25.6406 1.12163 25.6414C4.04462 25.6414 8.9482 24.9964 8.9482 20.6776C8.9482 19.4071 7.9279 17.6175 5.65936 17.6175C4.13225 17.6175 2.92891 18.019 1.76528 18.4073C0.581585 18.8021 -0.536279 19.1751 -2.00252 19.1751C-2.64293 19.1751 -3.25659 19.0648 -3.83203 18.8893V15.6561C-3.4019 15.7066 -2.96917 15.7318 -2.53609 15.7315C1.09725 15.7315 3.71437 14.6218 5.81736 13.7302C7.36929 13.072 8.70948 12.5037 10.0842 12.5037C11.2845 12.5037 11.7123 13.15 11.7123 13.7548C11.7123 14.3552 11.4341 14.8905 11.1395 15.4576C10.7863 16.137 10.3862 16.9072 10.4494 17.8642C10.5537 19.4339 11.6109 20.1785 12.5435 20.8356C13.4779 21.4937 14.2159 22.0132 14.2159 23.2865C14.2159 25.1939 13.1151 27.7297 3.59738 27.7297C0.174495 27.7297 -2.3468 27.0077 -3.83203 26.4199V24.7752ZM-3.83203 19.5662C-3.25292 19.725 -2.64078 19.8196 -2.00252 19.8196C-0.431594 19.8196 0.789015 19.4123 1.96926 19.0186C3.13547 18.6294 4.23672 18.262 5.65936 18.262C7.65745 18.262 8.30391 19.8895 8.30391 20.6776C8.30391 23.5034 5.82038 24.9971 1.12163 24.9971C-0.891562 24.9971 -2.59761 24.5486 -3.83203 24.08V19.5662ZM-3.83203 7.2578C-3.25102 7.387 -2.65773 7.453 -2.06253 7.45465C1.70247 7.45465 4.59675 5.87768 7.6609 4.20833C10.7509 2.52473 13.9463 0.783936 18.1603 0.783936C20.1113 0.783936 21.7738 1.34815 22.9674 2.41573C24.1265 3.45222 24.7393 4.86471 24.7393 6.50039C24.7393 8.21658 23.6855 9.76096 22.57 11.3958C21.3578 13.1728 20.104 15.0101 20.104 17.2392C20.104 21.9614 23.9307 24.7251 30.629 24.8753V26.573C30.6003 26.5753 30.5719 26.5816 30.5449 26.5918C25.6866 28.4668 22.5467 25.1208 22.406 24.9641C22.3756 24.9217 22.3355 24.8873 22.2889 24.8639C22.2424 24.8405 22.1909 24.8287 22.1388 24.8295C22.0867 24.8304 22.0355 24.8438 21.9898 24.8688C21.944 24.8937 21.905 24.9294 21.8761 24.9727C21.8391 25.0291 21.8212 25.0958 21.8249 25.1631H21.8225C21.8225 25.1719 21.799 26.0862 20.9976 27.4336C20.5588 28.1715 19.8197 29.1374 18.5911 30.1729H13.3385C14.0817 29.8215 14.8786 29.3902 15.6396 28.8713C18.2151 27.1147 19.521 24.9848 19.521 22.5403C19.521 20.3147 18.807 19.338 18.1771 18.4762C17.683 17.8004 17.2563 17.2165 17.2563 16.0747C17.2563 14.9028 17.8888 14.1605 18.5583 13.3747C19.298 12.5065 20.063 11.6086 20.063 10.1063C20.063 7.90318 18.0813 5.67284 14.2938 5.67284C11.7128 5.67284 9.65704 6.66163 7.48067 7.70848C4.94944 8.92607 2.33209 10.1849 -1.52291 10.1849C-2.39752 10.1849 -3.18385 10.1191 -3.83203 10.0349V7.2578ZM-3.83203 1.24239C-3.09168 1.75114 -1.9941 2.18477 -0.397707 2.18477C3.19397 2.18477 5.87672 0.581903 8.71704 -1.11529C11.6035 -2.8399 14.5882 -4.62322 18.6755 -4.62322C22.3753 -4.62322 25.5729 -3.32059 28.179 -0.75181C29.4033 0.454983 30.2015 1.673 30.629 2.41918V6.28843C30.6218 6.31119 30.6159 6.33432 30.6111 6.35772C30.459 7.09678 29.2861 8.05125 28.0443 9.06162C25.6819 10.9839 22.7416 13.3762 22.7552 17.1109C22.7608 18.6819 23.4254 20.0998 24.5785 21.0011C25.654 21.8416 26.9806 22.1229 28.2739 22.1229C29.0972 22.1227 29.9062 22.0083 30.629 21.8524V24.2313C24.3402 24.0854 20.7485 21.5556 20.7485 17.2392C20.7485 15.2091 21.9451 13.4552 23.1023 11.759C24.2238 10.1152 25.3836 8.41538 25.3836 6.50039C25.3836 2.75525 22.4131 0.139418 18.1603 0.139418C13.7821 0.139418 10.5137 1.92015 7.35266 3.6426C4.36255 5.27159 1.53821 6.81013 -2.06253 6.81013C-2.69086 6.81013 -3.28551 6.72595 -3.83203 6.59601V1.24239ZM30.629 11.3217C30.2133 11.6647 29.8131 11.9742 29.4261 12.2734C27.7527 13.5663 26.4311 14.5877 26.4311 16.4846C26.4311 17.3559 26.7635 18.0307 27.3918 18.4356C27.8973 18.7613 28.5356 18.8835 29.1805 18.8835C29.6791 18.8835 30.181 18.8101 30.629 18.7015V20.3983C28.3704 20.9433 26.5802 20.7665 25.4516 19.8841C24.643 19.2521 24.1768 18.2394 24.1729 17.1058C24.1617 14.0483 26.6996 11.9831 28.939 10.1611C29.5567 9.65843 30.1384 9.184 30.629 8.71389V11.3217ZM30.629 18.0352C29.6975 18.2845 28.4756 18.367 27.7408 17.894C27.2932 17.6054 27.0756 17.1444 27.0756 16.4846C27.0756 14.9041 28.2267 14.0144 29.8201 12.7832C30.0914 12.5745 30.361 12.3636 30.629 12.1506V18.0352ZM30.629 30.1729H19.571C21.5216 28.3559 22.1593 26.709 22.3656 25.813C22.7876 26.1784 23.491 26.7003 24.4554 27.1236C25.8174 27.7213 27.9852 28.2192 30.629 27.2477V30.1729Z"
                        fill="white"
                        fill-opacity="0.3"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_5289_73233">
                      <rect width="30" height="30" rx="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  v-if="activeParentStep === step.id"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.8">
                    <g clip-path="url(#clip0_5289_73226)">
                      <rect width="30" height="30" rx="15" fill="#BDBDBD" />
                      <path
                        d="M0.288893 22.1673C0.288893 21.2744 2.18618 20.8582 3.46852 20.8582C3.83222 20.8582 4.44286 20.9314 4.44286 21.4207C4.44286 22.378 2.46915 22.9004 1.45511 22.9004C0.917007 22.9004 0.288893 22.7083 0.288893 22.1673ZM5.08715 21.4207C5.08715 20.8373 4.66193 20.2139 3.46852 20.2139C2.14582 20.2139 -0.355615 20.6223 -0.355615 22.1673C-0.355615 22.9912 0.372212 23.5447 1.45511 23.5447C2.72148 23.5447 5.08715 22.9217 5.08715 21.4207ZM-3.83203 27.9421C-2.18319 28.5337 0.317385 29.1474 3.59738 29.1474C8.76429 29.1474 15.6336 28.5398 15.6336 23.2865C15.6336 21.2778 14.3731 20.3901 13.3601 19.6767C12.4693 19.0492 11.9204 18.6216 11.8641 17.7704C11.8269 17.2092 12.0911 16.7002 12.3974 16.1111C12.7408 15.4504 13.13 14.7017 13.13 13.7548C13.13 12.4696 12.1768 11.0863 10.0842 11.0863C8.42154 11.0863 6.88774 11.7364 5.26415 12.4249C3.17606 13.3103 0.808875 14.314 -2.53609 14.314C-2.99821 14.314 -3.42883 14.2825 -3.83203 14.2264V10.6863C-3.066 10.7815 -2.29483 10.8293 -1.52291 10.8294C2.47908 10.8294 5.28465 9.47993 7.75997 8.28933C9.86835 7.27507 11.8597 6.31736 14.2938 6.31736C17.6584 6.31736 19.4187 8.2235 19.4187 10.1063C19.4187 11.3712 18.7625 12.1415 18.0679 12.9568C17.3522 13.7969 16.612 14.6656 16.612 16.0747C16.612 17.4269 17.1432 18.1537 17.6569 18.8565C18.2565 19.6767 18.8767 20.5252 18.8767 22.5403C18.8767 26.3858 15.2362 28.7662 11.6886 30.1729H-3.83203V27.9421ZM-3.83203 24.7752C-2.24314 25.3475 -0.567193 25.6406 1.12163 25.6414C4.04462 25.6414 8.9482 24.9964 8.9482 20.6776C8.9482 19.4071 7.9279 17.6175 5.65936 17.6175C4.13225 17.6175 2.92891 18.019 1.76528 18.4073C0.581585 18.8021 -0.536279 19.1751 -2.00252 19.1751C-2.64293 19.1751 -3.25659 19.0648 -3.83203 18.8893V15.6561C-3.4019 15.7066 -2.96917 15.7318 -2.53609 15.7315C1.09725 15.7315 3.71437 14.6218 5.81736 13.7302C7.36929 13.072 8.70948 12.5037 10.0842 12.5037C11.2845 12.5037 11.7123 13.15 11.7123 13.7548C11.7123 14.3552 11.4341 14.8905 11.1395 15.4576C10.7863 16.137 10.3862 16.9072 10.4494 17.8642C10.5537 19.4339 11.6109 20.1785 12.5435 20.8356C13.4779 21.4937 14.2159 22.0132 14.2159 23.2865C14.2159 25.1939 13.1151 27.7297 3.59738 27.7297C0.174495 27.7297 -2.3468 27.0077 -3.83203 26.4199V24.7752ZM-3.83203 19.5662C-3.25292 19.725 -2.64078 19.8196 -2.00252 19.8196C-0.431594 19.8196 0.789015 19.4123 1.96926 19.0186C3.13547 18.6294 4.23672 18.262 5.65936 18.262C7.65745 18.262 8.30391 19.8895 8.30391 20.6776C8.30391 23.5034 5.82038 24.9971 1.12163 24.9971C-0.891562 24.9971 -2.59761 24.5486 -3.83203 24.08V19.5662ZM-3.83203 7.2578C-3.25102 7.387 -2.65773 7.453 -2.06253 7.45465C1.70247 7.45465 4.59675 5.87768 7.6609 4.20833C10.7509 2.52473 13.9463 0.783939 18.1603 0.783939C20.1113 0.783939 21.7738 1.34816 22.9674 2.41573C24.1265 3.45222 24.7393 4.86472 24.7393 6.5004C24.7393 8.21659 23.6855 9.76097 22.57 11.3958C21.3578 13.1728 20.104 15.0101 20.104 17.2392C20.104 21.9614 23.9307 24.7251 30.629 24.8753V26.573C30.6003 26.5753 30.5719 26.5817 30.5449 26.5918C25.6866 28.4668 22.5467 25.1208 22.406 24.9641C22.3756 24.9217 22.3355 24.8873 22.2889 24.8639C22.2424 24.8405 22.1909 24.8287 22.1388 24.8295C22.0867 24.8304 22.0355 24.8439 21.9898 24.8688C21.944 24.8937 21.905 24.9294 21.8761 24.9727C21.8391 25.0291 21.8212 25.0958 21.8249 25.1631H21.8225C21.8225 25.1719 21.799 26.0862 20.9976 27.4336C20.5588 28.1715 19.8197 29.1374 18.5911 30.1729H13.3385C14.0817 29.8215 14.8786 29.3902 15.6396 28.8713C18.2151 27.1147 19.521 24.9848 19.521 22.5403C19.521 20.3147 18.807 19.338 18.1771 18.4762C17.683 17.8004 17.2563 17.2165 17.2563 16.0747C17.2563 14.9028 17.8888 14.1605 18.5583 13.3747C19.298 12.5065 20.063 11.6086 20.063 10.1063C20.063 7.90318 18.0813 5.67284 14.2938 5.67284C11.7128 5.67284 9.65704 6.66163 7.48067 7.70849C4.94944 8.92607 2.33209 10.1849 -1.52291 10.1849C-2.39752 10.1849 -3.18385 10.1191 -3.83203 10.0349V7.2578ZM-3.83203 1.24239C-3.09168 1.75114 -1.9941 2.18478 -0.397707 2.18478C3.19397 2.18478 5.87672 0.581907 8.71704 -1.11529C11.6035 -2.83989 14.5882 -4.62321 18.6755 -4.62321C22.3753 -4.62321 25.5729 -3.32059 28.179 -0.751806C29.4033 0.454988 30.2015 1.67301 30.629 2.41919V6.28843C30.6218 6.31119 30.6159 6.33432 30.6111 6.35772C30.459 7.09678 29.2861 8.05125 28.0443 9.06162C25.6819 10.9839 22.7416 13.3762 22.7552 17.1109C22.7608 18.6819 23.4254 20.0998 24.5785 21.0011C25.654 21.8416 26.9806 22.1229 28.2739 22.1229C29.0972 22.1227 29.9062 22.0083 30.629 21.8524V24.2313C24.3402 24.0854 20.7485 21.5556 20.7485 17.2392C20.7485 15.2091 21.9451 13.4552 23.1023 11.759C24.2238 10.1152 25.3836 8.41538 25.3836 6.5004C25.3836 2.75526 22.4131 0.139423 18.1603 0.139423C13.7821 0.139423 10.5137 1.92015 7.35266 3.6426C4.36255 5.27159 1.53821 6.81014 -2.06253 6.81014C-2.69086 6.81014 -3.28551 6.72596 -3.83203 6.59602V1.24239ZM30.629 11.3217C30.2133 11.6647 29.8131 11.9742 29.4261 12.2734C27.7527 13.5663 26.4311 14.5877 26.4311 16.4846C26.4311 17.3559 26.7635 18.0307 27.3918 18.4356C27.8973 18.7613 28.5356 18.8835 29.1805 18.8835C29.6791 18.8835 30.181 18.8101 30.629 18.7015V20.3983C28.3704 20.9433 26.5802 20.7665 25.4516 19.8841C24.643 19.2521 24.1768 18.2394 24.1729 17.1058C24.1617 14.0483 26.6996 11.9831 28.939 10.1611C29.5567 9.65844 30.1384 9.18401 30.629 8.71389V11.3217ZM30.629 18.0352C29.6975 18.2845 28.4756 18.367 27.7408 17.894C27.2932 17.6054 27.0756 17.1444 27.0756 16.4846C27.0756 14.9041 28.2267 14.0144 29.8201 12.7832C30.0914 12.5745 30.361 12.3636 30.629 12.1506V18.0352ZM30.629 30.1729H19.571C21.5216 28.3559 22.1593 26.709 22.3656 25.813C22.7876 26.1784 23.491 26.7003 24.4554 27.1236C25.8174 27.7213 27.9852 28.2192 30.629 27.2477V30.1729Z"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_5289_73226">
                      <rect width="30" height="30" rx="15" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <span
                  class="font-semibold absolute flex justify-center items-center"
                  >{{ step.id }}</span
                >
              </div>
              <h3
                class="text-"
                :class="{
                  'text-white': activeParentStep === step.id,
                  'text-[#98A2B3]': activeParentStep !== step.id,
                  'text-[#1D2739]': step.completed,
                }"
              >
                {{ step.title }}
              </h3>
              <!-- <div  v-if="step.completed">
              <svg class="absolute right-0 top-5" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.166 2.7816C12.9403 2.07256 11.5172 1.66675 9.99935 1.66675C5.39697 1.66675 1.66602 5.39771 1.66602 10.0001C1.66602 14.6024 5.39697 18.3334 9.99935 18.3334C14.6017 18.3334 18.3327 14.6024 18.3327 10.0001C18.3327 9.42933 18.2753 8.87192 18.166 8.33342" stroke="#5B8469" stroke-width="2" stroke-linecap="round"/>
                <path d="M6.66602 10.4167C6.66602 10.4167 7.91602 10.4167 9.58268 13.3334C9.58268 13.3334 14.215 5.69452 18.3327 4.16675" stroke="#5B8469" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div> -->
            </div>
          </aside>
          <div
            id="second-part"
            class="lg:pl-10 p-4 space-y-6 lg:max-w-screen-7xl w-full"
          >
            <CoreProgressStepper
              v-if="activeParentStep === 1"
              :titles="[
                'Let’s start with the basics',
                'Details and Preferences',
              ]"
              :totalSteps="2"
              :currentStep="basicPropertyInformationStep"
            />
            <CreatePropertyForm
              :payload="payload"
              @updateFormData="handleBasicPropertyInformationFormData"
              v-if="
                activeParentStep === 1 && basicPropertyInformationStep === 1
              "
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4">
                  <button
                    @click="handlePreviousStep"
                    :disabled="basicPropertyInformationStep === 1"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextStep"
                    :disabled="isNextButtonDisabled"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 disabled:opacity-25 disabled:cursor-not-allowed py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template>
            </CreatePropertyForm>
            <CoreMapboxSearch
            class="z-10"
            :payload="payload"
            v-if="
            activeParentStep === 1 && basicPropertyInformationStep === 2
          "
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4 z-50">
                  <button
                    @click="handlePreviousStep"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextParentStep"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 disabled:opacity-25 disabled:cursor-not-allowed py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template> 
            </CoreMapboxSearch>
            <!-- <MapSection
              class="z-10"
              :payload="payload"
              @searchResult="handleLocationSearch"
              @selectedAmenity="handleSelectedAmenity"
              v-if="
                activeParentStep === 1 && basicPropertyInformationStep === 2
              "
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4 z-50">
                  <button
                    @click="handlePreviousStep"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextParentStep"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 disabled:opacity-25 disabled:cursor-not-allowed py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template>                                                       2
            </MapSection> -->
            <CoreProgressStepper
              v-if="activeParentStep === 2"
              :titles="[
                'Details about Common areas',
                'Details about the private rooms',
              ]"
              :totalSteps="2"
              :currentStep="propertyDetailsStep"
            />
            <PropertyDetails
              @updateCommonAreas="handleCommonAreas"
              @updateIsFurnished="handlePropertyFurnished"
              :payload="payload"
              :commonAreasList="commonAreasList"
              :interiorAreas="interiorAreas"
              :exteriorAreas="exteriorAreas"
              :exteriorFurnishedAreasList="exteriorFurnishedAreasList"
              :exteriorUnFurnishedAreasList="exteriorUnFurnishedAreasList"
              :interiorFurnishedAreasList="interiorFurnishedAreasList"
              :interiorUnFurnishedAreasList="interiorUnFurnishedAreasList"
              :loading="loadingCommonAreas"
              v-if="activeParentStep === 2 && propertyDetailsStep === 1"
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4">
                  <button
                    @click="handlePreviousStep"
                    :disabled="propertyDetailsStep === 1"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextStep"
                    :disabled="propertyDetailsStep === 2"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template>
            </PropertyDetails>
            <RoomDetails
              :interiorAreas="interiorAreas"
              :roomFeaturesList="roomFeaturesList"
              :loadingRoomFeatures="loadingRoomFeatures"
              :loading="loadingCommonAreas"
              :payload="payload"
              @emitRoomData="handleRoomData"
              v-if="activeParentStep === 2 && propertyDetailsStep === 2"
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4">
                  <button
                    @click="handlePreviousStep"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextParentStep"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template>
            </RoomDetails>
            <CoreProgressStepper
              v-if="activeParentStep === 3"
              :titles="[
                'Upload Property Exterior and Street View Images',
                'Upload images of the common area',
                'Upload images of the private rooms',
              ]"
              :totalSteps="2"
              :currentStep="visualsStep"
            />
            <UploadPropertyExterior
            :payload="payload"
            v-if="activeParentStep === 3 && visualsStep === 1"
            >
            <template #action-buttons>
              <div class="flex justify-between mt-4">
                <button
                  @click="handlePreviousStep"
                  :disabled="visualsStep === Number(1)"
                  class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                >
                  Previous
                </button>
                <button
                  @click="handleNextStep"
                  :disabled="visualsStep === Number(3)" 
                  class="bg-[#292929] text-white text-sm font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                >
                  Next
                </button>
              </div>
            </template>
            </UploadPropertyExterior>
            <UploadPhotos
              :payload="payload"
              v-if="activeParentStep === 3 && visualsStep === 2"
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4">
                  <button
                    @click="handlePreviousStep"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextStep"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template>
            </UploadPhotos>
            <AddVideoTours
              :payload="payload"
              v-if="activeParentStep === 3 && visualsStep === 3"
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4">
                  <button
                    @click="handlePreviousStep"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextParentStep"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template>
            </AddVideoTours>
            <CoreProgressStepper
              v-if="activeParentStep === 4"
              :titles="[
                'Define house rules',
                'Set pre-screening questions',
                'Assign property',
              ]"
              :totalSteps="3"
              :currentStep="finalizeStep"
            />
            <ReviewDetails
              @updateRules="handleUpdatedRules"
              :payload="payload"
              v-if="activeParentStep === 4 && finalizeStep === 1"
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4">
                  <button
                    @click="handlePreviousStep"
                    :disabled="finalizeStep === 1"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextStep"
                    :disabled="finalizeStep === 3"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template>
            </ReviewDetails>
            <PublishListing
              @updateQuestions="handleQuestions"
              :payload="payload"
              v-if="activeParentStep === 4 && finalizeStep === 2"
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4">
                  <button
                    @click="handlePreviousStep"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleNextStep"
                    class="bg-[#292929] text-white text-sm font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Next
                  </button>
                </div>
              </template>
            </PublishListing>
            <AssignProperty
              :payload="payload"
              :agents="agentsList"
              :loading="loadingAgents"
              v-if="activeParentStep === 4 && finalizeStep === 3"
            >
              <template #action-buttons>
                <div class="flex justify-between mt-4">
                  <button
                    @click="handlePreviousStep"
                    class="bg-[#EBE5E0] text-[#292929] text-sm font-semibold px-4 py-2 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    Previous
                  </button>
                  <button
                    @click="handleSubmit"
                    :disabled="loading"
                    class="bg-[#292929] disabled:cursor-not-allowed disabled:opacity-25 text-white text-sm font-semibold px-6 py-2.5 rounded-md disabled:bg-gray-200 disabled:text-gray-500"
                  >
                    {{ loading ? "processing..." : "Publish" }}
                  </button>
                </div>
              </template>
            </AssignProperty>
          </div>
        </div>
      </main>
      <section v-else>
        <div class="rounded-md p-4 w-full mx-auto mt-10">
          <div class="animate-pulse flex space-x-4">
            <!-- <div class="rounded-md bg-slate-200 h-44 w-44"></div> -->
            <div class="flex-1 space-y-6 py-1">
              <div class="h-32 bg-slate-200 rounded"></div>
              <div class="space-y-3">
                <div class="grid grid-cols-3 gap-4">
                  <div class="h-32 w-full bg-slate-200 rounded col-span-2"></div>
                  <div class="h-32 w-full bg-slate-200 rounded col-span-1"></div>
                </div>
                <div class="h-32 w-full bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
       </section>
    </LayoutWithoutSidebar>
    <CoreReusableModal
      :isOpen="openCancelModal"
      message="By cancelling, you will loose progress of your property upload"
      confirmButtonText="No, Continue uploading"
      cancelButtonText="Yes, Cancel"
      @close="handleClose"
      @confirm="handleConfirm"
    />
  </main>
</template>

<script lang="ts" setup>
import { useGetRoomFeatures } from  '@/composables/modules/property/fetchRoomFeatures'
import { useGetCommonAreas } from '@/composables/modules/property/fetchCommonAreas'
import { use_create_property } from '@/composables/modules/property/create'
import LayoutWithoutSidebar from "@/layouts/dashboardWithoutSidebar.vue";
import { useFetchAgents } from '@/composables/modules/agents/fetch'
import { useEditProperty } from '@/composables/modules/property/update'
const { create_property } = use_create_property()
const { agentsList, loading: loadingAgents } = useFetchAgents()
const { loading: loadingCommonAreas, commonAreasList, interiorAreas, exteriorAreas, exteriorFurnishedAreasList, exteriorUnFurnishedAreasList, interiorFurnishedAreasList, interiorUnFurnishedAreasList } = useGetCommonAreas()
const { loading: loadingRoomFeatures, roomFeaturesList } = useGetRoomFeatures()
const steps = ref([
  { id: 1, title: "Basic Property Information", completed: false },
  { id: 2, title: "Detailed Property Information", completed: false },
  { id: 3, title: "Add Visuals", completed: false },
  { id: 4, title: "Finalize listing and publish", completed: false },
]);

const { editProperty, payload, loading, fetchingProperty }  = useEditProperty()

const router = useRouter();
const openCancelModal = ref(false)

const handleConfirm = () => {
  sessionStorage.clear()
  openCancelModal.value = false

}

const handleClose = () => {
  router.push('/dashboard/property')
  openCancelModal.value = false
}

const activeParentStep = ref(1);
const basicPropertyInformationStep = ref(1);
const propertyDetailsStep = ref(1);
const visualsStep = ref(1);
const finalizeStep = ref(1);

function handleNextStep() {
  if (activeParentStep.value === 1) {
    if (basicPropertyInformationStep.value < 2) {
      basicPropertyInformationStep.value += 1;
    } else {
      handleNextParentStep();
    }
  } else if (activeParentStep.value === 2) {
    if (propertyDetailsStep.value < 2) {
      propertyDetailsStep.value += 1;
    } else {
      handleNextParentStep();
    }
  } else if (activeParentStep.value === 3) {
    if (visualsStep.value < 2) {
      visualsStep.value += 1;
    } else {
      handleNextParentStep();
    }
  } else if (activeParentStep.value === 4) {
    if (finalizeStep.value < 3) {
      finalizeStep.value += 1;
    }
  }
}

function handlePreviousStep() {
  if (activeParentStep.value === 1) {
    if (basicPropertyInformationStep.value > 1) {
      basicPropertyInformationStep.value -= 1;
    }
  } else if (activeParentStep.value === 2) {
    if (propertyDetailsStep.value > 1) {
      propertyDetailsStep.value -= 1;
    }
  } else if (activeParentStep.value === 3) {
    if (visualsStep.value > 1) {
      visualsStep.value -= 1;
    }
  } else if (activeParentStep.value === 4) {
    if (finalizeStep.value > 1) {
      finalizeStep.value -= 1;
    }
  }
}

function handleNextParentStep() {
  if (activeParentStep.value < steps.value.length) {
    steps.value[activeParentStep.value - 1].completed = true;
    activeParentStep.value += 1;
    resetSubSteps();
  }
}

function handlePreviousParentStep() {
  if (activeParentStep.value > 1) {
    activeParentStep.value -= 1;
  }
}

function handleStepClick(stepId: any) {
  // Only allow navigation to previous steps or the current step
  if (stepId <= activeParentStep.value) {
    activeParentStep.value = stepId;
    resetSubSteps();
  }
}

function resetSubSteps() {
  if (activeParentStep.value === 2) {
    propertyDetailsStep.value = 1;
  } else if (activeParentStep.value === 3) {
    visualsStep.value = 1;
  } else if (activeParentStep.value === 4) {
    finalizeStep.value = 1;
  }
}

function handleSubmit() {
      editProperty();
}

const incomingData = ref({})

function handleBasicPropertyInformationFormData(data: any) {
  // handle the data emitted from the child component here
  // console.log('Data received from child component:', data)
  incomingData.value = data
  sessionStorage.setItem('property', JSON.stringify(incomingData.value))
}

// const neighbouringLandmarksArray = ref([]) as any
// const handleSelectedAmenity = (item: any) => {
//   const result  = neighbouringLandmarksArray.value.push({
//         name: item.name,
//         type: item.type,
//         description: item.display_name,
//         longitude: item.lat,
//         latitude: item.lon,
//         address: item.display_name,
//   })
//   console.log()
//   payload.neighbouringLandmarks.value = result
// }

const neighbouringLandmarksArray = ref([]) as any;

const handleSelectedAmenity = (item: any) => {
  // Push the new object into the array
  neighbouringLandmarksArray.value.push({
    name: item.name,
    type: item.type,
    description: item.display_name,
    longitude: item.lon, // Corrected: lat and lon were swapped
    latitude: item.lat,  // Corrected: lat and lon were swapped
    address: item.display_name,
  });

  // Update payload with the current array
  payload.neighbouringLandmarks.value = neighbouringLandmarksArray.value;

  console.log(payload.neighbouringLandmarks.value); // To check the updated value
};

const handleLocationSearch = (data: any) => {
  payload.latitude.value = data.lat
  payload.longitude.value = data.lon
  payload.address.value = data.display_name
}

const handleCommonAreas = (data: any) => {
// console.log(data, 'sara')
// const storedData = sessionStorage.getItem('property')
// let propertyData = storedData ? JSON.parse(storedData) : {}

// Update the session storage with new location data
// propertyData = {
//   ...propertyData, // merge with existing data
//   commonAreas: data
// }

payload.commonAreas.value = data

// // Store the updated data back to session storage
// sessionStorage.setItem('property', JSON.stringify(propertyData))
}
const handlePropertyFurnished = (data: any) => {

// Retrieve existing session data from sessionStorage (if any)
// const storedData = sessionStorage.getItem('property')
// let propertyData = storedData ? JSON.parse(storedData) : {}

// // Update the session storage with new location data
// propertyData = {
//   ...propertyData, // merge with existing data
//   isFurnishedCommonArea: data
// }

// // Store the updated data back to session storage
// sessionStorage.setItem('property', JSON.stringify(propertyData))
payload.isFurnishedCommonArea.value = data

}

const roomsArray = ref([]) as any

const handleRoomData = (room: any) => {
  console.log("Room data received:", room);
  // Push or update the received room data in the array
  const roomIndex = roomsArray.value.findIndex(r => r.name === room.name);
  if (roomIndex !== -1) {
    roomsArray.value[roomIndex] = room;
  } else {
    roomsArray.value.push(room);
  }

  // console.log(roomsArray.value, 'room array')

//   const storedData = sessionStorage.getItem('property')
// let propertyData = storedData ? JSON.parse(storedData) : {}

// // Update the session storage with new location data
// propertyData = {
//   ...propertyData, // merge with existing data
//   rooms: roomsArray.value
// }

// // Store the updated data back to session storage
// sessionStorage.setItem('property', JSON.stringify(propertyData))

payload.rooms.value = roomsArray.value
};

const goToNextStep = () => {
  console.log("Moving to the next step...");
  // Add logic here for moving to the next step in the property creation flow
};

const handleUpdatedRules = (updatedRules: any) => {
payload.rules.value = updatedRules
}


const handleSaveAndExit = async () => {
 await editProperty()
}


const handleQuestions = (questionsData: any) => {
  payload.questions.value = questionsData
}

const validateBasicPropertyInformationStep = () => {
  if (basicPropertyInformationStep.value === 1) {
    // Validate "Let's start with the basics" fields
    return (
      payload.name.value &&
      payload.description.value &&
      payload.houseTypeId.value &&
      payload.flooringTypeId.value &&
      payload.size.value &&
      payload.sizeUnit.value &&
      payload.bedroomCount.value &&
      payload.bathroomCount.value
    );
  } else if (basicPropertyInformationStep.value === 2) {
    // Validate "Details and Preferences" fields
    return (
      payload.address.value &&
      payload.longitude.value !== null &&
      payload.latitude.value !== null
    );
  }
  return true;
};

const validateDetailedPropertyInformationStep = () => {
  if (propertyDetailsStep.value === 1) {
    // Validate "Details about Common areas"
    return payload.commonAreas.value.length > 0;
  } else if (propertyDetailsStep.value === 2) {
    // Validate "Details about the private rooms"
    return payload.rooms.value.length > 0;
  }
  return true;
};

const validateAddVisualsStep = () => {
  if (visualsStep.value === 1) {
    // Validate "Upload images of the common area"
    return payload.images.value.length > 0;
  }
  return true;
};

const validateFinalizeListingStep = () => {
  if (finalizeStep.value === 1) {
    // Validate "Define house rules"
    return payload.rules.value.length > 0;
  }
  return true;
};

// Computed property to determine if the Next button should be disabled
const isNextButtonDisabled = computed(() => {
  if (activeParentStep.value === 1) {
    return !validateBasicPropertyInformationStep();
} else if (activeParentStep.value === 2) {
    return !validateDetailedPropertyInformationStep();
  } else if (activeParentStep.value === 3) {
    return !validateAddVisualsStep();
  } else if (activeParentStep.value === 4) {
    return !validateFinalizeListingStep();
  }
  return false;
});
</script>
