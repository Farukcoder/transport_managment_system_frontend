import React from 'react';
import { Bus, Menu, X } from 'lucide-react';

interface HeaderProps {
  organizationName: string;
  onNavigate: (section: string) => void;
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ organizationName, onNavigate, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navItems = [
    { id: 'notice', label: 'নোটিশ বোর্ড' },
    { id: 'routes', label: 'রুট তালিকা' },
    { id: 'trips', label: 'ট্রিপ তথ্য' },
    { id: 'contact', label: 'যোগাযোগ' },
  ];

  const handleLogin = () => {
    const loginUrl = import.meta.env.VITE_LOGIN_URL || 'http://localhost:8080/login';
    window.location.href = loginUrl;
  };

  return (
    <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white sticky top-0 z-50 backdrop-blur-sm border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-400 to-teal-400 p-2 rounded-lg">
              <Bus className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                {organizationName}
              </h1>
              <p className="text-xs text-blue-200">পরিবহন তথ্য সিস্টেম</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === item.id
                    ? 'bg-blue-500/30 text-blue-200 shadow-lg'
                    : 'text-blue-100 hover:text-white hover:bg-blue-500/20'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button 
              onClick={handleLogin}
              className="bg-gradient-to-r from-teal-500 to-blue-500 px-4 py-2 rounded-lg font-medium hover:from-teal-600 hover:to-blue-600 transition-all duration-300 shadow-lg"
            >
              লগইন
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-blue-500/20 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-500/20">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-blue-500/30 text-blue-200'
                      : 'text-blue-100 hover:bg-blue-500/20'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleLogin}
                className="text-left px-4 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg font-medium"
              >
                লগইন
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;