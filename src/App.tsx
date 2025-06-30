import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import NoticeBoard from './components/NoticeBoard';
import RoutesList from './components/RoutesList';
import TripsList from './components/TripsList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { apiService } from './services/api';
import { Organization, Route, Trip, Notice } from './types';

function App() {
  const [organization, setOrganization] = useState<Organization | null>(null);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [trips, setTrips] = useState<Trip[]>([]);
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('notice');
  const [selectedRouteId, setSelectedRouteId] = useState<number | undefined>();
  const [selectedRouteName, setSelectedRouteName] = useState<string | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [orgData, routesData, tripsData, noticesData] = await Promise.all([
          apiService.getOrganization(),
          apiService.getRoutes(),
          apiService.getTrips(),
          apiService.getNotices()
        ]);

        setOrganization(orgData);
        setRoutes(routesData);
        setTrips(tripsData);
        setNotices(noticesData);
        setError(null);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('ডেটা লোড করতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNavigation = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleRouteSelect = (routeId: number, routeName: string) => {
    setSelectedRouteId(routeId);
    setSelectedRouteName(routeName);
    setActiveSection('trips');
    const element = document.getElementById('trips');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-white text-lg">ডেটা লোড হচ্ছে...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">সমস্যা হয়েছে</h3>
          <p className="text-blue-200 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors"
          >
            পুনরায় চেষ্টা করুন
          </button>
        </div>
      </div>
    );
  }

  if (!organization) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
        <div className="text-center text-white">
          <p>সংস্থার তথ্য পাওয়া যায়নি।</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        organizationName={organization.name}
        onNavigate={handleNavigation}
        activeSection={activeSection}
      />
      
      <Hero organizationName={organization.name} />
      
      <NoticeBoard notices={notices} />
      
      <RoutesList 
        routes={routes}
        onRouteSelect={handleRouteSelect}
        selectedRouteId={selectedRouteId}
      />
      
      <TripsList 
        trips={trips}
        selectedRouteId={selectedRouteId}
        selectedRouteName={selectedRouteName}
      />
      
      <ContactForm orgCode={organization.org_code} />
      
      <Footer 
        organizationName={organization.name}
        organizationAddress={organization.address}
      />
    </div>
  );
}

export default App;