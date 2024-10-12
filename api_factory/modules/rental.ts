import { GATEWAY_ENDPOINT } from "../axios.config";

export const rental_api = {
  $_fetch_rentals: (id: string | number, metadata: { page: number; perPage: number }, filters: any) => {
    let url = `/rental-applications?page=${metadata.page}&perPage=${metadata.perPage}`;
  
    // Check if search query exists and add it to the URL
    if (filters.searchQuery && filters.searchQuery.trim() !== "") {
      url += `&search=${encodeURIComponent(filters.searchQuery.trim())}`;
    }
  
    // Add other filters to the URL
    if (filters.isPublished !== null) { // Check if isPublished is not null
      url += `&isPublished=${filters.isPublished}`;
    }
    if (filters.fromDate) {
      url += `&fromDate=${encodeURIComponent(filters.fromDate)}`;
    }
    if (filters.toDate) {
      url += `&toDate=${encodeURIComponent(filters.toDate)}`;
    }
    if (filters.agentId) {
      url += `&agentId=${encodeURIComponent(filters.agentId)}`;
    }
  
    return GATEWAY_ENDPOINT.get(url);
  },
  

  $_fetch_single_rental: (id: string | number) => {
    const url = `/rental-applications/${id}`;
    return GATEWAY_ENDPOINT.get(url);
  },
  $_cancel_rental_application: (id: string | number, payload: any) => {
    const url = `/rental-applications/${id}/declined`;
    return GATEWAY_ENDPOINT.patch(url, payload);
  },
  $_approve_rental_application: (id: string | number, payload: any) => {
    const url = `/rental-applications/${id}/approved`;
    return GATEWAY_ENDPOINT.patch(url, payload);
  },
};