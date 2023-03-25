import {question} from'readline-sync'

//Entrada
const raio = Number(question('Raio da circunferência:'))

//Processamento

const comprimento = 2 * 3.14 * raio

//Saída 
console.log('O comprimento da circunferencia é: ', comprimento )