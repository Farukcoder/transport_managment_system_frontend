import { ApiResponse, Organization, Route, Trip, Notice, ContactRequest } from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v2';

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
  },

  async getNotices(): Promise<Notice[]> {
    const response = await fetch(`${API_BASE_URL}/notices`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: ApiResponse<Notice[]> = await response.json();
    return data.data;
  },

  async submitContact(contactData: ContactRequest): Promise<any> {
    const response = await fetch(`${API_BASE_URL}/contacts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  }
};