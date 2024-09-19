export const convertObjWithRefToObj = (obj: Record<string, Ref>, ignoreKeys: string[] = []) => {
    return Object.fromEntries(
        Object.entries(obj).filter(([key]) => !ignoreKeys.includes(key)).map(([key, value]) => [key, value.value])
    )
}

export const convertObjWithRefToObjNew = (obj) => {
    const unwrappedObj = {} as any;
  
    for (const key in obj) {
      unwrappedObj[key] = obj[key].value // Use unref to get the raw value from ref
    }
  
    return unwrappedObj;
  };