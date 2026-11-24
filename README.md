# 🚀 Riyaz Memon — Software Engineer & Full Stack Portfolio

[![MERN Stack](https://img.shields.io/badge/Stack-MERN-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://github.com/memonriyaz)
[![Fintech](https://img.shields.io/badge/Fintech-Razorpay%20%7C%20Cashfree%20%7C%20Easebuzz-00C9A7?style=for-the-badge)](https://github.com/memonriyaz)
[![Google Solution Challenge](https://img.shields.io/badge/Google%20Solution%20Challenge-Top%20105-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://github.com/memonriyaz)
[![AWS](https://img.shields.io/badge/AWS-Academy%20Graduate-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white)](https://github.com/memonriyaz)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](LICENSE)

> Interactive, production-grade developer portfolio engineered for **Riyaz Memon** — Software Engineer at Capgemini, Fintech SDE Intern at Edviron, and Top 105 Google Solution Challenge finalist.

---

## 🌟 Standout Creative Features

1. **⚡ Interactive Architecture Lab**:
   - **Fintech Payment Pipeline Simulator**: Experience the 4-stage transaction flow engineered at Edviron: Client Order $\rightarrow$ NestJS Idempotency Validation $\rightarrow$ HMAC SHA-256 Webhook Verification $\rightarrow$ Atomic MongoDB Ledger update across **Razorpay**, **Cashfree**, and **Easebuzz**.
   - **WardWatch Real-Time SSE Telemetry**: Live hospital ward simulation with Server-Sent Events (SSE) and Role-Based Access Control (RBAC) for Doctors, Nurses, and Administrators.
   - **DevTogether Collaborative Terminal**: Live dual-peer code sync and remote terminal execution simulation via WebSockets.

2. **💻 RiyazOS Interactive Terminal (`DevTerm`)**:
   - Built-in terminal emulator accessible via in-app button or global keyboard shortcut (`Ctrl + \``).
   - Recruiter-friendly commands: `help`, `skills`, `projects`, `experience`, `education`, `contact`, `cat resume`, and `sudo hire` (with confetti celebration).

3. **🏗️ Full-Stack MERN Architecture**:
   - **Frontend**: React 18, Vite, Tailwind CSS, Lucide Icons, and Canvas Confetti.
   - **Backend**: Node.js, Express, MongoDB (Mongoose), CORS, and REST API endpoints (`/api/health`, `/api/projects`, `/api/stats`, `/api/contact`, `/api/simulate-payment`).
   - Resilient design: Operates smoothly both with a live MongoDB server and statically on GitHub Pages with automated local fallbacks.

4. **📄 In-App Verified Resume Viewer & PDF Export**:
   - Direct modal view with print-to-PDF formatting.

---

## 📂 Repository Structure

```
riyaz-memon-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── client/                     # React + Vite + Tailwind CSS Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── ArchitectureSimulator.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── SkillsMatrix.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── TerminalModal.jsx
│   │   │   ├── ResumeModal.jsx
│   │   │   └── Footer.jsx
│   │   ├── data/
│   │   │   └── resumeData.js   # Extracted resume information
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vite.config.js
│   └── package.json
├── server/                     # Node.js + Express + MongoDB Backend
│   ├── server.js               # REST API & Payment/SSE Simulator endpoints
│   ├── .env.example
│   └── package.json
├── package.json                # Root package with concurrently & scripts
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [Git](https://git-scm.com/)

### 1. Install Dependencies
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install && cd ..

# Install server dependencies
cd server && npm install && cd ..
```

### 2. Run Both Frontend and Backend Concurrently
```bash
npm run dev
```
- Client runs at: `http://localhost:3000`
- Backend API runs at: `http://localhost:5000`

---

## 🌐 Deploying to GitHub Pages

### Method A: Automated GitHub Actions (Recommended)
1. Push this repository to your GitHub account:
   ```bash
   git add .
   git commit -m "feat: complete creative MERN portfolio for Riyaz Memon"
   git remote add origin https://github.com/memonriyaz/riyaz-memon-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. On GitHub, navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The workflow will automatically build and publish your site!

### Method B: Deploy via `gh-pages`
```bash
# Build and deploy client to gh-pages branch
npm run build
npm run deploy
```

---

## 👤 Author

**Riyaz Memon**  
- **Role**: Software Engineer | Full Stack Developer  
- **Email**: [memonriyazwork@gmail.com](mailto:memonriyazwork@gmail.com)  
- **LinkedIn**: [linkedin.com/in/riyaz-memon](https://linkedin.com/in/riyaz-memon)  
- **GitHub**: [github.com/memonriyaz](https://github.com/memonriyaz)
