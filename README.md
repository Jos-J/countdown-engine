# countdown-engine

## Description
A Countdown Engine is designed to be a reusable browser-based component that powers real-time countdowns for websites, dashboards, games, and enterprise applications. The project emphasizes clean architecture, reusable business logic, and future scalability, making it suitable for integration into larger systems.

---

## Features

- Real-time countdown updates every second
- Configurable target date and time
- Clean separation between business logic and UI
- Responsive layout
- Dark modern design
- Easily customizable colors, fonts, and background
- Zero backend required

---

## Project Goals

This project serves as both a reusable countdown component and a learning project for improving TypeScript development.

Future integration with HydraHub may include:

- Reservation expiration timers
- Promotional countdowns
- Product launch timers
- Shipping deadlines
- Inventory release countdowns
- Dashboard widgets

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| ![Typescript](https://img.shields.io/badge/Typescript-grey.svg)| Countdown logic |
| ![HTML](https://img.shields.io/badge/HTML-grey.svg)| Page structure |
| ![Tailwind](https://img.shields.io/badge/Tailwind-grey.svg) | Styling and animations |
| ![Vite](https://img.shields.io/badge/Vite-grey.svg) | Development server and build tool |
| ![GIT](https://img.shields.io/badge/Git-grey.svg) | Version control |









---

## Project Structure

```
countdown-clock/
│
├── assets/
│   ├── images/
│   └── fonts/
│
├── src/
│   ├── countdown.ts
│   ├── countdown-view.ts
│   ├── main.ts
│   └── types.ts
│
├── styles/
│   └── main.css
│
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## Installation

Clone the repository.

```bash
git clone https://github.com/Jos-J/countdown-engine
```

Move into the project.

```bash
cd countdown-clock
```

Install dependencies.

```bash
npm install
```

Start the development server.

```bash
npm run dev
```

---

## Building for Production

```bash
npm run build
```

Preview the production build.

```bash
npm run preview
```

Countdown Engine

- [Live Demo](https://jos-j.github.io/countdown-engine/)
---

## Configuration

The countdown target can be changed inside:

```
src/countdown.ts
```

Example:

```ts
const targetDate = new Date("2030-12-31T23:59:59");
```

---

## Architecture

The application follows a simple separation of responsibilities.

```
Browser
   │
   ▼
main.ts
   │
   ▼
countdown-view.ts
   │
   ▼
countdown.ts
```

### countdown.ts

Responsible only for calculating remaining time.

Returns:

- Days
- Hours
- Minutes
- Seconds
- Expired status

No DOM manipulation occurs here.

---

### countdown-view.ts

Responsible for:

- Updating HTML
- Formatting numbers
- Displaying the countdown
- Showing expiration messages

---

### main.ts

Application entry point.

Responsible for:

- Initializing the countdown
- Starting the update interval
- Loading configuration

---

## Planned Features

### Version 1.0

- [x] Basic countdown
- [x] Responsive layout
- [x] Configurable target date

### Version 1.1

- [ ] Pause / Resume
- [ ] Multiple countdown themes
- [ ] Background image support
- [ ] Animated digit transitions

### Version 1.2

- [ ] Sound effects
- [ ] Fullscreen mode
- [ ] Event callbacks
- [ ] Time zone selection

### Version 2.0

- [ ] React component package
- [ ] HydraHub integration
- [ ] API support
- [ ] Database-driven events

---

## Future HydraHub Integration

The countdown engine is intentionally designed to be reusable.

Potential HydraHub applications include:

- Inventory reservation expiration
- Flash sale timers
- Order fulfillment deadlines
- Maintenance windows
- Dashboard countdown widgets

---

## Development Principles

- Keep business logic separate from presentation.
- Write reusable, testable TypeScript modules.
- Prefer simplicity over unnecessary dependencies.
- Design components for future scalability.

---

## License

![MIT License](https://img.shields.io/badge/License-MIT-grey.svg)

---

## Author

Created as part of a personal software engineering portfolio and future HydraHub ecosystem.

Built with TypeScript, curiosity, and lots of Matcha.

