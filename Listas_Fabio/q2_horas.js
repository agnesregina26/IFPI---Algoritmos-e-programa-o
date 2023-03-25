//Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos.

import * as readsync from "readline-sync"

//Entrada
const horas = Number(readsync.question('Valor em horas: '))

//Processamento
const minutos = horas * 60

//Saída
console.log(horas, 'horas equivale a ', minutos, 'minutos')






