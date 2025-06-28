export interface Organization {
  id: number;
  org_code: number;
  name: string;
  address: string;
  org_type: string;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface Route {
  id: number;
  org_code: number;
  title: string;
  details: string;
  status: 'active' | 'inactive';
  created_by: number;
  updated_by?: number;
  deleted_by?: number;
  created_at: string;
  updated_at: string;
}

export interface Trip {
  id: number;
  org_code: number;
  route_id: number;
  route_name: string;
  driver_id: number;
  driver_name: string;
  vehicle_id: number;
  vehicle_registration_number: string;
  start_location: string;
  destination: string;
  start_time: string;
  end_time?: string;
  distance_km?: string;
  purpose: string;
  fuel_cost: string;
  total_cost: string;
  is_locked: boolean;
  trip_initiate_date: string;
  status: 'completed' | 'initiate' | 'reject';
  reject_reason?: string;
  created_at: string;
  created_by: number;
  updated_at: string;
  updated_by?: number;
  deleted_at?: string;
}

export interface ApiResponse<T> {
  status: string;
  message: string;
  data: T;
}