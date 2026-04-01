# AI_CONTEXT.md — Aparaitech Repository Context

## 1) Project Overview
Aparaitech is a split frontend/backend web application for a careers portal. It enables candidates to browse open roles, filter listings, and submit an application form, while backend admin-authenticated APIs support job management.

### Current product intent
- **Candidate-facing experience**: marketing-style careers site with hiring process, culture storytelling, and testimonials.
- **Job discovery**: fetch jobs from backend (`GET /api/jobs`) and filter in the UI.
- **Application flow**: users fill a detailed form and upload a resume PDF.
- **Admin operations (API-level)**: create/update/delete jobs, protected by cookie/JWT middleware.

### Important reality check
- The frontend and backend are present in one repository but are **not yet fully production-integrated** (multiple base URLs/ports, missing running server listener, and partially inconsistent enums/endpoints).

---

## 2) Technology Stack

### Frontend stack
- **Frontend Framework**: React 19 (function components + hooks)
- **Build Tool**: Vite 7
- **Routing**: `react-router-dom` (BrowserRouter, Routes, Route)
- **Styling**: Tailwind CSS v4 via `@tailwindcss/vite`
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **HTTP client**: Axios (used for jobs fetch)

### Backend stack
- **Runtime/API Framework**: Node.js + Express 5
- **Database**: MongoDB via Mongoose
- **Auth**: JWT + cookie-based session token (`cookie-parser`)
- **Security/utility libs**: `bcryptjs`, `cors`, `dotenv`
- **File upload dependency present**: `multer` (not wired yet in visible routes/controllers)

### Interaction model
- Frontend calls backend job APIs directly (hardcoded local URL).
- Admin login issues cookie token; protected job mutation routes require `adminAuth`.
- No frontend admin dashboard exists yet in this repository.

---

## 3) Architecture Overview

### High-level layout
- **Monorepo-like structure with two app roots**:
  - `frontend/` (React SPA)
  - `backend/` (Express API)

### Main entry points
- Frontend entry: `frontend/src/main.jsx`
- Frontend app shell/router: `frontend/src/App.jsx`
- Backend entry: `backend/server.js`

### Application flow (candidate)
1. Browser loads React app.
2. Global shell renders persistent `Navbar` + page route + `Footer`.
3. Open Positions page fetches `/api/jobs` from backend.
4. User filters jobs client-side and navigates to Apply page (role prefilled via query param).
5. Apply page fetches jobs to build role dropdown, validates fields, submits multipart form to a separate application endpoint.

### Application flow (admin API)
1. Admin logs in via `/api/admin/login` with email/password.
2. Backend verifies credentials, signs JWT, sets `token` cookie.
3. Protected mutation routes under `/api/jobs` require cookie token and admin role.

---

## 4) Directory Structure

## Project map (visual)
```text
Project Root
├── frontend/
│   ├── index.html                    # SPA host HTML
│   ├── package.json                  # Frontend scripts/dependencies
│   ├── vite.config.js                # Vite + React + Tailwind plugin wiring
│   ├── tailwind.config.js            # Tailwind theme extensions/keyframes
│   ├── eslint.config.js              # Frontend lint rules
│   ├── README.md                     # Frontend project quick intro
│   └── src/
│       ├── main.jsx                  # React mount point
│       ├── App.jsx                   # Router + global layout shell
│       ├── index.css                 # Tailwind import + reusable utility classes
│       ├── assets/
│       │   └── ALogo.png             # Brand logo asset
│       ├── components/
│       │   ├── Navbar.jsx            # Top nav + mobile menu
│       │   ├── Footer.jsx            # Footer/contact/social links
│       │   ├── PageHeader.jsx        # Reusable animated section header
│       │   ├── FilterBar.jsx         # Search/location/type filters
│       │   └── JobCard.jsx           # Job card presentation + apply CTA
│       ├── pages/
│       │   ├── HomePage.jsx          # Marketing landing page
│       │   ├── OpenPositionsPage.jsx # Jobs listing + filtering
│       │   └── ApplyFormPage.jsx     # Candidate application form
│       └── data/
│           └── jobsData.js           # Local seed data (currently not used)
├── backend/
│   ├── server.js                     # Express app + route mounting
│   ├── package.json                  # Backend dependencies
│   ├── seedAdmin.js                  # Script to create initial admin
│   ├── config/
│   │   └── db.js                     # MongoDB connection helper
│   ├── models/
│   │   ├── Job.js                    # Job Mongoose schema
│   │   └── Admin.js                  # Admin Mongoose schema
│   ├── routes/
│   │   ├── job.routes.js             # Job CRUD routes
│   │   └── admin.routes.js           # Admin auth routes
│   ├── controlllers/                 # Note spelling: "controlllers"
│   │   ├── job.controller.js         # Job CRUD handlers
│   │   └── admin.controller.js       # Admin login handler
│   ├── middleware/
│   │   └── adminAuth.js              # JWT cookie authorization middleware
│   └── utils/
│       └── generateToken.js          # JWT signing helper
└── (lockfiles and installed node_modules omitted from map)
```

---

## 5) Component System

### Global app shell components
- **Navbar**
  - Fixed top navigation; desktop + mobile menu modes.
  - Route-aware highlighting via `useLocation`.
  - Scroll listener toggles translucent/scrolled visual state.
- **Footer**
  - Organization summary, quick links, contact block, social media links.

### Reusable page-level component
- **PageHeader**
  - Shared animated hero-like header for route pages.
  - Uses Framer Motion entry animation and decorative gradient blobs.

### Feature-specific UI components
- **FilterBar**
  - Controlled local filter state.
  - Emits filter object upward (`onFilterChange`) for parent filtering.
- **JobCard**
  - Displays job metadata (title, department, location, experience, salary, stack).
  - Encodes role in apply URL query string.

### Pages
- **HomePage**: long-form marketing page with multiple animated sections.
- **OpenPositionsPage**: data fetch + filter orchestration + job list rendering.
- **ApplyFormPage**: validated form + PDF upload + submission states.

---

## 6) Styling System

### Core styling approach
- Tailwind utility classes dominate all component styling.
- Shared utility class abstractions defined in `src/index.css` under `@layer components`:
  - `.btn-primary`, `.btn-secondary`, `.card`, `.input-field`, `.section-padding`.

### Color system
- Primary palette emphasis: blue/indigo gradients, slate neutrals, soft gray backgrounds.
- Frequent gradient use (`bg-gradient-to-r`, `bg-gradient-to-br`) for CTAs and highlights.

### Typography
- Tailwind font sizing scale from `text-xs` to `text-7xl`.
- Headings use `font-bold`; metadata often `font-medium`.
- `font-feature-settings` enabled globally in base body styles.

### Spacing/layout
- Consistent responsive paddings (`px-4 sm:px-6 lg:px-8`).
- Max width containers generally `max-w-7xl` or `max-w-6xl`.
- Cards and sections use rounded corners + shadows + borders.

### Styling conventions observed
- Utility-first, mostly inline class strings.
- Responsive classes on most sections for mobile-first behavior.
- Repeated gradient + blur + border motif across many sections.

---

## 7) Animation System

### Animation libraries/mechanisms
- **Framer Motion** is primary JS-driven animation framework.
- **Tailwind transitions** (`transition-all`, duration classes) used for hover/interactions.
- Tailwind config defines custom keyframes (`fadeIn`, `slideUp`, `pulseSubtle`), though most motion comes from Framer + default utility classes.

### Motion usage by area
- `PageHeader`: fade/slide-in on mount.
- `HomePage`: extensive motion blocks (`initial`, `animate`, `whileInView`, `whileHover`, `whileTap`, looping y animation).
- `OpenPositionsPage`: list container fade and per-card stagger-like entry transitions.
- Navbar/mobile menu: CSS transition-based expand/collapse.

### Hover/interaction patterns
- Slight y-lifts (`hover:-translate-y-0.5`, hover shadow growth).
- Icon and arrow micro-translation on hover.
- Animated decorative backgrounds for premium visual feel.

---

## 8) Feature Inventory

### 8.1 Route-based navigation
- **Purpose**: Move between Home, Open Roles, and Apply pages.
- **Files**: `App.jsx`, `Navbar.jsx`.
- **Dependencies**: `react-router-dom`, Lucide icons.
- **Internal behavior**: Active route highlighting + mobile collapse state reset on route change.

### 8.2 Marketing homepage storytelling
- **Purpose**: Employer branding and conversion into applications.
- **Files**: `pages/HomePage.jsx`.
- **Dependencies**: Framer Motion, Lucide icons, router links.
- **Internal behavior**: Multiple content blocks (hero, stats, culture, process, testimonials) with viewport-triggered animations.

### 8.3 Open positions listing
- **Purpose**: Display available jobs from backend.
- **Files**: `pages/OpenPositionsPage.jsx`, `components/JobCard.jsx`.
- **Dependencies**: Axios, Framer Motion.
- **Internal behavior**: Fetches jobs once on mount, then client-side filtering via current filter state.

### 8.4 Search/filter system
- **Purpose**: Narrow jobs by text, location, type.
- **Files**: `components/FilterBar.jsx`, `pages/OpenPositionsPage.jsx`.
- **Dependencies**: local React state only.
- **Internal behavior**: Controlled inputs update filter object, parent recomputes filtered result set.

### 8.5 Apply form with validation + upload
- **Purpose**: Collect candidate details and resume.
- **Files**: `pages/ApplyFormPage.jsx`.
- **Dependencies**: Fetch API, Axios (for job list), Framer Motion.
- **Internal behavior**:
  - Prefills role from query string.
  - Fetches jobs to populate role dropdown.
  - Validates required fields/email/phone/PDF.
  - Sends multipart payload to external application endpoint.
  - Shows success/error states.

### 8.6 Footer/contact/social presence
- **Purpose**: Corporate credibility + external social links.
- **Files**: `components/Footer.jsx`.
- **Dependencies**: Lucide icons, router link.

### 8.7 Backend job CRUD API
- **Purpose**: Manage job postings.
- **Files**: `routes/job.routes.js`, `controlllers/job.controller.js`, `models/Job.js`.
- **Dependencies**: Express, Mongoose, adminAuth middleware.
- **Internal behavior**: Public read endpoints, admin-protected mutations.

### 8.8 Backend admin login
- **Purpose**: Authenticate admin and issue JWT cookie.
- **Files**: `routes/admin.routes.js`, `controlllers/admin.controller.js`, `utils/generateToken.js`, `middleware/adminAuth.js`.
- **Dependencies**: bcryptjs, jsonwebtoken, cookie-parser.

### 8.9 Admin seed script
- **Purpose**: Bootstrap initial admin account in DB.
- **Files**: `seedAdmin.js`, `models/Admin.js`.
- **Dependencies**: Mongoose, dotenv, bcryptjs.

---

## 9) External Integrations

### Database
- MongoDB connection via `process.env.MONGO_URL` in backend.

### APIs / endpoints
- Frontend jobs fetch: `http://localhost:3000/api/jobs` (hardcoded).
- Frontend application submit: `http://localhost:5000/api/applications/apply` (hardcoded, separate service not in visible backend).

### Social links
- LinkedIn, Instagram, YouTube linked in footer.

### Browser storage/session
- Admin auth depends on HTTP-only cookie named `token` from backend login route.

---

## 10) Dependencies Explanation

### Frontend direct dependencies
- `react`, `react-dom`: SPA rendering.
- `react-router-dom`: client-side routing.
- `tailwindcss`, `@tailwindcss/vite`: utility CSS system + Vite integration.
- `framer-motion`: animated UI interactions.
- `lucide-react`: icon set.
- `axios`: REST requests for jobs data.

### Frontend dev dependencies
- `vite`, `@vitejs/plugin-react`: build/dev server.
- `eslint`, `@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `globals`: linting.
- `@types/react`, `@types/react-dom`: type packages for tooling compatibility.

### Backend dependencies
- `express`: REST API framework.
- `mongoose`: ODM for MongoDB.
- `dotenv`: env loading.
- `cors`: CORS middleware.
- `cookie-parser`: cookie parsing for auth.
- `jsonwebtoken`: JWT sign/verify.
- `bcryptjs`: password hashing/checking.
- `multer`: file upload parsing (currently appears unused in routed code).

### Potentially unused or weakly integrated dependencies
- `multer` in backend package is not used in currently visible API handlers.
- `frontend/src/data/jobsData.js` is not currently imported by routed pages.

### Critical libraries
- **Critical frontend**: React, Router, Tailwind, Framer Motion.
- **Critical backend**: Express, Mongoose, JWT, bcryptjs.

---

## 11) Known Limitations

1. **Backend server does not start listening**: `app.listen(...)` is commented out, so API process will not accept requests unless changed.
2. **CORS origin mismatch risk**: backend allows `http://localhost:5173/` (trailing slash) which may fail against standard browser origin (`http://localhost:5173`).
3. **Enum mismatch for job type**:
   - Backend schema allows `Full-Time` / `Part-Time`.
   - Frontend filters/use-cases often expect `Full-time` / `Part-time`.
4. **Update route ID source inconsistency**: route uses `/:id` but update controller reads `id` from `req.body`.
5. **Delete controller bug**: checks `if (!deleteJob)` instead of `if (!deletedJob)`.
6. **Hardcoded service URLs** in frontend limit deploy flexibility and environment portability.
7. **Apply endpoint not represented in this backend**: frontend submits to port 5000 `/api/applications/apply` while backend shown runs jobs/admin routes only.
8. **Potential broken route link**: Home page links to `/contact`, but no route is defined for this path.
9. **Typos/consistency issues**:
   - Folder name `controlllers` (triple “l”).
   - Title typo in HTML: `Aparaitech Careerss`.
10. **No test setup** in either package scripts.

---

## 12) Potential Improvement Areas

### Architecture and integration
- Introduce shared environment-based API config (e.g., `VITE_API_BASE_URL`) and remove hardcoded URLs.
- Align frontend and backend service boundaries (single backend or clearly documented multi-service architecture).
- Re-enable and standardize backend startup scripts (`dev`, `start`).

### API correctness and robustness
- Fix route/controller inconsistencies and deletion variable bug.
- Normalize `type` enum and frontend filter values.
- Add centralized error handling and request validation (e.g., Zod/Joi/express-validator).

### Frontend maintainability
- Split very large page components (especially `HomePage` and `ApplyFormPage`) into section components.
- Extract repeated animation variants/constants.
- Convert duplicated style patterns into reusable component primitives.

### Performance
- Consider lazy-loading route pages with `React.lazy` + suspense fallback.
- Memoize expensive filter operations for large job sets.
- Reduce heavy decorative DOM/background complexity on low-end devices.

### Quality and operations
- Add lint + format + test scripts in backend.
- Add API tests (supertest) and frontend tests (RTL/Vitest).
- Add CI pipeline with lint/test/build checks.

---

## Critical Components Reference (Quick Index)

### Navbar
- **Path**: `frontend/src/components/Navbar.jsx`
- **Responsibility**: global navigation, active-route state, mobile menu.
- **Dependencies**: React hooks, Router hooks/links, Lucide icons, logo asset.
- **Interactions**: used by `App.jsx` and shown on every route.

### Footer
- **Path**: `frontend/src/components/Footer.jsx`
- **Responsibility**: contact/social/company information and secondary navigation.
- **Dependencies**: router links, Lucide icons, logo.
- **Interactions**: used by `App.jsx` globally.

### OpenPositionsPage
- **Path**: `frontend/src/pages/OpenPositionsPage.jsx`
- **Responsibility**: backend jobs fetch, filter orchestration, list rendering.
- **Dependencies**: Axios, FilterBar, JobCard, PageHeader, Framer Motion.
- **Interactions**: receives filter changes from `FilterBar`, passes jobs into `JobCard`.

### ApplyFormPage
- **Path**: `frontend/src/pages/ApplyFormPage.jsx`
- **Responsibility**: candidate application UX, validation, multipart submission.
- **Dependencies**: Router location/query parsing, Axios, Fetch API, Framer Motion, icons.
- **Interactions**: pulls roles from jobs API; can receive pre-selected role from JobCard link query.

### Job API Controller
- **Path**: `backend/controlllers/job.controller.js`
- **Responsibility**: CRUD handlers and job retrieval.
- **Dependencies**: Job model, Express req/res lifecycle.
- **Interactions**: mounted via `routes/job.routes.js`, protected by `adminAuth` for mutations.

### Admin Auth Stack
- **Paths**:
  - `backend/controlllers/admin.controller.js`
  - `backend/middleware/adminAuth.js`
  - `backend/utils/generateToken.js`
- **Responsibility**: admin authentication and route authorization.
- **Dependencies**: bcryptjs, JWT, cookie-parser.
- **Interactions**: login route emits cookie token; protected routes verify cookie role.

---

## Future Extension Points (Safest Places to Add New Work)

### 1) New frontend pages
- Add file in `frontend/src/pages/`.
- Register route in `frontend/src/App.jsx`.
- Add navigation entry in `Navbar.jsx` if needed.

### 2) New reusable UI components
- Add to `frontend/src/components/`.
- Reuse shared utility classes from `src/index.css` or create new component classes there.

### 3) Backend resource modules
- For new domain (e.g., applications, analytics): create
  - `backend/models/<Domain>.js`
  - `backend/controlllers/<domain>.controller.js`
  - `backend/routes/<domain>.routes.js`
  - mount in `backend/server.js`

### 4) AI features
- Best initial integration points:
  - Candidate assistant in frontend via new component under `components/`.
  - Backend AI endpoints under a dedicated route namespace (e.g., `/api/ai/*`).

### 5) Analytics/observability
- Frontend event hooks at page/CTA boundaries (`HomePage`, `OpenPositionsPage`, `ApplyFormPage`).
- Backend request logging middleware at app level in `server.js`.

### 6) Config hardening
- Create environment config modules for both frontend and backend to prevent hardcoded endpoints.

---

## Clarification Questions for Product/Engineering Stakeholders
(Needed before major development work)
1. Is this intended to be a **single backend service** or does the separate `:5000` applications endpoint reflect a planned multi-service architecture?
2. What is the intended canonical job type taxonomy (`Full-Time` vs `Full-time`) across DB + UI?
3. Should admin operations have a frontend dashboard in this repo, or remain API-only?
4. Which deployment targets are expected (local only, Vercel + Render, containerized, etc.)?
5. Are there coding standards (formatter/linter conventions, file naming, testing requirements) beyond current ESLint setup?
6. Is this currently production-bound, pilot-stage, or internal demo? (determines prioritization of reliability/security work).


---

## 13) Advanced Features (Frontend-first Demo Implementation)

### Implemented roadmap modules
- **Foundation**: Added `PROJECT_TASKS.md` and created scaffolding directories in `frontend/src` for AI, services, templates, i18n, and dashboard systems.
- **Animated Hero**: Added `frontend/src/components/HeroAnimated.jsx` and integrated into `HomePage`.
- **Interactive Timeline**: Added `frontend/src/components/Timeline.jsx` powered by `frontend/src/data/companyTimeline.json`.
- **AI Role Matching**: Added `frontend/src/ai/roleMatcher.js` (`matchRoles`) using cosine similarity + overlap boost.
- **Job Recommendation Engine**: Added `frontend/src/ai/jobRecommendation.js` with weighted scoring.
- **Chatbot**: Added `frontend/src/components/chatbot/*` + `frontend/src/data/companyKnowledge.json` for rule-based Q&A.
- **Dashboard**: Added `frontend/src/pages/dashboard/*` with stats, chart-like visualizations, activity feed, AI suggestions, and referral section.
- **Email Automation (Demo abstraction)**: Added `frontend/src/services/emailService.js` and templates under `frontend/src/templates/emails/`.
- **Push Notifications**: Added `frontend/src/services/notificationService.js` and `frontend/src/components/NotificationBell.jsx`.
- **Referral System**: Added `frontend/src/services/referralService.js` with localStorage-backed links/tracking.
- **Multi-language Support (lightweight local i18n)**: Added `frontend/src/i18n/*` with EN/HI/ES dictionaries and `LanguageSwitcher`.

### Integration touchpoints
- `App.jsx` now includes chatbot globally and routes `/dashboard` and `/referrals`.
- `Navbar` includes dashboard link, language switching, and notification bell.
- `OpenPositionsPage` includes AI suggestion preview and notification trigger.
- `ApplyFormPage` triggers demo email rendering + local notification on successful submit.

### Notes
- This iteration is intentionally **frontend-first/demo-first** with mock/local data and client-only services.
- Final polish pass: frontend lint and production build are currently passing in local validation.
- External package installation for `i18next/react-i18next/recharts` was blocked by registry access policy; equivalent modular local implementations were added to preserve roadmap continuity.
