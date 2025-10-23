📰 Blog Post MERN Application

📌 Project Overview
This project is a Full Stack MERN Application built using:
- MongoDB for the database  
- Express.js for the backend API  
- React (Vite) for the frontend  
- Node.js as the runtime environment  

The application allows users to:
- Create new blog posts 📝  
- View all existing posts 📋  
- Store and retrieve data dynamically from MongoDB 💾  

This project was developed as part of the Full Stack Web Development Practical Assignment to demonstrate knowledge of frontend-backend integration using RESTful APIs.



🚀 Project Objectives
The key objectives of this project include:
1. Setting up a backend API server using Node.js and Express.  
2. Connecting the backend to a MongoDB database using Mongoose.  
3. Building a frontend interface with React (Vite).  
4. Implementing communication between frontend and backend using Axios.  
5. Deploying or testing the complete application successfully.



⚙️ Technologies Used

| Layer | Technology | Purpose |
|:------|:------------|:---------|
| Frontend | React (Vite) | User Interface |
| Backend | Node.js + Express | REST API server |
| Database | MongoDB | Data persistence |
| HTTP Client | Axios | API communication |
| Development Tools | Nodemon, dotenv | Auto-reload and environment variables |



🧩 Folder Structure

```bash
project-folder/
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── Post.js
│   ├── routes/
│   │   └── postRoutes.js
│   ├── .env
│   ├── package.json
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PostList.jsx
│   │   │   └── CreatePost.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── App.css
│   ├── vite.config.js
│   ├── .env
│   ├── package.json
│
└── README.md


🧠 Backend Setup

1️⃣ Install Dependencies

npm install express mongoose cors dotenv nodemon

2️⃣ Create .env file

MONGO_URI=your_mongodb_connection_string
PORT=5000

3️⃣ Run the Backend Server

npm run dev

✅ You should see:

MongoDB Connected
Server running on port 5000




💻 Frontend Setup

1️⃣ Navigate to the client folder

cd client

2️⃣ Install dependencies

npm install
npm install axios react

3️⃣ Create .env file

VITE_API_URL=http://localhost:5000

4️⃣ Run the Frontend

npm run dev

✅ You should see something like:

VITE v5.x.x  ready in 300ms
Local: http://localhost:5173




🔗 API Endpoints

Method	Endpoint	Description

GET	/api/posts	Fetch all blog posts
POST	/api/posts	Create a new blog post


Sample POST Body:

{
  "title": "My First Post",
  "content": "This is the content of my first post."
}




🧭 Features Implemented

✅ Add new blog posts
✅ View all blog posts
✅ Dynamic API connection between frontend & backend
✅ Data stored in MongoDB
✅ Clean UI and responsive layout




🧪 Testing the Application

1. Run both servers:

Backend → npm run dev

Frontend → npm run dev



2. Open browser → http://localhost:5173


3. Create a new post in the form.


4. Verify that:

The new post appears instantly on the frontend.

It is stored in MongoDB.







⚠️ Common Issues & Fixes

Issue	Possible Cause	Solution

Port already in use	Multiple instances running	Stop old process or change port
Posts not loading	Backend not running	Start backend server first
CORS error	Missing CORS setup	Add app.use(cors()) in server.js
Network errors	Proxy not configured	Check vite.config.js proxy settings