export function criarElemento(tag, classe = null, texto = null) {
  const el = document.createElement(tag);
  if (classe) el.classList.add(classe);
  if (texto) el.textContent = texto;
  return el;
}
