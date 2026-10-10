import { calculateCountdown } from "./countdown";
import { updateCountdownView } from "./countdown-view";
import type { CountdownConfig } from "./types";

const config: CountdownConfig = {
    title: "till holiday break",
    expiredMessage: "Break has started",
    targetDate: new Date("2026-12-11T00:00:00")
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

