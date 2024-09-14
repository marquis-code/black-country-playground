import { GATEWAY_ENDPOINT, GATEWAY_ENDPOINT_V2 } from "../axios.config";

export const property_api = {
  $_create: (payload: any) => {
    const url = "/houses";
    return GATEWAY_ENDPOINT.post(url, payload);
  },
// Modify the API factory
$_fetch_properties: (page = 1, perPage = 20, searchQuery = '') => {
  let url = `/houses?page=${page}&perPage=${perPage}`
  
  // Add search query to the URL if provided
  if (searchQuery) {
      url += `&search=${searchQuery}`
  }

  return GATEWAY_ENDPOINT.get(url)
},

  $_fetch_single_property: (id: string | number) => {
    const url = `/houses/:id`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_fetch_floorings: () => {
    const url = "/house-flooring-types";
    return GATEWAY_ENDPOINT.get(url);
  },
  $_fetch_property_types: () => {
    const url = "/house-types";
    return GATEWAY_ENDPOINT.get(url);
  },
  $_fetch_common_areas: () => {
    const url = "/common-areas";
    return GATEWAY_ENDPOINT.get(url);
  },
};
