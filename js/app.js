import { renderImoveis } from "./modules/templates.js";
import { validarFormulario } from "./modules/formValidation.js";
import { router } from "./modules/router.js";

const imoveis = [
  {
    id: 1,
    titulo: "Casa Moderna com Piscina",
    descricao: "3 quartos, 2 banheiros e área gourmet.",
    preco: "R$ 850.000",
    imagem: "images/casa-piscina-havenna.jpg"
  },
  {
    id: 2,
    titulo: "Apartamento no Centro",
    descricao: "Próximo a tudo, com 2 dormitórios e sacada.",
    preco: "R$ 550.000",
    imagem: "images/apartamento-havenna.jpg"
  },
  {
    id: 3,
    titulo: "Chácara em Condomínio Fechado",
    descricao: "Amplo terreno com área verde e churrasqueira.",
    preco: "R$ 1.200.000",
    imagem: "images/chacara-havenna.jpg"
  }
];

// Inicializa o roteador SPA
router(imoveis);

// Validação do formulário (delegação)
document.addEventListener("submit", (e) => {
  if (e.target.matches("#contato-form")) {
    e.preventDefault();
    validarFormulario(e.target);
  }
});
