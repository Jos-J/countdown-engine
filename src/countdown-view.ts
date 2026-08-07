import type { CountdownTime, CountdownConfig } from "./types";

export function updateCountdownView(
    time: CountdownTime,
    config: CountdownConfig
): void {
    const heading = document.querySelector("h1");
    const daysElement = document.querySelector("#days");
    const hoursElement = document.querySelector("#hours");
    const minutesElement = document.querySelector("#minutes");
    const secondsElement = document.querySelector("#seconds");

    if (
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }

    if (heading) {
        heading.textContent =
            time.expired
                ? config.expiredMessage
                : config.title;
    }

    daysElement.textContent = time.days.toString().padStart(2, "0");
    hoursElement.textContent = time.hours.toString().padStart(2, "0");
    minutesElement.textContent = time.minutes.toString().padStart(2, "0");
    secondsElement.textContent = time.seconds.toString().padStart(2, "0");


}