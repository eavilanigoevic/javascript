 /*5) Programa una función que invierta las palabras de una cadena de texto,
 pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".*/
 const inviertePalabra = (cadena="") => 
 (!cadena) 
    ? console.error("No ingresaste una cadena")
    : cadena.split("").reverse().join("")

    console.log(inviertePalabra("Hola Mundo"));
/*6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe.
 miFuncion("hola mundo adios mundo", "mundo") devolverá 2.*/
 const re = /mundo/gi;
 const contarPalabras = (texto="",palabra=undefined) => 
 (!texto)
 ? console.error("No ingresaste un texto")
 : (palabra === undefined)
    ? console.error("No ingresaste una palabra")
    : texto.match(palabra).length;
 
 console.log(contarPalabras("Hola mundo adios mundo ojala mundo",re));

 /*7) Programa una función que valide si una palabra o frase dada,
 es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

 const palindromo = (palabra) => {
     (palabra.toLowerCase() === palabra.split("").reverse().join("").toLowerCase())
        ? console.log("Es palindromo")
        : console.log("No es palindromo")
}
 
 palindromo("Salas");

 /*8) Programa una función que elimine cierto patrón de caracteres de un texto dado,
 pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.*/

 const eliminarPatron = (texto,patron) => {
     let array=texto.split(" ");
        array.forEach((element,index) => {
         array[index] = element.replace(patron,"")
     });

     return array.join(" ")
 } 

 console.log(eliminarPatron("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"));