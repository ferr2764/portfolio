# 🚀 Portfolio Project Specification (CLAUDE.md)

## 📌 Project Overview

Build a modern, high-performance personal portfolio website for a software engineer.

The website must:

* Showcase personal information (from provided PDF)
* Highlight projects, skills, and experience
* Include interactive UI/UX and animations
* Be visually impressive and recruiter-friendly

---

## 🧠 Input Data Source

* A PDF file will be provided containing:

  * Personal information
  * Education
  * Skills
  * Projects
  * Experience

### Requirements:

* Parse and extract structured data from the PDF
* Convert content into structured JSON format
* Dynamically render sections from extracted data

---

## 🛠️ Tech Stack

### Core

* Next.js (App Router, TypeScript)
* Tailwind CSS
* ShadCN UI (Radix-based, Nova preset)

### Animation

* Framer Motion (primary animation library)

### 3D / Advanced Visuals

* Three.js (via @react-three/fiber + drei)

### Optional Enhancements

* GSAP (for advanced scroll animation)
* Lenis (smooth scrolling)

---

## 🎨 Design Requirements

### Style

* Clean, modern, developer-focused
* Dark mode by default
* Inspired by Vercel / Apple / modern SaaS landing pages

### UI Principles

* Minimal but interactive
* Smooth transitions
* High readability
* Consistent spacing and typography

---

## 📄 Required Sections

### 1. Hero Section

* Name, title, short intro (from PDF)
* Animated entrance (Framer Motion)
* Optional: 3D background (Three.js)

### 2. About

* Short bio extracted from PDF
* Highlight strengths and goals

### 3. Skills

* Categorized (Frontend, Backend, Tools, etc.)
* Display as:

  * badges OR
  * animated progress bars

### 4. Projects

* Extract from PDF

* Each project should include:

  * Title
  * Description
  * Tech stack
  * GitHub link (if available)

* UI:

  * Card layout
  * Hover animation
  * Optional modal/detail view

### 5. Experience / Education

* Timeline layout
* Animated on scroll

### 6. Contact

* Email (from PDF)
* Social links (GitHub, LinkedIn)
* Simple contact form (optional)

---

## ✨ Animation Requirements

* Use Framer Motion for:

  * Page transitions
  * Fade/slide on scroll
  * Hover effects

* Optional:

  * Parallax scrolling
  * Text reveal animation
  * Magnetic buttons

---

## 🌌 3D Requirements (Optional but preferred)

* Add a Three.js canvas in Hero section
* Ideas:

  * Floating particles
  * Abstract shapes
  * Interactive mouse movement

---

## 📁 Project Structure

src/

* app/
* components/

  * ui/ (shadcn)
  * sections/
  * common/
* lib/
* data/ (parsed JSON from PDF)

---

## ⚡ Performance Requirements

* Optimize images
* Lazy load components
* Avoid heavy 3D assets
* Ensure smooth 60fps animations

---

## 📱 Responsive Design

* Mobile-first
* Fully responsive
* Optimize touch interactions

---

## 🧪 Bonus Features

* Dark/light mode toggle
* Animated cursor
* AI chatbot assistant (optional)
* Download CV button

---

## 🚫 Constraints

* Do NOT hardcode personal data
* All content must come from parsed PDF
* Keep code modular and reusable
* Avoid overusing animations (performance first)

---

## 🎯 Goal

Create a portfolio that:

* Impresses recruiters within 5–10 seconds
* Demonstrates strong frontend + UI/UX skills
* Highlights advanced capabilities (animation + 3D)

---

## 📌 Notes for AI Agent

* Prioritize clean code and maintainability
* Use reusable components
* Follow best practices for Next.js App Router
* Ensure accessibility (ARIA where needed)

---

## ✅ Output Expectations

* Fully working Next.js project
* Clean UI with animations
* Structured data extracted from PDF
* Ready for deployment (Vercel)
