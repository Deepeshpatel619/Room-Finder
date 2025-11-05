import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Circle,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";

// ✅ User location icon
const userIcon = new L.Icon({
  iconUrl: "/user-marker.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});

// ✅ Helper: Haversine distance (in meters)
function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371000; // Earth radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c; // distance in meters
}

function SetViewOnLocation({ coords }) {
  const map = useMap();
  useEffect(() => {
    if (coords.lat && coords.lng) {
      map.setView([coords.lat, coords.lng], 13);
    }
  }, [coords, map]);
  return null;
}

function NearbyRooms() {
  const [rooms, setRooms] = useState([]);
  const [coordinates, setCoordinates] = useState({
    lat: 28.6139,
    lng: 77.209,
  });
  const [range, setRange] = useState(2000); // default 2 km
  const [filteredRooms, setFilteredRooms] = useState([]);

  // ✅ Get user location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoordinates({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        () => {
          console.log("⚠️ Location denied, using Delhi");
        }
      );
    }
  }, []);

  // ✅ Fetch all rooms
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/rooms");
        setRooms(res.data);
      } catch (err) {
        console.error("Error fetching rooms:", err);
      }
    };
    fetchRooms();
  }, []);

  // ✅ Filter rooms whenever location or range changes
  useEffect(() => {
    if (rooms.length > 0) {
      const nearby = rooms.filter((room) => {
        const dist = getDistance(
          coordinates.lat,
          coordinates.lng,
          room.location.coordinates[1], // lat
          room.location.coordinates[0] // lng
        );
        return dist <= range;
      });
      setFilteredRooms(nearby);
    }
  }, [rooms, coordinates, range]);

  return (
    <div className="p-4">
      <h2 className="mb-3 text-xl font-bold">🏠 Available Rooms Nearby</h2>

      {/* ✅ Search bar for range */}
    <div className="mb-4">
  <label className="form-label fw-bold text-primary">
    🔍 Search Rooms by Range
  </label>
  <input
    type="range"
    className="form-range"
    min={1}
    max={10}
    step={1}
    value={range / 1000}  // convert meters → km
    onChange={(e) => setRange(Number(e.target.value) * 1000)} // store meters
  />
  <div className="d-flex justify-content-between">
    {[...Array(10)].map((_, i) => (
      <small key={i} className="text-muted">
        {i + 1} km
      </small>
    ))}
  </div>
  <p className="mt-2 fw-bold text-primary">
    Selected Range: {range >= 1000 ? range / 1000 + " km" : range + " m"}
  </p>
</div>


      <MapContainer
        center={[coordinates.lat, coordinates.lng]}
        zoom={13}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap contributors"
        />

        <SetViewOnLocation coords={coordinates} />

        {/* ✅ User marker */}
        <Marker position={[coordinates.lat, coordinates.lng]} icon={userIcon}>
          <Popup autoPan={true} autoClose={false} closeOnClick={true}>
            📍 You are here
          </Popup>
        </Marker>

        {/* ✅ Circle shows chosen search radius */}
        <Circle
          center={[coordinates.lat, coordinates.lng]}
          radius={range}
          pathOptions={{ color: "red", fillColor: "pink", fillOpacity: 0.2 }}
        />

        {/* ✅ Filtered rooms within range */}
        {filteredRooms.map((room) => (
          <Marker
            key={room._id}
            position={[
              room.location.coordinates[1],
              room.location.coordinates[0],
            ]}
          >
            <Popup>
              <b>{room.title}</b> <br />
              💰 Price: ₹{room.price} <br />
              👥 Preference: {room.preference}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default NearbyRooms;
