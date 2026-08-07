export interface CountdownTime {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    expired: boolean;
}

export interface CountdownConfig {
    title: string;
    expiredMessage: string;
    targetDate: Date;
}