/**Función que valida el usuario*/
function comprobarUser() {

	document.getElementById("txtUsuario").style.borderWidth = "2px";

	if (validaNoVacio("txtUsuario", "errorFormatoUser", "usuarioLogin") && comprobarLetrasNumeros("txtUsuario", 15, 3, "errorFormatoUser", "usuarioLogin")) {
		validacionOK("txtUsuario", "errorFormatoUser");
		return true;
	} else {
		validacionKO("txtUsuario", "errorFormatoUser");
		return false;
	}

}

/**Función que valida el responsable*/
function comprobarResponsable() {

	document.getElementById("txtdniresponsable").style.borderWidth = "2px";

	if (validaNoVacio("txtdniresponsable", "errorFormatoResponsable", "txtdniresponsable") && comprobarLetrasNumeros("txtdniresponsable", 15, 3, "errorFormatoResponsable", "txtdniresponsable")) {
		validacionOK("txtdniresponsable", "errorFormatoResponsable");
		return true;
	} else {
		validacionKO("txtdniresponsable", "errorFormatoResponsable");
		return false;
	}

}

/**Función que valida la contraseña*/
function comprobarPass() {

	document.getElementById("txtPassword").style.borderWidth = "2px";

	if (validaNoVacio("txtPassword", "errorFormatoPass", "passLogin") && comprobarLetrasNumeros("txtPassword", 16, 3, "errorFormatoPass", "passLogin")) {
		validacionOK("txtPassword", "errorFormatoPass");
		return true;
	} else {
		validacionKO("txtPassword", "errorFormatoPass");
		return false;
	}

}

/**Función que valida el dni*/
function comprobarDNI() {

	document.getElementById("txtdniusuario").style.borderWidth = "2px";

	if (validaNoVacio("txtdniUsuario", "errorFormatoUser", "dni_usuario") && validateDNI("txtdniUsuario", "errorFormatoUser", "dni_usuario")) {
		validacionOK("txtdniusuario", "errorFormatoUser");
		return true;
	} else {
		validacionKO("txtdnisuario", "errorFormatoUser");
		return false;
	}

}

/**Función que valida el dni*/
function comprobarDNIResponsable() {

	document.getElementById("txtdniresponsable").style.borderWidth = "2px";

	if (validaNoVacio("txtdniresponsable", "errorFormatoUser", "dni_responsable") && validateDNI("txtdniresponsable", "errorFormatoUser", "dni_responsable")) {
		validacionOK("txtdniresponsable", "errorFormatoUser");
		return true;
	} else {
		validacionKO("txtdniresponsable", "errorFormatoUser");
		return false;
	}

}

/**Función que valida si un campo está vacío*/
function validaNoVacio(idElemento, idElementoError, campo) {


	var codigo = "";

	var valor = document.getElementById(idElemento).value;
	var nombre = document.getElementById(idElemento).name;
	var longitud = document.getElementById(idElemento).value.length;

	if ((valor == null) || (longitud == 0)) {
		switch (campo) {
			case 'usuarioLogin':
				codigo = "02110";
				break;
			case 'passLogin':
				codigo = "02113"
				break;
			case 'nombreRegistro':
				codigo = "02116"
				break;
			case 'emailRegistro':
				codigo = "02119"
				break;
		}
		addCodeError(idElementoError, codigo);
		return false;
	} else {
		return true;
	}

}

// Comprueba si es un DNI correcto (entre 5 y 8 letras seguidas de la letra que corresponda).
// Acepta NIEs (Extranjeros con X, Y o Z al principio)

function validateDNI(dnivalue, idElementoError, campo) {

	var resultado = true;
	var codigo = '';
	var numero, let, letra;
	var expresion_regular_dni = /^[XYZ]?\d{5,8}[A-Z]$/;

	dni = document.getElementById(idElemento).value;
	dni = dni.toUpperCase();

	if (expresion_regular_dni.test(dni) === true) {
		numero = dni.substr(0, dni.length - 1);
		numero = numero.replace('X', 0);
		numero = numero.replace('Y', 1);
		numero = numero.replace('Z', 2);
		let = dni.substr(dni.length - 1, 1);
		numero = numero % 23;
		letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
		letra = letra.substring(numero, numero + 1);
		if (letra != let) {
			//alert('Dni erroneo, la letra del NIF no se corresponde');
			resultado = false;
			codigo = 'letraNIFError';
			addCodeError(idElementoError, codigo);
		} else {
			//alert('Dni correcto');
			resultado = true;
		}
	} else {
		//alert('Dni erroneo, formato no válido');
		resultado = false;
		codigo = 'formatoNIFError';
		addCodeError(idElementoError, codigo);
	}
	return resultado;
}


function comprobarLetrasNumeros(idElemento, sizeMax, sizeMin, idElementoError, campo) {

	var codigo = "";

	var valor = document.getElementById(idElemento).value;
	var nombre = document.getElementById(idElemento).name;
	var longitud = document.getElementById(idElemento).value.length;

	if (longitud > sizeMax) {
		switch (campo) {
			case 'usuarioLogin':
				codigo = "02111";
				break;
			case 'passLogin':
				codigo = "02114"
				break;
		}
		addCodeError(idElementoError, codigo);
		return false;
	} else if (longitud < sizeMin) {
		switch (campo) {
			case 'usuarioLogin':
				codigo = "02110";
				break;
			case 'passLogin':
				codigo = "02113"
				break;
		}
		addCodeError(idElementoError, codigo);
		return false;
	}

	var patron = /^[a-zA-Z0-9\u00f1\u00d1]+$/;

	if (!patron.test(valor)) {
		switch (campo) {
			case 'usuarioLogin':
				codigo = "02112";
				break;
			case 'passLogin':
				codigo = "02115"
				break;
		}
		addCodeError(idElementoError, codigo);
		return false;
	}

	return true;

}

/**Función para encriptar la pass en md5*/
function encriptar(idElemento) {

	document.getElementById(idElemento).value = hex_md5(document.getElementById(idElemento).value);
	return true;

}

/**Función que no muestra mensaje de error y colorea el borde del input del formulario de verde*/
function validacionOK(idElemento, idElementoError) {

	document.getElementById(idElementoError).style.display = "none";
	document.getElementById(idElemento).style.borderColor = "#00e600";

}

/**Función que muestra el mensaje de error y colorea el borde del input del formulario de rojo*/
function validacionKO(idElemento, idElementoError) {

	document.getElementById(idElementoError).setAttribute('style', "");
	document.getElementById(idElemento).style.borderColor = "#ff0000";

}

/**Función crea el formulario con los campos de action y controlador*/
function validaAutenticado() {

	crearformoculto('formularioAutenticacion', 'javascript:estaAutenticado()');

	addActionControler(document.formularioAutenticacion, "auth", "AUTH");

	document.formularioAutenticacion.submit();

}

/**Función para realizar la petición de validar si el usuario está autenticado*/
function estaAutenticado() {

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');

	if (idSession == null) {
		errorAutenticado("02109", idioma);
	} else {

		insertacampo(document.formularioAutenticacion, 'ID_SESSION', idSession);

		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/ET3_IU/noRest.php",
			data: $("#formularioAutenticacion").serialize(),
		}).done(function (response) {
			if (response.ok == true) {
				document.getElementById("usuario").innerHTML = response.resource[0].LOGIN_USUARIO;
			} else {
				errorAutenticado(response.code, idioma);
			}

			deleteActionController();
		});
	}

}

/*Función que muestra el error de acceso por no estar autenticado**/
function errorAutenticado(codigoResponse, idioma) {
	$("#mensajeError").removeClass();
	$("#mensajeError").addClass(codigoResponse);
	$("#cerrar").attr('onclick', "cerrar('modal', 'login.html', '')");
	$("#imagenAviso").attr('src', "images/icons/prohibido.png");
	setLang(idioma);
	document.getElementById("modal").style.display = "block";
}

/**Función crea el formulario con los campos de action y controlador*/

function desconectar() {

	crearformoculto('formularioDesconectar', 'javascript:desconecta()');

	addActionControler(document.formularioDesconectar, "disconect", "AUTH");

	document.formularioDesconectar.submit();

}

/**Función para realizar la petición para desconectar al usuario*/
function desconecta() {

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');

	if (idSession == null) {
		errorAutenticado("02109", idioma);
	} else {

		insertacampo(document.formularioDesconectar, 'ID_SESSION', idSession);

		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/ET3_IU/noRest.php",
			data: $("#formularioDesconectar").serialize(),
		}).done(function (response) {
			if (response.ok == true) {
				window.location.href = 'login.html';
			}
		});
	}

}



/**Función para añadir los mensajes de error*/
function addCodeError(idElementoError, codigo) {

	var idioma = getCookie('lang');

	$("#" + idElementoError).removeClass();
	$("#" + idElementoError).addClass(codigo);

	setLang(idioma);

}

/**Función que cierra la ventana modal*/
function cerrar(idElemento, accion, operacion) {

	var metodoEjecutar = operacion;

	document.getElementById(idElemento).style.display = "none";

	if (accion != '' && accion != 'add' && accion != 'edit' && accion != 'delete' && accion != 'detail') {
		window.location.href = accion;
	}

	if (operacion != '') {
		metodoEjecutar();
	}

	//eliminarAtributos();

	if (accion != 'add' && accion != 'edit' && accion != 'delete' && accion != 'detail') {
		//eliminarContenidoSelect();
	} else {
		let campos = ["txtNombre", "txtEmail", "txtUsuario", "txtPassword", "admin", "activo"];
		habilitaCampos(campos);
		resetearFormulario("formularioGenerico", campos);
	}

}


/**Función que generar un sessionId*/
function generarSessionId() {

	var ahora = new Date();
	var sessionId = ahora.getTime();

	setCookie('sessionId', sessionId, 1);

	insertacampo(document.formularioLogin, 'ID_SESSION', sessionId);
}

//*
// funcion rellenaid_grupo, solicita datos de grupo al back para darselos a escoger al usuario en un select
//*
function rellenaid_grupo(id, activo) {

	var idSession = getCookie('sessionId');

	crearformoculto("formularioobtenergrupo", "");

	insertacampo(document.formularioobtenergrupo, 'ID_SESSION', idSession);
	insertacampo(document.formularioobtenergrupo, 'controlador', 'grupo');
	insertacampo(document.formularioobtenergrupo, 'action', 'buscar');

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formularioobtenergrupo").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			addOptions('id_grupo', response.resource);
			$("#id_grupo option[value='" + id + "'").attr("selected", true);
			$("#borrado_usuario option[value='" + activo + "'").attr("selected", true);
		} else {
			$("#mensajeError").removeClass();
			$("#mensajeError").addClass(response.code);
			setLang(idioma);
			document.getElementById("modal").style.display = "block";
		}

		deleteActionController();
	});
}

/**Función que valida la el numero de cuenta*/
function comprobarNumCuenta() {

	document.getElementById("txtnumcuentaresponsable").style.borderWidth = "2px";

	if (validaNoVacio("txtnumcuentaresponsable", "errorFormatoPass", "numCuenta_responsable") && comprobarLetrasNumeros("txtnumcuentaresponsable", 24, 24, "errorFormatoPass", "numCuenta_responsable")) {
		validacionOK("txtnumcuentaresponsable", "errorFormatoPass");
		return true;
	} else {
		validacionKO("txtnumcuentaresponsable", "errorFormatoPass");
		return false;
	}
}

/**Función que valida la el numero de cuenta*/
function comprobarCurriculum() {

	document.getElementById("txtcurriculumresponsable").style.borderWidth = "2px";

	if (validaNoVacio("txtcurriculumresponsable", "errorFormatoPass", "curriculum_responsable") && comprobarLetrasNumeros("txtcurriculumresponsable", 200, 0, "errorFormatoPass", "curriculum_responsable")) {
		validacionOK("txtcurriculumresponsable", "errorFormatoPass");
		return true;
	} else {
		validacionKO("txtcurriculumresponsable", "errorFormatoPass");
		return false;
	}
}

function comprobarNombrePersona() {

	document.getElementById("nombre_persona").style.borderWidth = "2px";

	if (validaNoVacio("nombre_persona", "errorFormatoPass", "nombre_persona") && comprobarLetrasNumeros("nombre_persona", 45, 0, "errorFormatoPass", "nombre_persona")) {
		validacionOK("nombre_persona", "errorFormatoPass");
		return true;
	} else {
		validacionKO("nombre_persona", "errorFormatoPass");
		return false;
	}
}

function sololetrasyespacio(idElemento, idElementoError, campo) {
	var valor = document.getElementById(idElemento).value;
	var patron = /^[A-Z]+\s$/i;

	if (!patron.test(valor)) {
		switch (campo) {
			case 'usuarioLogin':
				codigo = "02112";
				break;
			case 'passLogin':
				codigo = "02115"
				break;
		}
		addCodeError(idElementoError, codigo);
		return false;
	}

}

function comprobarApellido() {
	document.getElementById("apellidos_persona").style.borderWidth = "2px";

	if (validaNoVacio("apellidos_persona", "errorFormatoApll", "apellidos_persona") && comprobarLetrasNumeros("apellidos_persona", 100, 0, "errorFormatoApll", "apellidos_persona")) {
		validacionOK("apellidos_persona", "errorFormatoApll");
		return true;
	} else {
		validacionKO("apellidos_persona", "errorFormatoApll");
		return false;
	}
}

function comprobarDireccion() {
	document.getElementById("direccion_persona").style.borderWidth = "2px";

	if (validaNoVacio("direccion_persona", "errorFormatoApll", "apelliddireccion_personaos_persona") && comprobarLetrasNumeros("direccion_persona", 200, 0, "errorFormatoApll", "direccion_persona")) {
		validacionOK("direccion_persona", "errorFormatoApll");
		return true;
	} else {
		validacionKO("direccion_persona", "errorFormatoApll");
		return false;
	}
}



function comprobarNombreGrupo() {

	document.getElementById("nombre_grupo").style.borderWidth = "2px";

	if (validaNoVacio("nombre_grupo", "errorFormatoNombre", "nombre_grupo") && comprobarLetrasNumeros("nombre_grupo", 45, 3, "errorFormatoNombre", "nombre_grupo")) {
		validacionOK("nombre_grupo", "errorFormatoNombre");
		return true;
	} else {
		validacionKO("nombre_grupo", "errorFormatoNombre");
		return false;
	}
}

function comprobarNombreCategoria() {

	document.getElementById("nombre_categoria").style.borderWidth = "2px";

	if (validaNoVacio("nombre_categoria", "errorFormatoNombre", "nombre_categoria") && comprobarLetrasNumeros("nombre_categoria", 45, 3, "errorFormatoNombre", "nombre_categoria")) {
		validacionOK("nombre_categoria", "errorFormatoNombre");
		return true;
	} else {
		validacionKO("nombre_categoria", "errorFormatoNombre");
		return false;
	}
}

function comprobarNombreEspacio() {

	document.getElementById("nombre_persona").style.borderWidth = "2px";
	document.getElementById("nombre_espacio").style.borderWidth = "2px";

	if (validaNoVacio("nombre_persona", "errorFormatoPass", "nombre_persona") && comprobarLetrasNumeros("nombre_persona", 45, 0, "errorFormatoPass", "nombre_persona")) {
		validacionOK("nombre_persona", "errorFormatoPass");
	}
	if (validaNoVacio("nombre_espacio", "errorFormatoNombre", "nombre_espacio") && comprobarLetrasNumeros("nombre_espacio", 45, 3, "errorFormatoNombre", "nombre_espacio")) {
		validacionOK("nombre_espacio", "errorFormatoNombre");
		return true;
	} else {
		validacionKO("nombre_persona", "errorFormatoPass");
		validacionKO("nombre_espacio", "errorFormatoNombre");
		return false;
	}
}

function comprobarDescrGrupo() {

	document.getElementById("descripcion_grupo").style.borderWidth = "2px";

	if (validaNoVacio("descripcion_grupo", "errorFormatoDescr", "descripcion_grupo") && comprobarLetrasNumeros("descripcion_grupo", 200, 20, "errorFormatoDescr", "descripcion_grupo")) {
		validacionOK("descripcion_grupo", "errorFormatoDescr");
		return true;
	} else {
		validacionKO("descripcion_grupo", "errorFormatoDescr");
		return false;
	}
}

function comprobarDescrCategoria() {

	document.getElementById("descripcion_categoria").style.borderWidth = "2px";

	if (validaNoVacio("descripcion_categoria", "errorFormatoDescr", "descripcion_categoria") && comprobarLetrasNumeros("descripcion_categoria", 200, 20, "errorFormatoDescr", "descripcion_categoria")) {
		validacionOK("descripcion_categoria", "errorFormatoDescr");
		return true;
	} else {
		validacionKO("descripcion_categoria", "errorFormatoDescr");
		return false;
	}
}

function comprobarDescrEspacio() {

	document.getElementById("descripcion_espacio").style.borderWidth = "2px";

	if (validaNoVacio("descripcion_espacio", "errorFormatoDescr", "descripcion_espacio") && comprobarLetrasNumeros("descripcion_espacio", 200, 20, "errorFormatoDescr", "descripcion_espacio")) {
		validacionOK("descripcion_espacio", "errorFormatoDescr");
		return true;
	} else {
		validacionKO("descripcion_espacio", "errorFormatoDescr");
		return false;
	}
}

//Añade al div que se indique a traves de la ID, el mensaje especificado con el tamaño de letra y color especificado
//IMPORTANTE:El tamaño debe pasar como numero y NO como string
function showError(idError, tamañoLetra, colorTexto, mensaje) {
	var divError = document.getElementById(idError);
	divError.style.height = tamañoLetra + 20 + "px";
	divError.style.fontSize = tamañoLetra + "px";
	divError.style.color = colorTexto + "";
	divError.innerHTML = mensaje + "";
}


function resetValidacion(idElemento, colorOriginal, idError) {

	document.getElementById(idElemento).style.borderColor = colorOriginal + "";

	showError(idError, -20, '', "");
}

function asProbadoAReiniciarlo(){
	location.reload();
}

