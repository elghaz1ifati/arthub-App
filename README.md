# 🌐 Arthub - Full Stack Social Network

Arthub is a **full-stack web application** that allows users to create posts, like/dislike them, and comment.  
The project is divided into two main parts:

- **Backend (Laravel)** → RESTful API for authentication, posts, likes, dislikes, and comments  
- **Frontend (React)** → User interface consuming the API  

## 📌 Features
- 👤 User authentication & management  
- 📝 Create, edit and delete posts  
- 👍 Like & 👎 Dislike posts  
- 💬 Comment on posts  
- 🔗 Relationships between Users, Posts, Likes, Dislikes, and Comments  
- ⚡ RESTful API with **Axios integration** 

## 🛠️ Tech Stack
### Backend
- **Framework:** Laravel 10+
- **Database:** MySQL
- **ORM:** Eloquent

### Frontend
- **Framework:** React + Vite
- **Styling:** CSS / Bootstrap
- **HTTP Client:** Axios  

## 📂 Database Schema
The database contains 5 main tables:

- `user` → Stores user accounts
- `post` → User-generated posts
- `like` → Likes on posts
- `dislike` → Dislikes on posts
- `comment` → Comments on posts

(Relationships are defined with foreign keys in migrations.)

## 📑 Routes

All routes are defined in routes/web.php:
```
/user → Manage users

/post → Manage posts

/like → Manage likes

/dislike → Manage dislikes

/comment → Manage comments
```
## 📦 Example API Endpoints

If used with React frontend via Axios:
```
GET /users → List users

POST /users → Create user

GET /posts → List posts

POST /posts → Create post

POST /likes → Like a post

POST /dislikes → Dislike a post

POST /comments → Comment on post
```
## 📌 Project Structure
```
arthub/
│
├── backend/ # Laravel backend
│ ├── app/Models/ # Models (User, Post, Like, Dislike, Comment)
│ ├── app/Http/Controllers # API Controllers
│ ├── database/migrations/ # Migration files
│ └── routes/api.php # API routes
│
└── frontend/ # React frontend
├── src/
│ ├── components/ # React components (Header, Hero, Gallery, Reviews, Footer...)
│ ├── css/ # Styling files
│ ├── App.jsx # Main app file
│ └── index.js # React entry point
└──
```


## 🚀 Installation
### 1️⃣ Clone Repository
```bash
git clone https://github.com/your-username/arthub.git
```
```
cd arthub
```

### 2️⃣ Backend (Laravel)

Go to backend folder:
```bash
cd backend
```

Install dependencies:
```
composer install
```

Create environment file:
```
cp .env.example .env
```

Update .env with your database credentials:
```
DB_DATABASE=arthub
DB_USERNAME=root
DB_PASSWORD=
```

Generate app key:
```
php artisan key:generate
```

Run migrations:
```
php artisan migrate:fresh --seed
```

Start Laravel server:
```
php artisan serve
```

Backend API will be available at:
👉 http://localhost:8000

### 3️⃣ Frontend (React)

Go to frontend folder:
```
cd ../frontend
```

Install dependencies:
```
npm install
```

Start React app:
```
npm run dev
```

Frontend will be available at:
👉 http://localhost:5173

