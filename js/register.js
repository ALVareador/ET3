function comprobarRegistro() {

	if (comprobarDNI('txtdniusuario', 'errorFormatoDNI') && comprobarNombrePersona() && comprobarApellido() && comprobarFechaDeNacimiento() && comprobarDireccion() && comprobarTelefono() && comprobarEmail() && comprobarUser() && comprobarPasswordModificacion()) {
		encriptar("contrasena");
		generarSessionId();
		return true;
	} else {
		return false;
	}

}
function registrarUsuario() {

	var idSession = getCookie('sessionId');
	insertacampo(document.formularioRegistro, 'ID_SESSION', idSession);
	addActionControler(document.formularioRegistro, "registrar", "AUTH");
	console.log(document.formularioRegistro);
	var idioma = getCookie('lang');

	/*
	DEJO UNA MIERDA AQUI PARA CONCATENAR EL DNI DEL PIVE A SU FOTITO TE CUENTO EL ROLLO

	var element = document.GetElementById('fileupload1');
var file = element.files[0];
var blob = file.slice(0, file.size, 'image/png'); 
newFile = new File([blob], 'name.png', {type: 'image/png'});
*/
	var formdata = $("#formularioRegistro").serialize();
	formdata = decodeURIComponent(formdata.replace(/%2F/g, "/"));
	var file = $("#foto_persona")[0].files[0];
	console.log($("#foto_persona")[0].files[0]);
	console.log(file);

	var datos = new FormData();
	datos.append("upload", file);
	datos.append("formulario", formdata);

	console.log(document.getElementById("foto_persona").value);


	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: datos,
		contentType: false,
		processData: false,

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
