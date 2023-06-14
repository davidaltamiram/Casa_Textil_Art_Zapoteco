const formulario = document.getElementById('formContactanos');
const inputs = document.querySelectorAll('#formContactanos input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
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

const validarCampo = (expresion, input, campo) => {

    console.log("Estaa vivo");
	if(expresion.test(input.value)){
        document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		
		campos[campo] = true;
	}else {
		
		document.querySelector(`#grupo_${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}


inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
