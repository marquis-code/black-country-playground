import { GATEWAY_ENDPOINT } from '../axios.config'
export const notification_api = {
    $_get_notification: (id: string | number, metadata: { page: number; perPage: number }) => {
        let url = `/users/${id}/notifications/in-app`;
        return GATEWAY_ENDPOINT.get(url);
      },
}
