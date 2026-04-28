const readline= require('readline-sync')

let TamanhoTotal = 20

let qtdBaixado = readline.questionInt("Quantos GB foram baixados?: ")

let percentual = (qtdBaixado / TamanhoTotal) * 100

console.log(percentual)

