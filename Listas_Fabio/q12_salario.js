import { question } from "readline-sync"

//Entrada
console.log("12. Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.");

//Processamento
const salario = question('Salario atual: ')
const novo_salario = (salario * 1.25)


//Saída
console.log('O salario após o aumento de 25% será de: ', novo_salario)

