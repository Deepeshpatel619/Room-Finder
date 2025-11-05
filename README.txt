# 🏠 Geo-Enabled Rental Room Finder

A **MERN stack** web application that helps users discover rental rooms near their current location using an interactive map.  
It includes secure authentication, map-based search within a user-defined range, and a dashboard for posting or managing rooms.

---

## 🚀 Main Features

- 🔐 **Secure Authentication** — User login and registration are handled with **JWT tokens** and protected routes.
- 🗺️ **Map-Based Room Search** — Uses **Leaflet.js** and the **Geolocation API** to locate rooms within a 1–10 km radius.
- 🏡 **Room Posting Dashboard** — Authenticated users can add rooms with details such as title, price, and preferences.
- 📱 **Responsive Interface** — Built with **Bootstrap** for a smooth experience across devices.
- ⚡ **Context API State Management** — Manages global state efficiently without external libraries.

---

## 🧩 Technologies Used

| Area | Technologies |
|------|---------------|
| Frontend | React.js, Bootstrap, Leaflet.js, Context API |
| Backend | Node.js, Express.js |
| Database | MongoDB, Mongoose |
| Authentication | JSON Web Tokens (JWT) |
| API Design | RESTful APIs |

---

## 🗺️ Application Modules

| Module | Description |
|---------|-------------|
| **Authentication** | Handles user login, registration, and access control with JWT. |
| **Map Search** | Displays nearby room listings on an interactive map. |
| **Room Management** | Allows users to create, edit, or delete their own listings. |
| **Responsive UI** | Provides a consistent layout for mobile and desktop. |

---

## ⚙️ How to Run Locally

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/Deepeshpatel619/Room-Finder.git
cd Room-Finder
