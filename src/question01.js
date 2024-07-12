import leia from "readline-sync"

function ValidarVogal(Letra){
    if(Letra === "a" || Letra === "e" || Letra === "i" || Letra === "o" || Letra === "u"){
        return 1;
    }else{
        return 0;
    }
}
var texto = leia.question("ESCREVA UM TEXTO: ");
var totalVogal = 0;
var count = 0;
while(count < texto.length){
    totalVogal += ValidarVogal(texto[count].toLowerCase());
    count++;
}
console.log(totalVogal)