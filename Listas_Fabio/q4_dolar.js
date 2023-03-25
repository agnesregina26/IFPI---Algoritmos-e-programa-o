//

import * as readsync from 'readline-sync'

//Entrada
const dolar = Number(readsync.question('Valor em dolar: '))

//Processamento
const real = dolar*5.24

//Saída
console.log(dolar, 'dolares equivale a', real, ' reais')

