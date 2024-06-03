export function modal(name, button, close) {
  var modal = document.getElementById(name);

  document.getElementById(button).addEventListener("click", () => {
    modal.classList.add("modalOpen");
    document.body.style.overflow = "hidden";
  });
  document.getElementById(close).addEventListener("click", () => {
    modal.classList.remove("modalOpen");
    document.body.style.overflow = "visible";
    document.body.style.overflowX = "hidden";
  });
}
