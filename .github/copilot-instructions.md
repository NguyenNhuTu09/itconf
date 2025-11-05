# ITconf - AI Coding Agent Instructions

## Project Overview
ITconf is an IT conference/event management website built with React 19 + Vite, React Router, and TypeScript/JSX hybrid architecture. Uses Cloudinary for image hosting and react-slick for carousels. Notable: Uses `rolldown-vite` (Vite 7.1.14 fork) instead of standard Vite.

## Architecture & File Organization

### Mixed Language Strategy
- **TypeScript (.tsx)**: Complex components with state management, type safety requirements
  - Examples: `DetailsEventsPage.tsx`, `ShoppingCart.tsx`, `ConfirmDialog.tsx`
  - Use for: Cart logic, dialog components, data-heavy components
- **JavaScript (.jsx)**: Simple presentational components
  - Examples: `Events.jsx`, `Hero.jsx`, `HomePage.jsx`
  - Use for: Static sections, simple page layouts

### Component Structure Pattern
Every component follows co-located styling:
```
ComponentName/
  ├── ComponentName.jsx|tsx
  └── ComponentName.css
```
Import CSS directly in component file: `import './ComponentName.css'`

### Routing Architecture
Three-tier page structure in `src/Pages/`:
- **HomePage**: Section aggregator (Hero → Sponsors → Offer → Events → Stats → Speakers → MainEvents → Topics → Tickets → Testimonials)
- **EventsPage**: Event listing with search/filter UI, uses hardcoded `eventsListData` array
- **DetailsEventsPage**: Event details with booking cart, speaker info, location map

Route params use slugified titles: `/events/:id` where `id` = `title.toLowerCase().replace(/\s+/g, '-')`

## Data Management

### In-Memory Data Pattern
No backend - all data is hardcoded in component files:
- `EventsPage.jsx`: `eventsListData` array (6 events)
- `DetailsEventsPage.tsx`: `eventsData` array (2 detailed events)
- Component files: `eventData`, `sponsorsData`, etc.

When adding features, maintain this pattern - store data as const arrays within component files.

### Type Definitions
Located in `src/types/eventTypes.ts`:
```typescript
EventType: title, date, location, description, imageUrl, tags[], price, speakers[]
CartItemType: EventType & { quantity: number }
```

## Shopping Cart Implementation

### State Management Pattern
Cart state lives in two places (NOT shared):
1. **DetailsEventsPage**: Full cart logic for booking events
2. **Header**: Empty cart display (placeholder implementation)

When modifying cart:
- Add items via `handleBooking()` in DetailsEventsPage
- Update quantities with `handleQuantityChange(title, change)`
- Remove with confirmation dialog pattern
- Calculate total with `reduce()` over `price * quantity`

### Modal/Overlay Pattern
Sliding cart drawer with overlay:
- Uses `isClosing` state for exit animation (300ms)
- Overlay click triggers close
- Portal-style rendering with `React.Fragment`

## Styling Conventions

### CSS Organization
- **Global**: `src/index.css`, `src/App.css`
- **Component**: Scoped to component directory
- **Third-party**: Slick carousel CSS imported in `main.jsx`

### Icon Usage
All icons from `react-icons/fi` (Feather Icons):
```jsx
import { FiSearch, FiCalendar, FiMapPin, FiShoppingCart } from 'react-icons/fi';
```

### Image Hosting
All images use Cloudinary CDN URLs (domain: `res.cloudinary.com/dozs7ggs4`). Never use relative paths for event/section images. Only `/images/team-1.jpg`, `/images/team-2.jpg` in `public/images/` for speaker avatars.

## Development Workflow

### Commands
```powershell
npm run dev          # Start dev server (Vite)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # ESLint check
```

### ESLint Configuration
Flat config format (`eslint.config.js`):
- Ignores `dist/`
- React Hooks rules enforced
- Custom rule: `no-unused-vars` with `varsIgnorePattern: '^[A-Z_]'` (allows unused React imports/constants)

### Adding New Features
1. **New Page**: Create in `src/Pages/`, add route in `App.jsx`, create folder with `.jsx` + `.css`
2. **New Component**: Add to `src/components/`, follow folder pattern, import in page
3. **New Event**: Add to `eventsListData` (EventsPage) AND `eventsData` (DetailsEventsPage)
4. **State Management**: Keep local - no Redux/Context. Prop drill or duplicate state as needed

## Key Dependencies

- **react-router-dom**: v7.9.5 - Use `<Link>`, `<NavLink>`, `useParams()`
- **react-slick**: Carousel library, needs CSS imports in `main.jsx`
- **react-icons**: Feather icon set only (`react-icons/fi`)

## Common Pitfalls

1. **Don't** try to share cart state between Header and DetailsEventsPage - they're independent
2. **Don't** use TypeScript for simple presentational components - keep it JSX
3. **Don't** forget to slugify event titles when creating detail page links
4. **Don't** mix Vite versions - project uses `rolldown-vite@7.1.14` (locked via overrides)
5. **Always** import component CSS in the same file as the component

## Navigation Implementation

Uses scroll-based header styling:
- `isScrolled` state toggles `.scrolled` class on scroll > 50px
- `NavLink` with `isActive` for active route highlighting
- Mobile menu toggle with `isMenuOpen` state (hamburger icon)

When updating navigation, maintain both `.desktop-nav` and `.mobile-nav` implementations.
