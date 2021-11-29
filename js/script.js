var nombre = document.getElementById('nombre');
var asunto = document.getElementById('asunto');
var email = document.getElementById('email');
var comentarios = document.getElementById('comentarios');
var error = document.getElementById('error');
error.style.color = 'red';

function validacion(){
    console.log('Sending the Love...');

    var mensajesError = [];

    if(nombre.length < 2) {
        mensajesError.push ('Recuerda darme tu nombre, humano');
    }

    if(asunto.value === null || asunto.value === '') {
        mensajesError.push ('Dime de que va tu consulta, whoaf');
    }

    if(email.value === null || asunto.value === '') {
        mensajesError.push ('necesitamos un correo electonico para enviarte La Magia');
    }

    if(comentarios.value === null || comentarios.value === '') {
        mensajesError.push ('cuentame un poco más para hacerle un regalito copado a nuestro amigo perruno');
    }

     error.innerHTML = mensajesError.join(', ');

     return false;
}

