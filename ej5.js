//Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.

const word = "Hola";
const n = 5;

for (let i = 0; i < n; i++) {
  console.log(word);
}

word.repeat(n);

while (n > 0) {
  console.log(word);
  //n = n - 1;
  n--;
}

i = 0;
while (i < n) {
  console.log(word);
  i++;
}
