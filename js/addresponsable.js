//*
// funcion addresponsable, recibe los datos del formulario addresponsble y los envia al back
//*
function addresponsable() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formaddresponsable,'ID_SESSION', idSession);
   	addActionControler(document.formaddresponsable, "add", "responsable");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: "http://193.147.87.202/ET3_IU/noRest.php",
	  	data: $("#formaddresponsable").serialize(),  
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