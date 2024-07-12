import leia from "readline-sync"



var frase = leia.question("ESCREVA UMA FRASE: ").toLowerCase();
var frase = frase.replaceAll(" ", "")
var inverso = "";
for (var i = frase.length - 1; i >= 0; i--){
    inverso += frase[i];
}
if(frase === inverso){
    console.log("A PALAVRA E UM PALINDROMOS")
}else{
    console.log("A PALAVRA NAO E UM PALINDROMOS")
}
