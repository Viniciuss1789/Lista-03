const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")

function ex01() {
    let contadora = 1;

    while (contadora < 11) {
        console.log(contadora)
        contadora++;
    }
}
btnEx01.addEventListener('click', ex01)

function ex02() {
    let numero = 1;
    let soma = 0;

    while (numero <= 100) {
        soma += numero;
        numero++;
    }

    console.log("A soma dos números de 1 a 100 é:", soma);

}
btnEx02.addEventListener('click', ex02)

function ex03() {
    let numero = 1;

    while (numero <= 50) {
        if (numero % 2 === 0) {
            console.log(numero);
        }
        numero++;
    }

}
btnEx03.addEventListener('click', ex03)

function ex04() {
    let contador = 1;
    let soma = 0;

    while (contador <= 5) {
        let numero = parseInt(prompt(`Digite o ${contador}º número inteiro:`));
        soma += numero;
        contador++;
    }

    let media = soma / 5;

    console.log("A média dos números digitados é:", media);
    alert("A média dos números digitados é: " + media);

}
btnEx04.addEventListener('click', ex04)

function ex05() {
    let numero = parseInt(prompt("Digite um número inteiro para ver sua tabuada:"));
    let contador = 1;

    while (contador <= 10) {
        console.log(`${numero} x ${contador} = ${numero * contador}`);
        contador++;
    }

}
btnEx05.addEventListener('click', ex05)

function ex06() {
    let num = parseInt(prompt("Digite um número inteiro positivo:"));
    let divisor = 1;

    console.log(`Divisores de ${num}:`);
    while (divisor <= num) {
        if (num % divisor === 0) {
            console.log(divisor);
        }
        divisor++;
    }

}
btnEx06.addEventListener('click', ex06)

function ex07() {
    let n = parseInt(prompt("Digite um número inteiro:"));
    let i = 1;
    let divisores = 0;

    while (i <= n) {
        if (n % i === 0) {
            divisores++;
        }
        i++;
    }

    if (divisores === 2) {
        console.log(`${n} é um número primo.`);
    } else {
        console.log(`${n} não é um número primo.`);
    }

}
btnEx07.addEventListener('click', ex07)

function ex08() {
    let limite = parseInt(prompt("Digite um número inteiro para gerar a sequência de Fibonacci até ele:"));
    let a = 0, b = 1;

    console.log("Sequência de Fibonacci:");
    while (a <= limite) {
        console.log(a);
        let proximo = a + b;
        a = b;
        b = proximo;
    }

}
btnEx08.addEventListener('click', ex08)

function ex09() {
    let contador = 1;
    let somaIdades = 0;

    while (contador <= 5) {
        let nome = prompt(`Digite o nome da ${contador}ª pessoa:`);
        let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
        somaIdades += idade;
        contador++;
    }

    let media = somaIdades / 5;
    console.log(`A média das idades é: ${media}`);

}
btnEx09.addEventListener('click', ex09)

function ex10() {
    let cont = 1;
    let a = 0, b = 1;

    console.log("Primeiros 20 números da sequência de Fibonacci:");
    while (cont <= 20) {
        console.log(a);
        let proximo = a + b;
        a = b;
        b = proximo;
        cont++;
    }

}
btnEx10.addEventListener('click', ex10)

function ex11() {
    let numPar = parseInt(prompt("Digite um número inteiro:"));
    let somaPar = 0;
    let x = 1;

    while (x <= numPar) {
        if (x % 2 === 0) {
            somaPar += x;
        }
        x++;
    }

    console.log(`A soma dos números pares entre 1 e ${numPar} é: ${somaPar}`);

}
btnEx11.addEventListener('click', ex11)

function ex12() {
    let nImpar = 1;

    console.log("Números ímpares de 1 a 50:");
    while (nImpar <= 50) {
        if (nImpar % 2 !== 0) {
            console.log(nImpar);
        }
        nImpar++;
    }

}
btnEx12.addEventListener('click', ex12)

function ex13() {
    let numeroDigitado = parseInt(prompt("Digite um número inteiro:"));
    let texto = numeroDigitado.toString();
    let indice = 0;

    console.log("Dígitos separados:");
    while (indice < texto.length) {
        console.log(texto[indice]);
        indice++;
    }

}
btnEx13.addEventListener('click', ex13)

function ex14() {
    let nFat = parseInt(prompt("Digite um número inteiro para calcular o fatorial:"));
    let fat = 1;
    let contFat = 1;

    while (contFat <= nFat) {
        fat *= contFat;
        contFat++;
    }

    console.log(`O fatorial de ${nFat} é: ${fat}`);

}
btnEx14.addEventListener('click', ex14)

function ex15() {
    let soma = 0;
    let qtd = 0;
    let nome = prompt("Digite o nome da pessoa (ou 'fim' para encerrar):");

    while (nome.toLowerCase() !== "fim") {
        let idade = parseInt(prompt(`Digite a idade de ${nome}:`));
        soma += idade;
        qtd++;
        nome = prompt("Digite o nome da próxima pessoa (ou 'fim' para encerrar):");
    }

    if (qtd > 0) {
        let mediaIdade = soma / qtd;
        console.log(`A média das idades é: ${mediaIdade}`);
    } else {
        console.log("Nenhuma idade foi informada.");
    }

}
btnEx15.addEventListener('click', ex15)
