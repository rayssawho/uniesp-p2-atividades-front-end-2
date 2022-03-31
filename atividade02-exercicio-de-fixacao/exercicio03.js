/* 3) Crie uma função que solicite 5 números 
ao usuário, coloque em um array, depois exiba tal array.
*/

function arrayUsuario() {
    var recebeNumeros = 5, arrayNumeros = []; 
    alert("Digite 5 números")
    for (i = 1; i <= recebeNumeros; i++) {
        var numUsuario = parseFloat(prompt("Digite o número " + i));
        arrayNumeros.push(numUsuario);
    }
    alert("Os números digitados foram: " + arrayNumeros)
}

arrayUsuario()