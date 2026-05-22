# 🏎️ Alpha Car Service | Premium Autoservice Web Application

[![CI Status](https://github.com/Den3112/v0-alpha-car/actions/workflows/ci.yml/badge.svg)](https://github.com/Den3112/v0-alpha-car/actions/workflows/ci.yml)
[![Next.js Version](https://img.shields.io/badge/Next.js-16.0.10-black?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React Version](https://img.shields.io/badge/React-19.0-blue?logo=react&logoColor=white)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind--CSS-v4.0-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployment](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel&logoColor=white)](https://v0-alpha-car.vercel.app)

A high-performance, premium web application for **Alpha Car Service**, a professional automotive repair shop based in Bratislava (Vrakuňa). This application is designed according to the highest global standards of UX/UI design, featuring smooth cinematic scroll-driven animations, full bilingual support (Slovak/Russian), and optimal page speed load performance.

---

## ✨ Key Features & Visual Upgrades

Following a comprehensive performance and responsiveness audit, the application implements elite-standard web development practices:

*   **🎬 Scroll-Driven Bento Grid (Hero & Technology):** Cinematic scroll animation where the main center banner dynamically expands and rounds while side interactive bento columns slide in.
*   **📱 Pristine Mobile Responsiveness:** Bento layouts dynamically adapt for mobile viewports (`isMobile < 1024px`), hiding narrow side columns via `display: none` and scaling the main visual banner to 100% width for perfect legibility.
*   **🛡️ Scroll Overflow & Page Shift Protection:** Root sections are secured with strict `overflow-hidden` constraints, accompanied by `overflow-x-hidden` base rules on both `html` and `body` nodes. This guarantees a clean layout with zero side-scrolling shifts.
*   **⚡ Smart Cached Image Hydration:** A custom `FadeImage` wrapper verified by a React `useRef` directly tracks the native HTML Image `.complete` attribute on mount. This prevents browser-cached images from locking into a hidden state (`opacity-0`).
*   **📍 Integrated Contrast Map Embed:** A custom contrast-filtered map widget for Majerská 42, styled to match the dark theme for cohesive page blending.

---

## 🛠️ Technology Stack

*   **Core Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack Compiler support)
*   **Frontend Engine:** [React 19](https://react.dev)
*   **Style Engine:** [Tailwind CSS v4.0](https://tailwindcss.com) (high-speed native build compilation)
*   **Icon Library:** [Lucide React](https://lucide.dev)
*   **Core Analytics:** [Vercel Analytics](https://vercel.com/analytics) (native Core Web Vitals monitoring)
*   **CI/CD Pipeline:** [GitHub Actions](https://github.com/features/actions) & [Vercel Deployment Pipelines](https://vercel.com)

---

## 🚀 Getting Started (Local Development)

To run the project locally, ensure you have **Node.js v22+** and the **pnpm** package manager installed.

### 1. Clone the Repository
```bash
git clone https://github.com/Den3112/v0-alpha-car.git
cd v0-alpha-car
```

### 2. Install Dependencies
Force fetch platform-specific native compilation assets (including the native Tailwind compiler binary):
```bash
pnpm install --force
```

### 3. Start the Development Server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) on your local browser.

### 4. Build Production Bundle
To execute TypeScript validation and compile the production build:
```bash
pnpm build
```

---

## ⚙️ Continuous Integration (CI)

A structured automatic GitHub Actions workflow (`.github/workflows/ci.yml`) triggers on push and pull requests targeting the `main` branch to perform:
1. Virtual container bootstrapping using Ubuntu.
2. pnpm dependency caching for high-speed runs.
3. Native module installation.
4. Next.js compiler execution (`pnpm build`) to verify perfect code integrity before main branch deployment.
