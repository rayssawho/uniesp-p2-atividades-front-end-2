//Desenvolva uma função que receba um número e imprima se ele é par ou impar.

function parOuImpar(numero){
    
    if(numero % 2 == 0){
        alert(numero + " é um número par")
    }else{
        alert(numero + " é um número ímpar")
    }
}

let numero = parseFloat(prompt("Digite um número: "));
parOuImpar(numero)