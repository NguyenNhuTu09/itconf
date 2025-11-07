## ITconf — Agent Quick Instructions

This repo is a small React (Vite) conference site with a deliberate, simple architecture: a TypeScript/JSX hybrid where data is in-memory and UI is component-scoped.

- Stack & entry points: React 19 + Vite (rolldown-vite fork). App boots from `src/main.jsx` and routing lives in `src/App.jsx`.
- Key dirs: `src/components/` (component per folder + CSS), `src/Pages/` (page folders), `src/types/` (type defs).

Important conventions (do not change without reason):

- Mixed-language rule: use `.tsx` for stateful/complex components (examples: `src/Pages/DetailsEventsPage/DetailsEventsPage.tsx`, `src/components/ShoppingCart/ShoppingCart.tsx`) and `.jsx` for simple presentational pieces (`src/components/Hero/Hero.jsx`, `src/components/Events/Events.jsx`).
- Styling: each component imports its own CSS file located in the same folder (e.g., `EventInfo/EventInfo.css` alongside `EventInfo.tsx`).
- Data pattern: there is no backend. Event lists and detailed event objects live as const arrays inside page/component files. When adding an event, update both `src/components/Events/Events.jsx` (list) and `src/Pages/DetailsEventsPage/DetailsEventsPage.tsx` (detailed data).
- Routing: detail pages use slugified titles for `:id` (`title.toLowerCase().replace(/\s+/g,'-')`). Look at `src/Pages/EventsPage/EventPage.jsx` and `src/Pages/DetailsEventsPage/DetailsEventsPage.tsx` for examples.

Integration points & external services:

- Images: hosted on Cloudinary (domain `res.cloudinary.com/dozs7ggs4`) — prefer CDN URLs for event images; `public/images/` is only used for a couple of local avatars.
- Carousels: `react-slick` is used; CSS imports occur in `src/main.jsx`.

State & cart rules (important):

- Cart state is intentionally local — full cart logic lives in `DetailsEventsPage` and the `ShoppingCart` component renders that state. The header only shows a placeholder/empty cart. Do NOT attempt to centralize cart state without a coordinated refactor.

Developer workflow & commands (PowerShell on Windows):

```powershell
npm run dev    # start dev server (Vite/rolldown-vite)
npm run build  # production build
npm run preview# preview production build
npm run lint   # ESLint
```

Files to check when changing behavior:

- Routing / pages: `src/App.jsx`, `src/Pages/*` (add route and page folder)
- Event data and types: `src/Pages/EventsPage/EventPage.jsx`, `src/Pages/DetailsEventsPage/DetailsEventsPage.tsx`, `src/types/eventTypes.ts`
- Cart UI/logic: `src/components/ShoppingCart/ShoppingCart.tsx`, `src/Pages/DetailsEventsPage/DetailsEventsPage.tsx`
- Styles: component folder CSS (e.g., `src/components/EventInfo/EventInfo.css`)
- Lint config: `eslint.config.js` (flat config)

Quick tips for an AI agent:

- Keep edits minimal and in the same style (JSX or TSX) as surrounding files.
- When adding a new event, mirror the in-memory shape used in `DetailsEventsPage` and update the events list to include the slugified link.
- Run `npm run lint` after changes; fix obvious ESLint issues (project uses standard React rules plus a `varsIgnorePattern` for leading-caps).

If anything here is unclear or you'd like more examples (e.g., a sample event object, or a short test harness), tell me which part to expand and I'll update this file.
