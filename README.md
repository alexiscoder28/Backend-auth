# 🔐 Backend Authentication System

> A full-stack authentication system built with Node.js, Express, MongoDB, and JWT tokens featuring password hashing, user management, and an interactive API dashboard.

🔗 **[Live Demo](https://backend-auth-1-nseo.onrender.com/)**

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-v5.1-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen.svg)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## 🌟 Features

- ✅ **User Registration** with bcrypt password hashing
- ✅ **JWT Authentication** with 7-day token expiration
- ✅ **Secure Login System** with token generation
- ✅ **Interactive API Dashboard** for testing endpoints
- ✅ **RESTful API** with proper error handling
- ✅ **MongoDB Atlas** cloud database integration
- ✅ **Environment Variables** for security
- ✅ **Real-time UI** with AJAX requests

## 🛠 Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM
- bcrypt for password hashing
- jsonwebtoken for JWT tokens
- dotenv for environment management

**Frontend:**
- EJS templating
- Vanilla JavaScript (ES6+)
- Responsive CSS

## 📸 Screenshots

### API Dashboard
![Dashboard](https://via.placeholder.com/800x400/667eea/ffffff?text=Backend+Auth+Dashboard)

### Authentication Flow
![Auth Flow](https://via.placeholder.com/800x400/764ba2/ffffff?text=JWT+Authentication)

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account (free tier)
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/alexiscoder28/Backend-auth.git
cd Backend-auth
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_super_secret_jwt_key_here
PORT=3000
```

4. **Run the application**
```bash
npm run dev
```

5. **Open your browser**
```
http://localhost:3000
```

## 📚 API Endpoints

### Authentication

#### Register User
```http
POST /register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "user": {
    "username": "john_doe",
    "email": "john@example.com",
    "_id": "..."
  }
}
```

#### Login User
```http
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```

### User Management

#### Get All Users
```http
GET /get-users
```

#### Update User
```http
POST /update-user
Content-Type: application/json

{
  "username": "john_doe",
  "email": "newemail@example.com"
}
```

#### Delete User
```http
POST /delete-user
Content-Type: application/json

{
  "username": "john_doe"
}
```

## 🔒 Security Features

- **Password Hashing**: Uses bcrypt with salt rounds of 10
- **JWT Tokens**: Signed tokens with 7-day expiration
- **Environment Variables**: Sensitive data stored securely
- **Input Validation**: Error handling on all endpoints
- **No Plain Text Passwords**: All passwords hashed before storage

## 🏗 Project Structure

```
Backend-auth/
├── config/
│   └── db.js                 # MongoDB connection
├── models/
│   └── user.js              # User schema with bcrypt
├── views/
│   ├── index.ejs            # API Dashboard
│   └── register.ejs         # Registration page
├── public/
│   └── index.css            # Styles
├── app.js                   # Main application
├── .env                     # Environment variables (not in repo)
├── package.json
└── README.md
```

## 🧪 Testing the API

1. **Register a new user** using the dashboard
2. **Login** with the registered credentials
3. **Check browser console** to see the JWT token
4. **Test CRUD operations** with the interactive UI

## 🌐 Deployment

Ready to deploy on platforms like:
- [Render](https://render.com)
- [Railway](https://railway.app)
- [Heroku](https://heroku.com)
- [Vercel](https://vercel.com) (for frontend)

### Deploy to Render

1. Push code to GitHub
2. Connect Render to your repository
3. Add environment variables in Render dashboard
4. Deploy!

## 📖 What I Learned

- Implementing secure authentication with JWT
- Password hashing with bcrypt
- MongoDB Atlas cloud database setup
- RESTful API design patterns
- Error handling and validation
- Frontend-backend communication
- Environment variable management

## 🐛 Known Issues

- MongoDB Atlas connection may timeout on slower networks (works fine on deployment)
- Database operations require active internet connection

## 🔮 Future Enhancements

- [ ] Email verification
- [ ] Password reset functionality
- [ ] Refresh token implementation
- [ ] Rate limiting
- [ ] OAuth integration (Google, GitHub)
- [ ] Protected routes middleware
- [ ] User roles and permissions
- [ ] Profile picture upload

## 👨‍💻 Author

**Jiteshwar Bhagat**

- GitHub: [@alexiscoder28](https://github.com/alexiscoder28)
- Email: jiteshwarbhagat6@gmail.com

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built as part of learning full-stack development
- Inspired by modern authentication systems
- Thanks to the Node.js and Express community

---

⭐ **Star this repo if you found it helpful!**

💼 **Looking for collaboration opportunities** - Feel free to reach out!