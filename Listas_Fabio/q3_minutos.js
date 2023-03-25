
import * as readsync from "readline-sync"

//Entrada
const minutos_total = Number(readsync.question(' Valor em minutos: '))

//Processamento
const horas = minutos_total / 60
const minutos = minutos_total % 60

//Saída
console.log(minutos_total, 'minutos equivale a', horas, 'horas e ', minutos, 'minutos')