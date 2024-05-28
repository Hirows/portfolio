export function skills(icon, title, description) {
  var descriptionSkills = document.querySelector(".descriptionSkills");
  var titleSkills = document.querySelector(".titleSkills");

  document.querySelector(icon).addEventListener("mouseover", () => {
    descriptionSkills.innerHTML = description;
    titleSkills.innerHTML = title;
  });
  document.querySelector(icon).addEventListener("mouseout", () => {
    descriptionSkills.innerHTML = "Passa o mouse para conhecer as tecnologias";
    titleSkills.innerHTML = "Skills";
  });
} 



