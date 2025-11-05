
// Save user to localStorage after login
export function saveUser(user) {
  localStorage.setItem("user", JSON.stringify(user));
}

// Get current user from localStorage
export function getCurrentUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Remove user (for logout)
export function logoutUser() {
  localStorage.removeItem("user");
}
