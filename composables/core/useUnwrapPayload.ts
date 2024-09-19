// composables/useUnwrapPayload.ts
import { unref } from 'vue';

export function useUnwrapPayload() {
  const unwrapPayload = (payload: Record<string, any>) => {
    const unwrappedPayload: Record<string, any> = {};

    const unwrapValue = (value: any): any => {
      if (Array.isArray(value)) {
        // If the value is an array, unwrap each element
        return value.map(item => unwrapValue(unref(item)));
      } else if (value !== null && typeof value === 'object') {
        // If the value is an object, unwrap its properties
        const unwrappedObject: Record<string, any> = {};
        for (const key in value) {
          unwrappedObject[key] = unwrapValue(unref(value[key]));
        }
        return unwrappedObject;
      } else {
        // If it's a primitive value, return it directly
        return unref(value);
      }
    };

    for (const key in payload) {
      if (payload.hasOwnProperty(key)) {
        unwrappedPayload[key] = unwrapValue(payload[key]);
      }
    }

    return unwrappedPayload;
  };

  return { unwrapPayload };
}
