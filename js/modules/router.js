import { renderImoveis } from "./templates.js";

export function router(imoveis) {
  window.addEventListener("hashchange", navegar);
  navegar(); // inicializa na rota padrão

  function navegar() {
    const rota = window.location.hash.replace("#", "") || "home";
    const main = document.getElementById("conteudo-principal");

    if (rota === "home") {
      main.innerHTML = "<h2>Imóveis Disponíveis</h2><section id='imoveis-container'></section>";
      renderImoveis(imoveis);
    }

    if (rota === "contato") {
      main.innerHTML = `
        <section class="form-section">
          <h2>Entre em Contato</h2>
          <form id="contato-form">
            <input type="text" name="nome" placeholder="Seu nome" required>
            <input type="email" name="email" placeholder="Seu e-mail" required>
            <textarea name="mensagem" placeholder="Sua mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>
      `;
    }

    if (rota === "sobre") {
      main.innerHTML = `
        <section>
          <h2>Sobre a Havenna Imobiliária</h2>
          <p>Há mais de 10 anos no mercado, a Havenna Imobiliária oferece soluções completas na compra e venda de imóveis, prezando pela transparência e confiança.</p>
        </section>
      `;
    }
  }
}
