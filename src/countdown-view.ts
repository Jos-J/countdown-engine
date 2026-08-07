import type { CountdownTime, CountdownConfig } from "./types";

function updateNumber(
    element: Element,
    value: number
): void {

    const formattedValue =
        value.toString().padStart(2, "0");

    if (element.textContent === formattedValue) {
        return;
    }

    element.textContent = formattedValue;

    element.classList.remove("number-change");

    void element.getBoundingClientRect();

    element.classList.add("number-change");
}

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

    updateNumber(daysElement, time.days);
    updateNumber(hoursElement, time.hours);
    updateNumber(minutesElement, time.minutes);
    updateNumber(secondsElement, time.seconds);
}