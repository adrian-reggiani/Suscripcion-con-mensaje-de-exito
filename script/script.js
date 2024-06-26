const formEncabezado = document.querySelector('.form-encabezado');
const email = document.getElementById('email'); /*Validar el correo*/
const correoInvalido = document.createElement('span');

correoInvalido.textContent = 'Valid email required';



//Expresion regular
const expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;


validacion = () =>{
    event.preventDefault()
    const esValido = expReg.test(email.value); //Verifica que el correo cumpla con la expresion regular y devuelve un true.
    if(esValido){
        window.location.href = 'https://suscripcion-con-mensaje-de-exito.netlify.app/pages/success.html'
    }else{
        email.classList.add('error');
        formEncabezado.appendChild(correoInvalido);

    }
}
