//Esta primera parte es para la validación de los datos

const formulario = document.getElementById('formulario'); //Esto llama el formulario
const inputs = document.querySelectorAll('#formulario input'); //Con el querySelectoAll llama todos los imputs dentro del ID especificado

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Debe empezar con letra/numero seguido de un @letras/numeros y contener sí o sí un "." con el  \. se logra esto y terminar con letras/numeros
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


//Esta parte setea todos los campos en false, se utiliza para la función del botón enviar
const campos = {
	nombre: false,
	password: false,
	email: false,
	telefono: false
}



const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
		break;
		case "password2":
			validarPassword2();
		break;
		case "email":
			validarCampo(expresiones.correo, e.target, 'email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){

		document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {

		document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('floatingPassword');
	const inputPassword2 = document.getElementById('floatingConfirm');

	if(inputPassword1.value !== inputPassword2.value){
		document.querySelector(`#grupo_password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.querySelector(`#grupo_password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('gridCheck');
	if(campos.nombre && campos.password && campos.email && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 2000);
	}
});


//Esta parte es para crear los usuarios 

var nombreUsuario = document.getElementById("floatingName");
var telefonoUsuario = document.getElementById("floatingTel");
var emailUsuario = document.getElementById("floatingInput");
var passwordUsuario = document.getElementById("floatingPassword");

const botonEnviar = document.getElementById("boton")

function guardarUsuario(){

	console.log("Esta funcionando la funcion");



	console.log(usuario1);

}


botonEnviar.addEventListener("click", guardarUsuario);