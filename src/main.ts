import { startCountdown } from "./countdown";
import { setTitle } from "./countdown-view";

const config = {
    title: "Countdown to College Football",
    targetDate: new Date("2026-08-29T12:00:00")
};

// Set the page title
setTitle(config.title);

// Start the countdown
startCountdown(config.targetDate);