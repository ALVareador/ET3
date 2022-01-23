function addUsuario() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
	insertacampo(document.formgenericoUsuario, 'action', 'insertar');
	
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
		setLang(idioma);
		resetearformulariousuario();
		getLisUsuarios();
		deleteActionController();
		hasProbadoAReiniciarlo();
	});

}

function comprobarUsuario(){
	if(comprobarDNI("dni_usuario","errorFormatoDni") && comprobarNombreParam("labelusuario") && comprobarContraseña()){
		encriptar("contrasena");
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

	$("#tituloAccion").attr("class", "tituloAnadir");
	
	$("#dni_usuario").attr('onblur', 'comprobarDNI("dni_usuario","errorFormatoDni");');
	$("#labelusuario").attr('onblur', 'comprobarNombreParam("labelusuario");');
	$("#contrasena").attr('onblur', 'comprobarContraseña();');
	
	$("#iconoAcciones").attr('src', "./images/icons/addUser.png");
    setLang(getCookie("lang"));
}

function editUsuario() {

	var idSession = getCookie('sessionId');

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
		hasProbadoAReiniciarlo();
	});

}

//
// Funcion para modificar un formulario generico para editar un usuario
//
function showEditarUsuario(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {
	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:editUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', 'comprobarUsuario();');
	
	$("#tituloAccion").attr("class", "tituloEditar");
	//rellenamos los tipo text
	insertacampo(document.formgenericoUsuario,'id', id);
	$("#dni_usuario").val(dni_usuario);
	$("#labelusuario").val(usuario);
	

	$("#labelcontrasena").attr('style',"visibility: hidden;");
	$("#contrasena").attr('type', 'hidden');	
	$("#contrasena").attr('disabled', true);

	// rellenamos los onblur de los input que se validad
	$("#dni_usuario").attr('onblur', 'comprobarDNI("dni_usuario","errorFormatoDni");');
	$("#labelusuario").attr('onblur', 'comprobarNombreParam("labelusuario");');
	$("#contrasena").attr('onblur', 'comprobarContraseña();');

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#dni_usuario").attr('disabled', true);
	setLang(getCookie("lang"));
}

function detalleusuario() {

    var idioma = getCookie('lang');
    resetearformulariousuario();
    getLisUsuarios()
    setLang(idioma);
}

function showDetalleUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario) {

	$("#divformgenericoUsuario").attr('style', 'display:');
    $("#formgenericoUsuario").attr('action', 'javascript:detalleusuario();');
	
	$("#tituloAccion").attr("class", "tituloDetalle");

	$("#dni_usuario").val(dni_usuario);
	$("#labelusuario").val(usuario);
	
	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);
	
	$("#submitbuttom").attr('style', '');
    document.getElementById('submitbuttom').style.visibility = 'hidden';

	$("#dni_usuario").attr('disabled', true);
	$("#labelusuario").attr('disabled', true);
	$("#labelcontrasena").attr('style',"visibility: hidden;");
	$("#contrasena").attr('type', 'hidden');
	$("#contrasena").attr('disabled', true);
	$("#labelcontrasena").attr('style', 'display:none');

	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);

	setLang(getCookie("lang"));

}

function deleteUsuario() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericoUsuario, 'controlador', 'usuario');
	insertacampo(document.formgenericoUsuario, 'action', 'borrar');
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
			respuestaKOAjax('borrar');
		}
		actualizaMensajesRespuestAjax(response.code);

		setLang(idioma);

		deleteActionController();
	});

}

function showEliminarUsuario(id, dni_usuario, usuario, contrasena, id_grupo, borrado_usuario) {

	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:deleteUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', '');

	$("#tituloAccion").attr("class", "tituloEliminar");
	insertacampo(document.formgenericoUsuario,'id', id);
	$("#dni_usuario").val(dni_usuario);
	$("#labelusuario").val(usuario);
	$("#labelcontrasena").attr('style',"visibility: hidden;");
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

	setLang(getCookie("lang"));
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

function buscarUsuario() {

    var idioma = getCookie('lang');
    var idSession = getCookie('sessionId');
    addActionControler(document.formgenericoUsuario, 'search', 'usuario')
    insertacampo(document.formgenericoUsuario, 'ID_SESSION', idSession);

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
            $("#imagenAviso").attr('src', "images/iconos_oscar/cerrados/error.png");
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
}

function resetearformulariousuario(idformUsado) {

	$("formgenericoUsuario").attr('action', '');
	$("formgenericoUsuario").attr('onsubmit', '');

	$("#dni_usuario").val('');
	$("#labelusuario").val('');
	$("#contrasena").val('');
	$("#id_grupo").val('');
	$("#borrado_usuario").val('');

	$("#labelcontrasena").attr('style',"visibility: visible;");
	$("#contrasena").attr('type', 'password');
	$("#contrasena").attr('style', 'display:block');

	$("#dni_usuario").attr('onblur', '');
	$("#labelusuario").attr('onblur', '');
	$("#contrasena").attr('onblur', '');
	$("#id_grupo").attr('onblur', '');
	$("#borrado_usuario").attr('onblur', '');

	$("divformgenericoUsuario").attr('style', 'display: none');

	$("#dni_usuario").attr('disabled', false);
	$("#labelusuario").attr('disabled', false);
	$("#contrasena").attr('disabled', false);
	$("#id_grupo").attr('disabled', false);
	$("#borrado_usuario").attr('disabled', false);
	document.getElementById('submitbuttom').style.visibility = 'visible';
}