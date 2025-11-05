# 🏠 Geo-Enabled Rental Room Finder (MERN Stack)

A **full-stack web application** built with the **MERN (MongoDB, Express, React, Node.js)** stack that helps users **find nearby rental rooms** on an **interactive map**. The system provides **secure authentication**, **real-time location-based search**, and a **user-friendly dashboard** for room postings.

---

## 🚀 Features

✅ **JWT Authentication & Protected Routes**  
- Secure login and registration using **JSON Web Tokens (JWT)**  
- Protected routes for user-specific actions like posting or editing rooms  

✅ **Interactive Map-based Search**  
- Integrated **Leaflet.js** and **Geolocation API** to locate nearby rooms  
- Adjustable search radius (1–10 km) for customized discovery  

✅ **Room Posting Dashboard**  
- Logged-in users can **post new rooms** with details like title, price, and preferences  
- Manage or delete existing posts from the dashboard  

✅ **Modern Responsive UI**  
- Built with **Bootstrap** for clean, responsive design  
- Smooth **state management** using **React Context API**  

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React.js, Bootstrap, Leaflet.js, Context API |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JWT (JSON Web Token) |
| APIs | RESTful APIs |

---

## 🗺️ Core Functionality

| Module | Description |
|---------|-------------|
| **User Authentication** | Register, Login, Logout with JWT and protected routes |
| **Room Search** | Find rooms based on user’s current location |
| **Map Integration** | Interactive Leaflet map with distance radius selector |
| **Room Posting** | Add room listings with details (title, price, preferences) |
| **Responsive UI** | Works across all devices with modern UI design |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Deepeshpatel619/Room-Finder.git
cd Room-Finder
