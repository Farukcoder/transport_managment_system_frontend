import React, { useState } from 'react';
import { Trip } from '../types';
import { MapPin, User, Car, Calendar, Clock, DollarSign, Filter, Search } from 'lucide-react';
import { toBengaliDate, toBengaliNumber } from '../utils/dateUtils';

interface TripsListProps {
  trips: Trip[];
  selectedRouteId?: number;
  selectedRouteName?: string;
}

const TripsList: React.FC<TripsListProps> = ({ trips, selectedRouteId, selectedRouteName }) => {
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTrips = trips.filter(trip => {
    const matchesRoute = !selectedRouteId || trip.route_id === selectedRouteId;
    const matchesStatus = statusFilter === 'all' || trip.status === statusFilter;
    const matchesSearch = searchTerm === '' || 
      trip.start_location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.driver_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      trip.purpose.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesRoute && matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return (
          <span className="bg-emerald-100 text-emerald-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
            <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
            সম্পন্ন
          </span>
        );
      case 'initiate':
        return (
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            চালু
          </span>
        );
      default:
        return (
          <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
            বাতিল
          </span>
        );
    }
  };

  return (
    <section id="trips" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            ট্রিপ <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">তথ্য</span>
          </h2>
          {selectedRouteId && selectedRouteName && (
            <div className="bg-blue-100 text-blue-800 inline-flex items-center px-6 py-2 rounded-full text-lg font-medium mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              নির্বাচিত রুট: {selectedRouteName}
            </div>
          )}
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            সকল ট্রিপের বিস্তারিত তথ্য এবং স্ট্যাটাস দেখুন
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="স্থান, ড্রাইভার বা উদ্দেশ্য খুঁজুন..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="md:w-48">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white"
                >
                  <option value="all">সকল স্ট্যাটাস</option>
                  <option value="completed">সম্পন্ন</option>
                  <option value="initiate">চালু</option>
                  <option value="reject">বাতিল</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Trips Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredTrips.map((trip) => (
            <div key={trip.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">ট্রিপ #{toBengaliNumber(trip.id)}</h3>
                  {getStatusBadge(trip.status)}
                </div>
                <div className="flex items-center space-x-4 text-blue-100">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">{trip.route_name}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span className="text-sm">{toBengaliDate(trip.trip_initiate_date)}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Route Information */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center text-gray-700 mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="font-medium">শুরু:</span>
                        <span className="ml-2">{trip.start_location}</span>
                      </div>
                      <div className="flex items-center text-gray-700">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="font-medium">গন্তব্য:</span>
                        <span className="ml-2">{trip.destination}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trip Details Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center text-gray-600 mb-1">
                      <User className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">ড্রাইভার</span>
                    </div>
                    <p className="font-semibold text-gray-900">{trip.driver_name}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl">
                    <div className="flex items-center text-gray-600 mb-1">
                      <Car className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">গাড়ি</span>
                    </div>
                    <p className="font-semibold text-gray-900">{trip.vehicle_registration_number}</p>
                  </div>

                  {trip.distance_km && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center text-gray-600 mb-1">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">দূরত্ব</span>
                      </div>
                      <p className="font-semibold text-gray-900">{toBengaliNumber(trip.distance_km)} কিমি</p>
                    </div>
                  )}

                  {trip.total_cost !== '0.00' && (
                    <div className="bg-gray-50 p-4 rounded-xl">
                      <div className="flex items-center text-gray-600 mb-1">
                        <DollarSign className="h-4 w-4 mr-2" />
                        <span className="text-sm font-medium">মোট খরচ</span>
                      </div>
                      <p className="font-semibold text-gray-900">৳{toBengaliNumber(trip.total_cost)}</p>
                    </div>
                  )}
                </div>

                {/* Purpose */}
                <div className="bg-blue-50 p-4 rounded-xl mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">উদ্দেশ্য:</h4>
                  <p className="text-gray-700">{trip.purpose}</p>
                </div>

                {/* Time Information */}
                {trip.start_time && (
                  <div className="flex items-center justify-between text-sm text-gray-600 border-t pt-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>শুরু: {new Date(trip.start_time).toLocaleTimeString('bn-BD')}</span>
                    </div>
                    {trip.end_time && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>শেষ: {new Date(trip.end_time).toLocaleTimeString('bn-BD')}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Rejection Reason */}
                {trip.status === 'reject' && trip.reject_reason && (
                  <div className="mt-4 bg-red-50 border border-red-200 p-4 rounded-xl">
                    <h4 className="font-medium text-red-900 mb-2">বাতিলের কারণ:</h4>
                    <p className="text-red-700 text-sm">{trip.reject_reason}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredTrips.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Car className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">কোনো ট্রিপ পাওয়া যায়নি</h3>
            <p className="text-gray-600">নির্বাচিত ফিল্টার অনুযায়ী কোনো ট্রিপ নেই।</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TripsList;