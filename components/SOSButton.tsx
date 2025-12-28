import React, { useState } from 'react';
import { AlertTriangle, X, Navigation } from 'lucide-react';

interface SOSButtonProps {
    onNavigate: () => void;
}

export const SOSButton: React.FC<SOSButtonProps> = ({ onNavigate }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleEmergency = () => {
        setIsOpen(false);
        onNavigate();
    };

    return (
        <>
            {/* Button positioned lower to avoid header overlap (top-44 approx 176px) */}
            <button
                onClick={() => setIsOpen(true)}
                className="absolute top-44 left-4 bg-red-600 text-white p-3 rounded-full shadow-lg shadow-red-600/30 hover:bg-red-700 hover:scale-110 transition-all duration-300 z-40 animate-pulse flex items-center justify-center border-2 border-white"
            >
                <span className="font-bold text-xs mr-1">SOS</span>
                <AlertTriangle size={20} fill="currentColor" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[70] bg-gray-900/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in">
                    <div className="bg-white rounded-3xl p-6 w-full max-w-sm shadow-2xl border-t-4 border-red-500 text-center relative animate-scale-up">
                        <button 
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full p-2 transition-colors"
                        >
                            <X size={20} />
                        </button>
                        
                        <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 ring-4 ring-red-100">
                            <AlertTriangle size={40} fill="currentColor" />
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-2">حالة طوارئ؟</h2>
                        <p className="text-gray-500 mb-8 leading-relaxed">
                            سيتم تحديد موقعك وتوجيهك فوراً لأقرب موقف طوارئ مخصص بجانب المستشفى.
                        </p>

                        <div className="space-y-3">
                            <button 
                                onClick={handleEmergency}
                                className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-red-600/20 hover:bg-red-700 active:scale-95 transition-all flex items-center justify-center gap-2"
                            >
                                <Navigation size={20} />
                                <span>بدء التوجيه للطوارئ</span>
                            </button>
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="w-full bg-gray-50 text-gray-700 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-colors"
                            >
                                إلغاء
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};