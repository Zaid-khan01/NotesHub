
# 📚 Notes Hub
A modern platform for students to **access, browse, and download** academic notes — from school (Class 10–12) to college (BCA, BTech, Diploma) — all in one hub.


## Demo

[Click here to visit the live site](https://your-vercel-site.vercel.app)

Insert gif or link to demo


## 🌟 Features

- 🎯 Class-wise, Stream-wise, and Semester-wise navigation
- 📂 Organized subject and chapter-based notes
- 🔍 Fast and responsive UI (React + Tailwind)
- ☁️ File uploads via Cloudinary
- 💾 Backend powered by Django + DRF
- 🌙 Dark Mode with smooth animations


## 🛠️ Tech Stack 

**Frontend:**
- React
- Tailwind CSS
- React Router DOM
- Framer Motion

**Backend:**
- Django
- Django REST Framework
- Cloudinary (for media)

**Deployment:**
- Vercel (Frontend)
- Render (Backend)


## 🚀 Installation

- **Clone the repository**

```bash
  git clone https://github.com/your-username/notes-hub.git
  cd notes-hub
```

- **Install frontend dependencies**

  Make sure you have Node.js and pnpm or npm installed.
    
```bash
pnpm install
# or
npm install

```

- **Install backend dependencies**

  Open a second terminal in the backend directory:

```bash
cd backend
pip install -r requirements.txt

```

- **Environment Setup**

  Create a .env file in both frontend and backend if needed and add your API keys or DB credentials (Cloudinary, Django secret key, etc.)

```bash
# Frontend

pnpm dev
# or
npm run dev

```

```bash
# Backend (in the backend directory)

python manage.py runserver

```