# 🧑‍💻 Shashwat Kashyap — My Digital Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, training, certificates, and achievements as a Full Stack Developer and AI Enthusiast.

🔗 **Live Site:** [shashwat7816.github.io/My-Digital-Portfolio](https://shashwat7816.github.io/My-Digital-Portfolio) *(update once deployed)*

---

## ✨ Features

- **Hero Section** — Animated introduction with role typewriter effect and 3D Spline background
- **About** — Bio, stats (CGPA · Projects · Problems Solved) with icon cards
- **Skills** — Categorised tech stack (Languages, Frontend, Backend, Tools, Cloud, AI/ML)
- **Projects** — Showcase with live demo links, GitHub links, tags, and descriptions
- **Training** — Internships and professional training experience
- **Certificates** — PDF viewer for earned certifications (Infosys, Cloud Computing, etc.)
- **Achievements** — Academic and competitive highlights
- **Resume** — Inline resume viewer with download option
- **Contact** — Contact form + social links
- **Dark/Light Theme** — Smooth toggle with persistent context

---

## 🛠️ Tech Stack

| Category | Tools |
|---|---|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS v3 + Custom CSS |
| **Animations** | Framer Motion |
| **3D / Spline** | @splinetool/react-spline |
| **Icons** | Lucide React + React Icons |
| **Linting** | ESLint + TypeScript ESLint |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx           # Landing hero with Spline 3D
│   ├── About.tsx          # Bio + stat cards
│   ├── Skills.tsx         # Tech skills grid
│   ├── Projects.tsx       # Project showcase cards
│   ├── Training.tsx       # Internship/training timeline
│   ├── Certificates.tsx   # Certificate PDF viewer
│   ├── Achievements.tsx   # Achievements list
│   ├── Resume.tsx         # Resume viewer + download
│   ├── Contact.tsx        # Contact form
│   ├── Header.tsx         # Navbar with theme toggle
│   └── Section.tsx        # Reusable section wrapper
├── context/
│   └── ThemeContext.tsx   # Dark/light theme provider
├── App.tsx
└── main.tsx
public/
├── shashwat_cv.pdf        # Downloadable resume
├── projects/              # Project screenshots
└── videos/               # Demo videos
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm

### Install & Run

```bash
# Clone the repo
git clone https://github.com/shashwat7816/My-Digital-Portfolio.git
cd My-Digital-Portfolio

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Production Build

```bash
npm run build
# Output goes to /dist
```

---

## 📬 Contact

**Shashwat Kashyap**
- 📧 [shashwat7816@gmail.com](mailto:shashwat7816@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/shashwat7816)
- 🐙 [GitHub](https://github.com/shashwat7816)

---

> Built with ❤️ by Shashwat Kashyap
