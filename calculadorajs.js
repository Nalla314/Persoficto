// Pegar os elementos do HTML
const velocidade = document.getElementById("velocidade");
const nivel = document.getElementById("nivel");
const calcularxp = document.getElementById("calcularxp");
const resultadoxp = document.getElementById("resultadoxp");

// Adicionar evento ao botão
calcularxp.addEventListener("click", () => {
    const n = Number(nivel.value); // pega o número digitado
    let xp;

    // Verifica se o nível é válido
    if (n < 1 || n > 100 || isNaN(n)) {
        xp = "Digite um nível válido entre 1 e 100!";
    } else if (n === 100) {
        xp = "MÁXIMO!"
    } else {
        // Calcula XP baseado na velocidade
        switch (velocidade.value) {
            case "ER":  // Extremamente Rápido
                xp = n * 25;
                break;
            case "R":   // Rápido
                xp = n * 50;
                break;
            case "MR":  // Médio Rápido
                xp = n * 75;
                break;
            case "M":   // Médio
                xp = n * 100;
                break;
            case "ML":  // Médio Lento
                xp = n * 125;
                break;
            case "L":   // Lento
                xp = n * 150;
                break;
            case "EL":  // Extremamente Lento
                xp = n * 175;
                break;
            default:
                xp = "Escolha uma velocidade válida!";
        }
    }

    resultadoxp.textContent = `XP necessário: ${xp}`;
});
