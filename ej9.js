//Obtener la suma de los elementos de un array.

const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  //sum = sum + numbers[i];
  sum += numbers[i];
}
console.log(sum);
