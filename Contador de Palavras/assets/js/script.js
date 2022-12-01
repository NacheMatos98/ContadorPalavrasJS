
function aoMenos2Caracteres(texto) {
    const letras = texto.match(/[a-z]/gi) || [];
    return letras.length >= 2;
    console.log(letras);
}

function ausenciaDe3Caracteres(texto) {
    for (const caracter of texto) {
        const ocorrencias = Array.from(texto).filter(v => v == caracter).length;

        if (ocorrencias >= 3) {
            return false;
        }
    }

    return true;
}


const checar = [aoMenos2Caracteres, ausenciaDe3Caracteres];
const textInput = document.querySelector(".text-input");
const numeroPalavrasElement = document.querySelector(".word-count");
const numeroLetrasElement = document.querySelector(".letter-count");
const numeroEspacoElement = document.querySelector(".space-count");

textInput.addEventListener("input", () => {
    const espacosDividir = textInput.value.trim().split(/[\s-]/); //a função trim remove os espaços brancos, e o split divide o value pelos espaços brancos e coloca o resultado em um array de palavras
    const numDeLetras = (textInput.value.match(/[a-z]/gi) || []).length;
    const numDeEspacos = (textInput.value.match(/\s+/g) || []).length;

    let contadorWord = 0;

    outer:
    for (const text of espacosDividir){
        for (const check of checar){
            if(!check(text)){
                continue outer;
            }
        }
        contadorWord++;
    }

    numeroPalavrasElement.textContent = contadorWord;
    numeroLetrasElement.textContent = numDeLetras;
    numeroEspacoElement.textContent = numDeEspacos;

});