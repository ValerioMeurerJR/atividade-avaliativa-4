function gerarNumero(min, max) {
    return parseInt((Math.random() * (max - min)) + min);
}
function CordoNumero(Valor){
    if(Valor === 0){
        return "VERDE";
    } else if(Valor % 2 === 0){
        return "VERMELHO";
    }else{
        return "PRETO";
    }
}

var NumeroSorteados = []
var vResultado = [0,0,0]
var quantidadeJogas = 500;
for (var i = 0; i < quantidadeJogas; i++) {
    var Sorteio = gerarNumero(0, 36);
    NumeroSorteados[i] = Sorteio
    if(Sorteio === 0){
        vResultado[0]++ 
    } else if(Sorteio % 2 === 0){
        vResultado[1]++ 
    } else {
        vResultado[2]++ 
    }
}

vResultado.forEach(Valor => {
    var result = (100 / quantidadeJogas) * Valor;
    if(result > 40){
        console.log("DADO ESTA VICIADO: "+ Valor + " " + result)
    }
})
