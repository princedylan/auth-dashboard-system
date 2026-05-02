# 🚀 Dashboard App

A full-stack user authentication dashboard built with Node.js, Express, MongoDB, and JWT authentication.
This project handles secure user registration, login, and protected routes with a clean backend structure.

---

## ✨ Features

* 🔐 User registration & login system
* 🛡️ JWT-based authentication
* 🔒 Protected dashboard route
* 🗄️ MongoDB database integration
* ⚙️ RESTful API structure
* 📦 Clean MVC-style backend architecture
* 🚫 Secure password handling (hashed)

---

## 🧠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Mongoose)
* **Authentication:** JWT (JSON Web Tokens), bcrypt
* **Environment Management:** dotenv

---

## 📁 Project Structure

```
dashboard-project/
│
├── models/         # Database schemas (User model)
├── routes/         # API routes (auth, dashboard, etc.)
├── controllers/    # Business logic
├── middleware/     # Auth protection logic
├── config/         # DB connection setup
├── server.js       # Entry point
└── .env            # Environment variables (NOT pushed to GitHub)
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4. Run the server

```bash
npm start
```

Server runs on:

```
http://localhost:5000
```

---

## 🔐 Authentication Flow

1. User registers → password is hashed
2. User logs in → JWT token is generated
3. Token is used to access protected dashboard route
4. Middleware verifies token before access

## 🧩 Future Improvements

* 🎨 Frontend dashboard UI (React / EJS)
* 👤 Role-based authentication (admin/user)
* 📊 Analytics dashboard cards
* 🌐 Live deployment (Render / Vercel)
* 🔔 Notifications system

---

## 👨‍💻 Author

Built by **Dylan**
Website Developer focused on building clean, scalable web systems.

---

## ⚡ Note

This project is part of my learning/build journey in full-stack development and backend authentication systems.

---
* or help you deploy it so this README links to a live demo

Just say the word.
