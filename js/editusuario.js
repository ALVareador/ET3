function addUsuario() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
	insertacampo(document.formgenericoUsuario, 'action', 'insertar');
	//insertacampo(document.formgenericoUsuario,'ID_SESSION', idSession); Solo para buscar
	console.log(document.formgenericoUsuario);
	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoUsuario").serialize(),
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

function showAddUsuario() {



	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:addUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

	// rellenamos los onblur de los input que se validad

	/*
	$("#idUsuario").attr('onblur', 'comprobarDNI();');
	$("#dni_usuario").attr('onblur', 'comprobarNumCuenta();');
	$("#descripcion_usuario").attr('onblur', 'comprobarCurriculum();');
	*/

	// se rellena los select

	// se deshabilita el id para que no pueda cambiarse
	//$("#idUsuario").attr('disabled', true);	
	//$("#txtnumcuentaresponsable").attr('disabled', false);	
	//$("#txtcurriculumresponsable").attr('disabled', false);	
}

function editUsuario() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoUsuario,'ID_SESSION', idSession);
	insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
	insertacampo(document.formgenericoUsuario, 'action', 'editar');

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoUsuario").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('edit');
		}
		console.log(response.resource);
		actualizaMensajesRespuestAjax(response.code);

		setLang(idioma);

		deleteActionController();
	});

}

//
// Funcion para modificar un formulario generico para editar un usuario
//
function showEditarUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario) {

	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:editUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#dni_usuario").val(dni_usuario);
	$("#labelusuario").val(usuario);

	$("#contrasena").attr('type', 'hidden');	
	$("#contrasena").attr('disabled', true);
	$("#labelcontrasena").attr('style', 'display:none');

	// rellenamos los onblur de los input que se validad
	$("#dni_usuario").attr('onblur', 'comprobarDni();');
	$("#labelusuario").attr('onblur', 'comprobarUser();');

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#dni_usuario").attr('disabled', true);
}

//*
// funcion deleteusuario, recibe los datos del formulario formdeleteusuario y los envia al back para borrarlo
//*
function deleteUsuario() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoUsuario,'ID_SESSION', idSession);
	insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
	insertacampo(document.formgenericoUsuario, 'action', 'borrar');

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericoUsuario").serialize(),
	}).done(function (response) {
		if (response.ok == true) {
			respuestaOKAjax();
		} else {
			respuestaKOAjax('borrar');
		}

		actualizaMensajesRespuestAjax(response.code);

		setLang(idioma);

		deleteActionController();
	});

}

function comprobareditsubmit() {

	if (comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function detalleusuario() {

    var idioma = getCookie('lang');
    resetearformulariopersona();
    GetLisUsuarios()
    setLang(idioma);
}

function showDetalleUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario) {

	$("#divformgenericoUsuario").attr('style', 'display:');
    $("#formgenericoUsuario").attr('action', 'javascript:detalleusuario();');
	
	$("#dni_usuario").val(dni_usuario);
	$("#labelusuario").val(usuario);
	
	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);
	
	$("#dni_usuario").attr('disabled', true);
	$("#labelusuario").attr('disabled', true);

	$("#contrasena").attr('type', 'hidden');
	$("#contrasena").attr('disabled', true);
	$("#labelcontrasena").attr('style', 'display:none');

	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);

	setLang('');

}

function showEliminarUsuario(id, dni_usuario, usuario,id_grupo, borrado_usuario) {

	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:deleteUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', '');

	$("#dni_usuario").val(dni_usuario);
	$("#labelusuario").val(usuario);

	$("#contrasena").attr('type', 'hidden');	
	$("#contrasena").attr('disabled', true);
	$("#contrasena").attr('style', 'display:none');

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#id").attr('disabled', true);
	$("#dni_usuario").attr('disabled', true);
	$("#labelusuario").attr('disabled', true);
	$("#contrasena").attr('disabled', true);
	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);
}

function rellenaid_grupo(id) { 

    var idSession = getCookie('sessionId');

	addActionControler(document.formgenericoUsuario, 'search', 'espacio')

    var idioma = getCookie('lang');

    $.ajax({
        method: "POST",
          url: "http://193.147.87.202/ET3_IU/noRest.php",
          data: $("#formgenericoUsuario").serialize(),
    }).done(function( response ) {
        if (response.ok == true) {
            // Rellenamos el selector.
            addOptions('id_grupo',response.resource,'id_grupo','nombre_grupo');

            //Pone como selected el argumento pasado como parámetro
            $("#id_grupo option[value='" + id_grupo + "']").attr("selected", true);

        } else {
            $("#mensajeError").removeClass();
            $("#mensajeError").addClass(response.code);
			$("#mensajeError").append(response.code);
            setLang(idioma);
            document.getElementById("modal").style.display = "block";
        }

        deleteActionController();
    });
}

function resetearformulariousuario(idformUsado) {

	$("idformUsado").attr('action', '');
	$("idformUsado").attr('onsubmit', '');

	$("#id").attr('disabled', false);
	$("#dni_usuario").attr('disabled', false);
	$("#labelusuario").attr('disabled', false);
	$("#contrasena").attr('disabled', false);
	$("#id_grupo").attr('disabled', false);
	$("#borrado_usuario").attr('disabled', false);

	$("#id").val('');
	$("#dni_usuario").val('');
	$("#labelusuario").val('');
	$("#contrasena").val('');
	$("#id_grupo").val('');

	$("#contrasena").attr('type', 'password');
	$("#contrasena").attr('style', 'display:block');

	$("#id").attr('onblur', '');
	$("#dni_usuario").attr('onblur', '');
	$("#labelusuario").attr('onblur', '');
	$("#contrasena").attr('onblur', '');

	$("divformgenericoUsuario").attr('style', 'display: none');

}
