import { GATEWAY_ENDPOINT } from "../axios.config";

export const roles_api = {
  $_create_role: (payload: any) => {
    const url = '/admins/roles';
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_update_role: (id: string, payload: any) => {
    const url = `/module-permissions/${id}`;
    return GATEWAY_ENDPOINT.patch(url, payload);
  },
  $_fetch_roles: (filters: any) => {
    let url = `/admins/roles`;
    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
      url += `&search=${encodeURIComponent(filters.searchQuery.trim())}`;
    }
    return GATEWAY_ENDPOINT.get(url);
  },
  $_delete_role: (id: string) => {
    const url = `/admins/roles/${id}`;
    return GATEWAY_ENDPOINT.delete(url);
  },
  $_find_admin_by_role: (id: string, filters: any) => {
    let url = `/roles/${id}/admins`;
    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
      url += `&search=${encodeURIComponent(filters.searchQuery.trim())}`;
    }
    return GATEWAY_ENDPOINT.get(url);
  },
};
