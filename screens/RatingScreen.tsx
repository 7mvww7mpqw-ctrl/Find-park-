import React, { useState } from 'react';
import { Star, Check, Home } from 'lucide-react';
import { ScreenState } from '../types';

interface RatingScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const RatingScreen: React.FC<RatingScreenProps> = ({ setScreen }) => {
    const [rating, setRating] = useState(0);

    return (
        <div className="h-full w-full bg-white p-8 flex flex-col items-center justify-center animate-fade-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <Check size={40} className="text-green-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-2">وصلت وجهتك!</h1>
            <p className="text-gray-500 text-center mb-8">كيف كانت تجربتك في العثور على موقف؟</p>

            <div className="flex gap-2 mb-10">
                {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                        key={star}
                        onClick={() => setRating(star)}
                        className="transition-transform hover:scale-110"
                    >
                        <Star 
                            size={40} 
                            className={`${star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} 
                        />
                    </button>
                ))}
            </div>

            <div className="w-full space-y-3 mb-8">
                <p className="text-sm font-bold text-gray-700 mb-2">ما الذي أعجبك؟</p>
                <div className="flex flex-wrap gap-2">
                    {['سهولة الوصول', 'نظافة الموقف', 'الأمان', 'السعر', 'الإضاءة'].map(tag => (
                        <button key={tag} className="px-4 py-2 bg-gray-50 rounded-xl text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-100 border border-transparent transition-all">
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <button 
                onClick={() => setScreen(ScreenState.HOME)}
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/20 active:scale-95 transition-transform flex items-center justify-center gap-2"
            >
                <Home size={20} />
                <span>العودة للرئيسية</span>
            </button>
        </div>
    );
};