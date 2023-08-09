document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menu-icon");

  menuIcon.addEventListener("click", () => {
    menuIcon.style.display = "block";

    let nav = document.getElementById("nav");
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
    }
  })
});