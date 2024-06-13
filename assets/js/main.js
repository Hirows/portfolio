import { menu } from "./menu.js";
import { skills } from "./skills.js";
import { modal } from "./modal.js";
import { scroll } from "./scrollMenu.js";

menu();
scroll();

skills(".html", "HTML", "HTML (HyperText Markup Language) é o código que você usa para estruturar uma página web e seu conteúdo.");
skills(".css", "CSS", "CSS (Cascading Style Sheets) é usado para estilizar elementos escritos em uma linguagem de marcação como HTML. ");
skills(".js", "JavaScript", "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web, amplamente utilizada para criar interatividade e dinamismo em páginas web.");
skills(".git", "Git", "O git é um sistema de controle de versão de códigos. Gerencia ramificações feitas por diferentes pessoas de um time de modo a manter a ordem e integração de todas as partes.");
skills(".github", "GitHub", "GitHub é um serviço em nuvem que hospeda um sistema de controle de versão chamado Git. Nele os desenvolvedores colaboram e fazem mudanças em projetos compartilhados enquanto mantêm um registro detalhado do seu progresso.");
skills(".figma", "Figma", "Figma é uma ferramenta de design que combina a acessibilidade da web com as funcionalidades de um aplicativo nativo com o objetivo de tornar a prática do design mais acessível.");

modal("modalS1", "buttonS1", "closeS1");
modal("modalS2", "buttonS2", "closeS2");
modal("modalS3", "buttonS3", "closeS3");
modal("modalS4", "buttonS4", "closeS4");
modal("modalS5", "buttonS5", "closeS5");
modal("modalS6", "buttonS6", "closeS6");
