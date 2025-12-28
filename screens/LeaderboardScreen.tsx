
import React from 'react';
import { Trophy, ArrowRight, Medal, Star, TrendingUp } from 'lucide-react';
import { ScreenState } from '../types';
import { LEADERBOARD_DATA } from '../constants';

interface LeaderboardScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full w-full bg-indigo-900 flex flex-col relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[-5%] right-[-10%] w-64 h-64 bg-blue-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 p-6 pt-12 text-white">
                <div className="flex items-center gap-4 mb-8">
                    <button onClick={() => setScreen(ScreenState.HOME)} className="p-2 bg-white/10 rounded-xl hover:bg-white/20 transition-colors">
                        <ArrowRight size={24} />
                    </button>
                    <h1 className="text-2xl font-bold">لوحة المبدعين</h1>
                </div>

                {/* Top 3 Simulation */}
                <div className="flex justify-center items-end gap-4 mb-12 h-40">
                    {/* Rank 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-gray-300 rounded-2xl border-4 border-gray-400 flex items-center justify-center text-gray-700 font-bold mb-2">N</div>
                        <div className="h-20 w-16 bg-white/10 rounded-t-xl flex flex-col items-center justify-center">
                            <Medal size={20} className="text-gray-300 mb-1" />
                            <span className="text-xs font-bold">2nd</span>
                        </div>
                    </div>
                    {/* Rank 1 */}
                    <div className="flex flex-col items-center scale-110">
                        <div className="w-16 h-16 bg-yellow-400 rounded-2xl border-4 border-yellow-500 flex items-center justify-center text-yellow-900 font-bold mb-2 relative">
                            <Trophy size={28} className="absolute -top-6 text-yellow-400 drop-shadow-lg" />
                            S
                        </div>
                        <div className="h-28 w-20 bg-yellow-400 rounded-t-xl flex flex-col items-center justify-center text-yellow-900">
                            <Medal size={24} className="mb-1" />
                            <span className="text-sm font-black">1st</span>
                        </div>
                    </div>
                    {/* Rank 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-14 h-14 bg-orange-300 rounded-2xl border-4 border-orange-400 flex items-center justify-center text-orange-900 font-bold mb-2">L</div>
                        <div className="h-16 w-16 bg-white/10 rounded-t-xl flex flex-col items-center justify-center">
                            <Medal size={20} className="text-orange-300 mb-1" />
                            <span className="text-xs font-bold">3rd</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* List */}
            <div className="flex-1 bg-white rounded-t-[3rem] p-6 shadow-2xl relative z-10">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="font-black text-gray-900 text-lg flex items-center gap-2">
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        ترتيبك الحالي
                    </h3>
                    <div className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <TrendingUp size={12} />
                        ارتفع مركزين
                    </div>
                </div>

                <div className="space-y-3 overflow-y-auto max-h-[400px] no-scrollbar">
                    {LEADERBOARD_DATA.map((user, idx) => (
                        <div key={idx} className={`p-4 rounded-2xl flex items-center justify-between border ${user.isMe ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-transparent'}`}>
                            <div className="flex items-center gap-4">
                                <span className="font-black text-gray-400 w-4">{idx + 1}</span>
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${user.isMe ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'bg-white text-gray-700'}`}>
                                    {user.avatar}
                                </div>
                                <span className={`font-bold ${user.isMe ? 'text-blue-900' : 'text-gray-700'}`}>{user.name}</span>
                            </div>
                            <div className="text-right">
                                <p className="font-black text-gray-900">{user.points}</p>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">نقطة</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-8 bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                    <Star size={18} />
                    <span>كيف أجمع نقاطاً أكثر؟</span>
                </button>
            </div>
        </div>
    );
};
