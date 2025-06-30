import React from 'react';
import { Bell, AlertCircle, Info, CheckCircle } from 'lucide-react';
import { Notice } from '../types';
import { toBengaliDate } from '../utils/dateUtils';

interface NoticeBoardProps {
  notices: Notice[];
}

const NoticeBoard: React.FC<NoticeBoardProps> = ({ notices }) => {
  // Filter only active notices
  const activeNotices = notices.filter(notice => notice.status === 'active');

  const getNoticeIcon = (index: number) => {
    const icons = [Info, Bell, CheckCircle, AlertCircle];
    const IconComponent = icons[index % icons.length];
    return <IconComponent className="h-5 w-5" />;
  };

  const getNoticeStyles = (index: number) => {
    const baseStyles = "rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl border";
    const styles = [
      `${baseStyles} bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:border-blue-300`,
      `${baseStyles} bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-200 hover:border-emerald-300`,
      `${baseStyles} bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 hover:border-amber-300`,
      `${baseStyles} bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 hover:border-purple-300`
    ];
    return styles[index % styles.length];
  };

  const getIconStyles = (index: number) => {
    const styles = [
      'text-blue-600 bg-blue-100',
      'text-emerald-600 bg-emerald-100',
      'text-amber-600 bg-amber-100',
      'text-purple-600 bg-purple-100'
    ];
    return styles[index % styles.length];
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

        {activeNotices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeNotices.map((notice, index) => (
              <div key={notice.id} className={getNoticeStyles(index)}>
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-xl ${getIconStyles(index)}`}>
                    {getNoticeIcon(index)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{notice.title}</h3>
                      <span className="text-sm text-gray-500 bg-white/50 px-3 py-1 rounded-full">
                        {toBengaliDate(notice.created_at)}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{notice.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Bell className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">কোনো নোটিশ পাওয়া যায়নি</h3>
            <p className="text-gray-600">এই মুহূর্তে কোনো সক্রিয় নোটিশ নেই।</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NoticeBoard;