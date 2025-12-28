import React, { useEffect } from 'react';
import { MapPin, Car } from 'lucide-react';

interface SplashProps {
    onFinish: () => void;
}

export const SplashScreen: React.FC<SplashProps> = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 4000); // 4 seconds splash
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="h-full w-full bg-gradient-to-br from-blue-600 to-indigo-800 flex flex-col items-center justify-center text-white relative overflow-hidden p-6 text-center">
            {/* Decorative Circles */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>

            <div className="mb-8 relative animate-bounce-slow">
                <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-2xl rotate-3">
                    <MapPin className="text-blue-600" size={48} />
                </div>
                <div className="absolute -bottom-2 -right-4 bg-yellow-400 p-2 rounded-full shadow-lg">
                    <Car size={24} className="text-gray-900" />
                </div>
            </div>

            <h1 className="text-4xl font-black mb-2 tracking-tight">FindPark</h1>
            <p className="text-blue-100 text-lg mb-12 font-light">فايند بارك</p>

            <div className="mt-auto w-full max-w-md bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 animate-fade-in-up">
                <p className="text-lg font-bold mb-1">إعداد طالبات ثالث ٤</p>
                <p className="text-sm text-blue-100">إشراف المعلمة / اريج الزهراني</p>
            </div>
        </div>
    );
};