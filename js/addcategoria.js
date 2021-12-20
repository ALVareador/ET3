function addcategoria() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formaddgrupo,'ID_SESSION', idSession);
   	addActionControler(document.formaddgrupo, "add", "categoria");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formaddcategoria").serialize(),  
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