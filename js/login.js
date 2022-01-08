/**Función que valida los datos antes de hacer el envío y encripta la password*/
function comprobarLogin() {

	if(comprobarUser() && comprobarPassword()) {
	encriptar("contrasena");
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
			let idElementoList = ["txtUsuario", "contrasena"];
			resetearFormulario("formularioLogin", idElementoList);
			setLang(idioma);
			document.getElementById("modal").style.display = "block";
		}

		deleteActionController();

	});

}

function recuperarcontrasena(){
    $("#divrecuperarcontrasena").attr('style', 'display:block');
}

function recuperar(){

	insertacampo(document.formulariorecuperar,'controlador', 'AUTH');
	insertacampo(document.formulariorecuperar,'action', 'recuperar_contrasena');

	var idioma = getCookie('lang');

	$.ajax({
	method: "POST",
	url: urlPeticionesAjax,
	data: $("#formulariorecuperar").serialize(), 
	}).done(function( response ) {
		if (response.ok == true) {
			console.log(response.resource);
			document.getElementById("contrasenarecuperada").innerHTML + response.resource;
		} else {
			$("#mensajeError").removeClass();
	    	$("#mensajeError").addClass(response.code);
	    	resetearformulariorecuperar();
        	setLang(idioma);
        	document.getElementById("modal").style.display = "block";
		}

	});
	console.log(formulariorecuperar); 
}

function resetearformulariorecuperar(){

	$("divrecuperarcontrasena").attr('style', 'display: none');
	$("email_persona").val('');
	$("usuario").val('');

}