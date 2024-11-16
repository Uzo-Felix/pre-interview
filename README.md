# Article Application

A React-based article management system with theme switching, infinite scroll, and search capabilities.

## Features

- Light/Dark theme switching with persistent storage
- Article list with infinite scrolling
- Search and filter articles by category, author, and content
- Responsive design for all device sizes
- Share article functionality
- Full article view with navigation

## Getting Started

### Local Development

Install dependencies:
```bash
npm install
```

Start development server:
```bash
npm start
```
Run tests:
```bash
npm test
```
Build for production:
```bash
npm run build
```

### Docker Setup
Build container:
```bash
docker build -t article-app .
```
Run container:
```bash
docker run -p 3000:3000 article-app
```

### Technology Stack
- React
- TypeScript
- Tailwind CSS
- React Router
- Jest + Testing Library

### Browser Support
Supports all modern browsers:

- Chrome
- Firefox
- Safari
- Edge