import React from 'react';
import { Map, Heart, User, Settings, Search } from 'lucide-react';
import { ScreenState } from '../types';

interface BottomNavProps {
    currentScreen: ScreenState;
    setScreen: (screen: ScreenState) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, setScreen }) => {
    const navItems = [
        { screen: ScreenState.HOME, icon: Map, label: 'الخريطة' },
        { screen: ScreenState.FAVORITES, icon: Heart, label: 'المفضلة' },
        { screen: ScreenState.PROFILE, icon: User, label: 'حسابي' },
        { screen: ScreenState.SETTINGS, icon: Settings, label: 'الإعدادات' },
    ];

    return (
        <div className="absolute bottom-0 left-0 right-0 bg-white shadow-[0_-5px_15px_rgba(0,0,0,0.05)] rounded-t-3xl px-6 py-4 flex justify-between items-center z-50 border-t border-gray-100">
            {navItems.map((item) => {
                const isActive = currentScreen === item.screen;
                return (
                    <button
                        key={item.label}
                        onClick={() => setScreen(item.screen)}
                        className={`flex flex-col items-center transition-all duration-300 ${
                            isActive ? 'text-blue-600 scale-110' : 'text-gray-400 hover:text-gray-600'
                        }`}
                    >
                        <item.icon 
                            size={24} 
                            fill={isActive && item.screen === ScreenState.FAVORITES ? "currentColor" : "none"}
                            className={isActive ? 'animate-bounce-subtle' : ''}
                        />
                        <span className={`text-xs mt-1 font-medium ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </div>
    );
};