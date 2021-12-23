//*
// funcion addusuario, recibe los datos del formulario addusuario y los envia al back
//*
function editusuario() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericousuario, 'ID_SESSION', idSession);
	addActionControler(document.formgenericousuario, "edit", "usuario");

	$("#txtidUsuario").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericousuario").serialize(),
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
function deleteusuario() {

	var idSession = getCookie('sessionId');

	insertacampo(document.formgenericousuario, 'ID_SESSION', idSession);
	addActionControler(document.formgenericousuario, "delete", "usuario");

	$("#txtdniusuario").attr("disabled", false);

	var idioma = getCookie('lang');

	$.ajax({
		method: "POST",
		url: "http://193.147.87.202/ET3_IU/noRest.php",
		data: $("#formgenericousuario").serialize(),
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


function showEditarUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario) {

	// se resetea todo el formulario generico
	resetearformulariousuario();

	// se pone visible el formulario y se rellena el action y el onsubmit
	$("#divformgenericousuario").attr('style', 'display: block');
	$("#formgenericousuario").attr('action', 'javascript:editusuario();');
	$("#formgenericousuario").attr('onsubmit', 'comprobareditsubmit();');

	//rellenamos los tipo text
	$("#txtidUsuario").val(id);
	$("#txtdniusuario").val(dni_usuario);
	$("#txtUsuario").val(usuario);

	// rellenamos los onblur de los input que se validad
	$("#txtdniUsuario").attr('onblur', 'comprobarDNI();');
	$("#txtUsuario").attr('onblur', 'comprobarUser();');

	// la contraseña no se muestra ni se envia
	$("#txtPassword").attr('type', 'hidden');
	$("#txtPassword").attr('disabled', true);
	// label de contraseña ocultado
	$("#labelcontrasena").attr('style', 'display:none');

	// se rellena los select
	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	// se deshabilita el id para que no pueda cambiarse
	$("#txtidUsuario").attr('disabled', true);

}

function comprobareditsubmit() {

	if (comprobarUser()) {
		/*pass = document.getElementById("txtPassword").value;
		longitud = document.getElementById("txtPassword").value.length;
		if ((pass == null) || (longitud = 0)){
			return true;
		} 
		else {
			encriptar("txtPassword");
			return true;
		}*/
		return true;
	}
	else {
		return false;
	}
}

function showDetalleUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario) {

	//divdetalleusuario = document.createElement('div');
	//divdetalleusuario.id = 'divdetalleusuario';
	//document.body.appendChild(divdetalleusuario);

	$("#formdetalleusuario").remove();
	$("#botoncerrar").remove();

	label = "<div id='botoncerrar'><a onclick = \"cerrar('divdetalleusuario','','');\"><img src = './images/icons/close.png' width='50px'></a></div>";
	$('#divdetalleusuario').append(label);
	$('#divdetalleusuario').attr('style', 'display: block');
	$('#divdetalleusuario').attr('style', 'border: 1px solid black');

	crearformoculto('formdetalleusuario', 'none');
	$('#formdetalleusuario').attr('style', 'display: block');

	form = document.getElementById('formdetalleusuario');

	label = "<label class='id_usuario'></label>";
	$("#formdetalleusuario").append(label);
	insertacampovisible(form, 'id', id);
	$("#id").attr('disabled', true);
	$("#formdetalleusuario").append('<br>');

	label = "<label class='dni_usuario'></label>";
	$("#formdetalleusuario").append(label);
	insertacampovisible(form, 'txtdniusuario', dni_usuario);
	$("#txtdniusuario").attr('disabled', true);
	$("#formdetalleusuario").append('<br>');

	label = "<label class='usuario'></label>";
	$("#formdetalleusuario").append(label);
	insertacampovisible(form, 'txtusuario', dni_usuario);
	$("#txtusuario").attr('disabled', true);
	$("#formdetalleusuario").append('<br>');

	label = "<label class='id_grupo'></label>" +
		"<select name='id_grupo' id='id_grupo' ></select><br>" +
		"<label class='borrado_usuario'></label>" +
		"<select name='borrado_usuario' id='borrado_usuario' >" +
		"       <option value='0'>Si</option>" +
		"       <option value='1'>No</option>" +
		"</select><br>";
	$("#formdetalleusuario").append(label);

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);

	$("#divdetalleusuario").append(formdetalleusuario);

	setLang('');

}

function showEliminarUsuario(id, dni_usuario, usuario, id_grupo, borrado_usuario) {

	$("#divformgenericousuario").attr('style', 'display: block');
	$("#formgenericousuario").attr('action', 'javascript:deleteusuario();');
	$("#formgenericousuario").attr('onsubmit', '');

	$("#txtidUsuario").val(id);
	$("#txtdniusuario").val(dni_usuario);
	$("#txtUsuario").val(usuario);

	// la contraseña no se muestra ni se envia
	$("#txtPassword").attr('type', 'hidden');
	$("#txtPassword").attr('disabled', true);
	// label de contraseña ocultado
	$("#labelcontrasena").attr('style', 'display:none');

	deleteoptionsSelect("id_grupo");
	rellenaid_grupo(id_grupo, borrado_usuario);

	$("#txtidUsuario").attr('disabled', true);
	$("#txtdniusuario").attr('disabled', true);
	$("#txtPassword").attr('disabled', true);
	$("#txtUsuario").attr('disabled', true);
	$("#id_grupo").attr('disabled', true);
	$("#borrado_usuario").attr('disabled', true);


}

function resetearformulariousuario(idformUsado) {

	$("idformUsado").attr('action', '');
	$("idformUsado").attr('onsubmit', '');

	$("#txtidUsuario").attr('disabled', false);
	$("#txtdniusuario").attr('disabled', false);
	$("#txtPassword").attr('disabled', false);
	$("#txtUsuario").attr('disabled', false);
	$("#id_grupo").attr('disabled', false);
	$("#borrado_usuario").attr('disabled', false);

	$("#txtidUsuario").val('');
	$("#txtdniusuario").val('');
	$("#txtPassword").val('');
	$("#txtUsuario").val('');
	$("#id_grupo").val('');

	$("#txtPassword").attr('type', 'password');
	$("#labelcontrasena").attr('style', 'display:block');

	$("#txtidUsuario").attr('onblur', '');
	$("#txtdniusuario").attr('onblur', '');
	$("#txtPassword").attr('onblur', '');
	$("#txtUsuario").attr('onblur', '');

	$("divformgenericousuario").attr('style', 'display: none');

}
