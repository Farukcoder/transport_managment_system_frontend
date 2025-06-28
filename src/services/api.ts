import { ApiResponse, Organization, Route, Trip } from '../types';

const API_BASE_URL = '/api/v2';

// Real API service
export const apiService = {
  async getOrganization(): Promise<Organization> {
    const response = await fetch(`${API_BASE_URL}/organizations`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse<Organization> = await response.json();
    return data.data;
  },

  async getRoutes(): Promise<Route[]> {
    const response = await fetch(`${API_BASE_URL}/routes`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse<Route[]> = await response.json();
    return data.data;
  },

  async getTrips(): Promise<Trip[]> {
    const response = await fetch(`${API_BASE_URL}/trips`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse<Trip[]> = await response.json();
    return data.data;
  }
};