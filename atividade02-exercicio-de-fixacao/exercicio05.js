/* 5) A empresa X resolveu dar um aumento de salário aos seus 
colaboradores e lhe contrataram para desenvolver o programa 
que calculará os reajustes. Faça um programa que recebe o 
salário de um colaborador e calcule reajuste segundo o seguinte 
critério, baseado no salário atual: 
  - Salários até R$ 280,00 : aumento de 20% 
  - Salários entre R$ 280,00 e R$ 700,00: aumento de 15% 
  - Salários entre R$ 700,00 e R$ 1500,00: aumento de 10%
  - Salários de R$ 1500,00 em diante: aumento de 5% 

Após o aumento ser calculado, deverá ser informado: 
o salário antes do reajuste; 
o percentual de aumento aplicado; 
o valor do aumento; 
o novo salário, após o aumento.
*/

function aumentoSalario (salario) {
    if(salario <= 280) {
        var salarioFinal = salario + (salario * 20 / 100);
    } else if (salario > 280 && salario <= 700){
        salarioFinal = salario + (salario * 15 / 100);
    } else if (salario > 700 && salario <= 1500) {
        salarioFinal = salario + (salario * 10 / 100);
    } else {
        salarioFinal = salario + (salario * 5 / 100);
    }

    alert("O salário do colaborador vai ser ajustado para: R$" + salarioFinal);
}


aumentoSalario(salario = parseFloat(prompt("Digite o salário do colaborador(a): ")));
