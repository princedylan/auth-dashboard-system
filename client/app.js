const API = "http://localhost:5000";

// REGISTER
async function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(API + "/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  alert(data.msg);
  window.location.href = "login.html";
}

// LOGIN
async function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(API + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.token) {
    localStorage.setItem("token", data.token);
    window.location.href = "dashboard.html";
  } else {
    alert(data.msg);
  }
}

// LOAD DASHBOARD
async function loadDashboard() {
  const token = localStorage.getItem("token");

  if (!token) return window.location.href = "login.html";

  const res = await fetch(API + "/dashboard", {
    headers: { Authorization: token }
  });

  const data = await res.json();
  document.getElementById("user").innerText = "Email: " + data.email;
}

// LOGOUT
function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}

// AUTO LOAD
if (window.location.pathname.includes("dashboard.html")) {
  loadDashboard();
}