const formulario = document.getElementById('formContactanos');
const inputs = document.querySelectorAll('#formContactanos input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
    mensaje: /^[a-zA-ZÀ-ÿ\s0-9]{10,500}$/,
}

const campos = {
	nombre: false,
	email: false,
	telefono: false,
    mensaje: false,
}



const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "email":
			validarCampo(expresiones.email, e.target, 'email');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
        case "mensaje":
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
		break;
	}
}


// Esta función verifica campo por campo dado los parametros expresion, input y campo
const validarCampo = (expresion, input, campo) => { //la expresion refiere a que funcion de Regex validar, input se refiere a qué campo aplicarle la validacion, el campo hace el match con el ID del campo

	if(expresion.test(input.value)){ //Dependiendo de que input seleccione va a tomar dicho value y le aplica un test del Regex
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo'); //Si es correcto el parametro Regex(true) quita la clase formulario_input-error-activo del ID grupo + el valor de la plantilla literal
		
		campos[campo] = true; //Esto cambia el valor default "false" a true del atributo en cuestion del objeto campos+

	}else {
		
		document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');//Si es incorrecto el parametro Regex(false) agrega la clase formulario_input-error-activo del ID grupo + el valor de la plantilla literal
		campos[campo] = false; //Esto deja el valor default "false" del atributo en cuestion del objeto campos
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});


formulario.addEventListener('submit', (e) => {
	e.preventDefault();


/* Esta funcion lo que hace es validar que los 4 campos sean true para enviar el formulario, mostrar el mensaje de éxito, 
esperar 3 segundos y luego desaparecer ese mensaje. De lo contrario muestra el mensaje de error, se espera 2 segundos y lo quita.
*/
	if(campos.nombre && campos.mensaje && campos.email && campos.telefono ){
		formulario.reset();

		document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 3000);

	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 2000);
		
	}
});