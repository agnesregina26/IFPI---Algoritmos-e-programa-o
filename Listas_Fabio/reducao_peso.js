import * as readsync from "readline-sync"

function main(){
    const peso_atual = Number(question('Peso atual (kg)'))
    const perc_gordura = Number(question('Quanto a perder (%): '))
    const qtd_semanas = Number (question(' Quantas semanas: '))

    const peso_a_reduzir = calcular_peso_a_reduzir(peso_atual, percentual)
    const calorias_a_reduzir = converter_peso_em_calorias (peso)


}

main() 