// // export function useConvertPayload() {
// //     /**
// //      * Converts a payload with refs to a plain object.
// //      * @param payload An object containing Vue refs.
// //      * @returns A plain object with unwrapped values.
// //      */
// //     const convertPayloadToObject = (payload: Record<string, any>): Record<string, any> => {
// //       const plainObject: Record<string, any> = {};
  
// //       Object.keys(payload).forEach(key => {
// //         plainObject[key] = unref(payload[key]); // Unwrap the value
// //       });
  
// //       return plainObject;
// //     };
  
// //     return { convertPayloadToObject };
// //   }

// export const convertObjWithRefToObj = (obj: Record<string, Ref>, ignoreKeys: string[] = []) => {
//     return Object.fromEntries(
//         Object.entries(obj).filter(([key]) => !ignoreKeys.includes(key)).map(([key, value]) => [key, value.value])
//     )
// }

import { unref } from 'vue';

export function convertObjWithRefToObj(obj: Record<string, any>): Record<string, any> {
  const plainObject: Record<string, any> = {};

  Object.keys(obj).forEach(key => {
    plainObject[key] = unref(obj[key]); // Unwrap the value
  });

  return plainObject;
}
