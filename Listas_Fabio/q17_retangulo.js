import {question} from 'readline-sync'

const base = Number(question('Base:'))
const altura = Number(question('Altura:'))

const area = base * altura

console.log('A area do retangulo é: ', area )