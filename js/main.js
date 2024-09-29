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
    `La suma del array <strong>${array}</strong> es: <strong>${resultado}</strong>`
};

sum([5,10,3,2]);


/*
EJERCICIO 2 - Crea un objeto que represente un producto con las propiedades nombre, precio, y disponible (un booleano).

Escribe una función que imprima la información del producto solo si está disponible.

PSEUDOCODIGO:

INICIO
    // comprobar que el producto esta disponible
    SI producto.disponible ENTONCES
        // imprimir informacion del producto
        ESCRIBIR "Nombre: producto.nombre "
        ESCRIBIR "Precio: producto.precio"
        ESCRIBIR "Disponible: Si"
    SINO 
        ESCRIBIR "El producto no esta disponible"
    FIN SI   
FIN
*/

const objProdcuto = {
    nombre: "producto1",
    precio: 15.65,
    disponible: true
};

const mostrarInfoProducto = (obj) => {
    const ejer2Elemento = document.getElementById("ejercicio2")

    if (obj.disponible) {
        ejer2Elemento.innerHTML = 
        `<strong>PRODUCTO:</strong><br> 
        <strong>Nombre:</strong> ${obj.nombre}<br>
        <strong>Precio:</strong> ${obj.precio}<br>
        <strong>Disponible:</strong> Sí`
    } else {
        ejer2Elemento.innerHTML = 
        "El producto <strong>no está disponible.</strong>"
    }
};

mostrarInfoProducto(objProdcuto);

/*
EJERCICIO 3 
Crea un array de objetos que representen libros, cada uno con las propiedades titulo, autor, y anio. Escribe una función que reciba el array y devuelva solo los libros publicados después del año 2000.

PSEUDOCODIGO:

INICIO
    // crear array para almacenar libros filtrados
    librosFiltrados = []

    // iterar por cada objeto libro en el array
    PARA CADA libro EN libros HACER
        // comprobar el año del libro > 2000
        SI libro.anio > 2000 ENTONCES
            // agregar libro al array
            AÑADIR libro A librosFiltrados
        FIN SI
    FIN PARA
    
    // devolver el array de libros filtrados
    RETORNAR librosFiltrados
FIN
*/

const arrLibros = [
    {
        titulo: "Título de libro 1",
        autor: "Autor 1",
        anio: 1990
    },
    {
        titulo: "Título de libro 2",
        autor: "Autor 2",
        anio: 2000
    },
    {
        titulo: "Título de libro 3",
        autor: "Autor 3",
        anio: 2005
    }
];

const obtenerLibros2000 = (libros, anio) => {
    const librosFiltrados = [];

    libros.forEach((libro)=>{
        if (libro.anio >= anio) { 
            librosFiltrados.push(libro);
        };
    });

    return librosFiltrados;
};

const mostrarLibros = (libros)=>{
    let resultadoHtml = ``;
    if (libros.length !== 0) {
        libros.forEach((libro, index)=>{
            let numeroLibro = index + 1;
            resultadoHtml +=
            `<strong>LIBRO ${numeroLibro}:</strong><br>
            <strong>Título:</strong> ${libro.titulo}<br>
            <strong>Autor:</strong> ${libro.autor}<br>
            <strong>Año:</strong> ${libro.anio}<br><br>`
        });
    } else {
        resultadoHtml = `<strong>No hay</strong> libros después del año 2000.`;
    }

    document.getElementById("ejercicio3").innerHTML = resultadoHtml; 
};

mostrarLibros(obtenerLibros2000(arrLibros, 2000));

/*
EJERCICIO 4 - Crea un array de objetos que representen productos, con propiedades nombre, precio, y categoria.

Escribe una función que devuelva todos los productos de una categoría específica.

PSEUDOCODIGO:  

INICIO
    // crear array para almacenar los productos filtrados
    productosFiltrados = []

    // iterar por cada objeto producto en el array
    PARA CADA producto EN productos HACER
        // comprobar si la categoria del producto coincide
        SI producto.categoria === categoria ENTONCES
            // agregar producto al array
            AÑADIR prodcuto A productosFiltrados
        FIN SI
    FIN PARA

    // devolver el array de los productos filtrados
    RETORNAR productosFiltrados
FIN
*/

const arrProductos = [
    {
        nombre: "Produto 1",
        precio: 19.99,
        categoria: "Categoria_B"
    },
    {
        nombre: "Produto 2",
        precio: 39.95,
        categoria: "Categoria_A"
    },
    {
        nombre: "Produto 3",
        precio: 59.95,
        categoria: "Categoria_A"
    }
];

const filtrarProductos = (productos, categoria) => {
    const productosFiltrados = []
    productos.forEach((producto)=>{
        if (producto.categoria === categoria) {
            productosFiltrados.push(producto);
        }
    });
    return productosFiltrados;
};

const mostrarInfoProductos = (productos) => {
    let resultadoHtml = ``;
    if (productos.length !== 0) {
        productos.forEach((producto, index)=>{
            let numeroProducto = index + 1;
            resultadoHtml +=
            `<strong>PRODUCTO ${numeroProducto}:</strong><br>
            <strong>Nombre:</strong> ${producto.nombre}<br>
            <strong>Precio:</strong> ${producto.precio}<br>
            <strong>Categoria:</strong> ${producto.categoria}<br><br>`
        });
    } else {
        resultadoHtml = `<strong>No hay</strong> productos que coincidan con la categoria.`;
    }

    document.getElementById("ejercicio4").innerHTML = resultadoHtml;
};

mostrarInfoProductos(filtrarProductos(arrProductos, "Categoria_A"));

/*
EJERCICIO 5 – Hacer un programa que:

1. Solicite al usuario el ingreso por teclado de 3 notas.
2. Saque la media de las notas.
3. Muestre por pantalla
    - si la nota es menor que 5 'SUSPENSO'
    - si la nota es mayor o igual 5 y menor que 7 'APROBADO'
    - si es mayor o igual que 7 y menor o igual que 10 'sobresaliente'

PSEUDOCODIGO:  

INICIO
    // colicitar al 3 notas
    ESCRIBIR "Ingrese la primera nota:"
    LEER nota1
    ESCRIBIR "Ingrese la segunda nota:"
    LEER nota2
    ESCRIBIR "Ingrese la tercera nota:"
    LEER nota3

    // calcular la media 
    media = (nota1 + nota2 + nota3) / 3

    // mostrar la media 
    ESCRIBIR "La media de las notas es:", media

    // comprobar el resultado de la nota
    SI nota < 5 ENTONCES
        ESCRIBIR "SUSPENSO"
    SINO SI nota >= 5 Y nota < 7 ENTONCES
        ESCRIBIR "APROBADO"
    SINO SI nota >= 7 Y nota <= 10 ENTONCES
        ESCRIBIR "SOBRESALIENTE"
    FIN SI
FIN
*/

const calcularClasificarMedia = () => {
    const nota1 = parseFloat(document.getElementById("nota1").value);
    const nota2 = parseFloat(document.getElementById("nota2").value);
    const nota3 = parseFloat(document.getElementById("nota3").value);

    const media = (nota1 + nota2 + nota3) / 3;

    let mensaje;

    if (media < 5) {
        mensaje = "SUSPENSO";
    } else if (media >= 5 && media < 7) {
        mensaje = "APROBADO";
    } else if (media >= 7 && media <= 10) {
        mensaje = "SOBRESALIENTE";
    }

    document.getElementById("ejercicio5").innerText = `La media de las notas es: ${media.toFixed(2)}. Clasificación: ${mensaje}`;
};

/*
EJERCICIO 6 – Hacer un programa que:

1. ingreso de un numero por teclado
2. Muestre por pantalla si ese numero es de 1 cifra 2 cifras o 3 cifras.

PSEUDOCODIGO:  

INICIO
    // solicitar numero al usuario
    ESCRIBIR "Ingrese un numero:"
    LEER numero

    // comprobar las cifras del numero
    SI numero >= 0 Y numero < 10 ENTONCES
        ESCRIBIR "El numero tiene 1 cifra"
    SINO SI numero >= 10 Y numero < 100 ENTONCES
        ESCRIBIR "El numero tiene 2 cifras"
    SINO SI numero >= 100 Y numero < 1000 ENTONCES
        ESCRIBIR "El numero tiene 3 cifras"
    SINO
        ESCRIBIR "El numero tine mas de 3 cifras"
    FIN SI
FIN
*/

const comprobarCifras = () => {

    const numero = document.getElementById("numero").value;

    let mensaje;

    if (numero >= 0 && numero < 10) {
        mensaje = `El número: ${numero} tiene 1 cifra`;
    } else if (numero >= 10 && numero < 100) {
        mensaje = `El número: ${numero} tiene 2 cifras`;
    } else if (numero >= 100 && numero < 1000) {
        mensaje = `El número: ${numero} tiene 3 cifras`;
    } else if (numero >= 1000) {
        mensaje = `El número: ${numero} tiene más de 3 cifras`;
    } else {
        mensaje = `El número: ${numero} tiene mas de 3 cifras`;
    }

    document.getElementById("ejercicio6").innerText = mensaje;
};

/*
EJERCICIO 7 – Solicite al usuario que escriba un color. Si ese color existe que lo traduzca al inglés, sino que muestre un mensaje de error.

PSEUDOCODIGO:  

INICIO
    ESCRIBIR "Escribe un color:"
    LEER color

    SI color = "rojo" ENTONCES
        ESCRIBIR "El color en ingles es: red"
    SINO SI color = "verde" ENTONCES
        ESCRIBIR "El color en ingles es: green"
    SINO SI color = "azul" ENTONCES
        ESCRIBIR "El color en ingles es: blue"
    SINO
        ESCRIBIR "El color no existe en ingles"
    FIN SI
FIN
*/

const comprobarColor = () => {

    const color = document.getElementById("color").value.toLowerCase();

    let mensaje;

    if (color === "rojo") {
        mensaje = `El color ${color} en inglés es: red`;
    } else if (color === "verde") {
        mensaje = `El color ${color} en inglés es: green`;
    } else if (color === "azul") {
        mensaje = `El color ${color} en inglés es: blue`;
    } else {
        mensaje = `El color ${color}  no existe en inglés`;
    }

    document.getElementById("ejercicio7").innerText = mensaje;
};

/*
EJERCICIO 8 – se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
1. Cuantos son positivos.
2. Cuantos son negativos.
3. Cuantos son pares.

PSEUDOCODIGO:  

INICIO
    LEER numeros

    // Inicializar contadores
    positivos = 0
    negativos = 0
    pares = 0

    // Iterar array de numeros
    PARA cada numero EN numeros HACER
        // Comprobar si el número es positivo o negativo
        SI numero > 0 ENTONCES
            positivos = positivos + 1
        SINO SI numero < 0 ENTONCES
            negativos = negativos + 1
        FIN SI

        // Comprobar si el número es par
        SI numero % 2 = 0 ENTONCES
            pares = pares + 1
        FIN SI
    FIN PARA
FIN
*/

const numeros = [1, -2, 3, 4, -5, 6, -7, 8, -9, 10];

const comprobarNumeros = () => {
    let positivos = 0;
    let negativos = 0;
    let pares = 0;

    numeros.forEach((numero) => {

        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        }

        if (numero % 2 === 0) {
            pares++;
        }
    });

    document.getElementById("ejercicio8").innerHTML = 
    `
        Los 10 numeros: (${numeros})<br>
        Cantidad de números positivos: ${positivos}<br>
        Cantidad de números negativos: ${negativos}<br>
        Cantidad de números pares: ${pares}
    `;
};

comprobarNumeros();

/*
EJERCICIO 9 – Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.

1. Almacenar todos los números en un array.
2. Almacenar en otro array los números comprendidos entre el 1 y 250.
3. Almacenar en otro array los números comprendidos entre el 251 y 500.

PSEUDOCODIGO:  

INICIO
    // array con los 10 números
    LEER numeros

    // arrays para almacenar los numeros
    numeros_1_250 = []
    numeros_251_500 = []

    // iterar sobre el array de numeros
    PARA CADA numero EN numeros HACER
        // clasificar numero 
        SI numero >= 1 Y numero <= 250 ENTONCES
            AÑADIR numero A numeros_1_250
        SINO SI numero >= 251 Y numero <= 500 ENTONCES
            AÑADIR numero A numeros_251_500
        FIN SI
    FIN PARA

    // mostrar resultados
    ESCRIBIR "Numeros entre 1 y 250: numeros_1_250"
    ESCRIBIR "Numeros entre 251 y 500: numeros_251_500"
FIN
*/

const arrNumeros = [120, 75, 350, 400, 200, 45, 150, 300, 475, 50];

const clasificarNumeros = (numeros) => {
    const numeros_1_250 = [];
    const numeros_251_500 = [];

    numeros.forEach((numero) => {
        if (numero >= 1 && numero <= 250) {
            numeros_1_250.push(numero);
        } else if (numero >= 251 && numero <= 500) {
            numeros_251_500.push(numero);
        }
    });

    document.getElementById("ejercicio9").innerHTML = 
    ` Los 10 numeros ingresado: (${numeros.join(', ')})<br>
    <strong>Números entre 1 y 250:</strong> ${numeros_1_250.join(', ')}<br>
    <strong>Números entre 251 y 500:</strong> ${numeros_251_500.join(', ')}`;
};

clasificarNumeros(arrNumeros);

/*
EJERCICIO 10 - Se solicitan el nombre y 2 notas de x alumnos se almacenan en un array de objetos.

1. Sacar la media de cada alumno y almacenarlo en el objeto del alumno correspondiente.
2. Devolver que alumno ha sacado la mejor media y la nota media.

PSEUDOCODIGO:  
INICIO
    // array de alumnos
    LEER alumnos

    DEFINIR mejorAlumno 
    DEFINIR mejorMedia

    // iterar cada alumnos del array alumnos
    PARA CADA alumno EN alumnos HACER
        media = (alumno.nota1 + alumno.nota2) / 2
    FIN PARA
    
    // comparar las medias de los alumnos
    PARA CADA alumno EN alumnos HACER
        SI alumno.media > mejorMedia ENTONCES
            mejorMedia = alumno.media
            mejorAlumno = alumno.nombre
        FIN SI
    FIN PARA
FIN
*/

const alumnos = [
    {
        nombre: "Alumno1",
        nota1: 8,
        nota2: 7
    },
    {
        nombre: "Alumno2",
        nota1: 9,
        nota2: 10
    }
];

const mostrarMedia = (array) => {
    let mejorAlumno = "";
    let mejorMedia = 0;

    alumnos.forEach((alumno) => {
        alumno.media = (alumno.nota1 + alumno.nota2) / 2;
    });

    alumnos.forEach((alumno) => {
        if (alumno.media > mejorMedia) {
            mejorMedia = alumno.media;
            mejorAlumno = alumno.nombre;
        }
    });

    document.getElementById("ejercicio10").innerHTML = 
            `El alumno con la mejor media es: ${mejorAlumno} <br>
             La mejor media es: ${mejorMedia}`;

};

mostrarMedia(alumnos);