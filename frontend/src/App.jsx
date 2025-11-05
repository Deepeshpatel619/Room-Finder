import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import NearbyRooms from "./pages/NearbyRooms";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostRoom from "./pages/PostRoom";

import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
     <AuthProvider>
      <Router>
        <Navbar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nearbyrooms" element={<NearbyRooms />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
     
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
          path="/post-room"
          element={
            <ProtectedRoute>
              <PostRoom /> 
            </ProtectedRoute>
          }
        />
        </Routes>
      </div>
    </Router>
     </AuthProvider>
  );
}

export default App;
