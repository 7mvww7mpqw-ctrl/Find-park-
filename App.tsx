
import React, { useState } from 'react';
import { ScreenState } from './types.ts';
import { SplashScreen } from './screens/SplashScreen.tsx';
import { LoginScreen } from './screens/LoginScreen.tsx';
import { HomeScreen } from './screens/HomeScreen.tsx';
import { ProfileScreen } from './screens/ProfileScreen.tsx';
import { BookingScreen } from './screens/BookingScreen.tsx';
import { NotificationsScreen } from './screens/NotificationsScreen.tsx';
import { NavigationScreen } from './screens/NavigationScreen.tsx';
import { RatingScreen } from './screens/RatingScreen.tsx';
import { PresentationScreen } from './screens/PresentationScreen.tsx';
import { ARFinderScreen } from './screens/ARFinderScreen.tsx';
import { LeaderboardScreen } from './screens/LeaderboardScreen.tsx';
import { DigitalKeyScreen } from './screens/DigitalKeyScreen.tsx';
import { BottomNav } from './components/BottomNav.tsx';
import { SOSButton } from './components/SOSButton.tsx';

const FavoritesScreen = () => (
  <div className="h-full w-full flex items-center justify-center bg-white p-12 text-center flex-col animate-fade-in">
    <div className="w-32 h-32 bg-rose-50 p-6 rounded-full mb-8 flex items-center justify-center animate-pulse-gentle">
      <span className="text-6xl text-rose-500">❤️</span>
    </div>
    <h2 className="text-3xl font-black text-slate-900 tracking-tighter italic">المواقف المفضلة</h2>
    <p className="text-slate-400 mt-4 leading-relaxed font-bold italic">قائمة الأماكن التي تحبين الركن فيها ستظهر هنا لسهولة الوصول إليها لاحقاً.</p>
  </div>
);

const SettingsScreen: React.FC<{setScreen: (s: ScreenState) => void}> = ({ setScreen }) => (
  <div className="h-full w-full bg-slate-50 p-8 overflow-y-auto pb-24 animate-fade-in">
    <h2 className="text-3xl font-black mb-10 text-slate-900 pt-4 tracking-tighter italic">الإعدادات</h2>
    
    <div className="mb-10">
        <button 
            onClick={() => setScreen(ScreenState.PRESENTATION)}
            className="w-full bg-indigo-600 rounded-[2.5rem] p-8 text-white shadow-2xl text-right flex justify-between items-center group relative overflow-hidden border-b-8 border-indigo-800"
        >
            <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700"></div>
            <div className="relative z-10">
                <span className="block font-black text-2xl mb-1 tracking-tighter">ملف المشروع</span>
                <span className="text-indigo-200 text-[10px] font-black uppercase tracking-[0.3em]">Project Dossier</span>
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
            <div key={item.label} className="p-6 bg-white rounded-3xl flex justify-between items-center border border-slate-100 hover:shadow-xl hover:border-indigo-100 transition-all cursor-pointer group active:scale-[0.98]">
                <div className="flex items-center gap-4">
                    <span className="text-2xl group-hover:scale-125 transition-transform">{item.icon}</span>
                    <span className="font-black text-slate-800 tracking-tighter italic">{item.label}</span>
                </div>
                <span className="text-slate-300">←</span>
            </div>
        ))}
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>(ScreenState.SPLASH);

  const renderScreen = () => {
    try {
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
    } catch (error) {
      console.error("Screen Rendering Error:", error);
      return <div className="p-10 text-center font-bold">عذراً، حدث خطأ في تحميل هذه الشاشة.</div>;
    }
  };

  const shouldShowNav = [ScreenState.HOME, ScreenState.PROFILE, ScreenState.FAVORITES, ScreenState.SETTINGS].includes(currentScreen);
  const shouldShowSOS = currentScreen === ScreenState.HOME;

  return (
    <div className="w-full h-full bg-slate-100 flex justify-center items-center font-sans overflow-hidden">
      <div className="w-full max-w-[430px] h-full sm:h-[880px] bg-white sm:rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.15)] overflow-hidden relative border-none sm:border-[12px] border-slate-900 box-content">
        <div className="hidden sm:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-slate-900 rounded-b-3xl z-50"></div>
        <div className="h-full w-full relative">{renderScreen()}</div>
        {shouldShowSOS && <SOSButton onNavigate={() => setCurrentScreen(ScreenState.NAVIGATION)} />}
        {shouldShowNav && <BottomNav currentScreen={currentScreen} setScreen={setCurrentScreen} />}
      </div>
    </div>
  );
};

export default App;
