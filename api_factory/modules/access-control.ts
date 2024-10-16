import { GATEWAY_ENDPOINT } from "../axios.config";

export const access_api = {
  $_create_access_module: (payload: any) => {
    const url = '/access-modules/bulk';
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_fetch_access_modules: (metadata: { page: number; perPage: number }, filters: any) => {
    let url = `/access-modules?page=${metadata.page}&perPage=${metadata.perPage}&sort=createdAt:desc`;
    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
      url += `&search=${encodeURIComponent(filters.searchQuery.trim())}`;
    }
  
    return GATEWAY_ENDPOINT.get(url);
  },
  $_update_access_modules: (id: any, payload: any) => {
    let url = `/access-modules/${id}`;  
    return GATEWAY_ENDPOINT.patch(url, payload);
  },
};
