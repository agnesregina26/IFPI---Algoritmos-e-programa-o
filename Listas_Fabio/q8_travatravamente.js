import {question} from 'readline-sync'

console.log("8. Leia 2 números, calcule e escreva a divisão da soma pela subtração dos números lidos.");

const a = Number(question('Numero A: '))
const b = Number(question('Numero B:'))

console.log('A+B / A-B é igual a: ', (a+b)/ (a-b))