//IMC = peso(kg)

import { question } from 'readline-sync'

//Entrada
const nome = question('Nome:')
const peso = Number (question('Peso(quilos): '))
const altura = Number (question('Altura(metros): '))

//Processamento
const imc = peso / (altura*altura)

//Saída
console.log('Olá seja bem vindo!', nome)
console.log('Seu imc é de ', imc.toFixed(1))


