function addUsuario() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
	insertacampo(document.formgenericoUsuario, 'action', 'insertar');
	
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

function comprobarUsuario(){
	if(comprobarDNI("dni_usuario","errorFormatoDni") && comprobarNombreParam("labelusuario","errorFormatoDni") && comprobarPassword()){
		return true;
	}else{
		return false;
	}
}

function showAddUsuario() {



	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:addUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', 'comprobarUsuario();');

	//rellenamos los tipo text
	/*$("#txtidresponsable").val("1");
	$("#txtnumcuentaresponsable").val("1");
	$("#txtcurriculumresponsable").val("1");*/

	// rellenamos los onblur de los input que se validad

	$("#dni_usuario").attr('onblur', 'comprobarDNI("dni_usuario","errorFormatoDni");');
	$("#labelusuario").attr('onblur', 'comprobarNombreParam("labelusuario","errorFormatoDni");');
	$("#contrasena").attr('onblur', 'comprobarPassword();');
	
}

function editUsuario() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoUsuario,'ID_SESSION', idSession);
	insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
	insertacampo(document.formgenericoUsuario, 'action', 'editar');
	$("#dni_usuario").attr('disabled', false);
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

		actualizaMensajesRespuestAjax(response.code);
		resetearformulariousuario();
		getLisUsuarios();
		setLang(idioma);
		deleteActionController();
		//hasProbadoAReiniciarlo();
	});

}

//
// Funcion para modificar un formulario generico para editar un usuario
//
function showEditarUsuario(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {
	//console.log(id, dni_usuario, usuario, id_grupo, borrado_usuario);
	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:editUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', 'comprobarUsuario();');

	//rellenamos los tipo text
	insertacampo(document.formgenericoUsuario,'id', id);
	$("#dni_usuario").val(dni_usuario);
	$("#labelusuario").val(usuario);

	$("#contrasena").attr('type', 'hidden');	
	$("#contrasena").attr('disabled', true);
	$("#labelcontrasena").attr('style', 'display:none');

	// rellenamos los onblur de los input que se validad
	$("#dni_usuario").attr('onblur', 'comprobarDNI("dni_usuario","errorFormatoDni");');
	$("#labelusuario").attr('onblur', 'comprobarNombreParam("labelusuario","errorFormatoNombre");');
	$("#contrasena").attr('onblur', 'comprobarPassword();');

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#dni_usuario").attr('disabled', true);
}

function detalleusuario() {

    var idioma = getCookie('lang');
    resetearformulariousuario();
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

function deleteUsuario() {

	var idSession = getCookie('sessionId');

	//insertacampo(document.formgenericoUsuario,'ID_SESSION', idSession);
	insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
	insertacampo(document.formgenericoUsuario, 'action', 'borrar');
	$("#dni_usuario").attr('disabled', false);

	console.log(formgenericoUsuario);
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
		console.log(response.resource);
		actualizaMensajesRespuestAjax(response.code);

		setLang(idioma);

		deleteActionController();
	});

}

function showEliminarUsuario(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {

	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:deleteUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', '');

	insertacampo(document.formgenericoUsuario,'id', id);
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

	addActionControler(document.formgenericoUsuario, 'search', 'grupo')

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

function buscarUsuario() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');
    addActionControler(document.formgenericoUsuario, 'search', 'usuario')
    insertacampo(document.formgenericoUsuario, 'ID_SESSION', idSession);

    console.log(document.formgenericoUsuario);

    $.ajax({
        method: "POST",
        url: "http://193.147.87.202/ET3_IU/noRest.php",
        data: $("#formgenericoUsuario").serialize(),
    }).done(function(response) {
        if (response.ok == true) {
            $("#datosUsuarios").html("");
            nodos = document.getElementById("formgenericoUsuario").childNodes;
            for (var i = 0; i < nodos.length; i++) {
                var item = nodos[i];
                if (item.id != undefined) {
                    //  alert(item.id);
                }
            }
            //alert(nodos);
            for (var i = 0; i < response.resource.length; i++) {
                var tr = construyeFila(response.resource[i]);
                $("#datosUsuarios").append(tr);
            }

            setLang(idioma);
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

    });
}
/**
 * 
 */
function showBuscarUsuario() {

    // se resetea todo el formulario generico
    resetearformulariousuario();

    // se pone visible el formulario y se rellena el action y el onsubmit
    $("#divformgenericoUsuario").attr('style', 'display: block');
    $("#formgenericoUsuario").attr('action', 'javascript:buscarUsuario();');
    $("#formgenericoUsuario").attr('onsubmit', '');

    $("#tituloAccion").attr("class", "tituloBuscar");
    //Se pone el titulo de la acción buscar

    setLang(getCookie("lang"));
    // rellenamos los onblur de los input que se validad
    //$("#dni_persona").attr('onblur', '');
    //$("#nombre_persona").attr('onblur', 'comprobarNombrePersona();');
}