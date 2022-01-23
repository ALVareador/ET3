function comprobarRegistro() {

	if (comprobarDNI('txtdniusuario', 'errorFormatoDNI') && comprobarNombreParam("nombre_persona") && comprobarApellido() && comprobarFechaDeNacimiento() && comprobarDireccion() && comprobarTelefono() && comprobarEmail() && comprobarUser()) {
		encriptar("contrasena");
		generarSessionId();
		return true;
	} else {
		return false;
	}

}
function registrarUsuario() {

	var idSession = getCookie('sessionId');
	insertacampo(document.formularioRegistro, 'ID_SESSION', idSession);
	addActionControler(document.formularioRegistro, "registrar", "AUTH");
	var idioma = getCookie('lang');

	var formdata = $("#formularioRegistro").serialize();
	formdata = decodeURIComponent(formdata.replace(/%2F/g, "/"));
	var file = $("#foto_persona")[0].files[0];

	var datos = new FormData();
	datos.append("upload", file);
	datos.append("formulario", formdata);

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: datos,
		contentType: false,
		processData: false,

	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('add');
		}

		actualizaMensajesRespuestAjax(response.code);

		deleteActionController();
	});

}
