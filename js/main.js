/*
EJERCICIO 1 - Escribe una función que reciba un array de números y devuelva la suma de todos los elementos.

PSEUDOCODIGO:

INICIO
    resultado = 0
    // iterar cada elemento del array
    PARA CADA num EN array HACER
        // sumar el elemento actual al resultado
        resultado = resultado + num
    FIN PARA
    ESCRIBIR "La suma de array es: resultado"
FIN
*/

const sum = (array)=>{
    const resultado = array.reduce((acumulador, num) => {
        return acumulador + num;
    }, 0);

    document.getElementById("ejercicio1").innerHTML =
    `La suma del array ${array} es: ${resultado}`
};

sum([5,10,3,2]);

/*
EJERCICIO 3 
Crea un array de objetos que representen libros, cada uno con las propiedades titulo, autor, y anio. Escribe una función que reciba el array y devuelva solo los libros publicados después del año 2000.
*/

/*
console.log("---------- Ejercicio 1 ----------");

const arrObjetos = [
    {
        titulo: "Título de libro 1",
        autor: "Autor 1",
        anio: 1990
    },
    {
        titulo: "Título de libro 2",
        autor: "Autor 2",
        anio: 2005
    },
    {
        titulo: "Título de libro 3",
        autor: "Autor 3",
        anio: 2010
    }
];

const filtrarLibros = () => {
    arrObjetos.forEach(item => {
        if (item.anio >= 2000) {
            console.log(item)
        }
    });
}

filtrarLibros();

console.log("---------------------------------");
*/