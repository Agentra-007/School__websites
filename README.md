# 🏫 XYZ Academy — School Website

A modern, fully responsive single-file website built for an educational institution. Designed for trust, warmth, and clarity — built to work on everything from a 14" laptop to a 5" phone.

**Live file:** `school_website.html` (open directly in any browser — no build step, no dependencies to install)

---

## 📁 Project Structure

```
school_website.html   ← Everything: HTML + CSS + JS in one file
README.md             ← You are here
```

This is a **single-file, zero-dependency** website. There's no `npm install`, no build pipeline, no bundler. Just open the `.html` file in a browser and it works.

---

## ✨ Features

### Design
- Navy (`#0F2D5E`) + Gold (`#D4A017`) color palette — trustworthy and warm
- `Playfair Display` for headings, `Inter` for body text, `DM Mono` for labels/tags
- WCAG-AA accessible — proper contrast ratios, `aria-label`s, keyboard focus rings, semantic HTML

### Sections Included
| Section | What's in it |
|---|---|
| Announcement Ribbon | Auto-scrolling marquee for urgent notices |
| Header & Navigation | Sticky header, live search bar, dropdown menus, mobile hamburger drawer |
| Hero | Animated stat counters, 4-slide auto-rotating image carousel, dual CTAs |
| Trust Bar | Accreditation badges (CBSE, ISO, founding year, enrollment, results) |
| About Us | School history, core values, Principal's message card |
| Academics | Tabbed interface — Primary / Middle / Higher Secondary wings |
| Admissions | 5-step visual process, fee table, age criteria, document checklist |
| Campus & Facilities | Photo grid (labs, library, sports, smart classrooms, transport) |
| Student Life | 8 co-curricular clubs + upcoming events timeline |
| Notice Board | Filterable notices (All/Urgent/Exams/Events), newsletter signup, mini calendar |
| Faculty Directory | Staff grid with department, qualifications, email links |
| Testimonials | Auto-rotating carousel — parents, alumni, students |
| Portals CTA | Parent Portal & Student Portal entry cards |
| Contact | Validated inquiry form + map placeholder + office details |
| Footer | Quick links, resources, social media, legal links |
| Admission Modal | Popup inquiry form triggered from multiple CTAs across the page |

### Interactivity (Vanilla JS — no frameworks)
- Sticky header with scroll-shadow effect
- Animated number counters (triggered on scroll into view)
- Two independent auto-playing carousels (hero images + testimonials)
- Tabbed academic wings switcher
- Notice board category filtering
- Admission inquiry modal (open/close, Escape key, backdrop click, validation)
- Contact form + newsletter form with inline validation and success states
- Scroll-spy navigation (highlights current section in nav)
- Mobile hamburger menu

---

## 📱 Responsive Design

Built mobile-first with **4 breakpoints**:

| Breakpoint | Target Devices |
|---|---|
| `≤ 1024px` | iPads (landscape), small laptops |
| `≤ 900px`  | iPads (portrait), Android tablets |
| `≤ 640px`  | Phones (landscape), large phones |
| `≤ 375px`  | Small phones (iPhone SE, compact Android) |

Key responsive behaviors:
- Navigation collapses into a hamburger drawer below 640px
- Hero image carousel hides on small phones to avoid cramped layouts
- Multi-column grids (facilities, faculty, testimonials, footer) progressively collapse to fewer columns, then single column
- Horizontally scrollable tab bars and trust badges on tablet/mobile (no broken wrapping)
- Touch-friendly tap targets throughout

To test responsiveness: open the file in a browser, open DevTools (`F12` / `Cmd+Opt+I`), and toggle device toolbar (`Ctrl+Shift+M` / `Cmd+Shift+M`).

---

## 🚀 How to Use

### Option 1 — Open directly
Double-click `school_website.html`, or drag it into any browser window.

### Option 2 — Local server (recommended for testing forms/JS)
```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve .
```
Then visit `http://localhost:8000/school_website.html`.

### Option 3 — Deploy
Upload `school_website.html` to any static host:
- **Netlify / Vercel** — drag-and-drop deploy
- **GitHub Pages** — push to a repo, enable Pages
- **Any shared hosting** — upload via FTP, rename to `index.html`

---

## ✏️ Customization Guide

### Replace placeholder content
Search for these markers in the file and update with real data:

| What | Where to find it |
|---|---|
| School name, motto, address | `<title>`, hero section, footer |
| Stats (4,200 students, 98%, etc.) | `animateCounter(...)` calls near the bottom `<script>` |
| Carousel images | `.carousel-slide` divs — replace `.slide-placeholder` with real `<img>` tags |
| Facility photos | `.facility-card` divs — same placeholder pattern |
| Notices | `.notice-item` blocks in the Notice Board section |
| Faculty members | `.faculty-card` blocks in the Faculty section |
| Fee structure | `.fee-table` in the Admissions section |
| Contact details | `.contact-detail` blocks and footer |
| Google Maps | Replace `.map-embed` placeholder with an actual `<iframe>` embed |

### Swap placeholder images for real photos
Every image placeholder is a `<div class="slide-placeholder">` or `<div class="img-placeholder">` with a gradient background and emoji icon. Replace with:
```html
<img src="your-photo.jpg" alt="Descriptive alt text" style="width:100%;height:100%;object-fit:cover"/>
```

### Change colors
All colors are CSS variables at the top of the `<style>` block:
```css
:root {
  --navy: #0F2D5E;
  --gold: #D4A017;
  /* ...change these to rebrand instantly */
}
```

### Connect forms to a backend
Currently, the Contact form, Newsletter signup, and Admission modal use placeholder JS (`handleContactForm`, `handleNewsletterSub`, `handleModalSubmit`) that simulates submission. To make them functional:
1. Replace the `setTimeout(...)` simulation with a real `fetch()` call to your backend/API endpoint
2. Or use a form service like Formspree, Netlify Forms, or Google Forms for a no-backend solution

---

## 🛠️ Tech Stack

- **HTML5** — semantic markup, ARIA roles throughout
- **CSS3** — custom properties (variables), CSS Grid & Flexbox, no framework
- **Vanilla JavaScript (ES6)** — no jQuery, no React, no build tools
- **Google Fonts** — Playfair Display, Inter, DM Mono (loaded via CDN)

No npm, no webpack, no compilation step required.

---

## 🔌 CMS Migration Notes

This static file is structured so it maps cleanly onto a CMS or custom backend (e.g., Node.js + MongoDB/Mongoose, or WordPress):

| Frontend Section | Suggested Backend Model |
|---|---|
| Notice Board | `Notice { title, body, date, type, urgent }` |
| Events Timeline | `Event { title, date, description, category }` |
| Faculty Directory | `FacultyMember { name, dept, qualification, email, photo }` |
| Fee Structure | `FeeStructure { wing, tuition, oneTime }` |
| Testimonials | `Testimonial { quote, author, role, rating }` |
| Contact/Admission Inquiries | `Inquiry { name, phone, email, class, message, createdAt }` |

This lets non-technical school staff update notices, events, and faculty info daily through an admin dashboard instead of editing HTML directly.

---

## ♿ Accessibility

- Semantic HTML5 elements (`<header>`, `<nav>`, `<section>`, `<footer>`)
- ARIA labels and roles on interactive components (carousels, modals, tabs, forms)
- Visible focus states on all interactive elements (`:focus-visible`)
- Sufficient color contrast (navy/gold/slate combinations tested for WCAG AA)
- `alt` text guidance provided for all image placeholders
- Keyboard-operable modal (closes on `Escape`)

---

## 📄 License

This template was custom-built for Sunrise Academy and is free to adapt, modify, and reuse for your own institution's website.
