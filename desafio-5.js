function inverteString(str) {
  let resultado = "";

  for (let i = str.length - 1; i >= 0; i--) {
    resultado += str[i];
  }

  return resultado;
}

const texto = "Front-End";
let textoInvertido = inverteString(texto);

console.log("Original:", texto);
console.log("Invertido:", textoInvertido);
