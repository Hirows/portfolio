import { skills } from "./skills.js";
import { modal } from "./modal.js";
import { scroll } from "./scrollMenu.js";

scroll();

skills(".html", "HTML", "desc");
skills(".css", "CSS", "desc");
skills(".js", "JavaScript", "desc");
skills(".git", "Git", "desc");
skills(".github", "GitHub", "desc");
skills(".figma", "Figma", "desc");

modal("modalS1", "buttonS1", "closeS1");
