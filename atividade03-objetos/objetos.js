let pessoa = {
    nome: "Rayssa",
    idade: 29,
    filiacao: ["Isael", "Verônica"],
    endereco: {
            rua: "Rua da Lua",
            cidade: "João Pessoa",
            estado: "Paraíba",
    },
    
    dadosCompletos: function(pessoa) {
        for(var p in pessoa) {
            if(pessoa.hasOwnProperty(p))
            return "Dados Incompletos";
        }
    
        return "Dados Completos";
    }
};

console.log("Nome: ", pessoa.nome, "\nidade: ", pessoa.idade,
"\nFiliação: ", pessoa.filiacao, "\nEndereço: ", pessoa.endereco)


console.log(pessoa.dadosCompletos());





