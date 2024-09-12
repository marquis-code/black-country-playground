import { GATEWAY_ENDPOINT } from "../axios.config";

export const agents_api = {
  $_fetch_agents: () => {
    const url = `/agents`;
    return GATEWAY_ENDPOINT.get(url);
  }
};
