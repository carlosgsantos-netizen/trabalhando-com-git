const readline= require('readline-sync')
let limiteTotal= 100
let totalDisponivel= readline.questionFloat('qual o total de dados disponivel?')
let totalGasto= readline.questionFloat("qual o total gasto?")
let porcentagen= (totalDisponivel/totalGasto)*100

 
console.log ("=========== resultado ==========")


console.log(`O usuario gastou ${porcentagen}% dos dados disponiveis`)

if (porcentagen > limiteTotal){
    console.log(`O usuario ultrapassou o limite de dados disponiveis!`)
}else{
    console.log(`O usuario ainda tem dados disponiveis!`)
}if (porcentagen > 90){
    console.log(`O usuario esta perto de atingir o limite de dados disponiveis!`)

}else if (porcentagen < 90){
    console.log(`O usuario esta longe de atingir o limite de dados disponiveis!`)
}