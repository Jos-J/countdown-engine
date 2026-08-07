import { calculateCountdown } from "./countdown";
import { updateCountdownView } from "./countdown-view";
import type { CountdownConfig } from "./types";

const config = {
    title: "Countdown To College Football",
    expiredMessage: "College Football Has Started",
    targetDate: new Date("2026-08-06T23:35:00")
};

let intervalID: ReturnType<typeof setInterval>;

function updateCountdown(): void {
    const countdown = calculateCountdown(config.targetDate);

    updateCountdownView(countdown, config);

    if (countdown.expired) {
        clearInterval(intervalID);
    }
}
updateCountdown();

intervalID = setInterval(updateCountdown, 1000);




// console.log(countdown);

