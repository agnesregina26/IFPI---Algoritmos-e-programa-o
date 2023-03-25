//Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.

import * as readsync from 'readline-sync'

//Entrada
const Nota1 = Number(readsync.question('Nota 1: '))
const Peso1 = Number(readsync.question('Peso 1: '))
const Nota2 = Number(readsync.question('Nota 2: '))
const Peso2 = Number(readsync.question('Peso 2: '))
const Nota3 = Number(readsync.question('Nota 3: '))
const Peso3 = Number(readsync.question('Peso 3: '))

//Processamento
const media_ponderada = (Nota1*Peso1 + Nota2*Peso2 + Nota3*Peso3) / (Peso1+Peso2+Peso3)

//Saída
console.log('Média Ponderada: ', media_ponderada)

