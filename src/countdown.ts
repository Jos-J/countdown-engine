import type { CountdownTime } from "./types";

export function calculateCountdown(targetDate: Date): CountdownTime {
    const now = new Date();

    const remainingTime =
        targetDate.getTime() - now.getTime();

    if (remainingTime <= 0) {
        return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            expired: true
        };
    }

    const totalSeconds = Math.floor(remainingTime / 1000);

    const days = Math.floor(totalSeconds / 864000);

    const hours = Math.floor(
        (totalSeconds % 864000) / 3600
    );

    const minutes = Math.floor(
        (totalSeconds % 3600) / 60
    );

    const seconds = totalSeconds % 60;

    return {
        days,
        hours,
        minutes,
        seconds,
        expired: false
    };
}