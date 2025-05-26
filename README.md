# TyperRacer

# 🚀 Typing Speed Test Tool - User Stories, Acceptance Criteria & Tasks

## 🧭 Project Goal:

To provide a tool for users to improve their typing speed.

## 🎯 User Goals:

Users want to be able to:

- Measure and improve their typing speed.
- Know how to take the test.
- Easily take the test.
- Take a test relevant to their ability level.
- Use the test on different devices.
- See accurate results, including their words per minute (WPM).

---

## ✅ User Story 1: Take a Typing Test

**As a** user,  
**I want** to easily take a typing test,  
**So that** I can measure and improve my typing speed.

### ✅ Acceptance Criteria:

- The test starts when the user begins typing.
- The user can restart the test at any time.
- The test ends after a set time or passage is completed.
- Words Per Minute (WPM), accuracy, and errors are displayed after the test.

### 🔧 Tasks:

- [x] Design and build typing test UI.
- [x] Implement test timer logic.
- [x] Capture and compare user input against the reference text.
- [x] Calculate WPM and accuracy.
- [x] Display results clearly at the end of the test.

---

## ✅ User Story 2: Understand How the Test Works

**As a** new user,  
**I want** clear instructions before the test starts,  
**So that** I know how to use it properly.

### ✅ Acceptance Criteria:

- Instructions are displayed before the test begins.
- Instructions explain how to start, pause, and interpret the results.
- A help or info icon is available for users to re-read instructions.

### 🔧 Tasks:

- [x] Write and display clear, concise instructions.
- [x] Create an expandable/collapsible instructions section or modal.
- [x] Add a help/info icon for easy access to instructions.

---

## ✅ User Story 3: Take a Test Suitable for My Skill Level

**As a** user,  
**I want** to choose the difficulty of the typing test,  
**So that** I can be challenged appropriately.

### ✅ Acceptance Criteria:

- Users can select from multiple difficulty levels (e.g., Beginner, Intermediate, Advanced).
- Different difficulty levels correspond to different text lengths or complexity.
- The selected level is reflected in the test content.

### 🔧 Tasks:

- [x] Create difficulty level options in UI.
- [x] Categorize or create passages per difficulty.
- [x] Load the correct passage based on user selection.

---

## ✅ User Story 4: Use the Tool on Any Device

**As a** user,  
**I want** the typing test to work well on different devices,  
**So that** I can practice wherever I am.

### ✅ Acceptance Criteria:

- The test is fully responsive and works on desktop, tablet, and mobile.
- All test elements (text area, timer, stats) are usable on smaller screens.
- Mobile keyboards do not interfere with the UI layout.

### 🔧 Tasks:

- [x] Use responsive design practices (e.g., Tailwind or CSS media queries).
- [x] Test layout on multiple screen sizes.
- [x] Optimize keyboard interactions on mobile devices.

---

## ✅ User Story 5: See Accurate and Clear Results

**As a** user,  
**I want** to see detailed, accurate test results,  
**So that** I can track and improve my performance.

### ✅ Acceptance Criteria:

- WPM is calculated correctly.
- Accuracy shows correct vs incorrect keystrokes or words.
- Results are displayed in a user-friendly format after each test.
- Option to retake the test immediately.

### 🔧 Tasks:

- [x] Implement WPM and accuracy calculation logic.
- [x] Design and display result screen with key metrics.
- [x] Add a "Retake Test" button on the results screen.

---
