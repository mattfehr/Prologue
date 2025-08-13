# 🌐 Matthew Fehr — Portfolio Website

A personal portfolio site to showcase my projects, resume, and contact information. Includes a custom-built contact form using a Node.js + Express backend with secure email support.

## 🔗 Live Demo

- **Frontend**: [https://mattfehr-portfolio-prologue.onrender.com](https://mattfehr-portfolio-prologue.onrender.com)
- **Backend API** (Contact form): [https://prologue-portfolio.onrender.com](https://prologue-portfolio.onrender.com)

---

## 🧩 Tech Stack

### Frontend
- HTML5
- CSS3 (Custom & Template-based)
- JavaScript
- Font Awesome Icons
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) for local dev

### Backend
- Node.js
- Express
- Nodemailer
- dotenv (for env variables)
- CORS

### Deployment
- [Render](https://render.com) for both frontend (static site) and backend (web service)
- Git & GitHub for version control

---

## 📬 Contact Form Features

- Fully functional contact form using `fetch()` and `FormData`
- Prevents page reload with AJAX
- Displays success/failure messages inline
- Uses Gmail + App Password for secure email sending
- Email includes sender's name, email, and message
- Configurable with `.env` (ignored by Git)

---

## 📁 Project Structure

```
Prologue/
├── assets/
│   └── css/, js/, images/
├── contact-form-server/
│   ├── server.js
│   ├── .env              
│   └── package.json
├── index.html
└── README.md
```

---

## ⚙️ Running Locally

### Prerequisites
- Node.js installed
- Gmail account with 2FA + App Password

### 1. Clone the repo

```bash
git clone https://github.com/your-username/your-repo.git
cd Prologue
```

### 2. Start the backend

```bash
cd contact-form-server
npm install
node server.js
```

> Or use `nodemon server.js` for auto-reloading

### 3. Start the frontend

Use VS Code **Live Server** to open `index.html`, or simply open it in your browser.

---

## 🔐 Environment Variables

Create a `.env` file in `contact-form-server/`:

```env
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
```

---

## 🌍 Deployment Notes

- Backend hosted on Render as a **Web Service** from `contact-form-server/`
- Frontend hosted on Render as a **Static Site** from root
- Use `data-api="https://your-backend.onrender.com/contact"` in the form for deployment compatibility

---

## ✨ Credits

- Built by **Matthew Fehr**  
- Template styling from [HTML5 UP](https://html5up.net)
- Icons from [Font Awesome](https://fontawesome.com)
