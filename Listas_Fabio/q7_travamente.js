import * as readsync from "readline-sync";

//Entrada
const num1 = Number(readsync.question ('Valor numero 1: '))
const num2 = Number(readsync.question ('Valor numero 2: '))
const num3 = Number(readsync.question ('Valor numero 3: '))

//Processamento
const soma_pri = num1 + num2
const dif_ult = num2 - num3 

//Saída
console.log ('A soma dos dois primeiros números é ', soma_pri, 'A diferença dos dois últimos números é ', dif_ult)