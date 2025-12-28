
import React, { useEffect, useState } from 'react';
import { Navigation, X, Camera, MapPin, Search } from 'lucide-react';
import { ScreenState } from '../types';

interface ARFinderScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const ARFinderScreen: React.FC<ARFinderScreenProps> = ({ setScreen }) => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRotation(prev => (prev + 5) % 360);
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-full w-full relative bg-black overflow-hidden flex flex-col">
            {/* Simulated AR Camera Background */}
            <div className="absolute inset-0 opacity-40">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center"></div>
            </div>

            {/* AR UI Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {/* Radar Ring */}
                <div className="w-64 h-64 border-2 border-blue-500/30 rounded-full flex items-center justify-center relative">
                    <div className="absolute inset-0 border-t-2 border-blue-400 rounded-full animate-spin"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_15px_rgba(96,165,250,0.8)]"></div>
                </div>

                {/* Destination Pin in 3D Space */}
                <div className="absolute transition-transform duration-500 transform" style={{ transform: `translate(${Math.sin(rotation * Math.PI / 180) * 100}px, ${Math.cos(rotation * Math.PI / 180) * 50}px)` }}>
                    <div className="flex flex-col items-center">
                        <div className="bg-blue-600 text-white p-3 rounded-full shadow-2xl animate-bounce">
                            <MapPin size={32} />
                        </div>
                        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl mt-2 border border-white/20">
                            <p className="text-white text-xs font-bold">سيارتك - على بعد 15م</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Controls */}
            <div className="relative z-10 p-6 flex justify-between items-start">
                <button 
                    onClick={() => setScreen(ScreenState.HOME)}
                    className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white border border-white/10"
                >
                    <X size={24} />
                </button>
                <div className="bg-blue-600/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-blue-500/30 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs font-bold uppercase tracking-widest">AR Mode Active</span>
                </div>
            </div>

            {/* Bottom Instructions */}
            <div className="mt-auto relative z-10 p-8">
                <div className="bg-white rounded-3xl p-6 shadow-2xl flex items-center gap-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
                        <Search size={32} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-gray-900">ابحث عن سيارتك</h3>
                        <p className="text-gray-500 text-sm">وجّه الهاتف حولك لرؤية موقع السيارة الفعلي.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
