import { calculateCountdown } from "./countdown";
import { updateCountdownView } from "./countdown-view";
import type { CountdownConfig } from "./types";

const config: CountdownConfig = {
    title: "Countdown To Semester End",
    expiredMessage: "Semester has ended",
    targetDate: new Date("2026-10-31T00:00:00")
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

