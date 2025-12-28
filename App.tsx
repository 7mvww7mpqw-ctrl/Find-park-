
import React, { useState } from 'react';
import { ScreenState } from './types';
import { SplashScreen } from './screens/SplashScreen';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { BookingScreen } from './screens/BookingScreen';
import { NotificationsScreen } from './screens/NotificationsScreen';
import { NavigationScreen } from './screens/NavigationScreen';
import { RatingScreen } from './screens/RatingScreen';
import { PresentationScreen } from './screens/PresentationScreen';
import { ARFinderScreen } from './screens/ARFinderScreen';
import { LeaderboardScreen } from './screens/LeaderboardScreen';
import { DigitalKeyScreen } from './screens/DigitalKeyScreen';
import { BottomNav } from './components/BottomNav';
import { SOSButton } from './components/SOSButton';

const FavoritesScreen = () => (
  <div className="h-full w-full flex items-center justify-center bg-white p-12 text-center flex-col">
    <div className="w-32 h-32 bg-red-50 p-6 rounded-full mb-8 flex items-center justify-center animate-pulse"><span className="text-6xl">❤️</span></div>
    <h2 className="text-3xl font-black text-gray-900">المواقف المفضلة</h2>
    <p className="text-gray-500 mt-4 leading-relaxed">قائمة الأماكن التي تحبين الركن فيها ستظهر هنا لسهولة الوصول إليها لاحقاً.</p>
  </div>
);

const SettingsScreen: React.FC<{setScreen: (s: ScreenState) => void}> = ({ setScreen }) => (
  <div className="h-full w-full bg-gray-50 p-8 overflow-y-auto pb-24">
    <h2 className="text-3xl font-black mb-10 text-gray-900 pt-4">الإعدادات</h2>
    
    <div className="mb-10">
        <button 
            onClick={() => setScreen(ScreenState.PRESENTATION)}
            className="w-full bg-gradient-to-br from-blue-700 to-indigo-900 rounded-[2rem] p-8 text-white shadow-2xl text-right flex justify-between items-center group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <div className="relative z-10">
                <span className="block font-black text-2xl mb-1">ملف المشروع</span>
                <span className="text-blue-200 text-sm font-medium opacity-80 uppercase tracking-widest">Presentation Slides</span>
            </div>
            <span className="text-4xl relative z-10 animate-bounce-slow">📊</span>
        </button>
    </div>

    <div className="space-y-4">
        {[
            { label: 'الملف الشخصي', icon: '👤' },
            { label: 'تنبيهات المساعد الذكي', icon: '🤖' },
            { label: 'اللغة والإقليم', icon: '🌍' },
            { label: 'الوضع الليلي', icon: '🌙' },
            { label: 'المساعدة والدعم', icon: '🛠️' }
        ].map(item => (
            <div key={item.label} className="p-6 bg-white rounded-2xl flex justify-between items-center border border-gray-50 hover:shadow-xl hover:border-blue-100 transition-all cursor-pointer">
                <div className="flex items-center gap-4">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-bold text-gray-800">{item.label}</span>
                </div>
                <span className="text-gray-300">←</span>
            </div>
        ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>(ScreenState.SPLASH);

  const renderScreen = () => {
    switch (currentScreen) {
      case ScreenState.SPLASH:
        return <SplashScreen onFinish={() => setCurrentScreen(ScreenState.LOGIN)} />;
      case ScreenState.LOGIN:
        return <LoginScreen setScreen={setCurrentScreen} />;
      case ScreenState.HOME:
        return <HomeScreen setScreen={setCurrentScreen} />;
      case ScreenState.PROFILE:
        return <ProfileScreen />;
      case ScreenState.FAVORITES:
        return <FavoritesScreen />;
      case ScreenState.SETTINGS:
        return <SettingsScreen setScreen={setCurrentScreen} />;
      case ScreenState.BOOKING:
        return <BookingScreen setScreen={setCurrentScreen} />;
      case ScreenState.NOTIFICATIONS:
        return <NotificationsScreen setScreen={setCurrentScreen} />;
      case ScreenState.NAVIGATION:
        return <NavigationScreen setScreen={setCurrentScreen} />;
      case ScreenState.RATING:
        return <RatingScreen setScreen={setCurrentScreen} />;
      case ScreenState.PRESENTATION:
        return <PresentationScreen setScreen={setCurrentScreen} />;
      case ScreenState.AR_FINDER:
        return <ARFinderScreen setScreen={setCurrentScreen} />;
      case ScreenState.LEADERBOARD:
        return <LeaderboardScreen setScreen={setCurrentScreen} />;
      case ScreenState.DIGITAL_KEY:
        return <DigitalKeyScreen setScreen={setCurrentScreen} />;
      default:
        return <HomeScreen setScreen={setCurrentScreen} />;
    }
  };

  const shouldShowNav = [ScreenState.HOME, ScreenState.PROFILE, ScreenState.FAVORITES, ScreenState.SETTINGS].includes(currentScreen);
  const shouldShowSOS = currentScreen === ScreenState.HOME;

  return (
    <div className="w-full h-full bg-slate-200 flex justify-center items-center font-sans overflow-hidden">
      <div className="w-full max-w-[430px] h-[100vh] sm:h-[880px] bg-white sm:rounded-[3.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] overflow-hidden relative border-[12px] border-slate-900 box-content">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-8 bg-slate-900 rounded-b-3xl z-50"></div>
        <div className="h-full w-full relative">{renderScreen()}</div>
        {shouldShowSOS && <SOSButton onNavigate={() => setCurrentScreen(ScreenState.NAVIGATION)} />}
        {shouldShowNav && <BottomNav currentScreen={currentScreen} setScreen={setCurrentScreen} />}
      </div>
    </div>
  );
};

export default App;
