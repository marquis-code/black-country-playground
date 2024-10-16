import { GATEWAY_ENDPOINT } from "../axios.config";

export const permission_api = {
  $_create_permission: (payload: any) => {
    const url = '/module-permissions';
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_create_permission_bulk: (payload: any) => {
    const url = '/module-permissions';
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_fetch_permissions: () => {
    let url = '/module-permissions';
    return GATEWAY_ENDPOINT.get(url);
  },
  $_create_admin_permission: (payload: any) => {
    const url = '/admin-permissions';
    return GATEWAY_ENDPOINT.post(url, payload);
  },
  $_find_admin_permission: (id: string) => {
    const url = `/admin-permissions?adminRoleId=${id}`;
    return GATEWAY_ENDPOINT.get(url);
  },
};
