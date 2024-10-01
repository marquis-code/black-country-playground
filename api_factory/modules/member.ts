import { GATEWAY_ENDPOINT } from '../axios.config'
export const member_api = {
    $_invite_member: (payload: any) => {
        let url = '/invitations'
        return GATEWAY_ENDPOINT.post(url, payload);
      },
}
