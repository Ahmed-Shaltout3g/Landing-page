const toggleBtn = document.querySelector(".toggle-btn");
const navLinks = document.querySelector(".nav-links");
const icon = toggleBtn.querySelector("i");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  toggleBtn.classList.toggle("rotate");

  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
  } else {
    icon.classList.replace("fa-times", "fa-bars");
  }
});
