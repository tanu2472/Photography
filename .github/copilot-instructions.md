# Copilot Instructions for LensAura Photography

## Project Overview
**LensAura Photography** is a React + Vite SPA showcasing photography services with routing, component-based UI, and a Node.js/Express backend for contact form handling.

**Tech Stack**: React 19, React Router v7, Vite 7, Express, TailwindCSS v4, ES modules

---

## Architecture

### Frontend (React SPA)
- **Entry**: `src/main.jsx` – BrowserRouter setup with 5 routes (Home, Gallery, About, Contact, Package detail)
- **Layout Components** (`components/`):
  - `Navbar.jsx` – Sticky header with mobile hamburger toggle (uses `useState` for menu state)
  - `Footer.jsx` – Site footer
  - `ServiceCards.jsx` – Renders 5 photography packages with hardcoded data (id, title, description, features, image, buttonColor)
  - `PackageCard.jsx` – Dynamic route handler for individual package details (`:id` param)

- **View Components** (`view/`):
  - `Home.jsx` – Hero image + intro text + ServiceCards
  - `Gallery.jsx` – Gallery view (implement as needed)
  - `About.jsx` – About page (implement as needed)
  - `Contact.jsx` – Contact form with client-side validation, local state management, thank-you toast notification
  - `Booking.jsx` – Multi-step booking form for package reservations (name, email, phone, event date, location, guest count, additional notes)

### Backend (Express)
- **Entry**: `api/contact.js` (run via `npm start`)
- **CORS**: Inline middleware (no external deps) allowing all origins
- **Data Persistence**: JSON file storage (`data/contacts.json`), auto-creates directory
- **POST `/api/contact`**: Validates name, email, message; appends timestamped entry to JSON file
- **Error Handling**: Client-side form validation only; backend validates required fields

---

## Key Patterns & Conventions

### Component Structure
- **Functional components with hooks** (useState for local state, React Router Link for navigation)
- **No global state management** – each component manages its own state
- **Inline styling with TailwindCSS** classes (no CSS modules or styled-components)
- **Assets in `src/assets/`** (images referenced as `/src/assets/filename`)

### Form Handling (Contact Form)
```jsx
// State: { name, email, message }
// onSubmit: prevents default, shows thank-you toast for 3 seconds, clears form
// No API integration yet – form submits but doesn't post to backend
```
**TODO**: Wire Contact form to POST `/api/contact` endpoint; implement error handling.

### Routing
- **6 Main Routes**: /, /gallery, /about, /contact, /PackageCard/:id, /booking/:id
- **Navbar Link active states**: Implemented via Tailwind hover classes (no active link highlighting)
- **No protected routes** – all pages public
- **Booking flow**: PackageCard → "Book Now" button → `/booking/:id` route

### Backend Data Flow
- Contact form → POST to `api/contact` → append to `data/contacts.json`
- Booking form → POST to `api/booking` → append to `data/bookings.json`
- No database; simple JSON file for MVP
- Timestamps stored as ISO strings (`new Date().toISOString()`)

---

## Development Workflows

### Local Development
```bash
npm install          # Install dependencies
npm run dev         # Start Vite dev server (http://localhost:5173)
npm start           # Run Express server (port 3000 by default)
```
**Note**: Dev server and Express run separately – need two terminals or process manager

### Building & Deployment
```bash
npm run build       # Vite production build → dist/
npm run preview     # Preview production build locally
npm run lint        # ESLint check (eslint.config.js includes React rules)
```

---

## Important Implementation Notes

### Asset Paths
- Hardcoded `/src/assets/` paths in components (e.g., `<img src="/src/assets/camera.png" />`)
- These should resolve via Vite's static assets, but may need adjustment for production builds

### Contact Form Integration
- Form exists in `Contact.jsx` but **does NOT post to backend** yet
- To complete: fetch call to POST `http://localhost:3000/api/contact`
- Backend expects JSON: `{ name, email, message }`
- Add error handling and success feedback

### Booking Form Integration
- Form in `Booking.jsx` – **FULLY IMPLEMENTED** with backend integration
- Collects: name, email, phone, eventDate, location, guestCount, additionalNotes
- POST to `http://localhost:3000/api/booking` with package metadata
- Shows success toast, then redirects to home after 3 seconds
- Appends to `data/bookings.json` with ISO timestamp

### Mobile Responsiveness
- Uses Tailwind's responsive prefixes: `hidden md:flex`, `text-8xl`, etc.
- Navbar has mobile hamburger (state-driven toggle)
- Ensure all new components follow mobile-first Tailwind patterns

### Code Style
- **No semicolons in JSX** (inconsistent in some files, but prefer omitting)
- **Destructuring assignments** for form inputs and component props
- **Arrow functions** throughout

---

## Common Tasks

### Adding a New Page
1. Create `.jsx` in `view/` directory
2. Import in `src/main.jsx` and add `<Route path="/path" element={<NewPage />} />`
3. Add Link in `Navbar.jsx`
4. Use TailwindCSS for styling, image imports via `/src/assets/`

### Modifying Service Packages
- Edit `packages` array in `components/ServiceCards.jsx`
- Each package: id, title, description, features (array), image, buttonColor
- PackageCard displays via route param `:id`

### Adding Backend Endpoints
- Add new POST/GET handlers in `api/contact.js`
- Update CORS middleware if needed
- Test with curl or frontend fetch calls

---

## ESLint & Code Quality
- Config: `eslint.config.js` (includes React plugin + recommended rules)
- React Hook dependencies checked via `eslint-plugin-react-hooks`
- Run: `npm run lint`

---

## Gaps & TODOs
- Contact form needs backend integration
- Gallery and About pages partially implemented
- No image optimization for photography portfolio (consider next-image-like solution)
- No environment variables for API URL (hardcoded to `http://localhost:3000`)
