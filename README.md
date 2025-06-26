
# RBAC Blog

A full-stack Role-Based Access Control (RBAC) system for a blog platform using **Node.js**, **Express**, **React**, and **MongoDB**. This application supports secure user authentication, role-based authorization, and blog management features.

---

## 📌 Project Structure

```

RBAC-blog/
│
├── backend/       → Express.js + MongoDB + JWT + SMTP server
├── frontend/      → React.js interface (User and Admin views)
└── README.md      → Project setup and documentation

````

---

## 🎯 Objectives

- Implement **authentication** and **role-based authorization** for users and admins.
- Secure access to blog features based on user roles.
- Develop a full-stack application (frontend + backend).
- Support **email verification** using an SMTP server.

---

## 🚀 Features

### 👤 Authentication
- Signup and login with JWT token generation.
- Passwords securely hashed using `bcrypt`.
- User verification link sent via email.

### 🔐 Role-Based Access
- Users can view blog posts.
- Admins can create, update, and delete blog posts.
- Middleware protects routes based on roles.

### 📄 Blog Functionality
- View all blog posts (public).
- Admin dashboard to:
  - Create new blog posts
  - Update existing blog posts
  - Delete blog posts
---

## 🛠️ Tech Stack

### 🔙 Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (JSON Web Tokens)
- Bcrypt (password hashing)
- Nodemailer (SMTP for email verification)
- dotenv (for environment configuration)

### 🌐 Frontend
- React.js
- Axios
-Bootstrap
- React Router DOM
- Context API (for auth state management)

---

## 📁 Database Models

### 🔸 User

```js
{
  name: String,
  email: String,
  password: String (hashed),
  role: String ('user' | 'admin'),
  isVerified: Boolean,
  createdAt: Date
}
````

### 🔸 BlogPost

```js
{
  title: String,
  content: String,
  author: mongoose.Schema.Types.ObjectId,
  timestamp: Date
}
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/Dharmendra2567/RBAC-blog.git
cd RBAC-blog
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

#### Create `.env` file inside `/backend`:

```env
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

#### Run backend server:

```bash
npm run dev
```

> Make sure MongoDB is running locally or use an Atlas connection string.

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm start
```

The frontend will start on `http://localhost:3000`.

---

## 🌐 Available Routes

### 🔒 Auth Routes

* `POST /api/auth/signup` — User Signup
* `POST /api/auth/login` — User Login

### 👤 User Routes

* `GET /api/posts` — View all blog posts

### 🛡 Admin Routes (Protected)

* `POST /api/posts` — Create blog post
* `PUT /api/posts/:id` — Update blog post
* `DELETE /api/posts/:id` — Delete blog post

---

## 💡 How It Works

1. **User signs up** → password is hashed → verification email sent.
2. **User logs in** → receives a JWT token.
3. **JWT middleware** verifies the token for all protected routes.
4. **Role middleware** ensures only admins can perform restricted actions.

---

## 📑 Project Architecture

* **Frontend** handles UI/UX using React components and makes HTTP requests via Axios.
* **Backend** exposes RESTful APIs, handles authentication, and enforces RBAC via middleware.
* **MongoDB** stores all user and blog post data.
* **JWT** provides stateless authentication.
* **Role Middleware** grants or denies access to resources.

---

## 🧪 Testing & Evaluation

To test the application:

1. Set up `.env` using the template provided.
2. Run both backend and frontend.
3. Signup as a new user, then manually set the `role` as `admin` (`0:normal user, 1: admin`) in MongoDB to access admin features.
4. Test blog creation, update, and deletion from admin dashboard.
5. Try accessing admin routes as a normal user (should be denied).

---

## 📬 Contact / Support

For any queries or support, contact:

> **Dharmendra Sah**
> Email: \[[dharmendrasahteli23@gmail.com](mailto:dharmendrasahteli23@gmail.com)]
> GitHub: [https://github.com/Dharmenda2567](https://github.com/Dharmendra2567)

---

## 📘 License

This project is open-source and available under the [MIT License](LICENSE).

---

## 🔐 Environment Variables Template (`.env.example`)

```
PORT=5000
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret_key
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

---
