const API_URL = "http://localhost:5000/api";

export const fetchRooms = async (lat, lng, range, price) => {
  let url = `${API_URL}/rooms`;
  if (lat && lng && range) {
    url += `?lat=${lat}&lng=${lng}&range=${range}`;
  }
  const res = await fetch(url);
  let data = await res.json();
  if (price) {
    data = data.filter(r => r.price <= price);
  }
  return data;
};

export const postRoom = async (room) => {
  const res = await fetch(`${API_URL}/rooms`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(room)
  });
  return res.json();
};
