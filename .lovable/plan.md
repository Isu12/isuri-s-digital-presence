## Portfolio Website for Isuri Pabasara Lokupathirage

A single-page, fully responsive portfolio with a dark slate/navy theme, amber/orange accent, Plus Jakarta Sans typography, smooth scroll, and subtle entrance animations.

### Design system
- Background: deep navy/slate (`#0B1120` / `#0F172A`), card surfaces slightly lighter
- Accent: amber/orange (`#F59E0B` / `#FB923C`) for highlights, buttons, links, underlines
- Foreground: soft white / slate-200; muted slate-400 for body
- Font: Plus Jakarta Sans (headings + body)
- Rounded-xl cards, soft border `slate-800`, subtle glow on hover
- Animations: fade-in + slide-up on section entry (IntersectionObserver), hover-scale on cards, animated gradient mesh + floating particles in hero
- Smooth scroll via CSS `scroll-behavior` and anchor links

### Layout
```text
[Sticky Nav: Logo "IPL" ......... Home About Skills Projects Experience Education Contact  [Download CV]]

[Hero]    name, title, tagline, CTAs, animated gradient/particles bg
[About]   photo placeholder | first-person narrative
[Skills]  Technical (badges) | Soft Skills (badges)
[Career Plan]  3 cards: Short / Mid / Long term, connected timeline line
[Projects]    responsive card grid (3 cols → 1 col)
[Experience]  vertical timeline, 2 entries
[Education]   timeline/cards, 4 entries
[Certificates] 2 cards
[Contact]     icon list + simple form (mailto) + socials
[Footer]      © 2026 Isuri Pabasara Lokupathirage
```

### Sections (content as provided)
1. **Hero** — Name, "Associate Software Engineer | SLIIT Final Year Student", tagline "Building solutions today. Building my own business tomorrow.", CTAs: "View My Work" (scrolls to #projects) + "Download CV". Animated gradient mesh + particle dots overlay.
2. **About** — Photo placeholder (left) + first-person story covering SLIIT BSc IT (CGPA 3.77), Xeynergy ASE role, Island Rank 1 A/L Bio Systems Tech at Devi Balika Vidyalaya (2021), fully funded SLIIT scholarship, passion for software + entrepreneurship, CAPM in progress.
3. **Skills** — Two columns of pill badges (technical + soft skills lists exactly as specified). Hover lift effect.
4. **Career Development Plan** — 3 cards (Short / Mid / Long term) with icon, year range, bullet list. Subtle connecting line.
5. **Projects** — Card grid for all 7 projects with name, year, type chip (Group/Individual in amber), and tech-stack badges.
6. **Experience** — Vertical timeline with amber dot markers. Two roles at Xeynergy with dates, responsibilities, tech stack chips.
7. **Education** — Timeline/cards for SLIIT, Devi Balika Vidyalaya (A/L), Anula Vidyalaya (O/L), NIBM Python.
8. **Certificates** — Two cards: NIBM Python (Completed, Feb–Jun 2024), SLIIT CAPM (Ongoing) with status chip.
9. **Contact** — Icon list (Mail, Phone, LinkedIn, GitHub, MapPin) with clickable links + small "Get in touch" mailto button.

### Technical notes
- Single page `src/pages/Index.tsx` composed of section components in `src/components/portfolio/` (Nav, Hero, About, Skills, CareerPlan, Projects, Experience, Education, Certificates, Contact, Footer).
- Add Plus Jakarta Sans via Google Fonts in `index.html`; set as default sans in Tailwind.
- Extend `src/index.css` design tokens: navy background, amber primary/accent (HSL).
- Add fade-in/slide-up keyframes in `tailwind.config.ts`; small `useInView` hook for entry animations.
- Particles/gradient mesh implemented with pure CSS + a lightweight canvas (no heavy libs).
- Sticky nav with backdrop blur; mobile hamburger using existing Sheet component.
- "Download CV" links to `/cv.pdf` placeholder in `public/` (user can replace the file later).
- Lucide icons throughout. Fully responsive, mobile-first.

### Out of scope
- Backend / contact form submission (uses mailto). Real CV file upload to be done by the user post-build.
