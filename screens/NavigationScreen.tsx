
import React, { useEffect, useState } from 'react';
import { Navigation, X, Mic, MapPin, Wind, AlertCircle } from 'lucide-react';
import { ScreenState } from '../types';

interface NavigationScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const NavigationScreen: React.FC<NavigationScreenProps> = ({ setScreen }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setScreen(ScreenState.RATING), 1500);
                    return 100;
                }
                return prev + 1.5;
            });
        }, 100);
        return () => clearInterval(interval);
    }, [setScreen]);

    return (
        <div className="h-full w-full relative bg-slate-950 flex flex-col overflow-hidden">
            {/* Dynamic Map Background */}
            <div className="absolute inset-0">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center opacity-30 grayscale contrast-150"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-transparent to-slate-950"></div>
                
                {/* Simulated Path Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-[200%] bg-rose-500/30 blur-xl rotate-12"></div>
            </div>

            {/* Next Step Banner */}
            <div className="relative z-20 bg-slate-900/80 backdrop-blur-xl p-8 pt-14 border-b border-white/10 flex justify-between items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col">
                    <div className="flex items-center gap-3 text-rose-400 mb-1">
                        <AlertCircle size={20} className="animate-pulse" />
                        <span className="text-xs font-black uppercase tracking-widest">ملاحة طوارئ أولوية</span>
                    </div>
                    <span className="text-4xl font-black text-white">420 م</span>
                    <span className="text-rose-300 font-bold">اتجهي مباشرة لمدخل الطوارئ</span>
                </div>
                <div className="w-20 h-20 bg-rose-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-rose-500/40 border-b-4 border-rose-800 rotate-12">
                    <Navigation size={44} className="text-white transform rotate-45" />
                </div>
            </div>

            {/* 3D Space Element */}
            <div className="flex-1 flex items-center justify-center relative perspective-1000">
                <div className="w-48 h-48 bg-rose-500/10 rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-32 h-32 bg-rose-500/20 rounded-full flex items-center justify-center animate-ping"></div>
                </div>
                <div className="absolute bottom-20 flex flex-col items-center">
                    <div className="bg-rose-600 text-white px-4 py-2 rounded-2xl border border-rose-400 font-black text-xs animate-float">
                        📍 وجهتك: طوارئ المستشفى العام
                    </div>
                </div>
            </div>

            {/* Bottom Trip Info */}
            <div className="relative z-20 bg-white rounded-t-[3.5rem] p-10 shadow-[0_-40px_80px_rgba(0,0,0,0.4)]">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="font-black text-2xl text-slate-900 mb-1">طوارئ المستشفى العام</h3>
                        <p className="text-slate-400 font-bold flex items-center gap-2">
                             الموقف المحجوز: E-01 <MapPin size={14} className="text-rose-500" />
                        </p>
                    </div>
                    <div className="text-left bg-rose-50 px-5 py-3 rounded-3xl">
                        <h3 className="font-black text-2xl text-rose-600">3:12 د</h3>
                        <p className="text-rose-400 text-xs font-bold uppercase tracking-widest">وقت الوصول</p>
                    </div>
                </div>

                <div className="w-full bg-slate-100 h-3 rounded-full mb-8 overflow-hidden border border-slate-50">
                    <div 
                        className="h-full bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-300 ease-linear shadow-[0_0_15px_rgba(244,63,94,0.5)]"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                <div className="flex gap-4">
                    <button 
                        onClick={() => setScreen(ScreenState.HOME)}
                        className="w-18 h-18 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-400 hover:bg-slate-100 transition-all active:scale-90 border-2 border-slate-100"
                    >
                        <X size={28} />
                    </button>
                    <div className="flex-1 bg-rose-600 text-white rounded-[2rem] flex items-center justify-center gap-3 shadow-2xl hover:bg-rose-700 transition-all group">
                        <Mic size={24} className="text-white group-hover:scale-125 transition-transform" />
                        <span className="font-black text-lg">تواصل سريع مع الطوارئ</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
