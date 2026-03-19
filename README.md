# Quadque App

The Next.js-powered web application for **Quadque Technologies**, providing an optimized, app-like experience for clients and visitors. This project delivers the blog, service pages, and interactive content through a performant server-side rendered architecture.

Part of the **Quadque digital platform ecosystem**.

---

## Features

- Server-side rendering and static generation with Next.js 13
- App-like responsive experience optimized for mobile and desktop
- Blog and content management integration
- Animated UI with React Awesome Reveal and Lottie Web
- Interactive carousels and counters for dynamic content display
- Sound interaction support via use-sound
- Ant Design component library for polished UI elements
- Tailwind CSS for rapid, utility-first styling
- Environment-based builds for local development and production

## Tech Stack

| Layer        | Technology                                       |
|--------------|---------------------------------------------------|
| Framework    | Next.js 13 (React 18)                            |
| Styling      | Tailwind CSS 3, PostCSS, Emotion, Ant Design 5   |
| Animations   | React Awesome Reveal, Lottie Web, React Typical   |
| HTTP Client  | Axios                                             |
| Components   | Slick Carousel, React CountUp, React Socks        |
| Audio        | use-sound                                         |
| Linting      | ESLint (Next.js config)                           |

## Getting Started

### Prerequisites

- Node.js >= 16
- Yarn or npm

### Installation

```bash
git clone https://github.com/mhmalvi/quadque-app.git
cd quadque-app
yarn install
```

### Environment Configuration

Configure the following environment files:

```
.env.development.local   — Local development settings
.env.production           — Production settings
```

### Development

```bash
yarn dev-local
```

### Production Build

```bash
yarn build-prod
```

### Static Export

```bash
yarn export-prod
```

## Project Structure

```
quadque-app/
├── pages/               # Next.js page routes
├── public/              # Static assets
├── styles/              # Global and module stylesheets
├── next.config.js       # Next.js configuration
├── tailwind.config.js   # Tailwind CSS configuration
└── postcss.config.js    # PostCSS plugins
```

## License

Proprietary — Quadque Technologies. All rights reserved.
