
import { ParkingSpot, ParkingStatus, UserProfile, NotificationItem } from './types';

export const MOCK_USER: UserProfile = {
    name: "جوري",
    email: "jury@example.com",
    points: 1250,
    carModel: "Toyota Camry 2024",
    plateNumber: "أ ب ج 1234",
    phone: "0555555555",
    rank: 4
};

export const MOCK_SPOTS: ParkingSpot[] = [
    // المول
    { id: '1', name: 'المول - بوابة A', type: 'مول', status: ParkingStatus.AVAILABLE, distance: '120 م', time: '2 د', price: '10 ر.س', x: 45, y: 35, features: ['مغطى', 'شحن'], busyHours: [20, 80, 10], aiInsight: "مثالي حالياً.", sensorId: "IOT-M1", occupancyRate: 15, lastUpdate: "الآن", isFavorite: true },
    { id: '4', name: 'المول - بوابة B', type: 'مول', status: ParkingStatus.AVAILABLE, distance: '150 م', time: '3 د', price: '10 ر.س', x: 55, y: 42, features: ['VIP'], busyHours: [10, 20], aiInsight: "متوفر.", sensorId: "IOT-M2", occupancyRate: 5, lastUpdate: "الآن" },
    { id: '7', name: 'المول - بوابة C', type: 'مول', status: ParkingStatus.AVAILABLE, distance: '200 م', time: '4 د', price: '10 ر.س', x: 50, y: 30, features: ['مغطى'], busyHours: [40, 50], aiInsight: "متوفر.", sensorId: "IOT-M3", occupancyRate: 25, lastUpdate: "الآن" },

    // المستشفى
    { id: '2', name: 'المستشفى - الطوارئ', type: 'مستشفى', status: ParkingStatus.AVAILABLE, distance: '450 م', time: '6 د', price: 'مجاني', x: 75, y: 20, features: ['طوارئ', 'أمان'], busyHours: [100, 100], aiInsight: "أولوية قصوى.", sensorId: "IOT-H1", occupancyRate: 30, lastUpdate: "دقيقة" },
    { id: '8', name: 'المستشفى - العيادات', type: 'مستشفى', status: ParkingStatus.FULL, distance: '500 م', time: '7 د', price: 'مجاني', x: 80, y: 25, features: ['مغطى'], busyHours: [90, 95], aiInsight: "ممتلئ.", sensorId: "IOT-H2", occupancyRate: 100, lastUpdate: "الآن" },

    // المكتبة
    { id: '5', name: 'المكتبة الرقمية', type: 'مكتبة', status: ParkingStatus.AVAILABLE, distance: '1.2 كم', time: '12 د', price: 'مجاني', x: 20, y: 80, features: ['شحن', 'هدوء'], busyHours: [50, 60], aiInsight: "متاح.", sensorId: "IOT-L1", occupancyRate: 40, lastUpdate: "10 د" },

    // المطعم
    { id: '9', name: 'منطقة المطاعم - الساحة', type: 'مطعم', status: ParkingStatus.AVAILABLE, distance: '300 م', time: '5 د', price: '5 ر.س', x: 15, y: 55, features: ['VIP', 'مكشوف'], busyHours: [70, 90], aiInsight: "مزدحم قليلاً.", sensorId: "IOT-R1", occupancyRate: 65, lastUpdate: "الآن" },
    { id: '10', name: 'مطعم القرية - VIP', type: 'مطعم', status: ParkingStatus.AVAILABLE, distance: '350 م', time: '6 د', price: '20 ر.س', x: 10, y: 50, features: ['VIP', 'مغطى'], busyHours: [20, 30], aiInsight: "متاح.", sensorId: "IOT-R2", occupancyRate: 10, lastUpdate: "الآن", isFavorite: true },

    // عام
    { id: '6', name: 'الساحة الشمالية', type: 'عام', status: ParkingStatus.AVAILABLE, distance: '300 م', time: '4 د', price: '2 ر.س', x: 15, y: 20, features: ['مكشوف'], busyHours: [10, 15], aiInsight: "واسع.", sensorId: "IOT-N1", occupancyRate: 12, lastUpdate: "الآن" },
];

export const CATEGORIES = [
    { id: 'all', label: 'الكل', icon: 'Grid' },
    { id: 'covered', label: 'مغطاة', icon: 'Umbrella' },
    { id: 'ev', label: 'شحن EV', icon: 'Zap' },
    { id: 'vip', label: 'VIP', icon: 'Crown' },
    { id: 'free', label: 'مجاني', icon: 'Wallet' },
];

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
    { id: '1', title: 'تم الحجز', message: 'موقف B-12 جاهز.', time: '2 د', type: 'success' },
    { id: '2', title: 'ازدحام', message: 'المستشفى ممتلئ.', time: '1 س', type: 'warning' },
];

export const LEADERBOARD_DATA = [
    { avatar: 'S', name: 'سارة', points: 2850, isMe: false },
    { avatar: 'J', name: 'جوري', points: 1250, isMe: true },
];
