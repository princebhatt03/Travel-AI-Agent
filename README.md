# 🌍 AI Travel Agent – MERN + OpenAI Project

A **full-stack AI-powered travel planning web application** built using the **MERN stack (MongoDB, Express.js, React, Node.js)** and **OpenAI API**.  
This project allows users to **register, log in**, and generate **personalized travel plans** based on their preferences such as destination, duration, budget, and interests.  

Developed as part of the **MGNA Labs Agent Builder Challenge** to demonstrate efficient integration of OpenAI with a MERN-based agent system.

---

## 🚀 Features

### 👤 User Management
- User **Registration** and **Login** with secure authentication  
- Passwords stored securely using **bcrypt**  
- **Email-based unique login system**

### 🧠 AI Travel Planner
- Generates **custom travel itineraries** using **OpenAI GPT models**  
- Inputs: Destination, Days, Budget, Interests  
- Returns a complete **day-by-day travel plan**

### 💾 Data & API
- **MongoDB Atlas** used for storing user data  
- **Express.js** backend with REST API routes  
- **Axios** for frontend API calls  
- Proper **error handling** and **toast notifications**

### 🧭 Frontend Experience
- Built with **React + Vite** for speed  
- Clean, responsive **Tailwind CSS UI**  
- **React Router** for navigation  
- **React Toastify** for alerts and messages  

### 🧩 Integration
- Integrated with **OpenAI’s Chat Completions API**
- Uses `.env` for environment variables (client + server)
- Supports deployment on **Render**, **Vercel**, or **Netlify**

---

## 🏗️ Tech Stack

| Layer | Technology |
|--------|-------------|
| **Frontend** | React (Vite), Tailwind CSS, Axios, React Router, React Toastify |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB (via Mongoose) |
| **AI Integration** | OpenAI API (`gpt-4o-mini` model) |
| **Deployment** | Render / Netlify / Vercel |
| **Language** | JavaScript (ES6) |

---

## 📁 Folder Structure

/client → React Frontend (Vite)
```
├── src/
│ ├── pages/
│ │ ├── Register.jsx
│ │ ├── Login.jsx
│ │ └── Dashboard.jsx
│ ├── App.jsx
│ └── main.jsx
├── .env.example
└── package.json
```
/server → Node.js Backend (Express + MongoDB)
```
├── controllers/
│ ├── user.controller.js
│ └── travel.controller.js
├── models/
│ └── user.model.js
├── routes/
│ ├── user.routes.js
│ └── travel.routes.js
├── server.js
├── .env.example
└── package.json
```
---

## ⚙️ Environment Setup

Both **Client** and **Server** have their own `.env.example` files.  
You need to rename them to `.env` and fill in your details.

### 🧠 Server (`/server/.env.example`)
```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
```

💻 Client (/client/.env.example)
```bash
VITE_API_URL=http://localhost:5000
```

### 🧩 Installation & Usage Guide

1️⃣ Clone the Repository
```
git clone [https://github.com/your-username/ai-travel-agent.git](https://github.com/princebhatt03/Travel-AI-Agent/)
cd folder_name
```
2️⃣ Setup the Backend
```
cd server
npm install
```
Create .env file using .env.example and add your credentials:

cp .env.example .env

Then start the server:
```
node server.js
or
nodemon
```
Backend runs on http://localhost:3000

3️⃣ Setup the Frontend
```
cd ../client
npm install
```

Create .env file using .env.example:

cp .env.example .env

Then run the app:
```
npm run dev
```

Frontend runs on http://localhost:5173

4️⃣ Generate Your OpenAI API Key

Go to https://platform.openai.com/api-keys

Click Create new secret key

Copy the key and paste it into your /server/.env

If you face quota issues, check Usage
 or add a small billing credit ($5)

💬 How It Works

User registers → data stored securely in MongoDB.

User logs in → redirected to dashboard.

User enters travel details → backend sends data to OpenAI API.

OpenAI generates itinerary → shown in frontend and downloadable as a text file.

⚠️ Common Issues
Error	Reason	Fix
500 Internal Server Error	Missing or invalid OPENAI_API_KEY	Add valid key in .env
429 Quota Exceeded	Free trial expired	Add billing or new account
CORS Error	Client can’t reach server	Enable CORS in backend
MongoDB connection failed	Invalid URI	Check .env and connection string
Add VITE_API_URL as environment variable (pointing to deployed backend)

🧠 Future Enhancements

JWT Authentication and protected routes

Save and view previous travel plans

Add AI-generated images or maps

Integration with live hotel and flight APIs

Dark mode UI and profile management

### 👨‍💻 Developer
Prince Bhatt

📧 Email: princebhatt316@gmail.com

🌐 Portfolio: [Prince Bhatt](https://princebhatt03.github.io/Portfolio)

💼 GitHub: [princebhatt03](https://github.com/princebhatt03)

💬 LinkedIn: [Prince Bhatt](https://www.linkedin.com/in/prince-bhatt-0958a725a/)

📝 License

This project is licensed under the MIT License and owned by Prince Bhatt — free to use and modify for educational or personal purposes.

✨Thank you for connecting...
