var genero, altura = 0, alturaFeminino = [], alturaMasculino = [], alturaOutro = [], alturaTotal = [];
    alert("Bem vindo!")
    for (i = 0; i <= 14; i++) {
        genero = prompt("Qual o gênero dessa pessoa? - (Digite a primeira letra): F - Feminino, M - Masculino, O - Outro").toUpperCase();
        altura = parseFloat(prompt("Qual a altura dessa pessoa? (Digite apenas números, separando metros de centímetros por . EX: 1.70)"));

        if(genero === "F") {
            alturaFeminino.push(altura);
            alturaTotal.push(altura);
        }

        if(genero === "M") {
            alturaMasculino.push(altura);
            alturaTotal.push(altura);
        }

        if(genero === "O") {
            alturaOutro.push(altura);
            alturaTotal.push(altura);
        }

    }
                    
        var somaMasculino = alturaMasculino.reduce(function(somaMasculino, i){
        return somaMasculino + i;
        
    });
        var mediaMasculino = somaMasculino / alturaMasculino.length;
        alert("A média de altura dos homens é: "+ mediaMasculino);

        var maiorAltura = Math.max.apply(null, alturaTotal);
        alert("A maior altura registrada é: "+ maiorAltura);

        var menorAltura = Math.min.apply(null, alturaTotal);
        alert("A menor altura registrada é: "+ menorAltura);

        var numeroMulheres = alturaFeminino.length;
        alert("O número de mulheres é: "+ numeroMulheres);

        
