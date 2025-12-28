
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Ticket, QrCode, MapPin, Clock } from 'lucide-react';
import { ScreenState } from '../types';

interface BookingScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const BookingScreen: React.FC<BookingScreenProps> = ({ setScreen }) => {
    const [duration, setDuration] = useState(1);
    const [confirmed, setConfirmed] = useState(false);
    const bookingID = "BK-2024-5592";
    const spotNumber = "B-12";

    if (confirmed) {
        return (
            <div className="h-full w-full bg-slate-50 p-8 flex flex-col items-center justify-center text-center animate-fade-in overflow-hidden">
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 shadow-xl border-4 border-white animate-bounce-subtle">
                    <CheckCircle size={40} className="text-emerald-600" />
                </div>
                
                <h2 className="text-3xl font-black text-slate-900 mb-2">تم تأكيد المكان!</h2>
                <p className="text-slate-500 mb-8 font-medium italic">نظام المساعد الذكي قام بحجز الموقف رقم {spotNumber} لكِ.</p>
                
                {/* Modern Ticket Summary */}
                <div className="bg-white rounded-[2.5rem] w-full mb-10 shadow-2xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-5"><Ticket size={80} className="text-indigo-600" /></div>
                    
                    <div className="p-8 pb-4">
                        <div className="flex justify-between items-center mb-6">
                            <div className="text-right">
                                <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">رقم الموقف</p>
                                <p className="text-3xl font-black text-slate-900 tracking-tighter">{spotNumber}</p>
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] font-black text-slate-400 uppercase mb-1">الدور</p>
                                <p className="text-3xl font-black text-slate-900 tracking-tighter">P1</p>
                            </div>
                        </div>

                        <div className="flex justify-between items-center py-4 border-t border-dashed border-slate-200">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-indigo-600" />
                                <span className="text-sm font-bold text-slate-600">المول الرئيسي</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock size={16} className="text-indigo-600" />
                                <span className="text-sm font-bold text-slate-600">{duration} ساعة</span>
                            </div>
                        </div>
                    </div>

                    {/* Barcode Visual for Success Screen */}
                    <div className="bg-slate-50 py-4 flex flex-col items-center border-t border-slate-100">
                        <div className="flex items-end gap-1 mb-2">
                            {[1,3,1,2,4,1,2,5,1,2,3,1,2].map((w, i) => (
                                <div key={i} className="bg-slate-900/40 rounded-full" style={{ width: `${w}px`, height: '20px' }}></div>
                            ))}
                        </div>
                        <p className="font-mono text-[8px] text-slate-400 tracking-[0.4em]">{bookingID}</p>
                    </div>
                </div>

                <div className="space-y-4 w-full">
                    <button 
                        onClick={() => setScreen(ScreenState.DIGITAL_KEY)}
                        className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-lg shadow-[0_20px_40px_rgba(79,70,229,0.3)] flex items-center justify-center gap-3 active:scale-95 transition-all"
                    >
                        <QrCode size={24} />
                        عرض التذكرة والباركود
                    </button>
                    <button onClick={() => setScreen(ScreenState.HOME)} className="text-slate-400 font-bold text-sm">العودة للخريطة</button>
                </div>
            </div>
        );
    }

    return (
        <div className="h-full w-full bg-white flex flex-col">
            <div className="p-6 pt-12 border-b border-gray-50 flex items-center justify-between">
                <h1 className="text-xl font-black text-gray-900">إجراءات الحجز الذكي</h1>
                <button onClick={() => setScreen(ScreenState.HOME)} className="p-2 bg-slate-50 rounded-xl"><ArrowRight size={24} /></button>
            </div>

            <div className="p-6 flex-1 overflow-y-auto">
                <div className="mb-10">
                    <h3 className="font-black text-gray-800 mb-6 text-lg">اختاري مدة الوقوف</h3>
                    <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                        {[1, 2, 4, 8, 24].map(hr => (
                            <button
                                key={hr}
                                onClick={() => setDuration(hr)}
                                className={`flex-shrink-0 w-24 h-28 rounded-3xl border-2 flex flex-col items-center justify-center transition-all ${
                                    duration === hr 
                                    ? 'border-indigo-600 bg-indigo-50 text-indigo-600 shadow-xl scale-105' 
                                    : 'border-gray-50 bg-white text-gray-400'
                                }`}
                            >
                                <span className="text-3xl font-black">{hr}</span>
                                <span className="text-xs font-bold uppercase">{hr > 8 ? 'يوم' : 'ساعة'}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
                    <p className="text-indigo-400 text-[10px] font-black uppercase mb-4 tracking-widest">التكلفة والضريبة</p>
                    <div className="flex justify-between items-end">
                        <div>
                            <p className="text-4xl font-black">{duration * 10} <span className="text-sm font-bold text-indigo-300">ر.س</span></p>
                            <p className="text-xs text-white/40 mt-1">شاملة ضريبة القيمة المضافة</p>
                        </div>
                        <div className="bg-white/10 p-3 rounded-2xl backdrop-blur-md">
                            <CheckCircle size={24} className="text-indigo-400" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8 bg-white border-t border-gray-50">
                <button 
                    onClick={() => setConfirmed(true)}
                    className="w-full bg-indigo-600 text-white py-5 rounded-[1.8rem] font-black text-lg shadow-[0_20px_40px_rgba(79,70,229,0.3)] hover:scale-[1.02] active:scale-95 transition-all"
                >
                    تأكيد الحجز والدفع
                </button>
            </div>
        </div>
    );
};
