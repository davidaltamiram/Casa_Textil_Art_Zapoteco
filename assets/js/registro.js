//Esta primera parte es para la validación de los datos

const formulario = document.getElementById('formulario'); //Esto llama el formulario
const inputs = document.querySelectorAll('#formulario input'); //Con el querySelectoAll llama todos los imputs dentro del ID especificado

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Debe empezar con letra/numero seguido de un @letras/numeros y contener sí o sí un "." con el  \. se logra esto y terminar con letras/numeros
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}


//Esta parte setea todos los campos en false, se utiliza para la función del botón enviar
const campos = {
	nombre: false,
	password: false,
	password2: false,
	email: false,
	telefono: false,
	emailNuevo: false
}


// Esto activa la validación dependiendo el input seleccionado con los atributos expresiones que selecciona que expresión Regex aplicar,
// el e.target a cual y el string que haga match con el e.taget.name
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

			//Esto trae todo localStorage con el Key usuario, teniendo como value un JSON con todos los correos registrados
			var checkStorage = localStorage.getItem('usuarios');

			//Si no hay ningún correo registrado
			if (checkStorage === null) {
				campos.emailNuevo = true; //no aplica ningún filtro y deja registrarse, cambiando el campo a true

			} else { //de lo contrario

				//parsea el JSON para que sea un array y buscar dentro del mismo los correos para hacer validación 
				var checkStorage = JSON.parse(checkStorage);
				for (let users of checkStorage) { //con un for.. of hacemos una iteración a todo el array
					if (users.email.toLowerCase() === emailUsuario.value.toLowerCase()) { //normalizamos lo ingresado con lo registrado con un toLowerCase y comparamos si es estrictamente igual
						document.querySelector(`#grupo_email .formulario__email-error`).classList.add('formulario__email-error-activo'); //si es positivo mandamos mensaje de error
						campos.emailNuevo = false; //y setea el valor en false para que no se pueda enviar el registro
						break; //aquí rompemos la iteración para que no haya conflicto ya que solo nos interesa hacer la iteración hasta donde un dato coincide, todo lo demás después de eso no nos interesa
					} else { //de lo contrario
						campos.emailNuevo = true; //seteamos el campo en true para poder mandar el registro
						document.querySelector(`#grupo_email .formulario__email-error`).classList.remove('formulario__email-error-activo'); //y quitamos el mensaje de error
					}
				}
			}

			break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
			break;
	}
}


//Esta es la función que se activa con el SwitchCase
const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {

		document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {

		document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

//Esto es una función especial para validar que ambas contraseñas sean iguales
const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('floatingPassword');
	const inputPassword2 = document.getElementById('floatingConfirm');

	if (inputPassword1.value !== inputPassword2.value) {
		document.querySelector(`#grupo_password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password2'] = false;
	} else {
		document.querySelector(`#grupo_password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password2'] = true;
	}
}


//con esto, activamos la validación en el Switch Case cada que; se levanta una tecla (Keyup) o se hace click fuera del input (blur)
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


// esto utiliza TODOS los inputs + el checkbox, aquí se usa el objeto Campos
formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	var terminos = document.getElementById('gridCheck');

	//Solamente cuando todos los campos estén en true deja enviar el registro
	if (campos.nombre && campos.password && campos.password2 && campos.email && campos.telefono && terminos.checked && campos.emailNuevo) {
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo'); //Se activa el mensaje de exito
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000); //Y despues de 5 segundos se quita gracias al setTimeout

		// var guardar = guardarUsuario();
		// fetch("https://artezapotecobackend-production.up.railway.app/user",{
		// 	method: "POST",
		// 	headers: {
		// 		'Content-Type': 'application/json'   // 'Content-Type': 'application/x-www-form-urlencoded',
		// 	},
		// 	body: JSON.stringify(guardar)
		// })
		// .then (response=>{
		// 	if(response.ok){
		// 		window.location.href = "./login.html";
		// 	}
		// })
		// .catch (e =>{

		// 	console.log("Conexion fallida"+e)
		// })

		
	} else { //De lo contrario
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo'); //Activa el mensaje de error
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo'); //y se quita después de 2 segundos
		}, 2000);

	}
});


//Esta parte es para crear los usuarios 

var nombreUsuario = document.getElementById("floatingName");
var telefonoUsuario = document.getElementById("floatingTel");
var emailUsuario = document.getElementById("floatingInput");
var passwordUsuario = document.getElementById("floatingPassword");

const botonEnviar = document.getElementById("boton");


//En este array se almacenarán los usuarios registrados
let usuariosRegistrados = [];


//Creamos nuestra clase usuario que nos servirá para instanciar los objetos
class usuario {

	//atributos
	name = "";
	phoneNumber = "";
	email = "";
	discount = 10;
	newCostumer = true;
	password = "";

	//constructor
	constructor(nombre, telefono, email, password) {
		this.name = nombre;
		this.phoneNumber = telefono;
		this.email = email;
		this.discount;
		this.newCostumer;
		this.password = password;
	}
}





//Esta función guarda el usuario
function guardarUsuario() {

	//Primero se instancia el objeto usuarioRegistrado utilizando los .value de cada elemento obtenido del HTML
	let usuarioRegistrado = new usuario(nombreUsuario.value, telefonoUsuario.value, emailUsuario.value, passwordUsuario.value)

	return usuarioRegistrado;

}



//Este EventListener en forma de funcion flecha hace que se ejecute la función guardarUsuario siempre y cuando todos los campos hayan sido llenados (estén en true), con el fin de evitar crear usuarios con atributos vacíos.
botonEnviar.addEventListener("click", e => {
	e.preventDefault

	const terminos2 = document.getElementById('gridCheck');
	if (campos.nombre && campos.password && campos.password2 && campos.email && campos.telefono && terminos2.checked && campos.emailNuevo) {

		var guardar = guardarUsuario();
		fetch("https://artezapotecobackend-production.up.railway.app/user",{
			method: "POST",
			headers: {
				'Content-Type': 'application/json'   // 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(guardar)
		})
		.then (response=>{
			if(response.ok){
				window.location.href = "./login.html";
			}else if (response.status === 409){
				document.querySelector(`#grupo_email .formulario__email-error`).classList.add('formulario__email-error-activo');
			}else{
				document.querySelector(`#grupo_password .formulario__input-error`).classList.add('formulario__input-error-activo');
			}
		})
		.catch (e =>{
			console.log("Conexion fallida"+e)
		})
		
	}

});