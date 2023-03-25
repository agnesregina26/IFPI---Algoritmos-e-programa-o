//Leia uma velocidade em km/h, calcule e escreva esta velocidade em m/s. (Vm/s = Vkm/h / 3.6)
 import * as readsync from 'readline-sync'
 
//Entrada
const velocidade_km = Number(question.readsync('Velocidade em km/h: '))

//Processamento
const velocidade_ms = velocidade_km / 3.6

//Saída
console.log( 'A velocidade em m/s é', velocidade_ms)