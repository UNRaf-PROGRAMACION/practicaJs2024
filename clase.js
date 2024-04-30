const alumnos = ["juan", "pedro", "fede", "nico"];

for (let i = 0; i < alumnos.length; i++) {
  console.log(i);
  console.log(alumnos[i]);
  saludar(alumnos[i]);
}

// declaracion
function saludar(nombre) {
  //const mensaje = "Hola " + nombre;
  const mensaje = `Hola ${nombre}`;

  console.log(mensaje);
}

// invocacion
saludar("Pedro");

// funcion que sume elementos y devuelva el total
function sumar(lista) {
  let total = 0;
  for (let i = 0; i < lista.length; i++) {
    total = total + lista[i];
  }
  return total;
}

// invocacion
let numeros = [1, 2, 3, 4, 5];
let pokebola = sumar(numeros);
console.log(pokebola);

console.log(sumar([3, 4, 5]));

const persona = {
  nombre: "Juan",
  edad: 30,
};

console.log(persona.edad);

persona.edad = 31;
console.log(persona.edad);

const miEstudio = {
  universidad: "UBA",
  carrera: "Ingenieria",
};

const persona = {
  nombre: {
    nombre: "Juan",
    apellido: "Perez",
  },
  gustos: ["futbol", "peliculas", "programar"],
  edad: 30,
  estudio: miEstudio,
};

console.log(persona.nombre.apellido);

console.log(persona.nombre.apellido);
