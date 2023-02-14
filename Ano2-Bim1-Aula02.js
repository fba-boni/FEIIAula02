/**
 * Pedra ganha da tesoura e perde do papel
 * Papel ganha da pedra e perde pra tesoura
 * Tesoura ganha do papel e perde para pedra
 */

function Escolher() {
    return Math.ceil(Math.random() * 3);
}

function Conversao(valor) {
    if (valor == 1) {
        return "pedra";
    }
    if (valor == 2) {
        return "papel";
    }
    if (valor == 3) {
        return "tesoura";
    }
}

let escolhaJogador = Conversao(prompt("Escolha entre 1) Pedra, 2) Papel ou 3) Tesoura: "));
let escolhaComputador = Conversao(Escolher());

console.log(`Sua escolha foi ${escolhaJogador} e a escolha do computador foi ${escolhaComputador}`);

if (escolhaJogador == "pedra") {
    if (escolhaComputador == "pedra") {
        console.log("Empate!");
    }
    if (escolhaComputador == "papel") {
        console.log("Papel ganha da pedra. Computador Ganhou!")
    }
    if (escolhaComputador == "tesoura") {
        console.log("Tesoura ganha do papel. Você Ganhou!")
    }
} else {
    if (escolhaJogador == "papel") {
        if (escolhaComputador == "pedra") {
            console.log("Papel ganha da pedra. Você Ganhou!")
        }
        if (escolhaComputador == "papel") {
            console.log("Empate!")
        }
        if (escolhaComputador == "tesoura") {
            console.log("Tesoura ganha do papel. Computador Ganhou!")
        }
    } else {
        if (escolhaComputador == "pedra") {
            console.log("Pedra ganha da tesoura. Computador Ganhou!")
        }
        if (escolhaComputador == "papel") {
            console.log("Tesoura ganha do papel. Você ganhou!")
        }
        if (escolhaComputador == "tesoura") {
            console.log("Empate!")
        }
    }
}
