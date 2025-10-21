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

    while (contadora < 11){
        console.log (contadora)
        contadora++;
    }
}
btnEx01.addEventListener('click', ex01)
