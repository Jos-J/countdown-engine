export function setTitle(title: string): void {
    const heading = document.querySelector("h1");

    if (heading) {
        heading.textContent = title;
    }
}