# GitHub Copilot Instructions for site-deforge-static

## Repository Overview

This is **deforge.me**, a personal static website built with vanilla HTML, CSS, and JavaScript. The site serves as a central hub for open-source tools, ideas, scripts, and projects. It features a simple, modern design with animated blob backgrounds and client-side navigation.

## Technology Stack

- **HTML5**: Semantic markup with accessibility considerations
- **CSS3**: Modern styling with animations, gradients, and backdrop filters
- **Vanilla JavaScript**: Client-side routing and form handling
- **No build tools**: Pure static files, no bundlers or transpilers

## Project Structure

```
.
├── index.html          # Main entry point with routing logic
├── css/
│   └── style.css      # All styles in a single file
├── favicon/           # Favicon assets and manifest
├── CNAME              # Custom domain configuration
└── README.md          # Project description
```

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Keep inline JavaScript in the main `index.html` for simplicity
- Use French language (`lang="fr"`) for content
- Maintain accessibility with proper `alt` attributes and ARIA when needed

### CSS
- Use 2-space indentation
- Follow mobile-first approach when adding responsive styles
- Prefer modern CSS features (flexbox, grid, CSS variables)
- Keep selectors simple and readable
- Use kebab-case for class names (e.g., `.bg-blobs`, `.main-content`)
- Comments in French when needed

### JavaScript
- Use modern ES6+ syntax (const/let, arrow functions, async/await)
- Keep code in vanilla JavaScript - no frameworks
- Use camelCase for variables and functions
- Client-side routing uses hash navigation (`#accueil`, `#infos`, `#contact`)
- Form submissions use Formspree service

## Design Principles

### Visual Style
- Dark theme with gradient background (`#0e0e0e` to `#1c1c1c`)
- Animated blob backgrounds in blue, violet, and orange
- Glassmorphism effects with backdrop blur
- Primary accent color: `#0077ff` (blue)
- Smooth transitions and hover effects

### Layout
- Fixed header with logo and navigation
- Centered content with glassmorphism card
- Responsive padding and spacing
- Body padding-top to account for fixed header

## Content Sections

The site uses hash-based routing with three main sections:
1. **#accueil** (Home): Welcome message
2. **#infos** (Info): About the site and its purpose
3. **#contact** (Contact): Form integrated with Formspree

## Best Practices for Changes

### When Adding Features
- Maintain the minimalist, modern aesthetic
- Keep the single-page architecture
- Ensure mobile responsiveness
- Test all interactive elements
- Use French for user-facing text

### When Modifying Styles
- Preserve the existing color scheme and design language
- Keep animations smooth (prefer `ease-in-out`)
- Maintain consistency with existing selectors
- Test backdrop-filter compatibility if adding new glassmorphism

### When Updating JavaScript
- Keep the routing system simple and hash-based
- Maintain the popup notification system for user feedback
- Ensure forms work with the Formspree integration
- Add event listeners within the routing logic when appropriate

## Common Tasks

### Adding a New Route
1. Add entry to the `routes` object
2. Update navigation in the header if needed
3. Add any specific event listeners in `renderRoute()`

### Adding Form Handling
- Follow the pattern used in the contact form
- Use the `showPopup()` function for user feedback
- Integrate with appropriate backend service

### Styling Updates
- Add new styles to `css/style.css`
- Follow existing naming conventions
- Test with the animated background

## Notes
- Site created on 23/06/2025, launch planned for November 2025
- No testing framework in place - manual testing required
- No build process - changes are directly deployable
- Hosted as a static site (GitHub Pages or similar)
