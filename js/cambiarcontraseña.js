
//sacar usuario de la cookie
//buscar en usuario todos los datos del usuario con el que estamos logueados
//con esos datos los metemos en el formulario de cambio de contraseña

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
			$("#imagenAviso").attr('src', "images/icons/error.png");
			setLang(idioma);
			$("#modal").attr('style', 'display: block');
		}

		deleteActionController();
		setLang(idioma);
	});
}

function showBuscarCategoria() {

	// se resetea todo el formulario generico
	resetearformulariocategoria();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoCategoria").attr('style', 'display: block');
	$("#formgenericoCategoria").attr('action', 'javascript:buscarCategoria();');
	$("#formgenericoCategoria").attr('onsubmit', '');

	$("#tituloAccion").attr("class", "tituloBuscar");

	setLang(getCookie("lang"));
}