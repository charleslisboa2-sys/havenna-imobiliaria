import { criarElemento } from "./dom.js";

export function renderImoveis(lista) {
  const container = document.getElementById("imoveis-container");
  container.innerHTML = "";

  lista.forEach((imovel) => {
    const card = criarElemento("div", "imovel-card");

    const imagem = criarElemento("img");
    imagem.src = imovel.imagem;
    imagem.alt = imovel.titulo;

    const info = criarElemento("div", "imovel-info");
    const titulo = criarElemento("h3", null, imovel.titulo);
    const desc = criarElemento("p", null, imovel.descricao);
    const preco = criarElemento("p", null, imovel.preco);

    info.append(titulo, desc, preco);
    card.append(imagem, info);
    container.append(card);
  });
}
