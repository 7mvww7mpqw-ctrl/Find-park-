
import React, { useState, useEffect } from 'react';
import { X, Lock, Unlock, QrCode, Wifi, ShieldCheck, MapPin, Calendar, Clock, Info, Timer, Camera, AlertTriangle, ChevronRight } from 'lucide-react';
import { ScreenState } from '../types';

interface DigitalKeyScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const DigitalKeyScreen: React.FC<DigitalKeyScreenProps> = ({ setScreen }) => {
    const [isUnlocked, setIsUnlocked] = useState(false);
    const [isReporting, setIsReporting] = useState(false);
    const [timeLeft, setTimeLeft] = useState("01:59:54");
    const bookingID = "BK-2024-5592";
    const spotNumber = "B-12";

    const toggleLock = () => {
        setIsUnlocked(true);
        setTimeout(() => setIsUnlocked(false), 3000);
    };

    const handleReport = () => {
        setIsReporting(true);
        setTimeout(() => setIsReporting(false), 3000);
    };

    return (
        <div className="h-full w-full bg-slate-100 flex flex-col p-8 relative overflow-y-auto no-scrollbar">
            {/* Header */}
            <div className="relative z-10 flex justify-between items-center mb-8 pt-6">
                <button onClick={() => setScreen(ScreenState.HOME)} className="p-3 bg-white rounded-2xl shadow-sm border border-slate-200 hover:bg-slate-50 active:scale-90 transition-all">
                    <X size={24} className="text-slate-900" />
                </button>
                <div className="bg-indigo-600 px-5 py-2.5 rounded-full shadow-lg shadow-indigo-200 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">تذكرة ذكية نشطة</span>
                </div>
            </div>

            {/* The Smart Ticket */}
            <div className="relative animate-slide-up mb-8">
                {/* Upper Part */}
                <div className="bg-white rounded-t-[3rem] p-8 border-x border-t border-slate-200 relative overflow-hidden shadow-sm">
                    {/* Visual Cutouts on sides */}
                    <div className="absolute -left-4 top-[80%] w-8 h-8 bg-slate-100 rounded-full border border-slate-200 z-10"></div>
                    <div className="absolute -right-4 top-[80%] w-8 h-8 bg-slate-100 rounded-full border border-slate-200 z-10"></div>
                    
                    <div className="relative z-10 flex justify-between items-start mb-10">
                        <div>
                            <h2 className="text-2xl font-black text-slate-900 tracking-tighter mb-1">تذكرة الركن</h2>
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{bookingID}</p>
                        </div>
                        <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl border-b-4 border-slate-950">
                            <QrCode size={32} />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-y-10 relative z-10 mb-8">
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">الموقف المحجوز</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-sm shadow-lg shadow-indigo-100">P1</div>
                                <span className="text-3xl font-black text-slate-900 tracking-tighter">{spotNumber}</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-2 tracking-widest">الوقت المتبقي</p>
                            <div className="flex items-center gap-2">
                                <Timer size={20} className="text-rose-500" />
                                <span className="text-xl font-black text-rose-500 tracking-tighter">{timeLeft}</span>
                            </div>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">الموقع الميداني</p>
                            <p className="text-sm font-black text-slate-800 flex items-center gap-1"><MapPin size={14} className="text-indigo-600" /> المول - بوابة A</p>
                        </div>
                        <div>
                            <p className="text-[10px] font-black text-slate-400 uppercase mb-1 tracking-widest">نظام الحساس</p>
                            <p className="text-sm font-black text-slate-800 flex items-center gap-1 font-mono tracking-tighter">IOT-M1-ACTIVE</p>
                        </div>
                    </div>

                    {/* Dotted Divider */}
                    <div className="relative h-px w-full border-t-2 border-dashed border-slate-200 my-6"></div>

                    {/* High-Fidelity BARCODE (Essential for User Feedback) */}
                    <div className="py-6 flex flex-col items-center">
                        <div className="flex items-end gap-[3px] mb-4 h-20 px-4 w-full justify-center">
                            {[1, 3, 1, 4, 1, 2, 5, 1, 2, 3, 1, 4, 2, 1, 5, 1, 2, 3, 1, 2].map((w, i) => (
                                <div key={i} className="bg-slate-900 rounded-sm shadow-sm" style={{ width: `${w * 1.5}px`, height: '100%' }}></div>
                            ))}
                        </div>
                        <p className="font-mono text-[11px] font-black text-slate-900 tracking-[0.7em]">{bookingID}</p>
                    </div>
                </div>

                {/* Bottom Part (Action Area) */}
                <div className="bg-indigo-600 rounded-b-[3rem] p-8 shadow-2xl shadow-indigo-200 border-x border-b border-indigo-700">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-2 text-white/90">
                            <ShieldCheck size={18} />
                            <span className="text-xs font-black uppercase tracking-widest">Smart Lock Active</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Wifi size={14} className="text-emerald-400 animate-pulse" />
                            <span className="text-[10px] font-black text-white/60">CONNECTED</span>
                        </div>
                    </div>
                    
                    <button 
                        onClick={toggleLock}
                        className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-xl border-b-4 ${
                            isUnlocked 
                            ? 'bg-emerald-500 text-white border-emerald-700' 
                            : 'bg-white text-indigo-600 border-slate-200'
                        }`}
                    >
                        {isUnlocked ? <Unlock size={24} /> : <Lock size={24} />}
                        {isUnlocked ? 'البوابة مفتوحة' : 'افتحي البوابة الذكية'}
                    </button>
                    <p className="text-center text-white/40 text-[8px] font-black mt-4 tracking-widest uppercase">AES-256 SENSOR ENCRYPTION</p>
                </div>
            </div>

            {/* Violation Reporting Section (Requested Feature) */}
            <div className="space-y-4 mb-12">
                <button 
                    onClick={handleReport}
                    className="w-full bg-white p-6 rounded-[2.5rem] border-2 border-slate-200 flex items-center justify-between group active:scale-95 transition-all shadow-sm"
                >
                    <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500 group-hover:bg-rose-100 transition-colors">
                            {isReporting ? <AlertTriangle size={28} className="animate-ping" /> : <Camera size={28} />}
                        </div>
                        <div className="text-right">
                            <h4 className="text-sm font-black text-slate-900 uppercase tracking-tighter">تبليغ عن مخالفة</h4>
                            <p className="text-[10px] text-slate-400 font-bold mt-1 leading-none">في حال وجود سيارة أخرى في موقفك المحجوز</p>
                        </div>
                    </div>
                    <ChevronRight size={20} className="text-slate-300" />
                </button>

                <div className="bg-white/50 border border-slate-200 rounded-[2rem] p-6 flex items-center gap-4">
                    <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                        <Info size={20} />
                    </div>
                    <p className="text-[10px] font-bold text-slate-500 leading-relaxed italic">
                        تذكري: حجزك محمي برقم اللوحة {bookingID}. النظام سيقوم بتصوير المخالف آلياً عند البوابة.
                    </p>
                </div>
            </div>
            
            <div className="pb-8 text-center opacity-20">
                <p className="text-[8px] font-black uppercase tracking-[0.4em] text-slate-900">FindPark Digital Ecosystem v3.1</p>
            </div>
        </div>
    );
};
