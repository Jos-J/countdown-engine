import { calculateCountdown } from "./countdown";
import { updateCountdownView } from "./countdown-view";

const config = {
    title: "Countdown to College Football",
    targetDate: new Date("2026-08-29T11:00:00")
};

function updateCountdown(): void {
    const countdown = calculateCountdown(config.targetDate);

    updateCountdownView(countdown);
}
updateCountdown();

setInterval(updateCountdown, 1000);
// console.log(countdown);

