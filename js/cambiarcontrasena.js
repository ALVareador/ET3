
//sacar usuario de la cookie
//buscar en usuario todos los datos del usuario con el que estamos logueados
//con esos datos los metemos en el formulario de cambio de contraseña
function comprobar() {
		encriptar("contrasenanueva");
} 

function cambiarcontrasena() {

	var idioma = getCookie('lang');
	var idSession = getCookie('sessionId');

	insertacampo(document.formulariocambiar, 'ID_SESSION', idSession);
	addActionControler(document.formulariocambiar, 'cambiar_contrasena', 'usuario');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formulariocambiar").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			$("#mensajeError").removeClass();
			$("#mensajeError").addClass(response.code);
			$("#mensajeError").append(response.code);
			$("#cerrar").attr('onclick', "cerrar('modal', '', '')");
			$("#imagenAviso").attr('src', "images/iconos_nuestros/cerrados/error.png");
			setLang(idioma);
			$("#modal").attr('style', 'display: block');
		}

		actualizaMensajesRespuestAjax(response.code);
		deleteActionController();
		setLang(idioma);
	});
}
