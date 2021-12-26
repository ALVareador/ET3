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

		actualizaMensajesRespuestAjax(response.code);

		setLang(idioma);

		deleteActionController();
	});

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

//
// Funcion para modificar un formulario generico para editar un usuario
//
function showEditarUsuario(id_usuario, dni_usuario, usuario, id_grupo, borrado_usuario) {

	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:editUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#id_usuario").val(id_usuario);
	$("#dni_usuario").val(dni_usuario);
	$("#usuario").val(usuario);

	$("#contrasena").attr('type', 'hidden');	
	$("#contrasena").attr('disabled', true);
	$("#contrasena").attr('style', 'display:none');

	// rellenamos los onblur de los input que se validad
	$("#dni_usuario").attr('onblur', 'comprobarDni();');
	$("#usuario").attr('onblur', 'comprobarUser();');

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);
	// se deshabilita el id para que no pueda cambiarse
	$("#id_usuario").attr('disabled', true);
}

function comprobareditsubmit() {

	if (comprobarUser()) {
		return true;
	}
	else {
		return false;
	}
}

function showDetalleUsuario(id_usuario, dni_usuario, usuario, id_grupo, borrado_usuario) {

	$("#formgenericoUsuario").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divgenericoUsuario','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divgenericoUsuario').append(label);
	$('#divgenericoUsuario').attr('style', 'display: block');
	$('#divgenericoUsuario').attr('style', 'border: 1px solid black');

	crearformvisible('formgenericoUsuario', 'none');
	$('#formgenericoUsuario').attr('style', 'display: block');

	form = document.getElementById('formgenericoUsuario');

	label = "<label class='id_usuario'></label>";
	$("#formgenericoUsuario").append(label);
	insertacampovisible(form, 'blid_usuario', id_usuario);
	$("#blid_usuario").attr('disabled', true);
	$("#formgenericoUsuario").append('<br>');

	label = "<label class='dni_usuario'></label>";
	$("#formgenericoUsuario").append(label);
	insertacampovisible(form, 'bldni_usuario', dni_usuario);
	$("#bldni_usuario").attr('disabled', true);
	$("#formgenericoUsuario").append('<br>');

	label = "<label class='usuario'></label>";
	$("#formgenericoUsuario").append(label);
	insertacampovisible(form, 'blusuario', usuario);
	$("#blusuario").attr('disabled', true);
	$("#formgenericoUsuario").append('<br>');

	label = "<label class='id_grupo'></label>"+
			"<select name='id_grupo' id='id_grupo' ></select><br>"+
            "<label class='borrado_usuario'></label>"+
            "<select name='borrado_usuario' id='borrado_usuario' >"+
            "       <option value='0'>Si</option>"+
            "       <option value='1'>No</option>"+
            "</select><br>";

	$("#formgenericoUsuario").append(label);

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);
	
	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);

	$("#divgenericoUsuario").append(formgenericoUsuario);

	setLang('');

}

function showEliminarUsuario(id_usuario, dni_usuario, usuario,id_grupo, borrado_usuario) {

	$("#divformgenericoUsuario").attr('style', 'display: block');
	$("#formgenericoUsuario").attr('action', 'javascript:deleteUsuario();');
	$("#formgenericoUsuario").attr('onsubmit', '');

	$("#id_usuario").val(id_usuario);
	$("#dni_usuario").val(dni_usuario);
	$("#usuario").val(usuario);

	$("#contrasena").attr('type', 'hidden');	
	$("#contrasena").attr('disabled', true);
	$("#contrasena").attr('style', 'display:none');

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#id_usuario").attr('disabled', true);
	$("#dni_usuario").attr('disabled', true);
	$("#usuario").attr('disabled', true);
	$("#contrasena").attr('disabled', true);
	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);
}

function rellenaid_grupo(id_usuario) { 

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

	$("#id_usuario").attr('disabled', false);
	$("#dni_usuario").attr('disabled', false);
	$("#usuario").attr('disabled', false);
	$("#contrasena").attr('disabled', false);
	$("#id_grupo").attr('disabled', false);
	$("#borrado_usuario").attr('disabled', false);

	$("#id_usuario").val('');
	$("#dni_usuario").val('');
	$("#usuario").val('');
	$("#contrasena").val('');
	$("#id_grupo").val('');

	$("#contrasena").attr('type', 'password');
	$("#contrasena").attr('style', 'display:block');

	$("#id_usuario").attr('onblur', '');
	$("#dni_usuario").attr('onblur', '');
	$("#usuario").attr('onblur', '');
	$("#contrasena").attr('onblur', '');

	$("divformgenericoUsuario").attr('style', 'display: none');

}
