/* 2) Crie uma função que receba uma quantidade indeterminada 
de números e informe o maior e menor número recebido.
*/

function quantidadeNumeros() {
    var numeros = 0, listaNumeros = []; 
    numeros = parseFloat(prompt("Quantos números você deseja digitar?"));
    for (i = 0; i <= numeros -1; i++) {
        var numUsuario = parseFloat(prompt("Digite um número: "));
        listaNumeros.push(numUsuario);
    }
    alert("Os números digitados foram: " + listaNumeros);
    var maiorNumero = Math.max.apply(null, listaNumeros);
    var menorNumero = Math.min.apply(null, listaNumeros);

    alert("O maior número digitado foi: " + maiorNumero);
    alert("O menor número digitado foi: " + menorNumero);   
}

quantidadeNumeros()
