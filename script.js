//your JS code here. If required.
// DOM elements
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Check if credentials exist in localStorage
function checkExistingCredentials() {
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (storedUsername && storedPassword) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
}

// On page load, check for saved credentials
window.addEventListener("DOMContentLoaded", () => {
  checkExistingCredentials();
});

// Form submit handler
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials in localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove credentials if previously saved
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  checkExistingCredentials();
});

// Existing user button handler
existingBtn.addEventListener("click", () => {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    alert(`Logged in as ${storedUsername}`);
  }
});