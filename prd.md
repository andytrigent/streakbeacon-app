# Product Requirements Document (PRD)

## App Name: StreakBeacon

**Short Name (for UI):** Beacon  
**Tagline:** "Shine a light on your progress. Stay consistent, stay unstoppable!"  
**GitHub Repository:** [streakbeacon-app](https://github.com/andytrigent/StreakBeacon-app)

## Logo Concept Ideas

- A minimalist lighthouse emitting streaks of light (symbolizing tracking progress).
- A glowing streak graph forming a beacon shape.
- A combination of a checkmark + streak grid, visually tying tasks and streaks together.

## Color Palette

- **Primary Color:** 🟢 `#27AE60` (Beacon Green) – Represents growth, consistency.
- **Accent Color:** 🔵 `#2D9CDB` (Sky Blue) – Refreshing and motivational.
- **Dark Mode Variant:** ⚫ `#1E1E1E` (Dark Gray) – Sleek night-mode experience.

## Streak Graph Behavior

- **Grid-Based Tracker (Inspired by GitHub)**
- **Current Week’s Streak Highlighted**
- **Streak Colors Adjust with Progress:**
  - Light Gray (No Tasks)
  - Light Green (1-2 Tasks)
  - Medium Green (3-5 Tasks)
  - Dark Green (6+ Tasks)

---

## 1. Overview

The goal of this project is to create a **single-page, browser-based task tracking app** that visualizes task streaks, inspired by GitHub’s contribution graph.

- Users can **view their current week’s streaks** and plan tasks for today.
- A minimalist experience that can be set as a browser homepage.
- **All data is stored locally** for privacy and offline access.

---

## 2. Objectives

- Provide a **visually engaging** task tracking experience with intuitive streak representation.
- Allow users to **quickly add, update, and track tasks** without complex workflows.
- Ensure the interface is **clean, fast, and distraction-free**, suitable for daily usage.
- Motivate users with a **gamified approach** to habit tracking.
- Retain **data locally** using browser storage, ensuring privacy and offline access.

---

## 3. Features

### 3.1 Core Features

### **1. Streak Tracker (GitHub Contribution Graph Style)**

✅ Weekly grid view showing daily task completion.  
✅ Color-coded squares representing task completion frequency:

- Light shade for minimal activity.
- Darker shades as completion frequency increases.

🔹 **Hover-over tooltips displaying:**

- Number of tasks completed for the day.
- Breakdown of completed tasks.

🔹 **Clickable dates** to view/edit tasks for that day.

---

### **2. Today’s Task Plan**

✅ A dedicated section highlighting:

- Tasks planned for the current day.
- Option to mark tasks as done with a simple checkbox.
- Inline editing for quick updates.

✅ A motivational message based on the user’s streak performance.

---

### **3. Task Addition and Management**

✅ Quick-add feature for new tasks with a simple text input.  
✅ Option to categorize tasks (e.g., Work, Health, Learning).  
✅ Ability to prioritize tasks with **drag-and-drop sorting**.  
✅ Inline editing for modifying existing tasks.  
✅ Auto-carry forward of **incomplete tasks** to the next day.

---

### **4. Weekly Overview**

✅ A **week-at-a-glance dashboard** showing:

- Task completion for each day.
- Streak progress for the week.
- A **“missed tasks” section** with suggestions to get back on track.

---

### **5. Minimalist UX**

✅ **Single-page layout** with sections collapsing/expanding as needed.  
✅ No clutter—focus remains on task completion.  
✅ **Subtle animations** for interactions (task completion, adding tasks).  
✅ **Intuitive keyboard shortcuts** for power users:

- `Enter` to add a task.
- `Tab` to switch between task categories.
- `Space` to mark tasks as done.

---

### **6. Customization Options**

✅ **Dark and light theme** selection.  
✅ **Customizable streak colors** (green, blue, warm tones).  
✅ **Adjustable grid density** (daily, weekly, or monthly view).  
✅ **Option to reset streaks or archive tasks.**

---

### **7. Motivational Prompts**

✅ Dynamic messages based on streak trends (e.g., "Great job keeping up!" or "Let's build the streak again!").  
✅ Daily encouragement based on past performance.

---

### **8. Reminders**

✅ **Browser-based notifications** reminding users of pending tasks.  
✅ Configurable notification times (**morning, afternoon, evening**).

---

### **9. Offline Support**

✅ **Full functionality offline** via browser local storage.  
✅ **Data syncing when online** (for export purposes).

---

## 4. User Experience (UX) Design

### 4.1 Information Architecture

🔹 **Header**

- App title and today’s date.
- Settings icon for customization options.

🔹 **Main View (Single Page)**

- **Today’s Task Plan** (left-aligned panel).
- **Weekly Streak Tracker** (centered graph).
- **Add Task Input** (floating bottom bar for quick entry).
- **Task Summary Panel** (right-aligned, collapsible for analytics).

🔹 **Footer**

- Motivational quote section.
- Last sync status.

---

### **4.2 UI Layout Details**

#### **1. Weekly Streak Grid (Inspired by GitHub Contribution Graph)**

✅ **Grid Structure:**

- 7 columns (**Monday to Sunday**).
- 5 rows for past weeks.

✅ **Color Coding:**

- No tasks = light gray.
- 1-2 tasks = light green.
- 3-5 tasks = medium green.
- 6+ tasks = dark green.

✅ **Interactions:**

- **Hover:** Shows a tooltip with task details.
- **Click:** Opens a quick task view/edit pop-up.

✅ **Animations:**

- Smooth color transition for better visual appeal.

---

#### **2. Today’s Task Panel**

✅ **Layout:**

- Checklist with a prominent **"Add Task" input**.
- Expandable task categories (**Work, Health, Personal**).

✅ **Interactions:**

- Checkbox to mark as done (**instant strike-through effect**).
- Inline editing by clicking the task text.
- Drag-and-drop to rearrange.

---

#### **3. Add Task Bar**

✅ **Fixed floating input at the bottom.**  
✅ Allows users to:

- Type and hit `"Enter"` to add tasks.
- Add deadlines or categories with `/` commands (e.g., `/work`).

---

### **4.3 Visual Styling**

✅ **Typography:**

- **Font:** Inter or Roboto for clean, modern readability.
- **Sizes:**
  - Headers: `24px bold`.
  - Task List: `18px`.
  - Tooltips: `14px`.

✅ **Color Palette:**

- **Primary:** `#2D9CDB` (Sky Blue).
- **Secondary:** `#27AE60` (Green for completed tasks).
- **Background:** `#F2F2F2` (Light Gray).

✅ **Iconography:**

- Minimalist icons for settings, delete, edit.
- Rounded checkboxes for task completion.

✅ **Theme Options:**

- **Light mode:** White background with soft shadows.
- **Dark mode:** Dark gray background with neon green accents.

---

### **4.4 Accessibility Considerations**

✅ High contrast color options for visibility.  
✅ Keyboard navigation for all features.  
✅ Screen reader support for task management.

---

### **4.5 Micro-Interactions**

✅ **Task Completion Animation:** A brief checkmark animation when tasks are completed.  
✅ **Hover Effects:** Subtle scaling of grid squares for feedback.  
✅ **Empty State Message:** A motivational quote when no tasks are added.
