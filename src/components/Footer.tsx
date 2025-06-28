import React from 'react';
import { Bus, MapPin, Phone, Mail, Clock } from 'lucide-react';

interface FooterProps {
  organizationName: string;
  organizationAddress: string;
}

const Footer: React.FC<FooterProps> = ({ organizationName, organizationAddress }) => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-gradient-to-br from-blue-400 to-teal-400 p-2 rounded-lg">
                  <Bus className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                    {organizationName}
                  </h3>
                  <p className="text-sm text-blue-200">পরিবহন তথ্য সিস্টেম</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                আমাদের আধুনিক এবং নির্ভরযোগ্য পরিবহন ব্যবস্থাপনা সিস্টেমের মাধ্যমে সহজে এবং দ্রুত আপনার প্রয়োজনীয় সকল তথ্য পান। আমরা ২৪/৭ আপনার সেবায় নিয়োজিত।
              </p>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-1 flex-shrink-0" />
                <p className="text-blue-100">{organizationAddress}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">দ্রুত লিংক</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#notice" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    নোটিশ বোর্ড
                  </a>
                </li>
                <li>
                  <a href="#routes" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    রুট তালিকা
                  </a>
                </li>
                <li>
                  <a href="#trips" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    ট্রিপ তথ্য
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    সহায়তা
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Hours */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">যোগাযোগ</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-teal-400" />
                  <div>
                    <p className="text-blue-100">+৮৮ ০১৭ XXXX XXXX</p>
                    <p className="text-sm text-blue-300">হটলাইন</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-teal-400" />
                  <div>
                    <p className="text-blue-100">transport@university.edu.bd</p>
                    <p className="text-sm text-blue-300">ইমেইল</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-teal-400 mt-1" />
                  <div>
                    <p className="text-blue-100">সকাল ৮:০০ - রাত ৮:০০</p>
                    <p className="text-sm text-blue-300">সেবার সময়</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-blue-500/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-200 text-sm mb-4 md:mb-0">
              © ২০২৫ {organizationName} - সর্বস্বত্ব সংরক্ষিত
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                গোপনীয়তার নীতি
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                ব্যবহারের শর্তাবলী
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                সহায়তা
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;