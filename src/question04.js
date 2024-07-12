import leia from "readline-sync"

var melhorJogado;
var melhorPontuacao;
var nome;
console.log("DEIXE EM BRANCO PARA SAIR")
while(nome = leia.question("INFORME O NOME DO JOGADO: ")){
    var Gol =leia.questionInt("INFORME QUANTIDADE DE GOL: ") * 50
    var Certo = leia.questionInt("INFORME QUANTIDADE DE PASSE CERTOS: ") * 10
    var Errados = leia.questionInt("INFORME QUANTIDADE DE PASSE ERRADOS: ") * 5
    var totalPontos = Gol + Certo - Errados

    if(totalPontos < 50){
        console.log(nome + " FEZ PESSIMA PARTIDA");
    } else if(totalPontos >= 50 && totalPontos < 100){
        console.log(nome + " FEZ UMA PARTIDA RUIM");
    } else if(totalPontos >= 100 && totalPontos < 150){
        console.log(nome + "  FEZ O BÁSICO");
    } else if(totalPontos >= 150 && totalPontos < 200){
        console.log(nome + " FOI BEM NA PARTIDA");
    } else {
        console.log(nome + "  JOGOU DEMAIS");
    } 

    if(melhorPontuacao === undefined || totalPontos > melhorPontuacao){
        melhorJogado = nome;
        melhorPontuacao = totalPontos;
    }
    console.log("DEIXE EM BRANCO PARA SAIR")
}

console.log("O MELHOR JOGADOR FOI " + melhorJogado + " COM " + melhorPontuacao + " PONTOS");
