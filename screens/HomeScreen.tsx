
import React, { useState, useEffect } from 'react';
import { Clock, Car, MapPin, Bell, Sparkles, X, Activity, AlertCircle, Send, MessageSquareText, Heart } from 'lucide-react';
import { MOCK_SPOTS, CATEGORIES } from '../constants';
import { ParkingSpot, ParkingStatus, ScreenState } from '../types';

interface HomeScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ setScreen }) => {
    const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
    const [filterCategory, setFilterCategory] = useState('all');
    const [aiThinking, setAiThinking] = useState(false);
    const [assistantText, setAssistantText] = useState("");
    const [userInput, setUserInput] = useState("");
    const [isAsking, setIsAsking] = useState(false);
    const [sensorLogs, setSensorLogs] = useState<string[]>([]);
    const [congestionAlert, setCongestionAlert] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setCongestionAlert(true), 5000);
        const logs = ["IOT: OK", "GPS: ACTIVE", "AI: READY", "NODES: 12"];
        const interval = setInterval(() => {
            setSensorLogs(prev => [logs[Math.floor(Math.random() * logs.length)], ...prev].slice(0, 5));
        }, 3000);
        return () => { clearInterval(interval); clearTimeout(timer); };
    }, []);

    const handleAIVoiceRequest = (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!userInput.trim()) return;

        const originalQuestion = userInput;
        setIsAsking(false);
        setAiThinking(true);
        
        // المنطق المطلوب: رد نصي وتوجيه تلقائي
        let targetText = "سيتم توجيهك لأقرب موقف للمول";
        let targetId = "1"; 

        if (originalQuestion.includes("مستشفى")) {
            targetText = "سيتم توجيهك لأقرب موقف للمستشفى";
            targetId = "2";
        } else if (originalQuestion.includes("مطعم")) {
            targetText = "سيتم توجيهك لأقرب موقف للمطعم";
            targetId = "9";
        } else if (originalQuestion.includes("مكتبة")) {
            targetText = "سيتم توجيهك لأقرب موقف للمكتبة";
            targetId = "5";
        }

        setAssistantText(targetText);

        setTimeout(() => {
            const spot = MOCK_SPOTS.find(s => s.id === targetId) || MOCK_SPOTS[0];
            setSelectedSpot(spot);
            setAiThinking(false);
            setUserInput("");
        }, 2000); // زيادة مدة التفكير قليلاً لإضفاء واقعية
    };

    const filteredSpots = MOCK_SPOTS.filter(s => {
        if (filterCategory === 'all') return true;
        if (filterCategory === 'covered') return s.features.includes('مغطى');
        if (filterCategory === 'ev') return s.features.includes('شحن');
        if (filterCategory === 'vip') return s.features.includes('VIP');
        if (filterCategory === 'free') return s.price === 'مجاني';
        return true;
    });

    return (
        <div className="relative h-full w-full flex flex-col bg-white overflow-hidden">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-30 pt-12 glass-light border-b border-slate-100 shadow-sm">
                <div className="px-6 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100">
                            <Activity size={20} className="text-white" />
                        </div>
                        <h1 className="text-xl font-black text-slate-900 tracking-tighter italic leading-none">FindPark <span className="text-indigo-600">Smart</span></h1>
                    </div>
                    <div className="flex gap-2">
                        {congestionAlert && (
                            <div className="bg-rose-100 text-rose-600 px-3 py-1.5 rounded-xl flex items-center gap-2 border border-rose-200 animate-fade-in">
                                <AlertCircle size={14} className="animate-pulse" />
                                <span className="text-[10px] font-black uppercase tracking-widest">زحام</span>
                            </div>
                        )}
                        <button onClick={() => setScreen(ScreenState.NOTIFICATIONS)} className="p-2.5 rounded-xl border bg-slate-50 border-slate-100 text-slate-400 relative">
                            <Bell size={18} />
                            <div className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></div>
                        </button>
                    </div>
                </div>

                <div className="px-6 pb-4 flex gap-3 overflow-x-auto no-scrollbar">
                    {CATEGORIES.map(cat => (
                        <button key={cat.id} onClick={() => setFilterCategory(cat.id)} className={`flex-shrink-0 px-5 py-2.5 rounded-xl text-xs font-black transition-all border ${filterCategory === cat.id ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white border-slate-100 text-slate-400 hover:bg-slate-50'}`}>{cat.label}</button>
                    ))}
                </div>
            </div>

            {/* Map Area */}
            <div className="flex-1 relative bg-slate-50 map-grid overflow-hidden">
                <div className="absolute top-[15%] right-[5%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[90px] pointer-events-none"></div>
                <div className="absolute bottom-[30%] left-[20%] w-60 h-60 bg-emerald-500/10 rounded-full blur-[80px] pointer-events-none"></div>

                {/* IOT Logs */}
                <div className="absolute top-48 left-6 z-20 w-36 opacity-30 pointer-events-none">
                    <div className="bg-slate-900/90 backdrop-blur-md p-3 rounded-2xl border border-white/10 shadow-2xl">
                        {sensorLogs.map((log, i) => <p key={i} className="text-[7px] font-mono text-emerald-400 overflow-hidden leading-relaxed">{`> ${log}`}</p>)}
                    </div>
                </div>

                {filteredSpots.map(spot => (
                    <button key={spot.id} onClick={() => setSelectedSpot(spot)} style={{ left: `${spot.x}%`, top: `${spot.y}%` }} className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${selectedSpot?.id === spot.id ? 'scale-125 z-20' : 'z-10 hover:scale-110'}`}>
                        <div className="absolute -top-11 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm shadow-md border border-slate-100 px-2 py-1 rounded-lg text-[10px] font-black text-slate-900 whitespace-nowrap flex flex-col items-center">
                            <span>{spot.price}</span>
                            <div className="w-1.5 h-1.5 bg-white border-r border-b border-slate-100 rotate-45 -mb-1.5 mt-0.5"></div>
                        </div>
                        
                        <div className={`group relative p-3 rounded-2xl border-4 shadow-xl flex flex-col items-center transition-all ${spot.status === ParkingStatus.AVAILABLE ? 'bg-white border-indigo-600 text-indigo-600 shadow-indigo-100' : 'bg-slate-100 border-slate-300 text-slate-400 opacity-60'}`}>
                            {spot.isFavorite && (
                                <div className="absolute -top-2 -right-2 bg-rose-500 text-white p-1 rounded-full shadow-lg border-2 border-white">
                                    <Heart size={10} fill="currentColor" />
                                </div>
                            )}
                            <Car size={22} fill="currentColor" />
                        </div>
                    </button>
                ))}

                {/* AI Overlay (Thinking Mode) */}
                {aiThinking && (
                    <div className="absolute inset-0 z-40 bg-white/95 backdrop-blur-3xl flex flex-col items-center justify-center p-10 animate-fade-in text-center">
                        <div className="w-24 h-24 bg-indigo-50 rounded-[2.5rem] flex items-center justify-center border border-indigo-100 animate-bounce-slow mb-8">
                            <Sparkles size={44} className="text-indigo-600" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 mb-6 tracking-tighter italic">المساعد الذكي 🤖</h2>
                        <div className="bg-indigo-600 p-10 rounded-[3rem] shadow-[0_30px_60px_rgba(79,70,229,0.3)] border border-indigo-500 relative transform transition-all">
                            <p className="text-white font-black text-xl leading-relaxed italic animate-pulse">{assistantText}</p>
                            <div className="mt-8 flex justify-center gap-2">
                                <div className="w-2 h-2 bg-white/40 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-white/60 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                <div className="w-2 h-2 bg-white/80 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Question Input Modal */}
                {isAsking && (
                    <div className="absolute inset-0 z-50 bg-slate-900/70 backdrop-blur-md flex items-end p-6 animate-fade-in">
                        <div className="w-full bg-white rounded-[3.5rem] p-8 shadow-2xl animate-slide-up mb-24 border border-slate-100">
                            <div className="flex justify-between items-center mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shadow-inner">
                                        <MessageSquareText size={28} />
                                    </div>
                                    <span className="font-black text-2xl text-slate-900 tracking-tighter italic">اكتبي طلبك للمساعد الذكي</span>
                                </div>
                                <button onClick={() => setIsAsking(false)} className="p-3 bg-slate-50 rounded-2xl text-slate-400 hover:text-slate-600 transition-colors"><X size={24} /></button>
                            </div>
                            <form onSubmit={handleAIVoiceRequest} className="relative">
                                <input 
                                    autoFocus
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    placeholder="مثلاً: ابغى اقرب موقف في المول"
                                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-[2rem] py-6 px-10 font-bold text-slate-800 outline-none focus:border-indigo-600 transition-all text-right text-xl shadow-inner"
                                />
                                <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-4 rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all">
                                    <Send size={28} />
                                </button>
                            </form>
                            <p className="text-center text-slate-400 text-[10px] font-black mt-8 tracking-[0.4em] uppercase italic">FindPark AI Digital Ecosystem</p>
                        </div>
                    </div>
                )}

                {/* Bottom Main Button */}
                {!selectedSpot && !aiThinking && !isAsking && (
                    <div className="absolute bottom-32 left-0 right-0 flex flex-col items-center gap-3 z-20 px-6">
                        <button onClick={() => setIsAsking(true)} className="w-full max-w-sm bg-indigo-600 text-white px-8 py-6 rounded-3xl font-black text-xl flex items-center justify-center gap-4 shadow-[0_30px_60px_rgba(79,70,229,0.4)] hover:scale-105 active:scale-95 transition-all border-b-8 border-indigo-800 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            <Sparkles size={28} className="animate-pulse" /> اسألي المساعد الذكي ✨
                        </button>
                    </div>
                )}
            </div>

            {/* Selection Drawer */}
            {selectedSpot && !aiThinking && !isAsking && (
                <div className="absolute inset-x-0 bottom-0 bg-white rounded-t-[4rem] p-10 pb-36 animate-slide-up z-30 shadow-[0_-30px_100px_rgba(0,0,0,0.15)] border-t border-slate-100">
                    <div className="w-20 h-1.5 bg-slate-100 rounded-full mx-auto mb-10"></div>
                    <div className="flex justify-between items-start mb-10">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <h2 className="text-4xl font-black text-slate-900 tracking-tighter italic">{selectedSpot.name}</h2>
                                <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest">{selectedSpot.type}</span>
                                {selectedSpot.isFavorite && <Heart size={24} className="text-rose-500 fill-current animate-pulse-gentle" />}
                            </div>
                            <div className="flex items-center gap-6 text-slate-400 font-bold text-base">
                                <span className="flex items-center gap-2"><MapPin size={20} className="text-indigo-600" /> {selectedSpot.distance}</span>
                                <span className="flex items-center gap-2"><Clock size={20} className="text-indigo-600" /> {selectedSpot.time}</span>
                            </div>
                        </div>
                        <button onClick={() => setSelectedSpot(null)} className="p-4 bg-slate-50 rounded-3xl text-slate-400 hover:text-slate-600 transition-colors"><X size={28} /></button>
                    </div>

                    <div className="grid grid-cols-3 gap-5 mb-10">
                        {selectedSpot.features.map(feat => (
                            <div key={feat} className="bg-slate-50 py-4 rounded-[1.5rem] text-center text-[11px] font-black text-slate-700 border border-slate-100 shadow-sm">
                                {feat} {feat === 'مغطى' ? '☂️' : feat === 'شحن' ? '⚡' : '🛡️'}
                            </div>
                        ))}
                    </div>

                    <button onClick={() => setScreen(ScreenState.BOOKING)} className="w-full bg-slate-900 text-white py-7 rounded-[2.5rem] font-black text-2xl flex items-center justify-center gap-5 shadow-2xl hover:bg-black active:scale-[0.98] transition-all group border-b-8 border-slate-950">
                        <Car size={32} className="group-hover:translate-x-2 transition-transform" /> تأكيد الحجز ({selectedSpot.price})
                    </button>
                </div>
            )}
        </div>
    );
};
