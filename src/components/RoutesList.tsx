import React from 'react';
import { Route, MapPin, ArrowRight, Clock, CheckCircle, XCircle } from 'lucide-react';

interface RoutesListProps {
  routes: Route[];
  onRouteSelect: (routeId: number, routeName: string) => void;
  selectedRouteId?: number;
}

const RoutesList: React.FC<RoutesListProps> = ({ routes, onRouteSelect, selectedRouteId }) => {
  return (
    <section id="routes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">রুটসমূহ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            আমাদের নেটওয়ার্কের সকল রুট এবং গন্তব্যের তালিকা দেখুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {routes.map((route) => (
            <div
              key={route.id}
              onClick={() => onRouteSelect(route.id, route.title)}
              className={`group cursor-pointer transition-all duration-300 ${
                selectedRouteId === route.id
                  ? 'transform scale-105'
                  : 'hover:transform hover:scale-105'
              }`}
            >
              <div className={`bg-white rounded-2xl shadow-lg border-2 p-6 h-full transition-all duration-300 ${
                selectedRouteId === route.id
                  ? 'border-blue-500 shadow-2xl bg-gradient-to-br from-blue-50 to-teal-50'
                  : 'border-gray-200 hover:border-blue-300 hover:shadow-xl group-hover:bg-gradient-to-br group-hover:from-gray-50 group-hover:to-blue-50'
              }`}>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl transition-colors duration-300 ${
                    selectedRouteId === route.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white'
                  }`}>
                    <Route className="h-6 w-6" />
                  </div>
                  <div className="flex items-center space-x-2">
                    {route.status === 'active' ? (
                      <div className="flex items-center space-x-1 text-emerald-600">
                        <CheckCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">সক্রিয়</span>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1 text-red-500">
                        <XCircle className="h-4 w-4" />
                        <span className="text-sm font-medium">নিষ্ক্রিয়</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Route Info */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {route.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {route.details}
                  </p>
                </div>

                {/* Route Code */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg border">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>রুট কোড: </span>
                    <span className="font-mono font-bold text-blue-600 ml-1">#{route.id}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">ট্রিপ তথ্য দেখুন</span>
                  <div className={`flex items-center transition-all duration-300 ${
                    selectedRouteId === route.id
                      ? 'text-blue-600 transform translate-x-1'
                      : 'text-blue-500 group-hover:text-blue-600 group-hover:transform group-hover:translate-x-1'
                  }`}>
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {routes.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Route className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">কোনো রুট পাওয়া যায়নি</h3>
            <p className="text-gray-600">এই মুহূর্তে কোনো রুট নেই।</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default RoutesList;