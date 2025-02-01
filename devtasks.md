# 📌 StreakBeacon - Development User Stories (SB Series)

This document outlines the **progressive and iterative development** of StreakBeacon, starting with core functionality and gradually implementing advanced features.

---

## ✅ **Phase 1: Initial Setup & Basic UI** (COMPLETED)

### **SB001 - Project Initialization** ✅

**As a developer**, I want to initialize a Next.js + Tailwind + Shadcn UI project, so that I have a foundation for development.

- **Acceptance Criteria:**
  - ✅ Initialize Next.js with App Router (`npx create-next-app@latest .`).
  - ✅ Install Tailwind CSS and configure it (`tailwind.config.ts`).
  - ✅ Install and configure Shadcn (`npx shadcn init`).
  - ✅ Set up `.cursorrules` to enforce project guidelines.
  - ✅ Set up Playwright for testing.

---

### **SB002 - Single Page Layout** ✅

**As a user**, I want a clean, minimalist single-page interface that shows all my important information at once.

- **Acceptance Criteria:**
  - ✅ Create a single-page layout with main content sections:
    - Task Input & List
    - Streak Graph
    - Quick Settings/Theme Toggle
  - ✅ Implement collapsible sections for better space management
  - ✅ Add light/dark mode toggle in the header
  - ✅ Ensure all main features are accessible without page navigation

---

### **SB003 - Settings Dialog** ✅

**As a user**, I want to access settings through a modal dialog without leaving the main view.

- **Acceptance Criteria:**
  - ✅ Create a settings dialog component using shadcn/ui
  - ✅ Implement theme preferences in settings
  - ✅ Add placeholder sections for future settings
  - ✅ Ensure settings persist across sessions

---

## 📊 **Phase 2: Streak Tracking Core**

### **SB004 - Task Input Field**

**As a user**, I want to quickly add tasks using a simple text input at the top of my task list.

- **Acceptance Criteria:**
  - Add a prominent input field in the main view
  - Support quick task entry with Enter key
  - Store tasks in local storage
  - Show immediate feedback on task addition

---

### **SB005 - Daily Task List**

**As a user**, I want to see my tasks for today in a clean list format right below the input field.

- **Acceptance Criteria:**
  - Display tasks in a scrollable list
  - Add checkboxes for completion
  - Support inline editing and deletion
  - Show task count and completion status

---

### **SB006 - Streak Tracking Grid**

**As a user**, I want to see my streak graph prominently displayed above my task list.

- **Acceptance Criteria:**
  - Implement GitHub-style contribution graph
  - Color code based on task completion:
    - No tasks → Light gray
    - 1-2 tasks → Light green
    - 3-5 tasks → Medium green
    - 6+ tasks → Dark green
  - Show task details on hover
  - Make it responsive for all screen sizes

---

## 📈 **Phase 3: Gamification & User Engagement**

### **SB007 - Streak Validation & Motivational Messages**

**As a user**, I want motivational messages based on my streaks, so that I stay motivated to maintain consistency.

- **Acceptance Criteria:**
  - If a user **maintains a streak for 3+ days**, show **positive reinforcement messages**.
  - If a streak **is broken**, encourage them to restart.
  - Messages should update dynamically.

---

### **SB008 - Task Auto-Carry Forward**

**As a user**, I want incomplete tasks to automatically move to the next day, so that I don't lose track of pending work.

- **Acceptance Criteria:**
  - At midnight, **move unfinished tasks** to the next day's list.
  - Allow users to **manually disable auto-carry forward**.

---

### **SB009 - Weekly Overview Dashboard**

**As a user**, I want a **weekly summary of my progress**, so that I can review my performance at a glance.

- **Acceptance Criteria:**
  - Show **task completion stats** for each day.
  - Highlight **longest active streak**.
  - Display **missed tasks** and suggest actions.

---

## ⚡ **Phase 4: Advanced Features & Customization**

### **SB010 - Category-Based Task Sorting**

**As a user**, I want to categorize my tasks (Work, Health, Learning), so that I can organize them better.

- **Acceptance Criteria:**
  - Allow users to assign **categories** while adding tasks.
  - Display tasks under **separate collapsible sections**.

---

### **SB011 - Drag & Drop Task Sorting**

**As a user**, I want to **rearrange tasks via drag-and-drop**, so that I can prioritize my tasks efficiently.

- **Acceptance Criteria:**
  - Enable **drag-and-drop reordering** for task lists.
  - Save the new order persistently.

---

### **SB012 - Notifications & Reminders**

**As a user**, I want **browser notifications** to remind me of pending tasks, so that I stay on track.

- **Acceptance Criteria:**
  - Add **configurable notifications** (Morning, Afternoon, Evening).
  - Clicking a notification should **open the app**.

---

### **SB013 - Offline Mode Support**

**As a user**, I want the app to work **fully offline**, so that I can track tasks without internet access.

- **Acceptance Criteria:**
  - Store all task and streak data in **LocalStorage**.
  - Ensure **data persists** when reloading the page.

---

## 🚀 **Phase 5: Final Optimizations & Enhancements**

### **SB014 - Performance Optimizations**

**As a developer**, I want to optimize the app for speed and efficiency, so that it loads instantly.

- **Acceptance Criteria:**
  - Implement **lazy loading** for non-essential components.
  - Optimize **animations** for smooth UI transitions.
  - Ensure the app **loads under 1 second**.

---

### **SB015 - Theming & Customization**

**As a user**, I want to customize my experience (dark mode, streak colors), so that the app matches my preferences.

- **Acceptance Criteria:**
  - **Light & Dark Mode toggle**.
  - Customizable **streak colors** (green, blue, warm tones).

---

### **SB016 - Export & Sync**

**As a user**, I want to export my streak data, so that I can save my progress externally.

- **Acceptance Criteria:**
  - Allow **CSV/JSON export** of task and streak data.
  - Enable **cloud sync** for future updates.

---

### **SB017 - Final Testing & Deployment**

**As a developer**, I want to perform **end-to-end testing**, so that I ensure the app is bug-free before launch.

- **Acceptance Criteria:**
  - Conduct **unit and integration tests**.
  - Deploy the app to **GitHub Pages or Vercel**.
  - Ensure **cross-browser compatibility**.

---

## 🎯 **Final Deliverable**

✅ **Fully functional StreakBeacon app**  
✅ **Optimized for speed, offline usage, and gamified habit tracking**  
✅ **Minimalist, distraction-free UI with a focus on consistency**

---

## **📅 Development Timeline**

| Sprint   | Features Covered                                       |
| -------- | ------------------------------------------------------ |
| Sprint 1 | SB001 - SB003 (Setup, Layout, Homepage)                |
| Sprint 2 | SB004 - SB006 (Task Input, Streak Grid)                |
| Sprint 3 | SB007 - SB009 (Motivation, Weekly Overview)            |
| Sprint 4 | SB010 - SB013 (Categories, Drag & Drop, Notifications) |
| Sprint 5 | SB014 - SB017 (Optimizations, Customization, Export)   |

---

🚀 **Next Steps:**  
1️⃣ Begin **Sprint 1: Initial Setup** (SB001 - SB003).  
2️⃣ Ensure basic UI & routing works before proceeding.  
3️⃣ Once done, move to **Streak Tracking Grid (SB006)**.

---

🔥 Let's build **StreakBeacon** step by step! 🚀
