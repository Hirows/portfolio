export function scroll() {
  document.addEventListener("DOMContentLoaded", () => {
    const menuItems = document.querySelectorAll("#menu a");
    const sections = document.querySelectorAll("section");

    function onScroll() {
      let scrollPos = window.scrollY || document.documentElement.scrollTop;

      sections.forEach((section, index) => {
        if (
          scrollPos >= section.offsetTop - section.offsetHeight / 3 &&
          scrollPos <
            section.offsetTop + section.offsetHeight - section.offsetHeight / 3
        ) {
          menuItems.forEach((item) => item.classList.remove("active"));
          menuItems[index].classList.add("active");
        }
      });
    }
    window.addEventListener("scroll", onScroll);
  });
}
