import {question} from 'readline-sync'

//Entrada
const celcius = Number(question('Temeratura em celcius: '))

//Processamento
const faren = (9 * celcius + 160) / 5

//Saída 

console.log('A temperatura em F° é de: ', faren)