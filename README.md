# Geo-Enabled Rental Room Finder

A **full-stack web application** developed using the **MERN (MongoDB, Express, React, Node.js)** stack.  
It allows users to **discover rental rooms near their location** through an interactive map interface.  
The system includes **secure authentication**, **room posting features**, and a **responsive user dashboard**.

---

## 1. Overview

The Geo-Enabled Rental Room Finder helps users locate nearby rooms within a customizable distance range.  
It integrates browser geolocation with Leaflet maps and provides an easy way for users to post or view available rooms.

---

## 2. Key Features

- **Secure JWT Authentication** – Login and registration with protected routes.  
- **Map-Based Room Search** – Interactive map view using Leaflet.js and Geolocation API.  
- **Room Posting Dashboard** – Add, manage, and delete room listings with details like title, price, and preferences.  
- **Responsive Design** – Built using Bootstrap for consistent performance across all devices.  
- **Context API State Management** – Handles global application state efficiently.

---

## 3. Technology Stack

| Component | Technology Used |
|------------|----------------|
| **Frontend** | React.js, Bootstrap, Leaflet.js, Context API |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Authentication** | JSON Web Tokens (JWT) |
| **API Type** | RESTful APIs |

---

## 4. Application Modules

| Module | Description |
|---------|-------------|
| **User Authentication** | Manages registration, login, and secure sessions using JWT. |
| **Room Search** | Displays nearby room listings on an interactive Leaflet map. |
| **Room Management** | Allows logged-in users to create and manage their own listings. |
| **Responsive UI** | Optimized for both desktop and mobile devices. |

---

## 5. Installation and Setup

### Step 1: Clone the Repository
```bash
git clone https://github.com/Deepeshpatel619/Room-Finder.git
cd Room-Finder
