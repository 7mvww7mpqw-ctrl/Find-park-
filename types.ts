
export enum ScreenState {
    SPLASH = 'SPLASH',
    LOGIN = 'LOGIN',
    HOME = 'HOME',
    PROFILE = 'PROFILE',
    FAVORITES = 'FAVORITES',
    SETTINGS = 'SETTINGS',
    BOOKING = 'BOOKING',
    NOTIFICATIONS = 'NOTIFICATIONS',
    NAVIGATION = 'NAVIGATION',
    RATING = 'RATING',
    PRESENTATION = 'PRESENTATION',
    AR_FINDER = 'AR_FINDER',
    LEADERBOARD = 'LEADERBOARD',
    DIGITAL_KEY = 'DIGITAL_KEY'
}

export enum ParkingStatus {
    AVAILABLE = 'AVAILABLE',
    FULL = 'FULL',
    RESERVED = 'RESERVED',
    USER_SAVED = 'USER_SAVED'
}

export interface ParkingSpot {
    id: string;
    name: string;
    type: string;
    status: ParkingStatus;
    distance: string;
    time: string;
    price: string;
    x: number;
    y: number;
    features: string[];
    busyHours: number[]; 
    aiInsight?: string;
    sensorId: string;
    occupancyRate: number;
    lastUpdate: string;
    isFavorite?: boolean;
}

export interface UserProfile {
    name: string;
    email: string;
    points: number;
    carModel: string;
    plateNumber: string;
    phone: string;
    rank: number;
}

export interface NotificationItem {
    id: string;
    title: string;
    message: string;
    time: string;
    type: 'info' | 'success' | 'warning';
}
