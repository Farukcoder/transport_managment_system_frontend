import React from 'react';
import { MapPin, Route, Clock } from 'lucide-react';

interface HeroProps {
  organizationName: string;
}

const Hero: React.FC<HeroProps> = ({ organizationName }) => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-300 via-teal-300 to-blue-300 bg-clip-text text-transparent">
              {organizationName}
            </span>
            <br />
            <span className="text-2xl md:text-3xl lg:text-4xl text-blue-100 font-normal">
              পরিবহন ব্যবস্থাপনা
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-200 mb-12 max-w-3xl mx-auto leading-relaxed">
            আধুনিক এবং নির্ভরযোগ্য পরিবহন ব্যবস্থাপনা। সহজে খুঁজে নিন ট্রিপের বিবরণ, রুটের তালিকা এবং গুরুত্বপূর্ণ নোটিশসমূহ।
          </p>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-400 to-teal-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Route className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">স্মার্ট রুট ম্যানেজমেন্ট</h3>
              <p className="text-blue-200 text-sm">সকল রুটের বিস্তারিত তথ্য এবং রিয়েল-টাইম আপডেট</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-teal-400 to-blue-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">লাইভ ট্র্যাকিং</h3>
              <p className="text-blue-200 text-sm">যাত্রার শুরু থেকে শেষ পর্যন্ত সম্পূর্ণ তথ্য</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-400 to-purple-400 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">২৪/৭ সেবা</h3>
              <p className="text-blue-200 text-sm">যেকোনো সময় প্রয়োজনীয় তথ্য এবং সহায়তা</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;