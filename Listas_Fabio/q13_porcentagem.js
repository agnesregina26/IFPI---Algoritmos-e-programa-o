import {question} from "readline-sync";

//Entrada 
const valor = question('Valor em reais:')

//Processamento
const porcento = valor * 0.7

//Saída

console.log('70% do valor digitado é ', porcento)
