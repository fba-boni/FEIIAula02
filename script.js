/**
 * Declaração de variáveis
 */
let total = 0;
let array1 = [5.5, 7.0, 9.0, 10.0];

/**
 * 
 * Função Soma: soma cada valor/nota inserida
 */
function Soma(valor) {
    console.log("Valor/Nota: " + valor)
    total += valor;
}

/**
 * 
 * Função Média: calcula a média, exibe na tela, exibe se o aluno está aprovado/reprovado!
 */
function Media(valor) {
    let resultado = valor / array1.length;
    console.log("Parabéns pela conclusão do 1o Bimestre. Seu resultado final foi: " + resultado);
    if (resultado >= 7) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado!");
    }
}

/**
 * Estrutura de repetição que lê o vetor de notas, exibe cada nota na tela e soma cada valor armazenando na variável total
 */
for (let i = 0; i < array1.length; i++) {
    Soma(array1[i]);
}

Media(total);
