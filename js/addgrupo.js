function addgrupo() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formaddgrupo,'ID_SESSION', idSession);
   	addActionControler(document.formaddgrupo, "add", "grupo");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: urlPeticionesAjax,
	  	data: $("#formaddgrupo").serialize(),  
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

