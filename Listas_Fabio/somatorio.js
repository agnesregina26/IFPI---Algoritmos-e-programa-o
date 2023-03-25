const prompt = require ('prompt-sync') ();
const inicio = 1
const final = Number(prompt(' Deseja somar até quanto?'))

const resultado = (inicio  +final) * (final / 2)

console.log('Resultado: ', resultado)

