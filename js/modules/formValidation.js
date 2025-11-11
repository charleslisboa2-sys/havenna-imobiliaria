export function validarFormulario(form) {
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return false;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Por favor, insira um e-mail válido.");
    return false;
  }

  // Armazena localmente as mensagens (requisito de armazenamento local)
  const mensagensSalvas = JSON.parse(localStorage.getItem("mensagens")) || [];
  mensagensSalvas.push({ nome, email, mensagem, data: new Date().toLocaleString() });
  localStorage.setItem("mensagens", JSON.stringify(mensagensSalvas));

  alert(`Obrigado, ${nome}! Sua mensagem foi enviada e salva localmente.`);
  form.reset();
  return true;
}
