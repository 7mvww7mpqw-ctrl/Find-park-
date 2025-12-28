import React from 'react';
import { Bell, ArrowRight, CheckCircle, AlertTriangle, Info } from 'lucide-react';
import { ScreenState } from '../types';
import { MOCK_NOTIFICATIONS } from '../constants';

interface NotificationsScreenProps {
    setScreen: (screen: ScreenState) => void;
}

export const NotificationsScreen: React.FC<NotificationsScreenProps> = ({ setScreen }) => {
    return (
        <div className="h-full w-full bg-gray-50 flex flex-col">
            <div className="bg-white p-6 pb-4 shadow-sm z-10">
                <div className="flex items-center gap-4 mb-4">
                    <button 
                        onClick={() => setScreen(ScreenState.HOME)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <ArrowRight size={24} className="text-gray-700" />
                    </button>
                    <h1 className="text-xl font-bold text-gray-900">الإشعارات</h1>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3">
                {MOCK_NOTIFICATIONS.map(notif => (
                    <div key={notif.id} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex gap-4 animate-fade-in">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                            notif.type === 'success' ? 'bg-green-100 text-green-600' :
                            notif.type === 'warning' ? 'bg-yellow-100 text-yellow-600' : 'bg-blue-100 text-blue-600'
                        }`}>
                            {notif.type === 'success' ? <CheckCircle size={24} /> :
                             notif.type === 'warning' ? <AlertTriangle size={24} /> : <Info size={24} />}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-gray-800">{notif.title}</h3>
                                <span className="text-xs text-gray-400">{notif.time}</span>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">{notif.message}</p>
                        </div>
                    </div>
                ))}
                
                <div className="text-center py-8 text-gray-400 text-sm">
                    لا توجد إشعارات أخرى
                </div>
            </div>
        </div>
    );
};