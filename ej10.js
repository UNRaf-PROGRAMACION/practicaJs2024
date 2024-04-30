// Sumar solo los elementos pares de un array.

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}

for (let i = 0; i < numbers.length; i += 2) {
  sum += numbers[i];
}
