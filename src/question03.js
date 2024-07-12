import leia from "readline-sync"
const atividades = [
    'CELSIUS PARA FAHRENHEIT', 
    'FAHRENHEIT PARA CELSIUS',
    'CELSIUS PARA KELVIN',
    'KELVIN PARA CELSIUS',
    'FAHRENHEIT PARA KELVIN',
    'KELVIN PARA FAHRENHEIT'
]

var Opcao = leia.keyInSelect(atividades, 'ESCOLHA A PARA QUAL VOCE QUER CONVERTE: ')

switch (Opcao) {
    case 0:
        CelsiusFahrenheit();
        break;
    case 1:
        FahrenheitCelsius();
        break;
    case 2:
        CelsiusKelvin();
        break;
    case 3:
        KelvinCelsius();
        break;
    case 4:
        FahrenheitKelvin();
        break;
    case 5:
        KelvinFahrenheit();
        break;
    default:
        console.log("VOCE ESCOLHEU SAIR");
}

function CelsiusFahrenheit(){
    var Celsius = leia.questionFloat("INFORME O CELSIUS: ");
    var Fahrenhei = (Celsius * 1.8) + 32 
    console.log("TEMPERATURA EM FAHRENHEIT: " + Fahrenhei)
}
function FahrenheitCelsius(){
    var Fahrenhei = leia.questionFloat("INFORME O FAHRENHEIT: ");
    var Celsius = (Fahrenhei - 32) * (5/9)
    console.log("TEMPERATURA EM CELSIUS: " + Celsius)
}
function CelsiusKelvin(){
    var Celsius = leia.questionFloat("INFORME O CELSIUS: ");
    var Kelvin = Celsius + 273.15
    console.log("TEMPERATURA EM KELVIN: " + Kelvin)
}
function KelvinCelsius(){
    var Kelvin = leia.questionFloat("INFORME O KELVIN: ");
    var Celsius = Kelvin - 273.15
    console.log("TEMPERATURA EM CELSIUS: " + Celsius)
}
function FahrenheitKelvin(){
    var Fahrenhei = leia.questionFloat("INFORME O FAHRENHEIT: ");
    var Kelvin = (Fahrenhei - 32) * (5/9) + 273.15 
    console.log("TEMPERATURA EM CELSIUS: " + Kelvin)
}
function KelvinFahrenheit(){
    var Kelvin = leia.questionFloat("INFORME O KELVIN: ");
    var Fahrenhei = (Kelvin - 273.15) * 1.8 + 32
    console.log("TEMPERATURA EM FAHRENHEIT: " + Fahrenhei)
}