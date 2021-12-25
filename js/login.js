/**Función que valida los datos antes de hacer el envío y encripta la password*/
function comprobarLogin() {

	if(comprobarUser() && comprobarPass()) {
	encriptar("txtPassword");
	generarSessionId();
	return true;
	} else {
	return false;

	}

}

/**Función para realizar la petición de login*/
function login() {

	addActionControler(document.formularioLogin, "login", "AUTH");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formularioLogin").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			window.location.href = "menu.html";
		} else {
			$("#mensajeError").removeClass();
			$("#mensajeError").addClass(response.code);
			let idElementoList = ["txtUsuario", "txtPassword"];
			resetearFormulario("formularioLogin", idElementoList);
			setLang(idioma);
			document.getElementById("modal").style.display = "block";
		}

		deleteActionController();

	});

}