import {question} from 'readline-sync'

//Entrada
const kg = Number(question('Valor em quilos: '))

//Processamento
const gramas = kg * 1000

//Saída 
console.log('O valor em gramas é: ', gramas)