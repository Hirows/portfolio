export function menu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list li a");

  function handleClick() {
    navList.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  }

  if (mobileMenu) {
    mobileMenu.addEventListener("click", handleClick);
    
    navLinks.forEach((item) => {
      item.addEventListener("click", handleClick);
    });
  }
}
