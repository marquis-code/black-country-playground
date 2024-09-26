// composables/useIsEmptyObject.ts
import { computed } from 'vue'

export function useIsEmptyObject(obj: Record<string, any>) {
  // Computed property to check if the object is empty
  const isEmpty = computed(() => {
    return Object.keys(obj).length === 0 && obj.constructor === Object
  })

  return {
    isEmpty,
  }
}
