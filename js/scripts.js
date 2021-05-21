//querySelector
const heading = document.querySelector(".header__texto h2")//Retorta 0 a 1 elementos
heading.textContent = "Nuevo Heading" //cambia el html a traves de js


//querySelectorAll
//retorna de 0 a todos los que conecuerden con este selector
const enlaces = document.querySelectorAll(" .navegacion a");
enlaces[0].textContent = "Nuevo texto para enlace"
enlaces[0].classList.add("nueval-clase")
// enlaces[0].classList.remove("navegacion__enlace")


//Generar un nuevo enlace
//Cuando se postea algo en fb, cuando se agrega a un carrito, etc

const nuevoEnlace = document.createElement("a")
//Agregar el href
nuevoEnlace.href = "nuevo.enlace.html";

//Agregar el texto
nuevoEnlace.textContent = "Un nuevo Enlace"

//Agregar la clase
nuevoEnlace.classList.add("navegacion__enlace")

//Agregarlo al documento
const navegacion = document.querySelector(".navegacion")
navegacion.appendChild(nuevoEnlace)

console.log(nuevoEnlace)



// //Eventos
// console.log(1); //window es mas alto que el document, document es solo de html y window es todo
// window.addEventListener("load",function(){  //load espera a que el js y los archivos que dependen del html esten listos
//     console.log(2);
// } ) 

// window.onload = function(){
//     console.log(3);
// }

// document.addEventListener("DOMContentLoaded", function(){ //La diferencia del load y el DOm es que el lod espera a que se descargue TODO y el DOM solo espera que se descargue el HTML
// console.log(4)
// })
// console.log(5)

// window.onscroll = function(){
//     console.log("scrolling...")
// }

// //Seleccionar elementos y asociarlos a un evento
// const btnEnviar = document.querySelector(".boton--primario");
// btnEnviar.addEventListener("click", function(evento){
//     console.log(evento);
//     evento.preventDefault(); //Se usa en todos los formularios

//     //Validar un formulario
//     console.log("enviando formulario")
// })




//Eventos de los imputs y textarea
const datos = {
    nombre: "",
    email: "",
    mensaje: ""
}

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");

nombre.addEventListener("input", leerTexto)

email.addEventListener("input", leerTexto)

mensaje.addEventListener("input", leerTexto)




//El evento de submit
const formulario = document.querySelector(".formulario")
formulario.addEventListener("submit", function (evento) {
    evento.preventDefault()

    //Validar el formulario
    const { nombre, email, mensaje } = datos;

    if (nombre === "" || email === "" || mensaje === "") {
        mostrarError("Todos los campos son obligatorios")

        return;
    }

    //Crear alerta de formulario enviado
    mostrarMensaje("Mensaje enviado correctamente")

    //Enviar el formulario

    console.log("Enviando formulario")
});

function leerTexto(evento) {
    // console.log(evento.target.value)
    datos[evento.target.id] = evento.target.value;

    //  console.log(datos)
}



//Muestra alerta de mensaje enviado correctamente
function mostrarMensaje(mensaje) {
    const alerta = document.createElement("Parrafo")
    alerta.textContent = mensaje
    alerta.classList.add("correcto")

    formulario.appendChild(alerta)

    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}


//Muestra un error en pantalla
function mostrarError(mensaje) {
    const error = document.createElement("Parrafo")
    error.textContent = mensaje;
    error.classList.add("error")

    formulario.appendChild(error)



    //Desaparezca despues de 5 segundos
    setTimeout(() => {
        error.remove();
    }, 5000);
}
