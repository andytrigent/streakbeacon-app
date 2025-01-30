# 🌟 StreakBeacon

> Shine a light on your progress. Stay consistent, stay unstoppable!

StreakBeacon is a modern, minimalist task tracking application built with Next.js 15+, React 19+, and TypeScript. It helps users maintain consistency in their daily tasks through an intuitive streak-based tracking system, inspired by GitHub's contribution graph.

![StreakBeacon Logo](public/logo.png)

## 🚀 Features

- 📊 Visual streak tracking with GitHub-style contribution graph
- ✅ Quick task management with keyboard shortcuts
- 🌓 Dark/Light theme support
- 📱 Responsive design for all devices
- 🔒 Privacy-focused with local storage
- ⚡ Offline-first architecture
- 🎯 Category-based task organization
- 🔔 Browser notifications (optional)

## 🛠️ Tech Stack & Dependencies

### Core

- **Framework:** Next.js 15.1.6
- **UI Library:** React 19.0.0
- **Language:** TypeScript 5.x
- **Package Manager:** npm 10.x+

### UI & Styling

- **CSS Framework:** Tailwind CSS 3.4.1
- **Components:** shadcn/ui (latest)
- **Icons:** Lucide React 0.474.0

### State & Data

- **State Management:** React Server Components + Local Storage
- **Theme Management:** next-themes (latest)

### Testing & Development

- **Testing Framework:** Playwright 1.41.x
- **Linting:** ESLint 9.x
- **Types:** @types/react 19.x, @types/node 20.x

## 📦 Prerequisites

- **Node.js:** 18.17 or later (recommended: 20.x LTS)
- **npm:** 10.x or later (we exclusively use npm, not pnpm or yarn)
- **Git:** 2.x or later
- **Supported Browsers:** Chrome 100+, Firefox 100+, Safari 15+

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/andytrigent/streakbeacon-app.git
   cd streakbeacon-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Install Playwright browsers**

   ```bash
   npx playwright install
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🧪 Testing

We use Playwright for comprehensive testing across different browsers and devices.

### Running Tests

```bash
# Install Playwright browsers
npx playwright install

# Run all tests
npm run test

# Run specific test file
npx playwright test tests/ui/navigation.spec.ts

# Run tests with UI mode
npx playwright test --ui

# Show test report
npx playwright show-report
```

### Test Coverage

- **UI Tests**: Navigation, layout, responsiveness
- **Feature Tests**: Dashboard, settings, theme switching
- **Integration Tests**: Task management, data persistence
- **Cross-browser**: Chrome, Firefox, Safari
- **Mobile**: iOS and Android viewports

### Manual Testing Required

Some scenarios require manual testing:

- Long-term data persistence
- Browser storage limits
- Real device notifications
- System theme integration
- Accessibility with screen readers

## 🏗️ Project Structure

```
streakbeacon-app/
├── app/                   # Next.js App Router pages
├── components/
│   ├── ui/               # Reusable UI components (shadcn)
│   └── features/         # Feature-specific components
├── lib/                  # Utility functions and shared logic
├── tests/                # Playwright tests
│   ├── ui/              # UI and navigation tests
│   └── features/        # Feature-specific tests
├── public/               # Static assets
├── styles/               # Global styles and Tailwind config
└── types/                # TypeScript type definitions
```

## 💻 Development

### Code Style

- Follow TypeScript best practices with strict type checking
- Use Server Components by default unless client interactivity is needed
- Follow the shadcn component patterns
- Use named exports instead of default exports
- Maintain clean imports with absolute paths using `@/` alias

### Key Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run Playwright tests
```

### Keyboard Shortcuts

- `Enter` → Add a task
- `Tab` → Switch between task categories
- `Space` → Mark task as completed

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the TypeScript strict mode guidelines
- Ensure proper error handling and loading states
- Write meaningful commit messages
- Add appropriate documentation for new features
- Ensure responsive design works on all screen sizes
- Write tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by GitHub's contribution graph
- Built with [shadcn/ui](https://ui.shadcn.com/) components
- Icons from [Lucide](https://lucide.dev/)

---

Made with ❤️ by [Your Team Name]

For detailed documentation about the development process and user stories, check out our [Development Tasks](devtasks.md) and [PRD](prd.md).
