//Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.

const num1 = 1;
const num2 = 10;

if (num1 > num2) {
  console.log("El primer número debe ser menor al segundo número");
}

for (let i = num1; i <= num2; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
