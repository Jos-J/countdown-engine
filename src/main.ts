import { calculateCountdown} from "./countdown";
import { setTitle } from "./countdown-view";

const config = {
    title: "Countdown to College Football",
    targetDate: new Date("2026-08-29T11:00:00")
};

// Set the page title
setTitle(config.title);

// Start the countdown
calculateCountdown(config.targetDate);