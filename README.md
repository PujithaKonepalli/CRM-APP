# 🚀 CRM-APP (Full Stack)

A modern full-stack Customer Relationship Management (CRM) application with authentication, data visualization, and scalable architecture.

---

## ✨ Features

* 🔐 JWT Authentication (Login/Register)
* 👥 Customer (Person) Management (CRUD)
* 📊 Data Visualization (Charts)
* ⚡ Global State Management (Redux Toolkit)
* 🎨 Responsive UI (Tailwind CSS)
* 🌐 REST API Integration
* 🗄️ PostgreSQL Database

---

## 🛠️ Tech Stack

### 🖥️ Frontend

* React 19
* TypeScript
* Vite
* Redux Toolkit
* React Router
* Axios
* Tailwind CSS
* Chart.js + react-chartjs-2
* React Hot Toast (notifications)

---

### ⚙️ Backend

* Node.js
* Express.js
* TypeScript
* PostgreSQL (`pg`)
* JWT (`jsonwebtoken`)
* bcrypt (password hashing)
* dotenv
* CORS

---

## 📁 Project Structure

```id="b7bqwt"
CRM-APP/
│
├── client-app/
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── pages/            # Page-level components
│   │   ├── api.ts            # Axios API config
│   │   ├── router.tsx        # Routing
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   └── package.json
│
├── server/
│   ├── src/
│   │   ├── middleware/
│   │   │   └── auth.ts       # JWT middleware
│   │   ├── routes/
│   │   │   ├── auth.ts
│   │   │   └── person.ts
│   │   ├── db.ts             # PostgreSQL connection
│   │   └── index.ts          # Entry point
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repo

```bash
git clone https://github.com/PujithaKonepalli/CRM-APP.git
cd CRM-APP
```

---

### 2️⃣ Backend Setup

```bash
cd server
npm install
```

Create `.env` file:

```env id="envx1"
PORT=5000
DATABASE_URL=postgres://user:password@localhost:5432/crm
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd ../client-app
npm install
npm run dev
```

---

## 🔐 Authentication

JWT-based authentication system:

* Login returns a token
* Token required for protected routes

```id="authh1"
Authorization: Bearer <token>
```

---

## 📡 API Endpoints

### 🔑 Auth

* POST `/auth/register`
* POST `/auth/login`

### 👥 CRM (Person)

* GET `/person`
* POST `/person`
* PUT `/person/:id`
* DELETE `/person/:id`

---

## 📊 Charts & Dashboard

* Built using Chart.js
* Visual representation of CRM data
* Integrated with Redux state

---

## 🎯 State Management

* Managed using Redux Toolkit
* Centralized store for:

  * Auth state
  * CRM data
  * UI state

---

## 🔒 Security

* Password hashing using bcrypt
* JWT token validation middleware
* Environment variables for secrets

---

## 🚀 Future Enhancements

* Role-based access control (Admin/User)
* CRM dashboard analytics
* File upload support
* Deployment (Render / Railway / AWS)
* Swagger API documentation

---

## 📄 License

ISC License

---

## 👤 Author

**Pujitha Konepalli**
GitHub: https://github.com/PujithaKonepalli
