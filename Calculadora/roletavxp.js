// 1️⃣ Lista de 7 nomes
const nomes = ["Médio", "Extremamente Rápido", "Rápido", "Médio Rápido", "Médio Lento", "Lento", "Extremamente Lento"];

// 2️⃣ Pegar botão
const botao = document.getElementById("rolarvxp");
const resultadoP = document.getElementById("escolhido");

botao.addEventListener("click", () => {

  // 3️⃣ Rolar roleta de 1 a 100
  const roleta = Math.floor(Math.random() * 100) + 1;

  let escolhido;

  // 4️⃣ Se estiver entre 1 e 50, escolhe o primeiro nome
  if (roleta <= 50) {
    escolhido = nomes[0];
  } else {
    // 5️⃣ Senão, escolhe entre os outros 6
    const resto = nomes.slice(1); // remove o primeiro
    const index = Math.floor(Math.random() * resto.length);
    escolhido = resto[index];
  }

  // 6️⃣ Substituir o parágrafo pelo escolhido
  resultadoP.textContent = "Resultado: " + escolhido;

});
