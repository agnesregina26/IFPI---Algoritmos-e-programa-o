import {question} from 'readline-sync'

//Entrada

const lado = Number(question('Lado: '))


//Processamento
const area = lado * lado

//Saída
 console.log("A area do quadrado é: " , area)