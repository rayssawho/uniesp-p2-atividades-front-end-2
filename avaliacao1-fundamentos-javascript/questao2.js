function multiplicaArray(arrayNumeros) {
    
    let quantNumeros = parseFloat(prompt("Quantos números você deseja digitar?"));
    for (i = 1; i <= quantNumeros; i++) {
        let numUsuario = parseFloat(prompt("Digite um número: "));
        arrayNumeros.push(numUsuario);
        arrayMultiplicados.push(numUsuario * 2);
    }

    alert("Os números digitados foram " + arrayNumeros + " e estes multiplicados por 2 são: " + arrayMultiplicados);
}

let arrayNumeros = [];
let arrayMultiplicados = [];
multiplicaArray(arrayNumeros)
