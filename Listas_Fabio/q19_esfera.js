import {question} from 'readline-sync'

//Entrada
const raio = Number(question('Raio da esfera: '))

//Processamento
const volume = (4 * 3,14 * raio* raio * raio) / 3

//Saída 
console.log('O volume da esfera á: ', volume)