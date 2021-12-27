function registrarUsuario() {

	var idSession = getCookie('sessionId');
	console.log(document.formularioRegistro);
	insertacampo(document.formularioRegistro, 'ID_SESSION', idSession);
	addActionControler(document.formularioRegistro, "add", "usuario");
	console.log(document.formularioRegistro);
	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formularioRegistro").serialize(),
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
