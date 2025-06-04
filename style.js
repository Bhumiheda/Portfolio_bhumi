// Scroll reveal animations (optional)
document.querySelectorAll("section").forEach((sec, index) => {
  sec.style.opacity = 0;
  sec.style.transition = "opacity 0.8s ease";
  setTimeout(() => (sec.style.opacity = 1), 500 + index * 300);
});
