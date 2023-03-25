import { question } from "readline-sync"

console.log("11. Leia um número inteiro (3 dígitos) e escreva o inverso do número. (Ex.: número = 532 ; inverso = 235)");

//Entrada
const numero = Number(question("Número: "));

//Processamento

const unidades = Math.floor(numero * 1) % 10;
const dezenas =  Math.floor(numero * 0.1) % 10;
const centenas = Math.floor(numero * 0.01) % 10;


//Saída
console.log(`Para CDU ${numero}, UDC = ${unidades * 100 + dezenas * 10 + centenas * 1}`);