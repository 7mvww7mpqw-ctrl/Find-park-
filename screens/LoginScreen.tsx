
import React from 'react';
import { MapPin, Smartphone, ArrowLeft } from 'lucide-react';
import { ScreenState } from '../types.ts';

interface LoginScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full w-full bg-white flex flex-col p-8 animate-fade-in">
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-blue-600 rounded-3xl flex items-center justify-center shadow-2xl mb-8 rotate-6">
                    <MapPin className="text-white" size={48} />
                </div>
                <h1 className="text-3xl font-black text-gray-900 mb-2">أهلاً بك!</h1>
                <p className="text-gray-500 mb-12 text-center">سجّل دخولك للعثور على أفضل المواقف في مدينتك.</p>
                <div className="w-full space-y-4">
                    <div className="bg-gray-50 border border-gray-100 rounded-2xl px-4 py-3 flex items-center">
                        <Smartphone className="text-gray-400 ml-3" size={20} />
                        <input type="tel" placeholder="رقم الجوال" className="flex-1 bg-transparent outline-none text-right dir-rtl font-medium text-gray-800" />
                    </div>
                    <button onClick={() => setScreen(ScreenState.HOME)} className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-all flex items-center justify-center gap-2">
                        <span>دخول</span>
                        <ArrowLeft size={20} />
                    </button>
                </div>
                <div className="mt-8 flex items-center gap-4 w-full">
                    <div className="h-px bg-gray-100 flex-1"></div>
                    <span className="text-gray-400 text-sm">أو</span>
                    <div className="h-px bg-gray-100 flex-1"></div>
                </div>
                <div className="flex gap-4 mt-8 w-full">
                    <button className="flex-1 border border-gray-200 py-3 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors"><span className="font-bold text-gray-700">Google</span></button>
                    <button className="flex-1 border border-gray-200 py-3 rounded-2xl flex items-center justify-center hover:bg-gray-50 transition-colors"><span className="font-bold text-gray-700">Apple</span></button>
                </div>
            </div>
            <p className="text-center text-gray-400 text-xs mt-6">بالمتابعة أنت توافق على الشروط والأحكام</p>
        </div>
    );
};
