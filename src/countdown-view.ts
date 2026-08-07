import type { CountdownTime } from "./types";

export function updateCountdownView(time: CountdownTime): void {
    const daysElement = document.querySelector("#days");
    const hoursElement = document.querySelector("#hours");
    const minutesElement = document.querySelector("#minutes");
    const secondsElement = document.querySelector("#seconds");

    if(
        !daysElement ||
        !hoursElement ||
        !minutesElement ||
        !secondsElement
    ) {
        return;
    }

    daysElement.textContent = time.days.toString().padStart(2, "0");
    hoursElement.textContent = time.hours.toString().padStart(2, "0");
    minutesElement.textContent = time.minutes.toString().padStart(2, "0");
    secondsElement.textContent = time.seconds.toString().padStart(2, "0");
}