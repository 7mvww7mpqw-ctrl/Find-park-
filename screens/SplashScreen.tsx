
import React, { useEffect } from 'react';
import { MapPin, Car, Sparkles } from 'lucide-react';

interface SplashProps {
    onFinish: () => void;
}

export const SplashScreen: React.FC<SplashProps> = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3500);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="h-full w-full bg-slate-900 flex flex-col items-center justify-center text-white relative overflow-hidden p-8 text-center">
            {/* الخلفية المتحركة */}
            <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse [animation-delay:1.5s]"></div>

            <div className="relative z-10 space-y-8 flex flex-col items-center w-full">
                <div className="relative">
                    <div className="w-28 h-28 bg-white rounded-[2.5rem] flex items-center justify-center shadow-[0_0_50px_rgba(79,70,229,0.3)] animate-float">
                        <MapPin className="text-indigo-600" size={56} />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-yellow-400 p-2.5 rounded-2xl shadow-lg border-4 border-slate-900 animate-bounce">
                        <Car size={24} className="text-slate-900" />
                    </div>
                </div>

                <div className="space-y-2">
                    <h1 className="text-5xl font-black tracking-tighter italic">FindPark</h1>
                    <div className="flex items-center justify-center gap-2 text-indigo-400">
                        <Sparkles size={16} />
                        <p className="text-xl font-bold tracking-[0.2em] uppercase">فايند بارك</p>
                        <Sparkles size={16} />
                    </div>
                </div>
            </div>

            <div className="mt-auto w-full max-w-sm bg-white/5 backdrop-blur-xl rounded-[2.5rem] p-8 border border-white/10 animate-fade-in shadow-2xl">
                <p className="text-indigo-300 text-xs font-black uppercase tracking-widest mb-3">مشروع التقنية الرقمية</p>
                <p className="text-xl font-black mb-1">إعداد طالبات ثالث ٤</p>
                <p className="text-sm text-slate-400 font-bold italic">بإشراف المعلمة / أريج الزهراني</p>
            </div>
            
            <div className="absolute bottom-8 flex gap-1">
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce"></div>
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-1.5 h-1.5 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
        </div>
    );
};
