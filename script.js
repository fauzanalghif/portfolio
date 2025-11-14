// Toggle Dark Mode ↔ Light Mode

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".toggle-btn");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });
});
