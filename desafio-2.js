function isSequenceFibonacci(num) {
  let a = 0;
  let b = 1;

  while (a <= num) {
    if (a === num) {
      return `${num} pertence à sequência de Fibonacci.`;
    }
    [a, b] = [b, a + b];
  }

  return `${num} não pertence à sequência de Fibonacci.`;
}

const numero = 10;
console.log(isSequenceFibonacci(numero));
