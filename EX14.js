const readline = require('readline-sync')

const META = 5000.00
let faturado = readline.questionFloat('Informe o valor total faturado hoje: R$ ')

let percentual = (faturado / META) * 100

console.log("=========== RELATÓRIO DE VENDAS ===========")
console.log(`Percentual da meta atingido: ${percentual.toFixed(2)}%`)

if (faturado < META) {
    let faltou = META - faturado
    console.log(`Status: Meta NÃO atingida.`)
    console.log(`Ainda faltaram: R$ ${faltou.toFixed(2)}`)
} else {
    let excedeu = faturado - META
    console.log(`Status: Meta ATINGIDA!`)
    if (excedeu > 0) {
        console.log(`Você superou a meta em: R$ ${excedeu.toFixed(2)}`)
    } else {
        console.log(`Você atingiu a meta exatamente!`)
    }
}
