function registrarUsuario() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formularioLogin,'ID_SESSION', idSession);
   	addActionControler(document.formularioLogin, "add", "usuario");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formularioLogin").serialize(),  
	}).done(function( response ) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('add');
		}

		actualizaMensajesRespuestAjax(response.code);	
				
		deleteActionController();
	});		

}
