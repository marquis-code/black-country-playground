// import { computed, watchEffect, ref } from 'vue';

// export function useRoomOccupantCount(rooms: Array<any> | null | undefined) {
//   console.log(rooms, 'hmmmmmmmmmmmmmm')
//   // We use a ref to hold the count
//   const occupiedRoomsCount = ref(0);

//   // Watch for changes in the rooms data
//   watchEffect(() => {
//     if (Array.isArray(rooms)) {
//       occupiedRoomsCount.value = rooms.filter(room => room.occupantName !== null || room.occupantName !== "").length;
//     } else {
//       occupiedRoomsCount.value = 0;
//     }
//   });

//   return {
//     occupiedRoomsCount
//   };
// }

import { computed, watchEffect, ref } from 'vue';

export function useRoomOccupantCount(rooms: Array<any> | null | undefined) {
  
  // We use a ref to hold the count
  const occupiedRoomsCount = ref(0);

  // Watch for changes in the rooms data
  watchEffect(() => {
    if (Array.isArray(rooms)) {
      // Check that occupantName is neither null nor an empty string
      occupiedRoomsCount.value = rooms.filter(room => room.occupantName).length;
    } else {
      occupiedRoomsCount.value = 0;
    }
  });

  return {
    occupiedRoomsCount
  };
}
