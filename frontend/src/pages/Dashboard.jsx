import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Dashboard() {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [preference, setPreference] = useState("");
  const [coords, setCoords] = useState({ lat: "", lng: "" });

  // Auto-fetch location on load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setCoords({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
        (err) => console.warn("Geolocation denied, enter manually:", err)
      );
    }
  }, []);

  const handlePostRoom = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/rooms",
        {
          title,
          price,
          preference,
          location: { type: "Point", coordinates: [coords.lng, coords.lat] }
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Room posted successfully!");
      setTitle(""); setPrice(""); setPreference("");
    } catch (err) {
      console.error("Failed to post room:", err.response?.data || err.message);
      alert("Failed to post room");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Welcome, {user ? user.name : "Guest"} 👋</h2>

      <div className="card shadow-sm p-4">
        <h3 className="mb-3">Post a Room</h3>
        <form onSubmit={handlePostRoom}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Room title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <select
              className="form-select"
              value={preference}
              onChange={(e) => setPreference(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Preference
              </option>
              <option value="Only Boys">Only Boys</option>
              <option value="Only Girls">Only Girls</option>
              <option value="Only Family">Only Family</option>
              <option value="Anyone">Anyone</option>
            </select>
          </div>

          <div className="row mb-3">
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Latitude"
                value={coords.lat}
                onChange={(e) => setCoords({ ...coords, lat: e.target.value })}
              />
            </div>
            <div className="col">
              <input
                type="number"
                className="form-control"
                placeholder="Longitude"
                value={coords.lng}
                onChange={(e) => setCoords({ ...coords, lng: e.target.value })}
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Post Room
          </button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;
