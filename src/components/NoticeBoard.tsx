import React from 'react';
import { Bell, AlertCircle, Info, CheckCircle } from 'lucide-react';

const NoticeBoard: React.FC = () => {
  // Sample notices data
  const notices = [
    {
      id: 1,
      title: 'নতুন রুট চালু',
      content: 'আগামী সপ্তাহ থেকে ঢাকা-চট্টগ্রাম নতুন এক্সপ্রেস রুট চালু হবে।',
      type: 'info',
      date: '২৮-০৬-২০২৫',
      priority: 'high'
    },
    {
      id: 2,
      title: 'সেবা বন্ধ',
      content: 'রক্ষণাবেক্ষণের জন্য আগামী শুক্রবার সিলেট রুট বন্ধ থাকবে।',
      type: 'warning',
      date: '২৭-০৬-২০২৫',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'নতুন বাস যোগ',
      content: 'আমাদের বহরে আরও ৫টি নতুন এসি বাস যুক্ত হয়েছে।',
      type: 'success',
      date: '২৬-০৬-২০২৫',
      priority: 'low'
    },
    {
      id: 4,
      title: 'জরুরি ঘোষণা',
      content: 'আবহাওয়ার কারণে আজ সকল পাহাড়ি রুটে যাত্রা স্থগিত।',
      type: 'alert',
      date: '২৮-০৬-২০২৫',
      priority: 'high'
    }
  ];

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertCircle className="h-5 w-5" />;
      case 'success':
        return <CheckCircle className="h-5 w-5" />;
      case 'alert':
        return <Bell className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getNoticeStyles = (type: string, priority: string) => {
    const baseStyles = "rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl border";
    
    switch (type) {
      case 'warning':
        return `${baseStyles} bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300`;
      case 'success':
        return `${baseStyles} bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-300`;
      case 'alert':
        return `${baseStyles} bg-gradient-to-br from-red-50 to-pink-50 border-red-200 hover:border-red-300`;
      default:
        return `${baseStyles} bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-300`;
    }
  };

  const getIconStyles = (type: string) => {
    switch (type) {
      case 'warning':
        return 'text-amber-600 bg-amber-100';
      case 'success':
        return 'text-emerald-600 bg-emerald-100';
      case 'alert':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <section id="notice" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            গুরুত্বপূর্ণ <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">নোটিশসমূহ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            সর্বশেষ আপডেট এবং গুরুত্বপূর্ণ ঘোষণাসমূহ এখানে দেখুন
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {notices.map((notice) => (
            <div key={notice.id} className={getNoticeStyles(notice.type, notice.priority)}>
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${getIconStyles(notice.type)}`}>
                  {getNoticeIcon(notice.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{notice.title}</h3>
                    <span className="text-sm text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                      {notice.date}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{notice.content}</p>
                  {notice.priority === 'high' && (
                    <div className="mt-3">
                      <span className="bg-red-100 text-red-800 text-xs font-medium px-3 py-1 rounded-full">
                        জরুরি
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NoticeBoard;