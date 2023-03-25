/** Leia um valor em horas e um valor em minutos, calcule e escreva o equivalente em minutos. */

import* as readsync from 'readline-sync'

//Entrada
const Horas = Number(readsync.question('Horas: '))

//Processamento
const Minutos = Horas * 60

//Saída
console.log(Horas, 'horas equivale a ', Minutos, 'minutos')
