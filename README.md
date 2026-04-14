# 🚀 CRM-APP (Full Stack)

A full-stack Customer Relationship Management (CRM) application built with a modern tech stack.

This project includes:

* 🌐 Frontend (React + TypeScript + Vite)
* ⚙️ Backend (Node.js + Express + TypeScript)
* 🔐 JWT Authentication
* 🗄️ PostgreSQL Database

---

## 📁 Project Structure

```
CRM-APP/
│
├── client-app/              # Frontend (React + Vite + TS)
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── api.ts
│   │   ├── router.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   └── package.json
│
├── server/                  # Backend (Node + Express + TS)
│   ├── src/
│   │   ├── middleware/
│   │   │   └── auth.ts
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   └── person.ts
│   │   ├── db.ts
│   │   └── index.ts
│   └── package.json
│
└── README.md
```

---

## 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Vite

### Backend

* Node.js
* Express.js
* TypeScript
* JWT Authentication

### Database

* PostgreSQL

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PujithaKonepalli/CRM-APP.git
cd CRM-APP
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create `.env` inside `/server`:

```
PORT=5000
DATABASE_URL=your_postgres_connection
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Setup Frontend

```bash
cd ../client-app
npm install
npm run dev
```

---

## 🔐 Authentication

* Uses JWT (JSON Web Tokens)
* Protected routes require:

```
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

### Auth Routes

* POST `/auth/register`
* POST `/auth/login`

### Person / CRM Routes

* GET `/person`
* POST `/person`
* PUT `/person/:id`
* DELETE `/person/:id`

---

## 🌐 Frontend Features

* Routing with React Router
* API integration via `api.ts`
* Component-based structure
* Pages for CRM workflows

---

## 🔒 Security

* Environment variables stored in `.env`
* JWT-based authentication middleware
* Sensitive data excluded via `.gitignore`

---

## 🚀 Future Improvements

* Role-based access (Admin/User)
* Dashboard analytics
* File uploads (profile/customer docs)
* Deployment (Render / Railway / AWS)

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

**Pujitha Konepalli**
GitHub: https://github.com/PujithaKonepalli
