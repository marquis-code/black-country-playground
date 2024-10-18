// import { onMounted, onUnmounted, ref } from 'vue'

// export const useUnsavedChangesWarning = () => {
//   const unsavedChanges = ref(false)

//   const enableUnsavedChangesWarning = () => {
//     unsavedChanges.value = true
//   }

//   const disableUnsavedChangesWarning = () => {
//     unsavedChanges.value = false
//   }

//   const handleBeforeUnload = (event: BeforeUnloadEvent) => {
//     if (unsavedChanges.value) {
//       // Show a custom alert to the user before the page is refreshed
//       const confirmation = window.confirm('Refreshing the page will lead to loss of changes. Do you want to proceed?')
//       if (!confirmation) {
//         event.preventDefault()
//         event.returnValue = ''
//         return ''
//       }
//     }
//   }

//   onMounted(() => {
//     // Add the beforeunload event listener to the window when the component is mounted
//     window.addEventListener('beforeunload', handleBeforeUnload)
//   })

//   onUnmounted(() => {
//     // Clean up the event listener when the component is unmounted
//     window.removeEventListener('beforeunload', handleBeforeUnload)
//   })

//   return {
//     enableUnsavedChangesWarning,
//     disableUnsavedChangesWarning,
//   }
// }

import { onMounted, onUnmounted, ref } from 'vue'

export const useUnsavedChangesWarning = () => {
  const unsavedChanges = ref(false)
  const showModal = ref(false)

  const enableUnsavedChangesWarning = () => {
    unsavedChanges.value = true
  }

  const disableUnsavedChangesWarning = () => {
    unsavedChanges.value = false
  }

  const confirmNavigation = () => {
    showModal.value = true
  }

  const handleBeforeUnload = (event: BeforeUnloadEvent) => {
    if (unsavedChanges.value) {
      event.preventDefault()
      event.returnValue = '' // Required for modern browsers
      confirmNavigation()
    }
  }

  onMounted(() => {
    // Add the beforeunload event listener to the window when the component is mounted
    window.addEventListener('beforeunload', handleBeforeUnload)
  })

  onUnmounted(() => {
    // Clean up the event listener when the component is unmounted
    window.removeEventListener('beforeunload', handleBeforeUnload)
  })

  return {
    enableUnsavedChangesWarning,
    disableUnsavedChangesWarning,
    showModal, // Modal control state
  }
}
