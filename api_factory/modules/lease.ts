import { GATEWAY_ENDPOINT } from '../axios.config'
export const lease_api = {
      $_fetch_lease_template: () => {
        let url = '/admins/lease-agreement-templates';
        return GATEWAY_ENDPOINT.get(url);
      },
      $_update_lease_template: (id: any, payload: any) => {
        const url = `/admins/lease-agreement-templates/${id}`;
        return GATEWAY_ENDPOINT.patch(url, payload);
      },
      $_delete_lease_template: (id: string | number) => {
        const url = `/admins/lease-agreement-templates/${id}`;
        return GATEWAY_ENDPOINT.delete(url);
      },
      $_create_lease_template: (payload: any) => {
        const url = `/admins/lease-agreement-templates`;
        return GATEWAY_ENDPOINT.post(url, payload);
      },
}
