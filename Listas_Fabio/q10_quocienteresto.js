
import * as readsync from 'readline-sync';

//Entrada 
console.log('Leia 2 números inteiros, calcule e escreva o quociente e o resto da divisão do 1º pelo 2º.')

const A = Number(readsync.question('Numero A= '))
const B= Number (readsync.question('Numero B = '))

//Processamento

const quociente = (Math.floor(A / B))
const resto = A % B

//Saída
console.log('O quociente da divisão é: ', quociente, 'O resto da divisao é: ', resto)