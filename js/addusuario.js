//*
// funcion addusuario, recibe los datos del formulario addusuario y los envia al back
//*
function addusuario() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formaddusuario,'ID_SESSION', idSession);
   	addActionControler(document.formaddusuario, "add", "usuario");

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
	  	url: urlPeticionesAjax,
	  	data: $("#formaddusuario").serialize(),  
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


