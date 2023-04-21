/* 
En el proyecto original que presentamos separamos todo el tema del pdf de nuestro
archivo de javascript principal por el tema de que ocupaba mucho lugar el codigo de las imagenes
asi que lo llamabamos desde otra funcion que funcionaba cuando apretabas un boton, en este caso el enviar
*/

$(".btn-enviar").click(function(event){
    event.preventDefault();
    var nombre = $("#nombre").val();
    var apellido = $("#apellido").val();
    var email = $("#email").val();

    console.log(nombre);
    console.log(apellido);
    console.log(email);

    generatePDF(nombre, apellido, email); //<--- Desde aca llamamos a la funcion que genera los pdf
    //le pasamos las variables que queremos que aparezcan en nuestro pdf, podes añadirle mas siempre modificando 
    //la que esta en catalogo.js
});