import React from 'react';
import { User, Award, History, CreditCard, ChevronLeft, Star } from 'lucide-react';
import { MOCK_USER } from '../constants';

export const ProfileScreen: React.FC = () => {
    return (
        <div className="h-full w-full bg-gray-50 overflow-y-auto pb-24 p-6">
            <div className="flex items-center justify-between mb-8 pt-4">
                <h1 className="text-2xl font-bold text-gray-800">حسابي</h1>
            </div>

            {/* Header Card */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-6 text-white shadow-xl mb-6 relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-white/10 rounded-full transform translate-x-10 -translate-y-10"></div>
                
                <div className="flex items-center gap-4 mb-6 relative z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center border-2 border-white/30">
                        <User size={32} />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">{MOCK_USER.name}</h2>
                        <p className="text-blue-100 text-sm dir-ltr text-right">{MOCK_USER.phone}</p>
                    </div>
                </div>

                <div className="flex justify-between items-center bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
                    <div className="text-center">
                        <p className="text-xs text-blue-200 mb-1">النقاط</p>
                        <p className="text-xl font-bold">{MOCK_USER.points}</p>
                    </div>
                    <div className="h-8 w-px bg-white/20"></div>
                    <div className="text-center">
                        <p className="text-xs text-blue-200 mb-1">المستوى</p>
                        <p className="text-xl font-bold flex items-center gap-1">
                            ذهبي <Award size={16} className="text-yellow-400" />
                        </p>
                    </div>
                </div>
            </div>

            {/* Vehicle Info */}
            <h3 className="text-lg font-bold text-gray-800 mb-3">سيارتي</h3>
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="bg-gray-100 p-3 rounded-xl">
                        <CreditCard size={24} className="text-gray-600" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-800">{MOCK_USER.carModel}</p>
                        <p className="text-xs text-gray-500">{MOCK_USER.plateNumber}</p>
                    </div>
                </div>
                <button className="text-blue-600 text-sm font-bold">تعديل</button>
            </div>

            {/* History */}
            <h3 className="text-lg font-bold text-gray-800 mb-3">آخر النشاطات</h3>
            <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-green-50 p-2 rounded-lg">
                                <History size={20} className="text-green-600" />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 text-sm">مواقف المول الرئيسي</p>
                                <p className="text-xs text-gray-400">أمس، 04:30 م</p>
                            </div>
                        </div>
                        <div className="flex flex-col items-end">
                            <span className="text-xs font-bold text-gray-800">5.00 ر.س</span>
                            <div className="flex text-yellow-400 mt-1">
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                                <Star size={10} fill="currentColor" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="w-full mt-8 border border-red-100 text-red-500 py-3 rounded-xl font-medium hover:bg-red-50 transition-colors">
                تسجيل الخروج
            </button>
        </div>
    );
};