# PROJECT_TASKS.md

## Phase 1 — Foundation Improvements
- Verify/create directories: `src/ai`, `src/services`, `src/data`, `src/templates`, `src/i18n`, `src/dashboard`.
- Add shared mock datasets for jobs, skills, timeline, knowledge, dashboard analytics.
- Add frontend-first architecture scaffolding for AI, services, dashboard, and i18n.

## Phase 2 — Animated Landing Hero
- Build `src/components/HeroAnimated.jsx` with animated headline, gradient background, floating shapes, CTA buttons, and animated stats.
- Integrate hero into landing page while preserving existing flow.

## Phase 3 — Interactive Timeline
- Build `src/components/Timeline.jsx` with vertical milestones and scroll-triggered animations.
- Source timeline content from `src/data/companyTimeline.json`.

## Phase 4 — AI Role Matching Engine
- Build `src/ai/roleMatcher.js`.
- Expose `matchRoles(userSkills, jobDatabase)` using local scoring algorithm.

## Phase 5 — Job Recommendation Engine
- Build `src/ai/jobRecommendation.js` scoring by skill overlap, category match, recency, and popularity.

## Phase 6 — AI Chatbot
- Add `src/data/companyKnowledge.json`.
- Build chatbot components in `src/components/chatbot/`: `ChatBot.jsx`, `ChatWindow.jsx`, `ChatMessage.jsx`, `ChatInput.jsx`.

## Phase 7 — Analytics Dashboard
- Add `src/pages/dashboard/`: `Dashboard.jsx`, `StatsCard.jsx`, `Charts.jsx`, `ActivityFeed.jsx`.
- Use Recharts with simulated dataset.

## Phase 8 — Email Automation
- Build `src/services/emailService.js`.
- Add templates under `src/templates/emails/`:
  - `applicationReceived.html`
  - `interviewScheduled.html`
  - `rejectionEmail.html`

## Phase 9 — Push Notifications
- Build `src/services/notificationService.js`.
- Add `src/components/NotificationBell.jsx` and integrate in navbar.

## Phase 10 — Referral System
- Build `src/services/referralService.js` for local referral code generation, sharing, and tracking.
- Add referral section in dashboard.

## Phase 11 — Multi-language Support
- Install and configure `react-i18next`.
- Add `src/i18n/` config + language files (`en.json`, `hi.json`, `es.json`).
- Add `src/components/LanguageSwitcher.jsx` and integrate into navbar.

## Phase 12 — Final Polish
- Ensure responsive behavior, dark theme support, smooth animations, and accessibility labels.
- Run lint/build verification and fix regressions.

## Phase 13 — Documentation Update
- Update `AI_CONTEXT.md` with advanced features, AI systems, recommendation engine, notification system, dashboard, referral system, and i18n architecture.
