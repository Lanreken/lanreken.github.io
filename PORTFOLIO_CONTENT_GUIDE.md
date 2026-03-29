# Portfolio Content Guide

## Send Me These

- Your LinkedIn profile URL
- Your GitHub profile URL
- Your CV or resume file (`.pdf`, `.docx`, or pasted text)
- Your preferred display name and headline
- Your current email address for the contact section
- Any project screenshots you want shown in `public/`
- Any live demo URLs you want linked

## Files That Need Real Personal Data

- `src/sections/Hero.tsx`: name, headline, short intro, resume filename
- `src/sections/About.tsx`: bio, work history, headshot image, achievements
- `src/sections/Projects.tsx`: featured projects, GitHub links, live links, screenshots
- `src/sections/Tech.tsx`: skills you want highlighted
- `src/sections/Contact.tsx`: email and social links
- `src/components/Footer.tsx`: final profile links and footer name
- `src/components/ChatWidget.tsx`: assistant greeting and prompt text
- `public/`: headshot, resume PDF, project preview images

## Manual Things You May Still Need To Add

- Final profile photo you want public on the site
- Updated resume filename if you replace the existing PDF
- Project images for work that cannot be shown publicly
- Private-company work summaries rewritten so they do not expose confidential details
- Domain, analytics, and SEO metadata if you want production polish

## Current Risk In This Repo

The portfolio currently mixes content for different identities. Before publishing, every personal detail should be checked so the site shows only your information.
