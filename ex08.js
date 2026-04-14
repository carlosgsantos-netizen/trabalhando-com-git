const readline = require("readline-sync")

let idadepermitida = 18
let idade = readline.questionInt("Quantos anos voce tem? ")
console.log("------ Resultado ------")
if(idadepermitida <= idade){
console.log("Você poderá entrar no evento")
}
else{
    console.log("Você não poderá entrar no evento.")
}