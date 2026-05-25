# Smart Study Backend API

Express.js + MongoDB backend for Smart Study and Productivity Analyzer

## 📁 Folder Structure

```
Backend/
├── src/
│   ├── config/
│   │   └── database.js          (MongoDB connection)
│   ├── controllers/
│   │   └── authController.js    (Auth logic)
│   ├── routes/
│   │   ├── authRoutes.js        (Auth endpoints)
│   │   └── index.js             (Route index)
│   ├── models/
│   │   └── User.js              (User schema)
│   ├── middleware/
│   │   └── auth.js              (JWT verification)
│   └── server.js                (Main server)
├── package.json
├── .env.example
└── .gitignore
```

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Copy `.env.example` to `.env` and fill in values:
```bash
cp .env.example .env
```

Update `.env` with:
- `MONGODB_URI` - Get from MongoDB Atlas
- `JWT_SECRET` - Create a strong secret
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend address (default: http://localhost:5173)

### 3. Get MongoDB Atlas Connection String
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string: `mongodb+srv://username:password@cluster.mongodb.net/dbname`
4. Paste into `.env` as `MONGODB_URI`

### 4. Start Development Server
```bash
npm run dev
```

Server runs with auto-reload on file changes.

## 📡 API Endpoints

### Health Check
- `GET /api/health` - Check if server is running

### Authentication
- `POST /api/auth/register` - Register new user
  ```json
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `POST /api/auth/login` - Login user
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```

- `GET /api/auth/me` - Get current user (requires JWT token)
  - Header: `Authorization: Bearer <token>`

## 🔐 JWT Authentication Flow

1. User registers/logs in
2. Server returns JWT token
3. Frontend stores token (localStorage)
4. Frontend sends token in `Authorization` header for protected routes
5. Middleware verifies token and allows/blocks request

## 📦 Installed Packages

- **express** - Web framework
- **mongoose** - MongoDB ODM
- **dotenv** - Environment variables
- **jwt-simple** - JWT encoding/decoding
- **bcryptjs** - Password hashing
- **cors** - Cross-Origin Resource Sharing

## 🛠️ Next Steps

1. Create `.env` file with MongoDB URI
2. Run `npm install`
3. Run `npm run dev`
4. Test endpoints with Postman or curl
5. Create more models/routes as needed

---

**Ready to proceed with dashboard and activity log routes?**
