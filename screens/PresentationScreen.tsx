
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X, MapPin, Zap, Shield, Code, Users, Layout } from 'lucide-react';
import { ScreenState } from '../types';

interface PresentationScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const PresentationScreen: React.FC<PresentationScreenProps> = ({ setScreen }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 0,
            bg: 'bg-blue-900',
            content: (
                <div className="flex flex-col items-center justify-center h-full text-white text-center p-6">
                    <div className="w-32 h-32 bg-white rounded-3xl flex items-center justify-center mb-8 shadow-2xl rotate-3 animate-bounce-slow">
                        <MapPin className="text-blue-600" size={64} />
                    </div>
                    <h1 className="text-5xl font-black mb-4 tracking-tighter">FindPark</h1>
                    <p className="text-2xl font-light text-blue-200 mb-12">رفيقك الذكي لمواقف السيارات</p>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 w-full">
                        <p className="font-bold text-lg mb-2">إعداد طالبات الصف الثالث (4)</p>
                        <p className="text-blue-200">إشراف المعلمة: أريج الزهراني</p>
                    </div>
                </div>
            )
        },
        {
            id: 1,
            bg: 'bg-white',
            content: (
                <div className="flex flex-col h-full p-8 text-gray-800">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-600">
                        <Layout size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">المشكلة</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <p className="text-lg leading-relaxed">ضياع الوقت في البحث العشوائي عن مواقف شاغرة، خاصة في أوقات الذروة.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <p className="text-lg leading-relaxed">زيادة الازدحام المروري الناتج عن دوران السيارات المستمر.</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <p className="text-lg leading-relaxed">التوتر واستهلاك الوقود غير الضروري.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 2,
            bg: 'bg-white',
            content: (
                <div className="flex flex-col h-full p-8 text-gray-800">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                        <Zap size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">الحل: FindPark</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        تطبيق ذكي يربط السائقين بالمواقف المتاحة في الوقت الفعلي عبر خريطة تفاعلية.
                    </p>
                    <div className="grid grid-cols-1 gap-4">
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                            <span className="text-2xl">🟢</span>
                            <span className="font-bold">مواقف متاحة</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                            <span className="text-2xl">🔴</span>
                            <span className="font-bold">مواقف ممتلئة</span>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 flex items-center gap-3">
                            <span className="text-2xl">🗓️</span>
                            <span className="font-bold">حجز مسبق</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 3,
            bg: 'bg-white',
            content: (
                <div className="flex flex-col h-full p-8 text-gray-800">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                        <Shield size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">الأمان (SOS)</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        ميزة فريدة للطوارئ والحالات الحرجة.
                    </p>
                    <div className="bg-red-50 border-2 border-red-100 rounded-2xl p-6 text-center relative overflow-hidden">
                        <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-100 rounded-full opacity-50"></div>
                        <h3 className="text-xl font-bold text-red-600 mb-2">زر الطوارئ الذكي</h3>
                        <p className="text-gray-600 text-sm">
                            بضغطة واحدة، يتم توجيه السائق فوراً إلى أقرب موقف طوارئ (مستشفيات) دون الحاجة للبحث.
                        </p>
                    </div>
                </div>
            )
        },
        {
            id: 4,
            bg: 'bg-white',
            content: (
                <div className="flex flex-col h-full p-8 text-gray-800">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 text-purple-600">
                        <Users size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-6 text-blue-900">تجربة المستخدم</h2>
                    <div className="space-y-4">
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">1</div>
                            <p className="font-medium">واجهة عصرية وسهلة الاستخدام.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">2</div>
                            <p className="font-medium">نظام ملاحة (Navigation) محاكي للواقع.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">3</div>
                            <p className="font-medium">ملف شخصي ونظام مكافآت.</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">4</div>
                            <p className="font-medium">تنبيهات وإشعارات ذكية.</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 5,
            bg: 'bg-gray-900',
            content: (
                <div className="flex flex-col h-full p-8 text-white">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 text-blue-400">
                        <Code size={32} />
                    </div>
                    <h2 className="text-3xl font-bold mb-8 text-blue-400">التقنيات المستخدمة</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                            <h3 className="font-bold text-lg mb-1">React</h3>
                            <p className="text-xs text-gray-400">لبناء الواجهة</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                            <h3 className="font-bold text-lg mb-1">TypeScript</h3>
                            <p className="text-xs text-gray-400">لكود آمن ومنظم</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                            <h3 className="font-bold text-lg mb-1">Tailwind</h3>
                            <p className="text-xs text-gray-400">للتصميم العصري</p>
                        </div>
                        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                            <h3 className="font-bold text-lg mb-1">Lucide</h3>
                            <p className="text-xs text-gray-400">للأيقونات</p>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: 6,
            bg: 'bg-gradient-to-br from-blue-600 to-indigo-900',
            content: (
                <div className="flex flex-col items-center justify-center h-full text-white text-center p-8">
                    <h2 className="text-4xl font-bold mb-6">شكراً لكم</h2>
                    <p className="text-xl text-blue-200 mb-12 leading-relaxed">
                        نسعى في FindPark لجعل مدننا أذكى وحياتنا أسهل.
                    </p>
                    <div className="w-20 h-1 bg-white/30 rounded-full mb-8"></div>
                    <p className="text-sm opacity-70">مشروع مادة التقنية الرقمية</p>
                    <p className="text-sm opacity-70">العام الدراسي 1445 هـ</p>
                </div>
            )
        }
    ];

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) setCurrentSlide(c => c + 1);
    };

    const prevSlide = () => {
        if (currentSlide > 0) setCurrentSlide(c => c - 1);
    };

    return (
        <div className="h-full w-full bg-gray-900 flex flex-col relative">
            {/* Slide Content */}
            <div className={`flex-1 relative overflow-hidden transition-colors duration-500 ${slides[currentSlide].bg}`}>
                <div className="h-full w-full animate-fade-in">
                    {slides[currentSlide].content}
                </div>

                {/* Close Button */}
                <button 
                    onClick={() => setScreen(ScreenState.SETTINGS)}
                    className="absolute top-4 left-4 p-2 bg-black/10 hover:bg-black/20 rounded-full text-current backdrop-blur-sm z-50 transition-colors"
                >
                    <X size={24} />
                </button>

                {/* Slide Counter */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-black/10 backdrop-blur-sm rounded-full text-sm font-bold z-50">
                    {currentSlide + 1} / {slides.length}
                </div>
            </div>

            {/* Controls */}
            <div className="h-20 bg-white border-t border-gray-100 flex items-center justify-between px-6 z-50">
                <button 
                    onClick={prevSlide}
                    disabled={currentSlide === 0}
                    className={`p-3 rounded-full transition-all ${
                        currentSlide === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50 active:scale-95'
                    }`}
                >
                    <ChevronRight size={28} />
                </button>

                <div className="flex gap-1.5">
                    {slides.map((_, idx) => (
                        <div 
                            key={idx}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                idx === currentSlide ? 'w-6 bg-blue-600' : 'w-2 bg-gray-200'
                            }`}
                        ></div>
                    ))}
                </div>

                <button 
                    onClick={nextSlide}
                    disabled={currentSlide === slides.length - 1}
                    className={`p-3 rounded-full transition-all ${
                        currentSlide === slides.length - 1 ? 'text-gray-300 cursor-not-allowed' : 'text-blue-600 hover:bg-blue-50 active:scale-95'
                    }`}
                >
                    <ChevronLeft size={28} />
                </button>
            </div>
        </div>
    );
};
