let display = document.getElementById("display")
let currentInput = ""
let currentOperator = ""


function appendNumber(value){
    currentInput += value 
    display.textContent = currentInput
     
}

function appendOperador(operator){
    if(currentInput === "" && operator !== ".") return
    currentInput += operator;
    display.textContent = currentInput
}

function calculate(){
    try{
        if(currentInput.includes("%")) {
            calcularPorcentagem()
        } else {
            let result = eval(currentInput)
            if (!Number.isInteger(result)){
                result = result.toFixed(2)
            }
            currentInput = result;
            display.textContent = currentInput;
        }
        
    } catch(error){
        display.textContent = "Erro";
        currentInput = ""; 
    }
}

function clearDisplay(){
    currentInput = ""
    display.textContent = currentInput;
}

function calcularPorcentagem() { // infelizemnte, tive que usar IA para terminar essa função, mas fui atrás de entender todos os comando usados.

    // Encontre o índice do símbolo "%" na string
    let percentIndex = currentInput.indexOf("%"); //let modo de organizar variavel apenas dentro de um "bloco" ou função (como div). percentIndex armazena a informação de onde está o simbolo da porcetagem dentro da string, desoberto por Index0f, que procura o primeiro caractere pedido dentro da string.
    // Se não encontrar o símbolo "%" ou o que vem antes e depois dele, retorne
    if (percentIndex === -1) return; //se nao achar a porcentagem, retorna -1. mas isso nao vai ser usado, por conta da função Calculate, Talvez eu consiga remover essa parte do codigo sem quebrar a calculadora.

    // Pegue a parte antes do "%" (que é o número base)
    let numberBeforePercent = currentInput.substring(0, percentIndex).trim(); //numberbeforepercent autoexplicativo. .substring armazeza uma PARTE de uma string completa, nesse caso a strin que contém a %. por fim, o .trim é apenas uma maneia de organizar o texto e remover os espaços no começo ou fim de uma string.

    // Pegue a parte após o "%" (que é o valor da porcentagem)
    let numberAfterPercent = currentInput.substring(percentIndex + 1).trim();

    // Verifique se ambos os valores são números válidos
    if (isNaN(numberBeforePercent) || isNaN(numberAfterPercent)) { //isNaN = confere se "Is a NUmber" ou não. talvez eu consiga remover essa parte do codigo também.
        display.textContent = "Erro";
        currentInput = "";
        return;
    }

    // Converta os números para float
    let baseValue = parseFloat(numberBeforePercent); // parseFLoat = converta os numeros para float, isso é, numero decimal.
    let percentageValue = parseFloat(numberAfterPercent); // mesma coisa

    // Calcule o valor da porcentagem: (baseValue * percentageValue) / 100
    let result = (baseValue * percentageValue) / 100; // 

    // Atualize a tela com o resultado
    currentInput = result.toString(); // to string faza o programa tratar o Value como uma string.
    display.textContent = currentInput; //e finalmente, mostra o numero no display.
}
