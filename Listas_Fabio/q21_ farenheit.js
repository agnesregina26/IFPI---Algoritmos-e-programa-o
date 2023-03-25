import {question} from 'readline-sync'

//Entrada
const faren = Number(question('Temperatura em °F: '))

//Processamento
const celcius = (5 * faren - 160) / 9

//Saída
console.log('A temperatura em celsius é de: ', celcius)
