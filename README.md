# Personal Portfolio Website

A modern, responsive personal portfolio built with React, Vite, and Tailwind CSS. It showcases my projects, technical skills, and contact information, with a backend-powered contact form.

## Live Demo

**Portfolio:** [View Live Website](https://my-portfolio-kappa-six-32.vercel.app/)

## Features

- Responsive design for desktop, tablet, and mobile
- Projects and technical skills showcase
- Light and dark mode
- Redux Toolkit state management
- Contact form integrated with a REST API
- Form validation and submission feedback
- Emerald-green themed user interface

## Tech Stack

- **Frontend:** React, JavaScript (JSX)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Icons:** Lucide React
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone YOUR_FRONTEND_REPOSITORY_URL
cd portfolio-frontend
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:5000
```

For production, set `VITE_API_URL` to your deployed backend URL.

> Vite exposes variables prefixed with `VITE_` to browser code. Never store private keys or secrets in these variables.

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

## Backend

The contact form communicates with the [Portfolio Backend](https://portfolio-trld.onrender.com), which stores messages in MongoDB and sends email notifications.

## Deployment

The frontend is deployed on Vercel. Configure the `VITE_API_URL` environment variable in your Vercel project settings before deploying.

## License

This project is available for viewing and learning. Contact me before reusing substantial portions of the design or code.
