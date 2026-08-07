import { calculateCountdown } from "./countdown";

const config = {
    title: "Countdown to College Football",
    targetDate: new Date("2026-08-29T11:00:00")
};

const countdown = calculateCountdown(config.targetDate);

console.log(countdown);