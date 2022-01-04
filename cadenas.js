/*1) Programa una función que cuente el número de caracteres de una cadena de texto, 
pe. miFuncion("Hola Mundo") devolverá 10.
2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, 
pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3)
 devolverá Hola Mundo Hola Mundo Hola Mundo. */

 function contar(cadena){
     let micadena=cadena,cont=0;
    try{
     if((typeof micadena) === "string"){
         cont= micadena.length;
         return cont;
     }
     else
     throw new Error("error");
     
    }catch(err){console.log(err)}
 }

 console.log(contar("hola mundo"));

const contarCaracteres =(cadena="") =>
 (!cadena)
   ? console.warn("No ingresaste la cadena")
   : console.info(`La cadena "${cadena}" tiene ${cadena.length} caracteres`)

   contarCaracteres();
   contarCaracteres("Hola Mundo");


 function recortado(cadena,nro){
     let micadena=cadena,numero=nro;

     console.log(micadena.slice(0,numero));
 }

 recortado("Hola Mundo",3);

 function separar(lacadena,caracter){
     let array=lacadena.split(caracter);
     console.log(array);
 }

 separar ('hola que tal', ' ');

 const cadenaAArreglo = (cadena="",separador=undefined) =>
 (!cadena)
    ? console.log("No ingresaste ninguna cadena")
    : (separador === undefined)
        ? console.log("No ingresaste ningun separador")
        :console.log(cadena.split(separador))

cadenaAArreglo();
cadenaAArreglo("Hola Mundo");
cadenaAArreglo("Hola Mundo"," ");


 function repetir(esacadena){
 let cadenafinal="";
    for (i=0;i<3;i++){
        cadenafinal+=" "
        cadenafinal+=esacadena
    }
    console.log(cadenafinal.trim());
 }

 repetir("Hola Mundo");