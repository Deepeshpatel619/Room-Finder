import React, { useState, useEffect } from "react";
import axios from "axios";
import { getCurrentUser } from "../utils/auth";

function PostRoom() {
  const user = getCurrentUser();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [coordinates, setCoordinates] = useState({ lat: "", lng: "" });

  // ✅ Get browser location automatically
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoordinates({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => console.log("Location access denied")
      );
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5000/api/rooms",
        {
          title,
          price,
          location: {
            type: "Point",
            coordinates: [coordinates.lng, coordinates.lat], // GeoJSON format
          },
          userId: user.id, // link room to logged-in user
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Room posted successfully!");
    } catch (err) {
      console.error(err);
      alert("Error posting room");
    }
  };

  return (
    <div>
      <h2>🏠 Post a Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Room Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price per month"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Latitude"
          value={coordinates.lat}
          onChange={(e) =>
            setCoordinates({ ...coordinates, lat: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Longitude"
          value={coordinates.lng}
          onChange={(e) =>
            setCoordinates({ ...coordinates, lng: e.target.value })
          }
        />
        <button type="submit">Post Room</button>
      </form>
    </div>
  );
}

export default PostRoom;
