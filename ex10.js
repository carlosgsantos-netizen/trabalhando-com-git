const readline= require('readline-sync')

let paginas= 300

let lidas= readline.questionInt('quantas paginas foram lidas?')

let difereca = (paginas / lidas) * 100

console.log ( '=========== resultado ==========')

    console.log(`O usuario leu ${difereca}% do livro`)
    