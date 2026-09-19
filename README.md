# Odoo for Business

> A practical, interactive ERP learning platform for aspiring Odoo consultants, business owners, and implementation teams.

[![Built With](https://img.shields.io/badge/Built%20with-HTML%20%7C%20CSS%20%7C%20JavaScript-714B67)](https://github.com/theabdulwasay/Odoo-Course)
[![License](https://img.shields.io/badge/License-Educational%20Project-00A09D)](#license)

## Overview

**Odoo for Business** is a browser-based course platform designed to turn Odoo ERP concepts into practical, job-ready skills. It combines a structured six-week curriculum with interactive lessons, progress tracking, interview preparation, client discovery tools, and reusable consultant templates.

The experience is built for learning by doing: move through real business workflows, test your knowledge, prepare for client conversations, and track your progress directly in the browser.

## What You Get

- **Six-week ERP roadmap** covering a complete 36-hour consultant program
- **Interactive session workspace** for guided lessons and practical objectives
- **Progress tracking** saved locally in the browser
- **50+ interview questions and answers** for functional consultant preparation
- **Client blueprint** for discovery, requirements, and implementation planning
- **Consultant templates** for repeatable project work
- **Keyboard-friendly search** with `Ctrl + K` / `Cmd + K`
- **Responsive interface** for desktop, tablet, and mobile screens
- **Certificate progress flow** based on completed learning sessions

## Curriculum

| Week | Focus |
| --- | --- |
| 1 | Odoo foundations, company setup, users, CRM, and Sales |
| 2 | Purchase, Inventory, warehouses, and replenishment |
| 3 | Accounting, invoicing, payments, and financial controls |
| 4 | Manufacturing, quality, maintenance, and operations |
| 5 | Employees, recruitment, time off, expenses, and approvals |
| 6 | Studio customization, automation, reporting, and implementation |

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Tailwind CSS via CDN
- Lucide Icons via CDN
- Browser `localStorage` for learner progress
- Python standard library server for local development

## Run Locally

### Prerequisites

- Python 3.8 or later
- A modern web browser

### Start the app

```bash
python server.py
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

You can also serve the folder with any static file server because the app has no build step or backend dependency.

## Deploy to Vercel

This is a zero-build static project. Deploy it from the project directory with the Vercel CLI:

```bash
npx vercel --prod
```

Or import the GitHub repository into Vercel:

1. Open [vercel.com/new](https://vercel.com/new).
2. Import `theabdulwasay/Odoo-Course`.
3. Leave the framework preset as **Other**.
4. Leave the build command empty.
5. Set the output directory to `.` if Vercel requests one.
6. Click **Deploy**.

The site entry point is `index.html`, so no additional routing or server configuration is required.

## Project Structure

```text
.
├── index.html       # Application shell and page markup
├── styles.css       # Custom styling and responsive layout rules
├── app.js           # UI interactions, navigation, progress, and search
├── course-data.js   # Curriculum, interview content, and templates
├── server.py        # Local development server
└── Odoo for Business Course Outline.pdf
```

## Data & Privacy

Learner progress is stored in the browser using `localStorage`. No account, database, or external application server is required. Clearing browser storage will reset local progress for the course.

The interface loads Tailwind CSS and Lucide Icons from their public CDNs when the page is opened online.

## Contributing

1. Create a feature branch.
2. Make focused changes.
3. Test the interface in a desktop and mobile viewport.
4. Open a pull request with a short description of the change.

## License

This repository is an educational project. Course content and included materials are provided for learning and demonstration purposes.

---

Built for practical Odoo learning and consultant readiness.
