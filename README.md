# awesomeparcore.github.io

Personal portfolio site — built with plain HTML/CSS/JS, no framework or build step.

Live at: https://awesomeparcore.github.io

## Status

Scaffolded but not yet filled in — sections for about, skills, projects,
experience, education, and contact are all in place with placeholder text.
Swap in real content before treating this as final.

## Structure

```
index.html   page markup / content
site.css     styling (dark, terminal-inspired theme)
site.js      mobile nav toggle, smooth scroll, hero typing effect
```

## Running locally

Static site, no build tooling required — just open `index.html` in a
browser, or serve the folder with any static file server, e.g.:

```bash
python -m http.server 8080
```

## Contact form

The contact form posts to [FormSubmit](https://formsubmit.co) (no backend
required). On first real submission, FormSubmit sends a one-time
confirmation email that needs to be clicked to activate the endpoint.

## Deployment

Hosted via GitHub Pages directly from this repo — pushes to the default
branch go live automatically.
