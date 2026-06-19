# IdeaVault

A personal idea capture and pitch preparation tool. Built in one night as hackathon preparation.

## 🚀 Live Demo
[ideavault.vercel.app](https://ideavault.vercel.app)

## ✨ Features
- Capture ideas with title and description
- Delete ideas you no longer need
- Data persists in localStorage (survives page refresh)
- Multi-page navigation with React Router
- 60-second pitch practice timer with start/pause/reset
- Copy pitch text to clipboard
- Responsive design — works on mobile

## 🛠️ Tech Stack
- **React** (Vite)
- **CSS3** — custom styling
- **React Router v6** — client-side routing
- **localStorage API** — data persistence
- **Clipboard API** — copy to clipboard
- **Vercel** — deployment

## 📁 Project Structure
src/
├── components/
│ ├── IdeaCard.jsx
│ ├── IdeaGrid.jsx
│ └── IdeaForm.jsx
├── pages/
│ ├── IdeaDetailPage.jsx
│ └── PracticePage.jsx
├── hooks/
│ └── useLocalStorage.js
├── App.jsx
├── main.jsx
└── index.css

## 🏃 How to Run Locally
```bash
npm install
npm run dev

🧠 What I Learned
Component architecture and props drilling

State management with useState and custom hooks

React Router for multi-page applications

Browser APIs: localStorage and clipboard

Git branching workflow (feature branches → PRs → merge)

Deployment to production with Vercel

Debugging configuration and file path errors

👤 Built by
Nikita — Psych major, aspiring PM, hackathon speedrunner

text

---

## THEN PUSH

```bash
git add .
git commit -m "docs: add README"
git push origin main